import type { ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { type BadgeTone } from './Badge';
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
export declare function Banner({ tone, title, children, actions, icon, className, contentClassName, titleClassName, actionsClassName, accentClassName, accentKey, accentColor, backgroundColor, borderColor, textColor, showToneBadge, }: BannerProps): import("react/jsx-runtime").JSX.Element;
export default Banner;
//# sourceMappingURL=Banner.d.ts.map