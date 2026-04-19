import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'children' | 'onClick'> {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    label?: ReactNode;
    description?: ReactNode;
    className?: string;
    trackClassName?: string;
    thumbClassName?: string;
    labelClassName?: string;
    descriptionClassName?: string;
    accentKey?: AccentKey;
}
export declare const Switch: import("react").ForwardRefExoticComponent<SwitchProps & import("react").RefAttributes<HTMLButtonElement>>;
export default Switch;
//# sourceMappingURL=Switch.d.ts.map