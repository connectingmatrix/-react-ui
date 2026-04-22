# @react/ui

Reusable React UI primitives, fields, elements, and layouts for application dashboards.

## Runtime Usage

```tsx
import { Button, Page, Table } from '@react/ui';
import '@react/ui/styles.css';
```

Consumers do not need to configure Tailwind. The package ships compiled CSS at `@react/ui/styles.css`.

## Table Column Groups

`TableColumn` supports grouped headers for wide market-data style tables:

```tsx
const columns = [
  { id: 'symbol', label: 'Symbol', groupId: 'base', groupLabel: 'Base' },
  { id: 'change5m', label: '5m', groupId: 'price', groupLabel: 'Price change %' },
  { id: 'change15m', label: '15m', groupId: 'price', groupLabel: 'Price change %' },
];
```

Adjacent visible columns with the same `groupId` render under one grouped header using `colSpan`. See the Storybook `CryptoTrackerTable`, `BotTableUsageParity`, `TableElement`, and `Grouped Props Controls` stories for symbol-analysis/live-market examples.

## Storybook Usage

The published package includes the Storybook source and the prebuilt static Storybook.

- Source stories: `stories/*.stories.tsx`
- Exact usage snippets: `stories/story-source.ts`
- Bot-screen recipes: `stories/bot-recipes.stories.tsx`
- Exact market symbol table recipe: `stories/market-symbol-data-table.stories.tsx`
- Storybook config: `.storybook`
- Static build: `storybook-static`

To run the package Storybook from a source checkout or extracted package:

```bash
yarn install
yarn storybook
```

To regenerate the static Storybook:

```bash
yarn build:storybook
```

`yarn pack` runs `yarn build && yarn build:storybook` before creating the package archive, so the shipped `dist` and `storybook-static` folders stay in sync with source.
