import { RequestHandler } from "express";
import { z } from "zod";
import nodemailer from "nodemailer";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const validatedData = ContactSchema.parse(req.body);

    const contactEmail = "benalyst404@gmail.com";

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: contactEmail,
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

    console.log("Email sent successfully for inquiry from:", validatedData.name);

    res.json({
      success: true,
      message: "Inquiry sent successfully! We'll get back to you soon.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        errors: error.errors,
      });
    } else {
      console.error("Error processing contact form:", error);
      res.status(500).json({
        success: false,
        message: "Error sending your inquiry. Please try again.",
      });
    }
  }
};
