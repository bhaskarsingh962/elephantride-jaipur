import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error("Set SITE_URL to generate a robots.txt sitemap reference.");
  }

  const sitemapUrl = new URL("sitemap-index.xml", site);
  const contents = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl.href}
`;

  return new Response(contents, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
