import type { Metadata, Viewport } from "next";
import "./globals.css";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "High Point Tree Service LLC | Tree Service in Southern New Mexico",
    template: "%s | High Point Tree Service LLC",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "High Point Tree Service LLC | Tree Service in Southern New Mexico",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.heroImage,
        width: 1200,
        height: 630,
        alt: "High Point Tree Service crew member working in a tree",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "High Point Tree Service LLC | Tree Service in Southern New Mexico",
    description: siteConfig.description,
    images: [siteConfig.heroImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07120d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}