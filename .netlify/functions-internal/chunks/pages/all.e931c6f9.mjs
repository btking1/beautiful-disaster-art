/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot } from '../astro.b7918b58.mjs';
import 'html-escaper';

const $$Astro$2 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  const links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "gallery" },
    { href: "/events", label: "events" },
    { href: "/contact", label: "contact" },
    { href: "/shop", label: "shop (comming soon!)" }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<nav class="flex py-2 px-3 justify-between items-end border border-solid border-red-400 astro-DMQPWCEC">
  <ul id="menu" data-visible="false" class="flex-col w-full top-0 left-0 h-full fixed overflow-hidden z-20 justify-center items-center gap-y-3 astro-DMQPWCEC">
    ${links.map((link) => {
    return renderTemplate`<li class="text-white text-3xl font-thin astro-DMQPWCEC">
            <a${addAttribute(link.href, "href")} class="astro-DMQPWCEC">${link.label}</a>
          </li>`;
  })}
  </ul>
  <h1 class="astro-DMQPWCEC">
    Beautiful <span class="astro-DMQPWCEC">Disaster Art</span>
  </h1>
  <button id="menu-button" class=" astro-DMQPWCEC"></button>
  <button id="close-button" class="z-[50] hidden astro-DMQPWCEC"> </button>
</nav>`;
}, "/Users/bking/coding/beautiful-disaster-art/src/components/Nav.astro");

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&family=Inconsolata:wght@200;300;400;600;700&display=swap" rel="stylesheet">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${title}</title>
  ${renderHead($$result)}</head>
  <body>
    ${renderComponent($$result, "Nav", $$Nav, {})}
    ${renderSlot($$result, $$slots["default"])}
  </body></html>`;
}, "/Users/bking/coding/beautiful-disaster-art/src/layouts/Layout.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="flex flex-col items-start gap-11 px-3 py-3 astro-J7PV25F6">
    <section class="astro-J7PV25F6">
      <p class="astro-J7PV25F6">
        Welcome to <span class="astro-J7PV25F6">Beautiful Disaster</span> Art, where my art is <span class="astro-J7PV25F6">home</span>. I pour my <span class="astro-J7PV25F6">heart</span>
        and <span class="astro-J7PV25F6">soul</span> into each piece, capturing the <span class="astro-J7PV25F6">beauty</span>
        of the world. My goal is to <span class="astro-J7PV25F6">inspire</span> and bring <span class="astro-J7PV25F6">joy</span> to your life. <span class="astro-J7PV25F6">Thank you</span> for visiting and <span class="astro-J7PV25F6">supporting</span> me.
      </p>
    </section>
    <section class="flex flex-col border border-solid border-red-400 w-full p-5 gap-3 astro-J7PV25F6">
      <img src="../public/assets/muva.jpg" alt="painting titled MUVA " class="astro-J7PV25F6">
      <img src="../public/assets/her.jpg" alt="painting titled her " class="astro-J7PV25F6">
      <img src="../public/assets/hearme.jpg" alt="painting titled hear me " class="astro-J7PV25F6">
      <img src="../public/assets/passion.jpg" alt="painting titled passion of heartbreak" class="astro-J7PV25F6">
    </section>
  </main>` })}`;
}, "/Users/bking/coding/beautiful-disaster-art/src/pages/index.astro");

const $$file = "/Users/bking/coding/beautiful-disaster-art/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
