import type { SVGAttributes } from 'react';
export type UiIconName = 'actions' | 'alert' | 'bars' | 'bell' | 'card' | 'chart' | 'check' | 'chevron-down' | 'chevron-right' | 'close' | 'coins' | 'discord' | 'dollar' | 'download' | 'exclamation' | 'eye' | 'filter' | 'folder' | 'grid' | 'info' | 'live' | 'maximize' | 'maximize-screen' | 'menu' | 'minimize' | 'minimize-screen' | 'minus' | 'moon' | 'panel' | 'panel-restore' | 'pause' | 'play' | 'plus' | 'refresh' | 'save' | 'search' | 'settings' | 'share' | 'sidebar-collapsed' | 'sidebar-open' | 'sparkle' | 'stop' | 'store' | 'support' | 'swap' | 'timer' | 'trash' | 'trenddown' | 'trendup' | 'user' | 'wallet';
export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'name'> {
    name: UiIconName | (string & {});
    title?: string;
}
export declare function Icon({ name, ...props }: IconProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Icon.d.ts.map