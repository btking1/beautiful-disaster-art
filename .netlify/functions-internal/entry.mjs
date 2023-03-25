import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { g as server_default, h as deserializeManifest } from './chunks/astro.542e735a.mjs';
import { _ as _page0, a as _page1 } from './chunks/pages/all.d324d24a.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
import 'image-size';
import 'node:fs/promises';
import 'node:url';
/* empty css                                 */import 'node:path';
import 'http-cache-semantics';
import 'node:os';
import 'magic-string';
import 'node:stream';

const pageMap = new Map([["node_modules/@astrojs/image/dist/endpoint.js", _page0],["src/pages/index.astro", _page1],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/image/dist/endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/index.1798674f.css"],"scripts":[{"type":"inline","value":"document.querySelector(\"section\");const s=document.querySelector(\"#img-list\"),n=s.children,c=()=>{for(let t=0;t<n.length;t++)console.log(n[t]),console.log(\"Image has finished loading.\"),n[t].classList.add(\"img-fade\")};window.addEventListener(\"load\",c);const o=document.querySelector(\"#menu-button\"),e=document.querySelector(\"#close-button\"),l=document.querySelector(\"#menu\");l.getAttribute(\"data-visible\");function i(){(e.style.display=\"none\")&&(l.style.transform=\"translateY(0%)\",e.style.display=\"block\",o.style.display=\"none\")}function d(){(e.style.display=\"sticky\")&&(l.style.transform=\"translateY(-100%)\",e.style.display=\"none\",o.style.display=\"block\")}o.addEventListener(\"click\",i);e.addEventListener(\"click\",d);\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/bking/coding/beautiful-disaster-art/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/Users/bking/coding/beautiful-disaster-art/node_modules/@astrojs/image/dist/vendor/squoosh/image-pool.js":"chunks/image-pool.631f5aa0.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.3631a21c.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/hearme.08f9cdcf.jpg","/_astro/her.d944321b.jpg","/_astro/muva.d042537b.jpg","/_astro/passion.2186e6a3.jpg","/_astro/menu-outline.fcb18a4b.svg","/_astro/close-menu.a20228cc.svg","/_astro/index.1798674f.css","/favicon.svg","/assets/BDA Logo.jpg","/assets/hearme.jpg","/assets/her.jpg","/assets/muva.jpg","/assets/passion.jpg","/assets/icons/close-menu.svg","/assets/icons/menu-icon.svg","/assets/icons/menu-outline.svg"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
