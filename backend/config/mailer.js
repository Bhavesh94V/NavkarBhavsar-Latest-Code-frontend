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

const sendEmail = async ({ to, subject, html, attachments = [] }) => {
    try {
        const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
        let boundary = "__MAIL_BOUNDARY__";

        let mimeParts = [
            `From: Navkar Bhavsar & Co. <${SENDER_EMAIL}>`,
            `To: ${to}`,
            `Subject: ${subject}`,
            "MIME-Version: 1.0",
            `Content-Type: multipart/mixed; boundary="${boundary}"`,
            "",
            `--${boundary}`,
            "Content-Type: text/html; charset=UTF-8",
            "Content-Transfer-Encoding: 7bit",
            "",
            html,
            ""
        ];

        attachments.forEach((att) => {
            mimeParts.push(
                `--${boundary}`,
                `Content-Type: ${att.mimeType || "application/octet-stream"}; name="${att.filename}"`,
                "Content-Transfer-Encoding: base64",
                `Content-Disposition: attachment; filename="${att.filename}"`,
                "",
                Buffer.from(att.content).toString("base64"),
                ""
            );
        });

        mimeParts.push(`--${boundary}--`);

        const rawMessage = Buffer.from(mimeParts.join("\r\n"))
            .toString("base64")
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=+$/, "");

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
