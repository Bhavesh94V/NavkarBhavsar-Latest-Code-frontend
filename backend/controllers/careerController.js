// backend/controllers/careerController.js
const Career = require("../models/Career")
const sendEmail = require("../config/mailer")
const addToSheet = require("../utils/googleSheet")

exports.submitCareer = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            mobileNo,
            gender,
            position,
            dateOfBirth,
            qualification,
            portfolio,
            lastCompany,
            experienceYear,
            experienceMonth,
            reference,
        } = req.body

        if (!firstName || !lastName || !email || !mobileNo || !gender || !dateOfBirth) {
            return res.status(400).json({ success: false, message: "Missing required fields" })
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format" })
        }

        const resumeFile = req.file || null
        console.log("[DEBUG] Uploaded file object:", resumeFile)

        const career = new Career({
            firstName,
            lastName,
            email,
            mobileNo,
            gender,
            position,
            dateOfBirth,
            qualification,
            portfolio,
            lastCompany,
            experienceYear,
            experienceMonth,
            reference,
            resume: resumeFile
                ? {
                    originalName: resumeFile.originalname,
                    mimeType: resumeFile.mimetype,
                    size: resumeFile.size,
                }
                : undefined,
        })

        console.log("[v0][Career] Mongoose readyState:", require("mongoose").connection.readyState)
        console.log("[v0][Career] Attempting save with payload summary:", {
            firstName,
            lastName,
            email,
            mobileNo,
            gender,
            position,
        })

        const saved = await career.save()
        console.log("[v0][Career] Saved to Mongo with _id:", saved?._id?.toString())

        const emailHtml = `
  <h1>New Career Application</h1>
  <p><strong>Name:</strong> ${firstName} ${lastName}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Mobile:</strong> ${mobileNo}</p>
  <p><strong>Gender:</strong> ${gender}</p>
  <p><strong>Position:</strong> ${position || "N/A"}</p>
  <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
  <p><strong>Qualification:</strong> ${qualification || "N/A"}</p>
  <p><strong>Portfolio:</strong> ${portfolio || "N/A"}</p>
  <p><strong>Last Company:</strong> ${lastCompany || "N/A"}</p>
  <p><strong>Experience:</strong> ${experienceYear || "0"} years ${experienceMonth || "0"} months</p>
  <p><strong>Reference/Comments:</strong> ${reference || "N/A"}</p>
  <p>Submitted on: ${new Date().toLocaleString()}</p>
`

        const attachments = resumeFile
            ? [
                {
                    filename: resumeFile.originalname,
                    content: resumeFile.buffer,
                    mimeType: resumeFile.mimetype,
                },
            ]
            : []
        
        console.log("[DEBUG] Attachments array:", attachments)
        
        const emailResult = await sendEmail({
            to: process.env.GMAIL_USER,
            subject: `New Career Application from ${firstName} ${lastName}`,
            html: emailHtml,
            attachments,
        });

        if (!emailResult.success) {
            console.error("[v0][Career] Email send failed:", emailResult.error)
        }

        // ✅ Add to Google Sheet (Career tab)
        await addToSheet("Career", [
            firstName,
            lastName,
            email,
            mobileNo,
            gender,
            position || "N/A",
            dateOfBirth,
            qualification || "N/A",
            portfolio || "N/A",
            lastCompany || "N/A",
            experienceYear || "0",
            experienceMonth || "0",
            reference || "N/A",
            new Date().toLocaleString(),
        ])

        return res.status(200).json({ success: true, message: "Application submitted successfully" })
    } catch (error) {
        console.error("Career submission error:", error)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}
