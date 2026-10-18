import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.seo.siteUrl;
  const currentDate = new Date().toISOString();

  const routes = ["", "/about", "/services", "/gallery", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: (route === "" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: route === "" ? 1.0 : route === "/services" ? 0.9 : 0.8,
    })
  );

  return routes;
}
