"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  TreePine,
  Truck,
  Wrench,
} from "lucide-react";

const phoneNumber = "(505) 372-9043";
const smsNumber = "5053729043";
const emailAddress = "info@highpointtreeservicenm.com";

const logoSrc = "/images/logo/high-point-tree-service-logo-v2.png";
const heroImageSrc = "/images/hero/tree-service-hero.png";

const services = [
  {
    title: "Tree Removal",
    description:
      "Safe removal of dead, damaged, leaning, or unwanted trees with care around homes, fences, driveways, utilities, and landscaping.",
    icon: TreePine,
  },
  {
    title: "Tree Trimming & Pruning",
    description:
      "Professional trimming and pruning to reduce overgrowth, improve clearance, shape trees, and help maintain healthier properties.",
    icon: ClipboardCheck,
  },
  {
    title: "Stump Grinding",
    description:
      "Stump grinding for old or freshly cut stumps so your yard is safer, cleaner, and easier to maintain.",
    icon: Wrench,
  },
  {
    title: "Storm Damage Cleanup",
    description:
      "Cleanup for fallen limbs, broken branches, and tree hazards after wind, rain, or rough New Mexico weather.",
    icon: AlertTriangle,
  },
  {
    title: "Tree Assessments",
    description:
      "Property walkthroughs to identify risky trees, dead limbs, weak branches, and maintenance needs before they become bigger problems.",
    icon: ShieldCheck,
  },
  {
    title: "Property Cleanup",
    description:
      "Clean, professional job-site cleanup after tree work so your property looks safe, neat, and finished.",
    icon: Truck,
  },
];

const serviceAreas = [
  "Las Cruces",
  "Ruidoso",
  "Roswell",
  "Alamogordo",
  "Surrounding Areas",
];

const trustPoints = [
  "Locally owned New Mexico tree service company",
  "Free estimates available",
  "Residential and commercial tree work",
  "Removal, trimming, stump grinding, and storm cleanup",
];

const processSteps = [
  {
    title: "Send the details",
    description:
      "Tell High Point what service you need, where the property is located, and whether the job is urgent.",
  },
  {
    title: "Get a clear estimate",
    description:
      "They review the tree work, ask for any needed details or photos, and provide next steps for the job.",
  },
  {
    title: "Get the work handled",
    description:
      "The crew completes the work with a focus on safety, property protection, and clean results.",
  },
];

