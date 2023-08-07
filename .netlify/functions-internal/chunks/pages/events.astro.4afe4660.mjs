/* empty css                            */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro.eb0c5c06.mjs';
import { $ as $$Layout } from './_slug_.astro.816d8eeb.mjs';
import { jsxs, jsx } from 'preact/jsx-runtime';
/* empty css                            */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                            */
const events = [{
  title: "Art in Motion Exhibition",
  date: "2021-09-01",
  city: "New York City, NY",
  description: "This exhibition showcases the latest works from up-and-coming artists from around the world. The pieces will be displayed in motion, creating an immersive experience for visitors."
}, {
  title: "Colors of the Wind",
  date: "2021-09-01",
  city: "Miami, FL",
  description: "This festival celebrates the beauty of nature and art through a series of vibrant and interactive exhibits. From street art to sculpture, visitors will be transported to a world of color and wonder."
}, {
  title: "Modern Art in the Digital Age",
  date: "2021-09-01",
  city: "Los Angeles, CA",
  description: "This symposium brings together leading artists, curators, and thinkers to explore the intersection of art and technology. The event will feature a range of discussions and workshops on topics such as virtual reality, AI, and digital art."
}, {
  title: "Surreal Visions Group Show",
  date: "2021-09-01",
  city: "London, UK",
  description: "This group show features works by some of the most innovative and thought-provoking surrealists of our time. The pieces on display challenge traditional notions of reality and perception, inviting visitors to question the boundaries of their own minds."
}];
function _function() {
  return events.map((event) => jsxs("div", {
    className: "event-card p-3",
    children: [jsxs("div", {
      className: "heading-container flex flex-col",
      children: [jsx("h2", {
        className: "event-title text-lg text-[var(--accent)] mb-2",
        style: {
          fontFamily: "var(--athiti)"
        },
        children: event.title
      }), jsx("div", {
        className: "flex flex-col items-end",
        children: jsx("h3", {
          className: "event-city drop-shadow-md  bg-[var(--primary-3-alpha)] px-3 py-2 text-lg text-[var(--accent-secondary)] mb-3",
          style: {
            fontFamily: "var(--athiti)"
          },
          children: event.city
        })
      })]
    }), jsx("p", {
      className: "text-[var(--accent-4)] text-md leading-7 text-left",
      style: {
        fontWeight: 200
      },
      children: event.description
    })]
  }));
}
__astro_tag_component__(_function, "@astrojs/preact");

const $$Astro = createAstro();
const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Events;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "events" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main>
    <section class="flex flex-col justify-center items-center">
      <h1>events</h1>
      ${renderComponent($$result2, "EventCard", _function, {})}
    </section>
  </main>
` })}`;
}, "/Users/bking/coding/beautiful-disaster-art/src/pages/events.astro", void 0);

const $$file = "/Users/bking/coding/beautiful-disaster-art/src/pages/events.astro";
const $$url = "/events";

export { $$Events as default, $$file as file, $$url as url };
