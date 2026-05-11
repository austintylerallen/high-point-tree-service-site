"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Tree removal",
    location: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setFormStatus("error");
        setStatusMessage(
          result.message || "Something went wrong. Please try again."
        );
        return;
      }

      setFormStatus("success");
      setStatusMessage(
        "Your quote request was sent successfully. High Point Tree Service will follow up soon."
      );

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "Tree removal",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("Quote form error:", error);
      setFormStatus("error");
      setStatusMessage(
        "Something went wrong. Please call or text High Point Tree Service directly."
      );
    }
  };

  const labelClassName =
    "mb-2 block text-sm font-black text-[#fff8df]";

  const inputClassName =
    "w-full rounded-2xl border border-[#f0d488]/20 bg-[#fff8df] px-4 py-3.5 text-[#07120d] outline-none transition placeholder:text-[#657064] focus:border-[#f0d488] focus:ring-4 focus:ring-[#f0d488]/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[2.4rem] border border-[#f0d488]/18 bg-[#07120d]/88 p-6 text-[#fff8df] shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-8 lg:p-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(240,212,136,0.18),transparent_34%),radial-gradient(circle_at_100%_100%,rgba(32,63,41,0.85),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#f0d488,#fff8df,#f0d488)]" />

      <div className="relative">
        <div className="mb-8 grid gap-6 border-b border-[#f0d488]/14 pb-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f0d488]">
              Estimate Form
            </p>

            <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#fff8df] sm:text-4xl">
              Tell us what needs to be handled.
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#fff8df]/68">
              This does not need to be perfect. A clear description and location
              are enough to start the quote process.
            </p>
          </div>

          <div className="hidden rounded-full border border-[#f0d488]/18 bg-[#f0d488]/10 px-4 py-2 text-sm font-black text-[#f0d488] lg:block">
            Free Estimate
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClassName}>
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClassName}>
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Best number"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClassName}>
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="service" className={labelClassName}>
              Service Needed
            </label>

            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className={inputClassName}
            >
              <option>Tree removal</option>
              <option>Tree trimming / pruning</option>
              <option>Stump grinding</option>
              <option>Storm damage cleanup</option>
              <option>Tree assessment</option>
              <option>Property cleanup</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="location" className={labelClassName}>
              Property Location
            </label>

            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="City, neighborhood, or address"
              className={inputClassName}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClassName}>
              Job Details
            </label>

            <textarea
              id="message"
              name="message"
              rows={7}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Example: Large dead tree near the driveway, branches over the roof, stump in the front yard, storm damage, cleanup needed, etc."
              className={`${inputClassName} resize-none`}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={formStatus === "loading"}
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f0d488] px-6 py-4 text-base font-black text-[#07120d] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#fff8df] disabled:cursor-not-allowed disabled:bg-stone-500 disabled:text-stone-300"
        >
          {formStatus === "loading"
            ? "Sending Request..."
            : "Submit Quote Request"}
          <ArrowRight className="h-5 w-5" />
        </button>

        {statusMessage && (
          <div
            className={`mt-5 rounded-2xl border px-4 py-4 text-sm font-semibold ${
              formStatus === "success"
                ? "border-[#f0d488]/25 bg-[#f0d488]/14 text-[#fff8df]"
                : "border-red-300/25 bg-red-500/15 text-red-100"
            }`}
          >
            <div className="flex gap-3">
              {formStatus === "success" && (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f0d488]" />
              )}
              <span>{statusMessage}</span>
            </div>
          </div>
        )}

        <div className="mt-6 rounded-2xl border border-[#f0d488]/16 bg-[#fff8df]/7 p-4">
          <div className="flex gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#f0d488]" />
            <p className="text-sm leading-6 text-[#fff8df]/68">
              Your information is only used to respond to your quote request.
              For urgent storm cleanup or immediate tree concerns, calling or
              texting is the fastest option.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}