import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const research = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updateDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

const resume = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/resume" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updateDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

const link = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/links" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updateDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updateDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

export const collections = { resume, research, link, blog };
