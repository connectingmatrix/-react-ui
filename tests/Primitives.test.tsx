import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { AccentProvider, accentTokensToCssVars, createAccentPresets, createAccentTokens, defaultAccentPresets } from '../src/context/AccentContext';
import Badge from '../src/components/Badge';
import Banner from '../src/components/Banner';
import Button from '../src/components/Button';
import Card from '../src/components/Card';
import ChipCard from '../src/components/ChipCard';
import RadioCard from '../src/components/RadioCard';
import Switch from '../src/components/Switch';
import ToggleCard from '../src/components/ToggleCard';
import GridLayout from '../src/layouts/GridLayout';
import type { GridPanelState } from '../src/layouts/GridLayout';
import Sidebar from '../src/layouts/Sidebar';
import Logger from '../src/elements/Logger';
import NotificationViewport, { Notification } from '../src/elements/NotificationViewport';
import SelectBox from '../src/components/SelectBox';
import DateTimeSelector from '../src/fields/DateTimeSelector';
import NumberInput from '../src/fields/NumberInput';
import Text from '../src/fields/Text';
import TextArea from '../src/fields/TextArea';

describe('SelectBox', () => {
  it('supports searchable single select', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<SelectBox value={null} onChange={onChange} options={['Alpha', 'Beta']} />);

    await user.click(screen.getByRole('button'));
    await user.type(screen.getByPlaceholderText('Search options'), 'bet');
    await user.click(screen.getByText('Beta'));

    expect(onChange).toHaveBeenCalledWith('Beta');
  });

  it('associates labels and descriptions with the trigger', () => {
    render(<SelectBox label="Mode" description="Choose an operating mode" value={null} options={['Alpha']} />);

    const trigger = screen.getByLabelText('Mode');
    expect(trigger).toHaveAttribute('aria-describedby', expect.stringContaining('description'));
    expect(screen.getByText('Choose an operating mode')).toBeInTheDocument();
  });

  it('supports multiple selection', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<SelectBox mode="multiple" value={[]} onChange={onChange} options={['Alpha', 'Beta']} />);

    await user.click(screen.getByRole('button'));
    await user.click(screen.getByText('Alpha'));

    expect(onChange).toHaveBeenCalledWith(['Alpha']);
  });

  it('supports summary text overrides', () => {
    render(<SelectBox mode="multiple" value={['alpha', 'beta']} options={['alpha', 'beta']} summaryText="Custom summary" />);

    expect(screen.getByText('Custom summary')).toBeInTheDocument();
  });

  it('supports object values with custom keys', async () => {
    const user = userEvent.setup();
    const first = { id: 'one', label: 'One' };
    const second = { id: 'two', label: 'Two' };
    const onChange = vi.fn();
    render(
      <SelectBox
        value={first}
        onChange={onChange}
        options={[
          { label: 'One', value: first },
          { label: 'Two', value: second },
        ]}
        getOptionKey={(option) => option.id}
        isOptionEqual={(left, right) => left.id === right.id}
        clearable={false}
        renderValue={(value) => value?.label}
      />,
    );

    await user.click(screen.getByRole('button'));
    await user.click(screen.getByText('Two'));

    expect(onChange).toHaveBeenCalledWith(second);
  });

  it('shows multi-select menu actions', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<SelectBox mode="multiple" value={[]} onChange={onChange} options={['Alpha', 'Beta']} showSelectAll showClear />);

    await user.click(screen.getByRole('button'));
    await user.click(screen.getByText('Select all'));

    expect(onChange).toHaveBeenCalledWith(['Alpha', 'Beta']);
  });
});

