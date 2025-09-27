
// // backend/config/mailer.js
// const nodemailer = require("nodemailer");
// const { google } = require("googleapis");

// // Google OAuth2 setup
// const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
// const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
// const REDIRECT_URI = "https://developers.google.com/oauthplayground";
// const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
// const SENDER_EMAIL = process.env.GMAIL_USER;

// const oAuth2Client = new google.auth.OAuth2(
//     CLIENT_ID,
//     CLIENT_SECRET,
//     REDIRECT_URI
// );

// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// const sendEmail = async ({ to, subject, html, attachments }) => {
//     try {
//         // Automatically get new access token if expired
//         const accessToken = await oAuth2Client.getAccessToken();

//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 type: "OAuth2",
//                 user: SENDER_EMAIL,
//                 clientId: CLIENT_ID,
//                 clientSecret: CLIENT_SECRET,
//                 refreshToken: REFRESH_TOKEN,
//                 accessToken: accessToken.token,
//             },
//         });

//         await transporter.sendMail({
//             from: `"Form Submission" <${SENDER_EMAIL}>`,
//             to,
//             subject,
//             html,
//             attachments,
//         });

//         console.log("Email sent successfully");
//         return { success: true };
//     } catch (error) {
//         console.error("Error sending email:", error);
//         return { success: false, error };
//     }
// };

// module.exports = sendEmail;



// backend/config/mailer.js
const { google } = require("googleapis");

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const SENDER_EMAIL = process.env.GMAIL_USER;

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendEmail = async ({ to, subject, html }) => {
    try {
        const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

        // Gmail API raw email format
        const rawMessage = Buffer.from(
            `From: Navkar Bhavsar & Co. <${SENDER_EMAIL}>\r\n` +
            `To: ${to}\r\n` +
            `Subject: ${subject}\r\n` +
            "MIME-Version: 1.0\r\n" +
            "Content-Type: text/html; charset=UTF-8\r\n\r\n" +
            `${html}`
        )
            .toString("base64")
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=+$/, ""); // remove padding

        const res = await gmail.users.messages.send({
            userId: "me",
            requestBody: { raw: rawMessage },
        });

        console.log("✅ Email sent via Gmail API:", res.data.id);
        return { success: true };
    } catch (error) {
        console.error("❌ Gmail API send error:", error);
        return { success: false, error };
    }
};

module.exports = sendEmail;
