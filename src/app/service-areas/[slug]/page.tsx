import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";
import { servicePages } from "@/lib/services";
import { getServiceAreaPage, serviceAreaPages } from "@/lib/serviceAreas";

type ServiceAreaPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return serviceAreaPages.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaPage(slug);

  if (!area) {
    return {};
  }

  const pageUrl = `/service-areas/${area.slug}`;

  return {
    title: area.metadataTitle,
    description: area.metadataDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: area.metadataTitle,
      description: area.metadataDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: siteConfig.heroImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} tree service in ${area.label}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: area.metadataTitle,
      description: area.metadataDescription,
      images: [siteConfig.heroImage],
    },
  };
}

export default async function ServiceAreaDetailPage({
  params,
}: ServiceAreaPageProps) {
  const { slug } = await params;
  const area = getServiceAreaPage(slug);

  if (!area) {
    notFound();
  }

  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    telephone: siteConfig.phoneE164,
    url: `${siteConfig.url}/service-areas/${area.slug}`,
    image: `${siteConfig.url}${siteConfig.logo}`,
    areaServed: {
      "@type": "City",
      name: area.city,
      addressRegion: area.region,
      addressCountry: "US",
    },
    makesOffer: servicePages.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${service.title} in ${area.label}`,
        serviceType: service.title,
        url: `${siteConfig.url}/services/${service.slug}`,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#07120d] text-[#fff8df]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceAreaSchema).replace(/</g, "\\u003c"),
        }}
      />

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
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#f0d488] transition hover:text-[#fff8df]"
            >
              Service Areas
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#f0d488]/20 bg-[#f0d488]/10 text-[#f0d488]">
              <MapPin className="h-8 w-8" />
            </div>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.26em] text-[#f0d488]">
              {area.label}
            </p>

            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight text-[#fff8df] sm:text-6xl lg:text-7xl">
              {area.heroTitle}
            </h1>
          </div>

          <div className="rounded-[2rem] border border-[#f0d488]/18 bg-[#07120d]/60 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
            <p className="text-lg leading-8 text-[#d8d1bf]">
              {area.intro}
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

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Local Tree Service
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Common property concerns in {area.city}.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#d8d1bf]">
              {area.overview}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {area.propertyConcerns.map((concern) => (
              <div
                key={concern}
                className="rounded-[1.4rem] border border-[#f0d488]/16 bg-[#07120d]/70 p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f0d488]" />
                  <p className="font-black leading-7 text-[#fff8df]">
                    {concern}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07120d] px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(240,212,136,0.14),transparent_26%),radial-gradient(circle_at_82%_55%,rgba(32,63,41,0.8),transparent_34%),linear-gradient(135deg,#07120d_0%,#10251b_58%,#07120d_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
                Available Services
              </p>

              <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
                Choose the service that matches the problem.
              </h2>
            </div>

            <p className="text-lg leading-8 text-[#d8d1bf] lg:ml-auto lg:max-w-2xl">
              The right solution depends on the tree, access, surrounding
              structures, cleanup needs, and how urgent the concern is.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-[1.6rem] border border-[#f0d488]/16 bg-[#10251b]/70 p-6 transition hover:-translate-y-1 hover:border-[#f0d488]/40 hover:bg-[#183722]"
                >
                  <Icon className="h-7 w-7 text-[#f0d488]" />

                  <h3 className="mt-5 font-serif text-2xl font-black text-[#fff8df]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#d8d1bf]">
                    {service.intro}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#f0d488]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#183722] px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,248,223,0.10),transparent_28%),radial-gradient(circle_at_84%_40%,rgba(240,212,136,0.16),transparent_30%),linear-gradient(135deg,#10251b_0%,#203f29_56%,#07120d_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Nearby Communities
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Areas High Point can review for service.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#d8d1bf]">
              Availability can depend on job size, travel distance, access,
              schedule, and the type of tree work needed.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {area.nearbyAreas.map((nearbyArea) => (
              <div
                key={nearbyArea}
                className="rounded-[1.4rem] border border-[#f0d488]/16 bg-[#07120d]/70 p-5"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#f0d488]" />
                  <p className="font-black leading-7 text-[#fff8df]">
                    {nearbyArea}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#10251b] px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#10251b_0%,#203f29_58%,#07120d_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              How to Start
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Request an estimate in {area.city}.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#d8d1bf]">
              Share the property location, the tree concern, and any photos that
              help show the issue. High Point can review the request and help
              determine the right next step.
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
