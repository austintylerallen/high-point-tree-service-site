import { NextResponse } from "next/server";
import { Resend } from "resend";

type QuoteRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  location?: string;
  message?: string;
  company?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const businessEmail =
  process.env.QUOTE_TO_EMAIL || "info@highpointtreeservicenm.com";

const fromEmail =
  process.env.QUOTE_FROM_EMAIL ||
  "High Point Tree Service <quotes@highpointtreeservicenm.com>";

function cleanValue(value?: string) {
  return value?.trim().slice(0, 2000) || "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatMultiline(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getTextFallback({
  name,
  phone,
  email,
  service,
  location,
  message,
}: {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
}) {
  return `
New Tree Service Quote Request

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Service Needed: ${service}
Property Location: ${location}

Job Details:
${message}

Reply to this lead as soon as possible.
  `.trim();
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured yet.",
        },
        { status: 500 }
      );
    }

    const body = (await request.json()) as QuoteRequestBody;

    const name = cleanValue(body.name);
    const phone = cleanValue(body.phone);
    const email = cleanValue(body.email);
    const service = cleanValue(body.service);
    const location = cleanValue(body.location);
    const message = cleanValue(body.message);
    const company = cleanValue(body.company);

    if (company) {
      return NextResponse.json({
        success: true,
        message: "Quote request sent successfully.",
      });
    }

    if (!name || !phone || !service || !location || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill out all required fields.",
        },
        { status: 400 }
      );
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = email ? escapeHtml(email) : "Not provided";
    const safeService = escapeHtml(service);
    const safeLocation = escapeHtml(location);
    const safeMessage = formatMultiline(message);

    const subject = `New ${service} Quote Request - ${name}`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; color: #1c1917; line-height: 1.6;">
        <h1 style="margin-bottom: 8px;">New Tree Service Quote Request</h1>

        <p style="margin-top: 0; color: #57534e;">
          A new quote request was submitted from the High Point Tree Service website.
        </p>

        <div style="margin-top: 24px; padding: 20px; border: 1px solid #e7e5e4; border-radius: 12px; background: #fafaf9;">
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Service Needed:</strong> ${safeService}</p>
          <p><strong>Property Location:</strong> ${safeLocation}</p>

          <p style="margin-bottom: 6px;"><strong>Job Details:</strong></p>
          <p style="margin-top: 0;">${safeMessage}</p>
        </div>

        <p style="margin-top: 24px; color: #57534e;">
          Reply to this lead as soon as possible. For tree service calls, speed matters.
        </p>
      </div>
    `;

    const text = getTextFallback({
      name,
      phone,
      email,
      service,
      location,
      message,
    });

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: businessEmail,
      replyTo: email || undefined,
      subject,
      html: emailHtml,
      text,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong while sending the quote request.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your quote request was sent successfully. High Point Tree Service will follow up soon.",
    });
  } catch (error) {
    console.error("Quote API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}