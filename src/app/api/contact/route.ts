import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import {
  sendContactNotification,
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

    const body = await request.json();

    // --- Honeypot check (silently reject bots) ---
    if (body.website || body.honeypot || body.url) {
      // Respond with fake success so bots don't retry
      return NextResponse.json({ success: true });
    }

    // --- Validation ---
    const result = contactFormSchema.safeParse(body);
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

    // --- Send emails (non-blocking failures) ---
    try {
      await Promise.all([
        sendContactNotification(data),
        sendConfirmationEmail(data.email, data.name),
      ]);
    } catch (emailError) {
      console.error("[contact] Email send failed:", emailError);
      // We still return success — the submission itself was valid
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting us. We will get back to you shortly.",
    });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
