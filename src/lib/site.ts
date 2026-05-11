export const siteConfig = {
  name: "High Point Tree Service LLC",
  shortName: "High Point Tree Service",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://highpointtreeservicenm.com",
  phone: "(505) 372-9043",
  phoneHref: "5053729043",
  email: "info@highpointtreeservicenm.com",
  logo: "/images/logo/high-point-tree-service-logo-v2.png",
  heroImage: "/images/hero/tree-service-hero.png",
  description:
    "High Point Tree Service LLC provides tree removal, trimming, pruning, stump grinding, storm damage cleanup, tree assessments, and property cleanup across Las Cruces, Ruidoso, Roswell, Alamogordo, and surrounding areas.",
  serviceAreas: [
    "Las Cruces",
    "Ruidoso",
    "Roswell",
    "Alamogordo",
    "Surrounding Areas",
  ],
  services: [
    "Tree removal",
    "Tree trimming",
    "Tree pruning",
    "Stump grinding",
    "Storm damage cleanup",
    "Tree assessments",
    "Property cleanup",
  ],
};