import type { CSSProperties, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';
import { useControllableState } from '../hooks/useControllableState';

export interface RadioCardProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  name?: string;
  value?: string;
  title?: ReactNode;
  description?: ReactNode;
  helper?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
  disabled?: boolean;
  accentKey?: AccentKey;
  style?: CSSProperties;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  helperClassName?: string;
  indicatorClassName?: string;
}

export const RadioCard = forwardRef<HTMLLabelElement, RadioCardProps>(function RadioCard(
  {
    checked,
    defaultChecked = false,
    onCheckedChange,
    name,
    value,
    title,
    description,
    helper,
    leading,
    trailing,
    disabled,
    accentKey,
    style,
    className,
    contentClassName,
    titleClassName,
    descriptionClassName,
    helperClassName,
    indicatorClassName,
  },
  ref,
) {
  const [isChecked, setChecked] = useControllableState({
    value: checked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });
  const accentStyle = useAccentStyle(accentKey, style);

  return (
    <label
      ref={ref}
      style={accentStyle}
      className={cn(
        'group flex cursor-pointer items-start gap-3 rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[linear-gradient(180deg,var(--rui-bg-surface-2),var(--rui-bg-card))] p-4 transition hover:border-[var(--rui-accent-border-soft)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.30)]',
        isChecked && 'border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]',
        disabled && 'cursor-not-allowed opacity-60 hover:border-[var(--rui-border-soft)] hover:shadow-none',
        className,
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={(event) => {
          if (!disabled) setChecked(event.target.checked);
        }}
        disabled={disabled}
        className="sr-only"
      />
      <span
        className={cn(
          'mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition',
          isChecked ? 'border-[var(--rui-accent)] bg-[var(--rui-accent)]' : 'border-[var(--rui-border-strong)] bg-transparent',
          indicatorClassName,
        )}
        aria-hidden="true"
      >
        <span className={cn('h-2.5 w-2.5 rounded-full bg-[#08111d] transition', !isChecked && 'scale-0')} />
      </span>
      <div className={cn('min-w-0 flex-1', contentClassName)}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            {title ? <div className={cn('text-sm font-semibold text-white', titleClassName)}>{title}</div> : null}
            {description ? <div className={cn('mt-1 text-sm text-[var(--rui-text-secondary)]', descriptionClassName)}>{description}</div> : null}
          </div>
          {trailing ? <div className="flex-shrink-0">{trailing}</div> : null}
        </div>
        {helper || leading ? (
          <div className="mt-3 flex items-end justify-between gap-3">
            {helper ? <div className={cn('text-sm text-[var(--rui-text-tertiary)]', helperClassName)}>{helper}</div> : <span />}
            {leading ? <div className="flex-shrink-0 text-[var(--rui-text-secondary)]">{leading}</div> : null}
          </div>
        ) : null}
      </div>
    </label>
  );
});

export default RadioCard;
