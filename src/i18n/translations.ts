import sq from "./translations/sq";
import mk from "./translations/mk";
import en from "./translations/en";
import tr from "./translations/tr";
import bs from "./translations/bs";
import rom from "./translations/rom";
import type { Lang } from "./index";

const translations = { sq, mk, en, tr, bs, rom } as const;

export type Translations = typeof sq;

export function t(lang: Lang): Translations {
  return translations[lang] as Translations;
}
