import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';
import Button from '../components/Button';
import { Icon } from '../components/Icon';

export type TableColumnKind = 'text' | 'enum' | 'number' | 'datetime' | 'boolean' | 'action';
export type TableSortDirection = 'asc' | 'desc';
export type TableSelectionMode = 'single' | 'multi';

export interface TableSortState {
  columnId: string;
  direction: TableSortDirection;
}

export interface TableState {
  visibleColumnIds: string[];
  columnWidths: Record<string, number>;
  sort: TableSortState | null;
  filters: Record<string, unknown>;
  globalSearch: string;
  expandedRowIds: string[];
  selectedRowIds: string[];
}

export interface TableColumn<Row = unknown> {
  id: string;
  label: React.ReactNode;
  kind?: TableColumnKind;
  groupId?: string;
  groupLabel?: React.ReactNode;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  align?: 'left' | 'center' | 'right';
  wrap?: boolean;
  sortable?: boolean;
  filterable?: boolean;
  hideable?: boolean;
  visibleByDefault?: boolean;
  renderHeader?: () => React.ReactNode;
  getValue?: (row: Row) => unknown;
  accessor?: (row: Row) => unknown;
  renderCell?: (row: Row) => React.ReactNode;
  renderDetailValue?: (row: Row) => React.ReactNode;
  getFilterOptions?: (rows: Row[]) => Array<{ label: React.ReactNode; value: string | number }>;
  getEnumOptions?: (rows: Row[]) => Array<{ label: React.ReactNode; value: string | number }>;
  compare?: (leftRow: Row, rightRow: Row, direction: TableSortDirection) => number;
  filterFn?: (row: Row, filterValue: unknown) => boolean;
  renderFilter?: (params: { value: unknown; setValue: (value: unknown) => void; clear: () => void; rows: Row[] }) => React.ReactNode;
  cellClassName?: string | ((row: Row) => string);
  headerClassName?: string;
}

export interface TablePersistenceAdapter {
  load: (key: string) => TableState | Partial<TableState> | null | Promise<TableState | Partial<TableState> | null>;
  save: (key: string, state: TableState) => void | Promise<void>;
}

export interface TablePersistence {
  key?: string;
  scope?: string | null;
  namespace?: string;
  storage?: Storage;
  adapter?: TablePersistenceAdapter;
}

export interface TableSelection<Row = unknown> {
  mode?: TableSelectionMode;
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  onChange?: (selectedKeys: string[], selectedRows: Row[]) => void;
  isRowDisabled?: (row: Row) => boolean;
  selectAllScope?: 'all' | 'filtered';
}

export interface TableVirtualization {
  enabled?: boolean;
  rowHeight?: number;
  overscan?: number;
  maxHeight?: number;
}

export interface TableClassNames {
  root?: string;
  toolbar?: string;
  headerFilters?: string;
  menu?: string;
  container?: string;
  table?: string;
  headerRow?: string;
  row?: string;
  cell?: string;
  detailRow?: string;
}

export interface TableHeaderFiltersParams<Row = unknown> {
  state: TableState;
  rows: Row[];
  visibleRows: Row[];
  selectedRows: Row[];
  setGlobalSearch: (query: string) => void;
  setFilter: (columnId: string, value: unknown) => void;
  clearFilter: (columnId: string) => void;
  reset: () => void;
}

export interface TableProps<Row = unknown> {
  rows: Row[];
  columns: TableColumn<Row>[];
  rowKey: (row: Row) => string;
  tableId?: string;
  scopeId?: string | null;
  persistence?: TablePersistence | false;
  state?: Partial<TableState>;
  defaultState?: Partial<TableState>;
  onStateChange?: (state: TableState) => void;
  selection?: TableSelection<Row>;
  virtualization?: TableVirtualization;
  loading?: boolean;
  emptyMessage?: React.ReactNode;
  loadingContent?: React.ReactNode;
  toolbarContent?: React.ReactNode;
  renderToolbar?: (params: { state: TableState; rows: Row[]; visibleRows: Row[]; selectedRows: Row[]; reset: () => void }) => React.ReactNode;
  headerFilters?: React.ReactNode;
  renderHeaderFilters?: (params: TableHeaderFiltersParams<Row>) => React.ReactNode;
  renderSelectionActions?: (params: { selectedKeys: string[]; selectedRows: Row[]; clearSelection: () => void }) => React.ReactNode;
  hideColumnControls?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
  globalSearchFn?: (row: Row, query: string) => boolean;
  sortRows?: (rows: Row[], sort: TableSortState | null, columns: TableColumn<Row>[]) => Row[];
  renderExpandedContent?: (row: Row) => React.ReactNode;
  expandedRowIds?: string[];
  defaultExpandedRowIds?: string[];
  onExpandedChange?: (rowIds: string[], row?: Row) => void;
  onRowExpand?: (row: Row, expanded: boolean) => void;
  rowClassName?: string | ((row: Row) => string);
  detailRowClassName?: string;
  containerClassName?: string;
  tableClassName?: string;
  accentKey?: AccentKey;
  style?: React.CSSProperties;
  className?: string;
  classNames?: TableClassNames;
}

interface FloatingMenuPosition {
  left: number;
  top: number;
  maxHeight: number;
}

function isActionColumn(column: TableColumn<any>) {
  return column.kind === 'action';
}

function isColumnHideable(column: TableColumn<any>) {
  return !isActionColumn(column) && column.hideable !== false;
}

function isColumnVisibleByDefault(column: TableColumn<any>) {
  if (isActionColumn(column) || column.hideable === false) return true;
  return column.visibleByDefault !== false;
}

function getColumnValue<Row>(row: Row, column: TableColumn<Row>) {
  if (column.getValue) return column.getValue(row);
  if (column.accessor) return column.accessor(row);
  return (row as Record<string, unknown>)?.[column.id];
}

function normalizeText(value: unknown): string {
  if (Array.isArray(value)) return value.map((entry) => normalizeText(entry)).join(' ');
  if (value == null) return '';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function normalizeNumber(value: unknown) {
  const nextValue = Number(value);
  return Number.isFinite(nextValue) ? nextValue : null;
}

function normalizeTimestamp(value: unknown) {
  if (value == null || value === '') return null;
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;
  const parsed = Date.parse(String(value));
  return Number.isFinite(parsed) ? parsed : null;
}

function boolFromValue(value: unknown) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value > 0;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (['true', 'yes', '1', 'enabled', 'open'].includes(normalized)) return true;
    if (['false', 'no', '0', 'disabled', 'closed'].includes(normalized)) return false;
  }
  return null;
}

