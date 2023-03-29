import { getCollection } from "astro:content";

const art = await getCollection("art");

export default function getArt() {
  return art.map(({ data, slug }) => {
    return {
      title: data.title,
      src: data.src,
      excerpt: data.excerpt,
      date: data.date,
      slug: slug,
    };
  });
}
