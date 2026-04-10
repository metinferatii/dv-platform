import type { Lang } from "../i18n/index";

const cityNames: Record<string, Record<Lang, string>> = {
  "Shkup": { sq: "Shkup", mk: "Скопје", en: "Skopje", tr: "Uskup", bs: "Skoplje", rom: "Skopje" },
  "Tetovë": { sq: "Tetovë", mk: "Тетово", en: "Tetovo", tr: "Kalkandelen", bs: "Tetovo", rom: "Tetovo" },
  "Gostivar": { sq: "Gostivar", mk: "Гостивар", en: "Gostivar", tr: "Gostivar", bs: "Gostivar", rom: "Gostivar" },
  "Kumanovë": { sq: "Kumanovë", mk: "Куманово", en: "Kumanovo", tr: "Kumanovo", bs: "Kumanovo", rom: "Kumanovo" },
  "Ohër": { sq: "Ohër", mk: "Охрид", en: "Ohrid", tr: "Ohri", bs: "Ohrid", rom: "Ohrid" },
  "Strugë": { sq: "Strugë", mk: "Струга", en: "Struga", tr: "Struga", bs: "Struga", rom: "Struga" },
  "Manastir": { sq: "Manastir", mk: "Битола", en: "Bitola", tr: "Manastir", bs: "Bitola", rom: "Bitola" },
  "Sveti Nikollë": { sq: "Sveti Nikollë", mk: "Свети Николе", en: "Sveti Nikole", tr: "Sveti Nikole", bs: "Sveti Nikole", rom: "Sveti Nikole" },
  "Pehçevë": { sq: "Pehçevë", mk: "Пехчево", en: "Pehchevo", tr: "Pehcevo", bs: "Pehcevo", rom: "Pehcevo" },
  "Rankovce": { sq: "Rankovce", mk: "Ранковце", en: "Rankovce", tr: "Rankovce", bs: "Rankovce", rom: "Rankovce" },
  "Samokov": { sq: "Samokov", mk: "Самоков", en: "Samokov", tr: "Samokov", bs: "Samokov", rom: "Samokov" },
};

export function translateCity(cityKey: string, lang: Lang): string {
  return cityNames[cityKey]?.[lang] || cityKey;
}
