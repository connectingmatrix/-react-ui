import type { Meta, StoryObj } from '@storybook/react';
import React, { useMemo, useState } from 'react';
import { Badge, Button, Card, Icon, SelectBox, Switch, Table, Text, type TableColumn } from '../src/index';
import '../src/styles.css';
import { Section, StoryShell, formatDateTime, formatMoney, signedTone } from './story-helpers';

const meta: Meta = {
  title: 'React UI/Elements/Table Bot Usage Parity',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;
type AnyRow = Record<string, any>;

interface TableUsageCase {
  title: string;
  source: string;
  coverage: string;
  render: React.ReactNode;
}

const baseRows: AnyRow[] = [
  {
    id: 'one',
    name: 'Alpha workspace',
    owner: 'Mira Chen',
    status: 'Ready',
    state: 'Active',
    score: 92,
    amount: 1280,
    cost: 920,
    pnl: 84.25,
    updatedAt: '2026-04-19T09:20:00Z',
    message: 'Preview completed and is ready for review.',
    payload: { route: '/overview', ok: true },
  },
  {
    id: 'two',
    name: 'Beta workspace',
    owner: 'Omar Malik',
    status: 'Review',
    state: 'Paused',
    score: 76,
    amount: 640,
    cost: 700,
    pnl: -22.4,
    updatedAt: '2026-04-18T15:45:00Z',
    message: 'Waiting for reviewer assignment.',
    payload: { route: '/settings', ok: false, reason: 'missing-owner' },
  },
  {
    id: 'three',
    name: 'Gamma workspace',
    owner: 'Eli Stone',
    status: 'Blocked',
    state: 'Stopped',
    score: 41,
    amount: 300,
    cost: 450,
    pnl: -118.7,
    updatedAt: '2026-04-17T11:15:00Z',
    message: 'Blocked by a dependency.',
    payload: { route: '/reports', ok: false, reason: 'dependency' },
  },
];

const assetRows: AnyRow[] = [
  { id: 'asset-1', asset: 'USD', price: 1, total: 2400, value: 2400, free: 2200, locked: 200 },
  { id: 'asset-2', asset: 'EUR', price: 1.08, total: 320, value: 345.6, free: 300, locked: 20 },
  { id: 'asset-3', asset: 'GBP', price: 1.24, total: 96, value: 119.04, free: 90, locked: 6 },
];

const eventRows: AnyRow[] = [
  {
    id: 'evt-1',
    createdAt: '2026-04-19T09:20:00Z',
    level: 'INFO',
    source: 'ui',
    scope: 'create',
    action: 'start',
    phase: 'request',
    message: 'Request started.',
    payload: { id: 1 },
  },
  {
    id: 'evt-2',
    createdAt: '2026-04-19T09:21:00Z',
    level: 'WARN',
    source: 'api',
    scope: 'refresh',
    action: 'sync',
    phase: 'response',
    message: 'Response took longer than expected.',
    payload: { durationMs: 1840 },
  },
];

function statusTone(status: string) {
  if (['Ready', 'Complete', 'Filled', 'Running', 'Accepted', 'Executed'].includes(status)) return 'success';
  if (['Blocked', 'Rejected', 'Failed', 'Error'].includes(status)) return 'danger';
  if (['Review', 'Queued', 'Pending', 'Paused'].includes(status)) return 'warning';
  return 'accent';
}

function statusBadge(status: string) {
  return <Badge tone={statusTone(status)}>{status}</Badge>;
}

function pnlCell(value: number) {
  return (
    <span className={signedTone(value)}>
      {value >= 0 ? '+' : ''}
      {formatMoney(value)}
    </span>
  );
}

function simpleColumns(ids: string[]): TableColumn<AnyRow>[] {
  return ids.map((id) => ({
    id,
    label: id.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase()),
    kind:
      id.toLowerCase().includes('at') || id.toLowerCase().includes('time')
        ? 'datetime'
        : id.toLowerCase().includes('score') || id.toLowerCase().includes('amount')
          ? 'number'
          : 'text',
    width: id.length > 12 ? 180 : 130,
    visibleByDefault: !['payload', 'reasonDetail', 'runId', 'config', 'riskBlockers', 'managementReason', 'entryReason'].includes(id),
    wrap: ['message', 'reason', 'reasonDetail', 'payload', 'holdingSummary'].includes(id),
    getValue: (row) => row[id] ?? '-',
    renderCell: (row) => {
      const value = row[id];
      if (id.toLowerCase().includes('at') && value) return <span className="text-white/65">{formatDateTime(String(value))}</span>;
      if (id.toLowerCase().includes('pnl')) return pnlCell(Number(value || 0));
      if (['status', 'state', 'decision'].includes(id)) return statusBadge(String(value || 'Ready'));
      if (typeof value === 'number' && id.toLowerCase().includes('usd')) return formatMoney(value);
      if (typeof value === 'object') return JSON.stringify(value);
      return value ?? '-';
    },
  }));
}

function TableFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="overflow-hidden" contentClassName="space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="mt-1 text-xs text-[var(--rui-text-secondary)]">Generic dummy data; feature shape mirrors the bot UI usage.</div>
        </div>
        <Badge>Table</Badge>
      </div>
      <div className="min-h-[260px]">{children}</div>
    </Card>
  );
}

function UsageCard({ item }: { item: TableUsageCase }) {
  return (
    <Card contentClassName="space-y-3">
      <div>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-white">{item.title}</h2>
            <p className="mt-1 text-xs text-[var(--rui-text-tertiary)]">{item.source}</p>
          </div>
          <Badge>Parity</Badge>
        </div>
        <p className="mt-2 text-sm leading-6 text-[var(--rui-text-secondary)]">{item.coverage}</p>
      </div>
      {item.render}
    </Card>
  );
}

function DebugEventsTable() {
  return (
    <TableFrame title="Debug event stream">
      <Table
        tableId="storybook-debug-events"
        rows={eventRows}
        columns={[
          { id: 'createdAt', label: 'Time', kind: 'datetime', width: 170, renderCell: (row) => <span className="text-white/65">{formatDateTime(row.createdAt)}</span> },
          { id: 'level', label: 'Level', kind: 'enum', width: 96 },
          { id: 'source', label: 'Source', kind: 'text', width: 112 },
          { id: 'scope', label: 'Scope', kind: 'text', width: 132 },
          { id: 'action', label: 'Action', kind: 'text', width: 144 },
          { id: 'phase', label: 'Phase', kind: 'enum', width: 132 },
          { id: 'message', label: 'Message', kind: 'text', width: 320, wrap: true },
          { id: 'payload', label: 'Payload', kind: 'text', width: 340, visibleByDefault: false, wrap: true, getValue: (row) => JSON.stringify(row.payload) },
        ]}
        rowKey={(row) => row.id}
        emptyMessage="No debug events yet."
        renderExpandedContent={(row) => (
          <pre className="overflow-x-auto rounded-[8px] border border-white/8 bg-[#070b18] p-3 font-mono text-[11px] leading-5 text-white/75">
            {JSON.stringify(row.payload, null, 2)}
          </pre>
        )}
      />
    </TableFrame>
  );
}

function CompactPositionsTable({ reserved = false }: { reserved?: boolean }) {
  const rows = reserved
    ? [
        { id: 'r1', label: 'Pending allocation', currency: 'USD', amount: 420, age: '12m' },
        { id: 'r2', label: 'Manual hold', currency: 'EUR', amount: 180, age: '1h' },
      ]
    : baseRows.map((row) => ({ ...row, currency: row.name.slice(0, 3).toUpperCase(), unrealizedPnl: row.pnl, age: '36m' }));
  const columns: TableColumn<AnyRow>[] = reserved
    ? [
        { id: 'label', label: 'Source', kind: 'text', width: 160 },
        { id: 'currency', label: 'Currency', kind: 'text', width: 120 },
        { id: 'amount', label: 'Amount', kind: 'number', width: 120, renderCell: (row) => Number(row.amount || 0).toFixed(2) },
        { id: 'age', label: 'Age', kind: 'text', width: 120 },
      ]
    : [
        { id: 'currency', label: 'Currency', kind: 'text', width: 120 },
        { id: 'amount', label: 'Amount', kind: 'number', width: 120 },
        { id: 'cost', label: 'Cost', kind: 'number', width: 120, renderCell: (row) => formatMoney(row.cost) },
        { id: 'unrealizedPnl', label: 'Result', kind: 'number', width: 120, renderCell: (row) => pnlCell(row.unrealizedPnl) },
        { id: 'age', label: 'Age', kind: 'text', width: 120 },
        {
          id: 'actions',
          label: 'Action',
          kind: 'action',
          hideable: false,
          width: 100,
          sortable: false,
          filterable: false,
          renderCell: () => (
            <Button variant="ghost" size="sm">
              Info
            </Button>
          ),
        },
      ];
  return (
    <TableFrame title={reserved ? 'Reserved funds dynamic columns' : 'Open positions compact'}>
      <Table tableId={reserved ? 'storybook-reserved-funds' : 'storybook-open-positions'} rows={rows} columns={columns} rowKey={(row) => row.id} hideColumnControls />
    </TableFrame>
  );
}

