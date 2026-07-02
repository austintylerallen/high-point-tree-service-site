import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "High Point Tree Service LLC | Tree Service in Southern New Mexico",
  description:
    "High Point Tree Service LLC provides tree removal, tree trimming, pruning, stump grinding, storm damage cleanup, and tree assessments across Las Cruces, Ruidoso, Roswell, Alamogordo, and nearby Southern New Mexico communities.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "High Point Tree Service LLC | Tree Service in Southern New Mexico",
    description:
      "Professional tree removal, trimming, pruning, stump grinding, storm damage cleanup, and tree assessments for residential and commercial properties across Southern New Mexico.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.heroImage,
        width: 1200,
        height: 630,
        alt: "High Point Tree Service crew completing professional tree work in Southern New Mexico",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "High Point Tree Service LLC | Tree Service in Southern New Mexico",
    description:
      "Tree removal, trimming, pruning, stump grinding, storm damage cleanup, and tree assessments across Southern New Mexico.",
    images: [siteConfig.heroImage],
  },
};

export default function Home() {
  return <HomePageClient />;
}
