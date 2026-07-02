"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ImagePlus,
  Loader2,
  X,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

type FormStatus = "idle" | "loading" | "success" | "error";

type FormDataState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
  company: string;
};

const initialFormData: FormDataState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  message: "",
  company: "",
};

const maxPhotoCount = 5;
const maxPhotoSizeMb = 10;
const maxPhotoSizeBytes = maxPhotoSizeMb * 1024 * 1024;
const maxTotalPhotoSizeMb = 24;
const maxTotalPhotoSizeBytes = maxTotalPhotoSizeMb * 1024 * 1024;

const allowedPhotoTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

function formatFileSize(size: number) {
  const sizeInMb = size / 1024 / 1024;
  return `${sizeInMb.toFixed(1)} MB`;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormDataState>(initialFormData);
  const [photos, setPhotos] = useState<File[]>([]);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [responseMessage, setResponseMessage] = useState("");

  function updateField(field: keyof FormDataState, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files || []);

    if (selectedFiles.length === 0) {
      return;
    }

    const combinedFiles = [...photos, ...selectedFiles];

    if (combinedFiles.length > maxPhotoCount) {
      setStatus("error");
      setResponseMessage(`Please upload no more than ${maxPhotoCount} photos.`);
      event.target.value = "";
      return;
    }

    const invalidTypeFile = selectedFiles.find(
      (file) => !allowedPhotoTypes.includes(file.type)
    );

    if (invalidTypeFile) {
      setStatus("error");
      setResponseMessage(
        "Please upload JPG, PNG, WEBP, HEIC, or HEIF image files only."
      );
      event.target.value = "";
      return;
    }

    const oversizedFile = selectedFiles.find(
      (file) => file.size > maxPhotoSizeBytes
    );

    if (oversizedFile) {
      setStatus("error");
      setResponseMessage(
        `Each photo must be ${maxPhotoSizeMb} MB or smaller. "${oversizedFile.name}" is ${formatFileSize(
          oversizedFile.size
        )}.`
      );
      event.target.value = "";
      return;
    }

    const totalPhotoSize = combinedFiles.reduce(
      (total, file) => total + file.size,
      0
    );

    if (totalPhotoSize > maxTotalPhotoSizeBytes) {
      setStatus("error");
      setResponseMessage(
        `Please keep the total photo upload under ${maxTotalPhotoSizeMb} MB. The selected photos total ${formatFileSize(
          totalPhotoSize
        )}.`
      );
      event.target.value = "";
      return;
    }

    setPhotos(combinedFiles);
    setStatus("idle");
    setResponseMessage("");
    event.target.value = "";
  }

  function removePhoto(indexToRemove: number) {
    setPhotos((currentPhotos) =>
      currentPhotos.filter((_, index) => index !== indexToRemove)
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setResponseMessage("");

    try {
      const requestBody = new FormData();

      requestBody.append("name", formData.name);
      requestBody.append("phone", formData.phone);
      requestBody.append("email", formData.email);
      requestBody.append("service", formData.service);
      requestBody.append("location", formData.location);
      requestBody.append("message", formData.message);
      requestBody.append("company", formData.company);

      photos.forEach((photo) => {
        requestBody.append("photos", photo);
      });

      const response = await fetch("/api/quote", {
        method: "POST",
        body: requestBody,
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        setStatus("error");
        setResponseMessage(
          result.message || "Something went wrong. Please try again."
        );
        return;
      }

      setStatus("success");
      setResponseMessage(
        result.message ||
          "Your quote request was sent successfully. High Point Tree Service will follow up soon."
      );
      setFormData(initialFormData);
      setPhotos([]);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setResponseMessage("Something went wrong. Please try again.");
    }
  }

  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[#f0d488]/18 bg-[#07120d]/72 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8"
    >
      <div className="grid gap-6">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={(event) => updateField("company", event.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div>
          <label
            htmlFor="name"
            className="text-sm font-black uppercase tracking-[0.18em] text-[#f0d488]"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            autoComplete="name"
            placeholder="Your name"
            className="mt-3 w-full rounded-2xl border border-[#f0d488]/18 bg-[#fff8df]/[0.07] px-5 py-4 text-[#fff8df] outline-none transition placeholder:text-[#fff8df]/40 focus:border-[#f0d488] focus:bg-[#fff8df]/[0.1]"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="text-sm font-black uppercase tracking-[0.18em] text-[#f0d488]"
            >
              Phone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              autoComplete="tel"
              placeholder="Best phone number"
              className="mt-3 w-full rounded-2xl border border-[#f0d488]/18 bg-[#fff8df]/[0.07] px-5 py-4 text-[#fff8df] outline-none transition placeholder:text-[#fff8df]/40 focus:border-[#f0d488] focus:bg-[#fff8df]/[0.1]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-black uppercase tracking-[0.18em] text-[#f0d488]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
              autoComplete="email"
              placeholder="Email address"
              className="mt-3 w-full rounded-2xl border border-[#f0d488]/18 bg-[#fff8df]/[0.07] px-5 py-4 text-[#fff8df] outline-none transition placeholder:text-[#fff8df]/40 focus:border-[#f0d488] focus:bg-[#fff8df]/[0.1]"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="service"
              className="text-sm font-black uppercase tracking-[0.18em] text-[#f0d488]"
            >
              Service Needed *
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={(event) => updateField("service", event.target.value)}
              className="mt-3 w-full rounded-2xl border border-[#f0d488]/18 bg-[#10251b] px-5 py-4 text-[#fff8df] outline-none transition focus:border-[#f0d488]"
            >
              <option value="">Select a service</option>
              {siteConfig.quoteServiceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="location"
              className="text-sm font-black uppercase tracking-[0.18em] text-[#f0d488]"
            >
              Property Location *
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              value={formData.location}
              onChange={(event) => updateField("location", event.target.value)}
              autoComplete="street-address"
              placeholder="City, area, or address"
              className="mt-3 w-full rounded-2xl border border-[#f0d488]/18 bg-[#fff8df]/[0.07] px-5 py-4 text-[#fff8df] outline-none transition placeholder:text-[#fff8df]/40 focus:border-[#f0d488] focus:bg-[#fff8df]/[0.1]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-sm font-black uppercase tracking-[0.18em] text-[#f0d488]"
          >
            Job Details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={6}
            placeholder="Describe the tree, stump, storm damage, cleanup need, safety concern, or anything else High Point should know."
            className="mt-3 w-full resize-none rounded-2xl border border-[#f0d488]/18 bg-[#fff8df]/[0.07] px-5 py-4 text-[#fff8df] outline-none transition placeholder:text-[#fff8df]/40 focus:border-[#f0d488] focus:bg-[#fff8df]/[0.1]"
          />
        </div>

        <div className="rounded-2xl border border-[#f0d488]/14 bg-[#fff8df]/[0.05] p-5">
          <label
            htmlFor="photos"
            className="flex cursor-pointer flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3">
              <ImagePlus className="mt-0.5 h-5 w-5 shrink-0 text-[#f0d488]" />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f0d488]">
                  Upload Photos
                </p>
                <p className="mt-2 text-sm leading-6 text-[#fff8df]/70">
                  Add up to {maxPhotoCount} photos of the tree, stump, storm
                  damage, access area, or cleanup need. Each photo can be up
                  to {maxPhotoSizeMb} MB, with a total upload limit of{" "}
                  {maxTotalPhotoSizeMb} MB.
                </p>
              </div>
            </div>

            <span className="inline-flex items-center justify-center rounded-full border border-[#f0d488]/25 bg-[#fff8df]/[0.08] px-5 py-3 text-sm font-black text-[#fff8df] transition hover:bg-[#fff8df]/[0.12] hover:text-[#f0d488]">
              Choose Photos
            </span>
          </label>

          <input
            id="photos"
            name="photos"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
            multiple
            onChange={handlePhotoChange}
            className="hidden"
          />

          {photos.length > 0 && (
            <div className="mt-5 grid gap-3">
              {photos.map((photo, index) => (
                <div
                  key={`${photo.name}-${photo.size}-${index}`}
                  className="flex items-center justify-between gap-4 rounded-xl border border-[#f0d488]/12 bg-[#07120d]/60 px-4 py-3"
                >
                  <div>
                    <p className="break-all text-sm font-bold text-[#fff8df]">
                      {photo.name}
                    </p>
                    <p className="mt-1 text-xs text-[#fff8df]/50">
                      {formatFileSize(photo.size)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f0d488]/18 bg-[#fff8df]/[0.06] text-[#fff8df] transition hover:border-red-300/40 hover:bg-red-500/10 hover:text-red-200"
                    aria-label={`Remove ${photo.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {responseMessage && (
          <div
            className={`rounded-2xl border p-5 ${
              status === "success"
                ? "border-[#d7ff00]/25 bg-[#d7ff00]/10 text-[#fff8df]"
                : "border-red-400/30 bg-red-500/10 text-red-100"
            }`}
          >
            <div className="flex items-start gap-3">
              {status === "success" ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d7ff00]" />
              ) : (
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
              )}

              <p className="text-sm leading-6">{responseMessage}</p>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0d488] px-7 py-4 text-base font-black uppercase tracking-[0.14em] text-[#07120d] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#fff8df] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send Quote Request
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
