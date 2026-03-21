import { Resend } from "resend";
import type {
  ContactFormData,
  QuoteFormData,
  CareerApplicationData,
} from "./validations";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------
const ADMIN_EMAIL = "kaportaq1@gmail.com";
const COMPANY_NAME = "Kaporta Investment Sierra Leone Limited";
const FROM_EMAIL = "noreply@kaportagroup.com"; // Must be verified in Resend

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log("[email] RESEND_API_KEY is not set — skipping email send.");
    return null;
  }
  return new Resend(key);
}

// ---------------------------------------------------------------------------
// Contact form — notification to admin
// ---------------------------------------------------------------------------
export async function sendContactNotification(data: ContactFormData) {
  const resend = getResend();
  if (!resend) return;

  await resend.emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      <p><strong>Organization:</strong> ${data.organization || "N/A"}</p>
      <p><strong>Service Interest:</strong> ${data.serviceInterest || "N/A"}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  });
}

// ---------------------------------------------------------------------------
// Quote / RFQ — notification to admin
// ---------------------------------------------------------------------------
export async function sendQuoteNotification(data: QuoteFormData) {
  const resend = getResend();
  if (!resend) return;

  await resend.emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `New Quote Request from ${data.company}`,
    html: `
      <h2>New Quote / RFQ Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Service Type:</strong> ${data.serviceType || "N/A"}</p>
      <p><strong>Budget Range:</strong> ${data.budgetRange || "N/A"}</p>
      <p><strong>Timeline:</strong> ${data.timeline || "N/A"}</p>
      <hr />
      <p><strong>Project Description:</strong></p>
      <p>${data.projectDescription}</p>
    `,
  });
}

// ---------------------------------------------------------------------------
// Confirmation auto-reply to user
// ---------------------------------------------------------------------------
export async function sendConfirmationEmail(to: string, name: string) {
  const resend = getResend();
  if (!resend) return;

  await resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: `Thank you for contacting ${COMPANY_NAME}`,
    html: `
      <h2>Thank you, ${name}!</h2>
      <p>We have received your message and a member of our team will be in touch shortly.</p>
      <p>If you need immediate assistance, please call us at <strong>+232 78341012</strong>.</p>
      <br />
      <p>Best regards,</p>
      <p><strong>${COMPANY_NAME}</strong></p>
      <p>Benguema Firing Range, Waterloo, Freetown, Sierra Leone</p>
    `,
  });
}

// ---------------------------------------------------------------------------
// Career application — notification to admin
// ---------------------------------------------------------------------------
export async function sendApplicationNotification(
  data: CareerApplicationData,
) {
  const resend = getResend();
  if (!resend) return;

  await resend.emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `New Job Application: ${data.position} — ${data.name}`,
    html: `
      <h2>New Job Application</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Position:</strong> ${data.position}</p>
      <hr />
      <p><strong>Cover Letter:</strong></p>
      <p>${data.coverLetter}</p>
      <hr />
      <p><em>Note: If a resume was attached, it will need to be retrieved from the server storage (file upload handling is configured in the API route).</em></p>
    `,
  });
}

// ---------------------------------------------------------------------------
// Newsletter confirmation
// ---------------------------------------------------------------------------
export async function sendNewsletterConfirmation(to: string) {
  const resend = getResend();
  if (!resend) return;

  await resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: `Welcome to the ${COMPANY_NAME} Newsletter`,
    html: `
      <h2>You're subscribed!</h2>
      <p>Thank you for signing up for the ${COMPANY_NAME} newsletter. You'll receive updates on our latest projects, industry news, and company announcements.</p>
      <br />
      <p>Best regards,</p>
      <p><strong>${COMPANY_NAME}</strong></p>
    `,
  });
}
