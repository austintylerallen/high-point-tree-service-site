import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";
import { getServicePage, servicePages } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  const pageUrl = `/services/${service.slug}`;

  return {
    title: service.metadataTitle,
    description: service.metadataDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: service.metadataTitle,
      description: service.metadataDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: siteConfig.heroImage,
          width: 1200,
          height: 630,
          alt: `${service.title} from High Point Tree Service LLC`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metadataTitle,
      description: service.metadataDescription,
      images: [siteConfig.heroImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  const relatedServices = service.relatedServices
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter((relatedService) => relatedService !== undefined);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} - ${siteConfig.name}`,
    description: service.metadataDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phoneE164,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.logo}`,
      areaServed: siteConfig.schemaServiceAreas.map((area) => ({
        "@type": area.type,
        name: area.name,
        addressRegion: area.region,
        addressCountry: area.country,
      })),
    },
    areaServed: siteConfig.schemaServiceAreas.map((area) => ({
      "@type": area.type,
      name: area.name,
      addressRegion: area.region,
      addressCountry: area.country,
    })),
    serviceType: service.title,
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  return (
    <main className="min-h-screen bg-[#07120d] text-[#fff8df]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
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
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#f0d488] transition hover:text-[#fff8df]"
            >
              Services
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#f0d488]/20 bg-[#f0d488]/10 text-[#f0d488]">
              <Icon className="h-8 w-8" />
            </div>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.26em] text-[#f0d488]">
              {service.eyebrow}
            </p>

            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight text-[#fff8df] sm:text-6xl lg:text-7xl">
              {service.heroTitle}
            </h1>
          </div>

          <div className="rounded-[2rem] border border-[#f0d488]/18 bg-[#07120d]/60 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
            <p className="text-lg leading-8 text-[#d8d1bf]">
              {service.intro}
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

      <section className="relative overflow-hidden bg-[#10251b] px-5 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#10251b_0%,#203f29_52%,#10251b_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d488]/70 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Service Overview
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              What this service helps solve.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#d8d1bf]">
              {service.body}
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-[#f0d488]/16 bg-[#07120d]/55 p-6">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#f0d488]">
                Goal
              </p>

              <p className="mt-3 leading-7 text-[#fff8df]">
                {service.outcome}
              </p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#f0d488]/18 bg-[#f0d488]/18 shadow-2xl shadow-black/25 sm:grid-cols-2">
            {service.goodFitFor.map((item) => (
              <div key={item} className="bg-[#07120d]/92 p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f0d488]" />
                  <p className="font-black leading-7 text-[#fff8df]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07120d] px-5 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(240,212,136,0.14),transparent_26%),radial-gradient(circle_at_82%_55%,rgba(32,63,41,0.8),transparent_34%),linear-gradient(135deg,#07120d_0%,#10251b_58%,#07120d_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Common Signs
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              When to request {service.shortTitle.toLowerCase()}.
            </h2>
          </div>

          <div className="grid gap-4">
            {service.signs.map((sign) => (
              <div
                key={sign}
                className="rounded-[1.4rem] border border-[#f0d488]/16 bg-[#10251b]/70 p-5"
              >
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#f0d488]" />
                  <p className="font-black leading-7 text-[#fff8df]">
                    {sign}
                  </p>
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
              How It Works
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              A simple process for getting the right tree service.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#f0d488]/18 bg-[#f0d488]/18 shadow-2xl shadow-black/25">
            {service.process.map((step, index) => (
              <div key={step} className="bg-[#07120d]/92 p-6">
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0d488] text-sm font-black text-[#07120d]">
                    {index + 1}
                  </div>

                  <p className="pt-1 font-black leading-7 text-[#fff8df]">
                    {step}
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
              Service Area
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Serving Southern New Mexico properties.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#d8d1bf]">
              High Point Tree Service provides {service.shortTitle.toLowerCase()}{" "}
              in {siteConfig.serviceAreaLabel}. Send the property location to
              confirm availability and request an estimate.
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

      {relatedServices.length > 0 && (
        <section className="relative overflow-hidden bg-[#07120d] px-5 py-20 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
                  Related Services
                </p>

                <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
                  Other tree services that may help.
                </h2>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-[#f0d488] transition hover:text-[#fff8df]"
              >
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="group rounded-[1.6rem] border border-[#f0d488]/16 bg-[#10251b]/70 p-6 transition hover:-translate-y-1 hover:border-[#f0d488]/40 hover:bg-[#183722]"
                >
                  <ClipboardCheck className="h-7 w-7 text-[#f0d488]" />

                  <h3 className="mt-5 font-serif text-2xl font-black text-[#fff8df]">
                    {relatedService.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#d8d1bf]">
                    {relatedService.intro}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#f0d488]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-[#07120d] px-5 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl gap-10 border-y border-[#f0d488]/15 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Free Estimates
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Need {service.shortTitle.toLowerCase()}?
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#d8d1bf]">
              Send the property location, a short description, and photos if
              available. High Point can review the request and help determine
              the right next step.
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
