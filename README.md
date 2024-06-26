# Monorepo for `@incubateur-ademe/legal-pages-*` packages and examples

This monorepo contains the following packages:

-   [`@incubateur-ademe/legal-pages-markdown`](./packages/markdown/README.md)
-   [`@incubateur-ademe/legal-pages-react`](./packages/react/README.md)

And the following examples:

-   [Next.js/React](./examples/react-next/README.md)

## `withBeta` version

All pages accept a `includeBetaGouv` prop that will add a mention of BetaGouv to the
page to discharge them from the responsibility of some elements as well as ADEME.

It is recommended to use this prop only when the site url ends with `.beta.gouv.fr`.

## Release process

### Stable

```bash
yarn changeset
yarn changeset version
NODE_ENV=production yarn build
git add --all
git commit -am "chore(release): vX.Y.Z" # Replace X.Y.Z with the version number
yarn changeset publish
git push --follow-tags
```

### Pre release

On a new branch, run the following commands:

```bash
yarn changeset pre enter
yarn changeset
yarn changeset version
NODE_ENV=production yarn build
git add --all
git commit -am "chore(release): vX.Y.Z" # Replace X.Y.Z with the version number
yarn changeset publish
git push --follow-tags
yarn changeset pre exit
```
