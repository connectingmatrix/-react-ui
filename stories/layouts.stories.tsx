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
import { docsSource, gridLayoutSource, pageLayoutSource, sidebarLayoutSource } from './story-source';

const meta: Meta = {
  title: 'React UI/Layouts',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const accentOptions = ['default', 'teal', 'warning', 'danger', 'neutral', 'tailadmin', 'light-blue', 'light-success', 'light-warning', 'light-danger', 'light-neutral'];

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

interface PageLayoutArgs {
  pageTitle: string;
  pageName: string;
  pageDescription: string;
  actionLabel: string;
  useActionButtonsAlias: boolean;
  showSidebar: boolean;
  showTopbar: boolean;
  showFooter: boolean;
  pageAccentKey: string;
  pageClassName: string;
  headerClassName: string;
  contentClassName: string;
  sidebarClassName: string;
  headerTitle: string;
  headerSubtitle: string;
  headerActionLabel: string;
  headerAccentKey: string;
  headerClassSlot: string;
  containerAccentKey: string;
  containerClassName: string;
}

export const PageLayout: StoryObj<PageLayoutArgs> = {
  args: {
    pageTitle: 'Workspace',
    pageName: '',
    pageDescription: 'Generic page shell.',
    actionLabel: 'Action',
    useActionButtonsAlias: false,
    showSidebar: true,
    showTopbar: false,
    showFooter: true,
    pageAccentKey: 'default',
    pageClassName: 'min-h-[520px]',
    headerClassName: '',
    contentClassName: 'space-y-4',
    sidebarClassName: '',
    headerTitle: 'Standalone header',
    headerSubtitle: 'Composable header primitive.',
    headerActionLabel: 'Header action',
    headerAccentKey: 'default',
    headerClassSlot: '',
    containerAccentKey: 'default',
    containerClassName: '',
  },
  argTypes: {
    pageTitle: { name: 'title', control: 'text', table: { category: 'Page' } },
    pageName: { name: 'pageName', control: 'text', table: { category: 'Page aliases' } },
    pageDescription: { name: 'description', control: 'text', table: { category: 'Page' } },
    actionLabel: { name: 'actions', control: 'text', table: { category: 'Page' } },
    useActionButtonsAlias: { name: 'actionButtons', control: 'boolean', table: { category: 'Page aliases' } },
    showSidebar: { name: 'sidebar', control: 'boolean', table: { category: 'Page' } },
    showTopbar: { name: 'topbar', control: 'boolean', table: { category: 'Page' } },
    showFooter: { name: 'footer', control: 'boolean', table: { category: 'Page' } },
    pageAccentKey: { name: 'accentKey', control: 'select', options: accentOptions, table: { category: 'Page' } },
    pageClassName: { name: 'className', control: 'text', table: { category: 'Page classes' } },
    headerClassName: { name: 'headerClassName', control: 'text', table: { category: 'Page classes' } },
    contentClassName: { name: 'contentClassName', control: 'text', table: { category: 'Page' } },
    sidebarClassName: { name: 'sidebarClassName', control: 'text', table: { category: 'Page classes' } },
    headerTitle: { name: 'PageHeader.title', control: 'text', table: { category: 'PageHeader' } },
    headerSubtitle: { name: 'PageHeader.subtitle', control: 'text', table: { category: 'PageHeader aliases' } },
    headerActionLabel: { name: 'PageHeader.actions', control: 'text', table: { category: 'PageHeader' } },
    headerAccentKey: { name: 'PageHeader.accentKey', control: 'select', options: accentOptions, table: { category: 'PageHeader' } },
    headerClassSlot: { name: 'PageHeader.className', control: 'text', table: { category: 'PageHeader classes' } },
    containerAccentKey: { name: 'PageContainer.accentKey', control: 'select', options: accentOptions, table: { category: 'PageContainer' } },
    containerClassName: { name: 'PageContainer.className', control: 'text', table: { category: 'PageContainer classes' } },
  },
  parameters: docsSource(pageLayoutSource, 'Exact Page, PageHeader, PageContainer, and Sidebar composition code.'),
  render: function PageLayoutStory(args) {
    return (
      <StoryShell title="Page layout" description="Page, PageHeader, and PageContainer usage.">
        <Section title="Controlled Page example" description="These controls map to Page props and update the rendered shell.">
          <Page
            title={args.pageTitle}
            pageName={args.pageName || undefined}
            description={args.pageDescription}
            actions={!args.useActionButtonsAlias ? <Button size="sm">{args.actionLabel}</Button> : undefined}
            actionButtons={args.useActionButtonsAlias ? <Button size="sm">{args.actionLabel}</Button> : undefined}
            topbar={args.showTopbar ? <div className="border-b border-white/8 bg-black/20 px-4 py-2 text-sm text-white">Topbar slot</div> : null}
            footer={args.showFooter ? <div className="text-sm text-[var(--rui-text-secondary)]">Footer slot</div> : null}
            sidebar={args.showSidebar ? <SidebarDemo /> : null}
            accentKey={args.pageAccentKey}
            headerClassName={args.headerClassName || undefined}
            contentClassName={args.contentClassName}
            sidebarClassName={args.sidebarClassName || undefined}
            className={args.pageClassName || undefined}
          >
            <PageHeader
              title={args.headerTitle}
              subtitle={args.headerSubtitle}
              actions={<Button size="sm">{args.headerActionLabel}</Button>}
              accentKey={args.headerAccentKey}
              className={args.headerClassSlot || undefined}
            />
            <PageContainer accentKey={args.containerAccentKey} className={args.containerClassName || undefined}>
              <Card>Page children render here.</Card>
            </PageContainer>
          </Page>
        </Section>
        <Section title="Page cases" description="Shell, sidebar, slots, standalone header, and standalone container.">
          <CaseGrid cases={pageCases} />
        </Section>
      </StoryShell>
    );
  },
};

interface SidebarLayoutArgs {
  activeId: string;
  collapsible: boolean;
  collapsed: boolean;
  defaultCollapsed: boolean;
  header: string;
  collapsedHeader: string;
  footer: string;
  showChildren: boolean;
  customCollapseButton: boolean;
  collapseTitle: string;
  expandTitle: string;
  collapsedWidthClassName: string;
  expandedWidthClassName: string;
  accentKey: string;
  className: string;
  itemClassName: string;
  activeItemClassName: string;
  groupClassName: string;
  groupLabelClassName: string;
  headerClassName: string;
  footerClassName: string;
  collapseButtonClassName: string;
}

export const SidebarLayout: StoryObj<SidebarLayoutArgs> = {
  args: {
    activeId: 'overview',
    collapsible: true,
    collapsed: false,
    defaultCollapsed: false,
    header: 'Edit navigation',
    collapsedHeader: 'Nav',
    footer: '3 sections',
    showChildren: false,
    customCollapseButton: false,
    collapseTitle: 'Collapse sidebar',
    expandTitle: 'Expand sidebar',
    collapsedWidthClassName: 'w-[92px] min-w-[92px]',
    expandedWidthClassName: 'w-[360px] min-w-[220px]',
    accentKey: 'default',
    className: '',
    itemClassName: '',
    activeItemClassName: '',
    groupClassName: '',
    groupLabelClassName: '',
    headerClassName: '',
    footerClassName: '',
    collapseButtonClassName: '',
  },
  argTypes: {
    activeId: { control: 'select', options: ['overview', 'strategy', 'execution', 'schedule', 'backtesting', 'workspace'], table: { category: 'Sidebar' } },
    collapsible: { control: 'boolean', table: { category: 'Sidebar' } },
    collapsed: { control: 'boolean', table: { category: 'Sidebar' } },
    defaultCollapsed: { control: 'boolean', table: { category: 'Sidebar collapse' } },
    header: { control: 'text', table: { category: 'Sidebar' } },
    collapsedHeader: { control: 'text', table: { category: 'Sidebar slots' } },
    footer: { control: 'text', table: { category: 'Sidebar' } },
    showChildren: { name: 'children', control: 'boolean', table: { category: 'Sidebar slots' } },
    customCollapseButton: { name: 'renderCollapseButton', control: 'boolean', table: { category: 'Sidebar slots' } },
    collapseTitle: { control: 'text', table: { category: 'Sidebar' } },
    expandTitle: { control: 'text', table: { category: 'Sidebar' } },
    collapsedWidthClassName: { control: 'text', table: { category: 'Sidebar' } },
    expandedWidthClassName: { control: 'text', table: { category: 'Sidebar' } },
    accentKey: { control: 'select', options: accentOptions, table: { category: 'Sidebar' } },
    className: { control: 'text', table: { category: 'Sidebar classes' } },
    itemClassName: { control: 'text', table: { category: 'Sidebar classes' } },
    activeItemClassName: { control: 'text', table: { category: 'Sidebar classes' } },
    groupClassName: { control: 'text', table: { category: 'Sidebar classes' } },
    groupLabelClassName: { control: 'text', table: { category: 'Sidebar classes' } },
    headerClassName: { control: 'text', table: { category: 'Sidebar classes' } },
    footerClassName: { control: 'text', table: { category: 'Sidebar classes' } },
    collapseButtonClassName: { control: 'text', table: { category: 'Sidebar classes' } },
  },
  parameters: docsSource(sidebarLayoutSource, 'Exact Sidebar grouped navigation and collapse code.'),
  render: function SidebarLayoutStory(args) {
    return (
      <StoryShell title="Sidebar layout" description="Sidebar item, active, disabled, children, header, and footer patterns.">
        <Section title="Controlled Sidebar example" description="These controls map to Sidebar props and update collapse, active item, widths, and slots.">
          <Sidebar
            groups={sidebarGroups}
            activeId={args.activeId}
            collapsible={args.collapsible}
            collapsed={args.collapsed}
            defaultCollapsed={args.defaultCollapsed}
            collapseTitle={args.collapseTitle}
            expandTitle={args.expandTitle}
            collapsedWidthClassName={args.collapsedWidthClassName}
            expandedWidthClassName={args.expandedWidthClassName}
            header={<div className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--rui-text-tertiary)]">{args.header}</div>}
            collapsedHeader={<div className="text-xs font-semibold text-[var(--rui-text-tertiary)]">{args.collapsedHeader}</div>}
            footer={args.footer ? <Badge>{args.footer}</Badge> : null}
            renderCollapseButton={
              args.customCollapseButton
                ? ({ collapsed, buttonProps }) => (
                    <Button variant="icon" size="sm" className="h-8 w-8 px-0" {...buttonProps}>
                      <Icon name={collapsed ? 'sidebar-open' : 'sidebar-collapsed'} className="h-4 w-4" />
                    </Button>
                  )
                : undefined
            }
            accentKey={args.accentKey}
            className={args.className || undefined}
            itemClassName={args.itemClassName || undefined}
            activeItemClassName={args.activeItemClassName || undefined}
            groupClassName={args.groupClassName || undefined}
            groupLabelClassName={args.groupLabelClassName || undefined}
            headerClassName={args.headerClassName || undefined}
            footerClassName={args.footerClassName || undefined}
            collapseButtonClassName={args.collapseButtonClassName || undefined}
          >
            {args.showChildren ? <Card padded="sm">Sidebar children slot</Card> : null}
          </Sidebar>
        </Section>
        <Section title="Sidebar cases" description="Navigation list with icons, badges, descriptions, and custom children.">
          <CaseGrid cases={sidebarCases} />
        </Section>
      </StoryShell>
    );
  },
};

