import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';
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
  type SidebarGroup,
  type TableColumn,
} from '../src/index';
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

const sidebarGroups: SidebarGroup[] = [
  {
    id: 'config',
    label: 'WORKSPACE CONFIG',
    items: [
      { id: 'overview', label: 'Overview', icon: <Icon name="check" className="h-5 w-5" /> },
      { id: 'strategy', label: 'Strategy', icon: <Icon name="bars" className="h-5 w-5" /> },
      { id: 'execution', label: 'Execution Preview', icon: <Icon name="trendup" className="h-5 w-5" /> },
    ],
  },
  {
    id: 'operations',
    label: 'OPERATIONS',
    items: [
      { id: 'schedule', label: 'Risk & Schedule', icon: <Icon name="swap" className="h-5 w-5" /> },
      { id: 'backtesting', label: 'Backtesting', icon: <Icon name="chart" className="h-5 w-5" /> },
    ],
  },
  {
    id: 'live',
    label: 'LIVE VIEW',
    items: [{ id: 'workspace', label: 'Live Workspace', icon: <Icon name="panel" className="h-5 w-5" /> }],
  },
];

function SidebarDemo() {
  const [activeId, setActiveId] = useState('overview');
  return (
    <Sidebar
      collapsible
      activeId={activeId}
      onSelect={setActiveId}
      header={<div className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--rui-text-tertiary)]">Edit navigation</div>}
      footer={<Badge>4</Badge>}
      groups={sidebarGroups}
    />
  );
}

function CollapsibleSidebarDemo() {
  const [activeId, setActiveId] = useState('overview');
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sidebar
      collapsible
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
      activeId={activeId}
      onSelect={setActiveId}
      header={<div className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--rui-text-tertiary)]">Edit navigation</div>}
      groups={sidebarGroups}
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
    title: 'Sidebar grouped items',
    description: 'Grouped navigation with active item, icons, header, footer, and onSelect.',
    props: [
      { name: 'groups', value: 'SidebarGroup[]' },
      { name: 'activeId', value: '"overview"' },
      { name: 'onSelect', value: '(id, item) => void' },
    ],
    render: <SidebarDemo />,
  },
  {
    title: 'Sidebar collapse',
    description: 'Controlled expand/collapse support matching the narrow side panel pattern.',
    props: [
      { name: 'collapsible', value: 'true' },
      { name: 'collapsed', value: 'collapsed' },
      { name: 'onCollapsedChange', value: 'setCollapsed' },
      { name: 'collapsedWidthClassName', value: '"w-[92px] min-w-[92px]"' },
      { name: 'expandedWidthClassName', value: '"w-[360px] min-w-[220px]"' },
    ],
    render: <CollapsibleSidebarDemo />,
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

interface LayoutControlsArgs {
  pageTitle: string;
  pageDescription: string;
  pageContentClassName: string;
  sidebarHeader: string;
  sidebarFooter: string;
  sidebarActiveId: string;
  sidebarCollapsible: boolean;
  sidebarCollapsed: boolean;
  sidebarCollapseTitle: string;
  sidebarExpandTitle: string;
  sidebarCollapsedWidthClassName: string;
  sidebarExpandedWidthClassName: string;
  gridAllowMovement: boolean;
  gridAllowResize: boolean;
  gridAllowCollapse: boolean;
  gridAllowFullscreen: boolean;
  panelTitle: string;
  panelDescription: string;
}

function LayoutControlsCanvas(args: LayoutControlsArgs) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(args.sidebarCollapsed);

  useEffect(() => {
    setSidebarCollapsed(args.sidebarCollapsed);
  }, [args.sidebarCollapsed]);

  return (
    <Page
      title={args.pageTitle}
      description={args.pageDescription}
      actions={<Button size="sm">Action</Button>}
      contentClassName={args.pageContentClassName}
      sidebar={
        <Sidebar
          groups={sidebarGroups}
          activeId={args.sidebarActiveId}
          collapsible={args.sidebarCollapsible}
          collapsed={sidebarCollapsed}
          onCollapsedChange={setSidebarCollapsed}
          collapseTitle={args.sidebarCollapseTitle}
          expandTitle={args.sidebarExpandTitle}
          collapsedWidthClassName={args.sidebarCollapsedWidthClassName}
          expandedWidthClassName={args.sidebarExpandedWidthClassName}
          header={<div className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--rui-text-tertiary)]">{args.sidebarHeader}</div>}
          footer={args.sidebarFooter ? <Badge>{args.sidebarFooter}</Badge> : null}
        />
      }
      className="min-h-[720px]"
    >
      <GridLayout
        allowMovement={args.gridAllowMovement}
        allowResize={args.gridAllowResize}
        allowCollapse={args.gridAllowCollapse}
        allowFullscreen={args.gridAllowFullscreen}
        panels={[
          {
            id: 'controlled-panel',
            title: args.panelTitle,
            description: args.panelDescription,
            defaultWidth: 'full',
            content: <Card>Use the Controls tab to adjust Page, Sidebar, GridLayout, and DynamicPanel props grouped by component.</Card>,
          },
        ]}
      />
    </Page>
  );
}

