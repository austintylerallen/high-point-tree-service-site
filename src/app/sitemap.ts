import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: SitemapRoute[] = [
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

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}