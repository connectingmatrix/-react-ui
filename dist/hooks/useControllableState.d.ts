export declare function useControllableState<T>({ value, defaultValue, onChange }: {
    value?: T;
    defaultValue: T | (() => T);
    onChange?: (value: T) => void;
}): readonly [T, (nextValue: T | ((current: T) => T)) => void];
//# sourceMappingURL=useControllableState.d.ts.map