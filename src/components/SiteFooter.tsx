import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const phoneNumber = "(505) 372-9043";
const smsNumber = "5053729043";
const emailAddress = "info@highpointtreeservicenm.com";
const logoSrc = "/images/logo/high-point-tree-service-logo-v2.png";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#07120d] px-5 pb-28 pt-16 text-white sm:px-6 md:pb-12 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(214,184,106,0.14),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(52,211,153,0.12),transparent_30%),linear-gradient(135deg,#07120d_0%,#10251b_52%,#07120d_100%)]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:88px_88px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d488]/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-[#f0d488]/15 pb-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20">
                <Image
                  src={logoSrc}
                  alt="High Point Tree Service LLC logo"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f0d488]">
                  High Point
                </p>
                <p className="text-lg font-black text-[#fff8df]">
                  Tree Service LLC
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-stone-300">
              Tree removal, trimming, pruning, stump grinding, storm cleanup,
              and tree assessments across Las Cruces, Ruidoso, Roswell,
              Alamogordo, and surrounding areas.
            </p>
          </div>

          <div>
            <p className="font-black text-[#fff8df]">Pages</p>

            <div className="mt-4 grid gap-2 text-sm text-stone-300">
              <Link href="/" className="transition hover:text-[#f0d488]">
                Home
              </Link>
              <Link href="/services" className="transition hover:text-[#f0d488]">
                Services
              </Link>
              <Link href="/gallery" className="transition hover:text-[#f0d488]">
                Gallery
              </Link>
              <Link href="/about" className="transition hover:text-[#f0d488]">
                About
              </Link>
              <Link href="/contact" className="transition hover:text-[#f0d488]">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="font-black text-[#fff8df]">Contact</p>

            <div className="mt-4 grid gap-2 text-sm text-stone-300">
              <a
                href={`tel:${phoneNumber}`}
                className="transition hover:text-[#f0d488]"
              >
                {phoneNumber}
              </a>

              <a
                href={`sms:${smsNumber}`}
                className="transition hover:text-[#f0d488]"
              >
                Text photos
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="break-all transition hover:text-[#f0d488]"
              >
                {emailAddress}
              </a>

              <p className="text-stone-400">highpointtreeservicenm.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-6 text-sm text-stone-500 md:flex-row">
          <p>© 2026 High Point Tree Service LLC. All rights reserved.</p>
          <p>Website by AA Ventures LLC</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-[#f0d488]/15 bg-[#07120d]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
        <a
          href={`tel:${phoneNumber}`}
          className="mr-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#f0d488] px-4 py-3 text-sm font-black text-[#07120d]"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>

        <Link
          href="/contact"
          className="ml-2 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white"
        >
          Quote
        </Link>
      </div>
    </footer>
  );
}