describe('AccentContext', () => {
  it('applies provider accent tokens to components', () => {
    render(
      <AccentProvider accentKey="brand" accents={{ brand: { accent: '#ff00aa', bgSurface: '#101010' } }}>
        <Button>Save</Button>
      </AccentProvider>,
    );

    const button = screen.getByRole('button', { name: 'Save' });
    expect(button.style.getPropertyValue('--rui-accent')).toBe('#ff00aa');
    expect(button.style.getPropertyValue('--rui-bg-surface')).toBe('#101010');
  });

  it('uses component accent keys when no provider is present', () => {
    render(<Button accentKey="warning">Warn</Button>);

    expect(screen.getByRole('button', { name: 'Warn' }).style.getPropertyValue('--rui-accent')).toBe('#f0b44f');
  });

  it('prefers provider accent keys over component fallback keys', () => {
    render(
      <AccentProvider accentKey="teal">
        <Button accentKey="danger">Scoped</Button>
      </AccentProvider>,
    );

    expect(screen.getByRole('button', { name: 'Scoped' }).style.getPropertyValue('--rui-accent')).toBe('#19d3a8');
  });

  it('ships TailAdmin-inspired light accent presets', () => {
    const vars = accentTokensToCssVars(defaultAccentPresets.tailadmin);

    expect(vars['--rui-bg-app']).toBe('#f9fafb');
    expect(vars['--rui-bg-panel']).toBe('#ffffff');
    expect(vars['--rui-text-primary']).toBe('#101828');
    expect(vars['--rui-accent']).toBe('#465fff');
    expect(vars['--rui-accent-soft']).toBe('#ecf3ff');
    expect(vars['--rui-accent-soft-text']).toBe('#465fff');
  });

  it('creates custom accents by extending a built-in preset', () => {
    const brand = createAccentTokens('light', { accent: '#635bff', accentStrong: '#4f46e5' });

    expect(brand.bgPanel).toBe('#ffffff');
    expect(brand.textPrimary).toBe('#101828');
    expect(brand.accent).toBe('#635bff');
    expect(brand.accentStrong).toBe('#4f46e5');
  });

  it('creates provider accent maps from named definitions', () => {
    const accents = createAccentPresets({
      brand: { extends: 'light', tokens: { accent: '#635bff', accentSoft: '#eef2ff' } },
    });

    render(
      <AccentProvider accentKey="brand" accents={accents}>
        <Button>Brand action</Button>
      </AccentProvider>,
    );

    const button = screen.getByRole('button', { name: 'Brand action' });
    expect(button.style.getPropertyValue('--rui-bg-panel')).toBe('#ffffff');
    expect(button.style.getPropertyValue('--rui-accent')).toBe('#635bff');
    expect(button.style.getPropertyValue('--rui-accent-soft')).toBe('#eef2ff');
  });
});

describe('Tones', () => {
  it('defaults badge and chip card tones to accent', () => {
    render(
      <>
        <Badge>Default badge</Badge>
        <ChipCard title="Default card" value="128" />
      </>,
    );

    expect(screen.getByText('Default badge')).toHaveClass('bg-[var(--rui-accent-soft)]');
    expect(screen.getByText('Default card').closest('[class*="rounded-"]')).toHaveClass('bg-[linear-gradient(180deg,var(--rui-accent-muted),var(--rui-bg-card))]');
  });
});

describe('Card', () => {
  it('renders generic panel content with default padding', () => {
    render(<Card>Reusable panel</Card>);

    expect(screen.getByText('Reusable panel')).toHaveClass('p-5');
  });

  it('supports accent keys and padding overrides', () => {
    render(
      <Card accentKey="warning" padded={false}>
        Warning panel
      </Card>,
    );

    const card = screen.getByText('Warning panel');
    expect(card.style.getPropertyValue('--rui-accent')).toBe('#f0b44f');
    expect(card).not.toHaveClass('p-5');
  });
});

describe('Switching controls', () => {
  it('toggles Switch on and off', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Switch onCheckedChange={onCheckedChange} aria-label="Power" />);

    const control = screen.getByRole('switch', { name: 'Power' });
    await user.click(control);
    await user.click(control);

    expect(onCheckedChange).toHaveBeenNthCalledWith(1, true);
    expect(onCheckedChange).toHaveBeenNthCalledWith(2, false);
  });

  it('toggles ToggleCard when the card body is clicked', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<ToggleCard title="Auto-stop" description="Stop on suspend." onCheckedChange={onCheckedChange} />);

    await user.click(screen.getByText('Auto-stop'));

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('allows standalone RadioCard controls to turn off', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<RadioCard defaultChecked title="Standalone option" onCheckedChange={onCheckedChange} />);

    await user.click(screen.getByLabelText('Standalone option'));

    expect(onCheckedChange).toHaveBeenCalledWith(false);
  });

  it('keeps named RadioCard groups as one-way radio choices', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<RadioCard checked name="mode" title="Grouped option" onCheckedChange={onCheckedChange} />);

    await user.click(screen.getByLabelText('Grouped option'));

    expect(onCheckedChange).not.toHaveBeenCalledWith(false);
  });
});

