import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import { sendNewsletterConfirmation } from "@/lib/email";

// TODO: Replace with a proper database (e.g., PostgreSQL, MongoDB, or a
// third-party service like Mailchimp / ConvertKit).
const subscribers = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    // --- Rate limiting: max 3 requests per IP per hour ---
    const rl = rateLimit(ip, 3, 60 * 60 * 1000);
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

    // --- Honeypot check ---
    if (body.website || body.honeypot || body.url) {
      return NextResponse.json({ success: true });
    }

    // --- Validation ---
    const result = newsletterSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { email } = result.data;

    // --- Check for duplicate ---
    if (subscribers.has(email.toLowerCase())) {
      return NextResponse.json({
        success: true,
        message: "You are already subscribed. Thank you!",
      });
    }

    // --- Store subscriber ---
    subscribers.add(email.toLowerCase());
    console.log(
      `[newsletter] New subscriber: ${email} (total: ${subscribers.size})`,
    );

    // --- Send confirmation email ---
    try {
      await sendNewsletterConfirmation(email);
    } catch (emailError) {
      console.error("[newsletter] Confirmation email failed:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "You have been subscribed to our newsletter. Thank you!",
    });
  } catch (error) {
    console.error("[newsletter] Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
