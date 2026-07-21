import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ade-productions.vercel.app/",
      lastModified: "2026-07-21",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ade-productions.vercel.app/events/cmis-graduation",
      lastModified: "2026-07-21",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}