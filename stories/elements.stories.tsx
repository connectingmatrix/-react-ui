import type { Meta, StoryObj } from '@storybook/react';
import React, { useMemo, useState } from 'react';
import { Badge, Button, Logger, NotificationViewport, Table, type LoggerEntry, type NotificationItem, type TableColumn } from '../src/index';
import { CaseGrid, Section, StoryShell, formatDateTime, formatMoney, signedTone, type StoryCase } from './story-helpers';
import { useStoryArgsUpdater } from './story-args';
import { docsSource, loggerSource, notificationSource, tableSource } from './story-source';

const meta: Meta = {
  title: 'React UI/Elements',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const accentOptions = ['default', 'teal', 'warning', 'danger', 'neutral', 'tailadmin', 'light-blue', 'light-success', 'light-warning', 'light-danger', 'light-neutral'];

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

interface TableElementArgs {
  tableId: string;
  scopeId: string;
  persistence: boolean;
  controlledState: boolean;
  defaultVisibleColumns: string;
  columnOrder: string;
  sortColumn: string;
  sortDirection: 'none' | 'asc' | 'desc';
  statusFilter: string;
  searchable: boolean;
  globalSearch: string;
  searchPlaceholder: string;
  customGlobalSearch: boolean;
  customSortRows: boolean;
  hideColumnControls: boolean;
  allowColumnResize: boolean;
  allowColumnReorder: boolean;
  loading: boolean;
  loadingContent: string;
  selectable: boolean;
  controlledSelection: boolean;
  selectionMode: 'single' | 'multi';
  selectedKeys: string;
  selectAllScope: 'all' | 'filtered';
  onStateChange: boolean;
  onSelectionChange: boolean;
  onExpandedChange: boolean;
  onRowExpand: boolean;
  disableBlockedRows: boolean;
  expanded: boolean;
  expandedRowIds: string;
  showExpandedContent: boolean;
  toolbarContent: boolean;
  renderToolbar: boolean;
  headerFilters: boolean;
  renderHeaderFilters: boolean;
  renderSelectionActions: boolean;
  virtualizationEnabled: boolean;
  virtualizationRowHeight: number;
  virtualizationOverscan: number;
  virtualizationMaxHeight: number;
  emptyMessage: string;
  accentKey: string;
  customStyle: boolean;
  className: string;
  containerClassName: string;
  tableClassName: string;
  rowClassName: string;
  detailRowClassName: string;
  rootClassName: string;
  toolbarClassName: string;
  headerFiltersClassName: string;
  menuClassName: string;
  classNamesContainerClassName: string;
  classNamesTableClassName: string;
  classNamesRowClassName: string;
  classNamesDetailRowClassName: string;
  headerRowClassName: string;
  cellClassName: string;
}

export const TableElement: StoryObj<TableElementArgs> = {
  args: {
    tableId: 'elements-controlled-table',
    scopeId: '',
    persistence: false,
    controlledState: false,
    defaultVisibleColumns: 'name,owner,status,score,active',
    columnOrder: 'name,owner,status,score,active,updatedAt,note',
    sortColumn: 'none',
    sortDirection: 'none',
    statusFilter: '',
    searchable: true,
    globalSearch: '',
    searchPlaceholder: 'Search records',
    customGlobalSearch: false,
    customSortRows: false,
    hideColumnControls: false,
    allowColumnResize: true,
    allowColumnReorder: true,
    loading: false,
    loadingContent: 'Loading records...',
    selectable: true,
    controlledSelection: false,
    selectionMode: 'multi',
    selectedKeys: 'row-2',
    selectAllScope: 'filtered',
    onStateChange: true,
    onSelectionChange: true,
    onExpandedChange: true,
    onRowExpand: true,
    disableBlockedRows: false,
    expanded: true,
    expandedRowIds: 'row-1',
    showExpandedContent: true,
    toolbarContent: false,
    renderToolbar: false,
    headerFilters: false,
    renderHeaderFilters: false,
    renderSelectionActions: true,
    virtualizationEnabled: false,
    virtualizationRowHeight: 56,
    virtualizationOverscan: 4,
    virtualizationMaxHeight: 420,
    emptyMessage: 'No rows found.',
    accentKey: 'default',
    customStyle: false,
    className: '',
    containerClassName: '',
    tableClassName: '',
    rowClassName: '',
    detailRowClassName: '',
    rootClassName: '',
    toolbarClassName: '',
    headerFiltersClassName: '',
    menuClassName: '',
    classNamesContainerClassName: '',
    classNamesTableClassName: '',
    classNamesRowClassName: '',
    classNamesDetailRowClassName: '',
    headerRowClassName: '',
    cellClassName: '',
  },
  argTypes: {
    tableId: { control: 'text', table: { category: 'Table identity' } },
    scopeId: { control: 'text', table: { category: 'Table identity' } },
    persistence: { control: 'boolean', table: { category: 'Table state' } },
    controlledState: { name: 'state/onStateChange', control: 'boolean', table: { category: 'Table state' } },
    defaultVisibleColumns: { name: 'defaultState.visibleColumnIds', control: 'text', table: { category: 'Table state' } },
    columnOrder: { name: 'state.columnOrder', control: 'text', table: { category: 'Table state' } },
    sortColumn: {
      name: 'state.sort.columnId',
      control: 'select',
      options: ['none', 'name', 'owner', 'status', 'score', 'active', 'updatedAt'],
      table: { category: 'Table state' },
    },
    sortDirection: { name: 'state.sort.direction', control: 'select', options: ['none', 'asc', 'desc'], table: { category: 'Table state' } },
    statusFilter: { name: 'state.filters.status', control: 'select', options: ['', 'Ready', 'Blocked', 'Review'], table: { category: 'Table state' } },
    searchable: { control: 'boolean', table: { category: 'Table' } },
    globalSearch: { name: 'state.globalSearch', control: 'text', table: { category: 'Table state' } },
    searchPlaceholder: { control: 'text', table: { category: 'Table' } },
    customGlobalSearch: { name: 'globalSearchFn', control: 'boolean', table: { category: 'Table callbacks' } },
    customSortRows: { name: 'sortRows', control: 'boolean', table: { category: 'Table callbacks' } },
    hideColumnControls: { control: 'boolean', table: { category: 'Table' } },
    allowColumnResize: { control: 'boolean', table: { category: 'Table columns' } },
    allowColumnReorder: { control: 'boolean', table: { category: 'Table columns' } },
    loading: { control: 'boolean', table: { category: 'Table' } },
    loadingContent: { control: 'text', table: { category: 'Table slots' } },
    selectable: { name: 'selection', control: 'boolean', table: { category: 'Table' } },
    controlledSelection: { name: 'selection.selectedKeys', control: 'boolean', table: { category: 'Table selection' } },
    selectionMode: { name: 'selection.mode', control: 'select', options: ['single', 'multi'], table: { category: 'Table selection' } },
    selectedKeys: { name: 'selection.defaultSelectedKeys', control: 'text', table: { category: 'Table selection' } },
    selectAllScope: { name: 'selection.selectAllScope', control: 'select', options: ['all', 'filtered'], table: { category: 'Table selection' } },
    onStateChange: { control: 'boolean', table: { category: 'Table callbacks' } },
    onSelectionChange: { name: 'selection.onChange', control: 'boolean', table: { category: 'Table callbacks' } },
    onExpandedChange: { control: 'boolean', table: { category: 'Table callbacks' } },
    onRowExpand: { control: 'boolean', table: { category: 'Table callbacks' } },
    disableBlockedRows: { name: 'selection.isRowDisabled', control: 'boolean', table: { category: 'Table selection' } },
    expanded: { name: 'defaultExpandedRowIds', control: 'boolean', table: { category: 'Table' } },
    expandedRowIds: { control: 'text', table: { category: 'Table expansion' } },
    showExpandedContent: { name: 'renderExpandedContent', control: 'boolean', table: { category: 'Table expansion' } },
    toolbarContent: { control: 'boolean', table: { category: 'Table slots' } },
    renderToolbar: { control: 'boolean', table: { category: 'Table slots' } },
    headerFilters: { control: 'boolean', table: { category: 'Table filters' } },
    renderHeaderFilters: { control: 'boolean', table: { category: 'Table filters' } },
    renderSelectionActions: { control: 'boolean', table: { category: 'Table selection' } },
    virtualizationEnabled: { name: 'virtualization.enabled', control: 'boolean', table: { category: 'Table virtualization' } },
    virtualizationRowHeight: { name: 'virtualization.rowHeight', control: 'number', table: { category: 'Table virtualization' } },
    virtualizationOverscan: { name: 'virtualization.overscan', control: 'number', table: { category: 'Table virtualization' } },
    virtualizationMaxHeight: { name: 'virtualization.maxHeight', control: 'number', table: { category: 'Table virtualization' } },
    emptyMessage: { control: 'text', table: { category: 'Table' } },
    accentKey: { control: 'select', options: accentOptions, table: { category: 'Table' } },
    customStyle: { name: 'style', control: 'boolean', table: { category: 'Table' } },
    className: { control: 'text', table: { category: 'Table classes' } },
    containerClassName: { control: 'text', table: { category: 'Table classes' } },
    tableClassName: { control: 'text', table: { category: 'Table classes' } },
    rowClassName: { control: 'text', table: { category: 'Table classes' } },
    detailRowClassName: { control: 'text', table: { category: 'Table classes' } },
    rootClassName: { name: 'classNames.root', control: 'text', table: { category: 'Table classNames' } },
    toolbarClassName: { name: 'classNames.toolbar', control: 'text', table: { category: 'Table classNames' } },
    headerFiltersClassName: { name: 'classNames.headerFilters', control: 'text', table: { category: 'Table classNames' } },
    menuClassName: { name: 'classNames.menu', control: 'text', table: { category: 'Table classNames' } },
    classNamesContainerClassName: { name: 'classNames.container', control: 'text', table: { category: 'Table classNames' } },
    classNamesTableClassName: { name: 'classNames.table', control: 'text', table: { category: 'Table classNames' } },
    classNamesRowClassName: { name: 'classNames.row', control: 'text', table: { category: 'Table classNames' } },
    classNamesDetailRowClassName: { name: 'classNames.detailRow', control: 'text', table: { category: 'Table classNames' } },
    headerRowClassName: { name: 'classNames.headerRow', control: 'text', table: { category: 'Table classNames' } },
    cellClassName: { name: 'classNames.cell', control: 'text', table: { category: 'Table classNames' } },
  },
  parameters: docsSource(tableSource, 'Exact Table usage code with search, selection, expansion, and action slots.'),
  render: function TableElementStory(args) {
    const updateArgs = useStoryArgsUpdater<TableElementArgs>();
    const selectedKeys = args.selectedKeys
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    const expandedIds = args.expandedRowIds
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    const defaultVisibleColumnIds = args.defaultVisibleColumns
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    const columnOrder = args.columnOrder
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    const controlledState = {
      globalSearch: args.globalSearch,
      ...(columnOrder.length ? { columnOrder } : {}),
      ...(args.sortColumn !== 'none' && args.sortDirection !== 'none' ? { sort: { columnId: args.sortColumn, direction: args.sortDirection } as const } : {}),
      ...(args.statusFilter ? { filters: { status: { values: [args.statusFilter] } } } : {}),
    };

    return (
      <StoryShell
        title="Table element"
        description="Table prop usage independent of any product domain. Bot-specific table shapes are mirrored in the dedicated table parity story."
      >
        <Section title="Controlled Table example" description="These controls map to Table props.">
          <Table
            rows={rows}
            columns={tableColumns}
            rowKey={(row) => row.id}
            tableId={args.tableId}
            scopeId={args.scopeId || undefined}
            persistence={args.persistence ? { namespace: 'storybook:table' } : false}
            state={args.controlledState ? controlledState : undefined}
            defaultState={
              !args.controlledState && (defaultVisibleColumnIds.length || columnOrder.length)
                ? { visibleColumnIds: defaultVisibleColumnIds, columnOrder, globalSearch: args.globalSearch }
                : undefined
            }
            onStateChange={
              args.onStateChange
                ? (state) =>
                    updateArgs({
                      globalSearch: state.globalSearch,
                      defaultVisibleColumns: state.visibleColumnIds.join(','),
                      columnOrder: state.columnOrder.join(','),
                      sortColumn: state.sort?.columnId ?? 'none',
                      sortDirection: state.sort?.direction ?? 'none',
                    })
                : undefined
            }
            searchable={args.searchable}
            searchPlaceholder={args.searchPlaceholder}
            globalSearchFn={args.customGlobalSearch ? (row, query) => `${row.name} ${row.owner}`.toLowerCase().includes(query.toLowerCase()) : undefined}
            sortRows={args.customSortRows ? (nextRows) => [...nextRows].sort((left, right) => right.score - left.score) : undefined}
            hideColumnControls={args.hideColumnControls}
            allowColumnResize={args.allowColumnResize}
            allowColumnReorder={args.allowColumnReorder}
            loading={args.loading}
            loadingContent={args.loadingContent}
            emptyMessage={args.emptyMessage}
            toolbarContent={args.toolbarContent ? <Badge tone="neutral">Toolbar slot</Badge> : undefined}
            renderToolbar={args.renderToolbar ? ({ visibleRows }) => <Badge>{visibleRows.length} visible</Badge> : undefined}
            headerFilters={args.headerFilters ? <Button size="sm">Header filters slot</Button> : undefined}
            renderHeaderFilters={
              args.renderHeaderFilters
                ? ({ setFilter, reset }) => (
                    <>
                      <Button size="sm" onClick={() => setFilter('status', { values: ['Ready'] })}>
                        Ready
                      </Button>
                      <Button size="sm" variant="ghost" onClick={reset}>
                        Reset
                      </Button>
                    </>
                  )
                : undefined
            }
            selection={
              args.selectable
                ? {
                    mode: args.selectionMode,
                    selectedKeys: args.controlledSelection ? selectedKeys : undefined,
                    defaultSelectedKeys: selectedKeys,
                    onChange: args.onSelectionChange ? (nextKeys) => updateArgs({ selectedKeys: nextKeys.join(',') }) : undefined,
                    selectAllScope: args.selectAllScope,
                    isRowDisabled: args.disableBlockedRows ? (row) => row.status === 'Blocked' : undefined,
                  }
                : undefined
            }
            renderSelectionActions={
              args.renderSelectionActions
                ? ({ selectedRows, clearSelection }) => (
                    <Button size="sm" variant="secondary" onClick={clearSelection}>
                      Clear {selectedRows.length}
                    </Button>
                  )
                : undefined
            }
            virtualization={
              args.virtualizationEnabled
                ? { enabled: true, rowHeight: args.virtualizationRowHeight, overscan: args.virtualizationOverscan, maxHeight: args.virtualizationMaxHeight }
                : undefined
            }
            defaultExpandedRowIds={args.expanded ? expandedIds : []}
            expandedRowIds={args.expanded ? expandedIds : undefined}
            onExpandedChange={args.onExpandedChange ? (rowIds) => updateArgs({ expandedRowIds: rowIds.join(',') }) : undefined}
            onRowExpand={args.onRowExpand ? (_row, expanded) => updateArgs({ expanded }) : undefined}
            renderExpandedContent={args.showExpandedContent ? (row) => <div className="text-sm text-[var(--rui-text-secondary)]">{row.note}</div> : undefined}
            rowClassName={args.rowClassName || undefined}
            detailRowClassName={args.detailRowClassName || undefined}
            containerClassName={args.containerClassName || undefined}
            tableClassName={args.tableClassName || undefined}
            accentKey={args.accentKey}
            style={args.customStyle ? ({ '--rui-radius-panel': '16px' } as React.CSSProperties) : undefined}
            className={args.className || undefined}
            classNames={{
              root: args.rootClassName || undefined,
              toolbar: args.toolbarClassName || undefined,
              headerFilters: args.headerFiltersClassName || undefined,
              menu: args.menuClassName || undefined,
              container: args.classNamesContainerClassName || undefined,
              table: args.classNamesTableClassName || undefined,
              row: args.classNamesRowClassName || undefined,
              detailRow: args.classNamesDetailRowClassName || undefined,
              headerRow: args.headerRowClassName || undefined,
              cell: args.cellClassName || undefined,
            }}
          />
        </Section>
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

interface LoggerElementArgs {
  title: string;
  description: string;
  subtitle: string;
  action: boolean;
  onClear: boolean;
  useLogsAlias: boolean;
  level: string;
  category: string;
  defaultLevel: string;
  defaultCategory: string;
  defaultSearch: string;
  showHeader: boolean;
  showToolbar: boolean;
  showLevelFilter: boolean;
  showCategoryFilter: boolean;
  searchPlaceholder: string;
  search: string;
  autoScroll: boolean;
  autoScrollDefault: boolean;
  trailing: boolean;
  heightClassName: string;
  emptyContent: string;
  customTimestamp: boolean;
  customMetadata: boolean;
  customPayload: boolean;
  customSearchText: boolean;
  onLevelChange: boolean;
  onCategoryChange: boolean;
  onSearchChange: boolean;
  onAutoScrollChange: boolean;
  onFiltersChange: boolean;
  accentKey: string;
  customStyle: boolean;
  className: string;
  toolbarClassName: string;
  viewportClassName: string;
  entryClassName: string;
  payloadClassName: string;
}

export const LoggerElement: StoryObj<LoggerElementArgs> = {
  args: {
    title: 'Log stream',
    description: 'Generic filtered event stream.',
    subtitle: '',
    action: false,
    onClear: false,
    useLogsAlias: false,
    level: 'ALL',
    category: 'ALL',
    defaultLevel: 'ALL',
    defaultCategory: 'ALL',
    defaultSearch: '',
    showHeader: true,
    showToolbar: true,
    showLevelFilter: true,
    showCategoryFilter: true,
    searchPlaceholder: 'Search logs',
    search: '',
    autoScroll: true,
    autoScrollDefault: true,
    trailing: true,
    heightClassName: 'max-h-[320px]',
    emptyContent: 'No log lines matched the current filters.',
    customTimestamp: false,
    customMetadata: false,
    customPayload: false,
    customSearchText: false,
    onLevelChange: true,
    onCategoryChange: true,
    onSearchChange: true,
    onAutoScrollChange: true,
    onFiltersChange: false,
    accentKey: 'default',
    customStyle: false,
    className: '',
    toolbarClassName: '',
    viewportClassName: '',
    entryClassName: '',
    payloadClassName: '',
  },
  argTypes: {
    title: { control: 'text', table: { category: 'Logger header' } },
    description: { control: 'text', table: { category: 'Logger header' } },
    subtitle: { control: 'text', table: { category: 'Logger header' } },
    action: { name: 'action', control: 'boolean', table: { category: 'Logger header' } },
    onClear: { control: 'boolean', table: { category: 'Logger actions' } },
    useLogsAlias: { name: 'logs', control: 'boolean', table: { category: 'Logger data' } },
    level: { control: 'select', options: ['ALL', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'SUCCESS'], table: { category: 'Logger controlled filters' } },
    category: { control: 'select', options: ['ALL', 'release', 'quality'], table: { category: 'Logger controlled filters' } },
    defaultLevel: { control: 'select', options: ['ALL', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'SUCCESS'], table: { category: 'Logger uncontrolled defaults' } },
    defaultCategory: { control: 'select', options: ['ALL', 'release', 'quality'], table: { category: 'Logger uncontrolled defaults' } },
    defaultSearch: { control: 'text', table: { category: 'Logger uncontrolled defaults' } },
    showHeader: { control: 'boolean', table: { category: 'Logger' } },
    showToolbar: { control: 'boolean', table: { category: 'Logger' } },
    showLevelFilter: { control: 'boolean', table: { category: 'Logger' } },
    showCategoryFilter: { control: 'boolean', table: { category: 'Logger' } },
    searchPlaceholder: { control: 'text', table: { category: 'Logger' } },
    search: { control: 'text', table: { category: 'Logger' } },
    autoScroll: { control: 'boolean', table: { category: 'Logger' } },
    autoScrollDefault: { control: 'boolean', table: { category: 'Logger uncontrolled defaults' } },
    trailing: { control: 'boolean', table: { category: 'Logger' } },
    heightClassName: { control: 'text', table: { category: 'Logger' } },
    emptyContent: { control: 'text', table: { category: 'Logger slots' } },
    customTimestamp: { name: 'formatTimestamp', control: 'boolean', table: { category: 'Logger render props' } },
    customMetadata: { name: 'renderMetadata', control: 'boolean', table: { category: 'Logger render props' } },
    customPayload: { name: 'renderPayload', control: 'boolean', table: { category: 'Logger render props' } },
    customSearchText: { name: 'getSearchText', control: 'boolean', table: { category: 'Logger render props' } },
    onLevelChange: { control: 'boolean', table: { category: 'Logger callbacks' } },
    onCategoryChange: { control: 'boolean', table: { category: 'Logger callbacks' } },
    onSearchChange: { control: 'boolean', table: { category: 'Logger callbacks' } },
    onAutoScrollChange: { control: 'boolean', table: { category: 'Logger callbacks' } },
    onFiltersChange: { control: 'boolean', table: { category: 'Logger callbacks' } },
    accentKey: { control: 'select', options: accentOptions, table: { category: 'Logger' } },
    customStyle: { name: 'style', control: 'boolean', table: { category: 'Logger' } },
    className: { control: 'text', table: { category: 'Logger classes' } },
    toolbarClassName: { name: 'classNames.toolbar', control: 'text', table: { category: 'Logger classes' } },
    viewportClassName: { name: 'classNames.viewport', control: 'text', table: { category: 'Logger classes' } },
    entryClassName: { name: 'classNames.entry', control: 'text', table: { category: 'Logger classes' } },
    payloadClassName: { name: 'classNames.payload', control: 'text', table: { category: 'Logger classes' } },
  },
  parameters: docsSource(loggerSource, 'Exact Logger usage code with typed entries and toolbar props.'),
  render: function LoggerElementStory(args) {
    const updateArgs = useStoryArgsUpdater<LoggerElementArgs>();

    return (
      <StoryShell title="Logger element" description="Filterable, expandable, generic log viewer.">
        <Section title="Controlled Logger example" description="These controls map to Logger props.">
          <Logger
            entries={args.useLogsAlias ? undefined : logEntries}
            logs={args.useLogsAlias ? logEntries : undefined}
            levels={[
              { label: 'All levels', value: 'ALL' },
              { label: 'Info', value: 'INFO' },
              { label: 'Warn', value: 'WARN' },
              { label: 'Error', value: 'ERROR' },
              { label: 'Success', value: 'SUCCESS' },
            ]}
            categories={[
              { label: 'All categories', value: 'ALL' },
              { label: 'Release', value: 'release' },
              { label: 'Quality', value: 'quality' },
            ]}
            title={args.title}
            description={args.description || undefined}
            subtitle={args.subtitle || undefined}
            action={args.action ? <Badge>Action slot</Badge> : undefined}
            onClear={args.onClear ? () => undefined : undefined}
            level={args.level}
            category={args.category}
            onLevelChange={args.onLevelChange ? (level) => updateArgs({ level }) : undefined}
            onCategoryChange={args.onCategoryChange ? (category) => updateArgs({ category }) : undefined}
            onSearchChange={args.onSearchChange ? (search) => updateArgs({ search }) : undefined}
            onAutoScrollChange={args.onAutoScrollChange ? (autoScroll) => updateArgs({ autoScroll }) : undefined}
            onFiltersChange={
              args.onFiltersChange
                ? (filters) => updateArgs({ level: filters.level, category: filters.category, search: filters.search, autoScroll: filters.autoScroll })
                : undefined
            }
            defaultLevel={args.defaultLevel}
            defaultCategory={args.defaultCategory}
            defaultSearch={args.defaultSearch}
            showHeader={args.showHeader}
            showToolbar={args.showToolbar}
            showLevelFilter={args.showLevelFilter}
            showCategoryFilter={args.showCategoryFilter}
            searchPlaceholder={args.searchPlaceholder}
            search={args.search}
            autoScroll={args.autoScroll}
            autoScrollDefault={args.autoScrollDefault}
            trailing={args.trailing}
            heightClassName={args.heightClassName}
            emptyContent={args.emptyContent}
            formatTimestamp={args.customTimestamp ? (entry) => <span>{formatDateTime(String(entry.createdAt))}</span> : undefined}
            renderMetadata={args.customMetadata ? (entry) => <Badge tone="neutral">{entry.source}</Badge> : undefined}
            renderPayload={args.customPayload ? (entry) => <pre>{JSON.stringify(entry.payload ?? {}, null, 2)}</pre> : undefined}
            getSearchText={args.customSearchText ? (entry) => `${entry.level} ${entry.category} ${entry.message}` : undefined}
            accentKey={args.accentKey}
            style={args.customStyle ? ({ '--rui-radius-panel': '16px' } as React.CSSProperties) : undefined}
            className={args.className || undefined}
            classNames={{
              toolbar: args.toolbarClassName || undefined,
              viewport: args.viewportClassName || undefined,
              entry: args.entryClassName || undefined,
              payload: args.payloadClassName || undefined,
            }}
          />
        </Section>
        <Section title="Logger prop cases" description="Default toolbar, controlled filters, compact mode, empty state, timestamp formatting, and clear action.">
          <CaseGrid cases={loggerCases} />
        </Section>
      </StoryShell>
    );
  },
};

interface NotificationElementArgs {
  placement: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  tone: 'accent' | 'success' | 'warning' | 'danger' | 'neutral' | 'info';
  title: string;
  message: string;
  timeout: number | null;
  actions: boolean;
  dismissible: boolean;
  accentKey: string;
  className: string;
  itemClassName: string;
  titleClassName: string;
  messageClassName: string;
  actionsClassName: string;
}

export const NotificationElement: StoryObj<NotificationElementArgs> = {
  args: {
    placement: 'top-right',
    tone: 'success',
    title: 'Saved',
    message: 'The component is controlled by the host.',
    timeout: null,
    actions: false,
    dismissible: true,
    accentKey: 'default',
    className: '',
    itemClassName: '',
    titleClassName: '',
    messageClassName: '',
    actionsClassName: '',
  },
  argTypes: {
    placement: { control: 'select', options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'], table: { category: 'NotificationViewport' } },
    tone: { control: 'select', options: ['accent', 'success', 'warning', 'danger', 'neutral', 'info'], table: { category: 'NotificationItem' } },
    title: { control: 'text', table: { category: 'NotificationItem' } },
    message: { control: 'text', table: { category: 'NotificationItem' } },
    timeout: { control: 'number', table: { category: 'NotificationItem' } },
    actions: { name: 'NotificationItem.actions', control: 'boolean', table: { category: 'NotificationItem' } },
    dismissible: { name: 'onDismiss', control: 'boolean', table: { category: 'NotificationViewport' } },
    accentKey: { control: 'select', options: accentOptions, table: { category: 'NotificationViewport' } },
    className: { control: 'text', table: { category: 'NotificationViewport classes' } },
    itemClassName: { control: 'text', table: { category: 'NotificationViewport classes' } },
    titleClassName: { control: 'text', table: { category: 'NotificationViewport classes' } },
    messageClassName: { control: 'text', table: { category: 'NotificationViewport classes' } },
    actionsClassName: { control: 'text', table: { category: 'NotificationViewport classes' } },
  },
  parameters: docsSource(notificationSource, 'Exact NotificationViewport usage code with typed items and dismiss callback.'),
  render: function NotificationElementStory(args) {
    return (
      <StoryShell title="NotificationViewport element" description="Controlled toast viewport with tones, timeout, actions, placements, and dismiss behavior.">
        <Section title="Controlled NotificationViewport example" description="These controls map to NotificationViewport and NotificationItem props.">
          <NotificationViewport
            placement={args.placement}
            items={[
              {
                id: 'controlled-note',
                tone: args.tone,
                title: args.title,
                message: args.message,
                timeout: args.timeout,
                actions: args.actions ? <Button size="sm">Open</Button> : undefined,
              },
            ]}
            onDismiss={args.dismissible ? () => undefined : undefined}
            accentKey={args.accentKey}
            className={args.className || undefined}
            itemClassName={args.itemClassName || undefined}
            titleClassName={args.titleClassName || undefined}
            messageClassName={args.messageClassName || undefined}
            actionsClassName={args.actionsClassName || undefined}
          />
        </Section>
        <Section title="Notification prop cases" description="Use the controls below; notifications render in fixed viewport positions.">
          <CaseGrid cases={notificationCases} />
        </Section>
      </StoryShell>
    );
  },
};