export default function Home() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Tree removal",
    location: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveAreaIndex((currentIndex) =>
        currentIndex === serviceAreas.length - 1 ? 0 : currentIndex + 1
      );
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

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

  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.20),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(5,150,105,0.14),transparent_32%),linear-gradient(to_bottom,#06120d,#0c0a09_70%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between rounded-[2rem] border border-white/10 bg-black/35 px-4 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                <Image
                  src={logoSrc}
                  alt="High Point Tree Service LLC logo"
                  fill
                  priority
                  sizes="80px"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-300">
                  High Point
                </p>
                <p className="text-base font-black leading-tight text-white sm:text-lg">
                  Tree Service LLC
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-bold text-stone-200 lg:flex">
              <a href="#services" className="transition hover:text-emerald-300">
                Services
              </a>
              <a href="#process" className="transition hover:text-emerald-300">
                Process
              </a>
              <a href="#areas" className="transition hover:text-emerald-300">
                Areas
              </a>
              <a href="#quote" className="transition hover:text-emerald-300">
                Quote
              </a>
            </nav>

            <a
              href={`tel:${phoneNumber}`}
              className="hidden items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-black text-stone-950 shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-300 md:inline-flex"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400 text-stone-950 md:hidden"
              aria-label="Call High Point Tree Service"
            >
              <Phone className="h-5 w-5" />
            </a>
          </header>

          <div className="grid min-h-[78vh] items-center gap-14 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
                <MapPin className="h-4 w-4 shrink-0" />
                Southern New Mexico Tree Service
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Professional tree work for safer, cleaner properties.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
                High Point Tree Service LLC helps homeowners, businesses, and
                property managers with tree removal, trimming, pruning, stump
                grinding, storm cleanup, and tree assessments.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-4 text-base font-black text-stone-950 shadow-xl shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  Request a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <Phone className="h-5 w-5" />
                  Call {phoneNumber}
                </a>
              </div>

              <div className="mt-10 grid gap-3 text-sm text-stone-300 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.75rem] bg-emerald-400/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-stone-900 shadow-2xl shadow-black/40">
                <div className="relative h-[520px]">
                  <Image
                    src={heroImageSrc}
                    alt="Tree service crew member working in a tree"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.6rem] border border-white/10 bg-stone-950/82 p-5 backdrop-blur-xl">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
                      Free Estimates
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-white">
                      Need tree work done?
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-stone-300">
                      Send the details online, or call for urgent storm cleanup,
                      hazardous trees, and time-sensitive property concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-stone-100 px-5 py-24 text-stone-950 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">
                Services
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Tree service built around safety and clean results.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-stone-700 lg:ml-auto">
              From hazardous removals to routine trimming and storm cleanup,
              High Point helps property owners handle tree work with care,
              planning, and clear communication.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 transition group-hover:bg-emerald-400 group-hover:text-stone-950">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-black">{service.title}</h3>

                  <p className="mt-3 leading-7 text-stone-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="bg-white px-5 py-24 text-stone-950 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-stone-950 shadow-2xl">
            <div className="relative h-[420px]">
              <Image
                src={heroImageSrc}
                alt="Professional arborist working in a tree"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/15 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-stone-950/80 p-5 backdrop-blur-xl">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
                  Property-Focused Work
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  Tree work around homes, fences, driveways, utilities, and
                  landscaping should be handled with planning and care.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">
              How It Works
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              A straightforward process from quote to cleanup.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-700">
              Customers should not have to guess what happens next. The process
              is simple: send the job details, get clear communication, and get
              the tree work handled professionally.
            </p>

            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-stone-200 bg-stone-50 p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-black text-white">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-xl font-black">{step.title}</h3>
                      <p className="mt-2 leading-7 text-stone-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="areas"
        className="relative overflow-hidden bg-stone-950 px-5 py-24 text-white sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_35%),linear-gradient(to_bottom,#0c0a09,#06120d)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-300">
                Service Areas
              </p>

              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
                Serving key communities across Southern New Mexico.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
                High Point Tree Service currently serves Las Cruces, Ruidoso,
                Roswell, Alamogordo, and surrounding areas.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-stone-950">
                  <MapPin className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">
                    Now Serving
                  </p>
                  <p className="text-sm text-stone-400">
                    Current New Mexico service area
                  </p>
                </div>
              </div>

              <div className="mt-8">
  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
    <span className="text-3xl font-black leading-none tracking-tight text-white sm:text-4xl">
      Serving
    </span>

    <span className="relative block h-[44px] min-w-[320px] overflow-hidden sm:h-[52px]">
      {serviceAreas.map((area, index) => (
        <span
          key={area}
          className={`absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-3xl font-black leading-none tracking-tight text-emerald-300 transition-all duration-700 sm:text-4xl ${
            index === activeAreaIndex
              ? "opacity-100"
              : "translate-y-2 opacity-0"
          }`}
        >
          {area}
        </span>
      ))}
    </span>
  </div>

  <p className="mt-5 max-w-xl text-sm leading-7 text-stone-400">
    Not sure if your property is within range? Send a quote request with your
    city or address and High Point Tree Service can confirm availability.
  </p>
