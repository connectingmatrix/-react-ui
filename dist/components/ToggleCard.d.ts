import type { CSSProperties } from 'react';
import React from 'react';
import type { AccentKey } from '../context/AccentContext';
export interface ToggleCardProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    title?: React.ReactNode;
    description?: React.ReactNode;
    helper?: React.ReactNode;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    disabled?: boolean;
    accentKey?: AccentKey;
    style?: CSSProperties;
    className?: string;
    contentClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    helperClassName?: string;
}
export declare function ToggleCard({ checked, defaultChecked, onCheckedChange, title, description, helper, leading, trailing, disabled, accentKey, style, className, contentClassName, titleClassName, descriptionClassName, helperClassName, }: ToggleCardProps): import("react/jsx-runtime").JSX.Element;
export default ToggleCard;
//# sourceMappingURL=ToggleCard.d.ts.map