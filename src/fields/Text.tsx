import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useId } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';
import { useControllableState } from '../hooks/useControllableState';

export type LabelPosition = 'top' | 'left';

export interface TextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange' | 'prefix'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
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

export const Text = forwardRef<HTMLInputElement, TextProps>(function Text(
  {
    value,
    defaultValue = '',
    onChange,
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
    ...props
  },
  ref,
) {
  const [currentValue, setValue] = useControllableState({
    value,
    defaultValue,
    onChange,
  });
  const generatedId = useId();
  const inputId = id ?? props.name ?? generatedId;
  const describedBy =
    [description ? `${inputId}-description` : null, error ? `${inputId}-error` : null, helperText ? `${inputId}-helper` : null].filter(Boolean).join(' ') || undefined;
  const accentStyle = useAccentStyle(accentKey, style);

  const input = (
    <input
      ref={ref}
      id={inputId}
      value={currentValue}
      onChange={(event) => setValue(event.target.value)}
      disabled={disabled}
      required={required}
      aria-invalid={Boolean(error) || undefined}
      aria-describedby={describedBy}
      style={accentStyle}
      className={cn(
        'rui-input h-10 min-w-0 w-full rounded-[4px] px-4 text-[15px] outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus:border-[var(--rui-accent)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60',
        className,
        inputClassName,
      )}
      {...props}
    />
  );

  const control =
    prefix || suffix ? (
      <div className={cn('flex min-w-0 items-stretch gap-2')}>
        {prefix ? <div className="inline-flex items-center text-[var(--rui-text-tertiary)]">{prefix}</div> : null}
        {input}
        {suffix ? <div className="inline-flex items-center text-[var(--rui-text-tertiary)]">{suffix}</div> : null}
      </div>
    ) : (
      input
    );

  if (!label && !description && !error && !helperText && !prefix && !suffix) {
    return input;
  }

  return (
    <div className={cn(labelPosition === 'left' ? 'grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start' : 'space-y-2', wrapperClassName)}>
      {label || description ? (
        <div className={cn(labelPosition === 'left' ? 'pt-2' : '', 'min-w-0')}>
          {label ? (
            <label htmlFor={inputId} className={cn('block text-sm font-medium text-white', labelClassName)}>
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
        {control}
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

export default Text;
