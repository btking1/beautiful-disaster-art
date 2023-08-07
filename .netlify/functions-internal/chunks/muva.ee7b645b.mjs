import { k as createVNode, F as Fragment, l as spreadAttributes } from './astro.eb0c5c06.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>This vibrant painting is a celebration of motherhood and the bond between mother and child. The bright colors and bold strokes give the piece a sense of energy and vitality, while the tender embrace of the mother and child conveys a sense of warmth and love. The subject’s serene expression suggests a deep sense of contentment and fulfillment. This piece is a tribute to the powerful and transformative role that motherhood plays in our lives.</p>");

				const frontmatter = {"title":"muva","slug":"muva","src":"/assets/muva.jpg","excerpt":"This vibrant painting measures 18 inches by 24 inches and depicts a tender embrace between a mother and child, with bold colors and energetic strokes.","date":"03-22-23"};
				const file = "/Users/bking/coding/beautiful-disaster-art/src/content/art/muva.md";
				const url = undefined;
				function rawContent() {
					return "\nThis vibrant painting is a celebration of motherhood and the bond between mother and child. The bright colors and bold strokes give the piece a sense of energy and vitality, while the tender embrace of the mother and child conveys a sense of warmth and love. The subject's serene expression suggests a deep sense of contentment and fulfillment. This piece is a tribute to the powerful and transformative role that motherhood plays in our lives.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
