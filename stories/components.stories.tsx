import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Badge, Banner, Button, Card, ChipCard, Icon, RadioCard, SelectBox, Switch, ToggleCard, Tooltip, type BadgeTone, type SelectBoxOption } from '../src/index';
import '../src/styles.css';
import { CaseGrid, Section, StoryShell, type StoryCase } from './story-helpers';

const meta: Meta = {
  title: 'React UI/Components',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

const options = [
  { label: 'Design Systems', value: 'design', description: 'Reusable UI foundations' },
  { label: 'Platform', value: 'platform', description: 'Delivery, runtime, and infra' },
  { label: 'Research', value: 'research', description: 'Insights and measurement' },
  { label: 'Support Ops', value: 'support', description: 'Customer-facing operations' },
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

export const ButtonComponent: Story = {
  render: function ButtonComponentStory() {
    return (
      <StoryShell title="Button" description="Button prop usage and rendering across action bars, toolbar icons, bulk actions, modal actions, and loading states.">
        <Section title="Button cases" description="Variants, sizes, icons, loading, disabled, full width, and accent override.">
          <CaseGrid cases={buttonCases} />
        </Section>
      </StoryShell>
    );
  },
};

export const SelectBoxComponent: Story = {
  render: function SelectBoxComponentStory() {
    return (
      <StoryShell title="SelectBox" description="Single and multiple selection usage from filters, settings, top bars, and config forms.">
        <Section title="SelectBox cases" description="Single, multi, search, disabled, error, custom summary, custom renderers, object values, adornments, and slot classes.">
          <CaseGrid cases={selectCases} />
        </Section>
      </StoryShell>
    );
  },
};

export const FeedbackComponents: Story = {
  render: function FeedbackComponentsStory() {
    return (
      <StoryShell title="Badge, Banner, and Card" description="Feedback and surface components used in page headers, config notes, dashboard panels, and modal content.">
        <Section title="Feedback and surface cases" description="Badge tones, banners, custom colors, action slots, Card padding modes, interactive cards, and content slots.">
          <CaseGrid cases={feedbackCases} />
        </Section>
      </StoryShell>
    );
  },
};

export const ChoiceComponents: Story = {
  render: function ChoiceComponentsStory() {
    return (
      <StoryShell title="ChipCard, RadioCard, ToggleCard, and Switch" description="Card-like choices and inline binary controls.">
        <Section title="Choice cases" description="Metric cards, selectable cards, card tones, radio cards, toggle cards, switches, slots, disabled, and compact states.">
          <CaseGrid cases={choiceCardCases} />
        </Section>
      </StoryShell>
    );
  },
};

export const TooltipAndIconComponents: Story = {
  render: function TooltipAndIconComponentsStory() {
    return (
      <StoryShell title="Tooltip and Icon" description="Generic package chrome: tooltips and reusable icons. App-specific logos stay in the consuming app.">
        <Section title="Tooltip and icon cases" description="Placement, disabled tooltips, and common icon names.">
          <CaseGrid cases={tooltipIconCases} />
        </Section>
      </StoryShell>
    );
  },
};
