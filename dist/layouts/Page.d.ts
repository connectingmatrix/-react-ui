import React from 'react';
import type { AccentKey } from '../context/AccentContext';
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
export declare function Page({ title, pageName, description, actions, actionButtons, sidebar, topbar, footer, children, accentKey, style, className, headerClassName, contentClassName, sidebarClassName, }: PageProps): import("react/jsx-runtime").JSX.Element;
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
export declare function PageHeader({ title, pageName, description, subtitle, actions, actionButtons, children, accentKey, style, className }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
export interface PageContainerProps {
    children?: React.ReactNode;
    accentKey?: AccentKey;
    style?: React.CSSProperties;
    className?: string;
}
export declare function PageContainer({ children, accentKey, style, className }: PageContainerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Page.d.ts.map