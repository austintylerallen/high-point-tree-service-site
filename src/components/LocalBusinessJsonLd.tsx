import { siteConfig } from "@/lib/site";

export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.heroImage}`,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    priceRange: "$$",
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    knowsAbout: siteConfig.services,
    makesOffer: siteConfig.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
        serviceType: service,
        provider: {
          "@id": `${siteConfig.url}/#localbusiness`,
        },
        areaServed: siteConfig.serviceAreas.map((area) => ({
          "@type": "City",
          name: area,
        })),
      },
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "US-NM",
      availableLanguage: "English",
    },
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