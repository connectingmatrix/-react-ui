import type { HTMLAttributes } from 'react';
import type { AccentKey } from '../context/AccentContext';
export type BadgeTone = 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'info';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: BadgeTone;
    accentKey?: AccentKey;
}
export declare function Badge({ children, tone, className, accentKey, style, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export default Badge;
//# sourceMappingURL=Badge.d.ts.map