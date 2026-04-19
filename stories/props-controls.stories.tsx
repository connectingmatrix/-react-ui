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
import { docsSource } from './story-source';

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
const accentOptions = ['default', 'teal', 'warning', 'danger', 'neutral', 'tailadmin', 'light-blue', 'light-success', 'light-warning', 'light-danger', 'light-neutral'];

interface GroupedControlsArgs {
  accentKey: AccentKey;
  buttonVariant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'subtle' | 'icon';
  buttonSize: 'sm' | 'md' | 'lg';
  buttonLoading: boolean;
  buttonDisabled: boolean;
  buttonFullWidth: boolean;
  buttonType: 'button' | 'submit' | 'reset';
  buttonLabel: string;
  buttonLeftIcon: string;
  buttonRightIcon: string;
  buttonAccentKey: string;
  buttonAriaLabel: string;
  buttonTitle: string;
  buttonClassName: string;
  buttonLeftIconClassName: string;
  buttonRightIconClassName: string;
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
  textDefaultValue: string;
  textPlaceholder: string;
  textDescription: string;
  textHelperText: string;
  textLabelPosition: 'top' | 'left';
  textError: string;
  textDisabled: boolean;
  textRequired: boolean;
  textType: string;
  textName: string;
  textId: string;
  textPrefix: string;
  textSuffix: string;
  textAccentKey: string;
  textInputClassName: string;
  textWrapperClassName: string;
  textLabelClassName: string;
  textAreaValue: string;
  textAreaLabel: string;
  textAreaDescription: string;
  textAreaHelperText: string;
  textAreaError: string;
  textAreaRows: number;
  textAreaDisabled: boolean;
  textAreaRequired: boolean;
  textAreaAccentKey: string;
  textAreaClassName: string;
  numberValue: number;
  numberPrefix: string;
  numberSuffix: string;
  numberMin: number;
  numberMax: number;
  numberStep: number;
  numberError: string;
  numberDisabled: boolean;
  numberAccentKey: string;
  numberInputClassName: string;
  dateTimeType: 'datetime-local' | 'date' | 'time';
  dateTimeValue: string;
  dateTimeMin: string;
  dateTimeMax: string;
  dateTimeError: string;
  dateTimeDisabled: boolean;
  dateTimeAccentKey: string;
  selectMode: 'single' | 'multiple';
  selectLabel: string;
  selectPlaceholder: string;
  selectSearchPlaceholder: string;
  selectEmptyState: string;
  selectSearchable: boolean;
  selectClearable: boolean;
  selectShowClear: boolean;
  selectShowSelectAll: boolean;
  selectAllLabel: string;
  selectClearLabel: string;
  selectLabelPosition: 'top' | 'left';
  selectSummaryText: string;
  selectMenuHeader: boolean;
  selectAccentKey: string;
  selectTriggerClassName: string;
  selectMenuClassName: string;
  selectOptionClassName: string;
  tableSearchable: boolean;
  tableSearchPlaceholder: string;
  tableHideColumnControls: boolean;
  tableAllowColumnResize: boolean;
  tableAllowColumnReorder: boolean;
  tableLoading: boolean;
  tableSelectable: boolean;
  tableSelectionMode: 'single' | 'multi';
  tableSelectedKeys: string;
  tableExpanded: boolean;
  tableRenderHeaderFilters: boolean;
  tableRenderSelectionActions: boolean;
  tableVirtualization: boolean;
  tableAccentKey: string;
  tableContainerClassName: string;
  tableRootClassName: string;
  tableViewportClassName: string;
  loggerShowHeader: boolean;
  loggerShowToolbar: boolean;
  loggerTitle: string;
  loggerDescription: string;
  loggerLevel: string;
  loggerCategory: string;
  loggerSearch: string;
  loggerAutoScroll: boolean;
  loggerTrailing: boolean;
  loggerHeightClassName: string;
  loggerOnClear: boolean;
  loggerAccentKey: string;
  loggerViewportClassName: string;
  loggerPayloadClassName: string;
  notificationPlacement: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  notificationTone: 'accent' | 'success' | 'warning' | 'danger' | 'neutral' | 'info';
  notificationTitle: string;
  notificationMessage: string;
  notificationActions: boolean;
  notificationAccentKey: string;
  pageTitle: string;
  pageDescription: string;
  pageContentClassName: string;
  sidebarCollapsed: boolean;
  sidebarCollapsible: boolean;
  sidebarActiveId: string;
  sidebarCollapseTitle: string;
  sidebarExpandTitle: string;
  gridAllowMovement: boolean;
  gridAllowResize: boolean;
  gridAllowCollapse: boolean;
  gridAllowFullscreen: boolean;
  gridPanelTitle: string;
  gridPanelDescription: string;
  gridPanelWidth: 'full' | 'half' | 'third';
  gridAccentKey: string;
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
            <Button
              variant={args.buttonVariant}
              size={args.buttonSize}
              loading={args.buttonLoading}
              disabled={args.buttonDisabled}
              fullWidth={args.buttonFullWidth}
              type={args.buttonType}
              accentKey={args.buttonAccentKey}
              leftIcon={args.buttonVariant === 'icon' || args.buttonLeftIcon === 'none' ? undefined : <Icon name={args.buttonLeftIcon} className="h-4 w-4" />}
              rightIcon={args.buttonVariant === 'icon' || args.buttonRightIcon === 'none' ? undefined : <Icon name={args.buttonRightIcon} className="h-4 w-4" />}
              leftIconClassName={args.buttonLeftIconClassName || undefined}
              rightIconClassName={args.buttonRightIconClassName || undefined}
              className={args.buttonVariant === 'icon' ? `h-9 w-9 px-0 ${args.buttonClassName}` : args.buttonClassName || undefined}
              aria-label={args.buttonAriaLabel || (args.buttonVariant === 'icon' ? args.buttonLabel : undefined)}
              title={args.buttonTitle || undefined}
            >
              {args.buttonVariant === 'icon' ? <Icon name={args.buttonLeftIcon === 'none' ? args.iconName : args.buttonLeftIcon} className="h-4 w-4" /> : args.buttonLabel}
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
            defaultValue={args.textDefaultValue || undefined}
            onChange={setTextValue}
            placeholder={args.textPlaceholder}
            description={args.textDescription || undefined}
            helperText={args.textError ? undefined : args.textHelperText || undefined}
            labelPosition={args.textLabelPosition}
            error={args.textError || undefined}
            disabled={args.textDisabled}
            required={args.textRequired}
            type={args.textType}
            name={args.textName || undefined}
            id={args.textId || undefined}
            prefix={args.textPrefix === 'search' ? <Icon name="search" className="h-4 w-4" /> : args.textPrefix || undefined}
            suffix={args.textSuffix || undefined}
            accentKey={args.textAccentKey}
            inputClassName={args.textInputClassName || undefined}
            wrapperClassName={args.textWrapperClassName || undefined}
            labelClassName={args.textLabelClassName || undefined}
          />
          <TextArea
            label={args.textAreaLabel}
            value={textAreaValue}
            onChange={setTextAreaValue}
            rows={args.textAreaRows}
            description={args.textAreaDescription || undefined}
            helperText={args.textAreaError ? undefined : args.textAreaHelperText || undefined}
            error={args.textAreaError || undefined}
            disabled={args.textAreaDisabled}
            required={args.textAreaRequired}
            accentKey={args.textAreaAccentKey}
            textareaClassName={args.textAreaClassName || undefined}
          />
          <NumberInput
            label="NumberInput"
            value={numberValue}
            onValueChange={setNumberValue}
            prefix={args.numberPrefix}
            suffix={args.numberSuffix}
            min={args.numberMin}
            max={args.numberMax}
            step={args.numberStep}
            error={args.numberError || undefined}
            disabled={args.numberDisabled}
            accentKey={args.numberAccentKey}
            inputClassName={args.numberInputClassName || undefined}
          />
          <DateTimeSelector
            label="DateTimeSelector"
            type={args.dateTimeType}
            value={dateTimeValue}
            onChange={setDateTimeValue}
            min={args.dateTimeMin || undefined}
            max={args.dateTimeMax || undefined}
            error={args.dateTimeError || undefined}
            disabled={args.dateTimeDisabled}
            accentKey={args.dateTimeAccentKey}
          />
          <SelectBox
            mode={args.selectMode}
            label={args.selectLabel}
            placeholder={args.selectPlaceholder}
            searchPlaceholder={args.selectSearchPlaceholder}
            emptyState={args.selectEmptyState}
            searchable={args.selectSearchable}
            clearable={args.selectClearable}
            showClear={args.selectShowClear}
            showSelectAll={args.selectShowSelectAll}
            selectAllLabel={args.selectAllLabel}
            clearLabel={args.selectClearLabel}
            labelPosition={args.selectLabelPosition}
            summaryText={args.selectSummaryText || undefined}
            menuHeader={args.selectMenuHeader ? ({ filteredOptions }) => <Badge>{filteredOptions.length} visible</Badge> : undefined}
            accentKey={args.selectAccentKey}
            triggerClassName={args.selectTriggerClassName || undefined}
            menuClassName={args.selectMenuClassName || undefined}
            optionClassName={args.selectOptionClassName || undefined}
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
            searchPlaceholder={args.tableSearchPlaceholder}
            hideColumnControls={args.tableHideColumnControls}
            allowColumnResize={args.tableAllowColumnResize}
            allowColumnReorder={args.tableAllowColumnReorder}
            loading={args.tableLoading}
            selection={
              args.tableSelectable
                ? {
                    mode: args.tableSelectionMode,
                    defaultSelectedKeys: args.tableSelectedKeys
                      .split(',')
                      .map((key) => key.trim())
                      .filter(Boolean),
                  }
                : undefined
            }
            defaultExpandedRowIds={args.tableExpanded ? ['one'] : []}
            renderHeaderFilters={
              args.tableRenderHeaderFilters
                ? ({ reset, setFilter }) => (
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
            renderSelectionActions={
              args.tableRenderSelectionActions
                ? ({ selectedRows, clearSelection }) => (
                    <Button size="sm" onClick={clearSelection}>
                      Clear {selectedRows.length}
                    </Button>
                  )
                : undefined
            }
            virtualization={args.tableVirtualization ? { enabled: true, rowHeight: 52, overscan: 3, maxHeight: 320 } : undefined}
            renderExpandedContent={(row) => <div className="text-sm text-[var(--rui-text-secondary)]">Expanded content for {row.name}</div>}
            accentKey={args.tableAccentKey}
            containerClassName={args.tableContainerClassName || undefined}
            className={args.tableRootClassName || undefined}
            classNames={{ container: args.tableViewportClassName || undefined }}
            tableId="grouped-props-controls-table"
          />
          <Logger
            entries={loggerEntries}
            title={args.loggerTitle}
            description={args.loggerDescription || undefined}
            showHeader={args.loggerShowHeader}
            showToolbar={args.loggerShowToolbar}
            level={args.loggerLevel}
            category={args.loggerCategory}
            search={args.loggerSearch}
            autoScroll={args.loggerAutoScroll}
            trailing={args.loggerTrailing}
            onClear={args.loggerOnClear ? () => undefined : undefined}
            heightClassName={args.loggerHeightClassName}
            accentKey={args.loggerAccentKey}
            classNames={{ viewport: args.loggerViewportClassName || undefined, payload: args.loggerPayloadClassName || undefined }}
          />
          <NotificationViewport
            items={[
              {
                ...notifications[0],
                tone: args.notificationTone,
                title: args.notificationTitle,
                message: args.notificationMessage,
                actions: args.notificationActions ? <Button size="sm">Open</Button> : undefined,
              },
            ]}
            placement={args.notificationPlacement}
            accentKey={args.notificationAccentKey}
            onDismiss={() => undefined}
          />
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
              activeId={args.sidebarActiveId}
              collapsible={args.sidebarCollapsible}
              collapsed={args.sidebarCollapsed}
              collapseTitle={args.sidebarCollapseTitle}
              expandTitle={args.sidebarExpandTitle}
              header={<div className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--rui-text-tertiary)]">Navigation</div>}
            />
          }
          contentClassName={args.pageContentClassName}
          className="xl:col-span-2"
        >
          <GridLayout
            allowMovement={args.gridAllowMovement}
            allowResize={args.gridAllowResize}
            allowCollapse={args.gridAllowCollapse}
            allowFullscreen={args.gridAllowFullscreen}
            accentKey={args.gridAccentKey}
            panels={[
              {
                id: 'panel',
                title: args.gridPanelTitle,
                description: args.gridPanelDescription,
                defaultWidth: args.gridPanelWidth,
                content: <Card padded="sm">Panel content</Card>,
              },
            ]}
          />
        </Page>
      </div>
    </AccentProvider>
  );
}

