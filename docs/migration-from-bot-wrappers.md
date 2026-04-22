# Migration From Bot Wrappers to @react/ui

This guide explains how to migrate app-local bot UI wrappers to package components while keeping bot, Binance, strategy, API, runtime, config, and trading logic in the consuming app.

## Rule of Thumb

Move reusable visuals and interaction primitives to `@react/ui`.

Keep these in the bot app:

- backend API clients.
- bot IDs, page IDs, route IDs, and navigation data.
- strategy metadata and validation rules.
- trade/config column definitions and expanded row content.
- log level/category defaults.
- status maps and domain copy.
- CSV/export schemas.
- Electron and platform behavior.

## Import Once

Import package CSS once in the UI entry:

```tsx
import '@react/ui/styles.css';
```

Then import package components directly:

```tsx
import { Button, DateTimeSelector, GridLayout, Logger, SelectBox, Table, Text } from '@react/ui';
import type { GridPanelDefinition, GridPanelState, TableColumn } from '@react/ui';
```

## Wrapper Mapping

| Bot wrapper or old component | Use from `@react/ui`                        | What stays app-side                                  |
| ---------------------------- | ------------------------------------------- | ---------------------------------------------------- |
| `Button` wrappers            | `Button`                                    | command handlers and button copy                     |
| `TextInput`                  | `Text`                                      | config field names and validation messages           |
| `SelectField`                | `SelectBox mode="single"`                   | option lists derived from bot metadata               |
| `MultiSelectDropdown`        | `SelectBox mode="multiple"`                 | option grouping and domain filters                   |
| `DataTable`                  | `Table`                                     | row data, column definitions, expanded row renderers |
| `ToastViewport`              | `NotificationViewport`                      | notification queue and event source                  |
| `MetricCard`                 | `ChipCard` or app wrapper around `ChipCard` | metric formatting and labels                         |
| `InlineNote`                 | `Banner`                                    | bot-specific warning/info copy                       |
| `PersistedPanelGrid`         | `GridLayout`                                | backend persistence adapter and page/bot IDs         |
| `StructuredLogViewer`        | `Logger`                                    | log categories, bot filtering, payload mapping       |
| local icon wrappers          | `Icon`                                      | app-specific logos and brand imagery                 |

## Fields

Before:

```tsx
<SelectField label="Mode" value={mode} options={modeOptions} onChange={setMode} />
<MultiSelectDropdown value={symbols} options={symbolOptions} onChange={setSymbols} />
<TextInput label="Capital" value={capital} onChange={setCapital} />
```

After:

```tsx
<SelectBox label="Mode" mode="single" value={mode} options={modeOptions} onChange={setMode} />
<SelectBox label="Symbols" mode="multiple" value={symbols} options={symbolOptions} onChange={setSymbols} searchable />
<Text label="Capital" value={capital} onChange={setCapital} />
```

Use `NumberInput` when the state is numeric:

```tsx
<NumberInput label="Capital" value={capital} onChange={setCapital} prefix="$" min={0} />
```

## Tables

Before:

```tsx
<DataTable rows={trades} columns={tradeColumns} getRowId={(row) => row.id} />
```

After:

```tsx
const columns: TableColumn<Trade>[] = [
  { id: 'symbol', label: 'Symbol', accessor: (row) => row.symbol, sortable: true },
  { id: 'side', label: 'Side', kind: 'enum', accessor: (row) => row.side },
  { id: 'price', label: 'Price', accessor: (row) => formatUsd(row.price), compare: (a, b) => a.price - b.price },
];

<Table
  tableId="trades"
  rows={trades}
  columns={columns}
  rowKey={(row) => row.id}
  searchable
  allowColumnResize
  allowColumnReorder
  selection={{ mode: 'multi' }}
  renderSelectionActions={({ selectedRows }) => <Button size="sm">Export {selectedRows.length}</Button>}
  renderExpandedContent={(row) => <TradeDetail row={row} />}
  persistence={{ namespace: 'bot:tables' }}
/>;
```

Keep nested expanded tables app-side by returning them from `renderExpandedContent`.

## Panel Grids

The bot app can keep a thin wrapper when layout state is persisted through backend APIs. That wrapper should only translate app IDs to the package persistence adapter.

```tsx
function PersistedPanelGrid({ pageId, botId, panels }: PersistedPanelGridProps) {
  const adapter = React.useMemo(
    () => ({
      load: async () => {
        const layout = await api.getLayout(pageId, botId || undefined);
        return (layout?.items || null) as GridPanelState[] | null;
      },
      save: async (_key: string, state: GridPanelState[]) => {
        await api.saveLayout(pageId, state, botId || undefined);
      },
    }),
    [botId, pageId],
  );

  return <GridLayout panels={panels as GridPanelDefinition[]} persistenceKey={`${pageId}:${botId || '__global__'}`} storageNamespace="cc:layout" persistenceAdapter={adapter} />;
}
```

If a page only needs browser persistence, use `GridLayout` directly:

```tsx
<GridLayout panels={panels} persistenceKey="settings" storageNamespace="app:layout" />
```

## Logs

Keep bot log defaults and filtering in the app, then pass normalized entries to `Logger`.

```tsx
const levels = ['ALL', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'SUCCESS'].map((value) => ({ label: value, value }));
const categories = ['ALL', 'market_data', 'scanner', 'signal', 'risk', 'order', 'execution'].map((value) => ({ label: value, value }));

<Logger
  entries={logs.map(toLoggerEntry)}
  levels={levels}
  categories={categories}
  searchPlaceholder="Search logs, symbols, IDs"
  formatTimestamp={(entry) => formatDateTime(entry.createdAt)}
  renderMetadata={(entry) => <BotLogMetadata entry={entry} />}
  getSearchText={(entry) => [entry.message, entry.source, entry.category, entry.level, entry.botId, entry.symbol, JSON.stringify(entry.payload || {})].join(' ')}
/>;
```

## Notes, Metrics, and Cards

Replace info/warning notes with `Banner`:

```tsx
<Banner tone="warning">Import never auto-saves. Review the draft before saving.</Banner>
```

Replace generic metric cards with `ChipCard`:

```tsx
<ChipCard title="Running" value={runningCount} tone="success" description="Bots currently active." />
```

Keep domain-specific metric formatting in the app:

```tsx
<ChipCard title="Net PnL" value={formatUsd(summary.net)} tone={summary.net >= 0 ? 'success' : 'danger'} />
```

## Migration Order

1. Import `@react/ui/styles.css` once.
2. Replace primitive wrappers first: `Button`, `Text`, `SelectBox`, `Switch`, `Icon`, `Banner`.
3. Replace table wrappers route by route, keeping column definitions in the app.
4. Replace panel layout wrappers with `GridLayout` or a thin persistence adapter wrapper.
5. Replace log viewers with `Logger`, keeping app log filtering and normalization outside the package.
6. Remove wrapper files only after no route imports them.

## Acceptance Checklist

- No bot, Binance, strategy, runtime, API, Electron, config, or trading copy moved into `@react/ui`.
- App screens import package components directly where no app adapter is needed.
- Remaining app wrappers are thin adapters around API persistence, domain formatting, or domain defaults.
- Tables still support resize, reorder, expansion, selection, filters, and persistence.
- Storybook has a recipe for any screen/table pattern that is hard to infer from props alone.
