import type { MetadataRoute } from "next";

// Lets search engines crawl everything and points them to the sitemap. Served at /robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://eco-consulting.ca/sitemap.xml",
  };
}
