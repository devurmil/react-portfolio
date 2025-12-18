import { google } from "googleapis";
import dns from "dns/promises";

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const hasMX = async (email) => {
  const domain = email.split("@")[1];
  const records = await dns.resolveMx(domain);
  return records && records.length > 0;
};

let lastSent = 0;
let sentCount = 0;

export default async function handler(req, res) {
  const now = Date.now();

    if (now - lastSent > 60_000) {
    sentCount = 0;
    lastSent = now;
  }

  if (sentCount >= 2) {
    return res.status(429).json({ error: "Rate limit exceeded. Try again later." });
  }

  sentCount++;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  try {
    if (!(await hasMX(email))) {
      return res.status(400).json({ error: "Invalid email domain" });
    }

    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oAuth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const gmail = google.gmail({
      version: "v1",
      auth: oAuth2Client,
    });

    // 📩 Mail to you
    const adminMail = 
`From: Portfolio Contact <${process.env.SENDER_EMAIL}>
To: ${process.env.RECEIVER_EMAIL}
Reply-To: ${email}
Subject: New Portfolio Message From - ${name}

Name: ${name}
Email: ${email}

Message:
${message}
`;

    const encodedAdmin = Buffer.from(adminMail)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: encodedAdmin },
    });

    // ✉️ Auto-reply to user
    const replyMail =
`From: Urmil <${process.env.SENDER_EMAIL}>
To: ${email}
// Reply-To: ${process.env.SENDER_EMAIL}
Subject: Thanks for reaching out :) =?UTF-8?B?8J+Riw==?=

Hey ${name},

Thanks for getting in touch! I really appreciate you taking the time to reach out. 😊

Your message is in my inbox, and I’ll reply as soon as I’m able - typically within a day or two.

Talk soon,
Urmil
`;

    const encodedReply = Buffer.from(replyMail)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: encodedReply },
    });

    // ✅ Return AFTER both mails are sent
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