function OpenOrdersTable() {
  return (
    <TableFrame title="Open orders compact">
      <Table
        tableId="storybook-open-orders"
        rows={[
          { id: 'ord-1', symbol: 'ALPHA-USD', type: 'Limit', amount: '120 units', status: 'Pending' },
          { id: 'ord-2', symbol: 'BETA-USD', type: 'Market', amount: '55 units', status: 'Filled' },
        ]}
        columns={[
          { id: 'symbol', label: 'Pair', kind: 'text', width: 140 },
          { id: 'type', label: 'Type', kind: 'enum', width: 120 },
          { id: 'amount', label: 'Amount', kind: 'text', width: 140 },
          { id: 'status', label: 'Status', kind: 'enum', width: 120, renderCell: (row) => statusBadge(row.status) },
        ]}
        rowKey={(row) => row.id}
        hideColumnControls
      />
    </TableFrame>
  );
}

function ManualSelectionInventoryTable() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set(['two']));
  const allSelected = baseRows.every((row) => selectedIds.has(row.id));
  const toggle = (id: string) =>
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  return (
    <TableFrame title="Inventory table with manual selection column">
      <div className="mb-3 flex flex-wrap items-center gap-2 rounded-[10px] border border-white/8 bg-black/10 p-3">
        <Text placeholder="External search" className="w-[260px]" />
        <Badge>{selectedIds.size} selected</Badge>
        <Button size="sm" variant="ghost" onClick={() => setSelectedIds(allSelected ? new Set() : new Set(baseRows.map((row) => row.id)))}>
          {allSelected ? 'Clear visible' : 'Select visible'}
        </Button>
        <Button size="sm" variant="outline" leftIcon={<Icon name="settings" className="h-4 w-4" />}>
          Bulk action
        </Button>
      </div>
      <Table
        tableId="storybook-manual-selection-inventory"
        rows={baseRows}
        columns={[
          {
            id: 'select',
            label: 'Select',
            kind: 'action',
            hideable: false,
            width: 72,
            sortable: false,
            filterable: false,
            renderHeader: () => <input type="checkbox" checked={allSelected} onChange={() => setSelectedIds(allSelected ? new Set() : new Set(baseRows.map((row) => row.id)))} />,
            renderCell: (row) => <input type="checkbox" checked={selectedIds.has(row.id)} onChange={() => toggle(row.id)} />,
          },
          { id: 'name', label: 'Name', kind: 'text', width: 220, renderCell: (row) => <span className="font-semibold text-white">{row.name}</span> },
          { id: 'state', label: 'State', kind: 'enum', width: 112, renderCell: (row) => statusBadge(row.state) },
          {
            id: 'assistant',
            label: 'Assist',
            kind: 'boolean',
            hideable: false,
            width: 124,
            renderCell: () => <Switch defaultChecked className="scale-75" aria-label="Toggle assist" />,
          },
          { id: 'amount', label: 'Capital', kind: 'number', width: 120, renderCell: (row) => formatMoney(row.amount) },
          { id: 'pnl', label: 'Live PnL', kind: 'number', width: 132, renderCell: (row) => pnlCell(row.pnl) },
          { id: 'message', label: 'Last log', kind: 'text', width: 280, wrap: true },
          { id: 'updatedAt', label: 'Updated', kind: 'datetime', width: 166, renderCell: (row) => formatDateTime(row.updatedAt) },
          {
            id: 'controls',
            label: 'Controls',
            kind: 'action',
            hideable: false,
            width: 220,
            sortable: false,
            filterable: false,
            renderCell: () => (
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="ghost">
                  Open
                </Button>
                <Button size="sm" variant="ghost">
                  Logs
                </Button>
              </div>
            ),
          },
        ]}
        rowKey={(row) => row.id}
        rowClassName={(row) => (selectedIds.has(row.id) ? 'bg-[var(--rui-accent-muted)]' : '')}
      />
    </TableFrame>
  );
}

