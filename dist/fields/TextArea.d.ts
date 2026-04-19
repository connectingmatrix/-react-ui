import type { TextareaHTMLAttributes, ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
import type { LabelPosition } from './Text';
export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'defaultValue' | 'onChange'> {
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
    textareaClassName?: string;
    accentKey?: AccentKey;
}
export declare const TextArea: import("react").ForwardRefExoticComponent<TextAreaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
//# sourceMappingURL=TextArea.d.ts.map