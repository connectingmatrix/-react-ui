import type { HTMLAttributes } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';

export type BadgeTone = 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'info';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  accentKey?: AccentKey;
}

const toneClasses: Record<BadgeTone, string> = {
  neutral: 'border-[var(--rui-border-soft)] bg-white/[0.06] text-[var(--rui-text-secondary)]',
  accent: 'border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-[var(--rui-accent)]',
  success: 'border-[var(--rui-success-border)] bg-[var(--rui-success-soft)] text-[var(--rui-success)]',
  warning: 'border-[var(--rui-warning-border)] bg-[var(--rui-warning-soft)] text-[var(--rui-warning)]',
  danger: 'border-[var(--rui-danger-border)] bg-[var(--rui-danger-soft)] text-[var(--rui-danger)]',
  info: 'border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-white',
};

export function Badge({ children, tone = 'accent', className, accentKey, style, ...props }: BadgeProps) {
  const accentStyle = useAccentStyle(accentKey, style);

  return (
    <span
      style={accentStyle}
      className={cn('inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium leading-5', toneClasses[tone], className)}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
