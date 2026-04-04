import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const post = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    frontmatter: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { post };
