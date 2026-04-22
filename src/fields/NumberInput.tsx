import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useEffect, useId, useState } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';
import { useControllableState } from '../hooks/useControllableState';
import type { LabelPosition } from './Text';

export interface NumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange' | 'type' | 'prefix'> {
  value?: number | null;
  defaultValue?: number | null;
  onChange?: (value: number | null) => void;
  onValueChange?: (value: number | null, rawValue: string) => void;
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  helperText?: ReactNode;
  labelPosition?: LabelPosition;
  wrapperClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
  inputClassName?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  accentKey?: AccentKey;
}

function parseNumber(value: string) {
  if (value.trim() === '') return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatNumberInputValue(value: number | null | undefined) {
  return value == null ? '' : String(value);
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(function NumberInput(
  {
    value,
    defaultValue = null,
    onChange,
    onValueChange,
    label,
    description,
    error,
    helperText,
    labelPosition = 'top',
    wrapperClassName,
    labelClassName,
    descriptionClassName,
    errorClassName,
    helperClassName,
    inputClassName,
    prefix,
    suffix,
    accentKey,
    className,
    style,
    id,
    disabled,
    required,
    step,
    min,
    max,
    ...props
  },
  ref,
) {
  const [currentValue, setValue] = useControllableState({
    value,
    defaultValue,
    onChange,
  });
  const [displayValue, setDisplayValue] = useState(() => formatNumberInputValue(value ?? defaultValue));
  const generatedId = useId();
  const inputId = id ?? props.name ?? generatedId;
  const describedBy =
    [description ? `${inputId}-description` : null, error ? `${inputId}-error` : null, helperText ? `${inputId}-helper` : null].filter(Boolean).join(' ') || undefined;
  const accentStyle = useAccentStyle(accentKey, style);

  useEffect(() => {
    if (value !== undefined) setDisplayValue(formatNumberInputValue(value));
  }, [value]);

  useEffect(() => {
    if (value === undefined && displayValue === '' && currentValue != null) {
      setDisplayValue(formatNumberInputValue(currentValue));
    }
  }, [currentValue, displayValue, value]);

  return (
    <div className={cn(labelPosition === 'left' ? 'grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start' : 'space-y-2', wrapperClassName)}>
      {label || description ? (
        <div className={cn(labelPosition === 'left' ? 'pt-2' : '', 'min-w-0')}>
          {label ? (
            <label htmlFor={inputId} className={cn('block text-sm font-medium text-[var(--rui-text-primary)]', labelClassName)}>
              {label}
              {required ? <span className="ml-1 text-[var(--rui-accent)]">*</span> : null}
            </label>
          ) : null}
          {description ? (
            <div id={`${inputId}-description`} className={cn('mt-1 text-sm text-[var(--rui-text-secondary)]', descriptionClassName)}>
              {description}
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="min-w-0">
        <div className="flex min-w-0 items-stretch gap-2">
          {prefix ? <div className="inline-flex items-center text-[var(--rui-text-tertiary)]">{prefix}</div> : null}
          <input
            ref={ref}
            id={inputId}
            type="text"
            inputMode="decimal"
            value={displayValue}
            onChange={(event) => {
              const rawValue = event.target.value;
              const parsedValue = parseNumber(rawValue);
              setDisplayValue(rawValue);
              setValue(parsedValue);
              onValueChange?.(parsedValue, rawValue);
            }}
            disabled={disabled}
            required={required}
            min={min}
            max={max}
            step={step}
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={describedBy}
            style={accentStyle}
            className={cn(
              'rui-input h-10 min-w-0 w-full px-3 text-sm outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60',
              className,
              inputClassName,
            )}
            {...props}
          />
          {suffix ? <div className="inline-flex items-center text-[var(--rui-text-tertiary)]">{suffix}</div> : null}
        </div>
        {error ? (
          <div id={`${inputId}-error`} className={cn('mt-1 text-sm text-[var(--rui-danger)]', errorClassName)}>
            {error}
          </div>
        ) : helperText ? (
          <div id={`${inputId}-helper`} className={cn('mt-1 text-sm text-[var(--rui-text-tertiary)]', helperClassName)}>
            {helperText}
          </div>
        ) : null}
      </div>
    </div>
  );
});

export default NumberInput;
