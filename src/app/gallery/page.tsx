import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  ClipboardCheck,
  MapPin,
  Phone,
  Wrench,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";

const quoteTips = [
  {
    title: "Start with the location",
    description:
      "Share the city, neighborhood, or property address so High Point can confirm availability and understand the access needs.",
    icon: MapPin,
  },
  {
    title: "Show the full tree or area",
    description:
      "Photos are most helpful when they show the whole tree, nearby structures, driveways, fences, and the surrounding space.",
    icon: ClipboardCheck,
  },
  {
    title: "Include the main concern",
    description:
      "Mention whether the issue is a dead tree, overgrown limbs, storm debris, a stump, blocked access, or general cleanup.",
    icon: AlertTriangle,
  },
  {
    title: "Mention access or obstacles",
    description:
      "Let High Point know about gates, narrow driveways, slopes, pets, utilities, or anything that may affect the work area.",
    icon: Wrench,
  },
];

const urgentSigns = [
  "A tree is leaning more than usual or appears unstable",
  "Large limbs are cracked, hanging, or close to falling",
  "Branches are touching the roof, structure, or access area",
  "Storm debris is blocking a driveway, gate, walkway, or yard",
  "A dead or damaged tree is near people, vehicles, fences, or buildings",
];

const processSteps = [
  {
    title: "Review the concern",
    description:
      "High Point reviews the tree, property location, photos, and the reason the customer reached out.",
  },
  {
    title: "Match the right service",
    description:
      "The next step may be removal, trimming, pruning, stump grinding, cleanup, or a closer assessment.",
  },
  {
    title: "Plan around the property",
    description:
      "Work is planned around access, structures, fences, driveways, landscaping, and cleanup expectations.",
  },
  {
    title: "Handle the work clearly",
    description:
      "The goal is practical tree service, clear communication, and a safer, cleaner finished space.",
  },
];

export const metadata: Metadata = {
  title: "Tree Service Work Guide | High Point Tree Service LLC",
  description:
    "Use this tree service guide to understand what to send with a quote request, when tree work may be urgent, and how High Point Tree Service approaches property-focused tree work.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Tree Service Work Guide | High Point Tree Service LLC",
    description:
      "A practical guide for requesting tree removal, trimming, stump grinding, storm cleanup, assessments, and property cleanup from High Point Tree Service.",
    url: "/gallery",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#07120d] text-[#fff8df]">
      <section className="relative overflow-hidden px-5 py-5 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(240,212,136,0.14),transparent_30%),radial-gradient(circle_at_88%_20%,rgba(255,248,223,0.07),transparent_28%),linear-gradient(135deg,#07120d_0%,#10251b_52%,#07120d_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <SiteHeader activePage="gallery" />
        </div>
      </section>

      <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(240,212,136,0.16),transparent_30%),radial-gradient(circle_at_84%_70%,rgba(32,63,41,0.9),transparent_34%),linear-gradient(135deg,#07120d_0%,#183722_56%,#07120d_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,rgba(255,248,223,0.18)_1px,transparent_1px),linear-gradient(rgba(255,248,223,0.18)_1px,transparent_1px)] bg-[size:92px_92px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#f0d488]">
              Work Guide
            </p>

            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-black leading-[0.96] tracking-tight text-[#fff8df] sm:text-6xl lg:text-7xl">
              Make your tree service request easier to review.
            </h1>
          </div>

          <div className="rounded-[2rem] border border-[#f0d488]/18 bg-[#07120d]/60 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
            <p className="text-lg leading-8 text-[#d8d1bf]">
              A clear request helps High Point understand the property, the tree
              concern, and the safest next step before scheduling tree work.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#fff8df]/70">
              This guide explains what to include, when a tree issue may need
              faster attention, and how the work is typically reviewed.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#10251b] px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#10251b_0%,#203f29_52%,#10251b_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d488]/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
                Quote Requests
              </p>

              <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
                What to send when requesting an estimate.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#d8d1bf] lg:ml-auto">
              Customers do not need to know the exact service name. The best
              starting point is a clear description, the property location, and
              photos that show the concern.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quoteTips.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.6rem] border border-[#f0d488]/16 bg-[#07120d]/70 p-6 shadow-xl shadow-black/15"
                >
                  <Icon className="h-7 w-7 text-[#f0d488]" />

                  <h3 className="mt-5 font-serif text-2xl font-black text-[#fff8df]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#d8d1bf]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07120d] px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(240,212,136,0.13),transparent_26%),radial-gradient(circle_at_82%_55%,rgba(32,63,41,0.8),transparent_34%),linear-gradient(135deg,#07120d_0%,#10251b_58%,#07120d_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              When to Reach Out
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Some tree concerns should not wait too long.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#d8d1bf]">
              Tree problems can become more serious when they involve unstable
              trees, hanging limbs, storm damage, blocked access, or branches
              near structures and high-use areas.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#f0d488]/18 bg-[#f0d488]/18 shadow-2xl shadow-black/25">
            {urgentSigns.map((item) => (
              <div key={item} className="bg-[#10251b]/92 p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-[#f0d488]" />
                  <p className="font-black leading-7 text-[#fff8df]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#183722] px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,248,223,0.10),transparent_28%),radial-gradient(circle_at_84%_40%,rgba(240,212,136,0.16),transparent_30%),linear-gradient(135deg,#10251b_0%,#203f29_56%,#07120d_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              How It Works
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              A practical review before the work begins.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#d8d1bf]">
              High Point focuses on the tree, the surrounding property, and the
              outcome the customer needs, not just a one-size-fits-all service
              label.
            </p>
          </div>

          <div className="grid gap-4">
            {processSteps.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[1.6rem] border border-[#f0d488]/18 bg-[#07120d]/70 p-6 shadow-xl shadow-black/15"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0d488] text-sm font-black text-[#07120d]">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-black text-[#fff8df]">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-[#d8d1bf]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#10251b] px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(240,212,136,0.13),transparent_28%),linear-gradient(135deg,#10251b_0%,#183722_60%,#07120d_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Service Area
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Serving key Southern New Mexico communities.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#d8d1bf]">
              High Point Tree Service serves {siteConfig.serviceAreaLabel}.
              Send the property location to confirm availability.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {siteConfig.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 rounded-full border border-[#f0d488]/20 bg-[#07120d]/55 px-4 py-2 text-sm font-black text-[#fff8df]"
                >
                  <MapPin className="h-4 w-4 text-[#f0d488]" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07120d] px-5 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl gap-10 border-y border-[#f0d488]/15 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Free Estimates
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Ready to send the details?
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#d8d1bf]">
              Send the property location, a short description, and photos if
              available. High Point can help determine the right next step.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0d488] px-7 py-4 text-base font-black text-[#07120d] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#fff8df]"
              >
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f0d488]/25 bg-[#fff8df]/[0.08] px-7 py-4 text-base font-black text-[#fff8df] transition hover:-translate-y-0.5 hover:bg-[#fff8df]/[0.12] hover:text-[#f0d488]"
              >
                <Phone className="h-5 w-5" />
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
