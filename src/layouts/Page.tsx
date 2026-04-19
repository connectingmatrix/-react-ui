import React from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';

export interface PageProps {
  title?: React.ReactNode;
  pageName?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  actionButtons?: React.ReactNode;
  sidebar?: React.ReactNode;
  topbar?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  accentKey?: AccentKey;
  style?: React.CSSProperties;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  sidebarClassName?: string;
}

export function Page({
  title,
  pageName,
  description,
  actions,
  actionButtons,
  sidebar,
  topbar,
  footer,
  children,
  accentKey,
  style,
  className,
  headerClassName,
  contentClassName,
  sidebarClassName,
}: PageProps) {
  const resolvedTitle = title ?? pageName;
  const resolvedActions = actions ?? actionButtons;
  const accentStyle = useAccentStyle(accentKey, style);

  return (
    <div className={cn('rui-theme min-h-screen bg-[var(--rui-bg-app)] text-[var(--rui-text-main)]', className)} style={accentStyle}>
      {topbar}
      <div className={cn('grid gap-5 px-4 py-5', Boolean(sidebar) && 'xl:grid-cols-[minmax(84px,auto)_minmax(0,1fr)]')}>
        {sidebar ? <aside className={cn('min-w-0', sidebarClassName)}>{sidebar}</aside> : null}
        <main className="min-w-0">
          {resolvedTitle || description || resolvedActions ? (
            <PageHeader title={resolvedTitle} description={description} actions={resolvedActions} className={headerClassName} />
          ) : null}
          <div className={cn('mt-5 min-w-0', contentClassName)}>{children}</div>
          {footer ? <footer className="mt-5">{footer}</footer> : null}
        </main>
      </div>
    </div>
  );
}

export interface PageHeaderProps {
  title?: React.ReactNode;
  pageName?: React.ReactNode;
  description?: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  actionButtons?: React.ReactNode;
  children?: React.ReactNode;
  accentKey?: AccentKey;
  style?: React.CSSProperties;
  className?: string;
}

export function PageHeader({ title, pageName, description, subtitle, actions, actionButtons, children, accentKey, style, className }: PageHeaderProps) {
  const resolvedTitle = title ?? pageName;
  const resolvedDescription = description ?? subtitle;
  const resolvedActions = actions ?? actionButtons;
  const accentStyle = useAccentStyle(accentKey, style);

  return (
    <div className={cn('flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between', className)} style={accentStyle}>
      <div className="min-w-0">
        {resolvedTitle ? <h1 className="text-[28px] font-semibold text-white">{resolvedTitle}</h1> : null}
        {resolvedDescription ? <p className="mt-2 max-w-3xl text-sm text-white/70">{resolvedDescription}</p> : null}
        {children}
      </div>
      {resolvedActions ? <div className="flex flex-wrap items-center gap-3">{resolvedActions}</div> : null}
    </div>
  );
}

export interface PageContainerProps {
  children?: React.ReactNode;
  accentKey?: AccentKey;
  style?: React.CSSProperties;
  className?: string;
}

export function PageContainer({ children, accentKey, style, className }: PageContainerProps) {
  const accentStyle = useAccentStyle(accentKey, style);
  return (
    <div className={cn('rui-theme w-full space-y-5 px-2 py-4 sm:px-4 sm:py-5', className)} style={accentStyle}>
      {children}
    </div>
  );
}
