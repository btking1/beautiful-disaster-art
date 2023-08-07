<script>
  import { getCollection } from "astro:content";
  export let title = "hear me";
  const getArt = async () => {
    const data = await getCollection("art");

    const query = data.find((item) => title === item.data.title.toLowerCase());

    return {
      content: query.data,
      slug: query.slug,
    };
  };
</script>

{#await getArt() then art}
  <div class=" w-fit relative flex justify-center items-center">
    <!-- hover:scale-[110%] -->
    <img
      class="aspect-auto md:max-w-2xl transition ease-in-out delay-50 duration-300 rounded-md"
      src={art.content.src}
      sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
      alt={art.content.title}
    />
    <h3
      class="text-4xl text-white absolute inset-50 z-20 font-[athiti] font-medium opacity-0 md:opacity-0 md:hover:opacity-100 sm:opacity-100 ease-in-out delay-50 duration-300"
      style="font-size: 4vw;"
    >
      <a href={`art/${art.slug}`} class="p-2">
        {art.content.title}
      </a>
    </h3>
  </div>
{:catch error}
  <p>{error.status}</p>
{/await}
