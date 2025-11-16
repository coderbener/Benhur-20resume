import { RequestHandler } from "express";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
});

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const validatedData = ContactSchema.parse(req.body);

    console.log("New contact inquiry received:", {
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    });

    res.json({
      success: true,
      message: "Inquiry received successfully",
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
        message: "Error processing your inquiry",
      });
    }
  }
};