function isValidFilterValue(value: unknown): boolean {
  if (value == null) return false;
  if (typeof value === 'string') return value.trim().length > 0 && value !== 'all';
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object') return Object.values(value).some((entry) => isValidFilterValue(entry));
  return true;
}

function isFilterActive(kind: TableColumnKind, value: unknown) {
  if (value == null) return false;
  if (kind === 'text') return Boolean(String(value || '').trim());
  if (kind === 'enum') return Array.isArray((value as { values?: unknown[] })?.values) && Boolean((value as { values?: unknown[] }).values?.length);
  if (kind === 'number') return Boolean(String((value as { min?: unknown })?.min || '').trim() || String((value as { max?: unknown })?.max || '').trim());
  if (kind === 'datetime') return Boolean(String((value as { from?: unknown })?.from || '').trim() || String((value as { to?: unknown })?.to || '').trim());
  if (kind === 'boolean') return Boolean((value as { value?: unknown })?.value && (value as { value?: unknown }).value !== 'all');
  return false;
}

function renderPrimitiveValue(value: unknown) {
  if (value == null || value === '') return '-';
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function compareRows<Row>(leftRow: Row, rightRow: Row, column: TableColumn<Row>, direction: TableSortDirection) {
  if (column.compare) return column.compare(leftRow, rightRow, direction);
  const leftValue = getColumnValue(leftRow, column);
  const rightValue = getColumnValue(rightRow, column);
  let result = 0;

  switch (column.kind) {
    case 'number': {
      const leftNumber = normalizeNumber(leftValue);
      const rightNumber = normalizeNumber(rightValue);
      if (leftNumber == null && rightNumber == null) result = 0;
      else if (leftNumber == null) result = 1;
      else if (rightNumber == null) result = -1;
      else result = leftNumber - rightNumber;
      break;
    }
    case 'datetime': {
      const leftTimestamp = normalizeTimestamp(leftValue);
      const rightTimestamp = normalizeTimestamp(rightValue);
      if (leftTimestamp == null && rightTimestamp == null) result = 0;
      else if (leftTimestamp == null) result = 1;
      else if (rightTimestamp == null) result = -1;
      else result = leftTimestamp - rightTimestamp;
      break;
    }
    case 'boolean': {
      const leftBoolean = boolFromValue(leftValue);
      const rightBoolean = boolFromValue(rightValue);
      if (leftBoolean == null && rightBoolean == null) result = 0;
      else if (leftBoolean == null) result = 1;
      else if (rightBoolean == null) result = -1;
      else result = Number(leftBoolean) - Number(rightBoolean);
      break;
    }
    default:
      result = normalizeText(leftValue).localeCompare(normalizeText(rightValue), undefined, { numeric: true, sensitivity: 'base' });
      break;
  }

  return direction === 'asc' ? result : result * -1;
}

function rowMatchesFilter<Row>(row: Row, column: TableColumn<Row>, filterValue: unknown) {
  if (column.filterFn) return column.filterFn(row, filterValue);
  const kind = column.kind || 'text';
  const value = getColumnValue(row, column);

  switch (kind) {
    case 'enum': {
      const selected = Array.isArray((filterValue as { values?: unknown[] })?.values) ? (filterValue as { values: unknown[] }).values.map(String) : [];
      if (!selected.length) return true;
      const values = Array.isArray(value) ? value.map((entry) => String(entry)) : [String(value ?? '')];
      return values.some((entry) => selected.includes(entry));
    }
    case 'number': {
      const current = normalizeNumber(value);
      const min = normalizeNumber((filterValue as { min?: unknown })?.min);
      const max = normalizeNumber((filterValue as { max?: unknown })?.max);
      if (current == null) return false;
      if (min != null && current < min) return false;
      if (max != null && current > max) return false;
      return true;
    }
    case 'datetime': {
      const current = normalizeTimestamp(value);
      const from = normalizeTimestamp((filterValue as { from?: unknown })?.from);
      const to = normalizeTimestamp((filterValue as { to?: unknown })?.to);
      if (current == null) return false;
      if (from != null && current < from) return false;
      if (to != null && current > to) return false;
      return true;
    }
    case 'boolean': {
      const selected = String((filterValue as { value?: unknown })?.value || 'all');
      if (selected === 'all') return true;
      const current = boolFromValue(value);
      if (current == null) return false;
      return selected === 'yes' ? current : !current;
    }
    default: {
      const query = String(filterValue || '')
        .trim()
        .toLowerCase();
      if (!query) return true;
      return normalizeText(value).toLowerCase().includes(query);
    }
  }
}

function defaultState<Row>(columns: TableColumn<Row>[], defaultOverrides?: Partial<TableState>): TableState {
  return {
    visibleColumnIds: columns.filter((column) => isColumnVisibleByDefault(column)).map((column) => column.id),
    columnWidths: Object.fromEntries(columns.filter((column) => Number(column.width) > 0).map((column) => [column.id, Number(column.width)])),
    sort: null,
    filters: {},
    globalSearch: '',
    expandedRowIds: [],
    selectedRowIds: [],
    ...defaultOverrides,
  };
}

function normalizeState<Row>(raw: Partial<TableState> | null | undefined, columns: TableColumn<Row>[], defaultOverrides?: Partial<TableState>): TableState {
  const defaults = defaultState(columns, defaultOverrides);
  const columnMap = new Map(columns.map((column) => [column.id, column]));
  const fixedVisible = columns.filter((column) => !isColumnHideable(column)).map((column) => column.id);
  const requestedVisible = Array.isArray(raw?.visibleColumnIds) ? raw.visibleColumnIds.filter((id) => columnMap.has(id)) : defaults.visibleColumnIds;
  const visibleSet = new Set<string>([...requestedVisible, ...fixedVisible]);
  const nonActionVisible = columns.filter((column) => !isActionColumn(column) && visibleSet.has(column.id));

  if (!nonActionVisible.length) {
    columns.forEach((column) => {
      if (isColumnVisibleByDefault(column)) visibleSet.add(column.id);
    });
  }

  const sortColumn = raw?.sort?.columnId ? columnMap.get(raw.sort.columnId) : null;
  const sort =
    sortColumn && sortColumn.sortable !== false && visibleSet.has(sortColumn.id) && !isActionColumn(sortColumn) && ['asc', 'desc'].includes(raw?.sort?.direction || '')
      ? { columnId: sortColumn.id, direction: raw!.sort!.direction }
      : defaults.sort;

  const filters = Object.fromEntries(
    Object.entries(raw?.filters || {}).filter(([columnId, value]) => {
      const column = columnMap.get(columnId);
      return Boolean(column && visibleSet.has(columnId) && column.filterable !== false && !isActionColumn(column) && isValidFilterValue(value));
    }),
  );

  return {
    visibleColumnIds: columns.filter((column) => visibleSet.has(column.id)).map((column) => column.id),
    columnWidths: {
      ...defaults.columnWidths,
      ...Object.fromEntries(
        Object.entries(raw?.columnWidths || {})
          .filter(([columnId, width]) => columnMap.has(columnId) && Number.isFinite(Number(width)) && Number(width) > 0)
          .map(([columnId, width]) => [columnId, Number(width)]),
      ),
    },
    sort,
    filters,
    globalSearch: typeof raw?.globalSearch === 'string' ? raw.globalSearch : defaults.globalSearch,
    expandedRowIds: Array.isArray(raw?.expandedRowIds) ? raw.expandedRowIds.map(String) : defaults.expandedRowIds,
    selectedRowIds: Array.isArray(raw?.selectedRowIds) ? raw.selectedRowIds.map(String) : defaults.selectedRowIds,
  };
}

function defaultStorageKey(tableId: string, scopeId?: string | null, namespace = 'rui:table') {
  return `${namespace}:${tableId}:${scopeId || '__global__'}`;
}

function getPersistenceKey(persistence: TablePersistence | false | undefined, tableId?: string, scopeId?: string | null) {
  if (persistence === false) return null;
  const key = persistence?.key || tableId;
  if (!key) return null;
  return defaultStorageKey(key, persistence?.scope ?? scopeId, persistence?.namespace);
}

function readLocalState(key: string, storage?: Storage) {
  if (typeof window === 'undefined') return null;
  try {
    const targetStorage = storage || window.localStorage;
    const raw = targetStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeLocalState(key: string, state: TableState, storage?: Storage) {
  if (typeof window === 'undefined') return;
  try {
    const targetStorage = storage || window.localStorage;
    targetStorage.setItem(key, JSON.stringify(state));
  } catch {
    // best effort persistence
  }
}

function defaultAlignClass(align: TableColumn<any>['align']) {
  if (align === 'center') return 'text-center';
  if (align === 'right') return 'text-right';
  return 'text-left';
}

function nextSortState(current: TableSortState | null, columnId: string): TableSortState | null {
  if (!current || current.columnId !== columnId) return { columnId, direction: 'asc' };
  if (current.direction === 'asc') return { columnId, direction: 'desc' };
  return null;
}

function defaultEnumOptions<Row>(rows: Row[], column: TableColumn<Row>) {
  const values = new Set<string>();
  rows.forEach((row) => {
    const value = getColumnValue(row, column);
    if (Array.isArray(value)) value.forEach((entry) => values.add(String(entry)));
    else if (value != null && value !== '') values.add(String(value));
  });
  return Array.from(values)
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' }))
    .map((value) => ({ label: value, value }));
}

function computeFloatingMenuPosition(trigger: HTMLElement, width: number) {
  const rect = trigger.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const padding = 12;
  const top = Math.max(padding, Math.min(rect.bottom + 8, viewportHeight - padding - 120));
  const left = Math.max(padding, Math.min(rect.right - width, viewportWidth - width - padding));
  const maxHeight = Math.max(180, viewportHeight - top - padding);
  return { left, top, maxHeight };
}

function formatHiddenDetailValue<Row>(row: Row, column: TableColumn<Row>) {
  if (column.renderDetailValue) return column.renderDetailValue(row);
  if (column.renderCell) return column.renderCell(row);
  return renderPrimitiveValue(getColumnValue(row, column));
}

function shallowStateMerge(state: TableState, partial?: Partial<TableState>) {
  return partial ? { ...state, ...partial } : state;
}

export function Table<Row>({
  rows,
  columns,
  rowKey,
  tableId,
  scopeId = null,
  persistence,
  state: controlledState,
  defaultState: defaultStateOverride,
  onStateChange,
  selection,
  virtualization,
  loading = false,
  emptyMessage = 'No rows available.',
  loadingContent = 'Loading rows.',
  toolbarContent,
  renderToolbar,
  headerFilters,
  renderHeaderFilters,
  renderSelectionActions,
  hideColumnControls = false,
  searchable = false,
  searchPlaceholder = 'Search rows',
  globalSearchFn,
  sortRows,
  renderExpandedContent,
  expandedRowIds,
  defaultExpandedRowIds,
  onExpandedChange,
  onRowExpand,
  rowClassName,
  detailRowClassName,
  containerClassName,
  tableClassName,
  accentKey,
  style,
  className,
  classNames,
}: TableProps<Row>) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const filtersButtonRef = useRef<HTMLDivElement | null>(null);
  const columnsButtonRef = useRef<HTMLDivElement | null>(null);
  const filtersMenuRef = useRef<HTMLDivElement | null>(null);
  const columnsMenuRef = useRef<HTMLDivElement | null>(null);
  const resizeStateRef = useRef<{ columnId: string; startX: number; startWidth: number } | null>(null);
  const [filtersMenuOpen, setFiltersMenuOpen] = useState(false);
  const [columnsMenuOpen, setColumnsMenuOpen] = useState(false);
  const [filtersMenuPosition, setFiltersMenuPosition] = useState<FloatingMenuPosition | null>(null);
  const [columnsMenuPosition, setColumnsMenuPosition] = useState<FloatingMenuPosition | null>(null);
  const [mounted, setMounted] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const persistenceKey = getPersistenceKey(persistence, tableId, scopeId);
  const persistenceDisabled = persistence === false;
  const persistenceAdapter = persistenceDisabled ? undefined : persistence?.adapter;
  const persistenceStorage = persistenceDisabled ? undefined : persistence?.storage;
  const accentStyle = useAccentStyle(accentKey, style);
  const [adapterHydrated, setAdapterHydrated] = useState(() => !persistenceKey || !persistenceAdapter);
  const columnSignature = useMemo(() => columns.map((column) => column.id).join('\u001f'), [columns]);
  const columnsRef = useRef(columns);
  const onStateChangeRef = useRef(onStateChange);

  const [uncontrolledState, setUncontrolledState] = useState<TableState>(() =>
    normalizeState(
      shallowStateMerge(
        defaultState(columns, { ...defaultStateOverride, expandedRowIds: defaultExpandedRowIds || defaultStateOverride?.expandedRowIds }),
        persistenceKey ? readLocalState(persistenceKey, persistenceStorage) || undefined : undefined,
      ),
      columns,
      {
        ...defaultStateOverride,
        expandedRowIds: defaultExpandedRowIds || defaultStateOverride?.expandedRowIds,
        selectedRowIds: selection?.defaultSelectedKeys || defaultStateOverride?.selectedRowIds,
      },
    ),
  );

  const mergedState = useMemo(() => {
    const nextState: Partial<TableState> = { ...uncontrolledState, ...controlledState };
    if (expandedRowIds !== undefined) nextState.expandedRowIds = expandedRowIds;
    return normalizeState(nextState, columns);
  }, [columns, controlledState, expandedRowIds, uncontrolledState]);

  const setTableState = useCallback(
    (nextState: TableState | ((current: TableState) => TableState)) => {
      const resolvedState = typeof nextState === 'function' ? nextState(mergedState) : nextState;
      setUncontrolledState(resolvedState);
      onStateChange?.(resolvedState);
    },
    [mergedState, onStateChange],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    columnsRef.current = columns;
  }, [columns]);

  useEffect(() => {
    onStateChangeRef.current = onStateChange;
  }, [onStateChange]);

  useEffect(() => {
    let cancelled = false;
    if (!persistenceKey || !persistenceAdapter) {
      setAdapterHydrated(true);
      return;
    }
    setAdapterHydrated(false);
    void Promise.resolve(persistenceAdapter.load(persistenceKey))
      .then((loaded) => {
        if (cancelled) return;
        if (loaded) {
          setUncontrolledState((current) => {
            const normalized = normalizeState({ ...current, ...loaded }, columnsRef.current);
            onStateChangeRef.current?.(normalized);
            return normalized;
          });
        }
        setAdapterHydrated(true);
      })
      .catch(() => {
        if (!cancelled) setAdapterHydrated(false);
      });
    return () => {
      cancelled = true;
    };
  }, [columnSignature, persistenceAdapter, persistenceKey]);

  useEffect(() => {
    if (!persistenceKey || persistenceDisabled) return;
    if (persistenceAdapter) {
      if (!adapterHydrated) return;
      void Promise.resolve(persistenceAdapter.save(persistenceKey, mergedState)).catch(() => {});
      return;
    }
    writeLocalState(persistenceKey, mergedState, persistenceStorage);
  }, [adapterHydrated, mergedState, persistenceAdapter, persistenceDisabled, persistenceKey, persistenceStorage]);

  const visibleColumns = useMemo(
    () =>
      columns.filter((column) => {
        if (isActionColumn(column) || column.hideable === false) return true;
        return mergedState.visibleColumnIds.includes(column.id);
      }),
    [columns, mergedState.visibleColumnIds],
  );

  const hiddenDetailColumns = useMemo(
    () =>
      columns.filter((column) => {
        if (isActionColumn(column) || column.hideable === false) return false;
        return !visibleColumns.some((visibleColumn) => visibleColumn.id === column.id);
      }),
    [columns, visibleColumns],
  );

  const setFilter = useCallback(
    (columnId: string, value: unknown) => {
      setTableState((current) => {
        const nextFilters = { ...current.filters };
        if (isValidFilterValue(value)) nextFilters[columnId] = value;
        else delete nextFilters[columnId];
        return { ...current, filters: nextFilters };
      });
    },
    [setTableState],
  );

  const setGlobalSearch = useCallback(
    (globalSearch: string) => {
      setTableState((current) => ({ ...current, globalSearch }));
    },
    [setTableState],
  );

  const clearFilter = useCallback(
    (columnId: string) => {
      setTableState((current) => {
        if (!(columnId in current.filters)) return current;
        const nextFilters = { ...current.filters };
        delete nextFilters[columnId];
        return { ...current, filters: nextFilters };
      });
    },
    [setTableState],
  );

  const setColumnWidth = useCallback(
    (columnId: string, width: number) => {
      if (!Number.isFinite(width) || width <= 0) return;
      setTableState((current) => ({ ...current, columnWidths: { ...current.columnWidths, [columnId]: width } }));
    },
    [setTableState],
  );

  const resetState = useCallback(() => {
    setTableState(defaultState(columns, { ...defaultStateOverride, expandedRowIds: defaultExpandedRowIds || [], selectedRowIds: selection?.defaultSelectedKeys || [] }));
  }, [columns, defaultExpandedRowIds, defaultStateOverride, selection?.defaultSelectedKeys, setTableState]);

  useEffect(() => {
    const handlePointerMove = (event: MouseEvent) => {
      const activeResize = resizeStateRef.current;
      if (!activeResize) return;
      const column = columns.find((entry) => entry.id === activeResize.columnId);
      if (!column) return;
      const minWidth = Math.max(column.minWidth || 96, 56);
      const maxWidth = column.maxWidth || 720;
      const nextWidth = Math.min(maxWidth, Math.max(minWidth, activeResize.startWidth + (event.clientX - activeResize.startX)));
      setColumnWidth(activeResize.columnId, nextWidth);
    };

    const handlePointerUp = () => {
      resizeStateRef.current = null;
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
    };
  }, [columns, setColumnWidth]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) return;
      const interactiveRefs = [rootRef, filtersButtonRef, columnsButtonRef, filtersMenuRef, columnsMenuRef];
      if (interactiveRefs.some((ref) => ref.current?.contains(event.target as Node))) return;
      setFiltersMenuOpen(false);
      setColumnsMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!filtersMenuOpen || !filtersButtonRef.current || typeof window === 'undefined') return;
    const updatePosition = () => {
      if (!filtersButtonRef.current) return;
      setFiltersMenuPosition(computeFloatingMenuPosition(filtersButtonRef.current, 320));
    };
    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [filtersMenuOpen]);

  useEffect(() => {
    if (!columnsMenuOpen || !columnsButtonRef.current || typeof window === 'undefined') return;
    const updatePosition = () => {
      if (!columnsButtonRef.current) return;
      setColumnsMenuPosition(computeFloatingMenuPosition(columnsButtonRef.current, 260));
    };
    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [columnsMenuOpen]);

  const hasRowDetails = hiddenDetailColumns.length > 0 || Boolean(renderExpandedContent);

  const filteredRows = useMemo(() => {
    const query = mergedState.globalSearch.trim().toLowerCase();
    return rows.filter((row) => {
      const matchesColumnFilters = Object.entries(mergedState.filters).every(([columnId, filterValue]) => {
        const column = columns.find((entry) => entry.id === columnId);
        if (!column || isActionColumn(column)) return true;
        return rowMatchesFilter(row, column, filterValue);
      });
      if (!matchesColumnFilters) return false;
      if (!query) return true;
      if (globalSearchFn) return globalSearchFn(row, query);
      return columns.some((column) => !isActionColumn(column) && normalizeText(getColumnValue(row, column)).toLowerCase().includes(query));
    });
  }, [columns, globalSearchFn, mergedState.filters, mergedState.globalSearch, rows]);

  const sortedFilteredRows = useMemo(() => {
    if (sortRows) return sortRows(filteredRows, mergedState.sort, columns);
    if (!mergedState.sort) return filteredRows;
    const sortColumn = columns.find((entry) => entry.id === mergedState.sort?.columnId);
    if (!sortColumn) return filteredRows;
    return filteredRows
      .map((row, index) => ({ row, index }))
      .sort((left, right) => {
        const compared = compareRows(left.row, right.row, sortColumn, mergedState.sort!.direction);
        return compared || left.index - right.index;
      })
      .map((entry) => entry.row);
  }, [columns, filteredRows, mergedState.sort, sortRows]);

  const rowById = useMemo(() => new Map(rows.map((row) => [rowKey(row), row])), [rowKey, rows]);

  const selectionMode = selection?.mode;
  const selectedKeys = selection?.selectedKeys ?? mergedState.selectedRowIds;
  const selectedKeySet = useMemo(() => new Set(selectedKeys), [selectedKeys]);
  const selectedRows = useMemo(() => selectedKeys.map((id) => rowById.get(id)).filter(Boolean) as Row[], [rowById, selectedKeys]);

  const updateSelection = useCallback(
    (nextKeys: string[]) => {
      setTableState((current) => ({ ...current, selectedRowIds: nextKeys }));
      selection?.onChange?.(nextKeys, nextKeys.map((id) => rowById.get(id)).filter(Boolean) as Row[]);
    },
    [rowById, selection, setTableState],
  );

  const toggleSelected = (row: Row) => {
    if (!selectionMode || selection?.isRowDisabled?.(row)) return;
    const id = rowKey(row);
    if (selectionMode === 'single') {
      updateSelection(selectedKeySet.has(id) ? [] : [id]);
      return;
    }
    const next = new Set(selectedKeys);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    updateSelection(Array.from(next));
  };

  const selectableRows = (selection?.selectAllScope === 'all' ? rows : sortedFilteredRows).filter((row) => !selection?.isRowDisabled?.(row));
  const selectableIds = selectableRows.map((row) => rowKey(row));
  const allSelectableSelected = Boolean(selectableIds.length) && selectableIds.every((id) => selectedKeySet.has(id));
  const someSelectableSelected = selectableIds.some((id) => selectedKeySet.has(id));

  const toggleSelectAll = () => {
    if (!selectionMode || selectionMode === 'single') return;
    if (allSelectableSelected) updateSelection(selectedKeys.filter((id) => !selectableIds.includes(id)));
    else updateSelection(Array.from(new Set([...selectedKeys, ...selectableIds])));
  };

  const clearSelection = () => updateSelection([]);

  const expandedIds = expandedRowIds ?? mergedState.expandedRowIds;
  const expandedIdSet = useMemo(() => new Set(expandedIds), [expandedIds]);

  const toggleExpanded = (row: Row) => {
    const id = rowKey(row);
    const next = new Set(expandedIds);
    const expanded = !next.has(id);
    if (expanded) next.add(id);
    else next.delete(id);
    const nextIds = Array.from(next);
    setTableState((current) => ({ ...current, expandedRowIds: nextIds }));
    onExpandedChange?.(nextIds, row);
    onRowExpand?.(row, expanded);
  };

  const visibleHideableColumns = columns.filter((column) => !isActionColumn(column) && column.hideable !== false);
  const filterableVisibleColumns = visibleColumns.filter((column) => !isActionColumn(column) && column.filterable !== false);
  const activeFilterCount = filterableVisibleColumns.filter((column) => isFilterActive(column.kind || 'text', mergedState.filters[column.id])).length;

  const totalWidth = useMemo(() => {
    const baseWidth = visibleColumns.reduce((sum, column) => sum + Number(mergedState.columnWidths[column.id] || column.width || column.minWidth || 160), 0);
    return baseWidth + (hasRowDetails ? 56 : 0) + (selectionMode ? 52 : 0);
  }, [hasRowDetails, mergedState.columnWidths, selectionMode, visibleColumns]);

  const virtualEnabled = Boolean(virtualization?.enabled && !hasRowDetails);
  const rowHeight = virtualization?.rowHeight || 48;
  const maxHeight = virtualization?.maxHeight || 520;
  const overscan = virtualization?.overscan || 6;
  const startIndex = virtualEnabled ? Math.max(0, Math.floor(scrollTop / rowHeight) - overscan) : 0;
  const visibleCount = virtualEnabled ? Math.ceil(maxHeight / rowHeight) + overscan * 2 : sortedFilteredRows.length;
  const renderedRows = virtualEnabled ? sortedFilteredRows.slice(startIndex, startIndex + visibleCount) : sortedFilteredRows;
  const topSpacerHeight = virtualEnabled ? startIndex * rowHeight : 0;
  const bottomSpacerHeight = virtualEnabled ? Math.max(0, (sortedFilteredRows.length - startIndex - renderedRows.length) * rowHeight) : 0;

  const renderFilterEditor = (column: TableColumn<Row>) => {
    if (column.renderFilter) {
      return column.renderFilter({
        value: mergedState.filters[column.id],
        setValue: (value) => setFilter(column.id, value),
        clear: () => clearFilter(column.id),
        rows,
      });
    }

    const kind = column.kind || 'text';
    if (kind === 'enum') {
      const options = column.getFilterOptions ? column.getFilterOptions(rows) : column.getEnumOptions ? column.getEnumOptions(rows) : defaultEnumOptions(rows, column);
      const selected = Array.isArray((mergedState.filters[column.id] as { values?: unknown[] })?.values)
        ? (mergedState.filters[column.id] as { values: unknown[] }).values.map(String)
        : [];
      return (
        <div className="max-h-[220px] space-y-2 overflow-auto pr-1 rui-scrollbar">
          {options.map((option) => {
            const checked = selected.includes(String(option.value));
            return (
              <label key={String(option.value)} className="flex items-center gap-3 text-sm text-white/75">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => {
                    const nextValues = new Set<string>(selected);
                    if (checked) nextValues.delete(String(option.value));
                    else nextValues.add(String(option.value));
                    setFilter(column.id, { values: Array.from(nextValues) });
                  }}
                  className="h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]"
                />
                <span>{option.label}</span>
              </label>
            );
          })}
        </div>
      );
    }

    if (kind === 'number') {
      const value = (mergedState.filters[column.id] || {}) as { min?: string; max?: string };
      return (
        <div className="space-y-3">
          <input
            className="h-10 w-full rounded-[8px] px-3 text-sm outline-none rui-input"
            type="number"
            value={value.min || ''}
            onChange={(event) => setFilter(column.id, { ...value, min: event.target.value })}
            placeholder="Minimum"
          />
          <input
            className="h-10 w-full rounded-[8px] px-3 text-sm outline-none rui-input"
            type="number"
            value={value.max || ''}
            onChange={(event) => setFilter(column.id, { ...value, max: event.target.value })}
            placeholder="Maximum"
          />
        </div>
      );
    }

    if (kind === 'datetime') {
      const value = (mergedState.filters[column.id] || {}) as { from?: string; to?: string };
      return (
        <div className="space-y-3">
          <input
            className="h-10 w-full rounded-[8px] border border-white/10 bg-black/10 px-3 text-sm text-white outline-none"
            type="datetime-local"
            value={value.from || ''}
            onChange={(event) => setFilter(column.id, { ...value, from: event.target.value })}
          />
          <input
            className="h-10 w-full rounded-[8px] border border-white/10 bg-black/10 px-3 text-sm text-white outline-none"
            type="datetime-local"
            value={value.to || ''}
            onChange={(event) => setFilter(column.id, { ...value, to: event.target.value })}
          />
        </div>
      );
    }

    if (kind === 'boolean') {
      const value = (mergedState.filters[column.id] as { value?: string })?.value || 'all';
      return (
        <select className="h-10 w-full rounded-[8px] px-3 text-sm outline-none rui-input" value={value} onChange={(event) => setFilter(column.id, { value: event.target.value })}>
          <option value="all">All</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      );
    }

    return (
      <input
        className="h-10 w-full rounded-[8px] px-3 text-sm outline-none rui-input"
        value={String(mergedState.filters[column.id] || '')}
        onChange={(event) => setFilter(column.id, event.target.value)}
        placeholder={`Filter ${String(column.label)}`}
      />
    );
  };

  const tableToolbar = renderToolbar?.({ state: mergedState, rows, visibleRows: sortedFilteredRows, selectedRows, reset: resetState });
  const selectionActions = selectedKeys.length ? renderSelectionActions?.({ selectedKeys, selectedRows, clearSelection }) : null;

  const hasColumnGroups = visibleColumns.some((column) => column.groupId || column.groupLabel);
  const groupedHeader = hasColumnGroups ? (
    <tr className="sticky top-0 z-30 border-b border-white/10 bg-[var(--rui-bg-panel)] text-white/60">
      {selectionMode ? <th className="w-[52px] px-3 py-2" rowSpan={2} /> : null}
      {hasRowDetails ? <th className="w-14 px-3 py-2" rowSpan={2} /> : null}
      {visibleColumns.map((column) => (
        <th key={column.id} className="px-3 py-2 text-left text-xs font-medium uppercase tracking-[0.14em]">
          {column.groupLabel || column.groupId || ''}
        </th>
      ))}
    </tr>
  ) : null;

  return (
    <div ref={rootRef} className={cn('rui-theme flex min-h-0 flex-1 flex-col', className, classNames?.root)} style={accentStyle}>
      {toolbarContent || tableToolbar || selectionActions || searchable || (!hideColumnControls && visibleHideableColumns.length) ? (
        <div className={cn('mb-3 flex flex-wrap items-center justify-between gap-2', classNames?.toolbar)}>
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
            {searchable ? (
              <div className="relative w-full max-w-[320px]">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#737a98]">
                  <Icon name="search" className="h-4 w-4" />
                </span>
                <input
                  className="h-10 w-full rounded-[8px] pl-10 pr-3 text-sm outline-none rui-input"
                  value={mergedState.globalSearch}
                  onChange={(event) => setGlobalSearch(event.target.value)}
                  placeholder={searchPlaceholder}
                />
              </div>
            ) : null}
            {toolbarContent}
            {tableToolbar}
            {selectionActions}
          </div>
          {!hideColumnControls && visibleHideableColumns.length ? (
            <div className="flex flex-wrap items-center justify-end gap-2">
              {filterableVisibleColumns.length ? (
                <div ref={filtersButtonRef} className="flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    leftIcon={<Icon name="filter" className="h-4 w-4" />}
                    className={cn(activeFilterCount ? 'text-[var(--rui-accent)]' : '')}
                    onClick={() => setFiltersMenuOpen((current) => !current)}
                  >
                    Filters
                    {activeFilterCount ? (
                      <span className="rounded-full border border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] px-1.5 py-0 text-[10px] leading-4 text-[var(--rui-accent)]">
                        {activeFilterCount}
                      </span>
                    ) : null}
                  </Button>
                </div>
              ) : null}
              <div ref={columnsButtonRef} className="flex items-center">
                <Button variant="ghost" size="sm" leftIcon={<Icon name="grid" className="h-4 w-4" />} onClick={() => setColumnsMenuOpen((current) => !current)}>
                  Columns
                </Button>
              </div>
              <Button variant="ghost" size="sm" onClick={resetState}>
                Reset table
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}

      {headerFilters || renderHeaderFilters ? (
        <div className={cn('mb-3 flex flex-wrap items-center gap-2 rounded-[10px] border border-white/8 bg-black/10 p-3', classNames?.headerFilters)}>
          {headerFilters}
          {renderHeaderFilters?.({
            state: mergedState,
            rows,
            visibleRows: sortedFilteredRows,
            selectedRows,
            setGlobalSearch,
            setFilter,
            clearFilter,
            reset: resetState,
          })}
        </div>
      ) : null}

      {mounted && filtersMenuOpen && filtersMenuPosition
        ? createPortal(
            <div
              ref={filtersMenuRef}
              className={cn(
                'fixed z-[130] w-[320px] overflow-auto rounded-[10px] border border-white/10 bg-[var(--rui-bg-panel)] p-3 shadow-panel rui-scrollbar',
                classNames?.menu,
              )}
              style={{ left: filtersMenuPosition.left, top: filtersMenuPosition.top, maxHeight: filtersMenuPosition.maxHeight }}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.14em] text-white/45">Table filters</div>
                <Button variant="ghost" size="sm" onClick={() => filterableVisibleColumns.forEach((column) => clearFilter(column.id))}>
                  Clear all
                </Button>
              </div>
              <div className="space-y-4">
                {filterableVisibleColumns.map((column) => {
                  const filterActive = isFilterActive(column.kind || 'text', mergedState.filters[column.id]);
                  return (
                    <div key={column.id} className="rounded-[10px] border border-white/8 bg-black/10 p-3">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <div className="text-sm font-medium text-white">{column.label}</div>
                        {filterActive ? (
                          <Button variant="ghost" size="sm" onClick={() => clearFilter(column.id)}>
                            Clear
                          </Button>
                        ) : null}
                      </div>
                      {renderFilterEditor(column)}
                    </div>
                  );
                })}
              </div>
            </div>,
            document.body,
          )
        : null}

      {mounted && columnsMenuOpen && columnsMenuPosition
        ? createPortal(
            <div
              ref={columnsMenuRef}
              className={cn('fixed z-[130] w-[260px] rounded-[10px] border border-white/10 bg-[var(--rui-bg-panel)] p-3 shadow-panel', classNames?.menu)}
              style={{ left: columnsMenuPosition.left, top: columnsMenuPosition.top, maxHeight: columnsMenuPosition.maxHeight }}
            >
              <div className="mb-2 text-xs uppercase tracking-[0.14em] text-white/45">Visible columns</div>
              <div className="space-y-2 overflow-auto pr-1 rui-scrollbar" style={{ maxHeight: Math.max(120, columnsMenuPosition.maxHeight - 36) }}>
                {visibleHideableColumns.map((column) => {
                  const checked = mergedState.visibleColumnIds.includes(column.id);
                  return (
                    <label key={column.id} className="flex items-center gap-3 text-sm text-white/75">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {
                          setTableState((current) => {
                            const currentlyVisible = current.visibleColumnIds.includes(column.id);
                            const nonActionVisible = current.visibleColumnIds.filter((id) => {
                              const visibleColumn = columns.find((item) => item.id === id);
                              return visibleColumn && !isActionColumn(visibleColumn);
                            });
                            if (currentlyVisible && nonActionVisible.length <= 1) return current;
                            const visibleSet = new Set(current.visibleColumnIds);
                            if (currentlyVisible) visibleSet.delete(column.id);
                            else visibleSet.add(column.id);
                            const filters = { ...current.filters };
                            if (currentlyVisible) delete filters[column.id];
                            return {
                              ...current,
                              visibleColumnIds: columns.filter((item) => visibleSet.has(item.id) || !isColumnHideable(item)).map((item) => item.id),
                              filters,
                              sort: current.sort?.columnId === column.id && currentlyVisible ? null : current.sort,
                            };
                          });
                        }}
                        className="h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]"
                      />
                      <span>{column.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>,
            document.body,
          )
        : null}

      <div
        className={cn('min-h-0 flex-1 overflow-auto rounded-[10px] border border-white/8 rui-scrollbar', containerClassName, classNames?.container)}
        style={{ scrollbarGutter: 'stable both-edges', maxHeight: virtualEnabled ? maxHeight : undefined }}
        onScroll={(event) => {
          if (virtualEnabled) setScrollTop(event.currentTarget.scrollTop);
        }}
      >
        <table className={cn('w-full table-fixed text-left text-sm', tableClassName, classNames?.table)} style={{ minWidth: `${Math.max(totalWidth, 720)}px` }}>
          <colgroup>
            {selectionMode ? <col style={{ width: 52 }} /> : null}
            {hasRowDetails ? <col style={{ width: 56 }} /> : null}
            {visibleColumns.map((column) => (
              <col key={column.id} style={{ width: mergedState.columnWidths[column.id] || column.width || column.minWidth || 160 }} />
            ))}
          </colgroup>
          <thead>
            {groupedHeader}
            <tr className={cn('sticky top-0 z-20 border-b border-white/10 bg-[var(--rui-bg-panel)] text-white/70', hasColumnGroups && 'top-[37px]', classNames?.headerRow)}>
              {selectionMode ? (
                <th className="w-[52px] px-3 py-3 font-medium">
                  {selectionMode === 'multi' ? (
                    <input
                      type="checkbox"
                      checked={allSelectableSelected}
                      ref={(node) => {
                        if (node) node.indeterminate = someSelectableSelected && !allSelectableSelected;
                      }}
                      onChange={toggleSelectAll}
                      className="h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]"
                      aria-label={allSelectableSelected ? 'Clear row selection' : 'Select rows'}
                    />
                  ) : null}
                </th>
              ) : null}
              {hasRowDetails ? <th className="w-14 px-3 py-3 font-medium" /> : null}
              {visibleColumns.map((column) => {
                const sortable = !isActionColumn(column) && column.sortable !== false;
                const activeSort = mergedState.sort?.columnId === column.id ? mergedState.sort.direction : null;
                const headerContent = column.renderHeader ? column.renderHeader() : column.label;
                return (
                  <th key={column.id} className={cn('relative px-3 py-3 font-medium', defaultAlignClass(column.align), column.headerClassName)}>
                    <div className="flex items-center gap-1 pr-3">
                      {column.renderHeader ? (
                        <div className={cn('flex min-w-0 flex-1 items-center', column.align === 'right' ? 'justify-end' : column.align === 'center' ? 'justify-center' : '')}>
                          {headerContent}
                        </div>
                      ) : sortable ? (
                        <button
                          type="button"
                          className={cn(
                            'flex min-w-0 flex-1 items-center gap-1 text-left transition hover:text-white',
                            column.align === 'right' ? 'justify-end' : column.align === 'center' ? 'justify-center' : '',
                          )}
                          onClick={() => setTableState((current) => ({ ...current, sort: nextSortState(current.sort, column.id) }))}
                        >
                          <span className="truncate">{headerContent}</span>
                          <span className={cn('text-[10px] uppercase tracking-[0.14em]', activeSort ? 'text-[var(--rui-accent)]' : 'text-white/25')}>
                            {activeSort === 'asc' ? '↑' : activeSort === 'desc' ? '↓' : '•'}
                          </span>
                        </button>
                      ) : (
                        <span className="truncate">{headerContent}</span>
                      )}
                    </div>
                    {!isActionColumn(column) ? (
                      <div
                        className="absolute inset-y-1 right-0 w-2 cursor-col-resize rounded-full transition hover:bg-white/10"
                        onMouseDown={(event) => {
                          event.preventDefault();
                          resizeStateRef.current = {
                            columnId: column.id,
                            startX: event.clientX,
                            startWidth: Number(mergedState.columnWidths[column.id] || column.width || column.minWidth || 160),
                          };
                        }}
                      />
                    ) : null}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {virtualEnabled && topSpacerHeight ? (
              <tr>
                <td colSpan={visibleColumns.length + (hasRowDetails ? 1 : 0) + (selectionMode ? 1 : 0)} style={{ height: topSpacerHeight }} />
              </tr>
            ) : null}
            {loading ? (
              <tr>
                <td colSpan={visibleColumns.length + (hasRowDetails ? 1 : 0) + (selectionMode ? 1 : 0)} className="px-3 py-8 text-center text-white/55">
                  {loadingContent}
                </td>
              </tr>
            ) : null}
            {!loading
              ? renderedRows.map((row) => {
                  const id = rowKey(row);
                  const expanded = expandedIdSet.has(id);
                  const customExpandedContent = expanded ? renderExpandedContent?.(row) : null;
                  const hasExpandedContent = Boolean(renderExpandedContent) || hiddenDetailColumns.length > 0;
                  const computedRowClassName = typeof rowClassName === 'function' ? rowClassName(row) : rowClassName;
                  const selected = selectedKeySet.has(id);
                  const selectionDisabled = selection?.isRowDisabled?.(row);
                  return (
                    <React.Fragment key={id}>
                      <tr className={cn('border-b border-white/6 align-top last:border-none', selected && 'bg-[rgba(25,199,220,0.08)]', computedRowClassName, classNames?.row)}>
                        {selectionMode ? (
                          <td className="px-3 py-3">
                            <input
                              type={selectionMode === 'single' ? 'radio' : 'checkbox'}
                              checked={selected}
                              disabled={selectionDisabled}
                              onChange={() => toggleSelected(row)}
                              className="h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)] disabled:opacity-35"
                              aria-label={selected ? 'Deselect row' : 'Select row'}
                            />
                          </td>
                        ) : null}
                        {hasRowDetails ? (
                          <td className="px-3 py-3">
                            {hasExpandedContent ? (
                              <Button variant="ghost" size="sm" className="w-9 px-0" onClick={() => toggleExpanded(row)} title={expanded ? 'Collapse row' : 'Expand row'}>
                                <Icon name={expanded ? 'chevron-down' : 'chevron-right'} className="h-4 w-4" />
                              </Button>
                            ) : null}
                          </td>
                        ) : null}
                        {visibleColumns.map((column) => {
                          const content = column.renderCell ? column.renderCell(row) : renderPrimitiveValue(getColumnValue(row, column));
                          const computedCellClassName = typeof column.cellClassName === 'function' ? column.cellClassName(row) : column.cellClassName;
                          return (
                            <td key={column.id} className={cn('px-3 py-3 text-white/75', defaultAlignClass(column.align), computedCellClassName, classNames?.cell)}>
                              {typeof content === 'string' || typeof content === 'number' ? (
                                <div className={cn(column.wrap ? 'whitespace-normal break-words' : 'truncate')}>{content}</div>
                              ) : (
                                content
                              )}
                            </td>
                          );
                        })}
                      </tr>
                      {expanded && hasExpandedContent ? (
                        <tr className={cn('border-b border-white/6 last:border-none', detailRowClassName, classNames?.detailRow)}>
                          <td colSpan={visibleColumns.length + (hasRowDetails ? 1 : 0) + (selectionMode ? 1 : 0)} className="px-3 py-3">
                            <div className="rounded-[10px] border border-white/8 bg-black/10 p-4 text-sm text-white/75">
                              {hiddenDetailColumns.length ? (
                                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                                  {hiddenDetailColumns.map((column) => (
                                    <div key={column.id}>
                                      <div className="text-xs uppercase tracking-[0.14em] text-white/40">{column.label}</div>
                                      <div className="mt-1 whitespace-normal break-words text-white/85">{formatHiddenDetailValue(row, column)}</div>
                                    </div>
                                  ))}
                                </div>
                              ) : null}
                              {customExpandedContent ? (
                                <div className={cn(hiddenDetailColumns.length ? 'mt-4 border-t border-white/8 pt-4' : '')}>{customExpandedContent}</div>
                              ) : null}
                            </div>
                          </td>
                        </tr>
                      ) : null}
                    </React.Fragment>
                  );
                })
              : null}
            {virtualEnabled && bottomSpacerHeight ? (
              <tr>
                <td colSpan={visibleColumns.length + (hasRowDetails ? 1 : 0) + (selectionMode ? 1 : 0)} style={{ height: bottomSpacerHeight }} />
              </tr>
            ) : null}
            {!loading && !sortedFilteredRows.length ? (
              <tr>
                <td colSpan={visibleColumns.length + (hasRowDetails ? 1 : 0) + (selectionMode ? 1 : 0)} className="px-3 py-8 text-center text-white/55">
                  {emptyMessage}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
