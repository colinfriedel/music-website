import type { MetadataRoute } from "next";
import { site } from "@/content/music";

export default function sitemap(): MetadataRoute.Sitemap {
  return site.indexable ? [{ url: site.url }] : [];
}
