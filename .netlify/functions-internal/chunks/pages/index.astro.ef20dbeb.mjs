/* empty css                            */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro.eb0c5c06.mjs';
import { $ as $$Layout } from './_slug_.astro.816d8eeb.mjs';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                            */
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Beautiful Disaster Art", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="md:pt-8 md:flex flex-col relative md:justify-center astro-J7PV25F6">
    <div class="md:flex w-full justify-center astro-J7PV25F6">
      <!-- <ImageFade client:only />
    </div> -->

      <div class="md:flex md:w-full justify-center astro-J7PV25F6">
        <p class="p-3 text-center md:tracking-widest lg:text-lg md:max-w-[50vw] astro-J7PV25F6">
          Welcome to <span class="astro-J7PV25F6">Beautiful Disaster</span> Art, where my art is <span class="astro-J7PV25F6">home</span>. I pour my <span class="astro-J7PV25F6">heart</span>
          and <span class="astro-J7PV25F6">soul</span> into each piece, capturing the <span class="astro-J7PV25F6">beauty</span>
          of the world. My goal is to <span class="astro-J7PV25F6">inspire</span> and bring <span class="astro-J7PV25F6">joy</span> to your life. <span class="astro-J7PV25F6">Thank you</span> for visiting and <span class="astro-J7PV25F6">supporting</span> me.
        </p>
      </div>
    </div>
  </main>

  
` })}`;
}, "/Users/bking/coding/beautiful-disaster-art/src/pages/index.astro", void 0);

const $$file = "/Users/bking/coding/beautiful-disaster-art/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
