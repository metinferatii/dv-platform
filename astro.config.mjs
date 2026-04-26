import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export const SITE_URL = "https://mira.mk";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "mk",
        locales: {
          mk: "mk-MK",
          sq: "sq-AL",
          en: "en-US",
          tr: "tr-TR",
          bcms: "bs-BA",
          rom: "rom",
        },
      },
    }),
  ],
});
