# Page, GridLayout, DynamicPanel, and Table

These are the three surfaces most consumers need first: the route shell, the movable panel grid, and the data table.

## Page

`Page` is a generic route shell. It accepts slots and does not own app navigation, API calls, bot data, exchange data, or business rules.

```tsx
import type { ReactNode } from 'react';
import { Button, Page, Sidebar } from '@react/ui';

export function RouteShell({ children }: { children: ReactNode }) {
  return (
    <Page
      title="Config overview"
      description="Review grouped settings and recent activity."
      sidebar={<Sidebar items={[{ id: 'overview', label: 'Overview', active: true }]} />}
      actions={
        <>
          <Button variant="ghost">Import</Button>
          <Button variant="primary">Save</Button>
        </>
      }
    >
      {children}
    </Page>
  );
}
```

Common props:

- `title` or `pageName`: page heading.
- `description`: supporting copy below the heading.
- `actions` or `actionButtons`: custom action slot.
- `sidebar`: sidebar slot.
- `topbar`: top-of-page slot.
- `footer`: bottom slot.
- `children`: page content, usually a `GridLayout`.
- `className`, `headerClassName`, `contentClassName`, `sidebarClassName`: targeted styling hooks.

## GridLayout

`GridLayout` receives panels as data. Each panel can be moved, resized, collapsed, and fullscreened unless those features are disabled.

```tsx
import { Button, GridLayout } from '@react/ui';

const panels = [
  {
    id: 'summary',
    title: 'Summary',
    description: 'High-level metrics.',
    defaultWidth: 'third',
    content: <div>Summary content</div>,
  },
  {
    id: 'activity',
    title: 'Activity',
    description: 'Recent events.',
    defaultWidth: 'full',
    actions: <Button size="sm">Export</Button>,
    content: <div>Activity content</div>,
  },
] as const;

export function Panels() {
  return <GridLayout panels={[...panels]} persistenceKey="config-overview" allowMovement allowResize allowCollapse allowFullscreen />;
}
```

Use controlled layout state when the app owns persistence:

```tsx
import * as React from 'react';
import { GridLayout } from '@react/ui';
import type { GridPanelState } from '@react/ui';

export function ControlledPanels() {
  const [layout, setLayout] = React.useState<GridPanelState[]>([]);

  return <GridLayout panels={panels} layout={layout} onLayoutChange={setLayout} />;
}
```

Use a persistence adapter when storage is not `localStorage`:

```tsx
import type { GridPanelState } from '@react/ui';

const persistenceAdapter = {
  load: async (key: string) => fetch(`/layout/${key}`).then((response) => response.json()),
  save: async (key: string, state: GridPanelState[]) => {
    await fetch(`/layout/${key}`, { method: 'POST', body: JSON.stringify(state) });
  },
};

<GridLayout panels={panels} persistenceKey="config-overview" persistenceAdapter={persistenceAdapter} />;
```

Customize panel buttons with render props:

```tsx
<GridLayout
  panels={panels}
  renderPanelActions={(panel) => <Button size="sm">Validate {panel.title}</Button>}
  renderCollapseButton={({ defaultButton }) => defaultButton}
  renderFullscreenButton={({ defaultButton }) => defaultButton}
/>
```

## DynamicPanel

`DynamicPanel` is the individual panel used by `GridLayout`. Use it directly when you need one standalone panel but still want the same header, controls, collapse, and fullscreen behavior.

```tsx
import { DynamicPanel } from '@react/ui';

<DynamicPanel
  panel={{ id: 'preview', title: 'Execution preview', content: <Preview /> }}
  state={{ id: 'preview', order: 0, width: 'full', collapsed: false, fullscreen: false }}
/>;
```

## Table

`Table` is generic over the row type. Define rows, columns, and a stable `rowKey`.

```tsx
import { Badge, Button, Table } from '@react/ui';
import type { TableColumn } from '@react/ui';

type Trade = {
  id: string;
  symbol: string;
  side: 'Buy' | 'Sell';
  quantity: number;
  price: number;
  status: 'Open' | 'Closed';
};

const rows: Trade[] = [
  { id: 'trd-1', symbol: 'BTC-USDT', side: 'Buy', quantity: 0.12, price: 64250.4, status: 'Open' },
  { id: 'trd-2', symbol: 'ETH-USDT', side: 'Sell', quantity: 1.4, price: 3250.12, status: 'Closed' },
];

const columns: TableColumn<Trade>[] = [
  { id: 'symbol', label: 'Symbol', accessor: (row) => row.symbol, sortable: true },
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
  { id: 'quantity', label: 'Qty', accessor: (row) => row.quantity, compare: (a, b) => a.quantity - b.quantity },
  { id: 'price', label: 'Price', accessor: (row) => `$${row.price.toLocaleString()}`, compare: (a, b) => a.price - b.price },
  { id: 'status', label: 'Status', renderCell: (row) => <Badge>{row.status}</Badge> },
];

export function TradesTable() {
  return (
    <Table
      tableId="trades"
      rows={rows}
      columns={columns}
      rowKey={(row) => row.id}
      searchable
      selection={{ mode: 'multi' }}
      renderSelectionActions={({ selectedRows }) => <Button size="sm">Export {selectedRows.length}</Button>}
      renderExpandedContent={(row) => <pre>{JSON.stringify(row, null, 2)}</pre>}
      persistence={{ namespace: 'app:tables' }}
    />
  );
}
```

Important table props:

- `columns`: typed column definitions.
- `rows`: data array.
- `rowKey`: stable row ID.
- `tableId`: stable table ID used by persistence and labels.
- `searchable`: enables global search.
- `state`, `defaultState`, `onStateChange`: controlled or uncontrolled table state for filters, sort, global search, visible columns, column order, column widths, selected rows, and expanded rows.
- `selection`: row selection config. Use `selection={{ mode: 'multi' }}` or `selection={{ mode: 'single' }}`.
- `renderSelectionActions`: bulk action slot.
- `renderExpandedContent`: expanded row slot. Return any React node, including another `Table`.
- `renderHeaderFilters`: custom filter UI above the table.
- `allowColumnResize`: enables column resizing.
- `allowColumnReorder`: enables column drag reorder.
- `persistence`: namespace and adapter for persisted visibility, order, width, filters, and sort state.

## Grouped Market Data Table

Use `groupId` and `groupLabel` on adjacent visible columns:

```tsx
const columns: TableColumn<MarketRow>[] = [
  { id: 'symbol', label: 'Symbol', groupId: 'base', groupLabel: 'Base', accessor: (row) => row.symbol },
  { id: 'price', label: 'Price USD', groupId: 'base', groupLabel: 'Base', accessor: (row) => row.price },
  { id: 'change5m', label: '5m', groupId: 'change', groupLabel: 'Price change %', accessor: (row) => row.change5m },
  { id: 'change15m', label: '15m', groupId: 'change', groupLabel: 'Price change %', accessor: (row) => row.change15m },
];
```

The full symbol-analysis recipe is in `stories/market-symbol-data-table.stories.tsx`.
