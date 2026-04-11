import type { Lang } from "../i18n/index";

const cityNames: Record<string, Record<Lang, string>> = {
  "Shkup": { sq: "Shkup", mk: "Скопје", en: "Skopje", tr: "Uskup", bcms: "Skoplje", rom: "Skopje" },
  "Tetovë": { sq: "Tetovë", mk: "Тетово", en: "Tetovo", tr: "Kalkandelen", bcms: "Tetovo", rom: "Tetovo" },
  "Gostivar": { sq: "Gostivar", mk: "Гостивар", en: "Gostivar", tr: "Gostivar", bcms: "Gostivar", rom: "Gostivar" },
  "Kumanovë": { sq: "Kumanovë", mk: "Куманово", en: "Kumanovo", tr: "Kumanovo", bcms: "Kumanovo", rom: "Kumanovo" },
  "Ohër": { sq: "Ohër", mk: "Охрид", en: "Ohrid", tr: "Ohri", bcms: "Ohrid", rom: "Ohrid" },
  "Strugë": { sq: "Strugë", mk: "Струга", en: "Struga", tr: "Struga", bcms: "Struga", rom: "Struga" },
  "Manastir": { sq: "Manastir", mk: "Битола", en: "Bitola", tr: "Manastir", bcms: "Bitola", rom: "Bitola" },
  "Sveti Nikollë": { sq: "Sveti Nikollë", mk: "Свети Николе", en: "Sveti Nikole", tr: "Sveti Nikole", bcms: "Sveti Nikole", rom: "Sveti Nikole" },
  "Pehçevë": { sq: "Pehçevë", mk: "Пехчево", en: "Pehchevo", tr: "Pehcevo", bcms: "Pehcevo", rom: "Pehcevo" },
  "Rankovce": { sq: "Rankovce", mk: "Ранковце", en: "Rankovce", tr: "Rankovce", bcms: "Rankovce", rom: "Rankovce" },
  "Samokov": { sq: "Samokov", mk: "Самоков", en: "Samokov", tr: "Samokov", bcms: "Samokov", rom: "Samokov" },
};

export function translateCity(cityKey: string, lang: Lang): string {
  return cityNames[cityKey]?.[lang] || cityKey;
}
