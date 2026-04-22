import type { Meta, StoryObj } from '@storybook/react';
import React, { useMemo, useState } from 'react';
import {
  AccentProvider,
  Badge,
  Banner,
  Button,
  ChipCard,
  GridLayout,
  Icon,
  Page,
  SelectBox,
  Sidebar,
  Table,
  Text,
  type AccentKey,
  type SelectBoxOption,
  type SidebarGroup,
  type TableColumn,
} from '../src/index';
import { docsSource } from './story-source';

interface ProjectRow {
  id: string;
  name: string;
  team: string;
  status: 'Ready' | 'Review' | 'Blocked';
  budget: number;
}

interface GettingStartedStoryArgs {
  accentKey: AccentKey;
  showBanner: boolean;
  allowMovement: boolean;
  allowColumnResize: boolean;
  allowColumnReorder: boolean;
}

const gettingStartedSource = `
import { useMemo, useState } from 'react';
import {
  AccentProvider,
  Badge,
  Banner,
  Button,
  ChipCard,
  GridLayout,
  Icon,
  Page,
  SelectBox,
  Sidebar,
  Table,
  Text,
  type SelectBoxOption,
  type SidebarGroup,
  type TableColumn,
} from '@react/ui';
import '@react/ui/styles.css';

interface ProjectRow {
  id: string;
  name: string;
  team: string;
  status: 'Ready' | 'Review' | 'Blocked';
  budget: number;
}

const rows: ProjectRow[] = [
  { id: 'project-1', name: 'Client portal refresh', team: 'Design Systems', status: 'Ready', budget: 48000 },
  { id: 'project-2', name: 'Runtime observability', team: 'Platform', status: 'Review', budget: 32000 },
  { id: 'project-3', name: 'Support queue cleanup', team: 'Support Ops', status: 'Blocked', budget: 18000 },
];

const teamOptions: SelectBoxOption<string>[] = [
  { label: 'All teams', value: 'all' },
  { label: 'Design Systems', value: 'Design Systems' },
  { label: 'Platform', value: 'Platform' },
  { label: 'Support Ops', value: 'Support Ops' },
];

const sidebarGroups: SidebarGroup[] = [
  {
    label: 'GETTING STARTED',
    items: [
      { id: 'overview', label: 'Overview', icon: <Icon name="panel" className="h-5 w-5" />, active: true },
      { id: 'projects', label: 'Projects', icon: <Icon name="table" className="h-5 w-5" /> },
      { id: 'settings', label: 'Settings', icon: <Icon name="settings" className="h-5 w-5" /> },
    ],
  },
];

const columns: TableColumn<ProjectRow>[] = [
  { id: 'name', label: 'Project', kind: 'text', width: 240, renderCell: (row) => <span className="font-semibold text-[var(--rui-text-primary)]">{row.name}</span> },
  { id: 'team', label: 'Team', kind: 'enum', width: 170, getEnumOptions: () => teamOptions.filter((option) => option.value !== 'all').map((option) => ({ label: option.label, value: option.value })) },
  { id: 'status', label: 'Status', kind: 'enum', width: 130, renderCell: (row) => <Badge tone={row.status === 'Blocked' ? 'danger' : row.status === 'Review' ? 'warning' : 'success'}>{row.status}</Badge> },
  { id: 'budget', label: 'Budget', kind: 'number', align: 'right', width: 140, accessor: (row) => row.budget, renderCell: (row) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(row.budget) },
];

export function GettingStartedDashboard() {
  const [team, setTeam] = useState('all');
  const [query, setQuery] = useState('');

  const filteredRows = useMemo(
    () =>
      rows.filter((row) => {
        const matchesTeam = team === 'all' || row.team === team;
        const matchesQuery = !query || row.name.toLowerCase().includes(query.toLowerCase());
        return matchesTeam && matchesQuery;
      }),
    [query, team],
  );

  return (
    <AccentProvider accentKey="default">
      <Page
        title="Project operations"
        description="A complete starter screen using Page, Sidebar, GridLayout, fields, buttons, cards, and Table."
        sidebar={<Sidebar groups={sidebarGroups} collapsible />}
        actions={<Button variant="primary" leftIcon={<Icon name="refresh" className="h-4 w-4" />}>Refresh</Button>}
      >
        <GridLayout
          persistenceKey="getting-started-dashboard"
          allowMovement
          allowResize
          allowCollapse
          allowFullscreen
          panels={[
            {
              id: 'summary',
              title: 'Summary',
              defaultWidth: 'half',
              content: (
                <div className="grid gap-3 md:grid-cols-3">
                  <ChipCard title="Projects" value={filteredRows.length} helper="Visible rows" />
                  <ChipCard title="Budget" value="$98K" helper="Committed" tone="success" />
                  <ChipCard title="Blocked" value={filteredRows.filter((row) => row.status === 'Blocked').length} helper="Needs action" tone="danger" />
                </div>
              ),
            },
            {
              id: 'filters',
              title: 'Filters',
              defaultWidth: 'half',
              content: (
                <div className="grid gap-3 md:grid-cols-2">
                  <SelectBox label="Team" value={team} options={teamOptions} onChange={(value) => setTeam(value ?? 'all')} />
                  <Text label="Search" value={query} onChange={setQuery} placeholder="Find projects" />
                </div>
              ),
            },
            {
              id: 'projects',
              title: 'Projects',
              defaultWidth: 'full',
              content: (
                <Table
                  tableId="getting-started-projects"
                  rows={filteredRows}
                  columns={columns}
                  rowKey={(row) => row.id}
                  searchable
                  allowColumnResize
                  allowColumnReorder
                  selection={{ mode: 'multi' }}
                  renderSelectionActions={({ selectedRows }) => <Button size="sm">Export {selectedRows.length}</Button>}
                  renderExpandedContent={(row) => <Banner tone="info">Project owner workflow for {row.name} stays in your app.</Banner>}
                />
              ),
            },
          ]}
        />
      </Page>
    </AccentProvider>
  );
}
`;

