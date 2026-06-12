"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

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

const serviceOptions = [
  "Tree removal",
  "Tree trimming and pruning",
  "Stump grinding",
  "Storm damage cleanup",
  "Tree assessment",
  "Property cleanup",
  "Not sure yet",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormDataState>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [responseMessage, setResponseMessage] = useState("");

  function updateField(field: keyof FormDataState, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setResponseMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
              {serviceOptions.map((service) => (
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
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f0d488]" />
            <p className="text-sm leading-6 text-[#fff8df]/70">
              Photos can help with tree damage, stumps, access issues, and
              cleanup needs. After submitting the form, you can also text photos
              to High Point if needed.
            </p>
          </div>
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