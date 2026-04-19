import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useId } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';
import { useControllableState } from '../hooks/useControllableState';

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'children' | 'onClick'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: ReactNode;
  description?: ReactNode;
  className?: string;
  trackClassName?: string;
  thumbClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  accentKey?: AccentKey;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  {
    checked,
    defaultChecked = false,
    onCheckedChange,
    label,
    description,
    disabled,
    className,
    trackClassName,
    thumbClassName,
    labelClassName,
    descriptionClassName,
    accentKey,
    style,
    ...props
  },
  ref,
) {
  const [isChecked, setChecked] = useControllableState({
    value: checked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });

  const labelId = useId();
  const accentStyle = useAccentStyle(accentKey, style);

  return (
    <div className={cn('inline-flex items-start gap-3', disabled && 'cursor-not-allowed opacity-60', className)}>
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-labelledby={label ? labelId : undefined}
        aria-label={typeof label === 'string' ? label : props['aria-label']}
        disabled={disabled}
        style={accentStyle}
        onClick={() => {
          if (!disabled) setChecked((current) => !current);
        }}
        className={cn(
          'relative mt-0.5 inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full border outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0',
          isChecked ? 'border-[var(--rui-accent-border)] bg-[var(--rui-accent)]' : 'border-[var(--rui-border-soft)] bg-white/10',
          trackClassName,
        )}
        {...props}
      >
        <span
          className={cn(
            'pointer-events-none inline-flex h-5 w-5 translate-x-0 items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgba(0,0,0,0.22)] transition-transform',
            isChecked && 'translate-x-5',
            thumbClassName,
          )}
        />
      </button>
      {(label || description) && (
        <span className="min-w-0">
          {label ? (
            <span id={labelId} className={cn('block text-sm font-medium text-white', labelClassName)}>
              {label}
            </span>
          ) : null}
          {description ? <span className={cn('mt-0.5 block text-sm text-[var(--rui-text-secondary)]', descriptionClassName)}>{description}</span> : null}
        </span>
      )}
    </div>
  );
});

export default Switch;
