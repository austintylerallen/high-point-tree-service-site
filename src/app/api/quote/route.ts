import { NextResponse } from "next/server";
import { Resend } from "resend";

type QuoteFieldValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
  company: string;
};

type EmailAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const businessEmail =
  process.env.QUOTE_TO_EMAIL || "info@highpointtreeservicenm.com";

const fromEmail =
  process.env.QUOTE_FROM_EMAIL ||
  "High Point Tree Service <quotes@highpointtreeservicenm.com>";

const maxPhotoCount = 3;
const maxPhotoSizeMb = 3;
const maxPhotoSizeBytes = maxPhotoSizeMb * 1024 * 1024;

const allowedPhotoTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

function cleanValue(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, 2000);
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
}: QuoteFieldValues) {
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

function getFileExtension(file: File) {
  const nameParts = file.name.split(".");
  const extension = nameParts.length > 1 ? nameParts.pop() : "";

  if (extension) {
    return extension.toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  if (file.type === "image/jpeg") {
    return "jpg";
  }

  if (file.type === "image/png") {
    return "png";
  }

  if (file.type === "image/webp") {
    return "webp";
  }

  if (file.type === "image/heic") {
    return "heic";
  }

  if (file.type === "image/heif") {
    return "heif";
  }

  return "jpg";
}

async function buildPhotoAttachments(files: File[]) {
  const attachments: EmailAttachment[] = [];

  for (const [index, file] of files.entries()) {
    const arrayBuffer = await file.arrayBuffer();
    const extension = getFileExtension(file);

    attachments.push({
      filename: `quote-photo-${index + 1}.${extension}`,
      content: Buffer.from(arrayBuffer),
      contentType: file.type,
    });
  }

  return attachments;
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

    const formData = await request.formData();

    const name = cleanValue(formData.get("name"));
    const phone = cleanValue(formData.get("phone"));
    const email = cleanValue(formData.get("email"));
    const service = cleanValue(formData.get("service"));
    const location = cleanValue(formData.get("location"));
    const message = cleanValue(formData.get("message"));
    const company = cleanValue(formData.get("company"));

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

    const photoFiles = formData
      .getAll("photos")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    if (photoFiles.length > maxPhotoCount) {
      return NextResponse.json(
        {
          success: false,
          message: `Please upload no more than ${maxPhotoCount} photos.`,
        },
        { status: 400 }
      );
    }

    const invalidPhoto = photoFiles.find(
      (file) => !allowedPhotoTypes.includes(file.type)
    );

    if (invalidPhoto) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please upload JPG, PNG, WEBP, HEIC, or HEIF image files only.",
        },
        { status: 400 }
      );
    }

    const oversizedPhoto = photoFiles.find(
      (file) => file.size > maxPhotoSizeBytes
    );

    if (oversizedPhoto) {
      return NextResponse.json(
        {
          success: false,
          message: `Each photo must be ${maxPhotoSizeMb} MB or smaller.`,
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
    const photoCountText =
      photoFiles.length > 0
        ? `${photoFiles.length} photo${photoFiles.length === 1 ? "" : "s"} attached`
        : "No photos attached";

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
          <p><strong>Photos:</strong> ${photoCountText}</p>

          <p style="margin-bottom: 6px;"><strong>Job Details:</strong></p>
          <p style="margin-top: 0;">${safeMessage}</p>
        </div>

        <p style="margin-top: 24px; color: #57534e;">
          Reply to this lead as soon as possible. For tree service calls, speed matters.
        </p>
      </div>
    `;

    const text = `
${getTextFallback({
  name,
  phone,
  email,
  service,
  location,
  message,
  company,
})}

Photos: ${photoCountText}
    `.trim();

    const attachments = await buildPhotoAttachments(photoFiles);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: businessEmail,
      replyTo: email || undefined,
      subject,
      html: emailHtml,
      text,
      attachments,
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
