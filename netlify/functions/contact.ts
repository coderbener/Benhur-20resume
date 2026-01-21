import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const handler: Handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // 1. Parse data safely
    const { name, email, message } = JSON.parse(event.body || "{}");

    // 2. Validate
    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ message: "Missing fields" }) };
    }

    // 3. Check Credentials
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return { statusCode: 500, body: JSON.stringify({ message: "Server config error: Missing credentials" }) };
    }

    // 4. Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 5. Send Email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "benhuratwork@gmail.com", // Your email
      replyTo: email,
      subject: `Portfolio Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };

  } catch (error: any) {
    console.error("Function Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Failed to send: ${error.message}` }),
    };
  }
};

export { handler };
