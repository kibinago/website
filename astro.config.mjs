// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkLinkCard from "remark-link-card-plus";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  site: "https://yutohosaka.org",
  integrations: [
    mdx({
      remarkPlugins: [remarkMath, remarkLinkCard],
      rehypePlugins: [[rehypeKatex]],
    }),
    sitemap(),
    solidJs(),
  ],
  trailingSlash: "never",
  build: {
    assets: "assets",
    format: "directory",
  },
  server: {
    port: 8080,
  },
  output: "static",
  redirects: {
    "/": "/en",
  },
});
