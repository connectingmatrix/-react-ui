# @react/ui Docs

Reusable React UI primitives, fields, elements, and layouts for application dashboards.

## Start Here

- [Getting Started](./getting-started.md)
- [Page, GridLayout, DynamicPanel, and Table](./page-grid-table.md)
- [Accents and Design Tokens](./accents.md)
- [Migration From Bot Wrappers](./migration-from-bot-wrappers.md)
- [Creating New Components](./creating-components.md)
- [Generated API Reference](./api/index.md)

## Live References

- [Storybook](./storybook/)
- [Exact market symbol table recipe](./storybook/?path=/story/react-ui-recipes-market-symbol-data-table--market-symbol-data-table)

## Regenerate Docs

```bash
yarn docs:api
yarn build:storybook
```

The GitHub Pages workflow regenerates API docs and publishes this docs site plus the static Storybook on every push to `main`.
