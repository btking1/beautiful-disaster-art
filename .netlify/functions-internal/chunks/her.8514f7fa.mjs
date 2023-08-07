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

				const html = updateImageReferences("<p>This mesmerizing portrait captures the beauty and complexity of the feminine form. The delicate lines and soft pastel hues give the piece a dreamy, ethereal quality, while the piercing gaze of the subject draws the viewer in. The intricate details of the subject’s hair and clothing suggest a depth of personality and individuality. This piece is a celebration of the feminine spirit and a reminder of the power and strength that lies within.</p>");

				const frontmatter = {"title":"her","slug":"her","src":"/assets/her.jpg","excerpt":"This stunning portrait measures 30 inches by 40 inches and features a delicate, ethereal subject with intricate details in her hair and clothing.","date":"03-22-23"};
				const file = "/Users/bking/coding/beautiful-disaster-art/src/content/art/her.md";
				const url = undefined;
				function rawContent() {
					return "\nThis mesmerizing portrait captures the beauty and complexity of the feminine form. The delicate lines and soft pastel hues give the piece a dreamy, ethereal quality, while the piercing gaze of the subject draws the viewer in. The intricate details of the subject's hair and clothing suggest a depth of personality and individuality. This piece is a celebration of the feminine spirit and a reminder of the power and strength that lies within.\n";
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
