import type { TextareaHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useId } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';
import { useControllableState } from '../hooks/useControllableState';
import type { LabelPosition } from './Text';

export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'defaultValue' | 'onChange'> {
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
  textareaClassName?: string;
  accentKey?: AccentKey;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
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
    textareaClassName,
    accentKey,
    className,
    style,
    id,
    disabled,
    required,
    rows = 5,
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
        <textarea
          ref={ref}
          id={inputId}
          value={currentValue}
          onChange={(event) => setValue(event.target.value)}
          disabled={disabled}
          required={required}
          rows={rows}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={describedBy}
          style={accentStyle}
          className={cn(
            'rui-input min-h-[96px] w-full px-3 py-2.5 text-sm outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60',
            className,
            textareaClassName,
          )}
          {...props}
        />
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

export default TextArea;
