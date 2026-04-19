import type { Meta, StoryObj } from '@storybook/react';
import React, { useMemo, useState } from 'react';
import { Badge, Button, Logger, NotificationViewport, Table, type LoggerEntry, type NotificationItem, type TableColumn } from '../src/index';
import '../src/styles.css';
import { CaseGrid, Section, StoryShell, formatDateTime, formatMoney, signedTone, type StoryCase } from './story-helpers';

const meta: Meta = {
  title: 'React UI/Elements',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

interface ElementRow {
  id: string;
  name: string;
  owner: string;
  status: 'Ready' | 'Blocked' | 'Review';
  score: number;
  active: boolean;
  updatedAt: string;
  note: string;
}

const rows: ElementRow[] = [
  { id: 'row-1', name: 'Account overview', owner: 'Mira Chen', status: 'Ready', score: 92, active: true, updatedAt: '2026-04-18T12:20:00Z', note: 'Ready for release.' },
  { id: 'row-2', name: 'Permission review', owner: 'Omar Malik', status: 'Blocked', score: 64, active: false, updatedAt: '2026-04-17T08:10:00Z', note: 'Waiting on legal review.' },
  { id: 'row-3', name: 'Taxonomy cleanup', owner: 'Eli Stone', status: 'Review', score: 78, active: true, updatedAt: '2026-04-16T19:45:00Z', note: 'Needs final editorial check.' },
  { id: 'row-4', name: 'Research hub', owner: 'Ari Lane', status: 'Ready', score: 88, active: true, updatedAt: '2026-04-15T10:05:00Z', note: 'Includes approved summary.' },
];

const tableColumns: TableColumn<ElementRow>[] = [
  { id: 'name', label: 'Name', kind: 'text', width: 210, renderCell: (row) => <span className="font-semibold text-white">{row.name}</span> },
  { id: 'owner', label: 'Owner', kind: 'text', width: 150 },
  {
    id: 'status',
    label: 'Status',
    kind: 'enum',
    width: 130,
    getEnumOptions: () => ['Ready', 'Blocked', 'Review'].map((value) => ({ label: value, value })),
    renderCell: (row) => <Badge tone={row.status === 'Ready' ? 'success' : row.status === 'Blocked' ? 'danger' : 'warning'}>{row.status}</Badge>,
    renderFilter: ({ value, setValue, clear }) => {
      const selected = Array.isArray((value as { values?: string[] })?.values) ? (value as { values: string[] }).values : [];
      return (
        <div className="flex flex-wrap gap-2">
          {['Ready', 'Blocked', 'Review'].map((status) => (
            <Button key={status} size="sm" variant={selected.includes(status) ? 'secondary' : 'ghost'} onClick={() => setValue({ values: [status] })}>
              {status}
            </Button>
          ))}
          <Button size="sm" variant="ghost" onClick={clear}>
            Clear
          </Button>
        </div>
      );
    },
  },
  { id: 'score', label: 'Score', kind: 'number', width: 110, align: 'right' },
  { id: 'active', label: 'Active', kind: 'boolean', width: 110, getValue: (row) => row.active, renderCell: (row) => (row.active ? 'Yes' : 'No') },
  { id: 'updatedAt', label: 'Updated', kind: 'datetime', width: 170, visibleByDefault: false },
  { id: 'note', label: 'Note', kind: 'text', width: 280, wrap: true, visibleByDefault: false },
];

const logEntries: LoggerEntry[] = [
  {
    id: 'entry-1',
    level: 'INFO',
    category: 'release',
    source: 'preview',
    message: 'Preview build started.',
    payload: { build: '2026.04.19', target: 'static' },
    createdAt: '2026-04-19T09:30:00Z',
  },
  {
    id: 'entry-2',
    level: 'WARN',
    category: 'quality',
    source: 'checks',
    message: 'A review item needs an owner.',
    metadata: { owner: 'unassigned' },
    createdAt: '2026-04-19T09:36:00Z',
  },
  {
    id: 'entry-3',
    level: 'SUCCESS',
    category: 'release',
    source: 'pipeline',
    message: 'Static preview uploaded.',
    payload: { durationMs: 18420 },
    createdAt: '2026-04-19T09:42:00Z',
  },
  {
    id: 'entry-4',
    level: 'ERROR',
    category: 'quality',
    source: 'checks',
    message: 'Regression check failed.',
    payload: { route: '/reports', retryable: true },
    createdAt: '2026-04-19T09:51:00Z',
  },
];

function ControlledLogger() {
  const [search, setSearch] = useState('preview');
  const categories = useMemo(
    () => [
      { label: 'All categories', value: 'ALL' },
      { label: 'Release', value: 'release' },
      { label: 'Quality', value: 'quality' },
    ],
    [],
  );
  return <Logger entries={logEntries} categories={categories} search={search} onSearchChange={setSearch} heightClassName="max-h-[320px]" />;
}

function NotificationDemo() {
  const [items, setItems] = useState<NotificationItem[]>([{ id: 'saved', tone: 'success', title: 'Saved', message: 'The component is controlled by the host.', timeout: null }]);
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        size="sm"
        onClick={() =>
          setItems((current) => [
            ...current,
            {
              id: `note-${current.length + 1}`,
              tone: current.length % 2 ? 'warning' : 'accent',
              title: 'Queued update',
              message: 'Dummy notification added from Storybook.',
              timeout: null,
            },
          ])
        }
      >
        Add notification
      </Button>
      <Button size="sm" variant="ghost" onClick={() => setItems([])}>
        Clear
      </Button>
      <NotificationViewport items={items} placement="bottom-right" onDismiss={(id) => setItems((current) => current.filter((item) => item.id !== id))} />
    </div>
  );
}