const projectRows: ProjectRow[] = [
  { id: 'project-1', name: 'Client portal refresh', team: 'Design Systems', status: 'Ready', budget: 48000 },
  { id: 'project-2', name: 'Runtime observability', team: 'Platform', status: 'Review', budget: 32000 },
  { id: 'project-3', name: 'Support queue cleanup', team: 'Support Ops', status: 'Blocked', budget: 18000 },
];

const teamOptions: SelectBoxOption<string>[] = [
  { label: 'All teams', value: 'all' },
  { label: 'Design Systems', value: 'Design Systems' },
  { label: 'Platform', value: 'Platform' },
  { label: 'Support Ops', value: 'Support Ops' },
];

const sidebarGroups: SidebarGroup[] = [
  {
    label: 'GETTING STARTED',
    items: [
      { id: 'overview', label: 'Overview', icon: <Icon name="panel" className="h-5 w-5" />, active: true },
      { id: 'projects', label: 'Projects', icon: <Icon name="table" className="h-5 w-5" /> },
      { id: 'settings', label: 'Settings', icon: <Icon name="settings" className="h-5 w-5" /> },
    ],
  },
];

const columns: TableColumn<ProjectRow>[] = [
  {
    id: 'name',
    label: 'Project',
    kind: 'text',
    width: 240,
    renderCell: (row) => <span className="font-semibold text-[var(--rui-text-primary)]">{row.name}</span>,
  },
  {
    id: 'team',
    label: 'Team',
    kind: 'enum',
    width: 170,
    getEnumOptions: () => teamOptions.filter((option) => option.value !== 'all').map((option) => ({ label: option.label, value: option.value })),
  },
  {
    id: 'status',
    label: 'Status',
    kind: 'enum',
    width: 130,
    renderCell: (row) => <Badge tone={row.status === 'Blocked' ? 'danger' : row.status === 'Review' ? 'warning' : 'success'}>{row.status}</Badge>,
  },
  {
    id: 'budget',
    label: 'Budget',
    kind: 'number',
    align: 'right',
    width: 140,
    accessor: (row) => row.budget,
    renderCell: (row) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(row.budget),
  },
];

