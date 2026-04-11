export const languages = {
  mk: "Македонски",
  sq: "Shqip",
  en: "English",
  tr: "Türkçe",
  bcms: "Bosanski",
  rom: "Romani",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "mk";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getPathWithoutLang(url: URL): string {
  const [, lang, ...rest] = url.pathname.split("/");
  if (lang in languages) return "/" + rest.join("/");
  return url.pathname;
}

export function localizedPath(lang: Lang, path: string): string {
  return `/${lang}${path === "/" ? "" : path}`;
}
