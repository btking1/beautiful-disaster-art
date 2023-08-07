/* empty css                            */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro.eb0c5c06.mjs';
import { $ as $$Layout } from './_slug_.astro.816d8eeb.mjs';
import nodemailer from 'nodemailer';
/* empty css                             */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                            */
const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const email = await "bookerking9@gmail.com";
  const pass = await "nsyznjvkispizanw";
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass
    }
  });
  let mailOptions = {
    from: email,
    to: email
  };
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name");
      const email2 = data.get("email");
      const message = data.get("message");
      console.log(data);
      await transporter.sendMail({
        ...mailOptions,
        subject: "New Message",
        text: `Name: ${name} Email: ${email2} Message: ${message}`,
        html: `<p>Name: ${name}</p><p>Email: ${email2}</p><p>Message: ${message}</p>`
      });
      if (Astro2.response.status === 200) {
        console.log("Email sent");
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "contact", "class": "astro-UW5KDBXL" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="flex flex-col items-center justify-center min-h-[70vh] astro-UW5KDBXL">
    <h1 class="astro-UW5KDBXL">contact</h1>
    <div class="py-4 px-6 rounded-sm w-full md:w-[40vw] astro-UW5KDBXL">
      <form method="post" class="flex flex-col gap-3 px-3 py-2 justify-center items-center w-full astro-UW5KDBXL">
        <input placeholder="name" type="text" name="name" class="rounded-sm w-full astro-UW5KDBXL" required>
        <input placeholder="email" class="w-full astro-UW5KDBXL" type="email" name="email" required>

        <textarea placeholder="message" name="message" class="w-full astro-UW5KDBXL"></textarea>
        <button class="submit astro-UW5KDBXL">Submit</button>
      </form>
    </div>
  </main>
` })}

`;
}, "/Users/bking/coding/beautiful-disaster-art/src/pages/contact.astro", void 0);

const $$file = "/Users/bking/coding/beautiful-disaster-art/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
