"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const phoneNumber = "(505) 372-9043";
const phoneHref = "tel:5053729043";
const heroImageSrc = "/images/hero/tree-service-hero.png";

const serviceAreas = [
  "Las Cruces",
  "Ruidoso",
  "Roswell",
  "Alamogordo",
  "Nearby Areas",
];

const services = [
  {
    title: "Tree removal",
    description:
      "Safe removal for dead, leaning, storm-damaged, crowded, or unwanted trees near homes, fences, driveways, and other property features.",
  },
  {
    title: "Tree trimming and pruning",
    description:
      "Professional trimming and pruning for overgrown branches, roof clearance, walkways, fence lines, visibility, and routine property maintenance.",
  },
  {
    title: "Stump grinding",
    description:
      "Stump grinding for old or freshly cut stumps that make a yard harder to mow, clean up, landscape, or use safely.",
  },
  {
    title: "Storm damage cleanup",
    description:
      "Cleanup for fallen limbs, broken branches, blocked access, and tree debris after wind, storms, and rough New Mexico weather.",
  },
  {
    title: "Tree assessments",
    description:
      "Practical guidance for trees that look dead, weak, leaning, hazardous, or difficult to evaluate without a closer look.",
  },
];

const processSteps = [
  {
    title: "Send the details",
    description:
      "Share the service needed, property location, photos if available, and whether the tree concern feels urgent.",
  },
  {
    title: "Get clear direction",
    description:
      "High Point reviews the situation and helps determine the right next step for the property, timeline, and safety concern.",
  },
  {
    title: "Get the work handled",
    description:
      "The crew focuses on safe tree work, property protection, practical cleanup, and a finished result that is easier to maintain.",
  },
];

