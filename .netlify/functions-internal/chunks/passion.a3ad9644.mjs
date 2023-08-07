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

				const html = updateImageReferences("<p>This evocative painting captures the intense emotions and desires that lie at the heart of human experience. The rich, deep colors and bold, sweeping strokes suggest a sense of drama and intensity, while the central heart motif represents the power of love and passion. The figures in the foreground appear to be locked in an embrace, their bodies intertwined in a sensual dance. This piece is a celebration of the raw, unbridled energy that drives us forward in life.</p>");

				const frontmatter = {"title":"passion of heartbreak","slug":"passion-of-heartbreak","src":"/assets/passion.jpg","excerpt":"This evocative painting measures 36 inches by 48 inches and features a central heart motif, with figures intertwined in a sensual dance against a background of rich, deep colors.","date":"03-22-23"};
				const file = "/Users/bking/coding/beautiful-disaster-art/src/content/art/passion.md";
				const url = undefined;
				function rawContent() {
					return "\nThis evocative painting captures the intense emotions and desires that lie at the heart of human experience. The rich, deep colors and bold, sweeping strokes suggest a sense of drama and intensity, while the central heart motif represents the power of love and passion. The figures in the foreground appear to be locked in an embrace, their bodies intertwined in a sensual dance. This piece is a celebration of the raw, unbridled energy that drives us forward in life.\n";
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
