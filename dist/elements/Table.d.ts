import React from 'react';
import type { AccentKey } from '../context/AccentContext';
export type TableColumnKind = 'text' | 'enum' | 'number' | 'datetime' | 'boolean' | 'action';
export type TableSortDirection = 'asc' | 'desc';
export type TableSelectionMode = 'single' | 'multi';
export interface TableSortState {
    columnId: string;
    direction: TableSortDirection;
}
export interface TableState {
    visibleColumnIds: string[];
    columnOrder: string[];
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
    getFilterOptions?: (rows: Row[]) => Array<{
        label: React.ReactNode;
        value: string | number;
    }>;
    getEnumOptions?: (rows: Row[]) => Array<{
        label: React.ReactNode;
        value: string | number;
    }>;
    compare?: (leftRow: Row, rightRow: Row, direction: TableSortDirection) => number;
    filterFn?: (row: Row, filterValue: unknown) => boolean;
    renderFilter?: (params: {
        value: unknown;
        setValue: (value: unknown) => void;
        clear: () => void;
        rows: Row[];
    }) => React.ReactNode;
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
    renderToolbar?: (params: {
        state: TableState;
        rows: Row[];
        visibleRows: Row[];
        selectedRows: Row[];
        reset: () => void;
    }) => React.ReactNode;
    headerFilters?: React.ReactNode;
    renderHeaderFilters?: (params: TableHeaderFiltersParams<Row>) => React.ReactNode;
    renderSelectionActions?: (params: {
        selectedKeys: string[];
        selectedRows: Row[];
        clearSelection: () => void;
    }) => React.ReactNode;
    hideColumnControls?: boolean;
    allowColumnResize?: boolean;
    allowColumnReorder?: boolean;
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
export declare function Table<Row>({ rows, columns, rowKey, tableId, scopeId, persistence, state: controlledState, defaultState: defaultStateOverride, onStateChange, selection, virtualization, loading, emptyMessage, loadingContent, toolbarContent, renderToolbar, headerFilters, renderHeaderFilters, renderSelectionActions, hideColumnControls, allowColumnResize, allowColumnReorder, searchable, searchPlaceholder, globalSearchFn, sortRows, renderExpandedContent, expandedRowIds, defaultExpandedRowIds, onExpandedChange, onRowExpand, rowClassName, detailRowClassName, containerClassName, tableClassName, accentKey, style, className, classNames, }: TableProps<Row>): import("react/jsx-runtime").JSX.Element;
export default Table;
//# sourceMappingURL=Table.d.ts.map