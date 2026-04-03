# Translation Guide

## File structure

Each language has one file: `src/i18n/translations/{code}.ts`

Current languages:
| Code | Language | File |
|------|----------|------|
| `sq` | Albanian (default) | `sq.ts` |
| `mk` | Macedonian | `mk.ts` |
| `en` | English | `en.ts` |
| `tr` | Turkish | `tr.ts` |
| `bs` | Bosnian | `bs.ts` |
| `rom` | Romani | `rom.ts` |

## Editing an existing translation

1. Open the file for your language in `src/i18n/translations/`
2. Find the text you want to fix
3. Edit it
4. Run `npm run build` to verify no syntax errors
5. Submit a PR

## Adding a new language

1. Copy `src/i18n/translations/en.ts` to `src/i18n/translations/{code}.ts`
2. Translate every string in the file
3. Register the language in `src/i18n/index.ts`:

```ts
export const languages = {
  sq: "Shqip",
  mk: "Македонски",
  en: "English",
  tr: "Turkce",
  bs: "Bosanski",
  rom: "Romani",
  xx: "Your Language",  // add here
} as const;
```

4. Import and add it in `src/i18n/translations.ts`:

```ts
import xx from "./translations/xx";
const translations = { sq, mk, en, tr, bs, rom, xx } as const;
```

5. Add city name translations in `src/data/cities.ts`
6. Run `npm run build` to verify

## What needs translating

Each translation file contains these sections:

| Section | What it is |
|---------|-----------|
| `meta` | Page title and description |
| `nav` | Navigation labels |
| `exit` | Quick exit button text |
| `home` | Home page content |
| `resources` | Resources page labels |
| `guide` | Guide page header |
| `hotlines` | Hotlines page header and warning |
| `safety` | Safety plan page header |
| `guideSteps` | 4 step-by-step guide entries |
| `safetySteps` | 4 safety checklist sections with items |
| `hotlineNames` | Names and availability for 10 helplines |
| `docGuide` | Documentation guide (4 sections with instructions) |
| `orgs` | Name, type, and description for each of the 27 organizations |

## Tips

- Keep translations natural, not literal. A person in crisis is reading this.
- Use simple, direct language. Short sentences.
- Phone numbers and addresses don't need translating (they're in the data files).
- The `orgs` section is the longest. Organization names may have established translations in your language.
- Test your translations by running `npm run dev` and switching to your language.
