# Monorepo for `@incubateur-ademe/legal-pages-*` packages and examples

This monorepo contains the following packages:

-   [`@incubateur-ademe/legal-pages-markdown`](./packages/markdown/README.md)
-   [`@incubateur-ademe/legal-pages-react`](./packages/react/README.md)

And the following examples:

-   [Next.js/React](./examples/react-next/README.md)

## Release process

```bash
yarn changeset
yarn changeset version
NODE_ENV=production yarn build
yarn changeset publish
git commit
git push --follow-tags
```
