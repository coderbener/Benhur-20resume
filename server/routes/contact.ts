import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define validation schema
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
  try {
    // 1. Parse the incoming JSON data
    const body = await request.json();
    
    // 2. Validate data using Zod
    const validatedData = ContactSchema.parse(body);

    // 3. Check environment variables (Prevents 502 Crashes)
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing Env Vars");
      return NextResponse.json(
        { error: "Server config error: Missing email credentials" }, 
        { status: 500 }
      );
    }

    // 4. Setup Transporter (MUST be inside the function)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 5. Send the email
    await transporter.sendMail({
      from: process.env.GMAIL_USER, // Sender address (Must be your authenticated email)
      to: "benalyst404@gmail.com",  // Destination address (Where you want to receive it)
      replyTo: validatedData.email, // So you can hit "Reply" to answer them
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

    return NextResponse.json(
      { success: true, message: "Inquiry sent successfully!" }, 
      { status: 200 }
    );

  } catch (error: any) {
    // Handle Zod Validation Errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors }, 
        { status: 400 }
      );
    }

    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Error sending inquiry" }, 
      { status: 500 }
    );
  }
}