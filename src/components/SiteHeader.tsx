import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

type SiteHeaderProps = {
  activePage?: "home" | "services" | "gallery" | "about" | "contact";
};

const navItems = [
  {
    label: "Home",
    href: "/",
    page: "home",
  },
  {
    label: "Services",
    href: "/services",
    page: "services",
  },
  {
    label: "Gallery",
    href: "/gallery",
    page: "gallery",
  },
  {
    label: "About",
    href: "/about",
    page: "about",
  },
  {
    label: "Contact",
    href: "/contact",
    page: "contact",
  },
] as const;

export default function SiteHeader({ activePage = "home" }: SiteHeaderProps) {
  return (
    <header className="flex items-center justify-between rounded-[2rem] border border-[#f0d488]/15 bg-[#07120d]/72 px-4 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-6">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
          <Image
            src={siteConfig.logo}
            alt="High Point Tree Service LLC logo"
            fill
            priority
            sizes="80px"
            className="object-contain"
          />
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f0d488]">
            High Point
          </p>
          <p className="text-base font-black leading-tight text-[#fff8df] sm:text-lg">
            Tree Service LLC
          </p>
        </div>
      </Link>

      <nav className="hidden items-center gap-8 text-sm font-bold text-stone-200 lg:flex">
        {navItems.map((item) => {
          const isActive = item.page === activePage;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative transition ${
                isActive
                  ? "text-[#f0d488]"
                  : "text-stone-200 hover:text-[#f0d488]"
              }`}
            >
              {item.label}

              {isActive && (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-[#f0d488]" />
              )}
            </Link>
          );
        })}
      </nav>

      <a
        href={siteConfig.phoneHref}
        className="hidden items-center justify-center gap-2 rounded-full bg-[#f0d488] px-5 py-3 text-sm font-black text-[#07120d] shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#ffe7a2] md:inline-flex"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>

      <a
        href={siteConfig.phoneHref}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f0d488] text-[#07120d] shadow-lg shadow-black/25 md:hidden"
        aria-label="Call High Point Tree Service"
      >
        <Phone className="h-5 w-5" />
      </a>
    </header>
  );
}
