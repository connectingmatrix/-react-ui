import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Badge,
  Banner,
  Button,
  ChipCard,
  DynamicPanel,
  AccentProvider,
  GridLayout,
  Logger,
  Notification,
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
  type TableColumn,
} from '../src/index';
import '../src/styles.css';

const meta: Meta = {
  title: 'React UI/System',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

const people = [
  { id: '1', name: 'Mira Chen', role: 'Designer', status: 'Active', score: 92, updatedAt: '2026-04-18T12:20:00Z' },
  { id: '2', name: 'Omar Malik', role: 'Engineer', status: 'Paused', score: 71, updatedAt: '2026-04-17T08:10:00Z' },
  { id: '3', name: 'Eli Stone', role: 'Operator', status: 'Active', score: 83, updatedAt: '2026-04-16T19:45:00Z' },
];

const columns: TableColumn<(typeof people)[number]>[] = [
  { id: 'name', label: 'Name', kind: 'text', width: 180, renderCell: (row) => <span className="font-semibold text-white">{row.name}</span> },
  { id: 'role', label: 'Role', kind: 'enum', width: 140 },
  { id: 'status', label: 'Status', kind: 'enum', width: 120 },
  { id: 'score', label: 'Score', kind: 'number', width: 100, align: 'right' },
  { id: 'updatedAt', label: 'Updated', kind: 'datetime', width: 180, visibleByDefault: false },
];

export const Components: Story = {
  render: function ComponentsStory() {
    const [mode, setMode] = useState<'paper' | 'live' | null>('paper');
    const [teams, setTeams] = useState<Array<string | number>>(['design']);
    const [notifications, setNotifications] = useState([
      { id: 'welcome', tone: 'success' as const, title: 'Saved', message: 'The reusable notification viewport is controlled by the host app.', timeout: null },
    ]);

    return (
      <Page
        title="@react/ui"
        description="Reusable, domain-neutral React primitives with packaged styling."
        actions={
          <>
            <Button variant="ghost">Cancel</Button>
            <Button variant="success">Save</Button>
          </>
        }
      >
        <GridLayout
          panels={[
            {
              id: 'controls',
              title: 'Controls',
              description: 'Inputs, selections, banners, and cards.',
              defaultWidth: 'half',
              content: (
                <div className="space-y-4">
                  <Banner title="Draft changes" tone="info">
                    Draft changes remain local until you review and save them.
                  </Banner>
                  <Text label="Name" placeholder="Workspace name" />
                  <NumberInput label="Budget" value={1000} prefix="$" onChange={() => undefined} />
                  <TextArea label="Notes" placeholder="Describe the change" />
                  <SelectBox<'paper' | 'live'> value={mode} onChange={setMode} options={['paper', 'live']} label="Mode" />
                  <SelectBox
                    mode="multiple"
                    value={teams}
                    onChange={setTeams}
                    options={[
                      { label: 'Design', value: 'design' },
                      { label: 'Engineering', value: 'engineering' },
                      { label: 'Operations', value: 'ops' },
                    ]}
                    label="Teams"
                  />
                  <div className="grid gap-3 md:grid-cols-2">
                    <ChipCard title="Rows" value="128" helper="Filtered dataset" tone="accent" />
                    <RadioCard checked title="Primary option" description="Radio card with real radio semantics." />
                    <ToggleCard checked title="Auto-refresh" description="Toggle-backed settings card." />
                  </div>
                </div>
              ),
            },
            {
              id: 'table',
              title: 'Table',
              description: 'Columns, filters, selection, expansion, and search.',
              defaultWidth: 'half',
              bodyClassName: 'h-[520px] flex flex-col',
              content: (
                <Table
                  rows={people}
                  columns={columns}
                  rowKey={(row) => row.id}
                  searchable
                  selection={{ mode: 'multi' }}
                  renderExpandedContent={(row) => <div className="text-white/75">Expanded details for {row.name}</div>}
                />
              ),
            },
            {
              id: 'logs',
              title: 'Logger',
              defaultWidth: 'full',
              content: (
                <Logger
                  entries={[
                    { id: 'a', level: 'INFO', category: 'system', source: 'demo', message: 'Logger mounted.', payload: { demo: true }, createdAt: new Date().toISOString() },
                    { id: 'b', level: 'WARN', category: 'system', source: 'demo', message: 'Filterable warning line.', createdAt: new Date().toISOString() },
                  ]}
                  categories={[
                    { label: 'All categories', value: 'ALL' },
                    { label: 'System', value: 'system' },
                  ]}
                />
              ),
            },
          ]}
        />
        <NotificationViewport items={notifications} onDismiss={(id) => setNotifications((items) => items.filter((item) => item.id !== id))} />
      </Page>
    );
  },
};

export const Inputs: Story = {
  render: function InputsStory() {
    const [teams, setTeams] = useState<Array<string | number>>(['design']);
    return (
      <Page title="Inputs" description="Labels, descriptions, errors, search, and multi-select menu actions.">
        <div className="grid gap-4 md:grid-cols-2">
          <Text label="Text" description="A text input with helper copy." placeholder="Type a value" />
          <NumberField label="Number" description="Number alias for NumberInput." defaultValue={42} />
          <TextArea label="Text area" placeholder="Longer content" />
          <SelectBox
            mode="multiple"
            value={teams}
            onChange={setTeams}
            options={[
              { label: 'Design', value: 'design' },
              { label: 'Engineering', value: 'engineering' },
              { label: 'Operations', value: 'ops' },
            ]}
            label="Teams"
            showSelectAll
            showClear
          />
        </div>
      </Page>
    );
  },
};

export const CardsAndFeedback: Story = {
  render: function CardsAndFeedbackStory() {
    const [checked, setChecked] = useState(true);
    return (
      <Page title="Cards and Feedback" description="Cards, badges, banners, switches, tooltips, and notifications.">
        <div className="space-y-4">
          <Banner title="Custom banner" accentColor="#19d3a8" backgroundColor="rgba(25,211,168,0.10)" borderColor="rgba(25,211,168,0.35)">
            Custom colors are passed by the host application.
          </Banner>
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="accent">Accent</Badge>
            <Switch checked={checked} onCheckedChange={setChecked} label="Switch" />
            <Tooltip content="Tooltip content from the package.">
              <Button variant="ghost">Hover me</Button>
            </Tooltip>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <ChipCard title="Metric" value="128" helper="Reusable chip card" tone="accent" />
            <RadioCard checked title="Radio card" description="For mutually exclusive options." />
            <ToggleCard checked={checked} onCheckedChange={setChecked} title="Toggle card" description="For binary settings." />
          </div>
          <Notification items={[{ id: 'n1', title: 'Notification alias', message: 'Notification aliases NotificationViewport.', timeout: null }]} />
        </div>
      </Page>
    );
  },
};

export const DataTable: Story = {
  render: function DataTableStory() {
    return (
      <Page title="Table" description="Search, filters, header filters, selection, and expanded rows.">
        <Table
          rows={people}
          columns={columns}
          rowKey={(row) => row.id}
          searchable
          selection={{ mode: 'multi' }}
          renderHeaderFilters={({ setGlobalSearch }) => (
            <Button size="sm" onClick={() => setGlobalSearch('Mira')}>
              Only Mira
            </Button>
          )}
          renderExpandedContent={(row) => <div className="text-white/75">Nested content for {row.name}</div>}
        />
      </Page>
    );
  },
};

export const LayoutPanels: Story = {
  render: function LayoutPanelsStory() {
    return (
      <AccentProvider accentKey="teal">
        <Page
          title="Page and Panels"
          description="Page shell, Sidebar, GridLayout, DynamicPanel, and replaceable panel control buttons."
          sidebar={
            <Sidebar
              activeId="overview"
              items={[
                { id: 'overview', label: 'Overview' },
                { id: 'settings', label: 'Settings' },
              ]}
            />
          }
        >
          <GridLayout
            panels={[{ id: 'panel', title: 'Panel', description: 'A movable and collapsible panel.', content: <div>Panel content</div> }]}
            renderCollapseButton={({ defaultButton }) => defaultButton}
            renderPanelActions={() => <Button size="sm">Panel action</Button>}
          />
          <div className="hidden">
            <DynamicPanel panel={{ id: 'demo', title: 'Standalone', content: 'Demo' }} state={{ id: 'demo', order: 0, width: 'full', collapsed: false, fullscreen: false }} />
          </div>
        </Page>
      </AccentProvider>
    );
  },
};

export const Logs: Story = {
  render: function LogsStory() {
    const [search, setSearch] = useState('');
    return (
      <Page title="Logger" description="Controlled and uncontrolled log filtering.">
        <Logger
          level="ALL"
          search={search}
          onSearchChange={setSearch}
          entries={[
            { id: 'a', level: 'INFO', category: 'system', source: 'demo', message: 'Controlled logger story.', payload: { ok: true }, createdAt: new Date().toISOString() },
            { id: 'b', level: 'ERROR', category: 'system', source: 'demo', message: 'Payloads can be expanded.', createdAt: new Date().toISOString() },
          ]}
        />
      </Page>
    );
  },
};