const tableCases: StoryCase[] = [
  {
    title: 'Table basic',
    description: 'Rows, columns, rowKey, and built-in value access.',
    props: [
      { name: 'rows', value: 'ElementRow[]' },
      { name: 'columns', value: 'TableColumn<ElementRow>[]' },
      { name: 'rowKey', value: '(row) => row.id' },
    ],
    render: <Table rows={rows} columns={tableColumns.slice(0, 4)} rowKey={(row) => row.id} tableId="elements-basic-table" />,
  },
  {
    title: 'Table search',
    description: 'Global search field in the toolbar.',
    props: [
      { name: 'searchable', value: 'true' },
      { name: 'searchPlaceholder', value: '"Search records"' },
    ],
    render: <Table rows={rows} columns={tableColumns} rowKey={(row) => row.id} tableId="elements-search-table" searchable searchPlaceholder="Search records" />,
  },
  {
    title: 'Table column controls',
    description: 'Column selector and Reset table controls are enabled by default.',
    props: [
      { name: 'hideColumnControls', value: 'false' },
      { name: 'visibleByDefault', value: 'false on secondary columns' },
    ],
    render: <Table rows={rows} columns={tableColumns} rowKey={(row) => row.id} tableId="elements-column-controls-table" />,
  },
  {
    title: 'Table filters',
    description: 'Built-in filter menu with a custom filter renderer.',
    props: [
      { name: 'filterable', value: 'true by default' },
      { name: 'renderFilter', value: 'custom status buttons' },
    ],
    render: <Table rows={rows} columns={tableColumns} rowKey={(row) => row.id} tableId="elements-filter-table" />,
  },
  {
    title: 'Table header filters',
    description: 'Host-rendered quick filters above the table.',
    props: [{ name: 'renderHeaderFilters', value: '({ setGlobalSearch, setFilter, reset }) => ReactNode' }],
    render: (
      <Table
        rows={rows}
        columns={tableColumns}
        rowKey={(row) => row.id}
        tableId="elements-header-filter-table"
        renderHeaderFilters={({ setGlobalSearch, setFilter, reset }) => (
          <>
            <Button size="sm" onClick={() => setFilter('status', { values: ['Ready'] })}>
              Ready
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setGlobalSearch('review')}>
              Search review
            </Button>
            <Button size="sm" variant="ghost" onClick={reset}>
              Reset
            </Button>
          </>
        )}
      />
    ),
  },
  {
    title: 'Table selection',
    description: 'Built-in multi-select with selection action slot.',
    props: [
      { name: 'selection', value: '{ mode: "multi" }' },
      { name: 'renderSelectionActions', value: '({ selectedRows, clearSelection }) => ReactNode' },
    ],
    render: (
      <Table
        rows={rows}
        columns={tableColumns.slice(0, 4)}
        rowKey={(row) => row.id}
        tableId="elements-selection-table"
        selection={{ mode: 'multi', defaultSelectedKeys: ['row-2'] }}
        renderSelectionActions={({ selectedRows, clearSelection }) => (
          <Button size="sm" variant="secondary" onClick={clearSelection}>
            Clear {selectedRows.length}
          </Button>
        )}
      />
    ),
  },
  {
    title: 'Table row expansion',
    description: 'Expanded rows render arbitrary React content.',
    props: [{ name: 'renderExpandedContent', value: '(row) => ReactNode' }],
    render: (
      <Table
        rows={rows}
        columns={tableColumns.slice(0, 4)}
        rowKey={(row) => row.id}
        tableId="elements-expanded-table"
        defaultExpandedRowIds={['row-1']}
        renderExpandedContent={(row) => <div className="text-sm text-[var(--rui-text-secondary)]">{row.note}</div>}
      />
    ),
  },
  {
    title: 'Table nested content',
    description: 'Expanded row with a nested table.',
    props: [{ name: 'renderExpandedContent', value: 'nested <Table />' }],
    render: (
      <Table
        rows={rows.slice(0, 2)}
        columns={tableColumns.slice(0, 4)}
        rowKey={(row) => row.id}
        tableId="elements-nested-table"
        defaultExpandedRowIds={['row-1']}
        renderExpandedContent={(row) => (
          <Table
            rows={[
              { id: `${row.id}-a`, label: 'Planning', amount: 1200 },
              { id: `${row.id}-b`, label: 'Review', amount: -320 },
            ]}
            columns={[
              { id: 'label', label: 'Line item', kind: 'text', width: 160 },
              {
                id: 'amount',
                label: 'Amount',
                kind: 'number',
                width: 120,
                renderCell: (line) => <span className={signedTone(line.amount)}>{formatMoney(line.amount)}</span>,
              },
            ]}
            rowKey={(line) => line.id}
            hideColumnControls
          />
        )}
      />
    ),
  },
  {
    title: 'Table loading',
    description: 'Loading content slot.',
    props: [
      { name: 'loading', value: 'true' },
      { name: 'loadingContent', value: '"Loading records..."' },
    ],
    render: <Table loading loadingContent="Loading records..." rows={[]} columns={tableColumns} rowKey={(row) => row.id} tableId="elements-loading-table" />,
  },
  {
    title: 'Table empty',
    description: 'Empty message slot.',
    props: [{ name: 'emptyMessage', value: '"No records found."' }],
    render: <Table rows={[]} columns={tableColumns} rowKey={(row) => row.id} tableId="elements-empty-table" emptyMessage="No records found." />,
  },
  {
    title: 'Table custom sort',
    description: 'Column compare function for custom ordering.',
    props: [{ name: 'column.compare', value: '(left, right, direction) => number' }],
    render: (
      <Table
        rows={rows}
        columns={[
          tableColumns[0],
          {
            ...tableColumns[2],
            compare: (left, right, direction) => {
              const rank = { Ready: 3, Review: 2, Blocked: 1 };
              const result = rank[left.status] - rank[right.status];
              return direction === 'asc' ? result : result * -1;
            },
          },
          tableColumns[3],
        ]}
        rowKey={(row) => row.id}
        tableId="elements-custom-sort-table"
      />
    ),
  },
  {
    title: 'Table toolbar',
    description: 'Toolbar content and custom renderToolbar usage.',
    props: [
      { name: 'toolbarContent', value: '<Badge />' },
      { name: 'renderToolbar', value: '({ visibleRows }) => ReactNode' },
    ],
    render: (
      <Table
        rows={rows}
        columns={tableColumns.slice(0, 4)}
        rowKey={(row) => row.id}
        tableId="elements-toolbar-table"
        toolbarContent={<Badge>workspace</Badge>}
        renderToolbar={({ visibleRows }) => <Badge tone="neutral">{visibleRows.length} visible</Badge>}
      />
    ),
  },
];

