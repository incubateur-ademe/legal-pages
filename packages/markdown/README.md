# Legal Pages as Markdown

This package provides a way to generate legal pages for your website in Markdown format or HTML format.

Some HTML components used in the markdown are following DSFR classes.

## Installation

```bash
npm install @incubateur-ademe/legal-pages-markdown
```

## Available pages

-   [Privacy Policy](./src/PrivacyPolicy.md)
-   [Cookies Policy](./src/CookiesPolicy.md)
-   [Legal Notice](./src/LegalNotice.md)

All pages are available either with Beta.gouv mention (`*_withBeta.md`) or without.

## Usage

When used, html or markdown should be considered as templates and should be rendered with variables described in
[`types.d.ts`](./types.d.ts).

The variables are following the Mustache syntax.
