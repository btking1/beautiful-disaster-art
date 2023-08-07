/* empty css                            */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, g as createCollectionToGlobResultMap, h as createGetCollection, i as createGetEntryBySlug } from '../astro.eb0c5c06.mjs';
/* empty css                            */
const $$Astro$3 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Nav;
  const links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "gallery" },
    { href: "/events", label: "events" },
    { href: "/contact", label: "contact" },
    { href: "/shop", label: "shop (comming soon!)" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="container py-3 px-3 md:flex md:justify-between md:items-center">
  <div class="flex justify-between items-center">
    <h1>
      Beautiful <span>Disaster Art</span>
    </h1>
    <button id="menu-button" class=""></button>
  </div>
  <ul id="menu" data-visible="false" class="mobile-menu flex flex-col gap-y-3 items-center hidden fixed inset-0 bg-black bg-opacity-50">
    ${links.map((link) => {
    return renderTemplate`<li class="text-3xl font-thin md:text-xl">
            <a${addAttribute(link.href, "href")}>${link.label}</a>
          </li>`;
  })}
  </ul>
</nav>`;
}, "/Users/bking/coding/beautiful-disaster-art/src/components/Nav.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(`relative bottom-0 flex w-full p-3 justify-center gap-x-6 items-center astro-SZ7XMLTE`, "class")}>
  <a href="https://instagram.com" class="astro-SZ7XMLTE">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="astro-SZ7XMLTE"><g fill="none" class="astro-SZ7XMLTE"><path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" class="astro-SZ7XMLTE"></path><path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" class="astro-SZ7XMLTE"></path><path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" class="astro-SZ7XMLTE"></path></g></svg>
  </a>

  <a href="https://twitter.com" class="astro-SZ7XMLTE">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="astro-SZ7XMLTE"><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1a10.66 10.66 0 0 1-9-4.53s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5c0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01Z" class="astro-SZ7XMLTE"></path></svg>
  </a>

  <a href="https://tiktok.com" class="astro-SZ7XMLTE">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="astro-SZ7XMLTE"><g fill="none" stroke-linecap="round" stroke-linejoin="round" class="astro-SZ7XMLTE"><path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z" class="astro-SZ7XMLTE"></path><path d="M10 12a3 3 0 1 0 3 3V6c.333 1 1.6 3 4 3" class="astro-SZ7XMLTE"></path></g></svg>
  </a>
</footer>`;
}, "/Users/bking/coding/beautiful-disaster-art/src/components/Footer.astro", void 0);

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
  ${renderHead()}</head>
  <body class="container mx-auto px-3 flex flex-col min-h-screen gap-3">
    ${renderComponent($$result, "Nav", $$Nav, {})}
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "Footer", $$Footer, {})}
  
</body></html>`;
}, "/Users/bking/coding/beautiful-disaster-art/src/layouts/Layout.astro", void 0);

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/art/hearme.md": () => import('../hearme.55484c05.mjs'),"/src/content/art/her.md": () => import('../her.dc822ba6.mjs'),"/src/content/art/muva.md": () => import('../muva.a3a45ba5.mjs'),"/src/content/art/passion.md": () => import('../passion.28e3f634.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"art":{"type":"content","entries":{"hear-me":"/src/content/art/hearme.md","her":"/src/content/art/her.md","muva":"/src/content/art/muva.md","passion-of-heartbreak":"/src/content/art/passion.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/art/hearme.md": () => import('../hearme.2ff9ef1c.mjs'),"/src/content/art/her.md": () => import('../her.a336108e.mjs'),"/src/content/art/muva.md": () => import('../muva.4f6f73cf.mjs'),"/src/content/art/passion.md": () => import('../passion.6b1bfd3d.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

async function getArt() {
  const artCollection = await getCollection("art");
  const art = artCollection.map(({ data, slug }) => {
    return {
      title: data.title,
      src: data.src,
      excerpt: data.excerpt,
      date: data.date,
      slug
    };
  });
  return art;
}

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntryBySlug(
    "art",
    slug
  );
  const artList = await getArt();
  const currentIndex = artList.findIndex((art) => art.slug === slug);
  const prevPage = currentIndex > 0 ? artList[currentIndex - 1].slug : artList[artList.length - 1].slug;
  const nextPage = currentIndex < artList.length - 1 ? artList[currentIndex + 1].slug : artList[0].slug;
  console.log(prevPage);
  console.log(nextPage);
  const { Content, headings } = await entry.render();
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "class": "astro-V4WG5PWF" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="flex flex-col gap-y-3 astro-V4WG5PWF">
    <img${addAttribute(entry.data.src, "src")}${addAttribute(entry.data.title, "alt")}${addAttribute(`img-fade aspect-auto astro-V4WG5PWF`, "class")}${addAttribute(1400, "width")}${addAttribute(1400, "height")}>
    <h3 class="astro-V4WG5PWF">${entry.data.title}</h3>${renderComponent($$result2, "Content", Content, { "class": "astro-V4WG5PWF" })}
    <div class="flex w-full justify-between astro-V4WG5PWF">
      <button class="astro-V4WG5PWF"><a${addAttribute(`/art/${prevPage}`, "href")} class="astro-V4WG5PWF">previous</a></button>
      <button class="astro-V4WG5PWF"><a${addAttribute(`/art/${nextPage}`, "href")} class="astro-V4WG5PWF">next</a></button>
    </div>
  </main>
` })}`;
}, "/Users/bking/coding/beautiful-disaster-art/src/pages/art/[slug].astro", void 0);

const $$file = "/Users/bking/coding/beautiful-disaster-art/src/pages/art/[slug].astro";
const $$url = "/art/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _slug_ as _, getCollection as g };
