import { getCollection } from "astro:content";

export default async function getArt() {
  const artCollection = await getCollection("art");
  const art = artCollection.map(({ data, slug }) => {
    return {
      title: data.title,
      src: data.src,
      excerpt: data.excerpt,
      date: data.date,
      slug: slug,
    };
  });
  return art;
}