function StatusImportJobsTable() {
  return (
    <TableFrame title="Import jobs with hidden detail column">
      <Table
        tableId="storybook-import-jobs"
        rows={[
          { id: 'job-1', fileName: 'workspace-alpha.json', botName: 'Alpha workspace', status: 'Complete', message: 'Imported successfully.', botId: 'hidden-alpha' },
          { id: 'job-2', fileName: 'workspace-beta.json', botName: 'Beta workspace', status: 'Queued', message: 'Waiting for processing.', botId: 'hidden-beta' },
        ]}
        columns={[
          { id: 'fileName', label: 'Config file', kind: 'text', width: 240 },
          { id: 'botName', label: 'Name', kind: 'text', width: 220 },
          { id: 'status', label: 'Status', kind: 'enum', width: 140, renderCell: (row) => statusBadge(row.status) },
          { id: 'message', label: 'Details', kind: 'text', width: 360, wrap: true },
          { id: 'botId', label: 'Hidden ID', kind: 'text', width: 220, visibleByDefault: false },
        ]}
        rowKey={(row) => row.id}
      />
    </TableFrame>
  );
}

function LedgerTable({ title, tableId, wide = false, expanded = false }: { title: string; tableId: string; wide?: boolean; expanded?: boolean }) {
  const ids = wide
    ? [
        'createdAt',
        'name',
        'state',
        'quantity',
        'usdOut',
        'usdIn',
        'entry',
        'exit',
        'grossPnl',
        'netPnl',
        'fees',
        'decision',
        'hold',
        'exitReason',
        'config',
        'runId',
        'entryReason',
        'reasonDetail',
        'payload',
      ]
    : ['createdAt', 'name', 'state', 'quantity', 'netPnl', 'decision', 'reason'];
  const rows: AnyRow[] = baseRows.map((row, index) => ({
    ...row,
    createdAt: row.updatedAt,
    quantity: 12 + index,
    usdOut: row.cost,
    usdIn: row.cost + row.pnl,
    entry: row.cost / 10,
    exit: (row.cost + row.pnl) / 10,
    grossPnl: row.pnl + 4,
    netPnl: row.pnl,
    fees: 1.2 + index,
    decision: row.status,
    hold: `${30 + index * 10}m`,
    exitReason: row.message,
    config: `v${index + 1}`,
    runId: `run-${index + 1}`,
    entryReason: 'Selected by score and review status.',
    reason: row.message,
    reasonDetail: `${row.message} Owner: ${row.owner}.`,
  }));
  return (
    <TableFrame title={title}>
      <Table
        tableId={tableId}
        rows={rows}
        columns={simpleColumns(ids)}
        rowKey={(row) => row.id}
        renderExpandedContent={
          expanded
            ? (row) => (
                <div className="space-y-3">
                  <div className="text-sm text-[var(--rui-text-secondary)]">Expanded lifecycle detail for {row.name}.</div>
                  <Table
                    rows={[
                      { id: `${row.id}-a`, step: 'Created', time: row.createdAt, actor: row.owner },
                      { id: `${row.id}-b`, step: 'Reviewed', time: row.updatedAt, actor: 'Review team' },
                    ]}
                    columns={[
                      { id: 'step', label: 'Step', kind: 'text', width: 140 },
                      { id: 'time', label: 'Time', kind: 'datetime', width: 170, renderCell: (entry) => formatDateTime(entry.time) },
                      { id: 'actor', label: 'Actor', kind: 'text', width: 140 },
                    ]}
                    rowKey={(entry) => entry.id}
                    hideColumnControls
                  />
                </div>
              )
            : undefined
        }
      />
    </TableFrame>
  );
}

