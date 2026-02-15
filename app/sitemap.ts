import type { MetadataRoute } from "next";

const SITE_URL = "https://www.camilo777.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/resume", "/referral", "/support", "/privacy", "/tos"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
