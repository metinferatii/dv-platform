# Contributing to Informata

Thank you for helping. This platform exists to help people in dangerous situations, so quality and accuracy matter.

## How to help

### 1. Improve translations (most needed)

The Romani translations in particular need review by native speakers. All translations can be improved.

Translation files live in `src/i18n/translations/`. Each file is a TypeScript object with all UI text, guide content, organization descriptions, and hotline names.

You don't need to be a developer to help. Open the relevant `.ts` file, find the text that needs fixing, and submit a pull request or open an issue describing the correction.

See [TRANSLATIONS.md](TRANSLATIONS.md) for the full guide on adding or editing languages.

### 2. Add or update organization data

Organizations are in `src/data/organizations.ts`. Each org has:
- `key` (used to look up translated name/description)
- `city`, `address`, `phones`, `email`, `website`
- `highlight` (featured in listings)

If an organization has changed its phone number, address, or closed down, please open an issue or PR.

When adding a new org, you also need to add translated `name`, `type`, and `desc` for that org's key in each translation file under the `orgs` object.

### 3. Report issues

- Broken phone numbers
- Incorrect organization info
- Translation errors
- Accessibility problems
- Layout bugs

Open an issue with as much detail as you can.

### 4. Code contributions

The site is built with Astro + Tailwind. It's a static site with no backend.

```bash
npm install
npm run dev
```

Before submitting a PR:
- Run `npm run build` and make sure it succeeds
- Test all 6 languages
- Test on mobile (the site is mobile-first)

## Guidelines

- This is a sensitive topic. Be respectful in issues and PRs.
- Organization data must be accurate. Don't add organizations you haven't verified.
- Translations should be reviewed by native speakers when possible.
- Keep the site simple. No JavaScript frameworks, no analytics, no cookies.
- The quick exit button must always work.

## Code of Conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
