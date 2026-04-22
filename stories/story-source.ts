export function docsSource(code: string, description?: string) {
  return {
    docs: {
      description: description ? { story: description } : undefined,
      source: {
        code: code.trim(),
        language: 'tsx',
        type: 'code',
      },
    },
  };
}

export const pageLayoutSource = `
import { Button, Card, Page, PageContainer, PageHeader, Sidebar, type SidebarGroup } from '@react/ui';
import '@react/ui/styles.css';

const sidebarGroups: SidebarGroup[] = [
  {
    label: 'WORKSPACE CONFIG',
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'strategy', label: 'Strategy' },
      { id: 'execution', label: 'Execution Preview' },
    ],
  },
];

export function Example() {
  return (
    <Page
      title="Workspace"
      description="Generic page shell."
      actions={<Button size="sm">Action</Button>}
      sidebar={<Sidebar groups={sidebarGroups} activeId="overview" collapsible />}
      contentClassName="space-y-4"
    >
      <PageHeader title="Standalone header" subtitle="Composable header primitive." />
      <PageContainer>
        <Card>Page children render here.</Card>
      </PageContainer>
    </Page>
  );
}
`;

export const sidebarLayoutSource = `
import { useState } from 'react';
import { Badge, Icon, Sidebar, type SidebarGroup } from '@react/ui';
import '@react/ui/styles.css';

const groups: SidebarGroup[] = [
  {
    label: 'WORKSPACE CONFIG',
    items: [
      { id: 'overview', label: 'Overview', icon: <Icon name="check" /> },
      { id: 'strategy', label: 'Strategy', icon: <Icon name="bars" /> },
      { id: 'execution', label: 'Execution Preview', icon: <Icon name="trendup" /> },
    ],
  },
];

export function Example() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar
      groups={groups}
      activeId="overview"
      collapsible
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
      collapsedWidthClassName="w-[92px] min-w-[92px]"
      expandedWidthClassName="w-[360px] min-w-[220px]"
      header={<div>Edit navigation</div>}
      footer={<Badge>3 sections</Badge>}
    />
  );
}
`;

export const gridLayoutSource = `
import { Button, Card, ChipCard, GridLayout, Table, ToggleCard, type TableColumn } from '@react/ui';
import '@react/ui/styles.css';

const rows = [
  { id: 'one', name: 'Overview refresh', owner: 'Mira Chen', state: 'Ready' },
  { id: 'two', name: 'Permission audit', owner: 'Omar Malik', state: 'Review' },
];

const columns: TableColumn<(typeof rows)[number]>[] = [
  { id: 'name', label: 'Name', kind: 'text', width: 200 },
  { id: 'owner', label: 'Owner', kind: 'text', width: 140 },
  { id: 'state', label: 'State', kind: 'enum', width: 120 },
];

export function Example() {
  return (
    <GridLayout
      allowMovement
      allowResize
      allowCollapse
      allowFullscreen
      panels={[
        {
          id: 'summary',
          title: 'Summary',
          defaultWidth: 'half',
          content: <ChipCard title="Open" value="24" helper="Items" />,
        },
        {
          id: 'settings',
          title: 'Settings',
          defaultWidth: 'half',
          content: <ToggleCard defaultChecked title="Auto refresh" description="Keep data current." />,
        },
        {
          id: 'table',
          title: 'Table',
          defaultWidth: 'full',
          content: <Table rows={rows} columns={columns} rowKey={(row) => row.id} searchable />,
        },
      ]}
      renderPanelActions={(panel) => (panel.id === 'settings' ? <Button size="sm">Validate</Button> : null)}
    />
  );
}
`;

export const buttonSource = `
import { Button, Icon } from '@react/ui';
import '@react/ui/styles.css';

export function Example() {
  return (
    <Button
      variant="primary"
      size="md"
      leftIcon={<Icon name="save" className="h-4 w-4" />}
      rightIcon={<Icon name="chevron-right" className="h-4 w-4" />}
      leftIconClassName="text-current"
      rightIconClassName="text-current"
    >
      Save changes
    </Button>
  );
}
`;

