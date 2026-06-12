import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

const phoneNumber = "(505) 372-9043";
const phoneHref = "tel:+15053729043";
const smsHref = "sms:+15053729043";
const emailAddress = "info@highpointtreeservicenm.com";

const serviceAreas = [
  "Las Cruces",
  "Ruidoso",
  "Roswell",
  "Alamogordo",
  "Nearby Areas",
];

const contactMethods = [
  {
    label: "Call",
    title: phoneNumber,
    description:
      "Best for urgent tree concerns, storm damage, blocked access, or fast answers.",
    href: phoneHref,
    icon: Phone,
  },
  {
    label: "Text",
    title: "Send photos by text",
    description:
      "Helpful for tree damage, access issues, stumps, cleanup needs, and quick property details.",
    href: smsHref,
    icon: MessageSquare,
  },
  {
    label: "Email",
    title: emailAddress,
    description:
      "Good for non-urgent project details, quote follow-ups, and additional information.",
    href: `mailto:${emailAddress}`,
    icon: Mail,
  },
];

const quoteDetails = [
  "Property location",
  "Type of tree work needed",
  "Urgency or safety concerns",
  "Photos if available",
];

export const metadata: Metadata = {
  title: "Contact High Point Tree Service LLC | Free Tree Service Quote",
  description:
    "Contact High Point Tree Service LLC for tree removal, trimming, pruning, stump grinding, storm damage cleanup, tree assessments, and property cleanup in Las Cruces, Ruidoso, Roswell, Alamogordo, and nearby areas.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact High Point Tree Service LLC",
    description:
      "Request a free quote for tree removal, trimming, pruning, stump grinding, storm damage cleanup, tree assessments, and property cleanup across Southern New Mexico.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#07120d] text-[#fff8df]">
      <section className="bg-[#07120d] px-5 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SiteHeader activePage="contact" />
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#f0d488]/10 bg-[linear-gradient(135deg,#07120d_0%,#10251b_48%,#203f29_100%)] px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,rgba(255,248,223,0.22)_1px,transparent_1px),linear-gradient(rgba(255,248,223,0.22)_1px,transparent_1px)] bg-[size:84px_84px]" />
        <div className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-[#f0d488]/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#203f29]/80 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f0d488]">
              Contact High Point
            </p>

            <h1 className="mt-5 max-w-4xl font-serif text-5xl font-black tracking-tight text-[#fff8df] sm:text-6xl lg:text-7xl">
              Request a clear quote for tree work.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#fff8df]/78">
              Tell High Point Tree Service what is happening on the property.
              They can review the location, service need, urgency, and any
              photos you provide to help determine the right next step.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#f0d488]/18 bg-[#07120d]/62 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Fastest way to get help
            </p>

            <div className="mt-6 space-y-6">
              {contactMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <Link
                    key={method.label}
                    href={method.href}
                    className="group grid grid-cols-[48px_1fr] gap-4 border-b border-[#fff8df]/10 pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0d488] text-[#07120d] transition group-hover:-translate-y-0.5">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f0d488]/80">
                        {method.label}
                      </p>

                      <p className="mt-1 text-xl font-black text-[#fff8df]">
                        {method.title}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[#fff8df]/62">
                        {method.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(155deg,#10251b_0%,#183722_45%,#07120d_100%)] px-5 py-24 sm:px-6 lg:px-8">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(240,212,136,0.18),transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside className="lg:sticky lg:top-8">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f0d488]">
              Free Quote Request
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Send the job details once. High Point can take it from there.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#fff8df]/72">
              The more useful the details are, the easier it is to understand
              the job, confirm availability, and follow up with the right next
              step.
            </p>

            <div className="mt-10 border-y border-[#f0d488]/18 py-7">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f0d488]">
                Helpful to include
              </p>

              <div className="mt-5 grid gap-4">
                {quoteDetails.map((detail) => (
                  <div key={detail} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#f0d488]" />
                    <span className="text-[#fff8df]/82">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1.6rem] border border-[#f0d488]/16 bg-[#07120d]/50 p-5">
              <div className="flex gap-4">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-[#f0d488]" />

                <div>
                  <p className="font-black text-[#fff8df]">
                    For urgent tree concerns
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#fff8df]/64">
                    Calling or texting is usually faster for storm damage,
                    hazardous limbs, blocked access, or immediate safety
                    concerns.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>

      <section className="bg-[#0b1710] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-[#f0d488]/12 pt-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f0d488]">
              Service Area
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Serving Las Cruces, Ruidoso, Roswell, Alamogordo, and nearby
              areas.
            </h2>
          </div>

          <div>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 rounded-full border border-[#f0d488]/18 bg-[#fff8df]/[0.07] px-5 py-3 text-sm font-black text-[#fff8df]"
                >
                  <MapPin className="h-4 w-4 text-[#f0d488]" />
                  {area}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-[#fff8df]/62">
              Not sure if the property is within range? Include the city,
              neighborhood, or address in the quote request and High Point Tree
              Service can confirm availability.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#f0d488] transition hover:text-[#fff8df]"
            >
              View Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}