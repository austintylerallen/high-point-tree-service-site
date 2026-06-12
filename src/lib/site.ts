export const siteConfig = {
  name: "High Point Tree Service LLC",
  shortName: "High Point Tree Service",

  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://highpointtreeservicenm.com",

  phone: "(505) 372-9043",
  phoneHref: "tel:5053729043",
  phoneE164: "+15053729043",

  email: "info@highpointtreeservicenm.com",

  logo: "/images/logo/high-point-tree-service-logo-v2.png",
  heroImage: "/images/hero/tree-service-hero.png",

  description:
    "High Point Tree Service LLC provides tree removal, trimming, pruning, stump grinding, storm damage cleanup, tree assessments, and property cleanup across Las Cruces, Ruidoso, Roswell, Alamogordo, and nearby Southern New Mexico communities.",

  serviceAreaLabel:
    "Las Cruces, Ruidoso, Roswell, Alamogordo, and nearby Southern New Mexico communities",

  serviceAreas: [
    "Las Cruces",
    "Ruidoso",
    "Roswell",
    "Alamogordo",
    "Nearby Areas",
  ],

  schemaServiceAreas: [
    {
      type: "City",
      name: "Las Cruces",
      region: "NM",
      country: "US",
    },
    {
      type: "City",
      name: "Ruidoso",
      region: "NM",
      country: "US",
    },
    {
      type: "City",
      name: "Roswell",
      region: "NM",
      country: "US",
    },
    {
      type: "City",
      name: "Alamogordo",
      region: "NM",
      country: "US",
    },
    {
      type: "AdministrativeArea",
      name: "Southern New Mexico",
      region: "NM",
      country: "US",
    },
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

  servicePages: [
    {
      name: "Tree removal",
      url: "/services#tree-removal",
    },
    {
      name: "Tree trimming and pruning",
      url: "/services#tree-trimming-pruning",
    },
    {
      name: "Stump grinding",
      url: "/services#stump-grinding",
    },
    {
      name: "Storm damage cleanup",
      url: "/services#storm-damage-cleanup",
    },
    {
      name: "Tree assessments",
      url: "/services#tree-assessments",
    },
    {
      name: "Property cleanup",
      url: "/services#property-cleanup",
    },
  ],

  sameAs: [
    // Add these later once each profile is cleaned up and consistent.
    // "https://www.facebook.com/...",
    // "https://www.instagram.com/...",
    // "https://www.bbb.org/...",
  ],
};