export const selectBoxSource = `
import { useState } from 'react';
import { SelectBox, type SelectBoxOption } from '@react/ui';
import '@react/ui/styles.css';

const options: SelectBoxOption<string>[] = [
  { label: 'Design Systems', value: 'design', description: 'Reusable UI foundations' },
  { label: 'Platform', value: 'platform', description: 'Delivery and runtime' },
  { label: 'Research', value: 'research', description: 'Insights and measurement' },
];

export function Example() {
  const [value, setValue] = useState<string[]>(['design']);

  return (
    <SelectBox
      mode="multiple"
      label="Teams"
      value={value}
      onChange={setValue}
      options={options}
      searchable
      showSelectAll
      showClear
    />
  );
}
`;

export const fieldsSource = `
import { DateTimeSelector, NumberInput, Text, TextArea } from '@react/ui';
import '@react/ui/styles.css';

export function Example() {
  return (
    <div className="space-y-4">
      <Text label="Workspace name" placeholder="Quarterly planning" description="Shown beside the input." />
      <TextArea label="Notes" rows={4} placeholder="Add context" />
      <NumberInput label="Amount" prefix="$" defaultValue={1250} />
      <DateTimeSelector label="Start time" value="2026-04-19T10:30" />
    </div>
  );
}
`;

export const tableSource = `
import { Badge, Button, Table, type TableColumn } from '@react/ui';
import '@react/ui/styles.css';

interface Row {
  id: string;
  name: string;
  owner: string;
  status: 'Ready' | 'Review' | 'Blocked';
  score: number;
}

const rows: Row[] = [
  { id: 'one', name: 'Overview', owner: 'Mira Chen', status: 'Ready', score: 92 },
  { id: 'two', name: 'Strategy', owner: 'Omar Malik', status: 'Review', score: 78 },
];

const columns: TableColumn<Row>[] = [
  { id: 'name', label: 'Name', kind: 'text', width: 180, groupId: 'base', groupLabel: 'Base' },
  { id: 'owner', label: 'Owner', kind: 'text', width: 150, groupId: 'base', groupLabel: 'Base' },
  {
    id: 'status',
    label: 'Status',
    kind: 'enum',
    width: 130,
    groupId: 'review',
    groupLabel: 'Review state',
    renderCell: (row) => <Badge>{row.status}</Badge>,
  },
  { id: 'score', label: 'Score', kind: 'number', width: 110, align: 'right', groupId: 'review', groupLabel: 'Review state' },
];

export function Example() {
  return (
    <Table
      rows={rows}
      columns={columns}
      rowKey={(row) => row.id}
      searchable
      allowColumnResize
      allowColumnReorder
      persistence={{ namespace: 'demo:tables' }}
      selection={{ mode: 'multi' }}
      defaultExpandedRowIds={['one']}
      renderExpandedContent={(row) => <div>Expanded content for {row.name}</div>}
      renderSelectionActions={({ selectedRows }) => <Button size="sm">Selected {selectedRows.length}</Button>}
    />
  );
}
`;

export const loggerSource = `
import { Logger, type LoggerEntry } from '@react/ui';
import '@react/ui/styles.css';

const entries: LoggerEntry[] = [
  { id: 'one', level: 'INFO', category: 'system', source: 'demo', message: 'Preview started.' },
  { id: 'two', level: 'WARN', category: 'review', source: 'checks', message: 'Review needed.', payload: { owner: 'team' } },
];

export function Example() {
  return <Logger entries={entries} showHeader showToolbar autoScroll />;
}
`;

export const notificationSource = `
import { NotificationViewport, type NotificationItem } from '@react/ui';
import '@react/ui/styles.css';

const items: NotificationItem[] = [
  { id: 'saved', tone: 'success', title: 'Saved', message: 'The update is complete.', timeout: null },
];

export function Example() {
  return <NotificationViewport items={items} placement="top-right" onDismiss={(id) => console.log(id)} />;
}
`;