function WalletHistoryTable() {
  return (
    <TableFrame title="Snapshot history with wrapped cells">
      <Table
        tableId="storybook-wallet-history"
        rows={[
          {
            id: 'hist-1',
            createdAt: '2026-04-19T09:20:00Z',
            source: 'scheduled',
            account: 'Primary',
            totalValue: 2864.6,
            heldAssets: 'USD 2400 · EUR 320 · GBP 96',
            context: 'Scheduled refresh',
          },
          {
            id: 'hist-2',
            createdAt: '2026-04-18T12:20:00Z',
            source: 'manual',
            account: 'Primary',
            totalValue: 2794.1,
            heldAssets: 'USD 2300 · EUR 310',
            context: 'Manual reconciliation note',
          },
        ]}
        columns={[
          { id: 'createdAt', label: 'Recorded at', kind: 'datetime', width: 172, renderCell: (row) => formatDateTime(row.createdAt) },
          { id: 'source', label: 'Source', kind: 'enum', width: 120 },
          { id: 'account', label: 'Account', kind: 'text', width: 180 },
          { id: 'totalValue', label: 'Account total', kind: 'number', width: 140, renderCell: (row) => formatMoney(row.totalValue) },
          { id: 'heldAssets', label: 'Held assets', kind: 'text', width: 320, wrap: true },
          { id: 'context', label: 'Context', kind: 'text', width: 260, wrap: true },
        ]}
        rowKey={(row) => row.id}
      />
    </TableFrame>
  );
}

function AssetBalanceTable() {
  return (
    <TableFrame title="Held assets by value">
      <Table
        tableId="storybook-held-assets"
        rows={assetRows}
        columns={[
          { id: 'asset', label: 'Asset symbol', kind: 'text', width: 120, renderCell: (row) => <span className="font-semibold text-white">{row.asset}</span> },
          { id: 'price', label: 'Asset value in USD', kind: 'number', width: 156, renderCell: (row) => formatMoney(row.price) },
          { id: 'total', label: 'Current holding', kind: 'number', width: 150 },
          { id: 'value', label: 'Current holding in USD', kind: 'number', width: 170, renderCell: (row) => formatMoney(row.value) },
        ]}
        rowKey={(row) => row.asset}
      />
    </TableFrame>
  );
}

function CandidatePreviewTable({ signals = false }: { signals?: boolean }) {
  const previewRows: AnyRow[] = baseRows.map((row, index) => ({
    ...row,
    symbol: row.name.split(' ')[0].toUpperCase(),
    change1hPct: 1.2 + index,
    change24hPct: 4.8 - index,
    spreadBps: 8 + index,
    accepted: index !== 2,
    type: index % 2 ? 'exit' : 'entry',
    explanation: [row.message],
    riskBlockers: index === 2 ? ['missing-owner'] : [],
  }));

  return (
    <TableFrame title={signals ? 'Preview signals' : 'Preview candidates'}>
      <Table
        tableId={signals ? 'storybook-preview-signals' : 'storybook-preview-candidates'}
        scopeId="preview"
        rows={previewRows}
        columns={
          signals
            ? [
                { id: 'symbol', label: 'Symbol', kind: 'text', width: 120, renderCell: (row) => <span className="font-semibold text-white">{row.symbol}</span> },
                { id: 'type', label: 'Type', kind: 'enum', width: 96 },
                { id: 'score', label: 'Score', kind: 'number', width: 92, renderCell: (row) => Number(row.score || 0).toFixed(2) },
                { id: 'status', label: 'Status', kind: 'enum', width: 120, renderCell: (row) => statusBadge(row.accepted ? 'Ready' : 'Blocked') },
                { id: 'explanation', label: 'Explanation', kind: 'text', width: 280, wrap: true, getValue: (row) => row.explanation.join(', ') },
                { id: 'riskBlockers', label: 'Risk blockers', kind: 'text', width: 260, wrap: true, getValue: (row) => row.riskBlockers.join(', ') || '-' },
              ]
            : [
                { id: 'symbol', label: 'Symbol', kind: 'text', width: 120, renderCell: (row) => <span className="font-semibold text-white">{row.symbol}</span> },
                { id: 'change1hPct', label: '1h', kind: 'number', width: 92, renderCell: (row) => `${row.change1hPct.toFixed(2)}%` },
                { id: 'change24hPct', label: '24h', kind: 'number', width: 92, renderCell: (row) => `${row.change24hPct.toFixed(2)}%` },
                { id: 'spreadBps', label: 'Spread', kind: 'number', width: 110, renderCell: (row) => `${row.spreadBps.toFixed(2)} bps` },
                {
                  id: 'decision',
                  label: 'Decision',
                  kind: 'enum',
                  width: 120,
                  getValue: (row) => (row.accepted ? 'Accepted' : 'Rejected'),
                  renderCell: (row) => statusBadge(row.accepted ? 'Accepted' : 'Rejected'),
                },
                { id: 'reason', label: 'Reason', kind: 'text', width: 320, wrap: true, getValue: (row) => row.explanation[0] },
              ]
        }
        rowKey={(row) => row.id}
      />
    </TableFrame>
  );
}

