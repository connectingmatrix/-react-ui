import type { ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { type BadgeTone } from '../components/Badge';
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
export declare function NotificationViewport({ items, onDismiss, placement, accentKey, style, className, itemClassName, titleClassName, messageClassName, actionsClassName, }: NotificationViewportProps): import("react").ReactPortal | null;
export default NotificationViewport;
export declare const Notification: typeof NotificationViewport;
export type NotificationProps = NotificationViewportProps;
//# sourceMappingURL=NotificationViewport.d.ts.map