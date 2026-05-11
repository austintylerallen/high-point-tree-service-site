import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  TreePine,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const phoneNumber = "(505) 372-9043";

const serviceAreas = [
  "Las Cruces",
  "Ruidoso",
  "Roswell",
  "Alamogordo",
  "Surrounding Areas",
];

const services = [
  "Tree removal",
  "Tree trimming and pruning",
  "Stump grinding",
  "Storm damage cleanup",
  "Tree assessments",
  "Property cleanup",
];

const commitments = [
  {
    title: "Property-focused work",
    description:
      "Tree work should be planned around nearby homes, fences, driveways, access points, landscaping, and cleanup needs.",
    icon: ShieldCheck,
  },
  {
    title: "Clear communication",
    description:
      "Customers can call, text, or send a quote request with the location, photos, urgency, and service details.",
    icon: MessageSquare,
  },
  {
    title: "Practical next steps",
    description:
      "Not every customer knows whether they need removal, trimming, cleanup, or an assessment. High Point helps identify the right direction.",
    icon: ClipboardCheck,
  },
];

export const metadata = {
  title: "About High Point Tree Service LLC | Southern New Mexico Tree Service",
  description:
    "Learn about High Point Tree Service LLC, a locally owned tree service company serving Las Cruces, Ruidoso, Roswell, Alamogordo, and surrounding areas.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07120d] text-[#fff8df]">
      <section className="relative overflow-hidden px-5 py-5 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(240,212,136,0.14),transparent_30%),radial-gradient(circle_at_88%_20%,rgba(255,248,223,0.07),transparent_28%),linear-gradient(135deg,#07120d_0%,#10251b_52%,#07120d_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <SiteHeader activePage="about" />
        </div>
      </section>

      <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(240,212,136,0.16),transparent_30%),radial-gradient(circle_at_84%_70%,rgba(32,63,41,0.9),transparent_34%),linear-gradient(135deg,#07120d_0%,#183722_56%,#07120d_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,rgba(255,248,223,0.18)_1px,transparent_1px),linear-gradient(rgba(255,248,223,0.18)_1px,transparent_1px)] bg-[size:92px_92px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#f0d488]">
              About High Point
            </p>

            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-black leading-[0.96] tracking-tight text-[#fff8df] sm:text-6xl lg:text-7xl">
              A local tree service built around trust, safety, and clean work.
            </h1>
          </div>

          <div className="rounded-[2rem] border border-[#f0d488]/18 bg-[#07120d]/60 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
            <p className="text-lg leading-8 text-[#d8d1bf]">
              High Point Tree Service LLC is a locally owned tree service
              company serving Southern New Mexico. Owned by Josh and Liana, the
              business helps property owners handle tree removal, trimming,
              pruning, stump grinding, storm cleanup, tree assessments, and
              property cleanup.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0d488] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#07120d] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#fff8df]"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f0d488]/25 bg-[#fff8df]/[0.08] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#fff8df] transition hover:-translate-y-0.5 hover:bg-[#fff8df]/[0.12] hover:text-[#f0d488]"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#10251b] px-5 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#10251b_0%,#203f29_52%,#10251b_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d488]/60 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.74fr_1.26fr]">
          <aside>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              What Matters
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Tree work should protect more than the tree.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#d8d1bf]">
              A good tree service page should explain more than a list of
              services. Customers need to understand that the crew is thinking
              about the whole property.
            </p>
          </aside>

          <div className="divide-y divide-[#f0d488]/16 border-y border-[#f0d488]/16">
            {commitments.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="grid gap-5 py-8 sm:grid-cols-[70px_1fr]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f0d488]/20 bg-[#f0d488]/10 text-[#f0d488]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl font-black text-[#fff8df]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-lg leading-8 text-[#d8d1bf]">
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

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Services
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Focused on the tree work property owners actually need.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#d8d1bf]">
              High Point Tree Service handles common residential and commercial
              tree needs across Southern New Mexico.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#f0d488]/18 bg-[#f0d488]/18 shadow-2xl shadow-black/25 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="bg-[#07120d]/90 p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f0d488]" />
                  <p className="font-black text-[#fff8df]">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#183722] px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,248,223,0.10),transparent_28%),radial-gradient(circle_at_84%_40%,rgba(240,212,136,0.16),transparent_30%),linear-gradient(135deg,#10251b_0%,#203f29_56%,#07120d_100%)]" />

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
              High Point Tree Service serves Las Cruces, Ruidoso, Roswell,
              Alamogordo, and surrounding areas. If a property is outside the
              main service area, customers can still send the location to
              confirm availability.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
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

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f0d488]/25 bg-[#fff8df]/[0.08] px-7 py-4 text-base font-black text-[#fff8df] transition hover:-translate-y-0.5 hover:bg-[#fff8df]/[0.12] hover:text-[#f0d488]"
              >
                View Services
                <TreePine className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}