function GettingStartedDashboard({ accentKey, showBanner, allowMovement, allowColumnResize, allowColumnReorder }: GettingStartedStoryArgs) {
  const [team, setTeam] = useState('all');
  const [query, setQuery] = useState('');

  const filteredRows = useMemo(
    () =>
      projectRows.filter((row) => {
        const matchesTeam = team === 'all' || row.team === team;
        const matchesQuery = !query || row.name.toLowerCase().includes(query.toLowerCase());
        return matchesTeam && matchesQuery;
      }),
    [query, team],
  );

  return (
    <AccentProvider accentKey={accentKey}>
      <Page
        title="Project operations"
        description="A complete starter screen using Page, Sidebar, GridLayout, fields, buttons, cards, and Table."
        sidebar={<Sidebar groups={sidebarGroups} collapsible />}
        actions={
          <Button variant="primary" leftIcon={<Icon name="refresh" className="h-4 w-4" />}>
            Refresh
          </Button>
        }
      >
        {showBanner ? (
          <Banner tone="info" className="mb-5">
            Import the package CSS once, then compose routes from Page, GridLayout, and Table.
          </Banner>
        ) : null}
        <GridLayout
          persistenceKey="getting-started-dashboard"
          allowMovement={allowMovement}
          allowResize
          allowCollapse
          allowFullscreen
          panels={[
            {
              id: 'summary',
              title: 'Summary',
              defaultWidth: 'half',
              content: (
                <div className="grid gap-3 md:grid-cols-3">
                  <ChipCard title="Projects" value={filteredRows.length} helper="Visible rows" />
                  <ChipCard title="Budget" value="$98K" helper="Committed" tone="success" />
                  <ChipCard title="Blocked" value={filteredRows.filter((row) => row.status === 'Blocked').length} helper="Needs action" tone="danger" />
                </div>
              ),
            },
            {
              id: 'filters',
              title: 'Filters',
              defaultWidth: 'half',
              content: (
                <div className="grid gap-3 md:grid-cols-2">
                  <SelectBox label="Team" value={team} options={teamOptions} onChange={(value) => setTeam(value ?? 'all')} />
                  <Text label="Search" value={query} onChange={setQuery} placeholder="Find projects" />
                </div>
              ),
            },
            {
              id: 'projects',
              title: 'Projects',
              defaultWidth: 'full',
              content: (
                <Table
                  tableId="getting-started-projects"
                  rows={filteredRows}
                  columns={columns}
                  rowKey={(row) => row.id}
                  searchable
                  allowColumnResize={allowColumnResize}
                  allowColumnReorder={allowColumnReorder}
                  selection={{ mode: 'multi' }}
                  renderSelectionActions={({ selectedRows }) => <Button size="sm">Export {selectedRows.length}</Button>}
                  renderExpandedContent={(row) => <Banner tone="info">Project owner workflow for {row.name} stays in your app.</Banner>}
                />
              ),
            },
          ]}
        />
      </Page>
    </AccentProvider>
  );
}

const meta = {
  title: 'React UI/Getting Started',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    accentKey: {
      control: 'select',
      options: ['default', 'teal', 'warning', 'danger', 'neutral', 'tailadmin', 'light-blue', 'light-success', 'light-warning', 'light-danger', 'light-neutral'],
    },
    showBanner: { control: 'boolean' },
    allowMovement: { control: 'boolean' },
    allowColumnResize: { control: 'boolean' },
    allowColumnReorder: { control: 'boolean' },
  },
  args: {
    accentKey: 'default',
    showBanner: true,
    allowMovement: true,
    allowColumnResize: true,
    allowColumnReorder: true,
  },
} satisfies Meta<GettingStartedStoryArgs>;

export default meta;

type Story = StoryObj<GettingStartedStoryArgs>;

export const GettingStartedRecipe: Story = {
  parameters: docsSource(gettingStartedSource, 'Copy this recipe to create a first dashboard route with package CSS, Page, Sidebar, GridLayout, fields, cards, and Table.'),
  render: (args) => <GettingStartedDashboard {...args} />,
};
