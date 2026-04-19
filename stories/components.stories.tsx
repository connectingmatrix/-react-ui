import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Badge, Banner, Button, Card, ChipCard, Icon, RadioCard, SelectBox, Switch, ToggleCard, Tooltip, type BadgeTone, type SelectBoxOption } from '../src/index';
import { CaseGrid, Section, StoryShell, type StoryCase } from './story-helpers';
import { useStoryArgsUpdater } from './story-args';
import { buttonSource, docsSource, selectBoxSource } from './story-source';

const meta: Meta = {
  title: 'React UI/Components',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const options: SelectBoxOption<string>[] = [
  { label: 'Design Systems', value: 'design', description: 'Reusable UI foundations' },
  { label: 'Platform', value: 'platform', description: 'Delivery, runtime, and infra' },
  { label: 'Research', value: 'research', description: 'Insights and measurement' },
  { label: 'Support Ops', value: 'support', description: 'Customer-facing operations' },
];

const accentOptions = ['default', 'teal', 'warning', 'danger', 'neutral', 'tailadmin', 'light-blue', 'light-success', 'light-warning', 'light-danger', 'light-neutral'];
const iconOptions = [
  'none',
  'actions',
  'alert',
  'bars',
  'bell',
  'card',
  'chart',
  'check',
  'chevron-down',
  'chevron-right',
  'close',
  'coins',
  'dollar',
  'download',
  'exclamation',
  'eye',
  'filter',
  'folder',
  'grid',
  'info',
  'live',
  'maximize',
  'maximize-screen',
  'menu',
  'minimize',
  'minimize-screen',
  'minus',
  'moon',
  'panel',
  'panel-restore',
  'pause',
  'play',
  'plus',
  'refresh',
  'save',
  'search',
  'settings',
  'share',
  'sidebar-collapsed',
  'sidebar-open',
  'sparkle',
  'stop',
  'store',
  'support',
  'swap',
  'timer',
  'trash',
  'trenddown',
  'trendup',
  'user',
  'wallet',
];

function ControlledSingleSelect() {
  const [value, setValue] = useState<string | null>('platform');
  return <SelectBox label="Team" value={value} onChange={setValue} options={options} />;
}

function ControlledMultiSelect() {
  const [value, setValue] = useState<string[]>(['design', 'research']);
  return <SelectBox<string, 'multiple'> mode="multiple" label="Teams" value={value} onChange={setValue} options={options} showSelectAll showClear />;
}

function CustomObjectSelect() {
  const [value, setValue] = useState<{ id: string; label: string } | null>({ id: 'priority-high', label: 'High priority' });
  const objectOptions: SelectBoxOption<{ id: string; label: string }>[] = [
    { value: { id: 'priority-low', label: 'Low priority' }, label: 'Low priority', text: 'Low priority' },
    { value: { id: 'priority-high', label: 'High priority' }, label: 'High priority', text: 'High priority' },
  ];
  return (
    <SelectBox
      label="Priority"
      value={value}
      onChange={setValue}
      options={objectOptions}
      getOptionKey={(optionValue) => optionValue.id}
      isOptionEqual={(left, right) => left.id === right.id}
      renderValue={(nextValue) => nextValue?.label ?? 'Choose priority'}
    />
  );
}

function SwitchCase() {
  const [checked, setChecked] = useState(true);
  return <Switch checked={checked} onCheckedChange={setChecked} label="Sync enabled" description={checked ? 'Updates are active.' : 'Updates are paused.'} />;
}

function RadioCardCase() {
  const [checked, setChecked] = useState(true);
  return <RadioCard checked={checked} onCheckedChange={setChecked} title="Recommended" description="Selectable card with radio semantics." />;
}

function ToggleCardCase() {
  const [checked, setChecked] = useState(true);
  return <ToggleCard checked={checked} onCheckedChange={setChecked} title="Notify reviewers" description="Binary setting card composed with Switch." />;
}

const buttonCases: StoryCase[] = [
  {
    title: 'Button primary',
    description: 'Main action button.',
    props: [
      { name: 'variant', value: '"primary"' },
      { name: 'children', value: '"Save changes"' },
    ],
    render: <Button variant="primary">Save changes</Button>,
  },
  {
    title: 'Button secondary',
    description: 'Accent-tinted secondary action.',
    props: [{ name: 'variant', value: '"secondary"' }],
    render: <Button variant="secondary">Review</Button>,
  },
  {
    title: 'Button outline',
    description: 'Default bordered action used heavily in app toolbars.',
    props: [{ name: 'variant', value: '"outline"' }],
    render: <Button variant="outline">Open details</Button>,
  },
  {
    title: 'Button ghost',
    description: 'Low emphasis toolbar action.',
    props: [{ name: 'variant', value: '"ghost"' }],
    render: <Button variant="ghost">Reset filters</Button>,
  },
  {
    title: 'Button subtle',
    description: 'Soft filled neutral action.',
    props: [{ name: 'variant', value: '"subtle"' }],
    render: <Button variant="subtle">Preview</Button>,
  },
  {
    title: 'Button success',
    description: 'Positive action.',
    props: [{ name: 'variant', value: '"success"' }],
    render: <Button variant="success">Approve</Button>,
  },
  {
    title: 'Button warning',
    description: 'Cautionary action.',
    props: [{ name: 'variant', value: '"warning"' }],
    render: <Button variant="warning">Pause</Button>,
  },
  {
    title: 'Button danger',
    description: 'Destructive action.',
    props: [{ name: 'variant', value: '"danger"' }],
    render: <Button variant="danger">Delete</Button>,
  },
  {
    title: 'Button icon',
    description: 'Square icon-only action with accessible label supplied by the host.',
    props: [
      { name: 'variant', value: '"icon"' },
      { name: 'aria-label', value: '"Refresh"' },
    ],
    render: (
      <Button variant="icon" className="h-9 w-9 px-0" aria-label="Refresh">
        <Icon name="refresh" className="h-4 w-4" />
      </Button>
    ),
  },
  {
    title: 'Button sizes',
    description: 'Small, medium, and large height/padding variants.',
    props: [{ name: 'size', value: '"sm" | "md" | "lg"' }],
    render: (
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    ),
  },
  {
    title: 'Button icons',
    description: 'Left and right icon slots.',
    props: [
      { name: 'leftIcon', value: '<Icon name="download" />' },
      { name: 'rightIcon', value: '<Icon name="chevron-right" />' },
    ],
    render: (
      <Button leftIcon={<Icon name="download" className="h-4 w-4" />} rightIcon={<Icon name="chevron-right" className="h-4 w-4" />}>
        Export report
      </Button>
    ),
  },
  {
    title: 'Button loading',
    description: 'Busy state disables the button and renders a spinner.',
    props: [{ name: 'loading', value: 'true' }],
    render: <Button loading>Saving</Button>,
  },
  {
    title: 'Button disabled',
    description: 'Disabled state for unavailable actions.',
    props: [{ name: 'disabled', value: 'true' }],
    render: <Button disabled>Unavailable</Button>,
  },
  {
    title: 'Button full width',
    description: 'Useful in dense cards and mobile layouts.',
    props: [{ name: 'fullWidth', value: 'true' }],
    render: <Button fullWidth>Continue</Button>,
  },
  {
    title: 'Button accent key',
    description: 'Component-level accent override.',
    props: [{ name: 'accentKey', value: '"warning"' }],
    accentKey: 'warning',
    render: (
      <Button accentKey="warning" variant="primary">
        Warning action
      </Button>
    ),
  },
];

const selectCases: StoryCase[] = [
  {
    title: 'SelectBox single',
    description: 'Controlled single-select as used in page filters and settings.',
    props: [
      { name: 'value', value: 'value' },
      { name: 'onChange', value: 'setValue' },
      { name: 'options', value: 'SelectBoxOption[]' },
    ],
    render: <ControlledSingleSelect />,
  },
  {
    title: 'SelectBox multiple',
    description: 'Multi-select with select-all and clear actions.',
    props: [
      { name: 'mode', value: '"multiple"' },
      { name: 'showSelectAll', value: 'true' },
      { name: 'showClear', value: 'true' },
    ],
    render: <ControlledMultiSelect />,
  },
  {
    title: 'SelectBox searchable',
    description: 'Search field enabled by default.',
    props: [
      { name: 'searchable', value: 'true' },
      { name: 'searchPlaceholder', value: '"Search teams"' },
    ],
    render: <SelectBox label="Searchable team" options={options} defaultValue="design" searchPlaceholder="Search teams" />,
  },
  {
    title: 'SelectBox no search',
    description: 'Small option sets can hide search.',
    props: [{ name: 'searchable', value: 'false' }],
    render: <SelectBox label="Density" searchable={false} options={['Compact', 'Comfortable', 'Spacious']} defaultValue="Comfortable" />,
  },
  {
    title: 'SelectBox clearable false',
    description: 'Prevents clearing required selections.',
    props: [{ name: 'clearable', value: 'false' }],
    render: <SelectBox label="Required mode" clearable={false} options={['Draft', 'Review', 'Published']} defaultValue="Draft" />,
  },
  {
    title: 'SelectBox disabled',
    description: 'Locked dependent choice.',
    props: [{ name: 'disabled', value: 'true' }],
    render: <SelectBox label="Locked team" disabled options={options} defaultValue="platform" />,
  },
  {
    title: 'SelectBox error',
    description: 'Validation state and error text.',
    props: [{ name: 'error', value: '"Choose a team."' }],
    render: <SelectBox label="Team" options={options} value={null} error="Choose a team." />,
  },
  {
    title: 'SelectBox left label',
    description: 'Dense settings row with label on the left.',
    props: [{ name: 'labelPosition', value: '"left"' }],
    render: <SelectBox label="Default team" labelPosition="left" description="Used for new records." options={options} defaultValue="research" />,
  },
  {
    title: 'SelectBox custom summary',
    description: 'Overrides multi-select summary text.',
    props: [{ name: 'summaryText', value: '({ selectedOptions }) => ReactNode' }],
    render: (
      <SelectBox<string, 'multiple'>
        mode="multiple"
        label="Approvers"
        options={options}
        defaultValue={['design', 'platform']}
        summaryText={({ selectedOptions }) => `${selectedOptions.length} approvers`}
      />
    ),
  },
  {
    title: 'SelectBox menu header',
    description: 'Custom menu content above options.',
    props: [{ name: 'menuHeader', value: '({ filteredOptions }) => ReactNode' }],
    render: <SelectBox label="Team with header" options={options} menuHeader={({ filteredOptions }) => <Badge>{filteredOptions.length} visible</Badge>} />,
  },
  {
    title: 'SelectBox render option',
    description: 'Custom option rows with descriptions.',
    props: [{ name: 'renderOption', value: '(option, selected) => ReactNode' }],
    render: (
      <SelectBox
        label="Rich options"
        options={options}
        renderOption={(option, selected) => (
          <div>
            <div className="font-medium text-white">{option.label}</div>
            <div className="text-xs text-[var(--rui-text-tertiary)]">{option.description}</div>
            {selected ? <Badge>selected</Badge> : null}
          </div>
        )}
      />
    ),
  },
  {
    title: 'SelectBox object values',
    description: 'Custom equality and keys for object values.',
    props: [
      { name: 'getOptionKey', value: '(value) => value.id' },
      { name: 'isOptionEqual', value: '(a, b) => a.id === b.id' },
    ],
    render: <CustomObjectSelect />,
  },
  {
    title: 'SelectBox adornment',
    description: 'End adornment for status, counters, or small badges.',
    props: [{ name: 'endAdornment', value: '<Badge>4</Badge>' }],
    render: <SelectBox label="Queue" options={['Open', 'In review', 'Closed']} endAdornment={<Badge>4</Badge>} />,
  },
  {
    title: 'SelectBox slot classes',
    description: 'Wrapper, trigger, menu, option, search, and summary class slots.',
    props: [
      { name: 'triggerClassName', value: '"h-11"' },
      { name: 'menuClassName', value: '"max-h-[260px]"' },
    ],
    render: <SelectBox label="Styled select" options={options} triggerClassName="h-11" menuClassName="max-h-[260px]" />,
  },
  {
    title: 'SelectBox accent key',
    description: 'Danger accent for risky choices.',
    props: [{ name: 'accentKey', value: '"danger"' }],
    accentKey: 'danger',
    render: <SelectBox accentKey="danger" label="Risk level" options={['Low', 'Medium', 'High']} defaultValue="High" />,
  },
];

const feedbackCases: StoryCase[] = [
  {
    title: 'Badge tones',
    description: 'All supported tone variants.',
    props: [{ name: 'tone', value: '"neutral" | "accent" | "success" | "warning" | "danger" | "info"' }],
    render: (
      <div className="flex flex-wrap gap-2">
        {(['neutral', 'accent', 'success', 'warning', 'danger', 'info'] as BadgeTone[]).map((tone) => (
          <Badge key={tone} tone={tone}>
            {tone}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    title: 'Badge default accent',
    description: 'tone defaults to accent.',
    props: [{ name: 'tone', value: 'default: "accent"' }],
    render: <Badge>Default</Badge>,
  },
  {
    title: 'Banner info',
    description: 'Simple informational banner.',
    props: [
      { name: 'title', value: '"Draft changes"' },
      { name: 'tone', value: '"info"' },
    ],
    render: <Banner title="Draft changes">Review the draft before saving.</Banner>,
  },
  {
    title: 'Banner with actions',
    description: 'Action slot rendered at the right edge.',
    props: [{ name: 'actions', value: '<Button />' }],
    render: (
      <Banner title="Ready to publish" actions={<Button size="sm">Publish</Button>}>
        The preview has passed local checks.
      </Banner>
    ),
  },
  {
    title: 'Banner custom colors',
    description: 'Host-provided colors for custom messaging.',
    props: [
      { name: 'accentColor', value: '"#19d3a8"' },
      { name: 'backgroundColor', value: '"rgba(25,211,168,0.10)"' },
      { name: 'borderColor', value: '"rgba(25,211,168,0.35)"' },
    ],
    render: (
      <Banner title="Custom color" accentColor="#19d3a8" backgroundColor="rgba(25,211,168,0.10)" borderColor="rgba(25,211,168,0.35)">
        Custom colors are passed through props.
      </Banner>
    ),
  },
  {
    title: 'Banner tone badge',
    description: 'Optional tone badge beside the title.',
    props: [{ name: 'showToneBadge', value: 'true' }],
    render: (
      <Banner title="Requires review" tone="warning" showToneBadge>
        Check the inputs before continuing.
      </Banner>
    ),
  },
  {
    title: 'Card padded',
    description: 'Generic panel surface with default padding.',
    props: [{ name: 'padded', value: 'true' }],
    render: <Card>Default padded card content.</Card>,
  },
  {
    title: 'Card no padding',
    description: 'Used for embedded tables and custom scroll regions.',
    props: [{ name: 'padded', value: 'false' }],
    render: (
      <Card padded={false}>
        <div className="border-b border-white/8 p-3">Header</div>
        <div className="p-3 text-sm text-[var(--rui-text-secondary)]">Body owns its spacing.</div>
      </Card>
    ),
  },
  {
    title: 'Card padding sizes',
    description: 'Small, medium, and large spacing.',
    props: [{ name: 'padded', value: '"sm" | "md" | "lg"' }],
    render: (
      <div className="grid gap-2 md:grid-cols-3">
        <Card padded="sm">Small</Card>
        <Card padded="md">Medium</Card>
        <Card padded="lg">Large</Card>
      </div>
    ),
  },
  {
    title: 'Card interactive',
    description: 'Hoverable card surface.',
    props: [{ name: 'interactive', value: 'true' }],
    render: <Card interactive>Hoverable card surface.</Card>,
  },
  {
    title: 'Card content class',
    description: 'Content wrapper slot for internal layout.',
    props: [{ name: 'contentClassName', value: '"space-y-2"' }],
    render: (
      <Card contentClassName="space-y-2">
        <div className="font-semibold text-white">Wrapped content</div>
        <div className="text-sm text-[var(--rui-text-secondary)]">The wrapper receives the slot class.</div>
      </Card>
    ),
  },
];

const choiceCardCases: StoryCase[] = [
  {
    title: 'ChipCard metric',
    description: 'Metric card from overview and wallet-style dashboards.',
    props: [
      { name: 'title', value: '"Open items"' },
      { name: 'value', value: '"128"' },
      { name: 'helper', value: '"Filtered rows"' },
    ],
    render: <ChipCard title="Open items" value="128" helper="Filtered rows" />,
  },
  {
    title: 'ChipCard button',
    description: 'Interactive card when onClick is supplied.',
    props: [{ name: 'onClick', value: '() => void' }],
    render: <ChipCard title="Selectable" value="Team A" helper="Click target" onClick={() => undefined} />,
  },
  {
    title: 'ChipCard selected',
    description: 'Selected visual state.',
    props: [{ name: 'selected', value: 'true' }],
    render: <ChipCard selected title="Selected" value="Active" helper="Current filter" />,
  },
  {
    title: 'ChipCard tones',
    description: 'Tone overrides for metrics.',
    props: [{ name: 'tone', value: '"accent" | "success" | "warning" | "danger" | "neutral"' }],
    render: (
      <div className="grid gap-2 md:grid-cols-2">
        <ChipCard tone="success" title="Success" value="98%" />
        <ChipCard tone="warning" title="Warning" value="3" />
        <ChipCard tone="danger" title="Danger" value="1" />
        <ChipCard tone="neutral" title="Neutral" value="12" />
      </div>
    ),
  },
  {
    title: 'RadioCard controlled',
    description: 'Selectable card for mutually exclusive options.',
    props: [
      { name: 'checked', value: 'checked' },
      { name: 'onCheckedChange', value: 'setChecked' },
    ],
    render: <RadioCardCase />,
  },
  {
    title: 'RadioCard with helper',
    description: 'Helper and trailing slots for dense option cards.',
    props: [
      { name: 'helper', value: '"Recommended"' },
      { name: 'trailing', value: '<Badge />' },
    ],
    render: <RadioCard defaultChecked title="Balanced" description="Good default for most workspaces." helper="Recommended" trailing={<Badge>best</Badge>} />,
  },
  {
    title: 'RadioCard disabled',
    description: 'Disabled choice state.',
    props: [{ name: 'disabled', value: 'true' }],
    render: <RadioCard disabled title="Unavailable" description="This option is not available right now." />,
  },
  {
    title: 'ToggleCard controlled',
    description: 'Binary setting card.',
    props: [
      { name: 'checked', value: 'checked' },
      { name: 'onCheckedChange', value: 'setChecked' },
    ],
    render: <ToggleCardCase />,
  },
  {
    title: 'ToggleCard slots',
    description: 'Leading and trailing content around the switch.',
    props: [
      { name: 'leading', value: '<Icon />' },
      { name: 'trailing', value: '<Badge />' },
    ],
    render: <ToggleCard defaultChecked title="Auto refresh" description="Keep data current." leading={<Icon name="refresh" />} trailing={<Badge>live</Badge>} />,
  },
  {
    title: 'ToggleCard disabled',
    description: 'Disabled binary setting card.',
    props: [{ name: 'disabled', value: 'true' }],
    render: <ToggleCard disabled title="Locked setting" description="Controlled by another policy." />,
  },
  {
    title: 'Switch controlled',
    description: 'Inline binary switch with label and description.',
    props: [
      { name: 'checked', value: 'checked' },
      { name: 'onCheckedChange', value: 'setChecked' },
    ],
    render: <SwitchCase />,
  },
  {
    title: 'Switch compact',
    description: 'Scaled compact switch as used in table cells.',
    props: [{ name: 'className', value: '"scale-75"' }],
    render: <Switch defaultChecked className="scale-75" aria-label="Compact switch" />,
  },
  {
    title: 'Switch disabled',
    description: 'Unavailable switch.',
    props: [{ name: 'disabled', value: 'true' }],
    render: <Switch checked disabled label="Disabled switch" />,
  },
];

const tooltipIconCases: StoryCase[] = [
  {
    title: 'Tooltip top',
    description: 'Default hover/focus tooltip.',
    props: [{ name: 'content', value: '"Tooltip content"' }],
    render: (
      <Tooltip content="Tooltip content">
        <Button variant="ghost">Hover me</Button>
      </Tooltip>
    ),
  },
  {
    title: 'Tooltip placements',
    description: 'Top, right, bottom, and left placement props.',
    props: [{ name: 'placement', value: '"top" | "right" | "bottom" | "left"' }],
    render: (
      <div className="flex flex-wrap gap-2">
        {(['top', 'right', 'bottom', 'left'] as const).map((placement) => (
          <Tooltip key={placement} placement={placement} content={`${placement} tooltip`}>
            <Button size="sm" variant="outline">
              {placement}
            </Button>
          </Tooltip>
        ))}
      </div>
    ),
  },
  {
    title: 'Tooltip controlled closed',
    description: 'Controlled open state can keep tooltip hidden.',
    props: [{ name: 'open', value: 'false' }],
    render: (
      <Tooltip open={false} content="Hidden">
        <Button variant="ghost">No tooltip</Button>
      </Tooltip>
    ),
  },
  {
    title: 'Icon common chrome',
    description: 'Generic app chrome icons only.',
    props: [{ name: 'name', value: 'UiIconName' }],
    render: (
      <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
        {['search', 'filter', 'download', 'save', 'refresh', 'settings', 'grid', 'panel', 'trash', 'play', 'stop', 'wallet', 'bell', 'chart', 'card', 'info'].map((name) => (
          <div key={name} className="flex h-14 items-center justify-center rounded-[8px] border border-white/8 bg-white/[0.04]">
            <Icon name={name} title={name} className="text-[var(--rui-accent)]" />
          </div>
        ))}
      </div>
    ),
  },
];

interface ButtonComponentArgs {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'subtle' | 'icon';
  size: 'sm' | 'md' | 'lg';
  type: 'button' | 'submit' | 'reset';
  loading: boolean;
  disabled: boolean;
  fullWidth: boolean;
  label: string;
  leftIcon: string;
  rightIcon: string;
  accentKey: string;
  className: string;
  leftIconClassName: string;
  rightIconClassName: string;
  ariaLabel: string;
  title: string;
}

export const ButtonComponent: StoryObj<ButtonComponentArgs> = {
  args: {
    variant: 'outline',
    size: 'md',
    type: 'button',
    loading: false,
    disabled: false,
    fullWidth: false,
    label: 'Save changes',
    leftIcon: 'save',
    rightIcon: 'chevron-right',
    accentKey: 'default',
    className: '',
    leftIconClassName: '',
    rightIconClassName: '',
    ariaLabel: '',
    title: '',
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success', 'warning', 'subtle', 'icon'], table: { category: 'Button' } },
    size: { control: 'select', options: ['sm', 'md', 'lg'], table: { category: 'Button' } },
    type: { control: 'select', options: ['button', 'submit', 'reset'], table: { category: 'Button' } },
    loading: { control: 'boolean', table: { category: 'Button' } },
    disabled: { control: 'boolean', table: { category: 'Button' } },
    fullWidth: { control: 'boolean', table: { category: 'Button' } },
    label: { name: 'children', control: 'text', table: { category: 'Button' } },
    leftIcon: { control: 'select', options: iconOptions, table: { category: 'Button' } },
    rightIcon: { control: 'select', options: iconOptions, table: { category: 'Button' } },
    accentKey: { control: 'select', options: accentOptions, table: { category: 'Button' } },
    className: { control: 'text', table: { category: 'Button slots/classes' } },
    leftIconClassName: { control: 'text', table: { category: 'Button slots/classes' } },
    rightIconClassName: { control: 'text', table: { category: 'Button slots/classes' } },
    ariaLabel: { name: 'aria-label', control: 'text', table: { category: 'Button HTML props' } },
    title: { control: 'text', table: { category: 'Button HTML props' } },
  },
  parameters: docsSource(buttonSource, 'Exact Button usage code with icons, variant, and size props.'),
  render: function ButtonComponentStory(args) {
    return (
      <StoryShell title="Button" description="Button prop usage and rendering across action bars, toolbar icons, bulk actions, modal actions, and loading states.">
        <Section title="Controlled Button example" description="These controls map to Button props.">
          <Button
            variant={args.variant}
            size={args.size}
            type={args.type}
            loading={args.loading}
            disabled={args.disabled}
            fullWidth={args.fullWidth}
            accentKey={args.accentKey}
            leftIcon={args.variant === 'icon' || args.leftIcon === 'none' ? undefined : <Icon name={args.leftIcon} className="h-4 w-4" />}
            rightIcon={args.variant === 'icon' || args.rightIcon === 'none' ? undefined : <Icon name={args.rightIcon} className="h-4 w-4" />}
            leftIconClassName={args.leftIconClassName || undefined}
            rightIconClassName={args.rightIconClassName || undefined}
            aria-label={args.ariaLabel || (args.variant === 'icon' ? args.label : undefined)}
            title={args.title || undefined}
            className={args.variant === 'icon' ? `h-9 w-9 px-0 ${args.className}` : args.className || undefined}
          >
            {args.variant === 'icon' ? <Icon name={args.leftIcon === 'none' ? 'save' : args.leftIcon} className="h-4 w-4" /> : args.label}
          </Button>
        </Section>
        <Section title="Button cases" description="Variants, sizes, icons, loading, disabled, full width, and accent override.">
          <CaseGrid cases={buttonCases} />
        </Section>
      </StoryShell>
    );
  },
};

interface SelectBoxComponentArgs {
  mode: 'single' | 'multiple';
  label: string;
  description: string;
  helperText: string;
  placeholder: string;
  value: string;
  defaultValue: string;
  searchPlaceholder: string;
  emptyState: string;
  searchable: boolean;
  clearable: boolean;
  showSelectAll: boolean;
  showClear: boolean;
  selectAllLabel: string;
  clearLabel: string;
  disabled: boolean;
  labelPosition: 'top' | 'left';
  error: string;
  endAdornment: string;
  summaryText: string;
  menuHeader: boolean;
  customRenderOption: boolean;
  customRenderValue: boolean;
  objectValues: boolean;
  disabledOption: boolean;
  customOptionKey: boolean;
  customOptionEquality: boolean;
  accentKey: string;
  className: string;
  wrapperClassName: string;
  labelClassName: string;
  descriptionClassName: string;
  errorClassName: string;
  helperClassName: string;
  triggerClassName: string;
  menuClassName: string;
  optionClassName: string;
  searchClassName: string;
  summaryClassName: string;
  endAdornmentClassName: string;
}

export const SelectBoxComponent: StoryObj<SelectBoxComponentArgs> = {
  args: {
    mode: 'single',
    label: 'Team',
    description: 'Choose one or more teams.',
    helperText: 'Search is available inside the dropdown.',
    placeholder: 'Select a team',
    value: 'platform',
    defaultValue: 'design',
    searchPlaceholder: 'Search teams',
    emptyState: 'No matching teams',
    searchable: true,
    clearable: true,
    showSelectAll: true,
    showClear: true,
    selectAllLabel: 'Select all',
    clearLabel: 'Clear',
    disabled: false,
    labelPosition: 'top',
    error: '',
    endAdornment: 'none',
    summaryText: '',
    menuHeader: false,
    customRenderOption: false,
    customRenderValue: false,
    objectValues: false,
    disabledOption: false,
    customOptionKey: false,
    customOptionEquality: false,
    accentKey: 'default',
    className: '',
    wrapperClassName: '',
    labelClassName: '',
    descriptionClassName: '',
    errorClassName: '',
    helperClassName: '',
    triggerClassName: '',
    menuClassName: '',
    optionClassName: '',
    searchClassName: '',
    summaryClassName: '',
    endAdornmentClassName: '',
  },
  argTypes: {
    mode: { control: 'select', options: ['single', 'multiple'], table: { category: 'SelectBox' } },
    label: { control: 'text', table: { category: 'SelectBox' } },
    description: { control: 'text', table: { category: 'SelectBox' } },
    helperText: { control: 'text', table: { category: 'SelectBox' } },
    placeholder: { control: 'text', table: { category: 'SelectBox' } },
    value: { control: 'text', table: { category: 'SelectBox state' } },
    defaultValue: { control: 'text', table: { category: 'SelectBox state' } },
    searchPlaceholder: { control: 'text', table: { category: 'SelectBox' } },
    emptyState: { control: 'text', table: { category: 'SelectBox' } },
    searchable: { control: 'boolean', table: { category: 'SelectBox' } },
    clearable: { control: 'boolean', table: { category: 'SelectBox' } },
    showSelectAll: { control: 'boolean', table: { category: 'SelectBox' } },
    showClear: { control: 'boolean', table: { category: 'SelectBox' } },
    selectAllLabel: { control: 'text', table: { category: 'SelectBox' } },
    clearLabel: { control: 'text', table: { category: 'SelectBox' } },
    disabled: { control: 'boolean', table: { category: 'SelectBox' } },
    labelPosition: { control: 'select', options: ['top', 'left'], table: { category: 'SelectBox' } },
    error: { control: 'text', table: { category: 'SelectBox' } },
    endAdornment: { control: 'select', options: iconOptions, table: { category: 'SelectBox slots' } },
    summaryText: { control: 'text', table: { category: 'SelectBox slots' } },
    menuHeader: { control: 'boolean', table: { category: 'SelectBox slots' } },
    customRenderOption: { name: 'renderOption', control: 'boolean', table: { category: 'SelectBox render props' } },
    customRenderValue: { name: 'renderValue', control: 'boolean', table: { category: 'SelectBox render props' } },
    objectValues: { name: 'options object values', control: 'boolean', table: { category: 'SelectBox options' } },
    disabledOption: { name: 'option.disabled', control: 'boolean', table: { category: 'SelectBox options' } },
    customOptionKey: { name: 'getOptionKey', control: 'boolean', table: { category: 'SelectBox options' } },
    customOptionEquality: { name: 'isOptionEqual', control: 'boolean', table: { category: 'SelectBox options' } },
    accentKey: { control: 'select', options: accentOptions, table: { category: 'SelectBox' } },
    className: { control: 'text', table: { category: 'SelectBox classes' } },
    wrapperClassName: { control: 'text', table: { category: 'SelectBox classes' } },
    labelClassName: { control: 'text', table: { category: 'SelectBox classes' } },
    descriptionClassName: { control: 'text', table: { category: 'SelectBox classes' } },
    errorClassName: { control: 'text', table: { category: 'SelectBox classes' } },
    helperClassName: { control: 'text', table: { category: 'SelectBox classes' } },
    triggerClassName: { control: 'text', table: { category: 'SelectBox classes' } },
    menuClassName: { control: 'text', table: { category: 'SelectBox classes' } },
    optionClassName: { control: 'text', table: { category: 'SelectBox classes' } },
    searchClassName: { control: 'text', table: { category: 'SelectBox classes' } },
    summaryClassName: { control: 'text', table: { category: 'SelectBox classes' } },
    endAdornmentClassName: { control: 'text', table: { category: 'SelectBox classes' } },
  },
  parameters: docsSource(selectBoxSource, 'Exact SelectBox usage code with typed options and controlled multiple selection.'),
  render: function SelectBoxComponentStory(args) {
    const updateArgs = useStoryArgsUpdater<SelectBoxComponentArgs>();
    const stringOptions = args.disabledOption ? options.map((option) => (option.value === 'support' ? { ...option, disabled: true } : option)) : options;
    const objectOptions: SelectBoxOption<{ id: string; label: string }>[] = stringOptions.map((option) => ({
      value: { id: option.value, label: String(option.label) },
      label: option.label,
      text: String(option.label),
      description: option.description,
      disabled: option.disabled,
    }));
    const selectedIds = args.value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    const resolvedValue = args.objectValues
      ? args.mode === 'multiple'
        ? objectOptions.filter((option) => selectedIds.includes(option.value.id)).map((option) => option.value)
        : objectOptions.find((option) => option.value.id === args.value)?.value
      : args.mode === 'multiple'
        ? selectedIds
        : args.value;

    return (
      <StoryShell title="SelectBox" description="Single and multiple selection usage from filters, settings, top bars, and config forms.">
        <Section title="Controlled SelectBox example" description="These controls map to SelectBox props.">
          <SelectBox<any, any>
            mode={args.mode}
            label={args.label}
            description={args.description || undefined}
            helperText={args.error ? undefined : args.helperText || undefined}
            placeholder={args.placeholder}
            searchPlaceholder={args.searchPlaceholder}
            emptyState={args.emptyState}
            options={args.objectValues ? objectOptions : stringOptions}
            value={resolvedValue}
            defaultValue={args.defaultValue}
            onChange={(nextValue) => {
              const nextControlValue = Array.isArray(nextValue)
                ? nextValue.map((item) => (typeof item === 'object' && item !== null && 'id' in item ? item.id : String(item))).join(',')
                : typeof nextValue === 'object' && nextValue !== null && 'id' in nextValue
                  ? nextValue.id
                  : String(nextValue ?? '');
              updateArgs({ value: nextControlValue });
            }}
            searchable={args.searchable}
            clearable={args.clearable}
            showSelectAll={args.showSelectAll}
            showClear={args.showClear}
            selectAllLabel={args.selectAllLabel}
            clearLabel={args.clearLabel}
            disabled={args.disabled}
            labelPosition={args.labelPosition}
            error={args.error || undefined}
            endAdornment={args.endAdornment === 'none' ? undefined : <Icon name={args.endAdornment} className="h-4 w-4" />}
            summaryText={args.summaryText || undefined}
            menuHeader={args.menuHeader ? ({ filteredOptions }) => <Badge>{filteredOptions.length} visible</Badge> : undefined}
            getOptionKey={args.customOptionKey && args.objectValues ? (optionValue: { id: string }) => optionValue.id : undefined}
            isOptionEqual={args.customOptionEquality && args.objectValues ? (left: { id: string }, right: { id: string }) => left.id === right.id : undefined}
            renderOption={args.customRenderOption ? (option, selected) => <span className={selected ? 'font-semibold text-white' : ''}>{option.label}</span> : undefined}
            renderValue={
              args.customRenderValue
                ? (_value, selectedOptions) => (selectedOptions.length ? `${selectedOptions.length} selected from custom renderValue` : args.placeholder)
                : undefined
            }
            accentKey={args.accentKey}
            className={args.className || undefined}
            wrapperClassName={args.wrapperClassName || undefined}
            labelClassName={args.labelClassName || undefined}
            descriptionClassName={args.descriptionClassName || undefined}
            errorClassName={args.errorClassName || undefined}
            helperClassName={args.helperClassName || undefined}
            triggerClassName={args.triggerClassName || undefined}
            menuClassName={args.menuClassName || undefined}
            optionClassName={args.optionClassName || undefined}
            searchClassName={args.searchClassName || undefined}
            summaryClassName={args.summaryClassName || undefined}
            endAdornmentClassName={args.endAdornmentClassName || undefined}
          />
        </Section>
        <Section title="SelectBox cases" description="Single, multi, search, disabled, error, custom summary, custom renderers, object values, adornments, and slot classes.">
          <CaseGrid cases={selectCases} />
        </Section>
      </StoryShell>
    );
  },
};

interface FeedbackComponentArgs {
  badgeTone: BadgeTone;
  badgeLabel: string;
  badgeAccentKey: string;
  badgeClassName: string;
  bannerTone: 'accent' | 'info' | 'success' | 'warning' | 'danger' | 'neutral';
  bannerTitle: string;
  bannerBody: string;
  bannerActions: boolean;
  bannerIcon: string;
  bannerShowToneBadge: boolean;
  bannerAccentKey: string;
  bannerAccentColor: string;
  bannerBackgroundColor: string;
  bannerBorderColor: string;
  bannerTextColor: string;
  bannerClassName: string;
  bannerContentClassName: string;
  bannerTitleClassName: string;
  bannerActionsClassName: string;
  bannerAccentClassName: string;
  cardPadded: false | 'none' | 'sm' | 'md' | 'lg';
  cardInteractive: boolean;
  cardAccentKey: string;
  cardClassName: string;
  cardContentClassName: string;
}

export const FeedbackComponents: StoryObj<FeedbackComponentArgs> = {
  args: {
    badgeTone: 'accent',
    badgeLabel: 'Active',
    badgeAccentKey: 'default',
    badgeClassName: '',
    bannerTone: 'warning',
    bannerTitle: 'Review required',
    bannerBody: 'Review the draft before saving.',
    bannerActions: true,
    bannerIcon: 'info',
    bannerShowToneBadge: false,
    bannerAccentKey: 'default',
    bannerAccentColor: '',
    bannerBackgroundColor: '',
    bannerBorderColor: '',
    bannerTextColor: '',
    bannerClassName: '',
    bannerContentClassName: '',
    bannerTitleClassName: '',
    bannerActionsClassName: '',
    bannerAccentClassName: '',
    cardPadded: 'md',
    cardInteractive: true,
    cardAccentKey: 'default',
    cardClassName: '',
    cardContentClassName: 'space-y-3',
  },
  argTypes: {
    badgeTone: { name: 'Badge.tone', control: 'select', options: ['accent', 'success', 'warning', 'danger', 'neutral', 'info'], table: { category: 'Badge' } },
    badgeLabel: { name: 'Badge.children', control: 'text', table: { category: 'Badge' } },
    badgeAccentKey: { name: 'Badge.accentKey', control: 'select', options: accentOptions, table: { category: 'Badge' } },
    badgeClassName: { name: 'Badge.className', control: 'text', table: { category: 'Badge classes' } },
    bannerTone: { name: 'Banner.tone', control: 'select', options: ['accent', 'info', 'success', 'warning', 'danger', 'neutral'], table: { category: 'Banner' } },
    bannerTitle: { name: 'Banner.title', control: 'text', table: { category: 'Banner' } },
    bannerBody: { name: 'Banner.children', control: 'text', table: { category: 'Banner' } },
    bannerActions: { name: 'Banner.actions', control: 'boolean', table: { category: 'Banner slots' } },
    bannerIcon: { name: 'Banner.icon', control: 'select', options: iconOptions, table: { category: 'Banner slots' } },
    bannerShowToneBadge: { name: 'Banner.showToneBadge', control: 'boolean', table: { category: 'Banner' } },
    bannerAccentKey: { name: 'Banner.accentKey', control: 'select', options: accentOptions, table: { category: 'Banner' } },
    bannerAccentColor: { name: 'Banner.accentColor', control: 'color', table: { category: 'Banner custom colors' } },
    bannerBackgroundColor: { name: 'Banner.backgroundColor', control: 'color', table: { category: 'Banner custom colors' } },
    bannerBorderColor: { name: 'Banner.borderColor', control: 'color', table: { category: 'Banner custom colors' } },
    bannerTextColor: { name: 'Banner.textColor', control: 'color', table: { category: 'Banner custom colors' } },
    bannerClassName: { name: 'Banner.className', control: 'text', table: { category: 'Banner classes' } },
    bannerContentClassName: { name: 'Banner.contentClassName', control: 'text', table: { category: 'Banner classes' } },
    bannerTitleClassName: { name: 'Banner.titleClassName', control: 'text', table: { category: 'Banner classes' } },
    bannerActionsClassName: { name: 'Banner.actionsClassName', control: 'text', table: { category: 'Banner classes' } },
    bannerAccentClassName: { name: 'Banner.accentClassName', control: 'text', table: { category: 'Banner classes' } },
    cardPadded: { name: 'Card.padded', control: 'select', options: [false, 'none', 'sm', 'md', 'lg'], table: { category: 'Card' } },
    cardInteractive: { name: 'Card.interactive', control: 'boolean', table: { category: 'Card' } },
    cardAccentKey: { name: 'Card.accentKey', control: 'select', options: accentOptions, table: { category: 'Card' } },
    cardClassName: { name: 'Card.className', control: 'text', table: { category: 'Card classes' } },
    cardContentClassName: { name: 'Card.contentClassName', control: 'text', table: { category: 'Card classes' } },
  },
  parameters: docsSource(
    `
import { Badge, Banner, Card } from '@react/ui';
import '@react/ui/styles.css';

export function Example() {
  return (
    <Card padded="md" interactive>
      <Badge tone="accent">Active</Badge>
      <Banner tone="warning" title="Review required">
        Review the draft before saving.
      </Banner>
    </Card>
  );
}
`,
    'Exact Badge, Banner, and Card composition code.',
  ),
  render: function FeedbackComponentsStory(args) {
    return (
      <StoryShell title="Badge, Banner, and Card" description="Feedback and surface components used in page headers, config notes, dashboard panels, and modal content.">
        <Section title="Controlled feedback example" description="These controls map to Badge, Banner, and Card props.">
          <Card
            padded={args.cardPadded}
            interactive={args.cardInteractive}
            accentKey={args.cardAccentKey}
            className={args.cardClassName || undefined}
            contentClassName={args.cardContentClassName || undefined}
          >
            <Badge tone={args.badgeTone} accentKey={args.badgeAccentKey} className={args.badgeClassName || undefined}>
              {args.badgeLabel}
            </Badge>
            <Banner
              tone={args.bannerTone}
              title={args.bannerTitle}
              actions={args.bannerActions ? <Button size="sm">Review</Button> : undefined}
              icon={args.bannerIcon === 'none' ? undefined : <Icon name={args.bannerIcon} className="h-4 w-4" />}
              showToneBadge={args.bannerShowToneBadge}
              accentKey={args.bannerAccentKey}
              accentColor={args.bannerAccentColor || undefined}
              backgroundColor={args.bannerBackgroundColor || undefined}
              borderColor={args.bannerBorderColor || undefined}
              textColor={args.bannerTextColor || undefined}
              className={args.bannerClassName || undefined}
              contentClassName={args.bannerContentClassName || undefined}
              titleClassName={args.bannerTitleClassName || undefined}
              actionsClassName={args.bannerActionsClassName || undefined}
              accentClassName={args.bannerAccentClassName || undefined}
            >
              {args.bannerBody}
            </Banner>
          </Card>
        </Section>
        <Section title="Feedback and surface cases" description="Badge tones, banners, custom colors, action slots, Card padding modes, interactive cards, and content slots.">
          <CaseGrid cases={feedbackCases} />
        </Section>
      </StoryShell>
    );
  },
};

interface ChoiceComponentArgs {
  chipTitle: string;
  chipValue: string;
  chipHelper: string;
  chipTone: 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
  chipSelected: boolean;
  chipDisabled: boolean;
  chipClickable: boolean;
  chipLeading: string;
  chipTrailing: string;
  chipAccentKey: string;
  radioTitle: string;
  radioDescription: string;
  radioHelper: string;
  radioChecked: boolean;
  radioName: string;
  radioValue: string;
  radioToggleable: boolean;
  radioLeading: string;
  radioTrailing: string;
  radioAccentKey: string;
  toggleTitle: string;
  toggleDescription: string;
  toggleHelper: string;
  toggleChecked: boolean;
  toggleLeading: string;
  toggleTrailing: string;
  toggleAccentKey: string;
  switchLabel: string;
  switchDescription: string;
  switchChecked: boolean;
  switchAccentKey: string;
  disabled: boolean;
  className: string;
  contentClassName: string;
  titleClassName: string;
  valueClassName: string;
  descriptionClassName: string;
  helperClassName: string;
  indicatorClassName: string;
  switchTrackClassName: string;
  switchThumbClassName: string;
  switchLabelClassName: string;
  switchDescriptionClassName: string;
}

export const ChoiceComponents: StoryObj<ChoiceComponentArgs> = {
  args: {
    chipTitle: 'Available',
    chipValue: '$12,480.22',
    chipHelper: 'Realtime balance',
    chipTone: 'accent',
    chipSelected: false,
    chipDisabled: false,
    chipClickable: false,
    chipLeading: 'none',
    chipTrailing: 'none',
    chipAccentKey: 'default',
    radioTitle: 'Recommended',
    radioDescription: 'Selectable card state.',
    radioHelper: '',
    radioChecked: true,
    radioName: '',
    radioValue: 'recommended',
    radioToggleable: false,
    radioLeading: 'none',
    radioTrailing: 'none',
    radioAccentKey: 'default',
    toggleTitle: 'Notify reviewers',
    toggleDescription: 'Binary card state.',
    toggleHelper: '',
    toggleChecked: true,
    toggleLeading: 'none',
    toggleTrailing: 'none',
    toggleAccentKey: 'default',
    switchLabel: 'Sync enabled',
    switchDescription: 'Inline binary control.',
    switchChecked: true,
    switchAccentKey: 'default',
    disabled: false,
    className: '',
    contentClassName: '',
    titleClassName: '',
    valueClassName: '',
    descriptionClassName: '',
    helperClassName: '',
    indicatorClassName: '',
    switchTrackClassName: '',
    switchThumbClassName: '',
    switchLabelClassName: '',
    switchDescriptionClassName: '',
  },
  argTypes: {
    chipTitle: { name: 'ChipCard.title', control: 'text', table: { category: 'ChipCard' } },
    chipValue: { name: 'ChipCard.value', control: 'text', table: { category: 'ChipCard' } },
    chipHelper: { name: 'ChipCard.helper', control: 'text', table: { category: 'ChipCard' } },
    chipTone: { name: 'ChipCard.tone', control: 'select', options: ['neutral', 'accent', 'success', 'warning', 'danger'], table: { category: 'ChipCard' } },
    chipSelected: { name: 'ChipCard.selected', control: 'boolean', table: { category: 'ChipCard' } },
    chipDisabled: { name: 'ChipCard.disabled', control: 'boolean', table: { category: 'ChipCard' } },
    chipClickable: { name: 'ChipCard.onClick', control: 'boolean', table: { category: 'ChipCard' } },
    chipLeading: { name: 'ChipCard.leading', control: 'select', options: iconOptions, table: { category: 'ChipCard slots' } },
    chipTrailing: { name: 'ChipCard.trailing', control: 'select', options: iconOptions, table: { category: 'ChipCard slots' } },
    chipAccentKey: { name: 'ChipCard.accentKey', control: 'select', options: accentOptions, table: { category: 'ChipCard' } },
    radioTitle: { name: 'RadioCard.title', control: 'text', table: { category: 'RadioCard' } },
    radioDescription: { name: 'RadioCard.description', control: 'text', table: { category: 'RadioCard' } },
    radioHelper: { name: 'RadioCard.helper', control: 'text', table: { category: 'RadioCard' } },
    radioChecked: { name: 'RadioCard.checked', control: 'boolean', table: { category: 'RadioCard' } },
    radioName: { name: 'RadioCard.name', control: 'text', table: { category: 'RadioCard' } },
    radioValue: { name: 'RadioCard.value', control: 'text', table: { category: 'RadioCard' } },
    radioToggleable: { name: 'RadioCard.toggleable', control: 'boolean', table: { category: 'RadioCard' } },
    radioLeading: { name: 'RadioCard.leading', control: 'select', options: iconOptions, table: { category: 'RadioCard slots' } },
    radioTrailing: { name: 'RadioCard.trailing', control: 'select', options: iconOptions, table: { category: 'RadioCard slots' } },
    radioAccentKey: { name: 'RadioCard.accentKey', control: 'select', options: accentOptions, table: { category: 'RadioCard' } },
    toggleTitle: { name: 'ToggleCard.title', control: 'text', table: { category: 'ToggleCard' } },
    toggleDescription: { name: 'ToggleCard.description', control: 'text', table: { category: 'ToggleCard' } },
    toggleHelper: { name: 'ToggleCard.helper', control: 'text', table: { category: 'ToggleCard' } },
    toggleChecked: { name: 'ToggleCard.checked', control: 'boolean', table: { category: 'ToggleCard' } },
    toggleLeading: { name: 'ToggleCard.leading', control: 'select', options: iconOptions, table: { category: 'ToggleCard slots' } },
    toggleTrailing: { name: 'ToggleCard.trailing', control: 'select', options: iconOptions, table: { category: 'ToggleCard slots' } },
    toggleAccentKey: { name: 'ToggleCard.accentKey', control: 'select', options: accentOptions, table: { category: 'ToggleCard' } },
    switchLabel: { name: 'Switch.label', control: 'text', table: { category: 'Switch' } },
    switchDescription: { name: 'Switch.description', control: 'text', table: { category: 'Switch' } },
    switchChecked: { name: 'Switch.checked', control: 'boolean', table: { category: 'Switch' } },
    switchAccentKey: { name: 'Switch.accentKey', control: 'select', options: accentOptions, table: { category: 'Switch' } },
    disabled: { control: 'boolean', table: { category: 'Choice controls' } },
    className: { control: 'text', table: { category: 'Shared classes' } },
    contentClassName: { control: 'text', table: { category: 'Shared classes' } },
    titleClassName: { control: 'text', table: { category: 'Shared classes' } },
    valueClassName: { name: 'ChipCard.valueClassName', control: 'text', table: { category: 'ChipCard classes' } },
    descriptionClassName: { control: 'text', table: { category: 'Shared classes' } },
    helperClassName: { control: 'text', table: { category: 'Shared classes' } },
    indicatorClassName: { name: 'RadioCard.indicatorClassName', control: 'text', table: { category: 'RadioCard classes' } },
    switchTrackClassName: { name: 'Switch.trackClassName', control: 'text', table: { category: 'Switch classes' } },
    switchThumbClassName: { name: 'Switch.thumbClassName', control: 'text', table: { category: 'Switch classes' } },
    switchLabelClassName: { name: 'Switch.labelClassName', control: 'text', table: { category: 'Switch classes' } },
    switchDescriptionClassName: { name: 'Switch.descriptionClassName', control: 'text', table: { category: 'Switch classes' } },
  },
  parameters: docsSource(
    `
import { ChipCard, RadioCard, Switch, ToggleCard } from '@react/ui';
import '@react/ui/styles.css';

export function Example() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <ChipCard title="Available" value="$12,480.22" helper="Realtime balance" />
      <RadioCard title="Recommended" description="Selectable card with radio semantics." defaultChecked />
      <ToggleCard title="Notify reviewers" description="Binary card setting." defaultChecked />
      <Switch label="Sync enabled" description="Inline binary control." defaultChecked />
    </div>
  );
}
`,
    'Exact card choice and switch composition code.',
  ),
  render: function ChoiceComponentsStory(args) {
    const updateArgs = useStoryArgsUpdater<ChoiceComponentArgs>();

    return (
      <StoryShell title="ChipCard, RadioCard, ToggleCard, and Switch" description="Card-like choices and inline binary controls.">
        <Section title="Controlled choice example" description="These controls map to ChipCard, RadioCard, ToggleCard, and Switch props.">
          <div className="grid gap-3 md:grid-cols-2">
            <ChipCard
              title={args.chipTitle}
              value={args.chipValue}
              helper={args.chipHelper}
              tone={args.chipTone}
              selected={args.chipSelected}
              disabled={args.disabled || args.chipDisabled}
              onClick={args.chipClickable ? () => updateArgs({ chipSelected: !args.chipSelected }) : undefined}
              leading={args.chipLeading === 'none' ? undefined : <Icon name={args.chipLeading} className="h-4 w-4" />}
              trailing={args.chipTrailing === 'none' ? undefined : <Icon name={args.chipTrailing} className="h-4 w-4" />}
              accentKey={args.chipAccentKey}
              className={args.className || undefined}
              contentClassName={args.contentClassName || undefined}
              titleClassName={args.titleClassName || undefined}
              valueClassName={args.valueClassName || undefined}
              helperClassName={args.helperClassName || undefined}
            />
            <RadioCard
              title={args.radioTitle}
              description={args.radioDescription}
              helper={args.radioHelper || undefined}
              checked={args.radioChecked}
              defaultChecked={args.radioChecked}
              onCheckedChange={(checked) => updateArgs({ radioChecked: checked })}
              name={args.radioName || undefined}
              value={args.radioValue}
              toggleable={args.radioToggleable}
              disabled={args.disabled}
              leading={args.radioLeading === 'none' ? undefined : <Icon name={args.radioLeading} className="h-4 w-4" />}
              trailing={args.radioTrailing === 'none' ? undefined : <Icon name={args.radioTrailing} className="h-4 w-4" />}
              accentKey={args.radioAccentKey}
              className={args.className || undefined}
              contentClassName={args.contentClassName || undefined}
              titleClassName={args.titleClassName || undefined}
              descriptionClassName={args.descriptionClassName || undefined}
              helperClassName={args.helperClassName || undefined}
              indicatorClassName={args.indicatorClassName || undefined}
            />
            <ToggleCard
              title={args.toggleTitle}
              description={args.toggleDescription}
              helper={args.toggleHelper || undefined}
              checked={args.toggleChecked}
              defaultChecked={args.toggleChecked}
              onCheckedChange={(checked) => updateArgs({ toggleChecked: checked })}
              disabled={args.disabled}
              leading={args.toggleLeading === 'none' ? undefined : <Icon name={args.toggleLeading} className="h-4 w-4" />}
              trailing={args.toggleTrailing === 'none' ? undefined : <Icon name={args.toggleTrailing} className="h-4 w-4" />}
              accentKey={args.toggleAccentKey}
              className={args.className || undefined}
              contentClassName={args.contentClassName || undefined}
              titleClassName={args.titleClassName || undefined}
              descriptionClassName={args.descriptionClassName || undefined}
              helperClassName={args.helperClassName || undefined}
            />
            <Switch
              label={args.switchLabel}
              description={args.switchDescription}
              checked={args.switchChecked}
              defaultChecked={args.switchChecked}
              onCheckedChange={(checked) => updateArgs({ switchChecked: checked })}
              disabled={args.disabled}
              accentKey={args.switchAccentKey}
              className={args.className || undefined}
              trackClassName={args.switchTrackClassName || undefined}
              thumbClassName={args.switchThumbClassName || undefined}
              labelClassName={args.switchLabelClassName || args.titleClassName || undefined}
              descriptionClassName={args.switchDescriptionClassName || args.descriptionClassName || undefined}
            />
          </div>
        </Section>
        <Section title="Choice cases" description="Metric cards, selectable cards, card tones, radio cards, toggle cards, switches, slots, disabled, and compact states.">
          <CaseGrid cases={choiceCardCases} />
        </Section>
      </StoryShell>
    );
  },
};

interface TooltipIconArgs {
  iconName: string;
  iconTitle: string;
  iconClassName: string;
  content: string;
  placement: 'top' | 'right' | 'bottom' | 'left';
  open: boolean;
  defaultOpen: boolean;
  delay: number;
  accentKey: string;
  className: string;
  panelClassName: string;
}

export const TooltipAndIconComponents: StoryObj<TooltipIconArgs> = {
  args: {
    iconName: 'refresh',
    iconTitle: '',
    iconClassName: 'h-4 w-4',
    content: 'Refresh data',
    placement: 'top',
    open: false,
    defaultOpen: false,
    delay: 120,
    accentKey: 'default',
    className: '',
    panelClassName: '',
  },
  argTypes: {
    iconName: { name: 'Icon.name', control: 'select', options: iconOptions.filter((name) => name !== 'none'), table: { category: 'Icon' } },
    iconTitle: { name: 'Icon.title', control: 'text', table: { category: 'Icon' } },
    iconClassName: { name: 'Icon.className', control: 'text', table: { category: 'Icon classes' } },
    content: { name: 'Tooltip.content', control: 'text', table: { category: 'Tooltip' } },
    placement: { name: 'Tooltip.placement', control: 'select', options: ['top', 'right', 'bottom', 'left'], table: { category: 'Tooltip' } },
    open: { name: 'Tooltip.open', control: 'boolean', table: { category: 'Tooltip' } },
    defaultOpen: { name: 'Tooltip.defaultOpen', control: 'boolean', table: { category: 'Tooltip' } },
    delay: { name: 'Tooltip.delay', control: 'number', table: { category: 'Tooltip' } },
    accentKey: { name: 'Tooltip.accentKey', control: 'select', options: accentOptions, table: { category: 'Tooltip' } },
    className: { name: 'Tooltip.className', control: 'text', table: { category: 'Tooltip classes' } },
    panelClassName: { name: 'Tooltip.panelClassName', control: 'text', table: { category: 'Tooltip classes' } },
  },
  parameters: docsSource(
    `
import { Button, Icon, Tooltip } from '@react/ui';
import '@react/ui/styles.css';

export function Example() {
  return (
    <Tooltip content="Refresh data" placement="top">
      <Button variant="icon" className="h-9 w-9 px-0" aria-label="Refresh">
        <Icon name="refresh" className="h-4 w-4" />
      </Button>
    </Tooltip>
  );
}
`,
    'Exact Tooltip and Icon composition code.',
  ),
  render: function TooltipAndIconComponentsStory(args) {
    return (
      <StoryShell title="Tooltip and Icon" description="Generic package chrome: tooltips and reusable icons. App-specific logos stay in the consuming app.">
        <Section title="Controlled tooltip and icon example" description="These controls map to Tooltip and Icon props.">
          <Tooltip
            content={args.content}
            placement={args.placement}
            open={args.open || undefined}
            defaultOpen={args.defaultOpen}
            delay={args.delay}
            accentKey={args.accentKey}
            className={args.className || undefined}
            panelClassName={args.panelClassName || undefined}
          >
            <Button variant="icon" className="h-9 w-9 px-0" aria-label={args.content}>
              <Icon name={args.iconName} title={args.iconTitle || undefined} className={args.iconClassName || undefined} />
            </Button>
          </Tooltip>
        </Section>
        <Section title="Tooltip and icon cases" description="Placement, disabled tooltips, and common icon names.">
          <CaseGrid cases={tooltipIconCases} />
        </Section>
      </StoryShell>
    );
  },
};
