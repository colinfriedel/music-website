import type { MetadataRoute } from "next";
import { site } from "@/content/music";

export default function robots(): MetadataRoute.Robots {
  return site.indexable
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