</div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">
                  Current Service Areas
                </p>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                        area === serviceAreas[activeAreaIndex]
                          ? "bg-emerald-400 text-stone-950"
                          : "border border-white/10 bg-stone-900/70 text-stone-300"
                      }`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="quote"
        className="bg-stone-100 px-5 py-24 text-stone-950 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">
              Free Quote Request
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Tell High Point what tree work you need.
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-700">
              Share the service you need, where the property is located, and how
              soon you need help. For urgent storm cleanup or hazardous trees,
              calling or texting is the fastest option.
            </p>

            <div className="mt-8 grid gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="group flex items-center gap-4 rounded-3xl bg-white p-5 font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 transition group-hover:bg-emerald-400 group-hover:text-stone-950">
                  <Phone className="h-6 w-6" />
                </div>

                <div>
                  <p>Call Now</p>
                  <p className="text-sm font-medium text-stone-500">
                    {phoneNumber}
                  </p>
                </div>
              </a>

              <a
                href={`sms:${smsNumber}`}
                className="group flex items-center gap-4 rounded-3xl bg-white p-5 font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 transition group-hover:bg-emerald-400 group-hover:text-stone-950">
                  <MessageSquare className="h-6 w-6" />
                </div>

                <div>
                  <p>Text Photos</p>
                  <p className="text-sm font-medium text-stone-500">
                    Helpful for tree photos, storm damage, or quick questions.
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="group flex items-center gap-4 rounded-3xl bg-white p-5 font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 transition group-hover:bg-emerald-400 group-hover:text-stone-950">
                  <Mail className="h-6 w-6" />
                </div>

                <div>
                  <p>Email</p>
                  <p className="text-sm font-medium text-stone-500">
                    {emailAddress}
                  </p>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-stone-200 bg-white p-6 text-stone-950 shadow-xl sm:p-8"
          >
            <div className="mb-7">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
                Request an Estimate
              </p>

              <h3 className="mt-2 text-3xl font-black">Get a Free Quote</h3>

              <p className="mt-2 leading-7 text-stone-600">
                Send the basics and High Point Tree Service will follow up.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-black text-stone-700"
                >
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
                  className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-black text-stone-700"
                >
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
                  className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-black text-stone-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-black text-stone-700"
                >
                  Service Needed
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                >
                  <option>Tree removal</option>
                  <option>Tree trimming / pruning</option>
                  <option>Stump grinding</option>
                  <option>Storm damage cleanup</option>
                  <option>Tree assessment</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-black text-stone-700"
                >
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
                  className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-black text-stone-700"
                >
                  Job Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us what you need help with. Include tree size, property access, urgency, storm damage, or cleanup details."
                  className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-base font-black text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-stone-400"
            >
              {formStatus === "loading"
                ? "Sending Request..."
                : "Submit Quote Request"}
              <ArrowRight className="h-5 w-5" />
            </button>

            {statusMessage && (
              <div
                className={`mt-4 rounded-xl px-4 py-3 text-sm font-semibold ${
                  formStatus === "success"
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {statusMessage}
              </div>
            )}

            <p className="mt-4 text-center text-sm leading-6 text-stone-500">
              For urgent storm cleanup or immediate tree concerns, calling or
              texting is the fastest option.
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-stone-950 px-5 pb-28 pt-12 text-white sm:px-6 md:pb-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20">
                  <Image
                    src={logoSrc}
                    alt="High Point Tree Service LLC logo"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-300">
                    High Point
                  </p>
                  <p className="text-lg font-black">Tree Service LLC</p>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-400">
                Tree removal, trimming, pruning, stump grinding, storm cleanup,
                and tree assessments across Las Cruces, Ruidoso, Roswell,
                Alamogordo, and surrounding areas.
              </p>
            </div>

            <div>
              <p className="font-black">Services</p>

              <div className="mt-4 grid gap-2 text-sm text-stone-400">
                <a href="#services" className="hover:text-emerald-300">
                  Tree Removal
                </a>
                <a href="#services" className="hover:text-emerald-300">
                  Tree Trimming
                </a>
                <a href="#services" className="hover:text-emerald-300">
                  Stump Grinding
                </a>
                <a href="#services" className="hover:text-emerald-300">
                  Storm Cleanup
                </a>
              </div>
            </div>

            <div>
              <p className="font-black">Contact</p>

              <div className="mt-4 grid gap-2 text-sm text-stone-400">
                <a
                  href={`tel:${phoneNumber}`}
                  className="hover:text-emerald-300"
                >
                  {phoneNumber}
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="hover:text-emerald-300"
                >
                  {emailAddress}
                </a>

                <p>highpointtreeservicenm.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-6 text-sm text-stone-500 md:flex-row">
            <p>© 2026 High Point Tree Service LLC. All rights reserved.</p>
            <p>Website by AA Ventures LLC</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-white/10 bg-stone-950 p-3 shadow-2xl md:hidden">
        <a
          href={`tel:${phoneNumber}`}
          className="mr-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 text-sm font-black text-stone-950"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>

        <a
          href={`sms:${smsNumber}`}
          className="ml-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black text-stone-950"
        >
          <MessageSquare className="h-4 w-4" />
          Text
        </a>
      </div>
    </main>
  );
}