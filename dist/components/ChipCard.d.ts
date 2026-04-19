import type { CSSProperties, ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
export interface ChipCardProps {
    title?: ReactNode;
    value?: ReactNode;
    helper?: ReactNode;
    leading?: ReactNode;
    trailing?: ReactNode;
    tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
    selected?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    accentKey?: AccentKey;
    style?: CSSProperties;
    className?: string;
    contentClassName?: string;
    titleClassName?: string;
    valueClassName?: string;
    helperClassName?: string;
}
export declare function ChipCard({ title, value, helper, leading, trailing, tone, selected, disabled, onClick, accentKey, style, className, contentClassName, titleClassName, valueClassName, helperClassName, }: ChipCardProps): import("react/jsx-runtime").JSX.Element;
export default ChipCard;
//# sourceMappingURL=ChipCard.d.ts.map