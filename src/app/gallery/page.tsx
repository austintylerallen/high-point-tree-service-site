import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  Phone,
  ShieldCheck,
  TreePine,
  Truck,
  Wrench,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";

const workItems = [
  {
    title: "Tree Removal",
    location: "Southern New Mexico",
    description:
      "Removal support for dead, damaged, leaning, crowded, or unwanted trees that need careful planning around nearby structures, fences, driveways, and outdoor spaces.",
    icon: TreePine,
  },
  {
    title: "Tree Trimming & Pruning",
    location: "Southern New Mexico",
    description:
      "Trimming and pruning for overgrown limbs, roof clearance, walkways, fences, visibility, shaping, and routine tree maintenance.",
    icon: ClipboardCheck,
  },
  {
    title: "Storm Damage Cleanup",
    location: "Southern New Mexico",
    description:
      "Cleanup for fallen limbs, broken branches, blocked access, and tree debris after wind, storms, and rough New Mexico weather.",
    icon: AlertTriangle,
  },
  {
    title: "Stump Grinding",
    location: "Southern New Mexico",
    description:
      "Grinding and cleanup for old or freshly cut stumps that make a yard harder to mow, use, maintain, or landscape.",
    icon: Wrench,
  },
  {
    title: "Property Cleanup",
    location: "Southern New Mexico",
    description:
      "Brush, limbs, tree debris, and cleanup support after removals, trimming, storm damage, or neglected outdoor areas.",
    icon: Truck,
  },
  {
    title: "Tree Assessments",
    location: "Southern New Mexico",
    description:
      "Property walkthroughs to help determine whether a tree needs removal, trimming, cleanup, grinding, monitoring, or another next step.",
    icon: ShieldCheck,
  },
];

const workPriorities = [
  {
    title: "Property safety",
    description:
      "Tree work is planned around homes, fences, driveways, landscaping, access points, and the spaces people use every day.",
  },
  {
    title: "Cleaner outdoor spaces",
    description:
      "Removal, trimming, grinding, and cleanup services help make the property easier to access, maintain, and use.",
  },
  {
    title: "Clear next steps",
    description:
      "When the right solution is not obvious, High Point can review the concern and help determine whether the property needs removal, trimming, cleanup, grinding, or an assessment.",
  },
];

const commonRequests = [
  "Dead, damaged, or unwanted tree removal",
  "Overgrown limb trimming and pruning",
  "Stump grinding and yard cleanup",
  "Storm damage and fallen branch cleanup",
  "Brush, limb, and tree debris removal",
  "Tree assessments and property walkthroughs",
];

export const metadata: Metadata = {
  title: "Tree Service Work Guide | High Point Tree Service LLC",
  description:
    "Learn how High Point Tree Service LLC helps with tree removal, trimming, pruning, stump grinding, storm damage cleanup, tree assessments, and property cleanup across Southern New Mexico.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Tree Service Work Guide | High Point Tree Service LLC",
    description:
      "Tree removal, trimming, pruning, stump grinding, storm damage cleanup, tree assessments, and property cleanup across Southern New Mexico.",
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
              Tree service work focused on safer, cleaner properties.
            </h1>
          </div>

          <div className="rounded-[2rem] border border-[#f0d488]/18 bg-[#07120d]/60 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
            <p className="text-lg leading-8 text-[#d8d1bf]">
              High Point Tree Service helps property owners choose the right
              next step for tree removal, trimming, pruning, stump grinding,
              storm damage cleanup, tree assessments, and property cleanup.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#fff8df]/70">
              Real project photos can be added here later. For now, this page
              explains the types of work customers can request without making
              the site look like it has missing gallery images.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#10251b] px-5 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#10251b_0%,#203f29_52%,#10251b_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d488]/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
                Service Categories
              </p>

              <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
                Tree work organized by the problems property owners need solved.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#d8d1bf] lg:ml-auto">
              Whether the issue is a hazardous tree, overgrown limbs, a stump in
              the way, storm debris, or a property that needs cleanup, High
              Point helps customers choose the right next step.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2.4rem] border border-[#f0d488]/18 bg-[#f0d488]/18 shadow-2xl shadow-black/25 md:grid-cols-2 lg:grid-cols-3">
            {workItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden bg-[#07120d] p-7"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(240,212,136,0.13),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(32,63,41,0.65),transparent_42%),linear-gradient(135deg,#07120d,#10251b)] opacity-90 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f0d488]/20 bg-[#07120d]/70 text-[#f0d488]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-[#f0d488]">
                      {item.location}
                    </p>

                    <h3 className="mt-2 font-serif text-3xl font-black text-[#fff8df]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#d8d1bf]">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07120d] px-5 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(240,212,136,0.13),transparent_26%),radial-gradient(circle_at_82%_55%,rgba(32,63,41,0.8),transparent_34%),linear-gradient(135deg,#07120d_0%,#10251b_58%,#07120d_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Work Standards
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              The goal is safe work, clear access, and a cleaner finished space.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#d8d1bf]">
              Tree work affects more than the tree itself. High Point plans each
              job around the surrounding property, cleanup needs, and the reason
              the customer requested help in the first place.
            </p>
          </div>

          <div className="grid gap-4">
            {workPriorities.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.6rem] border border-[#f0d488]/18 bg-[#10251b]/70 p-6 shadow-xl shadow-black/15"
              >
                <div className="flex gap-4">
                  <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[#f0d488]" />

                  <div>
                    <h3 className="font-serif text-2xl font-black text-[#fff8df]">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#d8d1bf]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#183722] px-5 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,248,223,0.10),transparent_28%),radial-gradient(circle_at_84%_40%,rgba(240,212,136,0.16),transparent_30%),linear-gradient(135deg,#10251b_0%,#203f29_56%,#07120d_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Common Requests
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Tree service support for residential and commercial properties.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#d8d1bf]">
              Customers often reach out when a tree looks unsafe, limbs are too
              close to structures, storm debris is blocking access, or a stump
              is making the property harder to maintain.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#f0d488]/18 bg-[#f0d488]/18 shadow-2xl shadow-black/25 sm:grid-cols-2">
            {commonRequests.map((item) => (
              <div key={item} className="bg-[#07120d]/90 p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f0d488]" />
                  <p className="font-black text-[#fff8df]">{item}</p>
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
              Customers can send the property location to confirm availability
              and request the right tree service for the job.
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
              Need tree work handled?
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#d8d1bf]">
              Send the property location, a short description, and photos if
              available. High Point can help determine the right next step for
              removal, trimming, stump grinding, cleanup, or assessment.
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
