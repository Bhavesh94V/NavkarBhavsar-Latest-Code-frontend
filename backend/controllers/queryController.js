// const Query = require('../models/Query');
// const sendEmail = require('../config/mailer');
// const addToSheet = require('../utils/googleSheet'); // ✅ Import Google Sheets util

// exports.submitQuery = async (req, res) => {
//     try {
//         const { name, city, email, mobile, subject, query, ...otherFields } = req.body;

//         // 1. Validate incoming request data
//         if (!name || !city || !email || !mobile || !subject || !query) {
//             return res.status(400).json({ success: false, message: 'Missing required fields' });
//         }
//         if (!/\S+@\S+\.\S+/.test(email)) {
//             return res.status(400).json({ success: false, message: 'Invalid email format' });
//         }

//         // 2. Insert data into MongoDB
//         const newQuery = new Query({
//             name, city, email, mobile, subject, query, ...otherFields
//         });
//         await newQuery.save();

//         // 3. Add data to Google Sheets (Tab: Query)
//         await addToSheet("Query", [
//             name,
//             otherFields.designation || "N/A",
//             otherFields.organization || "N/A",
//             otherFields.officeAddress || "N/A",
//             city,
//             email,
//             otherFields.telephone || "N/A",
//             mobile,
//             otherFields.updates === "yes" ? "Yes" : "No",
//             subject,
//             query,
//             new Date().toLocaleString()
//         ]);

//         // 4. Send email notification
//         const emailHtml = `
//             <h1>New Query Submission</h1>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Designation:</strong> ${otherFields.designation || 'N/A'}</p>
//             <p><strong>Organization:</strong> ${otherFields.organization || 'N/A'}</p>
//             <p><strong>Office Address:</strong> ${otherFields.officeAddress || 'N/A'}</p>
//             <p><strong>City:</strong> ${city}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Telephone:</strong> ${otherFields.telephone || 'N/A'}</p>
//             <p><strong>Mobile:</strong> ${mobile}</p>
//             <p><strong>Receive Updates:</strong> ${otherFields.updates === 'yes' ? 'Yes' : 'No'}</p>
//             <p><strong>Subject:</strong> ${subject}</p>
//             <p><strong>Query:</strong> ${query}</p>
//             <p>Submitted on: ${new Date().toLocaleString()}</p>
//         `;

//         await sendEmail({
//             to: process.env.EMAIL_USER,
//             subject: `New Query: ${subject} from ${name}`,
//             html: emailHtml,
//         });

//         // 5. Return success response
//         res.status(200).json({ success: true, message: 'Form submitted successfully' });

//     } catch (error) {
//         console.error('❌ Query form submission error:', error);
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// };








// backend/controllers/queryController.js
const Query = require('../models/Query');
const sendEmail = require('../config/mailer');
const addToSheet = require('../utils/googleSheet'); // ✅ Google Sheets integration

exports.submitQuery = async (req, res) => {
    try {
        const { name, city, email, mobile, subject, query, ...otherFields } = req.body;

        // 1️⃣ Validate required fields
        if (!name || !city || !email || !mobile || !subject || !query) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return res.status(400).json({ success: false, message: 'Invalid email format' });
        }

        // 2️⃣ Save to MongoDB
        const newQuery = new Query({
            name,
            city,
            email,
            mobile,
            subject,
            query,
            ...otherFields
        });

        const savedQuery = await newQuery.save();
        console.log("[v0][Query] Saved to Mongo with _id:", savedQuery?._id?.toString());

        // 3️⃣ Add to Google Sheet (Tab: Query)
        await addToSheet("Query", [
            name,
            otherFields.designation || "N/A",
            otherFields.organization || "N/A",
            otherFields.officeAddress || "N/A",
            city,
            email,
            otherFields.telephone || "N/A",
            mobile,
            otherFields.updates === "yes" ? "Yes" : "No",
            subject,
            query,
            new Date().toLocaleString()
        ]);

        // 4️⃣ Prepare email HTML
        const emailHtml = `
            <h1>New Query Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Designation:</strong> ${otherFields.designation || 'N/A'}</p>
            <p><strong>Organization:</strong> ${otherFields.organization || 'N/A'}</p>
            <p><strong>Office Address:</strong> ${otherFields.officeAddress || 'N/A'}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telephone:</strong> ${otherFields.telephone || 'N/A'}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Receive Updates:</strong> ${otherFields.updates === 'yes' ? 'Yes' : 'No'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Query:</strong> ${query}</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
        `;

        // 5️⃣ Send email notification
        const emailResult = await sendEmail({
            to: process.env.EMAIL_USER,
            subject: `New Query: ${subject} from ${name}`,
            html: emailHtml,
        });

        if (!emailResult.success) {
            console.error("[v0][Query] Email send failed:", emailResult.error);
        } else {
            console.log("[v0][Query] Email sent successfully");
        }

        // 6️⃣ Return success
        res.status(200).json({ success: true, message: 'Form submitted successfully' });

    } catch (error) {
        console.error('❌ Query form submission error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