function RuntimeWideTable({ title, tableId, ids, expanded = false }: { title: string; tableId: string; ids: string[]; expanded?: boolean }) {
  return <LedgerTable title={title} tableId={tableId} wide={ids.length > 10} expanded={expanded} />;
}

function SymbolUniverseTable() {
  const [selected, setSelected] = useState<Set<string>>(() => new Set(['sym-1']));
  const rows = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: `sym-${index + 1}`,
        symbol: `ITEM-${String(index + 1).padStart(2, '0')}`,
        change1hPct: Math.sin(index) * 4,
        change24hPct: Math.cos(index) * 8,
        volume: 100000 + index * 15000,
        score: 55 + index * 2,
        decision: index % 5 === 0 ? 'Blocked' : index % 3 === 0 ? 'Review' : 'Ready',
        updatedAt: '2026-04-19T09:20:00Z',
      })),
    [],
  );
  return (
    <TableFrame title="Custom symbol-analysis style table parity">
      <div className="mb-3 flex flex-wrap items-center gap-2 rounded-[10px] border border-white/8 bg-black/10 p-3">
        <Text placeholder="External search" className="w-[220px]" />
        <SelectBox value="score" options={['score', 'change1hPct', 'change24hPct']} className="w-[150px]" />
        <Button size="sm" variant="ghost" leftIcon={<Icon name="filter" className="h-4 w-4" />}>
          Custom filters
        </Button>
        <Button size="sm" variant="ghost" leftIcon={<Icon name="download" className="h-4 w-4" />}>
          Export CSV
        </Button>
        <Badge>{selected.size} selected</Badge>
      </div>
      <Table
        tableId="storybook-symbol-universe"
        rows={rows}
        columns={[
          {
            id: 'select',
            label: 'Select',
            kind: 'action',
            hideable: false,
            width: 72,
            renderCell: (row) => (
              <input
                type="checkbox"
                checked={selected.has(row.id)}
                onChange={() =>
                  setSelected((current) => {
                    const next = new Set(current);
                    if (next.has(row.id)) next.delete(row.id);
                    else next.add(row.id);
                    return next;
                  })
                }
              />
            ),
          },
          { id: 'symbol', label: 'Symbol', kind: 'text', width: 130, renderCell: (row) => <span className="font-semibold text-white">{row.symbol}</span> },
          { id: 'change1hPct', label: '1h', kind: 'number', width: 100, renderCell: (row) => <span className={signedTone(row.change1hPct)}>{row.change1hPct.toFixed(2)}%</span> },
          {
            id: 'change24hPct',
            label: '24h',
            kind: 'number',
            width: 100,
            renderCell: (row) => <span className={signedTone(row.change24hPct)}>{row.change24hPct.toFixed(2)}%</span>,
          },
          { id: 'volume', label: 'Volume', kind: 'number', width: 120, renderCell: (row) => formatMoney(row.volume) },
          { id: 'score', label: 'Score', kind: 'number', width: 96, renderCell: (row) => Number(row.score).toFixed(1) },
          { id: 'decision', label: 'Decision', kind: 'enum', width: 126, renderCell: (row) => statusBadge(row.decision) },
          { id: 'updatedAt', label: 'Updated', kind: 'datetime', width: 170, visibleByDefault: false, renderCell: (row) => formatDateTime(row.updatedAt) },
        ]}
        rowKey={(row) => row.id}
        virtualization={{ enabled: true, maxHeight: 380, rowHeight: 52 }}
      />
    </TableFrame>
  );
}

