"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Star,
  TreePine,
  Truck,
  Wrench,
  AlertTriangle,
  ClipboardCheck,
  Home as HomeIcon,
  ChevronRight,
} from "lucide-react";

const phoneNumber = "(575) 000-0000";
const smsNumber = "5750000000";
const emailAddress = "info@highpointtreeservicenm.com";

const services = [
  {
    title: "Tree Removal",
    description:
      "Safe removal of dead, damaged, leaning, or unwanted trees with careful attention to nearby homes, fences, driveways, utilities, and landscaping.",
    icon: TreePine,
  },
  {
    title: "Tree Trimming & Pruning",
    description:
      "Professional trimming to clear structures, reduce overgrowth, improve appearance, and support healthier long-term tree growth.",
    icon: ClipboardCheck,
  },
  {
    title: "Stump Grinding",
    description:
      "Stump grinding for old or freshly cut stumps so your yard is safer, cleaner, and easier to use or maintain.",
    icon: Wrench,
  },
  {
    title: "Storm Damage Cleanup",
    description:
      "Cleanup for fallen limbs, broken branches, and urgent tree hazards after wind, rain, or rough New Mexico weather.",
    icon: AlertTriangle,
  },
  {
    title: "Tree Assessments",
    description:
      "Walkthroughs to identify risky trees, dead limbs, weak branches, and maintenance needs before they become bigger problems.",
    icon: ShieldCheck,
  },
  {
    title: "Property Cleanup",
    description:
      "Clean, dependable job-site cleanup after tree work so your property looks finished when the work is done.",
    icon: Truck,
  },
];

const serviceAreas = [
  "Las Cruces",
  "Alamogordo",
  "Ruidoso",
  "Roswell",
  "Mesilla",
  "Dona Ana County",
  "Southern New Mexico",
  "Surrounding Areas",
];

const reasons = [
  "Locally owned tree service serving New Mexico communities",
  "Free estimates for homeowners, property managers, and businesses",
  "Tree removal, trimming, pruning, stump grinding, and storm cleanup",
  "Easy communication by phone, text, email, or quote request",
];

const process = [
  {
    step: "01",
    title: "Request a Quote",
    description:
      "Call, text, or submit the quote form with your location, service type, and a quick description of the work needed.",
  },
  {
    step: "02",
    title: "Review the Job",
    description:
      "High Point reviews the tree work, property access, safety concerns, timing, and cleanup needs before the work begins.",
  },
  {
    step: "03",
    title: "Complete the Work",
    description:
      "The job is completed with safety, property protection, and cleanup in mind from start to finish.",
  },
];

const confidencePoints = [
  {
    title: "Clear Communication",
    description:
      "Customers need quick answers when a tree is damaged, overgrown, or creating a safety concern. High Point makes it easy to call, text, or request a quote.",
  },
  {
    title: "Property-Focused Work",
    description:
      "Tree work should be planned around the property, including nearby structures, fences, vehicles, walkways, and landscaping.",
  },
  {
    title: "Clean Finished Results",
    description:
      "From trimming to removal and cleanup, the goal is to leave the property safer, cleaner, and easier to maintain.",
  },
];

