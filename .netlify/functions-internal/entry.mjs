import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_d07e7b69.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_87ae11a0.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_aeea6836.mjs');
const _page1  = () => import('./chunks/index_db503af1.mjs');
const _page2  = () => import('./chunks/contact_1098fa6f.mjs');
const _page3  = () => import('./chunks/gallery_fa4a8841.mjs');
const _page4  = () => import('./chunks/events_0b2fa7e3.mjs');
const _page5  = () => import('./chunks/_slug__cfac5008.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/contact.astro", _page2],["src/pages/gallery.astro", _page3],["src/pages/events.astro", _page4],["src/pages/art/[slug].astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
