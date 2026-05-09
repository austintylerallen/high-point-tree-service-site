import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "High Point Tree Service LLC | Tree Service in New Mexico",
  description:
    "High Point Tree Service LLC provides tree removal, tree trimming, pruning, stump grinding, storm damage cleanup, and tree assessments in Las Cruces, Roswell, Ruidoso, Alamogordo, and surrounding New Mexico areas.",
  keywords: [
    "High Point Tree Service",
    "tree service New Mexico",
    "tree removal Las Cruces",
    "tree trimming Las Cruces",
    "stump grinding New Mexico",
    "storm damage cleanup",
    "tree pruning",
    "Roswell tree service",
    "Ruidoso tree service",
    "Alamogordo tree service",
  ],
  authors: [{ name: "High Point Tree Service LLC" }],
  openGraph: {
    title: "High Point Tree Service LLC",
    description:
      "Tree removal, trimming, pruning, stump grinding, storm cleanup, and tree assessments across New Mexico.",
    url: "https://highpointtreeservicenm.com",
    siteName: "High Point Tree Service LLC",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://highpointtreeservicenm.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}