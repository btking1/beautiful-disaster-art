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
    <a
      href={`art/${art.slug}`}
      class="w-full h-full opacity-0 md:opacity-0 p-2 active:scale-[110%]
      active:opacity-100
      no-underline hover:no-underline
    
    md:hover:opacity-100 sm:opacity-100 ease-in-out delay-50 duration-300 absolute inset-50"
    >
      <h3
        class="text-4xl text-white z-20 font-[athiti] p-2 font-medium w-full h-full flex justify-center items-center"
      >
        {art.content.title}
      </h3>
    </a>
  </div>
{:catch error}
  <p>{error.status}</p>
{/await}
