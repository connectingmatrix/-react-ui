import type { CSSProperties, ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';

export interface ChipCardProps {
  title?: ReactNode;
  value?: ReactNode;
  helper?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  accentKey?: AccentKey;
  style?: CSSProperties;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  valueClassName?: string;
  helperClassName?: string;
}

const toneClasses: Record<NonNullable<ChipCardProps['tone']>, string> = {
  neutral: 'border-[var(--rui-border-soft)] bg-[linear-gradient(180deg,var(--rui-bg-surface-2),var(--rui-bg-card))]',
  accent: 'border-[var(--rui-accent-border-soft)] bg-[linear-gradient(180deg,var(--rui-accent-muted),var(--rui-bg-card))]',
  success: 'border-[var(--rui-success-border)] bg-[linear-gradient(180deg,var(--rui-success-soft),var(--rui-bg-card))]',
  warning: 'border-[var(--rui-warning-border)] bg-[linear-gradient(180deg,var(--rui-warning-soft),var(--rui-bg-card))]',
  danger: 'border-[var(--rui-danger-border)] bg-[linear-gradient(180deg,var(--rui-danger-soft),var(--rui-bg-card))]',
};

export function ChipCard({
  title,
  value,
  helper,
  leading,
  trailing,
  tone = 'neutral',
  selected = false,
  disabled = false,
  onClick,
  accentKey,
  style,
  className,
  contentClassName,
  titleClassName,
  valueClassName,
  helperClassName,
}: ChipCardProps) {
  const interactive = Boolean(onClick);
  const accentStyle = useAccentStyle(accentKey, style);
  if (interactive) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-pressed={selected}
        style={accentStyle}
        className={cn(
          'rounded-[var(--rui-radius-panel)] border p-4 text-left outline-none transition',
          toneClasses[tone],
          selected && 'border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]',
          !disabled &&
            'cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.36)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0',
          disabled && 'cursor-not-allowed opacity-60',
          className,
        )}
      >
        <div className={cn('flex h-full min-h-[104px] flex-col justify-between gap-3', contentClassName)}>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              {title ? <div className={cn('text-xs uppercase tracking-[0.18em] text-[var(--rui-text-tertiary)]', titleClassName)}>{title}</div> : null}
              {value ? <div className={cn('mt-2 text-2xl font-semibold text-white', valueClassName)}>{value}</div> : null}
            </div>
            {trailing ? <div className="flex-shrink-0">{trailing}</div> : null}
          </div>
          <div className="flex items-end justify-between gap-3">
            {helper ? <div className={cn('text-sm text-[var(--rui-text-secondary)]', helperClassName)}>{helper}</div> : <span />}
            {leading ? <div className="flex-shrink-0 text-[var(--rui-text-secondary)]">{leading}</div> : null}
          </div>
        </div>
      </button>
    );
  }

  return (
    <div
      style={accentStyle}
      className={cn(
        'rounded-[var(--rui-radius-panel)] border p-4 text-left outline-none transition',
        toneClasses[tone],
        selected && 'border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]',
        className,
      )}
    >
      <div className={cn('flex h-full min-h-[104px] flex-col justify-between gap-3', contentClassName)}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            {title ? <div className={cn('text-xs uppercase tracking-[0.18em] text-[var(--rui-text-tertiary)]', titleClassName)}>{title}</div> : null}
            {value ? <div className={cn('mt-2 text-2xl font-semibold text-white', valueClassName)}>{value}</div> : null}
          </div>
          {trailing ? <div className="flex-shrink-0">{trailing}</div> : null}
        </div>
        <div className="flex items-end justify-between gap-3">
          {helper ? <div className={cn('text-sm text-[var(--rui-text-secondary)]', helperClassName)}>{helper}</div> : <span />}
          {leading ? <div className="flex-shrink-0 text-[var(--rui-text-secondary)]">{leading}</div> : null}
        </div>
      </div>
    </div>
  );
}

export default ChipCard;
