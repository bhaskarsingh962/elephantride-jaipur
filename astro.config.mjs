
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const siteUrl = (process.env.SITE_URL || "https://example.com").replace(/\/+$/, "");

export default defineConfig({
  site: siteUrl,
  output: "static",

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
