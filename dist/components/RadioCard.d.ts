import type { CSSProperties, ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
export interface RadioCardProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    name?: string;
    value?: string;
    title?: ReactNode;
    description?: ReactNode;
    helper?: ReactNode;
    leading?: ReactNode;
    trailing?: ReactNode;
    disabled?: boolean;
    accentKey?: AccentKey;
    style?: CSSProperties;
    className?: string;
    contentClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    helperClassName?: string;
    indicatorClassName?: string;
}
export declare const RadioCard: import("react").ForwardRefExoticComponent<RadioCardProps & import("react").RefAttributes<HTMLLabelElement>>;
export default RadioCard;
//# sourceMappingURL=RadioCard.d.ts.map