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

				const html = updateImageReferences("<p>This stunning painting captures the essence of raw emotion and unbridled passion. The deep blues and purples in the background give a sense of mystery and intrigue, while the vibrant reds and oranges in the foreground convey a sense of urgency and intensity. The central figure, with her head thrown back and her arms outstretched, appears to be reaching out to the viewer, pleading to be heard. This piece is a powerful statement about the importance of listening to the voices of those around us.</p>");

				const frontmatter = {"title":"hear me","slug":"hear-me","src":"/assets/hearme.jpg","excerpt":"This powerful painting measures 24 inches by 36 inches and features a central figure with outstretched arms against a background of deep blues and purples.","date":"03-22-23"};
				const file = "/Users/bking/coding/beautiful-disaster-art/src/content/art/hearme.md";
				const url = undefined;
				function rawContent() {
					return "\nThis stunning painting captures the essence of raw emotion and unbridled passion. The deep blues and purples in the background give a sense of mystery and intrigue, while the vibrant reds and oranges in the foreground convey a sense of urgency and intensity. The central figure, with her head thrown back and her arms outstretched, appears to be reaching out to the viewer, pleading to be heard. This piece is a powerful statement about the importance of listening to the voices of those around us.\n";
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
