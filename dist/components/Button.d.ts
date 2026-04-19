import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'subtle' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    loading?: boolean;
    fullWidth?: boolean;
    accentKey?: AccentKey;
    leftIconClassName?: string;
    rightIconClassName?: string;
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
//# sourceMappingURL=Button.d.ts.map