import type { CSSProperties, ReactNode } from 'react';
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
export declare function Sidebar({ items, header, footer, activeId, onSelect, children, accentKey, style, className, itemClassName, activeItemClassName, headerClassName, footerClassName, }: SidebarProps): import("react/jsx-runtime").JSX.Element;
export default Sidebar;
//# sourceMappingURL=Sidebar.d.ts.map