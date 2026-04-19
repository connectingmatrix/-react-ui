import type { InputHTMLAttributes, ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
export type LabelPosition = 'top' | 'left';
export interface TextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange' | 'prefix'> {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
    helperText?: ReactNode;
    labelPosition?: LabelPosition;
    wrapperClassName?: string;
    labelClassName?: string;
    descriptionClassName?: string;
    errorClassName?: string;
    helperClassName?: string;
    inputClassName?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
    accentKey?: AccentKey;
}
export declare const Text: import("react").ForwardRefExoticComponent<TextProps & import("react").RefAttributes<HTMLInputElement>>;
export default Text;
//# sourceMappingURL=Text.d.ts.map