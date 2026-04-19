import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
export type CardPadding = boolean | 'none' | 'sm' | 'md' | 'lg';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    padded?: CardPadding;
    accentKey?: AccentKey;
    interactive?: boolean;
    children?: ReactNode;
    contentClassName?: string;
    style?: CSSProperties;
}
export declare const Card: import("react").ForwardRefExoticComponent<CardProps & import("react").RefAttributes<HTMLDivElement>>;
export default Card;
//# sourceMappingURL=Card.d.ts.map