interface GridAndPanelArgs {
  allowMovement: boolean;
  allowResize: boolean;
  allowCollapse: boolean;
  allowFullscreen: boolean;
  persistenceKey: string;
  storageNamespace: string;
  renderPanelActions: boolean;
  renderHeader: boolean;
  renderPanelControls: boolean;
  renderMoveHandle: boolean;
  renderResizeButton: boolean;
  renderCollapseButton: boolean;
  renderResetButton: boolean;
  renderFullscreenButton: boolean;
  searchableTable: boolean;
  panelTitle: string;
  panelDescription: string;
  panelDefaultWidth: 'full' | 'half' | 'third';
  accentKey: string;
  className: string;
  panelClassName: string;
  panelHeaderClassName: string;
  panelBodyClassName: string;
  panelActionsClassName: string;
}

export const GridAndPanelLayouts: StoryObj<GridAndPanelArgs> = {
  args: {
    allowMovement: true,
    allowResize: true,
    allowCollapse: true,
    allowFullscreen: true,
    persistenceKey: '',
    storageNamespace: 'storybook:layout',
    renderPanelActions: true,
    renderHeader: false,
    renderPanelControls: false,
    renderMoveHandle: false,
    renderResizeButton: false,
    renderCollapseButton: false,
    renderResetButton: false,
    renderFullscreenButton: false,
    searchableTable: true,
    panelTitle: 'Summary',
    panelDescription: 'Movable and resizable summary panel.',
    panelDefaultWidth: 'half',
    accentKey: 'default',
    className: '',
    panelClassName: '',
    panelHeaderClassName: '',
    panelBodyClassName: '',
    panelActionsClassName: '',
  },
  argTypes: {
    allowMovement: { control: 'boolean', table: { category: 'GridLayout' } },
    allowResize: { control: 'boolean', table: { category: 'GridLayout' } },
    allowCollapse: { control: 'boolean', table: { category: 'GridLayout' } },
    allowFullscreen: { control: 'boolean', table: { category: 'GridLayout' } },
    persistenceKey: { control: 'text', table: { category: 'GridLayout persistence' } },
    storageNamespace: { control: 'text', table: { category: 'GridLayout persistence' } },
    renderPanelActions: { control: 'boolean', table: { category: 'GridLayout render props' } },
    renderHeader: { control: 'boolean', table: { category: 'GridLayout render props' } },
    renderPanelControls: { control: 'boolean', table: { category: 'GridLayout render props' } },
    renderMoveHandle: { control: 'boolean', table: { category: 'DynamicPanel button renderers' } },
    renderResizeButton: { control: 'boolean', table: { category: 'DynamicPanel button renderers' } },
    renderCollapseButton: { control: 'boolean', table: { category: 'DynamicPanel button renderers' } },
    renderResetButton: { control: 'boolean', table: { category: 'DynamicPanel button renderers' } },
    renderFullscreenButton: { control: 'boolean', table: { category: 'DynamicPanel button renderers' } },
    searchableTable: { name: 'Table.searchable', control: 'boolean', table: { category: 'GridLayout panels' } },
    panelTitle: { name: 'panel.title', control: 'text', table: { category: 'DynamicPanel' } },
    panelDescription: { name: 'panel.description', control: 'text', table: { category: 'DynamicPanel' } },
    panelDefaultWidth: { name: 'panel.defaultWidth', control: 'select', options: ['full', 'half', 'third'], table: { category: 'GridPanelDefinition' } },
    accentKey: { control: 'select', options: accentOptions, table: { category: 'GridLayout' } },
    className: { control: 'text', table: { category: 'GridLayout classes' } },
    panelClassName: { control: 'text', table: { category: 'GridLayout classes' } },
    panelHeaderClassName: { control: 'text', table: { category: 'GridLayout classes' } },
    panelBodyClassName: { control: 'text', table: { category: 'GridLayout classes' } },
    panelActionsClassName: { control: 'text', table: { category: 'GridLayout classes' } },
  },
  parameters: docsSource(gridLayoutSource, 'Exact GridLayout and DynamicPanel composition code.'),
  render: function GridAndPanelLayoutsStory(args) {
    return (
      <StoryShell title="GridLayout and DynamicPanel" description="Movable panel grid and standalone panel chrome.">
        <Section title="Controlled GridLayout example" description="These controls map to GridLayout props and panel definitions.">
          <GridLayout
            allowMovement={args.allowMovement}
            allowResize={args.allowResize}
            allowCollapse={args.allowCollapse}
            allowFullscreen={args.allowFullscreen}
            persistenceKey={args.persistenceKey || undefined}
            storageNamespace={args.storageNamespace || undefined}
            renderPanelActions={args.renderPanelActions ? (panel) => (panel.id === 'summary' ? <Button size="sm">Validate</Button> : null) : undefined}
            renderHeader={args.renderHeader ? (panel) => <div className="text-sm font-semibold text-white">{panel.title}</div> : undefined}
            renderPanelControls={args.renderPanelControls ? ({ controls }) => <div className="flex items-center gap-1">{controls}</div> : undefined}
            renderMoveHandle={
              args.renderMoveHandle
                ? ({ defaultButton }) => (
                    <span title="Custom move handle" className="inline-flex">
                      {defaultButton}
                    </span>
                  )
                : undefined
            }
            renderResizeButton={args.renderResizeButton ? ({ defaultButton }) => defaultButton : undefined}
            renderCollapseButton={args.renderCollapseButton ? ({ defaultButton }) => defaultButton : undefined}
            renderResetButton={args.renderResetButton ? ({ defaultButton }) => defaultButton : undefined}
            renderFullscreenButton={args.renderFullscreenButton ? ({ defaultButton }) => defaultButton : undefined}
            accentKey={args.accentKey}
            className={args.className || undefined}
            panelClassName={args.panelClassName || undefined}
            panelHeaderClassName={args.panelHeaderClassName || undefined}
            panelBodyClassName={args.panelBodyClassName || undefined}
            panelActionsClassName={args.panelActionsClassName || undefined}
            panels={[
              {
                id: 'summary',
                title: args.panelTitle,
                description: args.panelDescription,
                defaultWidth: args.panelDefaultWidth,
                content: <ChipCard title="Open" value="24" helper="Items" />,
              },
              {
                id: 'table',
                title: 'Table',
                defaultWidth: 'half',
                content: <Table rows={rows} columns={columns} rowKey={(row) => row.id} searchable={args.searchableTable} />,
              },
            ]}
          />
        </Section>
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
