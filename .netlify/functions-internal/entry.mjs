import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.b7918b58.mjs';
import { _ as _page0 } from './chunks/pages/all.e931c6f9.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                 */
const pageMap = new Map([["src/pages/index.astro", _page0],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/index.302acf88.css"],"scripts":[{"type":"inline","value":"const n=document.querySelector(\"#menu-button\"),e=document.querySelector(\"#close-button\"),t=document.querySelector(\"#menu\");t.getAttribute(\"data-visible\");function l(){(e.style.display=\"none\")&&(t.style.display=\"flex\",t.style.transform=\"translateY(0%)\",e.style.display=\"block\",n.style.display=\"none\")}function s(){(e.style.display=\"sticky\")&&(t.style.transform=\"translateY(-100%)\",e.style.display=\"none\",n.style.display=\"block\")}n.addEventListener(\"click\",l);e.addEventListener(\"click\",s);\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/bking/coding/beautiful-disaster-art/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.fa86ead9.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/close-menu.a20228cc.svg","/_astro/menu-outline.fcb18a4b.svg","/_astro/index.302acf88.css","/favicon.svg","/assets/BDA Logo.jpg","/assets/hearme.jpg","/assets/her.jpg","/assets/muva.jpg","/assets/passion.jpg","/assets/icons/close-menu.svg","/assets/icons/menu-icon.svg","/assets/icons/menu-outline.svg"]}), {
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
