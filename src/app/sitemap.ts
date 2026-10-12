import type { MetadataRoute } from "next";

const site = "https://eco-consulting.ca";

// Lists the site's pages for search engines, served at /sitemap.xml.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${site}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];
}