export const GroupedPropsControls: StoryObj<GroupedControlsArgs> = {
  parameters: docsSource(
    `
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
} from '@react/ui';
import '@react/ui/styles.css';

export function Example() {
  return (
    <AccentProvider accentKey="default">
      <Button
        variant="outline"
        size="md"
        type="button"
        leftIcon={<Icon name="save" className="h-4 w-4" />}
        rightIcon={<Icon name="chevron-right" className="h-4 w-4" />}
      >
        Button
      </Button>
      <SelectBox
        mode="single"
        label="SelectBox"
        options={[
          { label: 'Overview', value: 'overview' },
          { label: 'Strategy', value: 'strategy' },
        ]}
        searchable
        showClear
      />
      <Text label="Text" value="Editable text" prefix={<Icon name="search" />} />
      <Table
        rows={[{ id: 'one', name: 'Overview' }]}
        columns={[{ id: 'name', label: 'Name', kind: 'text' }]}
        rowKey={(row) => row.id}
        searchable
      />
      <Page title="Page" sidebar={<Sidebar items={[{ id: 'overview', label: 'Overview' }]} />}>
        <GridLayout panels={[]} />
      </Page>
    </AccentProvider>
  );
}
`,
    'A controls-first map of configurable props grouped by exported component, field, element, and layout.',
  ),
  args: {
    accentKey: 'default',
    buttonVariant: 'outline',
    buttonSize: 'md',
    buttonLoading: false,
    buttonDisabled: false,
    buttonFullWidth: false,
    buttonType: 'button',
    buttonLabel: 'Button',
    buttonLeftIcon: 'save',
    buttonRightIcon: 'chevron-right',
    buttonAccentKey: 'default',
    buttonAriaLabel: '',
    buttonTitle: '',
    buttonClassName: '',
    buttonLeftIconClassName: '',
    buttonRightIconClassName: '',
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
    textDefaultValue: '',
    textPlaceholder: 'Type here',
    textDescription: 'Inline field description',
    textHelperText: 'Helper text from controls',
    textLabelPosition: 'top',
    textError: '',
    textDisabled: false,
    textRequired: false,
    textType: 'text',
    textName: 'textField',
    textId: '',
    textPrefix: 'search',
    textSuffix: '',
    textAccentKey: 'default',
    textInputClassName: '',
    textWrapperClassName: '',
    textLabelClassName: '',
    textAreaValue: 'Editable multi-line value.',
    textAreaLabel: 'TextArea',
    textAreaDescription: 'Multi-line description',
    textAreaHelperText: 'Textarea helper copy',
    textAreaError: '',
    textAreaRows: 4,
    textAreaDisabled: false,
    textAreaRequired: false,
    textAreaAccentKey: 'default',
    textAreaClassName: '',
    numberValue: 1250,
    numberPrefix: '$',
    numberSuffix: '',
    numberMin: 0,
    numberMax: 10000,
    numberStep: 1,
    numberError: '',
    numberDisabled: false,
    numberAccentKey: 'default',
    numberInputClassName: '',
    dateTimeType: 'datetime-local',
    dateTimeValue: '2026-04-19T10:30',
    dateTimeMin: '',
    dateTimeMax: '',
    dateTimeError: '',
    dateTimeDisabled: false,
    dateTimeAccentKey: 'default',
    selectMode: 'single',
    selectLabel: 'SelectBox',
    selectPlaceholder: 'Choose a section',
    selectSearchPlaceholder: 'Search sections',
    selectEmptyState: 'No matching sections',
    selectSearchable: true,
    selectClearable: true,
    selectShowClear: true,
    selectShowSelectAll: true,
    selectAllLabel: 'Select all',
    selectClearLabel: 'Clear',
    selectLabelPosition: 'top',
    selectSummaryText: '',
    selectMenuHeader: false,
    selectAccentKey: 'default',
    selectTriggerClassName: '',
    selectMenuClassName: '',
    selectOptionClassName: '',
    tableSearchable: true,
    tableSearchPlaceholder: 'Search rows',
    tableHideColumnControls: false,
    tableAllowColumnResize: true,
    tableAllowColumnReorder: true,
    tableLoading: false,
    tableSelectable: true,
    tableSelectionMode: 'multi',
    tableSelectedKeys: 'two',
    tableExpanded: true,
    tableRenderHeaderFilters: true,
    tableRenderSelectionActions: true,
    tableVirtualization: false,
    tableAccentKey: 'default',
    tableContainerClassName: '',
    tableRootClassName: '',
    tableViewportClassName: '',
    loggerShowHeader: true,
    loggerShowToolbar: true,
    loggerTitle: 'Logger',
    loggerDescription: 'Controlled logger preview',
    loggerLevel: 'ALL',
    loggerCategory: 'ALL',
    loggerSearch: '',
    loggerAutoScroll: true,
    loggerTrailing: true,
    loggerHeightClassName: 'max-h-[240px]',
    loggerOnClear: false,
    loggerAccentKey: 'default',
    loggerViewportClassName: '',
    loggerPayloadClassName: '',
    notificationPlacement: 'top-right',
    notificationTone: 'accent',
    notificationTitle: 'Preview ready',
    notificationMessage: 'Controls update the rendered examples.',
    notificationActions: false,
    notificationAccentKey: 'default',
    pageTitle: 'Page',
    pageDescription: 'Page shell with sidebar and grid children.',
    pageContentClassName: 'space-y-5',
    sidebarCollapsed: false,
    sidebarCollapsible: true,
    sidebarActiveId: 'overview',
    sidebarCollapseTitle: 'Collapse sidebar',
    sidebarExpandTitle: 'Expand sidebar',
    gridAllowMovement: true,
    gridAllowResize: true,
    gridAllowCollapse: true,
    gridAllowFullscreen: true,
    gridPanelTitle: 'DynamicPanel',
    gridPanelDescription: 'Controlled by GridLayout props.',
    gridPanelWidth: 'full',
    gridAccentKey: 'default',
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
    buttonType: { name: 'type', control: 'select', options: ['button', 'submit', 'reset'], table: category('Button HTML props') },
    buttonLabel: { name: 'children', control: 'text', table: category('Button') },
    buttonLeftIcon: { name: 'leftIcon', control: 'select', options: ['none', 'save', 'refresh', 'download', 'settings', 'trash', 'chevron-right'], table: category('Button') },
    buttonRightIcon: { name: 'rightIcon', control: 'select', options: ['none', 'save', 'refresh', 'download', 'settings', 'trash', 'chevron-right'], table: category('Button') },
    buttonAccentKey: {
      name: 'accentKey',
      control: 'select',
      options: ['default', 'teal', 'warning', 'danger', 'neutral', 'tailadmin', 'light-blue', 'light-success', 'light-warning', 'light-danger', 'light-neutral'],
      table: category('Button'),
    },
    buttonAriaLabel: { name: 'aria-label', control: 'text', table: category('Button HTML props') },
    buttonTitle: { name: 'title', control: 'text', table: category('Button HTML props') },
    buttonClassName: { name: 'className', control: 'text', table: category('Button classes') },
    buttonLeftIconClassName: { name: 'leftIconClassName', control: 'text', table: category('Button classes') },
    buttonRightIconClassName: { name: 'rightIconClassName', control: 'text', table: category('Button classes') },
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
    textDefaultValue: { name: 'defaultValue', control: 'text', table: category('Text') },
    textPlaceholder: { name: 'placeholder', control: 'text', table: category('Text') },
    textDescription: { name: 'description', control: 'text', table: category('Text') },
    textHelperText: { name: 'helperText', control: 'text', table: category('Text') },
    textLabelPosition: { name: 'labelPosition', control: 'select', options: ['top', 'left'], table: category('Text') },
    textError: { name: 'error', control: 'text', table: category('Text') },
    textDisabled: { name: 'disabled', control: 'boolean', table: category('Text') },
    textRequired: { name: 'required', control: 'boolean', table: category('Text') },
    textType: { name: 'type', control: 'select', options: ['text', 'password', 'email', 'url', 'search', 'number', 'date'], table: category('Text HTML props') },
    textName: { name: 'name', control: 'text', table: category('Text HTML props') },
    textId: { name: 'id', control: 'text', table: category('Text HTML props') },
    textPrefix: { name: 'prefix', control: 'select', options: ['', 'search', '$', '#'], table: category('Text slots') },
    textSuffix: { name: 'suffix', control: 'select', options: ['', '%', 'ms', 'items'], table: category('Text slots') },
    textAccentKey: { name: 'accentKey', control: 'select', options: accentOptions, table: category('Text') },
    textInputClassName: { name: 'inputClassName', control: 'text', table: category('Text classes') },
    textWrapperClassName: { name: 'wrapperClassName', control: 'text', table: category('Text classes') },
    textLabelClassName: { name: 'labelClassName', control: 'text', table: category('Text classes') },
    textAreaValue: { name: 'value', control: 'text', table: category('TextArea') },
    textAreaLabel: { name: 'label', control: 'text', table: category('TextArea') },
    textAreaDescription: { name: 'description', control: 'text', table: category('TextArea') },
    textAreaHelperText: { name: 'helperText', control: 'text', table: category('TextArea') },
    textAreaError: { name: 'error', control: 'text', table: category('TextArea') },
    textAreaRows: { name: 'rows', control: { type: 'number', min: 2, max: 8, step: 1 }, table: category('TextArea') },
    textAreaDisabled: { name: 'disabled', control: 'boolean', table: category('TextArea') },
    textAreaRequired: { name: 'required', control: 'boolean', table: category('TextArea') },
    textAreaAccentKey: { name: 'accentKey', control: 'select', options: accentOptions, table: category('TextArea') },
    textAreaClassName: { name: 'textareaClassName', control: 'text', table: category('TextArea classes') },
    numberValue: { name: 'value', control: 'number', table: category('NumberInput') },
    numberPrefix: { name: 'prefix', control: 'text', table: category('NumberInput') },
    numberSuffix: { name: 'suffix', control: 'text', table: category('NumberInput') },
    numberMin: { name: 'min', control: 'number', table: category('NumberInput') },
    numberMax: { name: 'max', control: 'number', table: category('NumberInput') },
    numberStep: { name: 'step', control: 'number', table: category('NumberInput') },
    numberError: { name: 'error', control: 'text', table: category('NumberInput') },
    numberDisabled: { name: 'disabled', control: 'boolean', table: category('NumberInput') },
    numberAccentKey: { name: 'accentKey', control: 'select', options: accentOptions, table: category('NumberInput') },
    numberInputClassName: { name: 'inputClassName', control: 'text', table: category('NumberInput classes') },
    dateTimeType: { name: 'type', control: 'select', options: ['datetime-local', 'date', 'time'], table: category('DateTimeSelector') },
    dateTimeValue: { name: 'value', control: 'text', table: category('DateTimeSelector') },
    dateTimeMin: { name: 'min', control: 'text', table: category('DateTimeSelector') },
    dateTimeMax: { name: 'max', control: 'text', table: category('DateTimeSelector') },
    dateTimeError: { name: 'error', control: 'text', table: category('DateTimeSelector') },
    dateTimeDisabled: { name: 'disabled', control: 'boolean', table: category('DateTimeSelector') },
    dateTimeAccentKey: { name: 'accentKey', control: 'select', options: accentOptions, table: category('DateTimeSelector') },
    selectMode: { name: 'mode', control: 'select', options: ['single', 'multiple'], table: category('SelectBox') },
    selectLabel: { name: 'label', control: 'text', table: category('SelectBox') },
    selectPlaceholder: { name: 'placeholder', control: 'text', table: category('SelectBox') },
    selectSearchPlaceholder: { name: 'searchPlaceholder', control: 'text', table: category('SelectBox') },
    selectEmptyState: { name: 'emptyState', control: 'text', table: category('SelectBox') },
    selectSearchable: { name: 'searchable', control: 'boolean', table: category('SelectBox') },
    selectClearable: { name: 'clearable', control: 'boolean', table: category('SelectBox') },
    selectShowClear: { name: 'showClear', control: 'boolean', table: category('SelectBox') },
    selectShowSelectAll: { name: 'showSelectAll', control: 'boolean', table: category('SelectBox') },
    selectAllLabel: { name: 'selectAllLabel', control: 'text', table: category('SelectBox') },
    selectClearLabel: { name: 'clearLabel', control: 'text', table: category('SelectBox') },
    selectLabelPosition: { name: 'labelPosition', control: 'select', options: ['top', 'left'], table: category('SelectBox') },
    selectSummaryText: { name: 'summaryText', control: 'text', table: category('SelectBox slots') },
    selectMenuHeader: { name: 'menuHeader', control: 'boolean', table: category('SelectBox slots') },
    selectAccentKey: { name: 'accentKey', control: 'select', options: accentOptions, table: category('SelectBox') },
    selectTriggerClassName: { name: 'triggerClassName', control: 'text', table: category('SelectBox classes') },
    selectMenuClassName: { name: 'menuClassName', control: 'text', table: category('SelectBox classes') },
    selectOptionClassName: { name: 'optionClassName', control: 'text', table: category('SelectBox classes') },
    tableSearchable: { name: 'searchable', control: 'boolean', table: category('Table') },
    tableSearchPlaceholder: { name: 'searchPlaceholder', control: 'text', table: category('Table') },
    tableHideColumnControls: { name: 'hideColumnControls', control: 'boolean', table: category('Table') },
    tableAllowColumnResize: { name: 'allowColumnResize', control: 'boolean', table: category('Table columns') },
    tableAllowColumnReorder: { name: 'allowColumnReorder', control: 'boolean', table: category('Table columns') },
    tableLoading: { name: 'loading', control: 'boolean', table: category('Table') },
    tableSelectable: { name: 'selection', control: 'boolean', table: category('Table') },
    tableSelectionMode: { name: 'selection.mode', control: 'select', options: ['single', 'multi'], table: category('Table selection') },
    tableSelectedKeys: { name: 'selection.defaultSelectedKeys', control: 'text', table: category('Table selection') },
    tableExpanded: { name: 'defaultExpandedRowIds', control: 'boolean', table: category('Table') },
    tableRenderHeaderFilters: { name: 'renderHeaderFilters', control: 'boolean', table: category('Table render props') },
    tableRenderSelectionActions: { name: 'renderSelectionActions', control: 'boolean', table: category('Table render props') },
    tableVirtualization: { name: 'virtualization.enabled', control: 'boolean', table: category('Table virtualization') },
    tableAccentKey: { name: 'accentKey', control: 'select', options: accentOptions, table: category('Table') },
    tableContainerClassName: { name: 'containerClassName', control: 'text', table: category('Table classes') },
    tableRootClassName: { name: 'className', control: 'text', table: category('Table classes') },
    tableViewportClassName: { name: 'classNames.container', control: 'text', table: category('Table classNames') },
    loggerShowHeader: { name: 'showHeader', control: 'boolean', table: category('Logger') },
    loggerShowToolbar: { name: 'showToolbar', control: 'boolean', table: category('Logger') },
    loggerTitle: { name: 'title', control: 'text', table: category('Logger header') },
    loggerDescription: { name: 'description', control: 'text', table: category('Logger header') },
    loggerLevel: { name: 'level', control: 'select', options: ['ALL', 'INFO', 'WARN', 'ERROR', 'SUCCESS'], table: category('Logger filters') },
    loggerCategory: { name: 'category', control: 'select', options: ['ALL', 'system', 'review'], table: category('Logger filters') },
    loggerSearch: { name: 'search', control: 'text', table: category('Logger') },
    loggerAutoScroll: { name: 'autoScroll', control: 'boolean', table: category('Logger') },
    loggerTrailing: { name: 'trailing', control: 'boolean', table: category('Logger') },
    loggerHeightClassName: { name: 'heightClassName', control: 'text', table: category('Logger classes') },
    loggerOnClear: { name: 'onClear', control: 'boolean', table: category('Logger actions') },
    loggerAccentKey: { name: 'accentKey', control: 'select', options: accentOptions, table: category('Logger') },
    loggerViewportClassName: { name: 'classNames.viewport', control: 'text', table: category('Logger classes') },
    loggerPayloadClassName: { name: 'classNames.payload', control: 'text', table: category('Logger classes') },
    notificationPlacement: { name: 'placement', control: 'select', options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'], table: category('NotificationViewport') },
    notificationTone: {
      name: 'NotificationItem.tone',
      control: 'select',
      options: ['accent', 'success', 'warning', 'danger', 'neutral', 'info'],
      table: category('NotificationItem'),
    },
    notificationTitle: { name: 'NotificationItem.title', control: 'text', table: category('NotificationItem') },
    notificationMessage: { name: 'NotificationItem.message', control: 'text', table: category('NotificationItem') },
    notificationActions: { name: 'NotificationItem.actions', control: 'boolean', table: category('NotificationItem') },
    notificationAccentKey: { name: 'accentKey', control: 'select', options: accentOptions, table: category('NotificationViewport') },
    pageTitle: { name: 'title', control: 'text', table: category('Page') },
    pageDescription: { name: 'description', control: 'text', table: category('Page') },
    pageContentClassName: { name: 'contentClassName', control: 'text', table: category('Page classes') },
    sidebarCollapsed: { name: 'collapsed', control: 'boolean', table: category('Sidebar') },
    sidebarCollapsible: { name: 'collapsible', control: 'boolean', table: category('Sidebar') },
    sidebarActiveId: { name: 'activeId', control: 'select', options: ['overview', 'settings'], table: category('Sidebar') },
    sidebarCollapseTitle: { name: 'collapseTitle', control: 'text', table: category('Sidebar collapse') },
    sidebarExpandTitle: { name: 'expandTitle', control: 'text', table: category('Sidebar collapse') },
    gridAllowMovement: { name: 'allowMovement', control: 'boolean', table: category('GridLayout') },
    gridAllowResize: { name: 'allowResize', control: 'boolean', table: category('GridLayout') },
    gridAllowCollapse: { name: 'allowCollapse', control: 'boolean', table: category('GridLayout') },
    gridAllowFullscreen: { name: 'allowFullscreen', control: 'boolean', table: category('GridLayout') },
    gridPanelTitle: { name: 'panel.title', control: 'text', table: category('GridPanelDefinition') },
    gridPanelDescription: { name: 'panel.description', control: 'text', table: category('GridPanelDefinition') },
    gridPanelWidth: { name: 'panel.defaultWidth', control: 'select', options: ['full', 'half', 'third'], table: category('GridPanelDefinition') },
    gridAccentKey: { name: 'accentKey', control: 'select', options: accentOptions, table: category('GridLayout') },
  },
  render: (args) => <GroupedControlsCanvas {...args} />,
};
