import type { TextProps } from './Text';
export type DateTimeSelectorType = 'date' | 'datetime-local' | 'time' | 'month' | 'week';
export interface DateTimeSelectorProps extends Omit<TextProps, 'type'> {
    type?: DateTimeSelectorType;
}
export declare const DateTimeSelector: import("react").ForwardRefExoticComponent<DateTimeSelectorProps & import("react").RefAttributes<HTMLInputElement>>;
export default DateTimeSelector;
//# sourceMappingURL=DateTimeSelector.d.ts.map