const tableUsageCases: TableUsageCase[] = [
  {
    title: 'DebugScreen debug-events',
    source: 'ui/screens/DebugScreen.tsx',
    coverage: 'External search/filter toolbar shape, default filters/column controls, hidden payload column, and explicit JSON expansion.',
    render: <DebugEventsTable />,
  },
  {
    title: 'OpenPositionsCard positions tab',
    source: 'ui/components/dashboard/OpenPositionsCard.tsx',
    coverage: 'Compact table, dynamic tab columns, PnL coloring, action column, and hidden column controls.',
    render: <CompactPositionsTable />,
  },
  {
    title: 'OpenPositionsCard reserved funds tab',
    source: 'ui/components/dashboard/OpenPositionsCard.tsx',
    coverage: 'Same table slot with a different column set selected by tab state.',
    render: <CompactPositionsTable reserved />,
  },
  {
    title: 'OpenOrdersCard',
    source: 'ui/components/dashboard/OpenOrdersCard.tsx',
    coverage: 'Compact table with status rendering and hideColumnControls.',
    render: <OpenOrdersTable />,
  },
  {
    title: 'SpotBotConfig selected symbols',
    source: 'ui/bots/spot-bot/SpotBotConfig.tsx',
    coverage: 'Default Table filters/column controls with custom symbol, money, enum, and enabled columns.',
    render: <CandidatePreviewTable />,
  },
  {
    title: 'BotsOverview inventory',
    source: 'ui/screens/BotsOverviewScreen.tsx',
    coverage: 'External bulk toolbar, manual selection action column, switches in cells, status badges, active row class, and action buttons.',
    render: <ManualSelectionInventoryTable />,
  },
  {
    title: 'BotsOverview import jobs',
    source: 'ui/screens/BotsOverviewScreen.tsx',
    coverage: 'Status badge column, wrapped message, hidden ID column, and modal-sized table.',
    render: <StatusImportJobsTable />,
  },
  {
    title: 'Backtesting replay trades',
    source: 'ui/screens/BacktestingScreen.tsx',
    coverage: 'Replay ledger with date, symbol, result, and wrapped reason columns.',
    render: <LedgerTable title="Replay trades" tableId="storybook-backtest-replay" />,
  },
  {
    title: 'ChartDetail recent trades',
    source: 'ui/screens/ChartDetailScreen.tsx',
    coverage: 'Recent event prints with datetime, numeric price, quantity, and side coloring.',
    render: <LedgerTable title="Recent prints" tableId="storybook-chart-detail-trades" />,
  },
  {
    title: 'OrderBookCard',
    source: 'ui/components/charts/OrderBookCard.tsx',
    coverage: 'Bid/ask/mid compact table with hideColumnControls and colored side cells.',
    render: <OpenOrdersTable />,
  },
  {
    title: 'TechnicalIndicatorsSection indicators',
    source: 'ui/components/charts/TechnicalIndicatorsSection.tsx',
    coverage: 'Small embedded indicator table with custom tone cells and no controls.',
    render: <CompactPositionsTable reserved />,
  },
  {
    title: 'TechnicalIndicatorsSection moving averages',
    source: 'ui/components/charts/TechnicalIndicatorsSection.tsx',
    coverage: 'Stacked simple/exponential cells plus renderDetailValue behavior.',
    render: <LedgerTable title="Moving averages" tableId="storybook-moving-averages" />,
  },
  {
    title: 'TradeHistoryScreen full ledger',
    source: 'ui/screens/TradeHistoryScreen.tsx',
    coverage: 'Wide ledger with many hidden columns, column controls, and explicit nested expansion.',
    render: <LedgerTable title="Full ledger" tableId="storybook-trade-history-full" wide expanded />,
  },
  {
    title: 'TradeHistoryTable legacy',
    source: 'ui/components/trades/TradeHistoryTable.tsx',
    coverage: 'Legacy action column with inspect button and custom result cell.',
    render: <LedgerTable title="Legacy trade table" tableId="storybook-legacy-trades" />,
  },
  {
    title: 'PatternsScreen patterns table',
    source: 'ui/screens/PatternsScreen.tsx',
    coverage: 'Very wide pattern/outcome table with hidden detail columns and nested lifecycle expansion.',
    render: <RuntimeWideTable title="Pattern outcomes" tableId="storybook-patterns" ids={['wide']} expanded />,
  },
  {
    title: 'WalletsScreen transaction history',
    source: 'ui/screens/WalletsScreen.tsx',
    coverage: 'External date/filter toolbar shape, wrapped held assets, and context cells.',
    render: <WalletHistoryTable />,
  },
  {
    title: 'WalletsScreen held assets',
    source: 'ui/screens/WalletsScreen.tsx',
    coverage: 'Asset balance ranking table with money and amount formatting.',
    render: <AssetBalanceTable />,
  },
  {
    title: 'WalletsScreen bot holdings',
    source: 'ui/screens/WalletsScreen.tsx',
    coverage: 'Allocation, current value, PnL tone, and wrapped holding summary.',
    render: <LedgerTable title="Per-worker holdings" tableId="storybook-worker-holdings" />,
  },
  {
    title: 'BotTable legacy inventory',
    source: 'ui/components/bots/BotTable.tsx',
    coverage: 'Clickable name cell, status badge, rowClassName highlight, and multiple action buttons.',
    render: <ManualSelectionInventoryTable />,
  },
  {
    title: 'BotConfiguration preview candidates',
    source: 'ui/screens/config/BotConfigurationScreen.tsx',
    coverage: 'Preview rows with decision badge, wrapped reason, scopeId, and empty message.',
    render: <CandidatePreviewTable />,
  },
  {
    title: 'BotConfiguration preview signals',
    source: 'ui/screens/config/BotConfigurationScreen.tsx',
    coverage: 'Signal preview with status badge, wrapped explanation, and risk blockers.',
    render: <CandidatePreviewTable signals />,
  },
  {
    title: 'RuntimeViews CandidateTable',
    source: 'ui/components/bots/RuntimeViews.tsx',
    coverage: 'Runtime candidate scoring table with hidden reason columns and decision badges.',
    render: <RuntimeWideTable title="Runtime candidates" tableId="storybook-runtime-candidates" ids={['wide']} />,
  },
  {
    title: 'RuntimeViews SignalList',
    source: 'ui/components/bots/RuntimeViews.tsx',
    coverage: 'Signals with hidden blocker column and status badge.',
    render: <CandidatePreviewTable signals />,
  },
  {
    title: 'RuntimeViews PositionsTable',
    source: 'ui/components/bots/RuntimeViews.tsx',
    coverage: 'Open positions with management/reconciliation hidden columns and PnL coloring.',
    render: <RuntimeWideTable title="Runtime positions" tableId="storybook-runtime-positions" ids={['wide']} />,
  },
  {
    title: 'RuntimeViews OrdersList',
    source: 'ui/components/bots/RuntimeViews.tsx',
    coverage: 'Recent orders with hidden reason column and status badge.',
    render: <LedgerTable title="Runtime orders" tableId="storybook-runtime-orders" />,
  },
  {
    title: 'RuntimeViews TradesTable',
    source: 'ui/components/bots/RuntimeViews.tsx',
    coverage: 'Recent trades with hidden run/config/reason columns and explicit expansion with action.',
    render: <LedgerTable title="Runtime recent trades" tableId="storybook-runtime-trades" wide expanded />,
  },
  {
    title: 'SymbolAnalysisTable custom grid parity',
    source: 'ui/components/charts/SymbolAnalysisTable.tsx',
    coverage: 'Previous custom grid behavior: external search, custom filter/sort/export toolbar, manual selection, wide rows, and virtualization.',
    render: <SymbolUniverseTable />,
  },
];

export const BotTableUsageParity: Story = {
  render: function BotTableUsageParityStory() {
    return (
      <StoryShell
        title="Table usage parity"
        description="Every table shape currently used by the bot UI is represented with generic dummy data. Source names are audit labels only; package components and shipped CSS remain domain-neutral."
      >
        <Section title={`${tableUsageCases.length} replicated table shapes`} description="Each example exercises the same Table feature mix as the matching bot-side usage.">
          <div className="grid gap-5">
            {tableUsageCases.map((item) => (
              <UsageCard key={item.title} item={item} />
            ))}
          </div>
        </Section>
      </StoryShell>
    );
  },
};
