import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { serviceAreaPages } from "@/lib/serviceAreas";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas | High Point Tree Service LLC",
  description:
    "High Point Tree Service LLC serves Las Cruces, Ruidoso, Roswell, Alamogordo, and nearby Southern New Mexico communities with tree removal, trimming, stump grinding, cleanup, and assessments.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    title: "Service Areas | High Point Tree Service LLC",
    description:
      "Tree service across Las Cruces, Ruidoso, Roswell, Alamogordo, and nearby Southern New Mexico communities.",
    url: "/service-areas",
    type: "website",
  },
};

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen bg-[#07120d] text-[#fff8df]">
      <section className="relative overflow-hidden px-5 py-5 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(240,212,136,0.13),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(255,248,223,0.08),transparent_28%),linear-gradient(135deg,#07120d_0%,#10251b_48%,#07120d_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <SiteHeader activePage="services" />
        </div>
      </section>

      <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(240,212,136,0.16),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(32,63,41,0.9),transparent_34%),linear-gradient(135deg,#07120d_0%,#183722_58%,#07120d_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,rgba(255,248,223,0.18)_1px,transparent_1px),linear-gradient(rgba(255,248,223,0.18)_1px,transparent_1px)] bg-[size:92px_92px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#f0d488]">
              Service Areas
            </p>

            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight text-[#fff8df] sm:text-6xl lg:text-7xl">
              Tree service across Southern New Mexico communities.
            </h1>
          </div>

          <div className="rounded-[2rem] border border-[#f0d488]/18 bg-[#07120d]/60 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
            <p className="text-lg leading-8 text-[#d8d1bf]">
              High Point Tree Service serves {siteConfig.serviceAreaLabel}.
              Availability can depend on job size, travel distance, access, and
              schedule.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0d488] px-6 py-4 text-sm font-black text-[#07120d] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#ffe7a2]"
              >
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f0d488]/25 bg-[#fff8df]/[0.08] px-6 py-4 text-sm font-black text-[#fff8df] transition hover:-translate-y-0.5 hover:bg-[#fff8df]/[0.12] hover:text-[#f0d488]"
              >
                <Phone className="h-5 w-5" />
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#10251b] px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#10251b_0%,#203f29_52%,#10251b_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d488]/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
                Local Pages
              </p>

              <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
                Choose the closest service area.
              </h2>
            </div>

            <p className="text-lg leading-8 text-[#d8d1bf] lg:ml-auto lg:max-w-2xl">
              Each area page explains common local tree service needs and links
              to the services High Point can review for that property.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serviceAreaPages.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group rounded-[1.6rem] border border-[#f0d488]/16 bg-[#07120d]/70 p-6 transition hover:-translate-y-1 hover:border-[#f0d488]/40 hover:bg-[#183722]"
              >
                <MapPin className="h-7 w-7 text-[#f0d488]" />

                <h3 className="mt-5 font-serif text-2xl font-black text-[#fff8df]">
                  {area.label}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#d8d1bf]">
                  {area.overview}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#f0d488]">
                  View area
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
