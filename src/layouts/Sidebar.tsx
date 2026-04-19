import type { CSSProperties, ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';

export interface SidebarItem {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  active?: boolean;
  disabled?: boolean;
  badge?: ReactNode;
  onSelect?: (id: string) => void;
}

export interface SidebarProps {
  items?: SidebarItem[];
  header?: ReactNode;
  footer?: ReactNode;
  activeId?: string;
  onSelect?: (id: string, item: SidebarItem) => void;
  children?: ReactNode;
  accentKey?: AccentKey;
  style?: CSSProperties;
  className?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
}

export function Sidebar({
  items,
  header,
  footer,
  activeId,
  onSelect,
  children,
  accentKey,
  style,
  className,
  itemClassName,
  activeItemClassName,
  headerClassName,
  footerClassName,
}: SidebarProps) {
  const accentStyle = useAccentStyle(accentKey, style);

  return (
    <aside
      className={cn(
        'rui-theme flex min-w-[220px] flex-col gap-3 rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-surface)] p-3',
        className,
      )}
      style={accentStyle}
    >
      {header ? <div className={cn('px-2 py-1', headerClassName)}>{header}</div> : null}
      {items?.length ? (
        <nav className="flex flex-col gap-1" aria-label="Sidebar">
          {items.map((item) => {
            const selected = item.active ?? item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                disabled={item.disabled}
                aria-current={selected ? 'page' : undefined}
                onClick={() => {
                  item.onSelect?.(item.id);
                  onSelect?.(item.id, item);
                }}
                className={cn(
                  'flex w-full items-start gap-3 rounded-[8px] px-3 py-2 text-left text-sm text-[var(--rui-text-secondary)] transition hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-50',
                  selected && 'border border-[var(--rui-accent-border)] bg-[var(--rui-accent-muted)] text-white',
                  itemClassName,
                  selected && activeItemClassName,
                )}
              >
                {item.icon ? <span className="mt-0.5 flex-shrink-0 text-[var(--rui-accent)]">{item.icon}</span> : null}
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">{item.label}</span>
                  {item.description ? <span className="mt-0.5 block text-xs text-[var(--rui-text-tertiary)]">{item.description}</span> : null}
                </span>
                {item.badge ? <span className="flex-shrink-0">{item.badge}</span> : null}
              </button>
            );
          })}
        </nav>
      ) : null}
      {children}
      {footer ? <div className={cn('mt-auto px-2 py-1', footerClassName)}>{footer}</div> : null}
    </aside>
  );
}

export default Sidebar;