export default function Home() {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveAreaIndex((currentIndex) =>
        currentIndex === serviceAreas.length - 1 ? 0 : currentIndex + 1
      );
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveProcessIndex((currentIndex) =>
        currentIndex === processSteps.length - 1 ? 0 : currentIndex + 1
      );
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  const activeProcessStep = processSteps[activeProcessIndex];

  return (
    <main className="min-h-screen bg-[#07120d] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(215,255,0,0.14),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(52,211,153,0.10),transparent_28%),linear-gradient(135deg,#07120d_0%,#10251b_48%,#07120d_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
          <SiteHeader activePage="home" />

          <div className="grid min-h-[78vh] items-center gap-14 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7ff00]/25 bg-[#d7ff00]/10 px-4 py-2 text-sm font-bold text-[#fff8df]">
                <MapPin className="h-4 w-4 shrink-0 text-[#d7ff00]" />
                Southern New Mexico Tree Service
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-black tracking-tight text-[#fff8df] sm:text-6xl lg:text-7xl">
                Professional tree service for safer, cleaner properties in
                Southern New Mexico.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
                High Point Tree Service LLC provides tree removal, trimming,
                pruning, stump grinding, storm damage cleanup, and tree
                assessments for residential and commercial properties across
                Southern New Mexico.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7ff00] px-7 py-4 text-base font-black text-[#07120d] shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-[#ecff66]"
                >
                  Request a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d7ff00]/20 bg-white/10 px-7 py-4 text-base font-black text-[#fff8df] transition hover:-translate-y-0.5 hover:bg-white/15 hover:text-[#d7ff00]"
                >
                  <Phone className="h-5 w-5" />
                  Call {phoneNumber}
                </a>
              </div>

              <div className="mt-10 grid gap-3 text-sm text-stone-200 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d7ff00]" />
                  <span>Free estimates available</span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d7ff00]" />
                  <span>Residential and commercial tree work</span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d7ff00]" />
                  <span>Removal, trimming, grinding, and cleanup</span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d7ff00]" />
                  <span>
                    Serving Las Cruces, Ruidoso, Roswell, Alamogordo, and
                    nearby areas
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.75rem] bg-[#d7ff00]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.25rem] border border-[#d7ff00]/15 bg-[#10251b] shadow-2xl shadow-black/40">
                <div className="relative h-[520px]">
                  <Image
                    src={heroImageSrc}
                    alt="Tree service crew completing professional tree work in Southern New Mexico"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07120d] via-[#07120d]/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.6rem] border border-[#d7ff00]/15 bg-[#07120d]/85 p-5 backdrop-blur-xl">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d7ff00]">
                      Tree Work Done Right
                    </p>

                    <p className="mt-2 text-sm leading-6 text-stone-300">
                      Built around safety, property protection, clear
                      communication, and clean finished results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 border-t border-[#d7ff00]/15 pt-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="text-2xl font-black tracking-tight text-[#fff8df] sm:text-3xl">
                Serving
              </span>

              <span className="relative block h-[38px] min-w-[320px] overflow-hidden sm:h-[44px]">
                {serviceAreas.map((area, index) => (
                  <span
                    key={area}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-2xl font-black tracking-tight text-[#d7ff00] transition-all duration-700 sm:text-3xl ${
                      index === activeAreaIndex
                        ? "opacity-100"
                        : "translate-y-2 opacity-0"
                    }`}
                  >
                    {area}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#122016] px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(215,255,0,0.18),transparent_28%),radial-gradient(circle_at_85%_72%,rgba(52,211,153,0.14),transparent_30%),linear-gradient(135deg,#07120d_0%,#183722_50%,#203f29_100%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#07120d]/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7ff00]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d7ff00]/35 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d7ff00]">
                Tree Services
              </p>

              <h2 className="mt-4 max-w-xl font-serif text-4xl font-black leading-tight tracking-tight text-[#fff8df] sm:text-5xl">
                Tree services built around safety, access, cleanup, and property
                protection.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-stone-200 sm:text-lg">
                From hazardous removals to routine pruning and storm cleanup,
                High Point Tree Service helps property owners choose the right
                service and get the work handled safely.
              </p>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d7ff00] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#07120d] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#ecff66]"
              >
                View Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#d7ff00]/35 to-transparent lg:block" />

              <div>
                {services.map((service, index) => (
                  <Link
                    key={service.title}
                    href="/services"
                    className="group grid gap-4 border-b border-white/12 py-6 transition first:border-t hover:border-[#d7ff00]/40 sm:grid-cols-[72px_1fr]"
                  >
                    <div>
                      <p className="font-serif text-4xl font-black leading-none text-white/12 transition group-hover:text-[#d7ff00] sm:text-5xl">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>

                    <div className="grid gap-3 xl:grid-cols-[230px_1fr_auto] xl:items-start">
                      <h3 className="text-xl font-black tracking-tight text-white transition group-hover:text-[#d7ff00] sm:text-2xl">
                        {service.title}
                      </h3>

                      <p className="max-w-2xl text-sm leading-7 text-stone-300 sm:text-base">
                        {service.description}
                      </p>

                      <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition group-hover:-translate-y-0.5 group-hover:border-[#d7ff00]/40 group-hover:bg-[#d7ff00] group-hover:text-[#07120d] xl:flex">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 border-l border-[#d7ff00]/40 pl-5">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d7ff00]">
                  Not sure what service you need?
                </p>

                <p className="mt-3 max-w-3xl text-base leading-8 text-stone-200">
                  Send the property details, photos if available, and the main
                  concern. High Point can review the situation and recommend the
                  right next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#10251b] px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(215,255,0,0.14),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.10),transparent_30%),linear-gradient(135deg,#10251b_0%,#1f3d2a_45%,#07120d_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7ff00]/45 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d7ff00]">
              Simple Process
            </p>

            <h2 className="mt-3 max-w-xl font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
              From first contact to a safer, cleaner property.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-300">
              Getting tree work handled should not feel confusing. High Point
              keeps the next step clear, whether the job involves a hazardous
              tree, routine trimming, stump grinding, or storm cleanup.
            </p>
          </div>

          <div className="relative min-h-[310px] overflow-hidden rounded-[2rem] border border-[#d7ff00]/18 bg-[#07120d]/60 p-7 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-9">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(215,255,0,0.11),transparent_34%)]" />

            <div className="relative">
              <div className="mb-8 flex items-center gap-3">
                {processSteps.map((step, index) => {
                  const isComplete = index <= activeProcessIndex;

                  return (
                    <div key={step.title} className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-black transition duration-500 ${
                          isComplete
                            ? "border-[#d7ff00] bg-[#d7ff00] text-[#07120d]"
                            : "border-white/15 bg-white/5 text-stone-400"
                        }`}
                      >
                        {isComplete ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          index + 1
                        )}
                      </div>

                      {index < processSteps.length - 1 && (
                        <div
                          className={`hidden h-px w-12 transition duration-500 sm:block ${
                            index < activeProcessIndex
                              ? "bg-[#d7ff00]"
                              : "bg-white/15"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <div
                key={activeProcessStep.title}
                className="animate-[fadeIn_500ms_ease-in-out]"
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d7ff00]">
                  Step {activeProcessIndex + 1}
                </p>

                <h3 className="mt-3 font-serif text-4xl font-black tracking-tight text-[#fff8df] sm:text-5xl">
                  {activeProcessStep.title}
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
                  {activeProcessStep.description}
                </p>
              </div>

              <div className="mt-9 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[#d7ff00]" />
                  <p className="leading-7 text-stone-300">
                    Each step keeps the customer moving toward the same result:
                    safe tree work, clear communication, property protection,
                    and a cleaner finished space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      <SiteFooter />
    </main>
  );
}