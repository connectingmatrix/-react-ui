import { forwardRef } from 'react';
import Text from './Text';
import type { TextProps } from './Text';

export type DateTimeSelectorType = 'date' | 'datetime-local' | 'time' | 'month' | 'week';

export interface DateTimeSelectorProps extends Omit<TextProps, 'type'> {
  type?: DateTimeSelectorType;
}

export const DateTimeSelector = forwardRef<HTMLInputElement, DateTimeSelectorProps>(function DateTimeSelector({ type = 'datetime-local', ...props }, ref) {
  return <Text ref={ref} type={type} {...props} />;
});

export default DateTimeSelector;