export default function Home() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(132,204,22,0.14),transparent_28%),linear-gradient(to_bottom,rgba(12,10,9,0.35),#0c0a09)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
          <div className="mb-5 hidden items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-stone-200 backdrop-blur md:flex">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              <span>
                Free estimates • Tree removal • Trimming • Stump grinding
              </span>
            </div>

            <div className="flex items-center gap-2 text-emerald-300">
              <MapPin className="h-4 w-4" />
              <span>Serving Southern New Mexico</span>
            </div>
          </div>

          <header className="flex items-center justify-between rounded-3xl border border-white/10 bg-stone-950/70 px-4 py-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-stone-950 shadow-lg shadow-emerald-950/30">
                <TreePine className="h-7 w-7" />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-300">
                  High Point
                </p>
                <p className="text-lg font-black leading-tight text-white">
                  Tree Service LLC
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-semibold text-stone-200 lg:flex">
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

            <div className="hidden items-center gap-3 md:flex">
              <a
                href={`sms:${smsNumber}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <MessageSquare className="h-4 w-4" />
                Text
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-black text-stone-950 transition hover:bg-emerald-300"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>

            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400 text-stone-950 md:hidden"
              aria-label="Call High Point Tree Service"
            >
              <Phone className="h-5 w-5" />
            </a>
          </header>

          <div className="grid min-h-[78vh] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
                <ShieldCheck className="h-4 w-4" />
                Professional Tree Service in New Mexico
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Safe, reliable tree work built around your property.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
                High Point Tree Service LLC helps homeowners and businesses with
                tree removal, trimming, pruning, stump grinding, storm cleanup,
                and tree assessments across Las Cruces, Alamogordo, Ruidoso,
                Roswell, and surrounding New Mexico communities.
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

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
                  <p className="text-3xl font-black text-emerald-300">Free</p>
                  <p className="mt-1 text-sm font-medium text-stone-300">
                    Quote Requests
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
                  <p className="text-3xl font-black text-emerald-300">5+</p>
                  <p className="mt-1 text-sm font-medium text-stone-300">
                    Core Services
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
                  <p className="text-3xl font-black text-emerald-300">NM</p>
                  <p className="mt-1 text-sm font-medium text-stone-300">
                    Local Service Areas
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-emerald-400/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-stone-900 shadow-2xl shadow-black/40">
                <div className="relative h-[420px] bg-[linear-gradient(to_bottom,rgba(12,10,9,0.05),rgba(12,10,9,0.82)),url('/images/tree-service-hero.png')] bg-cover bg-center">
                  <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-stone-950/70 px-4 py-3 backdrop-blur">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
                      Tree Work
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      Removal • Pruning • Cleanup
                    </p>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-stone-950/80 p-5 backdrop-blur-xl">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
                      Fast Quote Requests
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-white">
                      Need tree work done?
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-stone-300">
                      Call, text, or submit a quote request with your service
                      type, location, and job details.
                    </p>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {[
                        "Tree removal",
                        "Trimming",
                        "Storm cleanup",
                        "Stump grinding",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-stone-100"
                        >
                          <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                          {item}
                        </div>
                      ))}
                    </div>
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
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">
                Tree Services
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Tree removal, trimming, stump grinding, and cleanup done with
                care.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                Whether you have a hazardous tree, overgrown branches, storm
                damage, or a stump that needs to be removed, High Point Tree
                Service helps keep your property safe, clean, and easier to
                maintain.
              </p>
            </div>

            <a
              href="#quote"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-stone-950 px-6 py-4 font-black text-white transition hover:bg-emerald-700"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-black">{service.title}</h3>
                  <p className="mt-3 leading-7 text-stone-600">
                    {service.description}
                  </p>

                  <a
                    href="#quote"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black text-emerald-700"
                  >
                    Request this service
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-stone-950 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-stone-950 shadow-2xl">
            <div className="h-72 bg-[linear-gradient(to_bottom,rgba(12,10,9,0.05),rgba(12,10,9,0.75)),url('/images/tree-service-hero.png')] bg-cover bg-center" />

            <div className="p-7 text-white sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">
                Built For Trust
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Dependable tree service for homes, properties, and businesses.
              </h2>

              <div className="mt-7 grid gap-4">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                    <p className="text-sm leading-6 text-stone-200">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">
              About High Point
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Local tree service with a simple, professional customer
              experience.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-700">
              High Point Tree Service LLC helps homeowners, property managers,
              and businesses handle tree work safely and efficiently. From
              routine trimming to hazardous tree removal and storm cleanup, the
              goal is to protect your property and leave the job site clean.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
                <HomeIcon className="h-8 w-8 text-emerald-700" />
                <h3 className="mt-4 text-xl font-black">
                  Property Protection
                </h3>
                <p className="mt-3 leading-7 text-stone-600">
                  Tree work around homes, fences, driveways, and landscaping
                  should be handled with care and planning.
                </p>
              </div>

              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
                <Clock className="h-8 w-8 text-emerald-700" />
                <h3 className="mt-4 text-xl font-black">
                  Fast Communication
                </h3>
                <p className="mt-3 leading-7 text-stone-600">
                  Clear quote requests and mobile-friendly contact options help
                  customers get answers quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="bg-stone-950 px-5 py-24 text-white sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-300">
              Simple Process
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              From quote request to completed cleanup.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              Getting help should be simple. Send a request, share the details,
              and High Point Tree Service will follow up with the next steps.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {process.map((item) => (
              <article
                key={item.step}
                className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7"
              >
                <p className="text-5xl font-black text-emerald-300">
                  {item.step}
                </p>
                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-stone-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="areas"
        className="bg-stone-100 px-5 py-24 text-stone-950 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">
              Service Areas
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Serving communities across New Mexico.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              High Point Tree Service helps customers in Las Cruces,
              Alamogordo, Ruidoso, Roswell, and surrounding areas with tree
              removal, trimming, cleanup, and assessment needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="font-black">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-stone-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">
                Why Customers Call
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Clear communication, careful work, and clean results.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                Tree work can be stressful when safety, property damage, or
                storm cleanup is involved. High Point Tree Service focuses on
                responsive communication, practical solutions, and a clean
                finished job.
              </p>
            </div>

            <div className="flex gap-1 text-emerald-600">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-current" />
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {confidencePoints.map((point) => (
              <article
                key={point.title}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Star className="h-6 w-6 fill-current" />
                </div>

                <h3 className="text-2xl font-black text-stone-950">
                  {point.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-600">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="quote"
        className="bg-stone-950 px-5 py-24 text-white sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-300">
              Free Quote Request
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Tell us what tree work you need help with.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              Share the service you need, where the property is located, and how
              soon you need help. For urgent storm cleanup or hazardous trees,
              calling or texting is the fastest option.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 font-bold transition hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-stone-950">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p>Call Now</p>
                  <p className="text-sm font-medium text-stone-400">
                    {phoneNumber}
                  </p>
                </div>
              </a>

              <a
                href={`sms:${smsNumber}`}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 font-bold transition hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-stone-950">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <p>Text Photos</p>
                  <p className="text-sm font-medium text-stone-400">
                    Useful for tree photos, storm damage, and quick questions.
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 font-bold transition hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-stone-950">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p>Email</p>
                  <p className="text-sm font-medium text-stone-400">
                    {emailAddress}
                  </p>
                </div>
              </a>
            </div>
          </div>

          <form
  onSubmit={handleSubmit}
  className="rounded-[2rem] border border-white/10 bg-white p-6 text-stone-950 shadow-2xl sm:p-8"
>
            <div className="mb-7">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
                Request an Estimate
              </p>
              <h3 className="mt-2 text-3xl font-black">Get a Free Quote</h3>
              <p className="mt-2 leading-7 text-stone-600">
                Send the basics and High Point Tree Service will follow up with
                the next steps.
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
  {formStatus === "loading" ? "Sending Request..." : "Submit Quote Request"}
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

      <section className="bg-emerald-400 px-5 py-16 text-stone-950 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em]">
              Ready to get started?
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Call, text, or request a free quote for tree service in New
              Mexico.
            </h2>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-4 font-black text-white transition hover:bg-stone-800"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>

            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-stone-950 transition hover:bg-stone-100"
            >
              Request Quote
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 px-5 pb-28 pt-12 text-white sm:px-6 md:pb-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-stone-950">
                  <TreePine className="h-7 w-7" />
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
                and tree assessments across Las Cruces, Alamogordo, Ruidoso,
                Roswell, and surrounding New Mexico areas.
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