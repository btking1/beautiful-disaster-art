<script>
  import { getCollection } from "astro:content";
  export let title;
</script>

<div class=" w-fit relative flex justify-center items-center">
  <video
    controls
    class="aspect-auto md:max-w-2xl transition ease-in-out delay-50 duration-300 rounded-md"
  >
    <source src={`../../public/assets/videos/${title}.mov`} type="video/mp4" />
  </video>
</div>
