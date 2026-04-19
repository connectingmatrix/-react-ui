import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { useState } from 'react';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
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

export interface SidebarGroup {
  id?: string;
  label?: ReactNode;
  items: SidebarItem[];
}

export interface SidebarProps {
  items?: SidebarItem[];
  groups?: SidebarGroup[];
  header?: ReactNode;
  collapsedHeader?: ReactNode;
  footer?: ReactNode;
  activeId?: string;
  onSelect?: (id: string, item: SidebarItem) => void;
  children?: ReactNode;
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  collapseTitle?: string;
  expandTitle?: string;
  collapsedWidthClassName?: string;
  expandedWidthClassName?: string;
  collapseButtonClassName?: string;
  renderCollapseButton?: (props: { collapsed: boolean; toggleCollapsed: () => void; buttonProps: ButtonHTMLAttributes<HTMLButtonElement> }) => ReactNode;
  accentKey?: AccentKey;
  style?: CSSProperties;
  className?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  groupClassName?: string;
  groupLabelClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
}

export function Sidebar({
  items,
  groups,
  header,
  collapsedHeader,
  footer,
  activeId,
  onSelect,
  children,
  collapsible = false,
  collapsed,
  defaultCollapsed = false,
  onCollapsedChange,
  collapseTitle = 'Collapse sidebar',
  expandTitle = 'Expand sidebar',
  collapsedWidthClassName = 'w-[92px] min-w-[92px]',
  expandedWidthClassName = 'w-[360px] min-w-[220px]',
  collapseButtonClassName,
  renderCollapseButton,
  accentKey,
  style,
  className,
  itemClassName,
  activeItemClassName,
  groupClassName,
  groupLabelClassName,
  headerClassName,
  footerClassName,
}: SidebarProps) {
  const accentStyle = useAccentStyle(accentKey, style);
  const [uncontrolledCollapsed, setUncontrolledCollapsed] = useState(defaultCollapsed);
  const isControlled = collapsed !== undefined;
  const isCollapsed = Boolean(isControlled ? collapsed : uncontrolledCollapsed);
  const navGroups = groups?.length ? groups : items?.length ? [{ id: 'items', items }] : [];

  const setCollapsed = (next: boolean) => {
    if (!isControlled) setUncontrolledCollapsed(next);
    onCollapsedChange?.(next);
  };

  const toggleCollapsed = () => setCollapsed(!isCollapsed);
  const collapseButtonTitle = isCollapsed ? expandTitle : collapseTitle;
  const collapseButtonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    'aria-expanded': !isCollapsed,
    'aria-label': collapseButtonTitle,
    title: collapseButtonTitle,
    onClick: toggleCollapsed,
  };

  const collapseButton = collapsible
    ? (renderCollapseButton?.({
        collapsed: isCollapsed,
        toggleCollapsed,
        buttonProps: collapseButtonProps,
      }) ?? (
        <Button variant="icon" size="sm" className={cn('h-8 w-8 px-0', collapseButtonClassName)} {...collapseButtonProps}>
          <Icon name={isCollapsed ? 'sidebar-open' : 'sidebar-collapsed'} className="h-4 w-4" />
        </Button>
      ))
    : null;

  return (
    <aside
      className={cn(
        'rui-theme flex shrink-0 flex-col gap-4 overflow-hidden rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] p-4 shadow-[var(--rui-shadow-panel)] transition-all duration-200',
        isCollapsed ? collapsedWidthClassName : expandedWidthClassName,
        className,
      )}
      style={accentStyle}
    >
      {header || collapsedHeader || collapseButton ? (
        <div className={cn('flex items-center justify-between gap-3', headerClassName)}>
          {!isCollapsed ? header ? <div className="min-w-0 flex-1">{header}</div> : <div /> : collapsedHeader ? <div className="min-w-0 flex-1">{collapsedHeader}</div> : <div />}
          {collapseButton}
        </div>
      ) : null}
      {navGroups.length ? (
        <nav className="flex flex-col gap-7" aria-label="Sidebar">
          {navGroups.map((group, groupIndex) => (
            <div key={group.id ?? groupIndex} className={cn('space-y-4', groupClassName)}>
              {!isCollapsed && group.label ? <div className={cn('px-3 text-[15px] font-semibold text-[var(--rui-text-primary)]', groupLabelClassName)}>{group.label}</div> : null}
              <div className="space-y-2">
                {group.items.map((item) => {
                  const selected = item.active ?? item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      disabled={item.disabled}
                      title={isCollapsed && typeof item.label === 'string' ? item.label : undefined}
                      aria-current={selected ? 'page' : undefined}
                      onClick={() => {
                        item.onSelect?.(item.id);
                        onSelect?.(item.id, item);
                      }}
                      className={cn(
                        'flex w-full items-center rounded-full text-sm transition disabled:cursor-not-allowed disabled:opacity-50',
                        isCollapsed ? 'justify-center px-3 py-3' : 'justify-between px-5 py-4 text-[15px]',
                        selected
                          ? 'bg-[var(--rui-accent)] text-[var(--rui-accent-contrast)]'
                          : 'bg-[var(--rui-bg-panel-2)] text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)]',
                        itemClassName,
                        selected && activeItemClassName,
                      )}
                    >
                      <span className={cn('flex min-w-0 items-center gap-3', isCollapsed && 'justify-center')}>
                        {item.icon ? <span className={cn('flex shrink-0', selected ? 'text-current' : 'text-[var(--rui-accent)]')}>{item.icon}</span> : null}
                        {!isCollapsed ? (
                          <span className="min-w-0 flex-1 text-left">
                            <span className="block truncate font-medium">{item.label}</span>
                            {item.description ? <span className="mt-0.5 block truncate text-xs text-[var(--rui-text-tertiary)]">{item.description}</span> : null}
                          </span>
                        ) : null}
                      </span>
                      {!isCollapsed && item.badge ? <span className="ml-3 shrink-0">{item.badge}</span> : null}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      ) : null}
      {children}
      {footer ? <div className={cn('mt-auto px-2 py-1', footerClassName)}>{footer}</div> : null}
    </aside>
  );
}

export default Sidebar;
