import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const BRAND_GREEN = "#0a7d3a";
const BRAND_GREEN_LIGHT = "#e8f5ec";
const BRAND_GREEN_HOVER = "#086930";
const TXT_PRIMARY = "#0f1a14";

const taglines = {
  mk: "Поддршка против семејно насилство",
  sq: "Mbështetje kundër dhunës në familje",
  en: "Domestic violence support",
  tr: "Aile içi şiddet desteği",
  bcms: "Podrška protiv nasilja u porodici",
  rom: "Akharin pe familijako maripe",
};

function escapeXml(s) {
  return s.replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]
  );
}

function svg(tagline) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${BRAND_GREEN_LIGHT}"/>
        <stop offset="100%" stop-color="#ffffff"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect x="0" y="0" width="1200" height="8" fill="${BRAND_GREEN}"/>
    <g transform="translate(80, 200)">
      <text font-family="Georgia, 'Playfair Display', serif" font-weight="900" font-size="180" fill="${BRAND_GREEN}" letter-spacing="-6">mira</text>
      <text x="430" y="0" font-family="Georgia, serif" font-weight="900" font-size="180" fill="${BRAND_GREEN}" opacity="0.35">.</text>
    </g>
    <text x="80" y="430" font-family="-apple-system, 'DM Sans', system-ui, sans-serif" font-weight="500" font-size="36" fill="${TXT_PRIMARY}" opacity="0.78">${escapeXml(tagline)}</text>
    <g transform="translate(80, 530)">
      <circle cx="14" cy="14" r="14" fill="${BRAND_GREEN}"/>
      <text x="42" y="22" font-family="-apple-system, 'DM Sans', system-ui, sans-serif" font-weight="700" font-size="26" fill="${BRAND_GREEN_HOVER}">mira.mk</text>
    </g>
    <g transform="translate(960, 230) rotate(-8)">
      <circle r="170" fill="${BRAND_GREEN}" opacity="0.08"/>
      <circle r="120" fill="${BRAND_GREEN}" opacity="0.12"/>
      <g transform="translate(-50, -50)">
        <path d="M30 20 C30 12, 38 8, 46 8 L74 8 C82 8, 90 12, 90 20 L90 30 C90 38, 82 42, 74 42 L62 42 L48 56 L48 42 L46 42 C38 42, 30 38, 30 30 Z" fill="${BRAND_GREEN}" opacity="0.95"/>
      </g>
    </g>
  </svg>`;
}

async function main() {
  const defaultBuffer = Buffer.from(svg(taglines.en));
  await sharp(defaultBuffer).resize(1200, 630).png({ quality: 92 }).toFile(join(publicDir, "og.png"));
  console.log("✓ public/og.png");

  for (const [lang, tagline] of Object.entries(taglines)) {
    const buf = Buffer.from(svg(tagline));
    await sharp(buf).resize(1200, 630).png({ quality: 92 }).toFile(join(publicDir, `og-${lang}.png`));
    console.log(`✓ public/og-${lang}.png`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
