import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/industries", "/careers", "/contact", "/privacy"];
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : p === "/privacy" ? 0.3 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
