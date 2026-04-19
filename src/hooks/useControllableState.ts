import { useCallback, useState } from 'react';

export function useControllableState<T>({ value, defaultValue, onChange }: { value?: T; defaultValue: T | (() => T); onChange?: (value: T) => void }) {
  const [internalValue, setInternalValue] = useState<T>(defaultValue);
  const controlled = value !== undefined;
  const currentValue = controlled ? (value as T) : internalValue;

  const setValue = useCallback(
    (nextValue: T | ((current: T) => T)) => {
      const resolvedValue = typeof nextValue === 'function' ? (nextValue as (current: T) => T)(currentValue) : nextValue;
      if (!controlled) setInternalValue(resolvedValue);
      onChange?.(resolvedValue);
    },
    [controlled, currentValue, onChange],
  );

  return [currentValue, setValue] as const;
}
