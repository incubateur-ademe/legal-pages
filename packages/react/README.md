# Legal Pages as React components

This package provides a way to generate legal pages for your website with available React components.

It uses `@incubateur-ademe/legal-pages-markdown` internally to generate the legal pages and inject Mustache variables from the given props.

## Installation

```bash
npm install @incubateur-ademe/legal-pages-react
```

## Components

### React server components

-   `<CookiePolicy />`
-   `<LegalNotice />`
-   `<PrivacyPolicy />`

### Client-side rendering components

-   `<CookiePolicyClient />`
-   `<CookiePolicyWithBetaClient />`
-   `<LegalNoticeClient />`
-   `<LegalNoticeWithBetaClient />`
-   `<PrivacyPolicyClient />`
