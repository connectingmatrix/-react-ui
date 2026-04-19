import type { CSSProperties, ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';
import { Badge, type BadgeTone } from './Badge';

export interface BannerProps {
  tone?: Exclude<BadgeTone, 'info'> | 'info';
  title?: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  icon?: ReactNode;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  actionsClassName?: string;
  accentClassName?: string;
  accentKey?: AccentKey;
  accentColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  showToneBadge?: boolean;
}

const toneStyles: Record<NonNullable<BannerProps['tone']>, { bg: string; border: string; text: string }> = {
  info: { bg: 'rgba(52,212,232,0.10)', border: 'rgba(52,212,232,0.25)', text: 'white' },
  accent: { bg: 'rgba(52,212,232,0.10)', border: 'rgba(52,212,232,0.25)', text: 'white' },
  success: { bg: 'rgba(25,211,168,0.10)', border: 'rgba(25,211,168,0.22)', text: 'white' },
  warning: { bg: 'rgba(240,180,79,0.10)', border: 'rgba(240,180,79,0.22)', text: 'white' },
  danger: { bg: 'rgba(235,106,118,0.10)', border: 'rgba(235,106,118,0.22)', text: 'white' },
  neutral: { bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.10)', text: 'white' },
};

export function Banner({
  tone = 'info',
  title,
  children,
  actions,
  icon,
  className,
  contentClassName,
  titleClassName,
  actionsClassName,
  accentClassName,
  accentKey,
  accentColor,
  backgroundColor,
  borderColor,
  textColor,
  showToneBadge = false,
}: BannerProps) {
  const styles = toneStyles[tone];
  const customStyle = {
    borderColor: borderColor ?? styles.border,
    background: backgroundColor ?? styles.bg,
    color: textColor ?? styles.text,
    boxShadow: '0 16px 36px rgba(4, 8, 26, 0.22)',
    '--rui-banner-accent': accentColor ?? borderColor ?? styles.border,
  } as CSSProperties & Record<'--rui-banner-accent', string>;
  const accentStyle = useAccentStyle(accentKey, customStyle);

  return (
    <section className={cn('relative overflow-hidden rounded-[var(--rui-radius-panel)] border px-4 py-3', accentColor && 'pl-5', className)} style={accentStyle}>
      {accentColor ? <div aria-hidden="true" className={cn('absolute inset-y-0 left-0 w-1 bg-[var(--rui-banner-accent)]', accentClassName)} /> : null}
      <div className={cn('flex items-start gap-3', contentClassName)}>
        {icon ? (
          <div className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-inherit">{icon}</div>
        ) : null}
        <div className="min-w-0 flex-1">
          {title ? (
            <div className={cn('mb-1 flex items-center gap-2 text-sm font-semibold', titleClassName)}>
              {title}
              {showToneBadge ? <Badge tone={tone === 'neutral' ? 'neutral' : tone === 'accent' ? 'accent' : tone}>{tone}</Badge> : null}
            </div>
          ) : null}
          <div className="text-sm leading-6 opacity-90">{children}</div>
        </div>
        {actions ? <div className={cn('flex flex-shrink-0 items-center gap-2', actionsClassName)}>{actions}</div> : null}
      </div>
    </section>
  );
}

export default Banner;
