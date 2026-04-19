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

  const control = (
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
        'relative inline-flex h-8 w-[54px] flex-shrink-0 items-center rounded-full border outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0',
        isChecked ? 'border-[var(--rui-success-border)] bg-[var(--rui-success)]' : 'border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)]',
        disabled && 'opacity-60',
        !label && !description && className,
        trackClassName,
      )}
      {...props}
    >
      <span
        className={cn(
          'pointer-events-none absolute h-7 w-7 rounded-full bg-[#f1f1ee] shadow-[0_3px_10px_rgba(0,0,0,0.22)] transition-[left]',
          isChecked ? 'left-[24px]' : 'left-[1px]',
          thumbClassName,
        )}
      />
    </button>
  );

  if (!label && !description) return control;

  return (
    <div className={cn('inline-flex items-start gap-3', disabled && 'cursor-not-allowed opacity-60', className)}>
      {control}
      {(label || description) && (
        <span className="min-w-0">
          {label ? (
            <span id={labelId} className={cn('block text-sm font-medium text-[var(--rui-text-primary)]', labelClassName)}>
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
