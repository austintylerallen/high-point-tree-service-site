import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { servicePages } from "@/lib/services";

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const staticRoutes: SitemapRoute[] = [
  {
    path: "",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/services",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/about",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/gallery",
    priority: 0.6,
    changeFrequency: "monthly",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const serviceRoutes: SitemapRoute[] = servicePages.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.85,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