const loggerCases: StoryCase[] = [
  {
    title: 'Logger default',
    description: 'Header, toolbar, level filter, category filter, search, entries, and payload expansion.',
    props: [{ name: 'entries', value: 'LoggerEntry[]' }],
    render: <Logger entries={logEntries} heightClassName="max-h-[320px]" />,
  },
  {
    title: 'Logger controlled search',
    description: 'Search state owned by the consuming app.',
    props: [
      { name: 'search', value: 'search' },
      { name: 'onSearchChange', value: 'setSearch' },
    ],
    render: <ControlledLogger />,
  },
  {
    title: 'Logger hidden toolbar',
    description: 'Compact embedded log stream.',
    props: [
      { name: 'showHeader', value: 'false' },
      { name: 'showToolbar', value: 'false' },
    ],
    render: <Logger entries={logEntries} showHeader={false} showToolbar={false} heightClassName="max-h-[260px]" />,
  },
  {
    title: 'Logger empty',
    description: 'Custom empty content.',
    props: [{ name: 'emptyContent', value: '"No matching events."' }],
    render: <Logger entries={[]} emptyContent="No matching events." />,
  },
  {
    title: 'Logger custom timestamp',
    description: 'Custom timestamp formatter.',
    props: [{ name: 'formatTimestamp', value: '(entry) => ReactNode' }],
    render: <Logger entries={logEntries.slice(0, 2)} formatTimestamp={(entry) => <span>{formatDateTime(String(entry.createdAt))}</span>} />,
  },
  {
    title: 'Logger clear action',
    description: 'Optional clear action button.',
    props: [{ name: 'onClear', value: '() => void' }],
    render: <Logger entries={logEntries} onClear={() => undefined} heightClassName="max-h-[260px]" />,
  },
];