describe('GridLayout', () => {
  it('collapses and restores panels', async () => {
    const user = userEvent.setup();
    render(<GridLayout panels={[{ id: 'one', title: 'One', content: <div>Panel body</div> }]} />);

    expect(screen.getByText('Panel body')).toBeInTheDocument();
    await user.click(screen.getByTitle('Minimize panel'));
    expect(screen.queryByText('Panel body')).not.toBeInTheDocument();
  });

  it('reorders panels with drag and drop', () => {
    const onLayoutChange = vi.fn();
    const data: Record<string, string> = {};
    const dataTransfer = {
      effectAllowed: '',
      dropEffect: '',
      setData: vi.fn((key: string, value: string) => {
        data[key] = value;
      }),
      getData: vi.fn((key: string) => data[key] || ''),
    };

    render(
      <GridLayout
        onLayoutChange={onLayoutChange}
        panels={[
          { id: 'one', title: 'One', content: <div>One body</div> },
          { id: 'two', title: 'Two', content: <div>Two body</div> },
        ]}
      />,
    );

    fireEvent.dragStart(screen.getAllByTitle('Drag handle')[0], { dataTransfer });
    fireEvent.dragOver(screen.getByText('Two'), { dataTransfer });
    fireEvent.drop(screen.getByText('Two'), { dataTransfer });

    expect(onLayoutChange).toHaveBeenLastCalledWith([expect.objectContaining({ id: 'two', order: 0 }), expect.objectContaining({ id: 'one', order: 1 })]);
  });

  it('enters fullscreen mode', async () => {
    const user = userEvent.setup();
    const onLayoutChange = vi.fn();
    render(<GridLayout onLayoutChange={onLayoutChange} panels={[{ id: 'one', title: 'One', content: <div>One body</div> }]} />);

    await user.click(screen.getByTitle('Fullscreen'));

    expect(screen.getByTitle('Exit fullscreen')).toBeInTheDocument();
    expect(onLayoutChange).toHaveBeenLastCalledWith([expect.objectContaining({ id: 'one', fullscreen: true, collapsed: false })]);
  });

  it('waits for adapter persistence to hydrate before saving', async () => {
    const save = vi.fn();
    let resolveLoad: (layout: GridPanelState[]) => void = () => undefined;
    const load = vi.fn(
      () =>
        new Promise<GridPanelState[] | null>((resolve) => {
          resolveLoad = resolve;
        }),
    );

    render(
      <GridLayout
        persistenceKey="dashboard"
        persistenceAdapter={{ load, save }}
        panels={[
          { id: 'one', title: 'One', content: <div>One body</div> },
          { id: 'two', title: 'Two', content: <div>Two body</div> },
        ]}
      />,
    );

    expect(save).not.toHaveBeenCalled();

    resolveLoad([
      { id: 'two', order: 0, width: 'full', collapsed: false, fullscreen: false },
      { id: 'one', order: 1, width: 'full', collapsed: false, fullscreen: false },
    ]);

    await waitFor(() => expect(save).toHaveBeenCalledTimes(1));
    expect(save).toHaveBeenCalledWith('dashboard', expect.arrayContaining([expect.objectContaining({ id: 'two', order: 0, width: 'full' })]));
  });
});

