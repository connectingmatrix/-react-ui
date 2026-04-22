import React from 'react';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Table, { type TableColumn, type TableState } from '../src/elements/Table';

const rows = [
  { id: 'a', name: 'Alpha', status: 'Open', score: 3 },
  { id: 'b', name: 'Beta', status: 'Closed', score: 1 },
  { id: 'c', name: 'Gamma', status: 'Open', score: 2 },
];

const columns: TableColumn<(typeof rows)[number]>[] = [
  { id: 'name', label: 'Name', kind: 'text', width: 160 },
  { id: 'status', label: 'Status', kind: 'enum', width: 120 },
  { id: 'score', label: 'Score', kind: 'number', width: 100 },
  { id: 'notes', label: 'Notes', kind: 'text', width: 180, visibleByDefault: false, getValue: (row) => `${row.name} note` },
];

function bodyRows() {
  return screen.getAllByRole('row').slice(1);
}

describe('Table', () => {
  it('sorts rows with the default sorter', async () => {
    const user = userEvent.setup();
    render(<Table rows={rows} columns={columns} rowKey={(row) => row.id} />);

    await user.click(screen.getByRole('button', { name: /score/i }));

    expect(within(bodyRows()[0]).getByText('Beta')).toBeInTheDocument();
    expect(within(bodyRows()[1]).getByText('Gamma')).toBeInTheDocument();
    expect(within(bodyRows()[2]).getByText('Alpha')).toBeInTheDocument();
  });

  it('uses custom column compare functions', async () => {
    const user = userEvent.setup();
    render(
      <Table
        rows={rows}
        columns={[
          { id: 'name', label: 'Name', kind: 'text', compare: (left, right) => right.name.localeCompare(left.name) },
          { id: 'score', label: 'Score', kind: 'number' },
        ]}
        rowKey={(row) => row.id}
      />,
    );

    await user.click(screen.getByRole('button', { name: /name/i }));

    expect(within(bodyRows()[0]).getByText('Gamma')).toBeInTheDocument();
  });

  it('filters rows and supports hidden-column detail expansion', async () => {
    const user = userEvent.setup();
    render(<Table rows={rows} columns={columns} rowKey={(row) => row.id} />);

    await user.click(screen.getByRole('button', { name: /filters/i }));
    await user.click(screen.getByLabelText('Open'));

    expect(screen.queryByText('Beta')).not.toBeInTheDocument();
    await user.click(screen.getAllByTitle('Expand row')[0]);
    expect(await screen.findByText('Notes')).toBeInTheDocument();
    expect(screen.getByText('Alpha note')).toBeInTheDocument();
  });

  it('handles row selection and bulk actions', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Table
        rows={rows}
        columns={columns.slice(0, 2)}
        rowKey={(row) => row.id}
        selection={{ mode: 'multi', onChange }}
        renderSelectionActions={({ selectedKeys }) => <div>{selectedKeys.length} selected</div>}
      />,
    );

    await user.click(screen.getAllByRole('checkbox')[1]);

    expect(onChange).toHaveBeenCalledWith(['a'], [rows[0]]);
    expect(screen.getByText('1 selected')).toBeInTheDocument();
  });

  it('keeps expand controls before the selection column with old bot table widths', () => {
    const { container } = render(
      <Table rows={rows} columns={columns.slice(0, 2)} rowKey={(row) => row.id} selection={{ mode: 'multi' }} renderExpandedContent={(row) => <div>Expanded {row.name}</div>} />,
    );

    const controlColumns = Array.from(container.querySelectorAll('col')).slice(0, 2);
    expect(controlColumns[0]).toHaveStyle({ width: '56px' });
    expect(controlColumns[1]).toHaveStyle({ width: '72px' });

    const firstRowCells = screen.getAllByRole('row')[1].querySelectorAll('td');
    expect(firstRowCells[0].querySelector('button[title="Expand row"]')).toBeInTheDocument();
    expect(firstRowCells[1].querySelector('input[type="checkbox"]')).toBeInTheDocument();
  });

  it('renders contiguous column groups with header colspans', () => {
    const { container } = render(
      <Table
        rows={rows}
        columns={[
          { id: 'name', label: 'Name', kind: 'text', width: 160, groupId: 'base', groupLabel: 'Base' },
          { id: 'status', label: 'Status', kind: 'enum', width: 120, groupId: 'base', groupLabel: 'Base' },
          { id: 'score1h', label: '1h', kind: 'number', width: 100, getValue: (row) => row.score, groupId: 'price', groupLabel: 'Price change %' },
          { id: 'score24h', label: '24h', kind: 'number', width: 100, getValue: (row) => row.score, groupId: 'price', groupLabel: 'Price change %' },
          { id: 'volume', label: 'Volume', kind: 'number', width: 120, getValue: (row) => row.score, groupId: 'volume', groupLabel: 'Volume' },
        ]}
        rowKey={(row) => row.id}
      />,
    );

    const groupHeaders = Array.from(container.querySelectorAll('thead tr:first-child th')).filter((header) => header.textContent?.trim());
    expect(groupHeaders.map((header) => header.textContent?.trim())).toEqual(['Base', 'Price change %', 'Volume']);
    expect(groupHeaders.map((header) => header.getAttribute('colspan'))).toEqual(['2', '2', '1']);
  });

  it('toggles single row selection off when the selected radio is clicked again', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Table rows={rows} columns={columns.slice(0, 2)} rowKey={(row) => row.id} selection={{ mode: 'single', onChange }} />);

    const firstRowRadio = screen.getAllByRole('radio')[0];
    await user.click(firstRowRadio);
    await user.click(firstRowRadio);

    expect(onChange).toHaveBeenNthCalledWith(1, ['a'], [rows[0]]);
    expect(onChange).toHaveBeenNthCalledWith(2, [], []);
  });

  it('renders a custom filter editor', async () => {
    const user = userEvent.setup();
    render(
      <Table
        rows={rows}
        columns={[
          {
            id: 'name',
            label: 'Name',
            kind: 'text',
            renderFilter: ({ setValue }) => <button onClick={() => setValue('Gamma')}>Only Gamma</button>,
          },
        ]}
        rowKey={(row) => row.id}
      />,
    );

    await user.click(screen.getByRole('button', { name: /filters/i }));
    await user.click(screen.getByRole('button', { name: 'Only Gamma' }));

    expect(screen.getByText('Gamma')).toBeInTheDocument();
    expect(screen.queryByText('Alpha')).not.toBeInTheDocument();
  });

  it('uses custom filter functions', async () => {
    const user = userEvent.setup();
    render(
      <Table
        rows={rows}
        columns={[
          { id: 'name', label: 'Name', kind: 'text' },
          {
            id: 'status',
            label: 'Status',
            kind: 'enum',
            filterFn: (row, value) => row.status === value,
            renderFilter: ({ setValue }) => <button onClick={() => setValue('Closed')}>Only Closed</button>,
          },
        ]}
        rowKey={(row) => row.id}
      />,
    );

    await user.click(screen.getByRole('button', { name: /filters/i }));
    await user.click(screen.getByRole('button', { name: 'Only Closed' }));

    expect(screen.getByText('Beta')).toBeInTheDocument();
    expect(screen.queryByText('Alpha')).not.toBeInTheDocument();
  });

  it('renders custom header filters that can drive table state', async () => {
    const user = userEvent.setup();
    render(
      <Table
        rows={rows}
        columns={columns}
        rowKey={(row) => row.id}
        renderHeaderFilters={({ setGlobalSearch }) => <button onClick={() => setGlobalSearch('beta')}>Only Beta</button>}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Only Beta' }));

    expect(screen.getByText('Beta')).toBeInTheDocument();
    expect(screen.queryByText('Alpha')).not.toBeInTheDocument();
  });

  it('toggles column visibility without losing required visible columns', async () => {
    const user = userEvent.setup();
    render(<Table rows={rows} columns={columns} rowKey={(row) => row.id} />);

    await user.click(screen.getByRole('button', { name: /columns/i }));
    await user.click(screen.getByLabelText('Status'));

    expect(within(screen.getByRole('table')).queryByText('Status')).not.toBeInTheDocument();
    expect(within(screen.getByRole('table')).getByText('Name')).toBeInTheDocument();
  });

  it('renders arbitrary nested expanded row content', async () => {
    const user = userEvent.setup();
    render(
      <Table
        rows={rows}
        columns={columns.slice(0, 2)}
        rowKey={(row) => row.id}
        renderExpandedContent={(row) => (
          <table aria-label={`${row.name} nested table`}>
            <tbody>
              <tr>
                <td>Nested detail for {row.name}</td>
              </tr>
            </tbody>
          </table>
        )}
      />,
    );

    await user.click(screen.getAllByTitle('Expand row')[0]);

    expect(screen.getByRole('table', { name: 'Alpha nested table' })).toBeInTheDocument();
    expect(screen.getByText('Nested detail for Alpha')).toBeInTheDocument();
  });

  it('normalizes persisted state for missing columns', async () => {
    const save = vi.fn();
    const load = vi.fn(async () => ({
      visibleColumnIds: ['missing'],
      sort: { columnId: 'missing', direction: 'asc' as const },
      filters: { missing: 'value' },
    }));

    render(<Table rows={rows} columns={columns} rowKey={(row) => row.id} tableId="scores" persistence={{ adapter: { load, save } }} />);

    await waitFor(() => expect(save).toHaveBeenCalled());
    expect(save).toHaveBeenLastCalledWith(
      'rui:table:scores:__global__',
      expect.objectContaining({
        visibleColumnIds: expect.arrayContaining(['name', 'status', 'score']),
        sort: null,
        filters: {},
      }),
    );
  });

  it('waits for persistence adapters to hydrate before saving', async () => {
    const save = vi.fn();
    let resolveLoad: (state: Partial<TableState>) => void = () => undefined;
    const load = vi.fn(
      () =>
        new Promise<Partial<TableState> | null>((resolve) => {
          resolveLoad = resolve;
        }),
    );

    render(<Table rows={rows} columns={columns} rowKey={(row) => row.id} tableId="scores" persistence={{ adapter: { load, save } }} />);

    expect(save).not.toHaveBeenCalled();
    resolveLoad({ sort: { columnId: 'score', direction: 'desc' } });

    await waitFor(() => expect(save).toHaveBeenCalledTimes(1));
    expect(save).toHaveBeenCalledWith('rui:table:scores:__global__', expect.objectContaining({ sort: { columnId: 'score', direction: 'desc' } }));
  });

  it('does not reload adapter state after local table edits', async () => {
    const user = userEvent.setup();
    const load = vi.fn(async () => ({ sort: { columnId: 'score', direction: 'desc' as const } }));
    render(<Table rows={rows} columns={columns} rowKey={(row) => row.id} tableId="scores" persistence={{ adapter: { load, save: vi.fn() } }} />);

    await waitFor(() => expect(load).toHaveBeenCalledTimes(1));
    await user.click(screen.getByRole('button', { name: /score/i }));

    expect(load).toHaveBeenCalledTimes(1);
  });

  it('resizes columns and reports persistent width state', () => {
    const onStateChange = vi.fn();
    render(<Table rows={rows} columns={columns.slice(0, 3)} rowKey={(row) => row.id} onStateChange={onStateChange} />);

    const nameHeader = screen.getByRole('columnheader', { name: /name/i });
    const resizeHandle = nameHeader.querySelector('[aria-hidden="true"]');
    expect(resizeHandle).toBeInTheDocument();

    fireEvent.mouseDown(resizeHandle!, { clientX: 100 });
    fireEvent.mouseMove(window, { clientX: 180 });
    fireEvent.mouseUp(window);

    expect(onStateChange).toHaveBeenLastCalledWith(expect.objectContaining({ columnWidths: expect.objectContaining({ name: expect.any(Number) }) }));
    expect(onStateChange.mock.lastCall?.[0].columnWidths.name).toBeGreaterThan(160);
  });

  it('reorders columns and reports persistent order state', () => {
    const onStateChange = vi.fn();
    render(<Table rows={rows} columns={columns.slice(0, 3)} rowKey={(row) => row.id} onStateChange={onStateChange} />);

    const scoreHeader = screen.getByRole('columnheader', { name: /score/i });
    const nameHeader = screen.getByRole('columnheader', { name: /name/i });
    const dataTransfer = {
      data: {} as Record<string, string>,
      effectAllowed: '',
      dropEffect: '',
      setDragImage: vi.fn(),
      setData(type: string, value: string) {
        this.data[type] = value;
      },
      getData(type: string) {
        return this.data[type] || '';
      },
    };

    fireEvent.dragStart(scoreHeader, { dataTransfer });
    fireEvent.dragOver(nameHeader, { dataTransfer });
    fireEvent.drop(nameHeader, { dataTransfer });

    expect(dataTransfer.setDragImage).toHaveBeenCalled();
    expect(document.body.querySelector('[style*="-10000px"]')).not.toBeInTheDocument();
    expect(onStateChange).toHaveBeenLastCalledWith(expect.objectContaining({ columnOrder: ['score', 'name', 'status'] }));
    expect(screen.getAllByRole('columnheader').map((header) => header.textContent?.replace(/[↑↓•]/g, '').trim())).toEqual(['Score', 'Name', 'Status']);
  });
});
