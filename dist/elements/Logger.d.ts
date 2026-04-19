import React from 'react';
import type { AccentKey } from '../context/AccentContext';
export interface LoggerEntry {
    id: string;
    level?: string;
    category?: string;
    source?: string;
    message: React.ReactNode;
    payload?: unknown;
    createdAt?: string | number | Date;
    timestamp?: string | number | Date;
    metadata?: Record<string, React.ReactNode>;
    [key: string]: unknown;
}
export interface LoggerOption {
    label: React.ReactNode;
    value: string;
}
export interface LoggerFilterState {
    level: string;
    category: string;
    search: string;
    autoScroll: boolean;
}
export interface LoggerProps<Entry extends LoggerEntry = LoggerEntry> {
    entries?: Entry[];
    logs?: Entry[];
    levels?: LoggerOption[];
    categories?: LoggerOption[];
    defaultLevel?: string;
    defaultCategory?: string;
    defaultSearch?: string;
    level?: string;
    category?: string;
    search?: string;
    autoScroll?: boolean;
    onLevelChange?: (level: string) => void;
    onCategoryChange?: (category: string) => void;
    onSearchChange?: (search: string) => void;
    onAutoScrollChange?: (autoScroll: boolean) => void;
    onFiltersChange?: (filters: LoggerFilterState) => void;
    searchPlaceholder?: string;
    heightClassName?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    subtitle?: React.ReactNode;
    action?: React.ReactNode;
    onClear?: () => void | Promise<void>;
    trailing?: boolean;
    autoScrollDefault?: boolean;
    showHeader?: boolean;
    showToolbar?: boolean;
    showLevelFilter?: boolean;
    showCategoryFilter?: boolean;
    emptyContent?: React.ReactNode;
    formatTimestamp?: (entry: Entry) => React.ReactNode;
    renderMetadata?: (entry: Entry) => React.ReactNode;
    renderPayload?: (entry: Entry) => React.ReactNode;
    getSearchText?: (entry: Entry) => string;
    accentKey?: AccentKey;
    style?: React.CSSProperties;
    className?: string;
    classNames?: {
        toolbar?: string;
        viewport?: string;
        entry?: string;
        payload?: string;
    };
}
export declare function Logger<Entry extends LoggerEntry = LoggerEntry>({ entries, logs, levels, categories, defaultLevel, defaultCategory, defaultSearch, level: controlledLevel, category: controlledCategory, search: controlledSearch, autoScroll: controlledAutoScroll, onLevelChange, onCategoryChange, onSearchChange, onAutoScrollChange, onFiltersChange, searchPlaceholder, heightClassName, title, description, subtitle, action, onClear, trailing, autoScrollDefault, showHeader, showToolbar, showLevelFilter, showCategoryFilter, emptyContent, formatTimestamp, renderMetadata, renderPayload, getSearchText, accentKey, style, className, classNames, }: LoggerProps<Entry>): import("react/jsx-runtime").JSX.Element;
export default Logger;
//# sourceMappingURL=Logger.d.ts.map