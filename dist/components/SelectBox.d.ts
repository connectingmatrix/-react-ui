import type { CSSProperties, ReactNode, ForwardedRef } from 'react';
import type { AccentKey } from '../context/AccentContext';
export type SelectBoxMode = 'single' | 'multiple';
export interface SelectBoxOption<TValue> {
    value: TValue;
    label?: ReactNode;
    text?: string;
    keywords?: string;
    description?: ReactNode;
    disabled?: boolean;
}
type SelectBoxValue<TValue, TMode extends SelectBoxMode> = TMode extends 'multiple' ? TValue[] : TValue | null;
export interface SelectBoxProps<TValue, TMode extends SelectBoxMode = 'single'> {
    mode?: TMode;
    options: Array<TValue | SelectBoxOption<TValue>>;
    value?: SelectBoxValue<TValue, TMode>;
    defaultValue?: SelectBoxValue<TValue, TMode>;
    onChange?: (value: SelectBoxValue<TValue, TMode>) => void;
    searchable?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyState?: ReactNode;
    disabled?: boolean;
    clearable?: boolean;
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
    helperText?: ReactNode;
    labelPosition?: 'top' | 'left';
    className?: string;
    wrapperClassName?: string;
    labelClassName?: string;
    descriptionClassName?: string;
    errorClassName?: string;
    helperClassName?: string;
    triggerClassName?: string;
    menuClassName?: string;
    optionClassName?: string;
    searchClassName?: string;
    summaryClassName?: string;
    accentKey?: AccentKey;
    style?: CSSProperties;
    endAdornment?: ReactNode;
    endAdornmentClassName?: string;
    summaryText?: ReactNode | ((params: {
        value: SelectBoxValue<TValue, TMode>;
        selectedOptions: SelectBoxOption<TValue>[];
        placeholder: string;
    }) => ReactNode);
    menuHeader?: ReactNode | ((params: {
        options: SelectBoxOption<TValue>[];
        filteredOptions: SelectBoxOption<TValue>[];
        selectedOptions: SelectBoxOption<TValue>[];
        selectAll: () => void;
        clear: () => void;
    }) => ReactNode);
    showSelectAll?: boolean;
    showClear?: boolean;
    selectAllLabel?: ReactNode;
    clearLabel?: ReactNode;
    getOptionKey?: (value: TValue) => string;
    isOptionEqual?: (optionValue: TValue, selectedValue: TValue) => boolean;
    renderOption?: (option: SelectBoxOption<TValue>, selected: boolean) => ReactNode;
    renderValue?: (value: SelectBoxValue<TValue, TMode>, selectedOptions: SelectBoxOption<TValue>[]) => ReactNode;
}
export declare const SelectBox: <TValue, TMode extends SelectBoxMode = "single">(props: SelectBoxProps<TValue, TMode> & {
    ref?: ForwardedRef<HTMLButtonElement>;
}) => ReactNode;
export default SelectBox;
//# sourceMappingURL=SelectBox.d.ts.map