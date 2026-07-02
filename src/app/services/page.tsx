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
  Wrench,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";
import { servicePages } from "@/lib/services";



const serviceNav = [
  {
    label: "Tree Removal",
    href: "#tree-removal",
  },
  {
    label: "Trimming & Pruning",
    href: "#tree-trimming-pruning",
  },
  {
    label: "Stump Grinding",
    href: "#stump-grinding",
  },
  {
    label: "Storm Cleanup",
    href: "#storm-damage-cleanup",
  },
  {
    label: "Tree Assessments",
    href: "#tree-assessments",
  },
  {
    label: "Property Cleanup",
    href: "#property-cleanup",
  },
];

const problemGuides = [
  {
    title: "A tree looks unsafe",
    description:
      "Leaning trunks, dead limbs, cracked wood, weak branches, or storm damage should be looked at before the issue becomes a bigger risk.",
    recommendation: "Tree assessment or tree removal",
    icon: ShieldCheck,
  },
  {
    title: "Branches are too close",
    description:
      "Overgrown limbs near roofs, fences, driveways, walkways, or utility areas can create clearance problems and safety concerns.",
    recommendation: "Tree trimming or pruning",
    icon: ClipboardCheck,
  },
  {
    title: "A storm left a mess",
    description:
      "Wind and rough New Mexico weather can leave fallen branches, blocked access, broken limbs, and scattered tree debris across the property.",
    recommendation: "Storm damage cleanup",
    icon: AlertTriangle,
  },
  {
    title: "The yard feels unfinished",
    description:
      "Old stumps, brush piles, and leftover debris can make a property harder to mow, maintain, landscape, or use safely.",
    recommendation: "Stump grinding or property cleanup",
    icon: Wrench,
  },
];

const services = servicePages;

