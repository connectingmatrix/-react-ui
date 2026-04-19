import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Badge, DateTimeSelector, Icon, Number as NumberAlias, NumberInput, Text, TextArea } from '../src/index';
import { CaseGrid, Section, StoryShell, type StoryCase } from './story-helpers';
import { useStoryArgsUpdater } from './story-args';
import { docsSource, fieldsSource } from './story-source';

const meta: Meta = {
  title: 'React UI/Fields',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const accentOptions = ['default', 'teal', 'warning', 'danger', 'neutral', 'tailadmin', 'light-blue', 'light-success', 'light-warning', 'light-danger', 'light-neutral'];
const inputTypeOptions = ['text', 'password', 'email', 'url', 'search', 'tel', 'date', 'number'];

function ControlledTextCase() {
  const [value, setValue] = useState('Quarterly planning');
  return <Text label="Controlled value" value={value} onChange={setValue} helperText={`Current length: ${value.length}`} />;
}

function ControlledTextAreaCase() {
  const [value, setValue] = useState('Summarize the customer impact, rollout notes, and known follow-ups.');
  return <TextArea label="Controlled notes" value={value} onChange={setValue} rows={4} helperText={`${value.length} characters`} />;
}

function ControlledNumberCase() {
  const [value, setValue] = useState<number | null>(1250);
  const [raw, setRaw] = useState('1250');
  return (
    <NumberInput
      label="Controlled amount"
      value={value}
      onValueChange={(nextValue, nextRaw) => {
        setValue(nextValue);
        setRaw(nextRaw);
      }}
      prefix="$"
      helperText={`Raw input: ${raw || 'empty'}`}
    />
  );
}

const textCases: StoryCase[] = [
  {
    title: 'Text basic',
    description: 'Plain uncontrolled input with label and placeholder.',
    props: [
      { name: 'label', value: '"Workspace name"' },
      { name: 'placeholder', value: '"Quarterly planning"' },
    ],
    render: <Text label="Workspace name" placeholder="Quarterly planning" />,
  },
  {
    title: 'Text controlled',
    description: 'Matches bot settings screens where state is owned by the consuming app.',
    props: [
      { name: 'value', value: 'value' },
      { name: 'onChange', value: 'setValue' },
      { name: 'helperText', value: 'dynamic text' },
    ],
    render: <ControlledTextCase />,
  },
  {
    title: 'Text password',
    description: 'Password input usage from credential-style settings.',
    props: [
      { name: 'type', value: '"password"' },
      { name: 'placeholder', value: '"API secret"' },
    ],
    render: <Text type="password" label="Secret token" placeholder="API secret" />,
  },
  {
    title: 'Text URL',
    description: 'Long URL input with helper content and controlled class sizing.',
    props: [
      { name: 'type', value: '"url"' },
      { name: 'className', value: '"w-full"' },
      { name: 'helperText', value: '"Used by the service client."' },
    ],
    render: <Text type="url" label="Endpoint" defaultValue="https://api.example.com/v1" helperText="Used by the service client." />,
  },
  {
    title: 'Text date',
    description: 'Date field pattern used by reporting filters.',
    props: [
      { name: 'type', value: '"date"' },
      { name: 'defaultValue', value: '"2026-04-19"' },
    ],
    render: <Text type="date" label="Start date" defaultValue="2026-04-19" />,
  },
  {
    title: 'Text numeric HTML input',
    description: 'Bot config uses Text type=number for raw string inputs where parsing happens app-side.',
    props: [
      { name: 'type', value: '"number"' },
      { name: 'value', value: '"300"' },
      { name: 'onChange', value: '(value) => parse later' },
    ],
    render: <Text type="number" label="Raw amount" defaultValue="300" />,
  },
  {
    title: 'Text left label',
    description: 'Two-column form row with label and description on the left.',
    props: [
      { name: 'labelPosition', value: '"left"' },
      { name: 'description', value: '"Shown beside the input."' },
    ],
    render: <Text label="Display name" labelPosition="left" description="Shown beside the input." defaultValue="Demo workspace" />,
  },
  {
    title: 'Text required',
    description: 'Required marker and native required attribute.',
    props: [
      { name: 'required', value: 'true' },
      { name: 'label', value: '"Owner"' },
    ],
    render: <Text label="Owner" required placeholder="Team owner" />,
  },
  {
    title: 'Text error',
    description: 'Validation text wires aria-invalid and aria-describedby.',
    props: [
      { name: 'error', value: '"This field is required."' },
      { name: 'aria-invalid', value: 'derived from error' },
    ],
    render: <Text label="Project code" defaultValue="" error="This field is required." />,
  },
  {
    title: 'Text disabled',
    description: 'Disabled state for locked config screens.',
    props: [
      { name: 'disabled', value: 'true' },
      { name: 'value', value: '"Locked value"' },
    ],
    render: <Text label="Locked field" value="Locked value" disabled />,
  },
  {
    title: 'Text prefix suffix',
    description: 'Inline adornments for units, icons, and currency.',
    props: [
      { name: 'prefix', value: '<Icon name="search" />' },
      { name: 'suffix', value: '<Badge>live</Badge>' },
    ],
    render: <Text label="Search" prefix={<Icon name="search" className="h-4 w-4" />} suffix={<Badge>live</Badge>} placeholder="Search records" />,
  },
  {
    title: 'Text accent key',
    description: 'Component-level accent when there is no provider override.',
    props: [{ name: 'accentKey', value: '"warning"' }],
    accentKey: 'warning',
    render: <Text accentKey="warning" label="Warning scope" defaultValue="Review needed" />,
  },
  {
    title: 'Text slot classes',
    description: 'Targeted class props for wrapper, label, helper, and input.',
    props: [
      { name: 'wrapperClassName', value: '"rounded border p-3"' },
      { name: 'inputClassName', value: '"bg-white"' },
      { name: 'helperClassName', value: '"text-xs"' },
    ],
    render: <Text label="Styled field" helperText="Slot classes stay targeted." wrapperClassName="rounded-[10px] border border-white/8 p-3" />,
  },
  {
    title: 'Text no label',
    description: 'Compact toolbar search field as used in table/filter toolbars.',
    props: [
      { name: 'placeholder', value: '"Search rows"' },
      { name: 'className', value: '"w-[280px]"' },
    ],
    render: <Text placeholder="Search rows" className="w-[280px]" />,
  },
  {
    title: 'Text helper only',
    description: 'Helper text without an error.',
    props: [{ name: 'helperText', value: '"Visible to all workspace members."' }],
    render: <Text label="Summary" helperText="Visible to all workspace members." defaultValue="Weekly operational summary" />,
  },
];

const textAreaCases: StoryCase[] = [
  {
    title: 'TextArea basic',
    description: 'Uncontrolled multi-line field with label and placeholder.',
    props: [
      { name: 'label', value: '"Notes"' },
      { name: 'placeholder', value: '"Add context"' },
    ],
    render: <TextArea label="Notes" placeholder="Add context" />,
  },
  {
    title: 'TextArea controlled',
    description: 'App-owned state with dynamic helper copy.',
    props: [
      { name: 'value', value: 'value' },
      { name: 'onChange', value: 'setValue' },
    ],
    render: <ControlledTextAreaCase />,
  },
  {
    title: 'TextArea fixed rows',
    description: 'Explicit row count for compact review notes.',
    props: [{ name: 'rows', value: '3' }],
    render: <TextArea label="Review note" rows={3} defaultValue="Ready for final design review." />,
  },
  {
    title: 'TextArea long content',
    description: 'Wrapped copy and resize-friendly content.',
    props: [{ name: 'defaultValue', value: 'long paragraph' }],
    render: (
      <TextArea
        label="Incident summary"
        rows={6}
        defaultValue="The preview environment completed deployment, but two dependent checks were retried before the release could proceed."
      />
    ),
  },
  {
    title: 'TextArea error',
    description: 'Validation error for minimum required content.',
    props: [{ name: 'error', value: '"Add at least 20 characters."' }],
    render: <TextArea label="Decision rationale" error="Add at least 20 characters." defaultValue="Too short" />,
  },
  {
    title: 'TextArea disabled',
    description: 'Read-only looking state for locked sections.',
    props: [{ name: 'disabled', value: 'true' }],
    render: <TextArea label="Archived notes" disabled defaultValue="This record is locked after approval." />,
  },
  {
    title: 'TextArea left label',
    description: 'Two-column layout for dense configuration screens.',
    props: [{ name: 'labelPosition', value: '"left"' }],
    render: <TextArea label="Audit note" labelPosition="left" description="Visible in the review log." defaultValue="Updated after stakeholder review." />,
  },
  {
    title: 'TextArea required',
    description: 'Required marker with multi-line text.',
    props: [{ name: 'required', value: 'true' }],
    render: <TextArea label="Approval reason" required placeholder="Explain why this can ship" />,
  },
  {
    title: 'TextArea accent key',
    description: 'Danger accent for destructive confirmation copy.',
    props: [{ name: 'accentKey', value: '"danger"' }],
    accentKey: 'danger',
    render: <TextArea accentKey="danger" label="Confirmation" defaultValue="I understand this action cannot be undone." />,
  },
  {
    title: 'TextArea slot classes',
    description: 'Textarea-specific class slot for taller review blocks.',
    props: [
      { name: 'textareaClassName', value: '"min-h-[140px]"' },
      { name: 'helperClassName', value: '"text-xs"' },
    ],
    render: <TextArea label="Styled notes" textareaClassName="min-h-[140px]" helperText="Custom textarea slot." />,
  },
];

const dateTimeCases: StoryCase[] = [
  {
    title: 'DateTimeSelector datetime',
    description: 'Datetime-local selector for timestamp filters and audit windows.',
    props: [
      { name: 'type', value: '"datetime-local"' },
      { name: 'value', value: '"2026-04-19T10:30"' },
    ],
    render: <DateTimeSelector label="From" defaultValue="2026-04-19T10:30" />,
  },
  {
    title: 'DateTimeSelector date',
    description: 'Date-only selector for backtests, reporting, and wallet history ranges.',
    props: [
      { name: 'type', value: '"date"' },
      { name: 'defaultValue', value: '"2026-04-19"' },
    ],
    render: <DateTimeSelector type="date" label="Run date" defaultValue="2026-04-19" />,
  },
  {
    title: 'DateTimeSelector range pair',
    description: 'Two selectors compose into a range while the host app owns the values.',
    props: [
      { name: 'value', value: 'from / to values' },
      { name: 'onChange', value: 'setFrom / setTo' },
    ],
    render: (
      <div className="grid gap-3 sm:grid-cols-2">
        <DateTimeSelector label="From" defaultValue="2026-04-19T09:00" />
        <DateTimeSelector label="To" defaultValue="2026-04-19T17:00" />
      </div>
    ),
  },
  {
    title: 'DateTimeSelector error',
    description: 'Validation and helper text mirror the Text field API.',
    props: [{ name: 'error', value: '"End must be after start."' }],
    render: <DateTimeSelector label="End" defaultValue="2026-04-19T08:00" error="End must be after start." />,
  },
];

const numberCases: StoryCase[] = [
  {
    title: 'NumberInput basic',
    description: 'Parsed numeric value with label and decimal keyboard.',
    props: [
      { name: 'defaultValue', value: '42' },
      { name: 'onChange', value: '(number | null) => void' },
    ],
    render: <NumberInput label="Capacity" defaultValue={42} />,
  },
  {
    title: 'NumberInput controlled',
    description: 'Controlled numeric state plus raw text callback.',
    props: [
      { name: 'value', value: 'value' },
      { name: 'onValueChange', value: '(value, rawValue) => void' },
    ],
    render: <ControlledNumberCase />,
  },
  {
    title: 'Number alias',
    description: 'The public Number export aliases NumberInput.',
    props: [{ name: 'Number', value: 'NumberInput alias' }],
    render: <NumberAlias label="Number alias" defaultValue={18} suffix="items" />,
  },
  {
    title: 'Number currency',
    description: 'Currency prefix and helper copy for finance-like forms without domain logic.',
    props: [
      { name: 'prefix', value: '"$"' },
      { name: 'defaultValue', value: '12000' },
    ],
    render: <NumberInput label="Budget" prefix="$" defaultValue={12000} helperText="Stored as a number by the host app." />,
  },
  {
    title: 'Number percentage',
    description: 'Suffix adornment for percentage thresholds.',
    props: [
      { name: 'suffix', value: '"%"' },
      { name: 'min/max', value: '0 / 100' },
    ],
    render: <NumberInput label="Threshold" suffix="%" defaultValue={12.5} min={0} max={100} />,
  },
  {
    title: 'Number empty value',
    description: 'Empty field emits null instead of NaN.',
    props: [{ name: 'defaultValue', value: 'null' }],
    render: <NumberInput label="Optional limit" defaultValue={null} placeholder="No limit" />,
  },
  {
    title: 'Number invalid transitional text',
    description: 'Raw text is preserved while parsed value is null.',
    props: [{ name: 'onValueChange', value: 'receives raw string' }],
    render: <NumberInput label="Signed amount" placeholder="Type - while editing" helperText="Try typing a minus sign." />,
  },
  {
    title: 'Number disabled',
    description: 'Disabled numeric field for dependent settings.',
    props: [{ name: 'disabled', value: 'true' }],
    render: <NumberInput label="Locked allocation" value={250} disabled prefix="$" />,
  },
  {
    title: 'Number error',
    description: 'Numeric validation state with error text.',
    props: [{ name: 'error', value: '"Must be greater than zero."' }],
    render: <NumberInput label="Quantity" defaultValue={0} error="Must be greater than zero." />,
  },
  {
    title: 'Number left label',
    description: 'Dense left-label layout for settings pages.',
    props: [{ name: 'labelPosition', value: '"left"' }],
    render: <NumberInput label="Retry delay" labelPosition="left" description="Delay before the next attempt." defaultValue={1500} suffix="ms" />,
  },
  {
    title: 'Number accent key',
    description: 'Success accent at component scope.',
    props: [{ name: 'accentKey', value: '"teal"' }],
    accentKey: 'teal',
    render: <NumberInput accentKey="teal" label="Approved amount" defaultValue={900} prefix="$" />,
  },
  {
    title: 'Number slot classes',
    description: 'Input, label, helper, and wrapper slots stay targeted.',
    props: [
      { name: 'wrapperClassName', value: '"rounded border p-3"' },
      { name: 'inputClassName', value: '"font-mono"' },
    ],
    render: <NumberInput label="Styled number" defaultValue={64} inputClassName="font-mono" wrapperClassName="rounded-[10px] border border-white/8 p-3" />,
  },
];

interface TextFieldArgs {
  label: string;
  value: string;
  defaultValue: string;
  placeholder: string;
  description: string;
  helperText: string;
  error: string;
  labelPosition: 'top' | 'left';
  disabled: boolean;
  required: boolean;
  type: string;
  name: string;
  id: string;
  autoComplete: string;
  maxLength: number;
  prefix: string;
  suffix: string;
  accentKey: string;
  className: string;
  wrapperClassName: string;
  labelClassName: string;
  descriptionClassName: string;
  errorClassName: string;
  helperClassName: string;
  inputClassName: string;
}

export const TextField: StoryObj<TextFieldArgs> = {
  args: {
    label: 'Workspace name',
    value: 'Quarterly planning',
    defaultValue: '',
    placeholder: 'Type here',
    description: 'Shown beside the input.',
    helperText: 'Visible to all workspace members.',
    error: '',
    labelPosition: 'top',
    disabled: false,
    required: false,
    type: 'text',
    name: 'workspaceName',
    id: '',
    autoComplete: '',
    maxLength: 120,
    prefix: 'none',
    suffix: 'none',
    accentKey: 'default',
    className: '',
    wrapperClassName: '',
    labelClassName: '',
    descriptionClassName: '',
    errorClassName: '',
    helperClassName: '',
    inputClassName: '',
  },
  argTypes: {
    label: { control: 'text', table: { category: 'Text' } },
    value: { control: 'text', table: { category: 'Text' } },
    defaultValue: { control: 'text', table: { category: 'Text' } },
    placeholder: { control: 'text', table: { category: 'Text' } },
    description: { control: 'text', table: { category: 'Text' } },
    helperText: { control: 'text', table: { category: 'Text' } },
    error: { control: 'text', table: { category: 'Text' } },
    labelPosition: { control: 'select', options: ['top', 'left'], table: { category: 'Text' } },
    disabled: { control: 'boolean', table: { category: 'Text' } },
    required: { control: 'boolean', table: { category: 'Text' } },
    type: { control: 'select', options: inputTypeOptions, table: { category: 'Text HTML props' } },
    name: { control: 'text', table: { category: 'Text HTML props' } },
    id: { control: 'text', table: { category: 'Text HTML props' } },
    autoComplete: { control: 'text', table: { category: 'Text HTML props' } },
    maxLength: { control: { type: 'number', min: 0, max: 500, step: 1 }, table: { category: 'Text HTML props' } },
    prefix: { control: 'select', options: ['none', 'search', 'dollar', 'text'], table: { category: 'Text slots' } },
    suffix: { control: 'select', options: ['none', 'badge', 'percent', 'text'], table: { category: 'Text slots' } },
    accentKey: { control: 'select', options: accentOptions, table: { category: 'Text' } },
    className: { control: 'text', table: { category: 'Text classes' } },
    wrapperClassName: { control: 'text', table: { category: 'Text classes' } },
    labelClassName: { control: 'text', table: { category: 'Text classes' } },
    descriptionClassName: { control: 'text', table: { category: 'Text classes' } },
    errorClassName: { control: 'text', table: { category: 'Text classes' } },
    helperClassName: { control: 'text', table: { category: 'Text classes' } },
    inputClassName: { control: 'text', table: { category: 'Text classes' } },
  },
  parameters: docsSource(fieldsSource, 'Exact field usage code for Text, TextArea, NumberInput, and DateTimeSelector.'),
  render: function TextFieldStory(args) {
    const updateArgs = useStoryArgsUpdater<TextFieldArgs>();
    const prefix = args.prefix === 'search' ? <Icon name="search" className="h-4 w-4" /> : args.prefix === 'dollar' ? '$' : args.prefix === 'text' ? 'Pre' : undefined;
    const suffix = args.suffix === 'badge' ? <Badge>live</Badge> : args.suffix === 'percent' ? '%' : args.suffix === 'text' ? 'Suf' : undefined;

    return (
      <StoryShell title="Text field" description="Every Text prop pattern used by app settings, toolbar filters, credential forms, and configuration rows.">
        <Section title="Controlled Text example" description="These controls map to Text props.">
          <Text
            label={args.label}
            value={args.value}
            onChange={(value) => updateArgs({ value })}
            defaultValue={args.defaultValue || undefined}
            placeholder={args.placeholder}
            description={args.description}
            helperText={args.error ? undefined : args.helperText}
            error={args.error || undefined}
            labelPosition={args.labelPosition}
            disabled={args.disabled}
            required={args.required}
            type={args.type}
            name={args.name || undefined}
            id={args.id || undefined}
            autoComplete={args.autoComplete || undefined}
            maxLength={args.maxLength || undefined}
            prefix={prefix}
            suffix={suffix}
            accentKey={args.accentKey}
            className={args.className || undefined}
            wrapperClassName={args.wrapperClassName || undefined}
            labelClassName={args.labelClassName || undefined}
            descriptionClassName={args.descriptionClassName || undefined}
            errorClassName={args.errorClassName || undefined}
            helperClassName={args.helperClassName || undefined}
            inputClassName={args.inputClassName || undefined}
          />
        </Section>
        <Section title="Text cases" description="Basic, controlled, password, URL, date, numeric string, labels, validation, adornments, accent, and slot classes.">
          <CaseGrid cases={textCases} />
        </Section>
      </StoryShell>
    );
  },
};

interface TextAreaFieldArgs {
  label: string;
  value: string;
  defaultValue: string;
  placeholder: string;
  description: string;
  helperText: string;
  rows: number;
  labelPosition: 'top' | 'left';
  error: string;
  disabled: boolean;
  required: boolean;
  name: string;
  id: string;
  maxLength: number;
  accentKey: string;
  className: string;
  wrapperClassName: string;
  labelClassName: string;
  descriptionClassName: string;
  errorClassName: string;
  helperClassName: string;
  textareaClassName: string;
}

export const TextAreaField: StoryObj<TextAreaFieldArgs> = {
  args: {
    label: 'Notes',
    value: 'Editable multi-line value.',
    defaultValue: '',
    placeholder: 'Add context',
    description: 'Use this for longer review copy.',
    helperText: 'Supports the same label and error API as Text.',
    rows: 4,
    labelPosition: 'top',
    error: '',
    disabled: false,
    required: false,
    name: 'notes',
    id: '',
    maxLength: 500,
    accentKey: 'default',
    className: '',
    wrapperClassName: '',
    labelClassName: '',
    descriptionClassName: '',
    errorClassName: '',
    helperClassName: '',
    textareaClassName: '',
  },
  argTypes: {
    label: { control: 'text', table: { category: 'TextArea' } },
    value: { control: 'text', table: { category: 'TextArea' } },
    defaultValue: { control: 'text', table: { category: 'TextArea' } },
    placeholder: { control: 'text', table: { category: 'TextArea' } },
    description: { control: 'text', table: { category: 'TextArea' } },
    helperText: { control: 'text', table: { category: 'TextArea' } },
    rows: { control: { type: 'number', min: 2, max: 10, step: 1 }, table: { category: 'TextArea' } },
    labelPosition: { control: 'select', options: ['top', 'left'], table: { category: 'TextArea' } },
    error: { control: 'text', table: { category: 'TextArea' } },
    disabled: { control: 'boolean', table: { category: 'TextArea' } },
    required: { control: 'boolean', table: { category: 'TextArea' } },
    name: { control: 'text', table: { category: 'TextArea HTML props' } },
    id: { control: 'text', table: { category: 'TextArea HTML props' } },
    maxLength: { control: { type: 'number', min: 0, max: 1000, step: 1 }, table: { category: 'TextArea HTML props' } },
    accentKey: { control: 'select', options: accentOptions, table: { category: 'TextArea' } },
    className: { control: 'text', table: { category: 'TextArea classes' } },
    wrapperClassName: { control: 'text', table: { category: 'TextArea classes' } },
    labelClassName: { control: 'text', table: { category: 'TextArea classes' } },
    descriptionClassName: { control: 'text', table: { category: 'TextArea classes' } },
    errorClassName: { control: 'text', table: { category: 'TextArea classes' } },
    helperClassName: { control: 'text', table: { category: 'TextArea classes' } },
    textareaClassName: { control: 'text', table: { category: 'TextArea classes' } },
  },
  parameters: docsSource(fieldsSource, 'Exact TextArea usage appears in the full field composition snippet.'),
  render: function TextAreaFieldStory(args) {
    const updateArgs = useStoryArgsUpdater<TextAreaFieldArgs>();

    return (
      <StoryShell title="TextArea field" description="Multi-line field prop usage and rendering states.">
        <Section title="Controlled TextArea example" description="These controls map to TextArea props.">
          <TextArea
            label={args.label}
            value={args.value}
            onChange={(value) => updateArgs({ value })}
            defaultValue={args.defaultValue || undefined}
            placeholder={args.placeholder}
            description={args.description || undefined}
            helperText={args.error ? undefined : args.helperText || undefined}
            rows={args.rows}
            labelPosition={args.labelPosition}
            error={args.error || undefined}
            disabled={args.disabled}
            required={args.required}
            name={args.name || undefined}
            id={args.id || undefined}
            maxLength={args.maxLength || undefined}
            accentKey={args.accentKey}
            className={args.className || undefined}
            wrapperClassName={args.wrapperClassName || undefined}
            labelClassName={args.labelClassName || undefined}
            descriptionClassName={args.descriptionClassName || undefined}
            errorClassName={args.errorClassName || undefined}
            helperClassName={args.helperClassName || undefined}
            textareaClassName={args.textareaClassName || undefined}
          />
        </Section>
        <Section title="TextArea cases" description="Controlled and uncontrolled notes, rows, validation, disabled state, left labels, accent, and slot classes.">
          <CaseGrid cases={textAreaCases} />
        </Section>
      </StoryShell>
    );
  },
};

interface DateTimeSelectorFieldArgs {
  label: string;
  value: string;
  defaultValue: string;
  placeholder: string;
  description: string;
  helperText: string;
  type: 'datetime-local' | 'date' | 'time' | 'month' | 'week';
  min: string;
  max: string;
  error: string;
  disabled: boolean;
  required: boolean;
  labelPosition: 'top' | 'left';
  name: string;
  id: string;
  accentKey: string;
  className: string;
  wrapperClassName: string;
  labelClassName: string;
  descriptionClassName: string;
  errorClassName: string;
  helperClassName: string;
  inputClassName: string;
}

export const DateTimeSelectorField: StoryObj<DateTimeSelectorFieldArgs> = {
  args: {
    label: 'Start time',
    value: '2026-04-19T10:30',
    defaultValue: '',
    placeholder: '',
    description: 'Choose a date or time value.',
    helperText: 'Uses the native browser date/time input.',
    type: 'datetime-local',
    min: '',
    max: '',
    error: '',
    disabled: false,
    required: false,
    labelPosition: 'top',
    name: 'startTime',
    id: '',
    accentKey: 'default',
    className: '',
    wrapperClassName: '',
    labelClassName: '',
    descriptionClassName: '',
    errorClassName: '',
    helperClassName: '',
    inputClassName: '',
  },
  argTypes: {
    label: { control: 'text', table: { category: 'DateTimeSelector' } },
    value: { control: 'text', table: { category: 'DateTimeSelector' } },
    defaultValue: { control: 'text', table: { category: 'DateTimeSelector' } },
    placeholder: { control: 'text', table: { category: 'DateTimeSelector' } },
    description: { control: 'text', table: { category: 'DateTimeSelector' } },
    helperText: { control: 'text', table: { category: 'DateTimeSelector' } },
    type: { control: 'select', options: ['datetime-local', 'date', 'time', 'month', 'week'], table: { category: 'DateTimeSelector' } },
    min: { control: 'text', table: { category: 'DateTimeSelector' } },
    max: { control: 'text', table: { category: 'DateTimeSelector' } },
    error: { control: 'text', table: { category: 'DateTimeSelector' } },
    disabled: { control: 'boolean', table: { category: 'DateTimeSelector' } },
    required: { control: 'boolean', table: { category: 'DateTimeSelector' } },
    labelPosition: { control: 'select', options: ['top', 'left'], table: { category: 'DateTimeSelector' } },
    name: { control: 'text', table: { category: 'DateTimeSelector HTML props' } },
    id: { control: 'text', table: { category: 'DateTimeSelector HTML props' } },
    accentKey: { control: 'select', options: accentOptions, table: { category: 'DateTimeSelector' } },
    className: { control: 'text', table: { category: 'DateTimeSelector classes' } },
    wrapperClassName: { control: 'text', table: { category: 'DateTimeSelector classes' } },
    labelClassName: { control: 'text', table: { category: 'DateTimeSelector classes' } },
    descriptionClassName: { control: 'text', table: { category: 'DateTimeSelector classes' } },
    errorClassName: { control: 'text', table: { category: 'DateTimeSelector classes' } },
    helperClassName: { control: 'text', table: { category: 'DateTimeSelector classes' } },
    inputClassName: { control: 'text', table: { category: 'DateTimeSelector classes' } },
  },
  parameters: docsSource(fieldsSource, 'Exact DateTimeSelector usage appears in the full field composition snippet.'),
  render: function DateTimeSelectorFieldStory(args) {
    const updateArgs = useStoryArgsUpdater<DateTimeSelectorFieldArgs>();

    return (
      <StoryShell title="DateTimeSelector field" description="Dedicated date and datetime selector built on the same label, helper, error, and accent API as Text.">
        <Section title="Controlled DateTimeSelector example" description="These controls map to DateTimeSelector props.">
          <DateTimeSelector
            label={args.label}
            value={args.value}
            onChange={(value) => updateArgs({ value })}
            defaultValue={args.defaultValue || undefined}
            placeholder={args.placeholder || undefined}
            description={args.description || undefined}
            helperText={args.error ? undefined : args.helperText || undefined}
            type={args.type}
            min={args.min || undefined}
            max={args.max || undefined}
            error={args.error || undefined}
            disabled={args.disabled}
            required={args.required}
            labelPosition={args.labelPosition}
            name={args.name || undefined}
            id={args.id || undefined}
            accentKey={args.accentKey}
            className={args.className || undefined}
            wrapperClassName={args.wrapperClassName || undefined}
            labelClassName={args.labelClassName || undefined}
            descriptionClassName={args.descriptionClassName || undefined}
            errorClassName={args.errorClassName || undefined}
            helperClassName={args.helperClassName || undefined}
            inputClassName={args.inputClassName || undefined}
          />
        </Section>
        <Section title="Date and datetime cases" description="Date-only, datetime-local, composed ranges, and validation states.">
          <CaseGrid cases={dateTimeCases} />
        </Section>
      </StoryShell>
    );
  },
};

interface NumberInputFieldArgs {
  label: string;
  value: number | null;
  defaultValue: number | null;
  placeholder: string;
  description: string;
  helperText: string;
  prefix: string;
  suffix: string;
  min: number;
  max: number;
  step: number;
  error: string;
  disabled: boolean;
  required: boolean;
  labelPosition: 'top' | 'left';
  name: string;
  id: string;
  accentKey: string;
  className: string;
  wrapperClassName: string;
  labelClassName: string;
  descriptionClassName: string;
  errorClassName: string;
  helperClassName: string;
  inputClassName: string;
}

export const NumberInputField: StoryObj<NumberInputFieldArgs> = {
  args: {
    label: 'Amount',
    value: 1250,
    defaultValue: null,
    placeholder: '0.00',
    description: 'Parsed as number or null.',
    helperText: 'onValueChange also exposes the raw input string.',
    prefix: '$',
    suffix: '',
    min: 0,
    max: 10000,
    step: 1,
    error: '',
    disabled: false,
    required: false,
    labelPosition: 'top',
    name: 'amount',
    id: '',
    accentKey: 'default',
    className: '',
    wrapperClassName: '',
    labelClassName: '',
    descriptionClassName: '',
    errorClassName: '',
    helperClassName: '',
    inputClassName: '',
  },
  argTypes: {
    label: { control: 'text', table: { category: 'NumberInput' } },
    value: { control: 'number', table: { category: 'NumberInput' } },
    defaultValue: { control: 'number', table: { category: 'NumberInput' } },
    placeholder: { control: 'text', table: { category: 'NumberInput' } },
    description: { control: 'text', table: { category: 'NumberInput' } },
    helperText: { control: 'text', table: { category: 'NumberInput' } },
    prefix: { control: 'text', table: { category: 'NumberInput' } },
    suffix: { control: 'text', table: { category: 'NumberInput' } },
    min: { control: 'number', table: { category: 'NumberInput' } },
    max: { control: 'number', table: { category: 'NumberInput' } },
    step: { control: 'number', table: { category: 'NumberInput' } },
    error: { control: 'text', table: { category: 'NumberInput' } },
    disabled: { control: 'boolean', table: { category: 'NumberInput' } },
    required: { control: 'boolean', table: { category: 'NumberInput' } },
    labelPosition: { control: 'select', options: ['top', 'left'], table: { category: 'NumberInput' } },
    name: { control: 'text', table: { category: 'NumberInput HTML props' } },
    id: { control: 'text', table: { category: 'NumberInput HTML props' } },
    accentKey: { control: 'select', options: accentOptions, table: { category: 'NumberInput' } },
    className: { control: 'text', table: { category: 'NumberInput classes' } },
    wrapperClassName: { control: 'text', table: { category: 'NumberInput classes' } },
    labelClassName: { control: 'text', table: { category: 'NumberInput classes' } },
    descriptionClassName: { control: 'text', table: { category: 'NumberInput classes' } },
    errorClassName: { control: 'text', table: { category: 'NumberInput classes' } },
    helperClassName: { control: 'text', table: { category: 'NumberInput classes' } },
    inputClassName: { control: 'text', table: { category: 'NumberInput classes' } },
  },
  parameters: docsSource(fieldsSource, 'Exact NumberInput usage appears in the full field composition snippet.'),
  render: function NumberInputFieldStory(args) {
    const updateArgs = useStoryArgsUpdater<NumberInputFieldArgs>();

    return (
      <StoryShell title="NumberInput and Number" description="Parsed numeric field behavior including the public Number alias.">
        <Section title="Controlled NumberInput example" description="These controls map to NumberInput props.">
          <NumberInput
            label={args.label}
            value={args.value}
            onChange={(value) => updateArgs({ value })}
            onValueChange={(value) => updateArgs({ value })}
            defaultValue={args.defaultValue}
            placeholder={args.placeholder}
            description={args.description || undefined}
            helperText={args.error ? undefined : args.helperText || undefined}
            prefix={args.prefix}
            suffix={args.suffix}
            min={args.min}
            max={args.max}
            step={args.step}
            error={args.error || undefined}
            disabled={args.disabled}
            required={args.required}
            labelPosition={args.labelPosition}
            name={args.name || undefined}
            id={args.id || undefined}
            accentKey={args.accentKey}
            className={args.className || undefined}
            wrapperClassName={args.wrapperClassName || undefined}
            labelClassName={args.labelClassName || undefined}
            descriptionClassName={args.descriptionClassName || undefined}
            errorClassName={args.errorClassName || undefined}
            helperClassName={args.helperClassName || undefined}
            inputClassName={args.inputClassName || undefined}
          />
        </Section>
        <Section title="Number cases" description="Currency, percentages, null values, transitional strings, errors, left labels, accent keys, and slot classes.">
          <CaseGrid cases={numberCases} />
        </Section>
      </StoryShell>
    );
  },
};
