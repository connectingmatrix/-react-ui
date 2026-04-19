import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import {
  AccentProvider,
  Badge,
  Banner,
  Button,
  Card,
  ChipCard,
  DateTimeSelector,
  GridLayout,
  Icon,
  Logger,
  NotificationViewport,
  NumberInput,
  Page,
  RadioCard,
  SelectBox,
  Sidebar,
  Switch,
  Table,
  Text,
  TextArea,
  ToggleCard,
  Tooltip,
  type AccentKey,
  type LoggerEntry,
  type NotificationItem,
  type TableColumn,
} from '../src/index';

const meta: Meta = {
  title: 'React UI/Grouped Props Controls',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

interface ControlRow {
  id: string;
  name: string;
  owner: string;
  status: 'Ready' | 'Review' | 'Blocked';
  score: number;
}

const controlRows: ControlRow[] = [
  { id: 'one', name: 'Overview', owner: 'Mira Chen', status: 'Ready', score: 92 },
  { id: 'two', name: 'Strategy', owner: 'Omar Malik', status: 'Review', score: 78 },
  { id: 'three', name: 'Execution', owner: 'Ari Lane', status: 'Blocked', score: 61 },
];

const controlColumns: TableColumn<ControlRow>[] = [
  { id: 'name', label: 'Name', kind: 'text', width: 180, renderCell: (row) => <span className="font-semibold text-[var(--rui-text-primary)]">{row.name}</span> },
  { id: 'owner', label: 'Owner', kind: 'text', width: 140 },
  {
    id: 'status',
    label: 'Status',
    kind: 'enum',
    width: 130,
    getEnumOptions: () => ['Ready', 'Review', 'Blocked'].map((value) => ({ label: value, value })),
    renderCell: (row) => <Badge tone={row.status === 'Ready' ? 'success' : row.status === 'Blocked' ? 'danger' : 'warning'}>{row.status}</Badge>,
  },
  { id: 'score', label: 'Score', kind: 'number', width: 110, align: 'right' },
];

const loggerEntries: LoggerEntry[] = [
  { id: 'log-1', level: 'INFO', category: 'system', source: 'demo', message: 'Loaded reusable props controls.', createdAt: '2026-04-19T10:00:00Z' },
  { id: 'log-2', level: 'WARN', category: 'review', source: 'demo', message: 'One sample row needs review.', payload: { id: 'two' }, createdAt: '2026-04-19T10:05:00Z' },
];

const notifications: NotificationItem[] = [{ id: 'note-1', tone: 'accent', title: 'Preview ready', message: 'Controls update the rendered examples.', timeout: null }];

interface GroupedControlsArgs {
  accentKey: AccentKey;
  buttonVariant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'subtle' | 'icon';
  buttonSize: 'sm' | 'md' | 'lg';
  buttonLoading: boolean;
  buttonDisabled: boolean;
  buttonFullWidth: boolean;
  badgeTone: 'accent' | 'success' | 'warning' | 'danger' | 'neutral' | 'info';
  bannerTone: 'accent' | 'info' | 'success' | 'warning' | 'danger' | 'neutral';
  bannerTitle: string;
  cardPadded: false | 'sm' | 'md' | 'lg';
  chipTitle: string;
  chipValue: string;
  chipSelected: boolean;
  radioChecked: boolean;
  toggleChecked: boolean;
  switchChecked: boolean;
  iconName: string;
  tooltipContent: string;
  tooltipPlacement: 'top' | 'right' | 'bottom' | 'left';
  textLabel: string;
  textValue: string;
  textPlaceholder: string;
  textLabelPosition: 'top' | 'left';
  textError: string;
  textAreaValue: string;
  textAreaRows: number;
  numberValue: number;
  numberPrefix: string;
  numberSuffix: string;
  dateTimeType: 'datetime-local' | 'date' | 'time';
  dateTimeValue: string;
  selectMode: 'single' | 'multiple';
  selectSearchable: boolean;
  selectShowClear: boolean;
  selectShowSelectAll: boolean;
  tableSearchable: boolean;
  tableHideColumnControls: boolean;
  tableLoading: boolean;
  tableSelectable: boolean;
  tableExpanded: boolean;
  loggerShowHeader: boolean;
  loggerShowToolbar: boolean;
  loggerSearch: string;
  notificationPlacement: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  pageTitle: string;
  pageDescription: string;
  sidebarCollapsed: boolean;
  sidebarCollapsible: boolean;
  gridAllowMovement: boolean;
  gridAllowResize: boolean;
  gridAllowCollapse: boolean;
  gridAllowFullscreen: boolean;
}

const category = (name: string, subcategory?: string) => ({ category: name, subcategory });

function GroupedControlsCanvas(args: GroupedControlsArgs) {
  const [radioChecked, setRadioChecked] = useState(args.radioChecked);
  const [toggleChecked, setToggleChecked] = useState(args.toggleChecked);
  const [switchChecked, setSwitchChecked] = useState(args.switchChecked);
  const [textValue, setTextValue] = useState(args.textValue);
  const [textAreaValue, setTextAreaValue] = useState(args.textAreaValue);
  const [numberValue, setNumberValue] = useState<number | null>(args.numberValue);
  const [dateTimeValue, setDateTimeValue] = useState(args.dateTimeValue);
  const [selectValue, setSelectValue] = useState<string | null>('strategy');
  const [multiSelectValue, setMultiSelectValue] = useState<string[]>(['overview', 'execution']);

  useEffect(() => setRadioChecked(args.radioChecked), [args.radioChecked]);
  useEffect(() => setToggleChecked(args.toggleChecked), [args.toggleChecked]);
  useEffect(() => setSwitchChecked(args.switchChecked), [args.switchChecked]);
  useEffect(() => setTextValue(args.textValue), [args.textValue]);
  useEffect(() => setTextAreaValue(args.textAreaValue), [args.textAreaValue]);
  useEffect(() => setNumberValue(args.numberValue), [args.numberValue]);
  useEffect(() => setDateTimeValue(args.dateTimeValue), [args.dateTimeValue]);

  const selectOptions = [
    { label: 'Overview', value: 'overview', description: 'High level summary' },
    { label: 'Strategy', value: 'strategy', description: 'Rules and thresholds' },
    { label: 'Execution', value: 'execution', description: 'Preview and scheduling' },
  ];

  return (
    <AccentProvider accentKey={args.accentKey} className="min-h-screen bg-[var(--rui-bg-app)] p-5 text-[var(--rui-text-primary)]">
      <div className="mx-auto grid max-w-[1500px] gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Card padded={args.cardPadded} contentClassName="space-y-4">
          <h2 className="text-lg font-semibold text-[var(--rui-text-primary)]">Components</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant={args.buttonVariant} size={args.buttonSize} loading={args.buttonLoading} disabled={args.buttonDisabled} fullWidth={args.buttonFullWidth}>
              {args.buttonVariant === 'icon' ? <Icon name={args.iconName} className="h-4 w-4" /> : 'Button'}
            </Button>
            <Badge tone={args.badgeTone}>Badge</Badge>
            <Tooltip content={args.tooltipContent} placement={args.tooltipPlacement}>
              <Button variant="icon" className="h-9 w-9 px-0" aria-label="Tooltip target">
                <Icon name={args.iconName} className="h-4 w-4" />
              </Button>
            </Tooltip>
          </div>
          <Banner tone={args.bannerTone} title={args.bannerTitle}>
            Banner content follows the selected tone and accent tokens.
          </Banner>
          <div className="grid gap-3 md:grid-cols-2">
            <ChipCard title={args.chipTitle} value={args.chipValue} selected={args.chipSelected} />
            <RadioCard checked={radioChecked} onCheckedChange={setRadioChecked} title="RadioCard" description="Selectable card state." />
            <ToggleCard checked={toggleChecked} onCheckedChange={setToggleChecked} title="ToggleCard" description="Switch card state." />
            <Switch checked={switchChecked} onCheckedChange={setSwitchChecked} label="Switch" description="Binary inline control." />
          </div>
        </Card>

        <Card contentClassName="space-y-4">
          <h2 className="text-lg font-semibold text-[var(--rui-text-primary)]">Fields</h2>
          <Text
            label={args.textLabel}
            value={textValue}
            onChange={setTextValue}
            placeholder={args.textPlaceholder}
            labelPosition={args.textLabelPosition}
            error={args.textError || undefined}
          />
          <TextArea label="TextArea" value={textAreaValue} onChange={setTextAreaValue} rows={args.textAreaRows} />
          <NumberInput label="NumberInput" value={numberValue} onValueChange={setNumberValue} prefix={args.numberPrefix} suffix={args.numberSuffix} />
          <DateTimeSelector label="DateTimeSelector" type={args.dateTimeType} value={dateTimeValue} onChange={setDateTimeValue} />
          <SelectBox
            mode={args.selectMode}
            label="SelectBox"
            searchable={args.selectSearchable}
            showClear={args.selectShowClear}
            showSelectAll={args.selectShowSelectAll}
            options={selectOptions}
            value={args.selectMode === 'multiple' ? multiSelectValue : selectValue}
            onChange={(next) => (Array.isArray(next) ? setMultiSelectValue(next) : setSelectValue(next))}
          />
        </Card>

        <Card contentClassName="space-y-4 xl:col-span-2">
          <h2 className="text-lg font-semibold text-[var(--rui-text-primary)]">Elements</h2>
          <Table
            rows={controlRows}
            columns={controlColumns}
            rowKey={(row) => row.id}
            searchable={args.tableSearchable}
            hideColumnControls={args.tableHideColumnControls}
            loading={args.tableLoading}
            selection={args.tableSelectable ? { mode: 'multi', defaultSelectedKeys: ['two'] } : undefined}
            defaultExpandedRowIds={args.tableExpanded ? ['one'] : []}
            renderExpandedContent={(row) => <div className="text-sm text-[var(--rui-text-secondary)]">Expanded content for {row.name}</div>}
            tableId="grouped-props-controls-table"
          />
          <Logger entries={loggerEntries} showHeader={args.loggerShowHeader} showToolbar={args.loggerShowToolbar} search={args.loggerSearch} heightClassName="max-h-[240px]" />
          <NotificationViewport items={notifications} placement={args.notificationPlacement} onDismiss={() => undefined} />
        </Card>

        <Page
          title={args.pageTitle}
          description={args.pageDescription}
          sidebar={
            <Sidebar
              groups={[
                {
                  label: 'GROUP',
                  items: [
                    { id: 'overview', label: 'Overview', icon: <Icon name="grid" className="h-5 w-5" /> },
                    { id: 'settings', label: 'Settings', icon: <Icon name="settings" className="h-5 w-5" /> },
                  ],
                },
              ]}
              activeId="overview"
              collapsible={args.sidebarCollapsible}
              collapsed={args.sidebarCollapsed}
              header={<div className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--rui-text-tertiary)]">Navigation</div>}
            />
          }
          className="xl:col-span-2"
        >
          <GridLayout
            allowMovement={args.gridAllowMovement}
            allowResize={args.gridAllowResize}
            allowCollapse={args.gridAllowCollapse}
            allowFullscreen={args.gridAllowFullscreen}
            panels={[{ id: 'panel', title: 'DynamicPanel', description: 'Controlled by GridLayout props.', content: <Card padded="sm">Panel content</Card> }]}
          />
        </Page>
      </div>
    </AccentProvider>
  );
}

