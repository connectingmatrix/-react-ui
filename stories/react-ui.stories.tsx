import type { Meta, StoryObj } from '@storybook/react';
import React, { useMemo, useState } from 'react';
import {
  AccentProvider,
  Badge,
  Banner,
  Button,
  Card,
  ChipCard,
  DynamicPanel,
  GridLayout,
  Icon,
  Logger,
  NotificationViewport,
  Number as NumberField,
  NumberInput,
  Page,
  RadioCard,
  SelectBox,
  Sidebar,
  Switch,
  Table,
  Text,
  TextArea,
  Tooltip,
  ToggleCard,
  type AccentKey,
  type GridPanelState,
  type NotificationItem,
  type TableColumn,
} from '../src/index';

const meta: Meta = {
  title: 'React UI/System',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

interface AccentChoice {
  key: AccentKey;
  label: string;
  description: string;
}

interface ProjectTask {
  id: string;
  name: string;
  owner: string;
  state: 'Done' | 'In review' | 'Planned';
  estimate: number;
}

interface ProjectRow {
  id: string;
  name: string;
  team: string;
  owner: string;
  status: 'Active' | 'At risk' | 'Paused' | 'Complete';
  priority: 'Low' | 'Normal' | 'High' | 'Critical';
  progress: number;
  dueAt: string;
  tasks: ProjectTask[];
}

interface DirectoryRow {
  id: string;
  name: string;
  department: string;
  location: string;
  active: boolean;
  score: number;
}

const accents: AccentChoice[] = [
  { key: 'default', label: 'Default', description: 'Balanced dashboard cyan' },
  { key: 'teal', label: 'Teal', description: 'Success-oriented surfaces' },
  { key: 'warning', label: 'Warning', description: 'Review and caution flows' },
  { key: 'danger', label: 'Danger', description: 'Critical or destructive flows' },
  { key: 'neutral', label: 'Neutral', description: 'Low-emphasis admin views' },
  { key: 'tailadmin', label: 'TailAdmin', description: 'Light brand-blue admin surfaces' },
  { key: 'light-blue', label: 'Light Blue', description: 'Light informational surfaces' },
  { key: 'light-success', label: 'Light Success', description: 'Light positive surfaces' },
  { key: 'light-warning', label: 'Light Warning', description: 'Light caution surfaces' },
  { key: 'light-danger', label: 'Light Danger', description: 'Light destructive surfaces' },
  { key: 'light-neutral', label: 'Light Neutral', description: 'Light gray admin surfaces' },
];

const teamOptions = [
  { label: 'Design Systems', value: 'design', description: 'Reusable UI and accessibility' },
  { label: 'Platform', value: 'platform', description: 'Internal services and delivery' },
  { label: 'Support Ops', value: 'support', description: 'Customer response workflows' },
  { label: 'Research', value: 'research', description: 'Discovery, insights, and reports' },
];

const projectRows: ProjectRow[] = [
  {
    id: 'proj-1',
    name: 'Customer portal refresh',
    team: 'Design Systems',
    owner: 'Mira Chen',
    status: 'Active',
    priority: 'High',
    progress: 76,
    dueAt: '2026-05-04T15:00:00Z',
    tasks: [
      { id: 'proj-1-a', name: 'Audit legacy patterns', owner: 'Noah Kim', state: 'Done', estimate: 5 },
      { id: 'proj-1-b', name: 'Prototype account overview', owner: 'Mira Chen', state: 'In review', estimate: 8 },
      { id: 'proj-1-c', name: 'Write migration notes', owner: 'Iris Patel', state: 'Planned', estimate: 3 },
    ],
  },
  {
    id: 'proj-2',
    name: 'Permissions cleanup',
    team: 'Platform',
    owner: 'Omar Malik',
    status: 'At risk',
    priority: 'Critical',
    progress: 42,
    dueAt: '2026-04-28T10:30:00Z',
    tasks: [
      { id: 'proj-2-a', name: 'Map inherited roles', owner: 'Omar Malik', state: 'In review', estimate: 6 },
      { id: 'proj-2-b', name: 'Add review dashboard', owner: 'Lena Ortiz', state: 'Planned', estimate: 10 },
    ],
  },
  {
    id: 'proj-3',
    name: 'Knowledge base taxonomy',
    team: 'Support Ops',
    owner: 'Eli Stone',
    status: 'Paused',
    priority: 'Normal',
    progress: 28,
    dueAt: '2026-05-16T18:00:00Z',
    tasks: [
      { id: 'proj-3-a', name: 'Cluster top articles', owner: 'Eli Stone', state: 'Done', estimate: 4 },
      { id: 'proj-3-b', name: 'Review search synonyms', owner: 'Ari Lane', state: 'Planned', estimate: 6 },
    ],
  },
  {
    id: 'proj-4',
    name: 'Research readout hub',
    team: 'Research',
    owner: 'Ari Lane',
    status: 'Complete',
    priority: 'Low',
    progress: 100,
    dueAt: '2026-04-18T12:00:00Z',
    tasks: [
      { id: 'proj-4-a', name: 'Upload interview clips', owner: 'Ari Lane', state: 'Done', estimate: 7 },
      { id: 'proj-4-b', name: 'Publish executive summary', owner: 'Mira Chen', state: 'Done', estimate: 2 },
    ],
  },
];

const directoryRows: DirectoryRow[] = [
  { id: 'person-1', name: 'Mira Chen', department: 'Design', location: 'Toronto', active: true, score: 92 },
  { id: 'person-2', name: 'Omar Malik', department: 'Platform', location: 'Lahore', active: true, score: 86 },
  { id: 'person-3', name: 'Eli Stone', department: 'Support', location: 'Austin', active: false, score: 74 },
  { id: 'person-4', name: 'Ari Lane', department: 'Research', location: 'Berlin', active: true, score: 89 },
];

const taskColumns: TableColumn<ProjectTask>[] = [
  { id: 'name', label: 'Task', kind: 'text', width: 220, renderCell: (row) => <span className="font-medium text-white">{row.name}</span> },
  { id: 'owner', label: 'Owner', kind: 'text', width: 140 },
  { id: 'state', label: 'State', kind: 'enum', width: 120 },
  { id: 'estimate', label: 'Estimate', kind: 'number', width: 110, align: 'right', renderCell: (row) => `${row.estimate} pts` },
];

const priorityRank: Record<ProjectRow['priority'], number> = {
  Low: 1,
  Normal: 2,
  High: 3,
  Critical: 4,
};

const projectColumns: TableColumn<ProjectRow>[] = [
  {
    id: 'name',
    label: 'Project',
    kind: 'text',
    groupId: 'work',
    groupLabel: 'Work',
    width: 240,
    renderCell: (row) => (
      <div>
        <div className="font-semibold text-white">{row.name}</div>
        <div className="mt-1 text-xs text-[var(--rui-text-tertiary)]">{row.owner}</div>
      </div>
    ),
  },
  {
    id: 'team',
    label: 'Team',
    kind: 'enum',
    groupId: 'work',
    width: 160,
    getEnumOptions: () => ['Design Systems', 'Platform', 'Support Ops', 'Research'].map((value) => ({ label: value, value })),
  },
  {
    id: 'status',
    label: 'Status',
    kind: 'enum',
    groupId: 'health',
    groupLabel: 'Health',
    width: 140,
    getEnumOptions: () => ['Active', 'At risk', 'Paused', 'Complete'].map((value) => ({ label: value, value })),
    renderCell: (row) => (
      <Badge tone={row.status === 'At risk' ? 'warning' : row.status === 'Complete' ? 'success' : row.status === 'Paused' ? 'neutral' : 'accent'}>{row.status}</Badge>
    ),
    renderFilter: ({ value, setValue, clear }) => {
      const selected = Array.isArray((value as { values?: string[] })?.values) ? (value as { values: string[] }).values : [];
      return (
        <div className="flex flex-wrap gap-2">
          {['Active', 'At risk', 'Paused', 'Complete'].map((status) => (
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
  {
    id: 'priority',
    label: 'Priority',
    kind: 'enum',
    groupId: 'health',
    width: 130,
    compare: (left, right, direction) => {
      const result = priorityRank[left.priority] - priorityRank[right.priority];
      return direction === 'asc' ? result : result * -1;
    },
    filterFn: (row, value) => {
      const selected = Array.isArray((value as { values?: string[] })?.values) ? (value as { values: string[] }).values : [];
      return !selected.length || selected.includes(row.priority);
    },
    getEnumOptions: () => ['Low', 'Normal', 'High', 'Critical'].map((value) => ({ label: value, value })),
  },
  { id: 'progress', label: 'Progress', kind: 'number', groupId: 'health', width: 130, align: 'right', renderCell: (row) => `${row.progress}%` },
  { id: 'dueAt', label: 'Due date', kind: 'datetime', groupId: 'dates', groupLabel: 'Dates', width: 180, visibleByDefault: false },
];

const directoryColumns: TableColumn<DirectoryRow>[] = [
  { id: 'name', label: 'Name', kind: 'text', width: 170, renderCell: (row) => <span className="font-semibold text-white">{row.name}</span> },
  { id: 'department', label: 'Department', kind: 'enum', width: 140 },
  { id: 'location', label: 'Location', kind: 'text', width: 120 },
  { id: 'active', label: 'Active', kind: 'boolean', width: 100, renderCell: (row) => (row.active ? 'Yes' : 'No') },
  { id: 'score', label: 'Score', kind: 'number', width: 100, align: 'right' },
];

const logEntries = [
  {
    id: 'log-1',
    level: 'INFO',
    category: 'release',
    source: 'storybook',
    message: 'Release candidate generated for review.',
    payload: { version: '2026.04.19', artifacts: ['web', 'docs'] },
    createdAt: '2026-04-19T09:30:00Z',
  },
  {
    id: 'log-2',
    level: 'WARN',
    category: 'quality',
    source: 'checks',
    message: 'Two accessibility notes need owner review.',
    metadata: { owner: 'Design Systems' },
    createdAt: '2026-04-19T09:36:00Z',
  },
  {
    id: 'log-3',
    level: 'SUCCESS',
    category: 'release',
    source: 'pipeline',
    message: 'Static assets uploaded to preview.',
    payload: { durationMs: 18420, cache: 'warm' },
    createdAt: '2026-04-19T09:42:00Z',
  },
  {
    id: 'log-4',
    level: 'ERROR',
    category: 'quality',
    source: 'checks',
    message: 'Regression test failed on the reporting route.',
    payload: { route: '/reports', retryable: true },
    createdAt: '2026-04-19T09:51:00Z',
  },
];

function StoryPage({ title, description, actions, children }: { title: string; description: string; actions?: React.ReactNode; children: React.ReactNode }) {
  return (
    <Page title={title} description={description} actions={actions} contentClassName="space-y-5">
      {children}
    </Page>
  );
}

function AccentChoiceBar({ value, onChange }: { value: AccentKey; onChange: (value: AccentKey) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {accents.map((accent) => (
        <Button key={accent.key} size="sm" variant={accent.key === value ? 'secondary' : 'ghost'} onClick={() => onChange(accent.key)}>
          {accent.label}
        </Button>
      ))}
    </div>
  );
}

function AccentFrame({ accent, children }: { accent: AccentChoice; children: React.ReactNode }) {
  return (
    <AccentProvider accentKey={accent.key} className="h-full rounded-[var(--rui-radius-panel)] bg-[var(--rui-bg-app)] p-3">
      <Card className="h-full" contentClassName="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-[var(--rui-text-primary)]">{accent.label}</div>
            <div className="mt-1 text-xs text-[var(--rui-text-secondary)]">{accent.description}</div>
          </div>
          <span className="mt-1 h-3 w-3 rounded-full bg-[var(--rui-accent)] shadow-[0_0_0_4px_var(--rui-accent-muted)]" />
        </div>
        {children}
      </Card>
    </AccentProvider>
  );
}

function AccentMatrix({ children }: { children: (accent: AccentChoice) => React.ReactNode }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
      {accents.map((accent) => (
        <AccentFrame key={accent.key} accent={accent}>
          {children(accent)}
        </AccentFrame>
      ))}
    </div>
  );
}

function FieldAccentDemo({ accent }: { accent: AccentChoice }) {
  const [projectType, setProjectType] = useState<string | null>('Internal');
  const [teams, setTeams] = useState<string[]>(['design']);

  return (
    <div className="space-y-3">
      <Text label="Workspace name" description="Labels, descriptions, errors, and placeholders are part of the field API." placeholder="Quarterly planning" />
      <div className="grid gap-3 md:grid-cols-2">
        <NumberInput label="Capacity" description="Numeric field with parsed value support." defaultValue={36} suffix="hrs" />
        <NumberField label="Budget" description="Number export alias." defaultValue={12000} prefix="$" />
      </div>
      <TextArea label="Notes" placeholder="Add review context for the team" rows={3} />
      <SelectBox<string>
        label="Project type"
        value={projectType}
        onChange={setProjectType}
        options={['Internal', 'Client-facing', 'Research', 'Operational']}
        endAdornment={<Badge>{accent.label}</Badge>}
      />
      <SelectBox<string, 'multiple'>
        mode="multiple"
        label="Teams"
        value={teams}
        onChange={setTeams}
        options={teamOptions}
        showSelectAll
        showClear
        summaryText={({ selectedOptions }) => (selectedOptions.length ? `${selectedOptions.length} teams selected` : 'Choose teams')}
      />
    </div>
  );
}

function CardAccentDemo({ accent }: { accent: AccentChoice }) {
  const [enabled, setEnabled] = useState(accent.key !== 'danger');
  const [selected, setSelected] = useState(accent.key === 'teal');

  return (
    <div className="space-y-3">
      <Banner title="Review-ready update" tone={accent.key === 'danger' ? 'danger' : accent.key === 'warning' ? 'warning' : 'info'} showToneBadge>
        A host app can provide copy, actions, color overrides, and its own iconography.
      </Banner>
      <Card padded="sm" interactive>
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-white">Generic UI card</div>
            <div className="mt-1 text-xs text-[var(--rui-text-secondary)]">Padded, unpadded, interactive, and accent-aware.</div>
          </div>
          <Icon name="card" className="text-[var(--rui-accent)]" />
        </div>
      </Card>
      <div className="grid gap-3 md:grid-cols-2">
        <ChipCard title="Completion" value="76%" helper="Reusable metric card" trailing={<Badge>{accent.label}</Badge>} />
        <RadioCard checked={selected} onCheckedChange={setSelected} title="Recommended path" description="A selectable card with radio semantics." />
      </div>
      <ToggleCard checked={enabled} onCheckedChange={setEnabled} title="Notify reviewers" description="Binary setting card with Switch composition." />
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary" leftIcon={<Icon name="save" className="h-4 w-4" />}>
          Save
        </Button>
        <Button variant="outline" leftIcon={<Icon name="download" className="h-4 w-4" />}>
          Export
        </Button>
        <Switch checked={enabled} onCheckedChange={setEnabled} label="Enabled" />
        <Tooltip content="Tooltips can wrap any trigger element.">
          <Button variant="ghost" size="sm">
            Details
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}

function TableUseCase() {
  const [accentKey, setAccentKey] = useState<AccentKey>('default');

  return (
    <AccentProvider accentKey={accentKey} className="rounded-[var(--rui-radius-panel)] bg-[var(--rui-bg-app)] p-4">
      <div className="space-y-4">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Project portfolio table</div>
            <div className="mt-1 text-sm text-[var(--rui-text-secondary)]">
              Search, custom filters, custom priority sort, expansion, selection, column controls, and persistence.
            </div>
          </div>
          <AccentChoiceBar value={accentKey} onChange={setAccentKey} />
        </div>
        <Table<ProjectRow>
          tableId="storybook-projects"
          rows={projectRows}
          columns={projectColumns}
          rowKey={(row) => row.id}
          searchable
          searchPlaceholder="Search projects, owners, and teams"
          defaultExpandedRowIds={['proj-1']}
          selection={{ mode: 'multi', defaultSelectedKeys: ['proj-2'], selectAllScope: 'filtered' }}
          renderHeaderFilters={({ setGlobalSearch, setFilter, reset }) => (
            <>
              <Button size="sm" onClick={() => setFilter('status', { values: ['At risk'] })}>
                At risk
              </Button>
              <Button size="sm" variant="secondary" onClick={() => setFilter('priority', { values: ['Critical', 'High'] })}>
                High priority
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setGlobalSearch('Design')}>
                Search Design
              </Button>
              <Button size="sm" variant="ghost" onClick={reset}>
                Reset
              </Button>
            </>
          )}
          renderSelectionActions={({ selectedRows, clearSelection }) => (
            <Banner
              title={`${selectedRows.length} selected`}
              tone="accent"
              className="py-2"
              actions={
                <Button size="sm" variant="ghost" onClick={clearSelection}>
                  Clear
                </Button>
              }
            >
              Bulk action slots are rendered by the host application.
            </Banner>
          )}
          renderExpandedContent={(row) => (
            <div className="space-y-3">
              <div className="text-sm text-[var(--rui-text-secondary)]">Nested expanded content can render any React node, including another table.</div>
              <Table<ProjectTask>
                rows={row.tasks}
                columns={taskColumns}
                rowKey={(task) => task.id}
                hideColumnControls
                emptyMessage="No tasks for this project."
                className="min-h-[190px]"
              />
            </div>
          )}
        />
      </div>
    </AccentProvider>
  );
}

function LayoutUseCase() {
  const [accentKey, setAccentKey] = useState<AccentKey>('teal');
  const [activeId, setActiveId] = useState('overview');
  const panelState: GridPanelState = { id: 'standalone', order: 0, width: 'full', collapsed: false, fullscreen: false };

  const sidebar = (
    <Sidebar
      activeId={activeId}
      onSelect={setActiveId}
      header={<div className="text-xs uppercase tracking-[0.18em] text-[var(--rui-text-tertiary)]">Sections</div>}
      footer={<Badge>v0.1</Badge>}
      items={[
        { id: 'overview', label: 'Overview', description: 'Status and summary', icon: <Icon name="grid" className="h-4 w-4" /> },
        { id: 'forms', label: 'Forms', description: 'Fields and selection', icon: <Icon name="settings" className="h-4 w-4" /> },
        { id: 'logs', label: 'Logs', description: 'Audit events', icon: <Icon name="live" className="h-4 w-4" />, badge: <Badge>4</Badge> },
      ]}
    />
  );

  return (
    <AccentProvider accentKey={accentKey}>
      <Page
        title="Layout composition"
        description="Page receives sidebar, action buttons, and arbitrary children; GridLayout and DynamicPanel stay separate."
        sidebar={sidebar}
        actions={<AccentChoiceBar value={accentKey} onChange={setAccentKey} />}
      >
        <GridLayout
          persistenceKey="storybook-layout"
          panels={[
            {
              id: 'summary',
              title: 'Summary panel',
              description: 'Movable, resizable, collapsible, and fullscreen-capable.',
              defaultWidth: 'half',
              actions: <Button size="sm">Panel action</Button>,
              content: (
                <div className="grid gap-3 md:grid-cols-2">
                  <ChipCard title="Open items" value="24" helper="Across selected workspace" />
                  <ChipCard title="Reviewers" value="8" helper="Ready for assignment" />
                </div>
              ),
            },
            {
              id: 'activity',
              title: 'Activity panel',
              description: 'Custom controls can be injected by the host app.',
              defaultWidth: 'half',
              content: (
                <div className="space-y-3">
                  <Banner title="Import complete" tone="success">
                    A neutral demo message with no app-specific data.
                  </Banner>
                  <ToggleCard defaultChecked title="Auto-refresh" description="Use cards for user-facing binary settings." />
                </div>
              ),
            },
            {
              id: 'directory',
              title: 'Directory panel',
              defaultWidth: 'full',
              bodyClassName: 'min-h-[360px] flex flex-col',
              content: <Table<DirectoryRow> rows={directoryRows} columns={directoryColumns} rowKey={(row) => row.id} searchable selection={{ mode: 'single' }} />,
            },
          ]}
          renderPanelActions={(panel) =>
            panel.id === 'activity' ? (
              <Button size="sm" variant="ghost" leftIcon={<Icon name="refresh" className="h-4 w-4" />}>
                Refresh
              </Button>
            ) : null
          }
        />
        <div className="mt-5">
          <DynamicPanel
            panel={{
              id: 'standalone',
              title: 'Standalone DynamicPanel',
              description: 'The panel can also be composed outside GridLayout when the host owns state.',
              content: <div className="text-sm text-[var(--rui-text-secondary)]">State, controls, actions, and body content are all prop-driven.</div>,
            }}
            state={panelState}
            allowMovement={false}
            allowResize={false}
            renderActions={() => <Button size="sm">Validate</Button>}
          />
        </div>
      </Page>
    </AccentProvider>
  );
}

function LoggerUseCase() {
  const [accentKey, setAccentKey] = useState<AccentKey>('warning');
  const [search, setSearch] = useState('');
  const categories = useMemo(
    () => [
      { label: 'All categories', value: 'ALL' },
      { label: 'Release', value: 'release' },
      { label: 'Quality', value: 'quality' },
    ],
    [],
  );

  return (
    <AccentProvider accentKey={accentKey} className="rounded-[var(--rui-radius-panel)] bg-[var(--rui-bg-app)] p-4">
      <div className="space-y-4">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Operational log viewer</div>
            <div className="mt-1 text-sm text-[var(--rui-text-secondary)]">Levels, categories, metadata, payload expansion, clear action, and controlled search.</div>
          </div>
          <AccentChoiceBar value={accentKey} onChange={setAccentKey} />
        </div>
        <Logger
          title="Release activity"
          description="Dummy entries demonstrate filters, payloads, timestamps, and custom metadata."
          entries={logEntries}
          categories={categories}
          search={search}
          onSearchChange={setSearch}
          action={<Badge>{logEntries.length} entries</Badge>}
          onClear={() => setSearch('')}
          renderMetadata={(entry) => (entry.metadata ? <span>Metadata: {Object.keys(entry.metadata).join(', ')}</span> : null)}
          heightClassName="max-h-[460px]"
        />
      </div>
    </AccentProvider>
  );
}

function IconCatalog() {
  const names = [
    'actions',
    'alert',
    'bars',
    'bell',
    'card',
    'chart',
    'check',
    'download',
    'filter',
    'grid',
    'info',
    'live',
    'panel',
    'refresh',
    'save',
    'search',
    'settings',
    'wallet',
  ] as const;

  return (
    <AccentMatrix>
      {() => (
        <div className="grid grid-cols-3 gap-2">
          {names.map((name) => (
            <Tooltip key={name} content={name}>
              <div className="flex h-16 flex-col items-center justify-center gap-1 rounded-[8px] border border-white/8 bg-white/[0.04] text-[var(--rui-text-secondary)]">
                <Icon name={name} className="h-5 w-5 text-[var(--rui-accent)]" />
                <span className="max-w-full truncate px-1 text-[10px]">{name}</span>
              </div>
            </Tooltip>
          ))}
        </div>
      )}
    </AccentMatrix>
  );
}

function NotificationDemo() {
  const [items, setItems] = useState<NotificationItem[]>([
    {
      id: 'note-1',
      tone: 'success' as const,
      title: 'Saved',
      message: 'This notification is controlled by the story host.',
      timeout: null,
    },
    {
      id: 'note-2',
      tone: 'warning' as const,
      title: 'Review needed',
      message: 'Timeouts and dismiss callbacks are prop-driven.',
      timeout: null,
    },
  ]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() =>
            setItems((current) => [
              ...current,
              {
                id: `note-${current.length + 1}`,
                tone: 'accent',
                title: 'Queued update',
                message: 'New dummy notification added from Storybook.',
                timeout: null,
              },
            ])
          }
        >
          Add notification
        </Button>
        <Button variant="ghost" onClick={() => setItems([])}>
          Clear notifications
        </Button>
      </div>
      <NotificationViewport items={items} onDismiss={(id) => setItems((current) => current.filter((item) => item.id !== id))} />
    </>
  );
}

export const AccentOverview: Story = {
  render: function AccentOverviewStory() {
    return (
      <StoryPage
        title="@react/ui accent overview"
        description="Every public component reads AccentContext first, then component-level accent keys, then the default packaged theme."
        actions={<Badge>Packaged CSS</Badge>}
      >
        <AccentMatrix>
          {(accent) => (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{accent.label}</Badge>
                <Badge tone="success">success</Badge>
                <Badge tone="warning">warning</Badge>
                <Badge tone="danger">danger</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <Banner title="Reusable banner" tone={accent.key === 'danger' ? 'danger' : accent.key === 'warning' ? 'warning' : 'info'}>
                This copy is generic and supplied by the consuming application.
              </Banner>
              <div className="grid gap-3 md:grid-cols-2">
                <ChipCard title="Metric" value="128" helper="ChipCard default tone is accent" />
                <Card padded="sm">
                  <div className="text-sm font-semibold text-[var(--rui-text-primary)]">Card</div>
                  <div className="mt-1 text-xs text-[var(--rui-text-secondary)]">Plain reusable surface.</div>
                </Card>
              </div>
            </div>
          )}
        </AccentMatrix>
      </StoryPage>
    );
  },
};

export const FieldsAndSelects: Story = {
  render: function FieldsAndSelectsStory() {
    return (
      <StoryPage title="Fields and SelectBox" description="Text, TextArea, NumberInput, Number alias, and SelectBox with single, multi, searchable, and summary behavior.">
        <AccentMatrix>{(accent) => <FieldAccentDemo accent={accent} />}</AccentMatrix>
      </StoryPage>
    );
  },
};

export const CardsFeedbackAndActions: Story = {
  render: function CardsFeedbackAndActionsStory() {
    return (
      <StoryPage title="Cards, feedback, and actions" description="Card, ChipCard, RadioCard, ToggleCard, Button, Badge, Banner, Switch, Tooltip, Icon, and NotificationViewport.">
        <AccentMatrix>{(accent) => <CardAccentDemo accent={accent} />}</AccentMatrix>
        <AccentProvider accentKey="default" className="rounded-[var(--rui-radius-panel)] bg-[var(--rui-bg-app)] p-4">
          <Card contentClassName="space-y-3">
            <div>
              <div className="text-sm font-semibold text-white">NotificationViewport</div>
              <div className="mt-1 text-sm text-[var(--rui-text-secondary)]">Use the buttons below to add controlled dummy notifications to the fixed viewport.</div>
            </div>
            <NotificationDemo />
          </Card>
        </AccentProvider>
      </StoryPage>
    );
  },
};

export const TableUseCases: Story = {
  render: function TableUseCasesStory() {
    return (
      <StoryPage
        title="Table use cases"
        description="Column selector, filters, global search, custom header filters, custom sort, expansion, nested table content, selection, and bulk actions."
      >
        <TableUseCase />
      </StoryPage>
    );
  },
};

export const LayoutUseCases: Story = {
  render: function LayoutUseCasesStory() {
    return <LayoutUseCase />;
  },
};

export const LoggerUseCases: Story = {
  render: function LoggerUseCasesStory() {
    return (
      <StoryPage
        title="Logger use cases"
        description="Filterable, expandable, controlled log viewer with generic levels, categories, metadata, payload rendering, and clear action."
      >
        <LoggerUseCase />
      </StoryPage>
    );
  },
};

export const Icons: Story = {
  render: function IconsStory() {
    return (
      <StoryPage title="Icon catalog" description="Generic package icons for UI chrome. Product logos and app-specific imagery stay in the consuming application.">
        <IconCatalog />
      </StoryPage>
    );
  },
};
