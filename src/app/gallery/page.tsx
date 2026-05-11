import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ImageIcon,
  MapPin,
  Phone,
  ShieldCheck,
  TreePine,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const phoneNumber = "(505) 372-9043";

const galleryItems = [
  {
    title: "Tree Removal",
    location: "Southern New Mexico",
    description:
      "Removal work for dead, damaged, leaning, crowded, or unwanted trees.",
    image: null,
  },
  {
    title: "Tree Trimming & Pruning",
    location: "Southern New Mexico",
    description:
      "Cleanup and pruning work for overgrown limbs, clearance, shaping, and maintenance.",
    image: null,
  },
  {
    title: "Storm Cleanup",
    location: "Southern New Mexico",
    description:
      "Cleanup for fallen limbs, broken branches, blocked access, and weather-related tree debris.",
    image: null,
  },
  {
    title: "Stump Grinding",
    location: "Southern New Mexico",
    description:
      "Grinding and cleanup for old or freshly cut stumps that make a yard harder to use.",
    image: null,
  },
  {
    title: "Property Cleanup",
    location: "Southern New Mexico",
    description:
      "Brush, limbs, tree debris, and final cleanup after tree work or storm damage.",
    image: null,
  },
  {
    title: "Tree Assessments",
    location: "Southern New Mexico",
    description:
      "Walkthroughs to help determine whether a tree needs removal, trimming, cleanup, or monitoring.",
    image: null,
  },
];

const photoChecklist = [
  "Before and after photos",
  "Tree removal jobs",
  "Trimming and pruning work",
  "Stump grinding results",
  "Storm cleanup photos",
  "Crew, truck, tools, and equipment",
];

export const metadata = {
  title: "Gallery | High Point Tree Service LLC",
  description:
    "View High Point Tree Service LLC work examples for tree removal, trimming, pruning, stump grinding, storm cleanup, and property cleanup in Southern New Mexico.",
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
              Gallery
            </p>

            <h1 className="mt-4 max-w-4xl font-serif text-5xl font-black leading-[0.96] tracking-tight text-[#fff8df] sm:text-6xl lg:text-7xl">
              Work proof for tree service, cleanup, and property care.
            </h1>
          </div>

          <div className="rounded-[2rem] border border-[#f0d488]/18 bg-[#07120d]/60 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
            <p className="text-lg leading-8 text-[#d8d1bf]">
              This page is built to showcase real High Point Tree Service work:
              tree removals, trimming, pruning, stump grinding, storm cleanup,
              equipment, and before-and-after results.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#fff8df]/62">
              Add real photos to this page as they become available. The layout
              is ready for work examples without making the page look unfinished.
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
                Work Categories
              </p>

              <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
                A gallery built around the services customers are looking for.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#d8d1bf] lg:ml-auto">
              Real job photos can help support trust, local SEO, and Google
              Business Profile reinstatement by showing the business, equipment,
              service type, and finished results.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2.4rem] border border-[#f0d488]/18 bg-[#f0d488]/18 shadow-2xl shadow-black/25 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[360px] overflow-hidden bg-[#07120d]"
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.title} work by High Point Tree Service in ${item.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(240,212,136,0.16),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(32,63,41,0.9),transparent_40%),linear-gradient(135deg,#07120d,#183722)]" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#07120d] via-[#07120d]/50 to-transparent" />

                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f0d488]/20 bg-[#07120d]/70 text-[#f0d488] backdrop-blur">
                  {item.image ? (
                    <Camera className="h-6 w-6" />
                  ) : (
                    <ImageIcon className="h-6 w-6" />
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f0d488]">
                    {item.location}
                  </p>

                  <h3 className="mt-2 font-serif text-3xl font-black text-[#fff8df]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#d8d1bf]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07120d] px-5 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(240,212,136,0.13),transparent_26%),radial-gradient(circle_at_82%_55%,rgba(32,63,41,0.8),transparent_34%),linear-gradient(135deg,#07120d_0%,#10251b_58%,#07120d_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Photos to Add
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              The strongest gallery will use real job-site proof.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#d8d1bf]">
              For the Google Business Profile appeal and long-term SEO, the
              gallery should show real photos of work, tools, equipment, trucks,
              and finished cleanup whenever possible.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#f0d488]/18 bg-[#f0d488]/18 shadow-2xl shadow-black/25 sm:grid-cols-2">
            {photoChecklist.map((item) => (
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

      <section className="relative overflow-hidden bg-[#183722] px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,248,223,0.10),transparent_28%),radial-gradient(circle_at_84%_40%,rgba(240,212,136,0.16),transparent_30%),linear-gradient(135deg,#10251b_0%,#203f29_56%,#07120d_100%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0d488]">
              Work Examples
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              Real photos can be added as the project grows.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#d8d1bf]">
              When you have real photos, place them inside
              <span className="mx-1 font-black text-[#fff8df]">
                public/images/gallery
              </span>
              and update the gallery item image paths in this page.
            </p>

            <div className="mt-7 rounded-[1.6rem] border border-[#f0d488]/18 bg-[#07120d]/55 p-5">
              <div className="flex gap-4">
                <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[#f0d488]" />

                <div>
                  <p className="font-black text-[#fff8df]">
                    Best photo types for trust
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#d8d1bf]">
                    Branded shirts, equipment, tools, trucks, job-site cleanup,
                    stump grinding, tree removal, trimming, and before-and-after
                    photos are the strongest proof.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#f0d488] transition hover:text-[#fff8df]"
            >
              Request a quote
              <ArrowRight className="h-4 w-4" />
            </Link>
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

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f0d488]/25 bg-[#fff8df]/[0.08] px-7 py-4 text-base font-black text-[#fff8df] transition hover:-translate-y-0.5 hover:bg-[#fff8df]/[0.12] hover:text-[#f0d488]"
              >
                <Phone className="h-5 w-5" />
                Call {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}