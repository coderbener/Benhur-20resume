import { Request, Response } from "express";
import { z } from "zod";
import nodemailer from "nodemailer";

// Define validation schema
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
});

// The server expects this specific export name: 'handleContact'
export const handleContact = async (req: Request, res: Response) => {
  try {
    // 1. Validate the incoming data
    const validatedData = ContactSchema.parse(req.body);

    // 2. Check for missing passwords (Prevents crashes if variables are missing)
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables");
      res.status(500).json({
        success: false,
        message: "Server configuration error: Missing email credentials.",
      });
      return;
    }

    // 3. Create the transporter INSIDE the function (Fixes 502/Crash issues)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 4. Send the email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "benalyst404@gmail.com", // Your receiving email
      replyTo: validatedData.email,
      subject: `New Inquiry from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <h3 style="color: #333;">Message:</h3>
          <p style="white-space: pre-wrap; color: #555;">${validatedData.message}</p>
        </div>
      `,
    });

    console.log("Email sent successfully for:", validatedData.name);

    // 5. Send success response
    res.status(200).json({
      success: true,
      message: "Inquiry sent successfully! We'll get back to you soon.",
    });

  } catch (error: any) {
    // Handle Zod Validation Errors
    if (error instanceof z.ZodError) {s
      res.status(400).json({
        success: false,
        errors: error.errors,
      });s
      return;
    }

    console.error("Error processing contact form:", error);
    res.status(500).json({
      success: false,
      message: "Error sending your inquiry. Please try again.",
    });
  }
};