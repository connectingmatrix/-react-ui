import type { InputHTMLAttributes, ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
import type { LabelPosition } from './Text';
export interface NumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange' | 'type' | 'prefix'> {
    value?: number | null;
    defaultValue?: number | null;
    onChange?: (value: number | null) => void;
    onValueChange?: (value: number | null, rawValue: string) => void;
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
export declare const NumberInput: import("react").ForwardRefExoticComponent<NumberInputProps & import("react").RefAttributes<HTMLInputElement>>;
export default NumberInput;
//# sourceMappingURL=NumberInput.d.ts.map