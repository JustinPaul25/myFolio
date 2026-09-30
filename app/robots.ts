import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Facebook Sharing Debugger expects an explicit allowlist for these agents
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "Facebot",
        allow: "/",
      },
      {
        userAgent: "meta-externalagent",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
