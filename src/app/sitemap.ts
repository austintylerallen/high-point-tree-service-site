import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/services",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/contact",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/about",
      priority: 0.75,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/gallery",
      priority: 0.75,
      changeFrequency: "monthly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}