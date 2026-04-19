import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Badge,
  Button,
  Card,
  ChipCard,
  DynamicPanel,
  GridLayout,
  Icon,
  Page,
  PageContainer,
  PageHeader,
  Sidebar,
  Table,
  ToggleCard,
  type GridPanelState,
  type TableColumn,
} from '../src/index';
import '../src/styles.css';
import { CaseGrid, Section, StoryShell, type StoryCase } from './story-helpers';

const meta: Meta = {
  title: 'React UI/Layouts',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

const rows = [
  { id: 'one', name: 'Overview refresh', owner: 'Mira Chen', state: 'Ready' },
  { id: 'two', name: 'Permission audit', owner: 'Omar Malik', state: 'Review' },
  { id: 'three', name: 'Research summary', owner: 'Ari Lane', state: 'Blocked' },
];

const columns: TableColumn<(typeof rows)[number]>[] = [
  { id: 'name', label: 'Name', kind: 'text', width: 200, renderCell: (row) => <span className="font-semibold text-white">{row.name}</span> },
  { id: 'owner', label: 'Owner', kind: 'text', width: 140 },
  { id: 'state', label: 'State', kind: 'enum', width: 120 },
];

function SidebarDemo() {
  const [activeId, setActiveId] = useState('overview');
  return (
    <Sidebar
      activeId={activeId}
      onSelect={setActiveId}
      header={<div className="text-xs uppercase tracking-[0.18em] text-[var(--rui-text-tertiary)]">Sections</div>}
      footer={<Badge>4</Badge>}
      items={[
        { id: 'overview', label: 'Overview', description: 'Summary and health', icon: <Icon name="grid" className="h-4 w-4" /> },
        { id: 'settings', label: 'Settings', description: 'Editable controls', icon: <Icon name="settings" className="h-4 w-4" /> },
        { id: 'logs', label: 'Logs', description: 'Operational events', icon: <Icon name="live" className="h-4 w-4" />, badge: <Badge>new</Badge> },
      ]}
    />
  );
}

function GridLayoutDemo() {
  return (
    <GridLayout
      persistenceKey="layout-story-default"
      panels={[
        {
          id: 'summary',
          title: 'Summary',
          description: 'Movable and resizable summary panel.',
          defaultWidth: 'half',
          content: (
            <div className="grid gap-3 md:grid-cols-2">
              <ChipCard title="Open" value="24" helper="Items" />
              <ChipCard title="Done" value="18" helper="This week" />
            </div>
          ),
        },
        {
          id: 'settings',
          title: 'Settings',
          description: 'Binary settings composed inside a panel.',
          defaultWidth: 'half',
          content: <ToggleCard defaultChecked title="Auto refresh" description="Keep data current." />,
        },
        {
          id: 'table',
          title: 'Table',
          description: 'A full-width panel with an element child.',
          defaultWidth: 'full',
          bodyClassName: 'min-h-[300px] flex flex-col',
          content: <Table rows={rows} columns={columns} rowKey={(row) => row.id} searchable />,
        },
      ]}
      renderPanelActions={(panel) =>
        panel.id === 'settings' ? (
          <Button size="sm" variant="ghost">
            Validate
          </Button>
        ) : null
      }
    />
  );
}

function LockedGridDemo() {
  return (
    <GridLayout
      allowMovement={false}
      allowResize={false}
      allowCollapse={false}
      allowFullscreen={false}
      panels={[
        { id: 'locked-a', title: 'Locked A', defaultWidth: 'half', content: <Card>Controls hidden by allow props.</Card> },
        { id: 'locked-b', title: 'Locked B', defaultWidth: 'half', content: <Card>Static dashboard layout.</Card> },
      ]}
    />
  );
}

function ControlledLayoutDemo() {
  const [layout, setLayout] = useState<GridPanelState[]>([
    { id: 'one', order: 0, width: 'half', collapsed: false, fullscreen: false },
    { id: 'two', order: 1, width: 'half', collapsed: false, fullscreen: false },
  ]);
  return (
    <GridLayout
      layout={layout}
      onLayoutChange={setLayout}
      panels={[
        { id: 'one', title: 'Controlled one', content: <Card>Host owns layout state.</Card> },
        { id: 'two', title: 'Controlled two', content: <Card>onLayoutChange emits normalized state.</Card> },
      ]}
    />
  );
}

function DynamicPanelDemo() {
  const [state, setState] = useState<GridPanelState>({ id: 'standalone', order: 0, width: 'full', collapsed: false, fullscreen: false });
  return (
    <DynamicPanel
      panel={{
        id: 'standalone',
        title: 'Standalone DynamicPanel',
        description: 'The host owns all state and handlers.',
        actions: <Button size="sm">Preview</Button>,
        content: <div className="text-sm text-[var(--rui-text-secondary)]">This panel is composed outside GridLayout.</div>,
      }}
      state={state}
      onToggleCollapse={() => setState((current) => ({ ...current, collapsed: !current.collapsed }))}
      onToggleFullscreen={() => setState((current) => ({ ...current, fullscreen: !current.fullscreen, collapsed: false }))}
      onCycleWidth={() => setState((current) => ({ ...current, width: current.width === 'full' ? 'half' : 'full' }))}
      onReset={() => setState({ id: 'standalone', order: 0, width: 'full', collapsed: false, fullscreen: false })}
    />
  );
}

const pageCases: StoryCase[] = [
  {
    title: 'Page shell',
    description: 'Title, description, actions, and content.',
    props: [
      { name: 'title', value: '"Workspace"' },
      { name: 'description', value: '"Generic page shell."' },
      { name: 'actions', value: '<Button />' },
    ],
    render: (
      <Page title="Workspace" description="Generic page shell." actions={<Button size="sm">Action</Button>} className="min-h-[420px]">
        <Card>Page children render here.</Card>
      </Page>
    ),
  },
  {
    title: 'Page with sidebar',
    description: 'Sidebar is passed as a separate layout component, not hardwired.',
    props: [
      { name: 'sidebar', value: '<Sidebar />' },
      { name: 'children', value: '<GridLayout /> or any ReactNode' },
    ],
    render: (
      <Page title="Sidebar page" description="Sidebar and content are separate components." sidebar={<SidebarDemo />} className="min-h-[520px]">
        <Card>Primary page content.</Card>
      </Page>
    ),
  },
  {
    title: 'Page slots',
    description: 'Topbar, footer, contentClassName, headerClassName, and sidebarClassName slots.',
    props: [
      { name: 'topbar', value: '<ReactNode />' },
      { name: 'footer', value: '<ReactNode />' },
      { name: 'contentClassName', value: '"space-y-4"' },
    ],
    render: (
      <Page
        title="Slotted page"
        topbar={<div className="border-b border-white/8 bg-black/20 px-4 py-2 text-sm text-white">Topbar slot</div>}
        footer={<div className="text-sm text-[var(--rui-text-secondary)]">Footer slot</div>}
        contentClassName="space-y-4"
        className="min-h-[520px]"
      >
        <Card>Content slot with spacing class.</Card>
      </Page>
    ),
  },
  {
    title: 'PageHeader standalone',
    description: 'Header primitive used by app wrappers.',
    props: [
      { name: 'title/pageName', value: 'ReactNode' },
      { name: 'description/subtitle', value: 'ReactNode' },
      { name: 'actionButtons/actions', value: 'ReactNode' },
    ],
    render: <PageHeader title="Standalone header" subtitle="The header can be composed without Page." actionButtons={<Button size="sm">Save</Button>} />,
  },
  {
    title: 'PageContainer standalone',
    description: 'Container primitive for app-level page wrappers.',
    props: [{ name: 'className', value: '"space-y-5"' }],
    render: (
      <PageContainer className="rounded-[var(--rui-radius-panel)] border border-white/8 bg-black/10">
        <Card>Container child content.</Card>
      </PageContainer>
    ),
  },
];

const sidebarCases: StoryCase[] = [
  {
    title: 'Sidebar items',
    description: 'Active item, descriptions, icons, badges, header, footer, and onSelect.',
    props: [
      { name: 'items', value: 'SidebarItem[]' },
      { name: 'activeId', value: '"overview"' },
      { name: 'onSelect', value: '(id, item) => void' },
    ],
    render: <SidebarDemo />,
  },
  {
    title: 'Sidebar children',
    description: 'Custom children can be composed under item navigation.',
    props: [{ name: 'children', value: '<ReactNode />' }],
    render: (
      <Sidebar items={[{ id: 'one', label: 'One' }]} activeId="one">
        <Card padded="sm" className="text-sm text-[var(--rui-text-secondary)]">
          Custom child content.
        </Card>
      </Sidebar>
    ),
  },
  {
    title: 'Sidebar disabled item',
    description: 'Disabled navigation item state.',
    props: [{ name: 'item.disabled', value: 'true' }],
    render: (
      <Sidebar
        items={[
          { id: 'locked', label: 'Locked', description: 'Unavailable', disabled: true },
          { id: 'open', label: 'Open' },
        ]}
        activeId="open"
      />
    ),
  },
];

const gridCases: StoryCase[] = [
  {
    title: 'GridLayout default',
    description: 'Persisted movable panel grid with half/full widths.',
    props: [
      { name: 'panels', value: 'GridPanelDefinition[]' },
      { name: 'persistenceKey', value: '"layout-story-default"' },
    ],
    render: <GridLayoutDemo />,
  },
  {
    title: 'GridLayout locked',
    description: 'Movement, resize, collapse, and fullscreen controls disabled.',
    props: [
      { name: 'allowMovement', value: 'false' },
      { name: 'allowResize', value: 'false' },
      { name: 'allowCollapse', value: 'false' },
      { name: 'allowFullscreen', value: 'false' },
    ],
    render: <LockedGridDemo />,
  },
  {
    title: 'GridLayout controlled',
    description: 'Host-owned layout state and onLayoutChange handler.',
    props: [
      { name: 'layout', value: 'GridPanelState[]' },
      { name: 'onLayoutChange', value: 'setLayout' },
    ],
    render: <ControlledLayoutDemo />,
  },
  {
    title: 'GridLayout panel actions',
    description: 'Host-rendered panel actions and custom body class.',
    props: [
      { name: 'renderPanelActions', value: '(panel, state) => ReactNode' },
      { name: 'panel.bodyClassName', value: '"min-h-[300px] flex flex-col"' },
    ],
    render: <GridLayoutDemo />,
  },
  {
    title: 'DynamicPanel standalone',
    description: 'Panel chrome and controls without GridLayout.',
    props: [
      { name: 'panel', value: 'GridPanelDefinition' },
      { name: 'state', value: 'GridPanelState' },
      { name: 'onToggleCollapse/onCycleWidth', value: 'host callbacks' },
    ],
    render: <DynamicPanelDemo />,
  },
];

export const PageLayout: Story = {
  render: function PageLayoutStory() {
    return (
      <StoryShell title="Page layout" description="Page, PageHeader, and PageContainer usage.">
        <Section title="Page cases" description="Shell, sidebar, slots, standalone header, and standalone container.">
          <CaseGrid cases={pageCases} />
        </Section>
      </StoryShell>
    );
  },
};

export const SidebarLayout: Story = {
  render: function SidebarLayoutStory() {
    return (
      <StoryShell title="Sidebar layout" description="Sidebar item, active, disabled, children, header, and footer patterns.">
        <Section title="Sidebar cases" description="Navigation list with icons, badges, descriptions, and custom children.">
          <CaseGrid cases={sidebarCases} />
        </Section>
      </StoryShell>
    );
  },
};

export const GridAndPanelLayouts: Story = {
  render: function GridAndPanelLayoutsStory() {
    return (
      <StoryShell title="GridLayout and DynamicPanel" description="Movable panel grid and standalone panel chrome.">
        <Section title="Grid and panel cases" description="Default, locked, controlled, action slots, and standalone panel usage.">
          <CaseGrid cases={gridCases} />
        </Section>
      </StoryShell>
    );
  },
};