export const metadata: Metadata = {
  title: "Tree Services in Southern New Mexico | High Point Tree Service LLC",
  description:
    "High Point Tree Service LLC provides tree removal, trimming, pruning, stump grinding, storm damage cleanup, tree assessments, and property cleanup in Las Cruces, Ruidoso, Roswell, Alamogordo, and nearby areas.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Tree Services in Southern New Mexico | High Point Tree Service LLC",
    description:
      "Tree removal, trimming, pruning, stump grinding, storm damage cleanup, tree assessments, and property cleanup for Southern New Mexico properties.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#07120d] text-white">
      <section className="relative overflow-hidden px-5 py-5 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(240,212,136,0.13),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(255,248,223,0.08),transparent_28%),linear-gradient(135deg,#07120d_0%,#10251b_48%,#07120d_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <SiteHeader activePage="services" />
        </div>
      </section>

      <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(240,212,136,0.16),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(32,63,41,0.9),transparent_34%),linear-gradient(135deg,#07120d_0%,#183722_58%,#07120d_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,rgba(255,248,223,0.18)_1px,transparent_1px),linear-gradient(rgba(255,248,223,0.18)_1px,transparent_1px)] bg-[size:92px_92px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#f0d488]">
              High Point Tree Service LLC
            </p>

            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight text-[#fff8df] sm:text-6xl lg:text-7xl">
              Tree services for safer, cleaner, easier-to-maintain properties.
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-2xl text-lg leading-8 text-[#d8d1bf]">
              High Point Tree Service helps property owners choose the right
              solution for unsafe trees, overgrown branches, storm damage,
              leftover stumps, and outdoor cleanup needs across Southern New
              Mexico.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-[#fff8df]">
              {siteConfig.serviceAreas.map((area) => (
                <span key={area} className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#f0d488]" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#10251b] px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#10251b_0%,#203f29_52%,#10251b_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d488]/70 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Service Guide
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Start with what you are seeing.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-[#d8d1bf]">
              Not every tree problem starts with a clear service name. Use the
              guide below to match the issue on the property with the service
              that usually fits best.
            </p>

            <nav className="mt-8 border-l border-[#f0d488]/25">
              {serviceNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border-l-2 border-transparent px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#d8d1bf] transition hover:border-[#f0d488] hover:text-[#f0d488]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#f0d488]/18 bg-[#f0d488]/18 shadow-2xl shadow-black/25 sm:grid-cols-2">
            {problemGuides.map((problem) => {
              const Icon = problem.icon;

              return (
                <article
                  key={problem.title}
                  className="group bg-[#07120d]/92 p-7 transition hover:bg-[#183722]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f0d488] text-[#07120d]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-black text-[#fff8df]">
                        {problem.title}
                      </h3>

                      <p className="mt-3 leading-7 text-[#d8d1bf]">
                        {problem.description}
                      </p>

                      <p className="mt-5 text-sm font-black uppercase tracking-[0.16em] text-[#f0d488]">
                        Usually: {problem.recommendation}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07120d] px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(240,212,136,0.14),transparent_26%),radial-gradient(circle_at_82%_55%,rgba(32,63,41,0.8),transparent_34%),linear-gradient(135deg,#07120d_0%,#10251b_58%,#07120d_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Detailed Services
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              The right service depends on what needs to be fixed.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#d8d1bf]">
              High Point handles common residential and commercial tree service
              needs, from urgent cleanup after wind damage to planned trimming,
              removal, stump grinding, and property cleanup.
            </p>
          </div>

          <div className="mt-14 divide-y divide-[#f0d488]/16 border-y border-[#f0d488]/16">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <section
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-28 grid gap-8 py-12 lg:grid-cols-[0.34fr_0.76fr_0.5fr] lg:gap-10"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f0d488]/20 bg-[#f0d488]/10 text-[#f0d488]">
                        <Icon className="h-7 w-7" />
                      </div>

                      <p className="text-sm font-black tracking-[0.18em] text-[#f0d488]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>

                    <h3 className="mt-6 font-serif text-3xl font-black tracking-tight text-[#fff8df] sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-[#f0d488]">
                      {service.eyebrow}
                    </p>
                  </div>

                  <div>
                    <p className="text-lg leading-8 text-[#d8d1bf]">
                      {service.body}
                    </p>

                    <div className="mt-6 border-l-2 border-[#f0d488]/40 pl-5">
                      <p className="text-sm font-black uppercase tracking-[0.16em] text-[#f0d488]">
                        Goal
                      </p>

                      <p className="mt-2 leading-7 text-[#fff8df]">
                        {service.outcome}
                      </p>

                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-[#f0d488] transition hover:text-[#fff8df]"
                      >
                        Learn more about {service.shortTitle}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-[#f0d488]/15 bg-[#fff8df]/5 p-5">
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#f0d488]">
                      Common signs
                    </p>

                    <div className="mt-5 grid gap-3">
                      {service.signs.map((sign) => (
                        <div key={sign} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f0d488]" />
                          <span className="text-sm leading-6 text-[#d8d1bf]">
                            {sign}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#183722] px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,248,223,0.10),transparent_28%),radial-gradient(circle_at_84%_40%,rgba(240,212,136,0.16),transparent_30%),linear-gradient(135deg,#10251b_0%,#203f29_56%,#07120d_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Local Service Areas
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Serving Las Cruces, Ruidoso, Roswell, Alamogordo, and nearby
              areas.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#d8d1bf]">
              High Point Tree Service serves key Southern New Mexico
              communities. If a property is outside the main service area,
              customers can still send the location to confirm availability.
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

      <section className="relative overflow-hidden bg-[#07120d] px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#07120d_0%,#10251b_70%,#07120d_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 border-y border-[#f0d488]/15 py-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Free Estimates
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Not sure which tree service fits?
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#d8d1bf]">
              Send the property location, a short description, and photos if
              available. High Point Tree Service can help determine whether the
              issue calls for removal, trimming, cleanup, stump grinding, or an
              assessment.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0d488] px-7 py-4 text-base font-black text-[#07120d] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#ffe7a2]"
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