const notificationCases: StoryCase[] = [
  {
    title: 'NotificationViewport controlled',
    description: 'Controlled items with dismiss callback.',
    props: [
      { name: 'items', value: 'NotificationItem[]' },
      { name: 'onDismiss', value: '(id) => void' },
    ],
    render: <NotificationDemo />,
  },
  {
    title: 'Notification actions',
    description: 'Notifications can render action controls.',
    props: [{ name: 'actions', value: '<Button />' }],
    render: (
      <NotificationViewport
        placement="top-right"
        items={[
          {
            id: 'action-note',
            tone: 'accent',
            title: 'Action available',
            message: 'This example includes an action slot.',
            timeout: null,
            actions: <Button size="sm">Open</Button>,
          },
        ]}
      />
    ),
  },
  {
    title: 'Notification timeout',
    description: 'Auto-dismiss timer is controlled by each item.',
    props: [{ name: 'timeout', value: '4200 | null' }],
    render: (
      <NotificationViewport
        placement="top-left"
        items={[{ id: 'timeout-note', title: 'Auto dismiss', message: 'This would dismiss when onDismiss is supplied.', timeout: 4200 }]}
      />
    ),
  },
];

export const TableElement: Story = {
  render: function TableElementStory() {
    return (
      <StoryShell
        title="Table element"
        description="Table prop usage independent of any product domain. Bot-specific table shapes are mirrored in the dedicated table parity story."
      >
        <Section
          title="Table prop cases"
          description="Search, filters, column controls, selection, expansion, nested content, loading, empty states, custom sort, and toolbar slots."
        >
          <CaseGrid cases={tableCases} />
        </Section>
      </StoryShell>
    );
  },
};

export const LoggerElement: Story = {
  render: function LoggerElementStory() {
    return (
      <StoryShell title="Logger element" description="Filterable, expandable, generic log viewer.">
        <Section title="Logger prop cases" description="Default toolbar, controlled filters, compact mode, empty state, timestamp formatting, and clear action.">
          <CaseGrid cases={loggerCases} />
        </Section>
      </StoryShell>
    );
  },
};

export const NotificationElement: Story = {
  render: function NotificationElementStory() {
    return (
      <StoryShell title="NotificationViewport element" description="Controlled toast viewport with tones, timeout, actions, placements, and dismiss behavior.">
        <Section title="Notification prop cases" description="Use the controls below; notifications render in fixed viewport positions.">
          <CaseGrid cases={notificationCases} />
        </Section>
      </StoryShell>
    );
  },
};
