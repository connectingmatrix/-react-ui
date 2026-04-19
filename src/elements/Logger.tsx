import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';
import Button from '../components/Button';
import { Icon } from '../components/Icon';
import SelectBox from '../components/SelectBox';

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

const DEFAULT_LEVELS: LoggerOption[] = ['ALL', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'SUCCESS'].map((value) => ({ label: value, value }));
const DEFAULT_CATEGORIES: LoggerOption[] = [{ label: 'All categories', value: 'ALL' }];

function formatDateTime(value: unknown) {
  if (!value) return '';
  const date = value instanceof Date ? value : new Date(value as string | number);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString();
}

function formatPayload(payload: unknown) {
  if (!payload || (typeof payload === 'object' && !Object.keys(payload as Record<string, unknown>).length)) return '';
  if (typeof payload === 'string') return payload;
  return JSON.stringify(payload, null, 2);
}

function levelTone(level?: string) {
  if (level === 'ERROR') return 'text-[var(--rui-danger)]';
  if (level === 'WARN' || level === 'WARNING') return 'text-[var(--rui-warning)]';
  if (level === 'SUCCESS') return 'text-[var(--rui-success)]';
  if (level === 'INFO') return 'text-[var(--rui-accent)]';
  return 'text-white/45';
}

function levelIcon(level?: string) {
  if (level === 'ERROR') return 'close';
  if (level === 'WARN' || level === 'WARNING') return 'info';
  if (level === 'SUCCESS') return 'check';
  if (level === 'INFO') return 'info';
  return 'actions';
}

function sortEntries<Entry extends LoggerEntry>(entries: Entry[], trailing: boolean): Entry[] {
  const copy = [...entries];
  copy.sort((a, b) => new Date(a.createdAt ?? a.timestamp ?? 0).getTime() - new Date(b.createdAt ?? b.timestamp ?? 0).getTime());
  return trailing ? copy : copy.reverse();
}

