# Informata

Multilingual domestic violence support platform for North Macedonia.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Static site, no backend, no cookies, no tracking.

## Languages

- **Shqip** (Albanian) - default
- **Македонски** (Macedonian)
- **English**
- **Turkce** (Turkish)
- **Bosanski** (Bosnian)
- **Romani**

## What it does

- Emergency call buttons (police 192, national SOS lines)
- Step-by-step guide for people experiencing domestic violence
- How to document violence (evidence gathering guide)
- Directory of 27 organizations across 12 cities
- All helpline numbers with tap-to-call
- Safety planning checklist
- Quick exit button (redirects to Google)
- Full i18n across all 6 languages

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`. Redirects to `/sq` (Albanian) by default.

## Building for production

```bash
npm run build
npm run preview
```

Generates static HTML in `dist/`. Deploy anywhere: Netlify, Vercel, Cloudflare Pages, GitHub Pages.

## Project structure

```
src/
  i18n/
    index.ts              # Language config
    translations.ts       # Translation loader
    translations/
      sq.ts               # Albanian (default)
      mk.ts               # Macedonian
      en.ts               # English
      tr.ts               # Turkish
      bs.ts               # Bosnian
      rom.ts              # Romani
  data/
    organizations.ts      # 27 orgs (structural data)
    hotlines.ts           # 10 helplines
    cities.ts             # City name translations
  components/
    TopNav.astro          # Desktop navigation
    BottomNav.astro       # Mobile navigation
    EmergencyBanner.astro # Top emergency bar
    SafeExit.astro        # Quick exit button
    LangSwitcher.astro    # Language picker
  layouts/
    Base.astro            # Page layout
  pages/
    index.astro           # Redirects to /sq
    [lang]/
      index.astro         # Home
      hapat.astro         # Step-by-step guide
      dokumento.astro     # How to document violence
      ndihme.astro        # Organization directory
      thirr.astro         # Helpline numbers
      siguria.astro       # Safety checklist
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to help. The most impactful contribution is improving translations, especially Romani.

## Adding a new language

See [TRANSLATIONS.md](TRANSLATIONS.md) for the full guide.

## License

AGPL-3.0. See [LICENSE](LICENSE).

## Built by

[Nkatrori](https://nkatrori.org) - helping people build things.
