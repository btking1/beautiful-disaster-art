import { z, defineCollection } from "astro:content";

const artCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    excerpt: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  art: artCollection,
};
