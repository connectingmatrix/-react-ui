import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
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
    renderCollapseButton?: (props: {
        collapsed: boolean;
        toggleCollapsed: () => void;
        buttonProps: ButtonHTMLAttributes<HTMLButtonElement>;
    }) => ReactNode;
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
export declare function Sidebar({ items, groups, header, collapsedHeader, footer, activeId, onSelect, children, collapsible, collapsed, defaultCollapsed, onCollapsedChange, collapseTitle, expandTitle, collapsedWidthClassName, expandedWidthClassName, collapseButtonClassName, renderCollapseButton, accentKey, style, className, itemClassName, activeItemClassName, groupClassName, groupLabelClassName, headerClassName, footerClassName, }: SidebarProps): import("react/jsx-runtime").JSX.Element;
export default Sidebar;
//# sourceMappingURL=Sidebar.d.ts.map