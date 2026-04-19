import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';
import { Badge, type BadgeTone } from '../components/Badge';
import { Button } from '../components/Button';

export interface NotificationItem {
  id: string;
  title: ReactNode;
  message?: ReactNode;
  tone?: BadgeTone;
  timeout?: number | null;
  actions?: ReactNode;
}

export interface NotificationViewportProps {
  items: NotificationItem[];
  onDismiss?: (id: string) => void;
  placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  accentKey?: AccentKey;
  style?: React.CSSProperties;
  className?: string;
  itemClassName?: string;
  titleClassName?: string;
  messageClassName?: string;
  actionsClassName?: string;
}

const placementClasses: Record<NonNullable<NotificationViewportProps['placement']>, string> = {
  'top-right': 'right-4 top-4',
  'top-left': 'left-4 top-4',
  'bottom-right': 'right-4 bottom-4',
  'bottom-left': 'left-4 bottom-4',
};

export function NotificationViewport({
  items,
  onDismiss,
  placement = 'top-right',
  accentKey,
  style,
  className,
  itemClassName,
  titleClassName,
  messageClassName,
  actionsClassName,
}: NotificationViewportProps) {
  const accentStyle = useAccentStyle(accentKey, style);

  useEffect(() => {
    if (typeof window === 'undefined' || !onDismiss) return undefined;

    const timers = items.filter((item) => item.timeout !== null).map((item) => window.setTimeout(() => onDismiss(item.id), item.timeout ?? 4200));

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [items, onDismiss]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className={cn('pointer-events-none fixed z-[220] flex w-[min(92vw,380px)] flex-col gap-3', placementClasses[placement], className)} style={accentStyle}>
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            'pointer-events-auto rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-surface)] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.36)]',
            itemClassName,
          )}
        >
          <div className="mb-2 flex items-center justify-between gap-3">
            <Badge tone={item.tone ?? 'neutral'}>{item.tone ?? 'neutral'}</Badge>
            {onDismiss ? (
              <Button variant="icon" size="sm" className="h-8 w-8 px-0" aria-label="Dismiss notification" onClick={() => onDismiss(item.id)}>
                <span aria-hidden="true">×</span>
              </Button>
            ) : null}
          </div>
          <div className={cn('text-sm font-semibold text-white', titleClassName)}>{item.title}</div>
          {item.message ? <div className={cn('mt-1 text-sm text-[var(--rui-text-secondary)]', messageClassName)}>{item.message}</div> : null}
          {item.actions ? <div className={cn('mt-3 flex flex-wrap gap-2', actionsClassName)}>{item.actions}</div> : null}
        </div>
      ))}
    </div>,
    document.body,
  );
}

export default NotificationViewport;

export const Notification = NotificationViewport;
export type NotificationProps = NotificationViewportProps;