export const GroupedPropsControls: StoryObj<GroupedControlsArgs> = {
  args: {
    accentKey: 'default',
    buttonVariant: 'outline',
    buttonSize: 'md',
    buttonLoading: false,
    buttonDisabled: false,
    buttonFullWidth: false,
    badgeTone: 'accent',
    bannerTone: 'accent',
    bannerTitle: 'Reusable banner',
    cardPadded: 'md',
    chipTitle: 'ChipCard',
    chipValue: '128',
    chipSelected: false,
    radioChecked: true,
    toggleChecked: true,
    switchChecked: true,
    iconName: 'refresh',
    tooltipContent: 'Tooltip content',
    tooltipPlacement: 'top',
    textLabel: 'Text',
    textValue: 'Editable text',
    textPlaceholder: 'Type here',
    textLabelPosition: 'top',
    textError: '',
    textAreaValue: 'Editable multi-line value.',
    textAreaRows: 4,
    numberValue: 1250,
    numberPrefix: '$',
    numberSuffix: '',
    dateTimeType: 'datetime-local',
    dateTimeValue: '2026-04-19T10:30',
    selectMode: 'single',
    selectSearchable: true,
    selectShowClear: true,
    selectShowSelectAll: true,
    tableSearchable: true,
    tableHideColumnControls: false,
    tableLoading: false,
    tableSelectable: true,
    tableExpanded: true,
    loggerShowHeader: true,
    loggerShowToolbar: true,
    loggerSearch: '',
    notificationPlacement: 'top-right',
    pageTitle: 'Page',
    pageDescription: 'Page shell with sidebar and grid children.',
    sidebarCollapsed: false,
    sidebarCollapsible: true,
    gridAllowMovement: true,
    gridAllowResize: true,
    gridAllowCollapse: true,
    gridAllowFullscreen: true,
  },
  argTypes: {
    accentKey: {
      control: 'select',
      options: ['default', 'teal', 'warning', 'danger', 'neutral', 'tailadmin', 'light-blue', 'light-success', 'light-warning', 'light-danger', 'light-neutral'],
      table: category('AccentProvider'),
    },
    buttonVariant: {
      name: 'variant',
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success', 'warning', 'subtle', 'icon'],
      table: category('Button'),
    },
    buttonSize: { name: 'size', control: 'select', options: ['sm', 'md', 'lg'], table: category('Button') },
    buttonLoading: { name: 'loading', control: 'boolean', table: category('Button') },
    buttonDisabled: { name: 'disabled', control: 'boolean', table: category('Button') },
    buttonFullWidth: { name: 'fullWidth', control: 'boolean', table: category('Button') },
    badgeTone: { name: 'tone', control: 'select', options: ['accent', 'success', 'warning', 'danger', 'neutral', 'info'], table: category('Badge') },
    bannerTone: { name: 'tone', control: 'select', options: ['accent', 'info', 'success', 'warning', 'danger', 'neutral'], table: category('Banner') },
    bannerTitle: { name: 'title', control: 'text', table: category('Banner') },
    cardPadded: { name: 'padded', control: 'select', options: [false, 'sm', 'md', 'lg'], table: category('Card') },
    chipTitle: { name: 'title', control: 'text', table: category('ChipCard') },
    chipValue: { name: 'value', control: 'text', table: category('ChipCard') },
    chipSelected: { name: 'selected', control: 'boolean', table: category('ChipCard') },
    radioChecked: { name: 'checked', control: 'boolean', table: category('RadioCard') },
    toggleChecked: { name: 'checked', control: 'boolean', table: category('ToggleCard') },
    switchChecked: { name: 'checked', control: 'boolean', table: category('Switch') },
    iconName: { name: 'name', control: 'select', options: ['refresh', 'save', 'settings', 'sidebar-open', 'sidebar-collapsed', 'grid', 'chart'], table: category('Icon') },
    tooltipContent: { name: 'content', control: 'text', table: category('Tooltip') },
    tooltipPlacement: { name: 'placement', control: 'select', options: ['top', 'right', 'bottom', 'left'], table: category('Tooltip') },
    textLabel: { name: 'label', control: 'text', table: category('Text') },
    textValue: { name: 'value', control: 'text', table: category('Text') },
    textPlaceholder: { name: 'placeholder', control: 'text', table: category('Text') },
    textLabelPosition: { name: 'labelPosition', control: 'select', options: ['top', 'left'], table: category('Text') },
    textError: { name: 'error', control: 'text', table: category('Text') },
    textAreaValue: { name: 'value', control: 'text', table: category('TextArea') },
    textAreaRows: { name: 'rows', control: { type: 'number', min: 2, max: 8, step: 1 }, table: category('TextArea') },
    numberValue: { name: 'value', control: 'number', table: category('NumberInput') },
    numberPrefix: { name: 'prefix', control: 'text', table: category('NumberInput') },
    numberSuffix: { name: 'suffix', control: 'text', table: category('NumberInput') },
    dateTimeType: { name: 'type', control: 'select', options: ['datetime-local', 'date', 'time'], table: category('DateTimeSelector') },
    dateTimeValue: { name: 'value', control: 'text', table: category('DateTimeSelector') },
    selectMode: { name: 'mode', control: 'select', options: ['single', 'multiple'], table: category('SelectBox') },
    selectSearchable: { name: 'searchable', control: 'boolean', table: category('SelectBox') },
    selectShowClear: { name: 'showClear', control: 'boolean', table: category('SelectBox') },
    selectShowSelectAll: { name: 'showSelectAll', control: 'boolean', table: category('SelectBox') },
    tableSearchable: { name: 'searchable', control: 'boolean', table: category('Table') },
    tableHideColumnControls: { name: 'hideColumnControls', control: 'boolean', table: category('Table') },
    tableLoading: { name: 'loading', control: 'boolean', table: category('Table') },
    tableSelectable: { name: 'selection', control: 'boolean', table: category('Table') },
    tableExpanded: { name: 'defaultExpandedRowIds', control: 'boolean', table: category('Table') },
    loggerShowHeader: { name: 'showHeader', control: 'boolean', table: category('Logger') },
    loggerShowToolbar: { name: 'showToolbar', control: 'boolean', table: category('Logger') },
    loggerSearch: { name: 'search', control: 'text', table: category('Logger') },
    notificationPlacement: { name: 'placement', control: 'select', options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'], table: category('NotificationViewport') },
    pageTitle: { name: 'title', control: 'text', table: category('Page') },
    pageDescription: { name: 'description', control: 'text', table: category('Page') },
    sidebarCollapsed: { name: 'collapsed', control: 'boolean', table: category('Sidebar') },
    sidebarCollapsible: { name: 'collapsible', control: 'boolean', table: category('Sidebar') },
    gridAllowMovement: { name: 'allowMovement', control: 'boolean', table: category('GridLayout') },
    gridAllowResize: { name: 'allowResize', control: 'boolean', table: category('GridLayout') },
    gridAllowCollapse: { name: 'allowCollapse', control: 'boolean', table: category('GridLayout') },
    gridAllowFullscreen: { name: 'allowFullscreen', control: 'boolean', table: category('GridLayout') },
  },
  render: (args) => <GroupedControlsCanvas {...args} />,
};
