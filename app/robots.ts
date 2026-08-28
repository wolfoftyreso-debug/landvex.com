import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// The Vercel deployment is a test address, not the canonical site. Left open,
// it is what search engines find first while landvex.com is not live yet, so
// it opts out of indexing entirely. Production on AWS never sets VERCEL.
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
