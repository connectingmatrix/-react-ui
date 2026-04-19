import type { CSSProperties, ReactNode, ForwardedRef } from 'react';
import { forwardRef, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';
import { useControllableState } from '../hooks/useControllableState';

export type SelectBoxMode = 'single' | 'multiple';

export interface SelectBoxOption<TValue> {
  value: TValue;
  label?: ReactNode;
  text?: string;
  keywords?: string;
  description?: ReactNode;
  disabled?: boolean;
}

type SelectBoxValue<TValue, TMode extends SelectBoxMode> = TMode extends 'multiple' ? TValue[] : TValue | null;

export interface SelectBoxProps<TValue, TMode extends SelectBoxMode = 'single'> {
  mode?: TMode;
  options: Array<TValue | SelectBoxOption<TValue>>;
  value?: SelectBoxValue<TValue, TMode>;
  defaultValue?: SelectBoxValue<TValue, TMode>;
  onChange?: (value: SelectBoxValue<TValue, TMode>) => void;
  searchable?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyState?: ReactNode;
  disabled?: boolean;
  clearable?: boolean;
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  helperText?: ReactNode;
  labelPosition?: 'top' | 'left';
  className?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
  triggerClassName?: string;
  menuClassName?: string;
  optionClassName?: string;
  searchClassName?: string;
  summaryClassName?: string;
  accentKey?: AccentKey;
  style?: CSSProperties;
  endAdornment?: ReactNode;
  endAdornmentClassName?: string;
  summaryText?: ReactNode | ((params: { value: SelectBoxValue<TValue, TMode>; selectedOptions: SelectBoxOption<TValue>[]; placeholder: string }) => ReactNode);
  menuHeader?:
    | ReactNode
    | ((params: {
        options: SelectBoxOption<TValue>[];
        filteredOptions: SelectBoxOption<TValue>[];
        selectedOptions: SelectBoxOption<TValue>[];
        selectAll: () => void;
        clear: () => void;
      }) => ReactNode);
  showSelectAll?: boolean;
  showClear?: boolean;
  selectAllLabel?: ReactNode;
  clearLabel?: ReactNode;
  getOptionKey?: (value: TValue) => string;
  isOptionEqual?: (optionValue: TValue, selectedValue: TValue) => boolean;
  renderOption?: (option: SelectBoxOption<TValue>, selected: boolean) => ReactNode;
  renderValue?: (value: SelectBoxValue<TValue, TMode>, selectedOptions: SelectBoxOption<TValue>[]) => ReactNode;
}

function optionTextFromLabel(label: ReactNode, fallback: string) {
  if (typeof label === 'string' || typeof label === 'number') return String(label);
  return fallback;
}

function normalizeOption<TValue>(option: TValue | SelectBoxOption<TValue>): SelectBoxOption<TValue> {
  if (typeof option === 'object' && option !== null && 'value' in option) {
    const fallback = String(option.value);
    const label = option.label ?? option.text ?? fallback;
    return {
      value: option.value,
      label,
      text: option.text ?? optionTextFromLabel(option.label, fallback),
      keywords: option.keywords ?? '',
      description: option.description,
      disabled: option.disabled,
    };
  }

  return {
    value: option as TValue,
    label: String(option),
    text: String(option),
    keywords: String(option),
  };
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <circle cx="8.5" cy="8.5" r="4.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="m12.25 12.25 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="m4.75 10.25 3.25 3.25 7.5-7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="m5 5 10 10m0-10L5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function SelectBoxInner<TValue, TMode extends SelectBoxMode = 'single'>(
  {
    mode = 'single' as TMode,
    options,
    value,
    defaultValue,
    onChange,
    searchable = true,
    placeholder = 'Select an option',
    searchPlaceholder = 'Search options',
    emptyState = 'No matching options',
    disabled = false,
    clearable = true,
    label,
    description,
    error,
    helperText,
    labelPosition = 'top',
    className,
    wrapperClassName,
    labelClassName,
    descriptionClassName,
    errorClassName,
    helperClassName,
    triggerClassName,
    menuClassName,
    optionClassName,
    searchClassName,
    summaryClassName,
    accentKey,
    style,
    endAdornment,
    endAdornmentClassName,
    summaryText,
    menuHeader,
    showSelectAll = false,
    showClear = false,
    selectAllLabel = 'Select all',
    clearLabel = 'Clear',
    getOptionKey,
    isOptionEqual,
    renderOption,
    renderValue,
  }: SelectBoxProps<TValue, TMode>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const normalizedOptions = useMemo(() => options.map(normalizeOption), [options]);
  const [currentValue, setValue] = useControllableState<SelectBoxValue<TValue, TMode>>({
    value,
    defaultValue: (defaultValue ?? (mode === 'multiple' ? ([] as TValue[]) : null)) as SelectBoxValue<TValue, TMode>,
    onChange,
  });
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const id = useId();
  const accentStyle = useAccentStyle(accentKey, style);

  const valueKey = useCallback((nextValue: TValue) => (getOptionKey ? getOptionKey(nextValue) : String(nextValue)), [getOptionKey]);

  const selectedValueList = useMemo(() => {
    if (mode === 'multiple') return ((currentValue ?? []) as TValue[]).slice();
    return currentValue == null ? [] : [currentValue as TValue];
  }, [currentValue, mode]);

  const selectedValueKeys = useMemo(() => new Set(selectedValueList.map((item) => valueKey(item))), [selectedValueList, valueKey]);

  const isSelectedValue = useCallback(
    (optionValue: TValue) => {
      if (isOptionEqual) return selectedValueList.some((selectedValue) => isOptionEqual(optionValue, selectedValue));
      return selectedValueKeys.has(valueKey(optionValue));
    },
    [isOptionEqual, selectedValueKeys, selectedValueList, valueKey],
  );

  const selectedOptions = useMemo(() => normalizedOptions.filter((option) => isSelectedValue(option.value)), [isSelectedValue, normalizedOptions]);

  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return normalizedOptions;
    return normalizedOptions.filter((option) => {
      const haystack = `${option.text ?? ''} ${String(option.value)} ${option.keywords ?? ''}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [normalizedOptions, query]);

  const summary = useMemo(() => {
    if (summaryText) {
      return typeof summaryText === 'function' ? summaryText({ value: currentValue, selectedOptions, placeholder }) : summaryText;
    }
    if (renderValue) return renderValue(currentValue, selectedOptions);
    if (mode === 'multiple') {
      const values = currentValue as TValue[] | undefined;
      if (!values?.length) return placeholder;
      if (selectedOptions.length <= 2) return selectedOptions.map((option) => option.text ?? String(option.value)).join(', ');
      return `${values.length} selected`;
    }
    if (selectedOptions[0]) return selectedOptions[0].text ?? String(selectedOptions[0].value);
    if (currentValue == null || currentValue === '') return placeholder;
    return String(currentValue);
  }, [currentValue, mode, placeholder, renderValue, selectedOptions, summaryText]);

  useEffect(() => {
    if (!open) {
      setQuery('');
      return undefined;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    const timer = window.setTimeout(() => searchRef.current?.focus(), 0);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const setSingle = (nextValue: TValue | null) => {
    setValue(nextValue as SelectBoxValue<TValue, TMode>);
    setOpen(false);
  };

  const setMulti = (nextValue: TValue) => {
    const list = ((currentValue ?? []) as TValue[]).slice();
    const nextKey = valueKey(nextValue);
    const index = list.findIndex((item) => (isOptionEqual ? isOptionEqual(nextValue, item) : valueKey(item) === nextKey));
    if (index >= 0) list.splice(index, 1);
    else list.push(nextValue);
    setValue(list as SelectBoxValue<TValue, TMode>);
  };

  const clear = () => {
    setValue((mode === 'multiple' ? [] : null) as SelectBoxValue<TValue, TMode>);
    setOpen(false);
  };

  const selectAll = () => {
    if (mode !== 'multiple') return;
    setValue(normalizedOptions.filter((option) => !option.disabled).map((option) => option.value) as SelectBoxValue<TValue, TMode>);
  };

  const allSelectableSelected = useMemo(() => {
    const selectable = normalizedOptions.filter((option) => !option.disabled);
    return Boolean(selectable.length) && selectable.every((option) => isSelectedValue(option.value));
  }, [isSelectedValue, normalizedOptions]);

  const menuHeaderContent = typeof menuHeader === 'function' ? menuHeader({ options: normalizedOptions, filteredOptions, selectedOptions, selectAll, clear }) : menuHeader;

  const describedBy = [description ? `${id}-description` : null, error ? `${id}-error` : null, helperText ? `${id}-helper` : null].filter(Boolean).join(' ') || undefined;

  return (
    <div className={cn(labelPosition === 'left' ? 'grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start' : 'space-y-2', wrapperClassName)} style={accentStyle}>
      {label || description ? (
        <div className={cn(labelPosition === 'left' ? 'pt-2' : '', 'min-w-0')}>
          {label ? (
            <label htmlFor={id} className={cn('block text-sm font-medium text-white', labelClassName)}>
              {label}
            </label>
          ) : null}
          {description ? (
            <div id={`${id}-description`} className={cn('mt-1 text-sm text-[var(--rui-text-secondary)]', descriptionClassName)}>
              {description}
            </div>
          ) : null}
        </div>
      ) : null}

      <div ref={containerRef} className={cn('relative min-w-0', className)}>
        <button
          ref={ref}
          id={id}
          type="button"
          disabled={disabled}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={describedBy}
          aria-expanded={open}
          onClick={() => !disabled && setOpen((current) => !current)}
          className={cn(
            'flex h-10 w-full items-center justify-between gap-3 rounded-[4px] border px-4 text-left text-[15px] outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60',
            open
              ? 'border-[var(--rui-accent)] bg-[var(--rui-bg-input)] text-[#1c1f31]'
              : 'border-[rgba(18,22,50,0.28)] bg-[var(--rui-bg-input)] text-[#1c1f31] hover:border-[var(--rui-accent)]',
            triggerClassName,
          )}
        >
          <span
            className={cn(
              'min-w-0 flex-1 truncate',
              currentValue == null || (Array.isArray(currentValue) && !(currentValue as TValue[]).length) ? 'text-[#747a95]' : 'text-[#1c1f31]',
              summaryClassName,
            )}
          >
            {summary as ReactNode}
          </span>
            <span className="flex items-center gap-2 text-[var(--rui-text-tertiary)]">
            {endAdornment ? <span className={cn('inline-flex items-center', endAdornmentClassName)}>{endAdornment}</span> : null}
            {!endAdornment && mode === 'multiple' ? <span className={cn('text-xs uppercase tracking-wider', endAdornmentClassName)}>{selectedValueList.length}</span> : null}
            {clearable && ((mode === 'multiple' && (currentValue as TValue[] | undefined)?.length) || (mode === 'single' && currentValue != null)) ? (
              <span
                role="button"
                tabIndex={-1}
                aria-label="Clear selection"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  clear();
                }}
                className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-transparent transition hover:border-[var(--rui-border-soft)] hover:bg-white/[0.08]"
              >
                <XIcon className="h-3.5 w-3.5" />
              </span>
            ) : null}
            <ChevronDownIcon className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
          </span>
        </button>

        {open && !disabled ? (
          <div
            className={cn(
              'absolute left-0 right-0 top-full z-[130] mt-2 max-h-[320px] overflow-hidden rounded-[10px] border border-white/10 bg-[var(--rui-bg-panel)] shadow-panel',
              menuClassName,
            )}
          >
            {menuHeaderContent || (mode === 'multiple' && (showSelectAll || showClear)) ? (
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--rui-border-soft)] p-2.5">
                <div className="min-w-0 flex-1">{menuHeaderContent}</div>
                {mode === 'multiple' && (showSelectAll || showClear) ? (
                  <div className="flex flex-shrink-0 items-center gap-2">
                    {showSelectAll ? (
                      <button
                        type="button"
                        disabled={allSelectableSelected}
                        className="rounded-[6px] px-2 py-1 text-xs text-[var(--rui-accent)] transition hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-45"
                        onClick={selectAll}
                      >
                        {selectAllLabel}
                      </button>
                    ) : null}
                    {showClear ? (
                      <button
                        type="button"
                        disabled={!selectedValueList.length}
                        className="rounded-[6px] px-2 py-1 text-xs text-[var(--rui-text-secondary)] transition hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
                        onClick={clear}
                      >
                        {clearLabel}
                      </button>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}
            {searchable ? (
              <div className="border-b border-white/8 p-3">
                <div className="relative">
                  <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--rui-text-tertiary)]" />
                  <input
                    ref={searchRef}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={searchPlaceholder}
                    className={cn(
                      'h-10 w-full rounded-[6px] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] pl-9 pr-3 text-sm text-[var(--rui-text-primary)] outline-none placeholder:text-[var(--rui-text-tertiary)] focus:border-[var(--rui-accent)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0',
                      searchClassName,
                    )}
                  />
                </div>
              </div>
            ) : null}

            <div className="rui-scrollbar max-h-[260px] overflow-auto p-1">
              {filteredOptions.length ? (
                filteredOptions.map((option) => {
                  const selected = isSelectedValue(option.value);
                  const disabledOption = disabled || option.disabled;
                  return (
                    <button
                      key={valueKey(option.value)}
                      type="button"
                      disabled={disabledOption}
                      onClick={() => {
                        if (disabledOption) return;
                        if (mode === 'multiple') setMulti(option.value);
                        else setSingle(option.value);
                      }}
                      className={cn(
                        'flex w-full items-start justify-between gap-3 rounded-[8px] px-3 py-2.5 text-left text-sm transition',
                        selected
                          ? 'bg-[var(--rui-accent-soft)] text-[var(--rui-accent-soft-text)]'
                          : 'text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)]',
                        disabledOption && 'cursor-not-allowed opacity-50',
                        optionClassName,
                      )}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block truncate">{renderOption ? renderOption(option, selected) : (option.label ?? option.text ?? String(option.value))}</span>
                        {option.description ? <span className="mt-1 block text-xs text-[var(--rui-text-tertiary)]">{option.description}</span> : null}
                      </span>
                      <span
                        className={cn(
                          'mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border',
                          selected ? 'border-[var(--rui-accent)] bg-[var(--rui-accent)] text-[#07111d]' : 'border-[var(--rui-border-soft)] text-transparent',
                        )}
                      >
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="px-3 py-6 text-center text-sm text-[var(--rui-text-tertiary)]">{emptyState}</div>
              )}
            </div>
          </div>
        ) : null}

        {error ? (
          <div id={`${id}-error`} className={cn('mt-1 text-sm text-[var(--rui-danger)]', errorClassName)}>
            {error}
          </div>
        ) : helperText ? (
          <div id={`${id}-helper`} className={cn('mt-1 text-sm text-[var(--rui-text-tertiary)]', helperClassName)}>
            {helperText}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export const SelectBox = forwardRef(SelectBoxInner) as <TValue, TMode extends SelectBoxMode = 'single'>(
  props: SelectBoxProps<TValue, TMode> & { ref?: ForwardedRef<HTMLButtonElement> },
) => ReactNode;

export default SelectBox;
