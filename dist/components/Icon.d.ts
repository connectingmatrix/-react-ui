import React from 'react';
export type UiIconName = 'actions' | 'bars' | 'check' | 'chevron-down' | 'chevron-right' | 'close' | 'filter' | 'grid' | 'info' | 'maximize' | 'minimize' | 'minus' | 'panel' | 'refresh' | 'search';
export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
    name: UiIconName;
}
export declare function Icon({ name, ...props }: IconProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=Icon.d.ts.map