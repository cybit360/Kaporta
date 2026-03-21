import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import {
  sendQuoteNotification,
  sendConfirmationEmail,
} from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    // --- Rate limiting: max 5 requests per IP per 15 minutes ---
    const rl = rateLimit(ip, 5, 15 * 60 * 1000);
    if (!rl.success) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          retryAfterMs: rl.retryAfterMs,
        },
        { status: 429 },
      );
    }

    // --- Parse FormData (supports file uploads) ---
    const contentType = request.headers.get("content-type") ?? "";
    let fields: Record<string, string> = {};
    let file: File | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          file = value;
        } else {
          fields[key] = value;
        }
      }
    } else {
      fields = await request.json();
    }

    // --- Honeypot check ---
    if (fields.website || fields.honeypot || fields.url) {
      return NextResponse.json({ success: true });
    }

    // --- Validation ---
    const result = quoteFormSchema.safeParse(fields);
    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = result.data;

    // --- Handle uploaded file ---
    if (file && file.size > 0) {
      // TODO: Store file in cloud storage (e.g., AWS S3, Vercel Blob)
      // For now we just log the file metadata
      console.log(
        `[quote] File uploaded: ${file.name} (${file.size} bytes, ${file.type})`,
      );
    }

    // --- Send emails ---
    try {
      await Promise.all([
        sendQuoteNotification(data),
        sendConfirmationEmail(data.email, data.name),
      ]);
    } catch (emailError) {
      console.error("[quote] Email send failed:", emailError);
    }

    return NextResponse.json({
      success: true,
      message:
        "Your quote request has been received. Our team will review it and get back to you within 24–48 hours.",
    });
  } catch (error) {
    console.error("[quote] Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
