import { NextResponse } from "next/server";
import { Resend } from "resend";

type QuoteRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  location?: string;
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteRequestBody;

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim();
    const service = body.service?.trim();
    const location = body.location?.trim();
    const message = body.message?.trim();

    if (!name || !phone || !service || !location || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill out all required fields.",
        },
        { status: 400 }
      );
    }

    const businessEmail =
      process.env.QUOTE_TO_EMAIL || "info@highpointtreeservicenm.com";

    const fromEmail =
      process.env.QUOTE_FROM_EMAIL || "High Point Website <onboarding@resend.dev>";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; color: #1c1917; line-height: 1.6;">
        <h1 style="margin-bottom: 8px;">New Quote Request</h1>
        <p style="margin-top: 0; color: #57534e;">
          A new quote request was submitted from the High Point Tree Service website.
        </p>

        <div style="margin-top: 24px; padding: 20px; border: 1px solid #e7e5e4; border-radius: 12px; background: #fafaf9;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Service Needed:</strong> ${service}</p>
          <p><strong>Property Location:</strong> ${location}</p>
          <p><strong>Job Details:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>

        <p style="margin-top: 24px; color: #57534e;">
          Reply to this lead as soon as possible. For tree service calls, speed matters.
        </p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: businessEmail,
      replyTo: email || undefined,
      subject: `New Tree Service Quote Request from ${name}`,
      html: emailHtml,
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
      message: "Quote request sent successfully.",
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