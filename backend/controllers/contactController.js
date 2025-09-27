// backend/controllers/contactController.js
const Contact = require("../models/Contact");
const sendEmail = require("../config/mailer"); // OAuth2 compatible mailer
const addToSheet = require("../utils/googleSheet");

exports.submitContact = async (req, res) => {
    try {
        const { name, email, phone, message, ...otherFields } = req.body;

        // ✅ Validate required fields
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // ✅ Validate email format
        if (!/\S+@\S+\.\S+/.test(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        // ✅ Save to MongoDB
        const newContact = new Contact({ name, email, phone, message, ...otherFields });
        console.log("[v0][Contact] Mongoose readyState:", require("mongoose").connection.readyState);
        console.log("[v0][Contact] Attempting save with payload summary:", {
            name,
            email,
            phone,
            company: otherFields.company,
            service: otherFields.service,
        });

        const saved = await newContact.save();
        console.log("[v0][Contact] Saved to Mongo with _id:", saved?._id?.toString());

        // ✅ Prepare email HTML
        const emailHtml = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${otherFields.company || "N/A"}</p>
      <p><strong>Service Required:</strong> ${otherFields.service || "N/A"}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p>Submitted on: ${new Date().toLocaleString()}</p>
    `;

        // ✅ Send email via OAuth2 mailer
        const emailResult = await sendEmail({
            to: process.env.GMAIL_USER, // Your Gmail
            subject: `New Contact from ${name}`,
            html: emailHtml,
        });

        if (!emailResult.success) {
            console.error("[v0][Contact] Email send failed:", emailResult.error);
        } else {
            console.log("[v0][Contact] Email sent successfully");
        }

        // ✅ Add to Google Sheet (Contact tab)
        await addToSheet("Contact", [
            name,
            email,
            phone,
            otherFields.company || "N/A",
            otherFields.service || "N/A",
            message,
            new Date().toLocaleString(),
        ]);

        res.status(200).json({ success: true, message: "Form submitted successfully" });
    } catch (error) {
        console.error("[v0][Contact] Contact form submission error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