export const LayoutControls: StoryObj<LayoutControlsArgs> = {
  name: 'Grouped layout controls',
  args: {
    pageTitle: 'Config workspace',
    pageDescription: 'A page shell with a collapsible side panel and movable content panels.',
    pageContentClassName: 'space-y-5',
    sidebarHeader: 'Edit navigation',
    sidebarFooter: '3 sections',
    sidebarActiveId: 'overview',
    sidebarCollapsible: true,
    sidebarCollapsed: false,
    sidebarCollapseTitle: 'Collapse sidebar',
    sidebarExpandTitle: 'Expand sidebar',
    sidebarCollapsedWidthClassName: 'w-[92px] min-w-[92px]',
    sidebarExpandedWidthClassName: 'w-[360px] min-w-[220px]',
    gridAllowMovement: true,
    gridAllowResize: true,
    gridAllowCollapse: true,
    gridAllowFullscreen: true,
    panelTitle: 'Identity',
    panelDescription: 'Panel chrome with package-provided controls.',
  },
  argTypes: {
    pageTitle: { control: 'text', table: { category: 'Page', subcategory: 'Content' } },
    pageDescription: { control: 'text', table: { category: 'Page', subcategory: 'Content' } },
    pageContentClassName: { control: 'text', table: { category: 'Page', subcategory: 'Slots' } },
    sidebarHeader: { control: 'text', table: { category: 'Sidebar', subcategory: 'Slots' } },
    sidebarFooter: { control: 'text', table: { category: 'Sidebar', subcategory: 'Slots' } },
    sidebarActiveId: {
      control: 'select',
      options: ['overview', 'strategy', 'execution', 'schedule', 'backtesting', 'workspace'],
      table: { category: 'Sidebar', subcategory: 'Selection' },
    },
    sidebarCollapsible: { control: 'boolean', table: { category: 'Sidebar', subcategory: 'Collapse' } },
    sidebarCollapsed: { control: 'boolean', table: { category: 'Sidebar', subcategory: 'Collapse' } },
    sidebarCollapseTitle: { control: 'text', table: { category: 'Sidebar', subcategory: 'Collapse' } },
    sidebarExpandTitle: { control: 'text', table: { category: 'Sidebar', subcategory: 'Collapse' } },
    sidebarCollapsedWidthClassName: { control: 'text', table: { category: 'Sidebar', subcategory: 'Layout' } },
    sidebarExpandedWidthClassName: { control: 'text', table: { category: 'Sidebar', subcategory: 'Layout' } },
    gridAllowMovement: { control: 'boolean', table: { category: 'GridLayout', subcategory: 'Controls' } },
    gridAllowResize: { control: 'boolean', table: { category: 'GridLayout', subcategory: 'Controls' } },
    gridAllowCollapse: { control: 'boolean', table: { category: 'GridLayout', subcategory: 'Controls' } },
    gridAllowFullscreen: { control: 'boolean', table: { category: 'GridLayout', subcategory: 'Controls' } },
    panelTitle: { control: 'text', table: { category: 'DynamicPanel', subcategory: 'Header' } },
    panelDescription: { control: 'text', table: { category: 'DynamicPanel', subcategory: 'Header' } },
  },
  render: (args) => <LayoutControlsCanvas {...args} />,
};
