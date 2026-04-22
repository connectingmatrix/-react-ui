# @react/ui

Reusable React UI primitives, fields, elements, and layouts for application dashboards.

The package owns its compiled CSS and design tokens. Consumers import one stylesheet and do not need to configure Tailwind.

## Quickstart

```tsx
import { AccentProvider, Button, GridLayout, Page, Sidebar, Table } from '@react/ui';
import type { TableColumn } from '@react/ui';
import '@react/ui/styles.css';
```

```tsx
type TradeRow = {
  id: string;
  symbol: string;
  side: 'Buy' | 'Sell';
  price: number;
  status: 'Open' | 'Closed';
};

const rows: TradeRow[] = [
  { id: 'trd-1', symbol: 'BTC-USDT', side: 'Buy', price: 64250.4, status: 'Open' },
  { id: 'trd-2', symbol: 'ETH-USDT', side: 'Sell', price: 3250.12, status: 'Closed' },
];

const columns: TableColumn<TradeRow>[] = [
  { id: 'symbol', label: 'Symbol', accessor: (row: TradeRow) => row.symbol, sortable: true },
  {
    id: 'side',
    label: 'Side',
    kind: 'enum',
    accessor: (row) => row.side,
    getEnumOptions: () => [
      { label: 'Buy', value: 'Buy' },
      { label: 'Sell', value: 'Sell' },
    ],
  },
  { id: 'price', label: 'Price', accessor: (row: TradeRow) => `$${row.price.toLocaleString()}`, compare: (a: TradeRow, b: TradeRow) => a.price - b.price },
  { id: 'status', label: 'Status', accessor: (row: TradeRow) => row.status },
];

export function Dashboard() {
  return (
    <AccentProvider accentKey="default">
      <Page
        title="Trading dashboard"
        description="Reusable shell with sidebar, actions, and panel content."
        sidebar={<Sidebar items={[{ id: 'trades', label: 'Trades', active: true }]} />}
        actions={<Button variant="primary">Refresh</Button>}
      >
        <GridLayout
          persistenceKey="dashboard"
          panels={[
            {
              id: 'trades',
              title: 'Trades',
              description: 'Sortable, filterable table in a movable panel.',
              content: <Table tableId="trades" rows={rows} columns={columns} rowKey={(row) => row.id} searchable selection={{ mode: 'multi' }} />,
            },
          ]}
        />
      </Page>
    </AccentProvider>
  );
}
```

## Package Structure

- `src/components`: single-purpose visual components such as `Button`, `Card`, `ChipCard`, `RadioCard`, `Switch`, `Tooltip`, and `Icon`.
- `src/fields`: form fields such as `Text`, `TextArea`, `NumberInput`, and `DateTimeSelector`.
- `src/elements`: composed data surfaces such as `Table`, `Logger`, and `NotificationViewport`.
- `src/layouts`: page composition primitives such as `Page`, `PageHeader`, `PageContainer`, `Sidebar`, `GridLayout`, and `DynamicPanel`.
- `src/context`: shared providers and hooks such as `AccentProvider`, `useAccent`, and accent token helpers.
- `tests`: package tests. Tests live outside `src`.
- `stories`: Storybook examples, controls, docs source, and bot-screen recipes.
- `docs`: written guides for consumers and future contributors.

## Core Concepts

Use `Page` to create the route shell. It accepts generic `title`, `description`, `actions`, `sidebar`, `topbar`, `footer`, and `children` slots. It does not know about bots, exchanges, navigation data, or app APIs.

Use `GridLayout` to arrange panels. It accepts panel definitions and can run controlled or uncontrolled. Movement, resizing, collapse, fullscreen, custom panel buttons, and persistence are all prop-driven.

Use `Table` for data grids. It supports search, sorting, custom compare functions, filters, custom header filters, grouped headers, row expansion, nested content, selection, bulk actions, column visibility, column resizing, column reordering, and persistence.

Use `AccentProvider` to set colors. Components first use provider tokens. When no provider is present, they use their own `accentKey`. When neither exists, they fall back to the default accent.

## Accents

Built-in accents include dark dashboard accents and light TailAdmin-inspired accents:

`default`, `accent`, `cyan`, `teal`, `success`, `warning`, `danger`, `neutral`, `light`, `tailadmin`, `light-blue`, `light-success`, `light-warning`, `light-danger`, and `light-neutral`.

Create a custom accent by extending an existing preset:

```tsx
import { AccentProvider, createAccentPresets } from '@react/ui';
import '@react/ui/styles.css';

const accents = createAccentPresets({
  brand: {
    extends: 'light',
    tokens: {
      accent: '#635bff',
      accentStrong: '#4f46e5',
      accentSoft: '#eef2ff',
      accentMuted: 'rgba(99, 91, 255, 0.08)',
      accentBorder: '#a5b4fc',
      accentBorderSoft: '#ddd6fe',
      accentSoftText: '#4f46e5',
      accentOutlineText: '#4f46e5',
    },
  },
});

export function App() {
  return (
    <AccentProvider accentKey="brand" accents={accents}>
      <YourRoutes />
    </AccentProvider>
  );
}
```

## Guides

- [Getting Started](./docs/getting-started.md)
- [Page, GridLayout, DynamicPanel, and Table](./docs/page-grid-table.md)
- [Accents and Design Tokens](./docs/accents.md)
- [Generated API Reference](./docs/api/index.md)
- [Migration From Bot Wrappers](./docs/migration-from-bot-wrappers.md)
- [Creating New Components](./docs/creating-components.md)
- [Implementation and README Gap Audit](./docs/system-audit.md)

## GitHub Docs

Docs are published from the `docs` directory through GitHub Pages on every push to `main`. The workflow regenerates TypeScript API docs with `yarn docs:api`, builds Storybook, and publishes both the Markdown docs and static Storybook.

## Storybook

The published package includes Storybook source and the prebuilt static Storybook.

- Source stories: `stories/*.stories.tsx`
- Getting Started recipe: `stories/getting-started.stories.tsx`
- Exact usage snippets: `stories/story-source.ts`
- Bot-screen recipes: `stories/bot-recipes.stories.tsx`
- Exact market symbol table recipe: `stories/market-symbol-data-table.stories.tsx`
- Storybook config: `.storybook`
- Static build: `storybook-static`

Run Storybook from a source checkout or extracted package:

```bash
yarn install
yarn storybook
```

Regenerate static Storybook:

```bash
yarn build:storybook
```

## Table Column Groups

`TableColumn` supports grouped headers for wide market-data style tables:

```tsx
const columns = [
  { id: 'symbol', label: 'Symbol', groupId: 'base', groupLabel: 'Base' },
  { id: 'change5m', label: '5m', groupId: 'price', groupLabel: 'Price change %' },
  { id: 'change15m', label: '15m', groupId: 'price', groupLabel: 'Price change %' },
];
```

Adjacent visible columns with the same `groupId` render under one grouped header using `colSpan`.

## Development

```bash
yarn install --immutable
yarn typecheck
yarn lint
yarn test
yarn build
yarn build:storybook
```

Use Yarn for all package work.
