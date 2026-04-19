import type { ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
    placement?: TooltipPlacement;
    delay?: number;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    accentKey?: AccentKey;
    className?: string;
    panelClassName?: string;
}
export declare function Tooltip({ content, children, placement: preferredPlacement, delay, open, defaultOpen, onOpenChange, accentKey, className, panelClassName, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
export default Tooltip;
//# sourceMappingURL=Tooltip.d.ts.map