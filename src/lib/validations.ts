import { z } from "zod";

// ---------------------------------------------------------------------------
// Contact Form
// ---------------------------------------------------------------------------
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("A valid email address is required"),
  phone: z.string().max(30).optional().default(""),
  organization: z.string().max(200).optional().default(""),
  serviceInterest: z.string().max(200).optional().default(""),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ContactFormInput = z.input<typeof contactFormSchema>;

// ---------------------------------------------------------------------------
// Quote / RFQ Form
// ---------------------------------------------------------------------------
export const quoteFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("A valid email address is required"),
  phone: z.string().min(1, "Phone number is required").max(30),
  company: z.string().max(200).optional().default(""),
  serviceType: z.string().max(200).optional().default(""),
  projectDescription: z
    .string()
    .min(20, "Project description must be at least 20 characters")
    .max(10000),
  budgetRange: z.string().max(100).optional().default(""),
  location: z.string().max(200).optional().default(""),
  timeline: z.string().max(200).optional().default(""),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
export type QuoteFormInput = z.input<typeof quoteFormSchema>;

// ---------------------------------------------------------------------------
// Newsletter Signup
// ---------------------------------------------------------------------------
export const newsletterSchema = z.object({
  email: z.string().email("A valid email address is required"),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// ---------------------------------------------------------------------------
// Career / Job Application
// ---------------------------------------------------------------------------
export const careerApplicationSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("A valid email address is required"),
  phone: z.string().min(1, "Phone number is required").max(30),
  position: z.string().min(1, "Position is required").max(200),
  coverLetter: z
    .string()
    .min(50, "Cover letter must be at least 50 characters")
    .max(10000),
});

export type CareerApplicationData = z.infer<typeof careerApplicationSchema>;
