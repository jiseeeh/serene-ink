// @ts-check

import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com", // TODO
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap()],
});