export function Logger<Entry extends LoggerEntry = LoggerEntry>({
  entries,
  logs,
  levels = DEFAULT_LEVELS,
  categories = DEFAULT_CATEGORIES,
  defaultLevel = 'ALL',
  defaultCategory = 'ALL',
  defaultSearch = '',
  level: controlledLevel,
  category: controlledCategory,
  search: controlledSearch,
  autoScroll: controlledAutoScroll,
  onLevelChange,
  onCategoryChange,
  onSearchChange,
  onAutoScrollChange,
  onFiltersChange,
  searchPlaceholder = 'Search logs',
  heightClassName = 'max-h-[360px]',
  title = 'Log stream',
  description,
  subtitle,
  action,
  onClear,
  trailing = true,
  autoScrollDefault = true,
  showHeader = true,
  showToolbar = true,
  showLevelFilter = true,
  showCategoryFilter = true,
  emptyContent = 'No log lines matched the current filters.',
  formatTimestamp,
  renderMetadata,
  renderPayload,
  getSearchText,
  accentKey,
  style,
  className,
  classNames,
}: LoggerProps<Entry>) {
  const resolvedEntries = useMemo(() => entries ?? logs ?? [], [entries, logs]);
  const [internalLevel, setInternalLevel] = useState(defaultLevel);
  const [internalCategory, setInternalCategory] = useState(defaultCategory);
  const [internalSearch, setInternalSearch] = useState(defaultSearch);
  const [internalAutoScroll, setInternalAutoScroll] = useState(autoScrollDefault);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const resolvedDescription = description ?? subtitle;
  const accentStyle = useAccentStyle(accentKey, style);
  const level = controlledLevel ?? internalLevel;
  const category = controlledCategory ?? internalCategory;
  const search = controlledSearch ?? internalSearch;
  const autoScroll = controlledAutoScroll ?? internalAutoScroll;

  const emitFiltersChange = useCallback(
    (nextFilters: Partial<LoggerFilterState>) => {
      onFiltersChange?.({
        level,
        category,
        search,
        autoScroll,
        ...nextFilters,
      });
    },
    [autoScroll, category, level, onFiltersChange, search],
  );

  const updateLevel = useCallback(
    (nextLevel: string) => {
      if (controlledLevel === undefined) setInternalLevel(nextLevel);
      onLevelChange?.(nextLevel);
      emitFiltersChange({ level: nextLevel });
    },
    [controlledLevel, emitFiltersChange, onLevelChange],
  );

  const updateCategory = useCallback(
    (nextCategory: string) => {
      if (controlledCategory === undefined) setInternalCategory(nextCategory);
      onCategoryChange?.(nextCategory);
      emitFiltersChange({ category: nextCategory });
    },
    [controlledCategory, emitFiltersChange, onCategoryChange],
  );

  const updateSearch = useCallback(
    (nextSearch: string) => {
      if (controlledSearch === undefined) setInternalSearch(nextSearch);
      onSearchChange?.(nextSearch);
      emitFiltersChange({ search: nextSearch });
    },
    [controlledSearch, emitFiltersChange, onSearchChange],
  );

  const updateAutoScroll = useCallback(
    (nextAutoScroll: boolean) => {
      if (controlledAutoScroll === undefined) setInternalAutoScroll(nextAutoScroll);
      onAutoScrollChange?.(nextAutoScroll);
      emitFiltersChange({ autoScroll: nextAutoScroll });
    },
    [controlledAutoScroll, emitFiltersChange, onAutoScrollChange],
  );

  useEffect(() => {
    if (controlledLevel === undefined) setInternalLevel(defaultLevel);
  }, [controlledLevel, defaultLevel]);

  useEffect(() => {
    if (controlledCategory === undefined) setInternalCategory(defaultCategory);
  }, [controlledCategory, defaultCategory]);

  useEffect(() => {
    if (controlledSearch === undefined) setInternalSearch(defaultSearch);
  }, [controlledSearch, defaultSearch]);

  useEffect(() => {
    if (controlledAutoScroll === undefined) setInternalAutoScroll(autoScrollDefault);
  }, [autoScrollDefault, controlledAutoScroll]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    const nextEntries = resolvedEntries.filter((entry) => {
      if (showLevelFilter && level !== 'ALL' && entry.level !== level) return false;
      if (showCategoryFilter && category !== 'ALL' && entry.category !== category) return false;
      if (!query) return true;
      const haystack =
        getSearchText?.(entry) ||
        [entry.message, entry.source, entry.category, entry.level, JSON.stringify(entry.metadata || {}), JSON.stringify(entry.payload || {})].join(' ').toLowerCase();
      return haystack.toLowerCase().includes(query);
    });
    return sortEntries(nextEntries, trailing);
  }, [category, getSearchText, level, resolvedEntries, search, showCategoryFilter, showLevelFilter, trailing]);

  useEffect(() => {
    if (!autoScroll || !trailing || !scrollRef.current) return;
    const node = scrollRef.current;
    const frame = window.requestAnimationFrame(() => {
      node.scrollTop = node.scrollHeight;
    });
    return () => window.cancelAnimationFrame(frame);
  }, [autoScroll, filtered, trailing]);

  useEffect(() => {
    setExpandedIds((current) => {
      const next = new Set<string>();
      for (const id of current) {
        if (filtered.some((entry) => entry.id === id)) next.add(id);
      }
      return next;
    });
  }, [filtered]);

  const toggleExpanded = (entryId: string) => {
    setExpandedIds((current) => {
      const next = new Set(current);
      if (next.has(entryId)) next.delete(entryId);
      else next.add(entryId);
      return next;
    });
  };

  const clearFilters = () => {
    updateSearch(defaultSearch);
    updateLevel(defaultLevel);
    updateCategory(defaultCategory);
  };

  return (
    <div className={cn('rui-theme flex h-full min-h-0 min-w-0 flex-col gap-3', className)} style={accentStyle}>
      {showHeader ? (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            {resolvedDescription ? <p className="mt-1 text-sm text-white/60">{resolvedDescription}</p> : null}
          </div>
          {action}
        </div>
      ) : null}

      {showToolbar ? (
        <div className={cn('flex min-w-0 shrink-0 flex-wrap items-center gap-2', classNames?.toolbar)}>
          <div className="min-w-[140px] flex-[1_1_180px] lg:max-w-[260px]">
            <input
              className="h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input"
              value={search}
              onChange={(event) => updateSearch(event.target.value)}
              placeholder={searchPlaceholder}
            />
          </div>
          {showLevelFilter ? (
            <div className="min-w-[112px] flex-[0_1_132px]">
              <SelectBox searchable value={level} options={levels} onChange={(value) => updateLevel(String(value ?? defaultLevel))} />
            </div>
          ) : null}
          {showCategoryFilter ? (
            <div className="min-w-[140px] flex-[0_1_176px]">
              <SelectBox searchable value={category} options={categories} onChange={(value) => updateCategory(String(value ?? defaultCategory))} />
            </div>
          ) : null}
          {!showHeader ? action : null}
          <Button variant="ghost" size="sm" onClick={() => updateAutoScroll(!autoScroll)}>
            {autoScroll ? 'Trailing on' : 'Trailing off'}
          </Button>
          {onClear ? (
            <Button variant="ghost" size="sm" onClick={() => void onClear()}>
              Clear logs
            </Button>
          ) : null}
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear filters
          </Button>
        </div>
      ) : null}

      <div className={cn('min-w-0 flex-1 overflow-hidden rounded-[10px] border border-white/8 bg-[#0b1022]', classNames?.viewport)}>
        <div ref={scrollRef} className={cn(heightClassName, 'min-h-0 overflow-auto select-text rui-scrollbar [scrollbar-gutter:stable]')}>
          {filtered.length ? (
            filtered.map((entry) => {
              const payloadContent = renderPayload ? renderPayload(entry) : formatPayload(entry.payload);
              const hasPayload = Boolean(payloadContent);
              const isExpanded = expandedIds.has(entry.id);
              return (
                <React.Fragment key={entry.id}>
                  <div className={cn('border-b border-white/6 px-3 py-2 font-mono text-xs last:border-none', classNames?.entry)}>
                    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                      <div className="min-w-0">
                        <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-white/80">
                          <span className="shrink-0 text-white/45">{formatTimestamp ? formatTimestamp(entry) : formatDateTime(entry.createdAt ?? entry.timestamp)}</span>
                          {entry.source || entry.category ? <span className="shrink-0 text-white/35">|</span> : null}
                          {entry.source || entry.category ? <span className="shrink-0 text-white/50">{[entry.source, entry.category].filter(Boolean).join('/')}</span> : null}
                          {renderMetadata
                            ? renderMetadata(entry)
                            : Object.entries(entry.metadata || {}).map(([key, value]) => (
                                <span key={key} className="shrink-0 text-white/35">
                                  [{value}]
                                </span>
                              ))}
                          <span className={cn('shrink-0', levelTone(entry.level))} title={entry.level}>
                            <Icon name={levelIcon(entry.level)} className="h-4 w-4" />
                          </span>
                        </div>
                        <div className="mt-1 min-w-0 whitespace-pre-wrap break-words text-white/90">{entry.message}</div>
                      </div>
                      <div className="shrink-0">
                        {hasPayload ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-[11px]"
                            leftIcon={<Icon name="info" className="h-4 w-4" />}
                            onClick={() => toggleExpanded(entry.id)}
                          >
                            {isExpanded ? 'Hide payload' : 'View payload'}
                          </Button>
                        ) : (
                          <span className="inline-flex h-7 items-center text-white/30">-</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {isExpanded && hasPayload ? (
                    <div className="border-b border-white/6 bg-black/20 px-3 py-3 last:border-none">
                      {typeof payloadContent === 'string' ? (
                        <pre
                          className={cn(
                            'overflow-x-auto whitespace-pre-wrap break-words rounded-[8px] border border-white/8 bg-[#070b18] p-3 font-mono text-[11px] leading-5 text-white/75 select-text',
                            classNames?.payload,
                          )}
                        >
                          {payloadContent}
                        </pre>
                      ) : (
                        <div className={classNames?.payload}>{payloadContent}</div>
                      )}
                    </div>
                  ) : null}
                </React.Fragment>
              );
            })
          ) : (
            <div className="flex h-full min-h-[220px] items-center justify-center px-4 py-8 text-center text-sm text-white/55">{emptyContent}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Logger;
