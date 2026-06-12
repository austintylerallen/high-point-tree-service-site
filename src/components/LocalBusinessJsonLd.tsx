import { siteConfig } from "@/lib/site";

type SchemaServiceArea = {
  type: string;
  name: string;
  region: string;
  country: string;
};

function getAbsoluteUrl(path: string) {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteConfig.url}${path}`;
}

function getAreaServed(area: SchemaServiceArea) {
  return {
    "@type": area.type,
    name: area.name,
    address: {
      "@type": "PostalAddress",
      addressRegion: area.region,
      addressCountry: area.country,
    },
  };
}

export default function LocalBusinessJsonLd() {
  const areaServed = siteConfig.schemaServiceAreas.map(getAreaServed);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.url}/#localbusiness`,

    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,

    image: getAbsoluteUrl(siteConfig.heroImage),
    logo: getAbsoluteUrl(siteConfig.logo),

    description: siteConfig.description,
    priceRange: "$$",

    areaServed,

    address: {
      "@type": "PostalAddress",
      addressRegion: "NM",
      addressCountry: "US",
    },

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneE164,
        contactType: "customer service",
        areaServed: "US-NM",
        availableLanguage: ["English"],
        email: siteConfig.email,
      },
    ],

    knowsAbout: siteConfig.services,

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tree Services",
      itemListElement: siteConfig.servicePages.map((service) => ({
        "@type": "Offer",
        url: getAbsoluteUrl(service.url),
        itemOffered: {
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          provider: {
            "@id": `${siteConfig.url}/#localbusiness`,
          },
          areaServed,
        },
      })),
    },

    makesOffer: siteConfig.servicePages.map((service) => ({
      "@type": "Offer",
      url: getAbsoluteUrl(service.url),
      itemOffered: {
        "@type": "Service",
        name: service.name,
        serviceType: service.name,
        provider: {
          "@id": `${siteConfig.url}/#localbusiness`,
        },
        areaServed,
      },
    })),

    ...(siteConfig.sameAs.length > 0
      ? {
          sameAs: siteConfig.sameAs,
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}