import { NextRequest, NextResponse } from "next/server";
import { careerApplicationSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import { sendApplicationNotification } from "@/lib/email";

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

    // --- Parse FormData (supports resume upload) ---
    const contentType = request.headers.get("content-type") ?? "";
    let fields: Record<string, string> = {};
    let resumeFile: File | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          resumeFile = value;
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
    const result = careerApplicationSchema.safeParse(fields);
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

    // --- Handle resume file ---
    if (resumeFile && resumeFile.size > 0) {
      // TODO: Store file in cloud storage (e.g., AWS S3, Vercel Blob)
      console.log(
        `[career-apply] Resume uploaded: ${resumeFile.name} (${resumeFile.size} bytes, ${resumeFile.type})`,
      );
    }

    // --- Send notification email to admin ---
    try {
      await sendApplicationNotification(data);
    } catch (emailError) {
      console.error("[career-apply] Email send failed:", emailError);
    }

    return NextResponse.json({
      success: true,
      message:
        "Your application has been submitted successfully. We will review it and contact you if your qualifications match our requirements.",
    });
  } catch (error) {
    console.error("[career-apply] Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