describe('Sidebar', () => {
  it('collapses grouped navigation and restores item labels', async () => {
    const user = userEvent.setup();
    render(
      <Sidebar
        collapsible
        header={<span>Sections</span>}
        groups={[
          {
            label: 'Primary',
            items: [
              { id: 'overview', label: 'Overview', icon: <span aria-hidden="true">O</span> },
              { id: 'settings', label: 'Settings', icon: <span aria-hidden="true">S</span> },
            ],
          },
        ]}
        activeId="overview"
      />,
    );

    expect(screen.getByText('Primary')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Collapse sidebar' }));
    expect(screen.queryByText('Primary')).not.toBeInTheDocument();
    expect(screen.queryByText('Overview')).not.toBeInTheDocument();
    expect(screen.getByTitle('Overview')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Expand sidebar' }));
    expect(screen.getByText('Overview')).toBeInTheDocument();
  });

  it('supports controlled collapsed state callbacks', async () => {
    const user = userEvent.setup();
    const onCollapsedChange = vi.fn();
    render(<Sidebar collapsible collapsed items={[{ id: 'one', label: 'One' }]} onCollapsedChange={onCollapsedChange} />);

    await user.click(screen.getByRole('button', { name: 'Expand sidebar' }));

    expect(onCollapsedChange).toHaveBeenCalledWith(false);
    expect(screen.queryByText('One')).not.toBeInTheDocument();
  });
});

describe('NotificationViewport', () => {
  it('dismisses notifications', async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(<NotificationViewport items={[{ id: 'n1', title: 'Saved', timeout: null }]} onDismiss={onDismiss} />);

    await user.click(screen.getByLabelText('Dismiss notification'));

    expect(onDismiss).toHaveBeenCalledWith('n1');
  });

  it('uses a default auto-dismiss timeout when none is provided', () => {
    vi.useFakeTimers();
    const onDismiss = vi.fn();
    render(<NotificationViewport items={[{ id: 'n1', title: 'Saved' }]} onDismiss={onDismiss} />);

    vi.advanceTimersByTime(4199);
    expect(onDismiss).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(onDismiss).toHaveBeenCalledWith('n1');
    vi.useRealTimers();
  });

  it('is exported through the Notification alias', () => {
    expect(Notification).toBe(NotificationViewport);
  });
});

describe('Banner', () => {
  it('supports custom colors without forcing a tone badge', () => {
    render(
      <Banner title="Draft" accentColor="#00ff99" backgroundColor="#101820" borderColor="#00ff99" textColor="#ffffff">
        Review before saving.
      </Banner>,
    );

    expect(screen.getByText('Draft')).toBeInTheDocument();
    expect(screen.queryByText('info')).not.toBeInTheDocument();
  });
});

describe('Logger', () => {
  it('filters and expands payloads', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Logger
        entries={[
          { id: 'one', level: 'INFO', category: 'system', source: 'demo', message: 'Alpha event', payload: { ok: true }, createdAt: '2026-04-19T00:00:00Z' },
          { id: 'two', level: 'ERROR', category: 'system', source: 'demo', message: 'Beta event', createdAt: '2026-04-19T00:00:00Z' },
        ]}
      />,
    );

    await user.type(screen.getByPlaceholderText('Search logs'), 'alpha');
    expect(screen.getByText('Alpha event')).toBeInTheDocument();
    expect(screen.queryByText('Beta event')).not.toBeInTheDocument();
    expect(container.querySelector('.rui-logger-viewport')).toBeInTheDocument();
    expect(container.querySelector('.rui-logger-row')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /view payload/i }));
    expect(screen.getByText(/"ok": true/)).toBeInTheDocument();
  });

  it('supports controlled filters', async () => {
    const user = userEvent.setup();
    const onSearchChange = vi.fn();
    render(
      <Logger
        search="alpha"
        onSearchChange={onSearchChange}
        entries={[
          { id: 'one', level: 'INFO', category: 'system', source: 'demo', message: 'Alpha event' },
          { id: 'two', level: 'ERROR', category: 'system', source: 'demo', message: 'Beta event' },
        ]}
      />,
    );

    expect(screen.getByText('Alpha event')).toBeInTheDocument();
    expect(screen.queryByText('Beta event')).not.toBeInTheDocument();
    await user.type(screen.getByPlaceholderText('Search logs'), 'x');
    expect(onSearchChange).toHaveBeenCalled();
  });

  it('can hide toolbar controls and customize empty content', () => {
    render(<Logger entries={[]} showHeader={false} showToolbar={false} emptyContent="Nothing here" />);

    expect(screen.queryByPlaceholderText('Search logs')).not.toBeInTheDocument();
    expect(screen.getByText('Nothing here')).toBeInTheDocument();
  });
});

describe('Text', () => {
  it('renders labels and errors', () => {
    render(<Text label="Workspace" error="Required" />);
    expect(screen.getByLabelText('Workspace')).toBeInTheDocument();
    expect(screen.getByText('Required')).toBeInTheDocument();
  });

  it('renders descriptions without requiring a label', () => {
    render(<Text description="Used in reports" placeholder="Name" />);
    const input = screen.getByPlaceholderText('Name');

    expect(screen.getByText('Used in reports')).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-describedby', expect.stringContaining('description'));
  });
});

describe('DateTimeSelector', () => {
  it('renders datetime-local controls through the field API', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<DateTimeSelector label="From" value="" onChange={onChange} />);

    const input = screen.getByLabelText('From');
    expect(input).toHaveAttribute('type', 'datetime-local');
    await user.type(input, '2026-04-19T10:30');
    expect(onChange).toHaveBeenCalled();
  });

  it('supports date-only controls', () => {
    render(<DateTimeSelector type="date" label="Run date" value="2026-04-19" />);

    expect(screen.getByLabelText('Run date')).toHaveAttribute('type', 'date');
  });
});

describe('TextArea', () => {
  it('wires descriptions and errors to the textarea', () => {
    render(<TextArea label="Notes" description="Visible to collaborators" error="Too short" />);
    const textarea = screen.getByLabelText('Notes');

    expect(textarea).toHaveAttribute('aria-describedby', expect.stringContaining('description'));
    expect(textarea).toHaveAttribute('aria-describedby', expect.stringContaining('error'));
  });
});

describe('NumberInput', () => {
  it('preserves transitional numeric text while emitting parsed values', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const onValueChange = vi.fn();
    render(<NumberInput label="Amount" onChange={onChange} onValueChange={onValueChange} />);
    const input = screen.getByLabelText('Amount');

    await user.type(input, '-');

    expect(input).toHaveDisplayValue('-');
    expect(onChange).toHaveBeenCalledWith(null);
    expect(onValueChange).toHaveBeenCalledWith(null, '-');
  });

  it('renders descriptions without requiring a label', () => {
    render(<NumberInput description="Whole units only" placeholder="10" />);
    const input = screen.getByPlaceholderText('10');

    expect(screen.getByText('Whole units only')).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-describedby', expect.stringContaining('description'));
  });
});
