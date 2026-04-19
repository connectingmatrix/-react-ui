import React from 'react';
import type { AccentKey } from '../context/AccentContext';
export type GridPanelWidth = 'full' | 'half' | 'third';
export interface GridPanelState {
    id: string;
    order: number;
    width: GridPanelWidth;
    collapsed: boolean;
    fullscreen: boolean;
}
export interface GridPanelDefinition {
    id: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    subtitle?: React.ReactNode;
    content?: React.ReactNode;
    children?: React.ReactNode;
    actions?: React.ReactNode;
    action?: React.ReactNode;
    defaultWidth?: GridPanelWidth;
    className?: string;
    bodyClassName?: string;
    headerClassName?: string;
}
export interface GridLayoutPersistenceAdapter {
    load: (key: string) => GridPanelState[] | null | Promise<GridPanelState[] | null>;
    save: (key: string, state: GridPanelState[]) => void | Promise<void>;
}
export interface GridLayoutProps {
    panels: GridPanelDefinition[];
    layout?: GridPanelState[];
    defaultLayout?: GridPanelState[];
    onLayoutChange?: (layout: GridPanelState[]) => void;
    persistenceKey?: string;
    storageNamespace?: string;
    persistenceAdapter?: GridLayoutPersistenceAdapter;
    allowMovement?: boolean;
    allowResize?: boolean;
    allowCollapse?: boolean;
    allowFullscreen?: boolean;
    renderPanelActions?: (panel: GridPanelDefinition, state: GridPanelState) => React.ReactNode;
    renderHeader?: (panel: GridPanelDefinition, state: GridPanelState) => React.ReactNode;
    renderPanelControls?: (params: DynamicPanelControlsRenderParams) => React.ReactNode;
    renderMoveHandle?: DynamicPanelButtonRenderer;
    renderResizeButton?: DynamicPanelButtonRenderer;
    renderCollapseButton?: DynamicPanelButtonRenderer;
    renderResetButton?: DynamicPanelButtonRenderer;
    renderFullscreenButton?: DynamicPanelButtonRenderer;
    accentKey?: AccentKey;
    style?: React.CSSProperties;
    className?: string;
    panelClassName?: string;
    panelHeaderClassName?: string;
    panelBodyClassName?: string;
    panelActionsClassName?: string;
}
export interface DynamicPanelButtonRenderParams {
    panel: GridPanelDefinition;
    state: GridPanelState;
    defaultButton: React.ReactNode;
    buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
export type DynamicPanelButtonRenderer = (params: DynamicPanelButtonRenderParams) => React.ReactNode;
export interface DynamicPanelControlsRenderParams {
    panel: GridPanelDefinition;
    state: GridPanelState;
    controls: React.ReactNode;
}
export interface DynamicPanelProps {
    panel: GridPanelDefinition;
    state: GridPanelState;
    allowMovement?: boolean;
    allowResize?: boolean;
    allowCollapse?: boolean;
    allowFullscreen?: boolean;
    onToggleCollapse?: () => void;
    onToggleFullscreen?: () => void;
    onReset?: () => void;
    onCycleWidth?: () => void;
    onDragStart?: (event: React.DragEvent<HTMLElement>) => void;
    onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragEnter?: (event: React.DragEvent<HTMLDivElement>) => void;
    onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragEnd?: () => void;
    renderActions?: (panel: GridPanelDefinition, state: GridPanelState) => React.ReactNode;
    renderHeader?: (panel: GridPanelDefinition, state: GridPanelState) => React.ReactNode;
    renderPanelControls?: (params: DynamicPanelControlsRenderParams) => React.ReactNode;
    renderMoveHandle?: DynamicPanelButtonRenderer;
    renderResizeButton?: DynamicPanelButtonRenderer;
    renderCollapseButton?: DynamicPanelButtonRenderer;
    renderResetButton?: DynamicPanelButtonRenderer;
    renderFullscreenButton?: DynamicPanelButtonRenderer;
    accentKey?: AccentKey;
    style?: React.CSSProperties;
    className?: string;
    headerClassName?: string;
    bodyClassName?: string;
    actionsClassName?: string;
}
export declare function DynamicPanel({ panel, state, allowMovement, allowResize, allowCollapse, allowFullscreen, onToggleCollapse, onToggleFullscreen, onReset, onCycleWidth, onDragStart, onDragOver, onDragEnter, onDrop, onDragEnd, renderActions, renderHeader, renderPanelControls, renderMoveHandle, renderResizeButton, renderCollapseButton, renderResetButton, renderFullscreenButton, accentKey, style, className, headerClassName, bodyClassName, actionsClassName, }: DynamicPanelProps): import("react/jsx-runtime").JSX.Element;
export declare function GridLayout({ panels, layout, defaultLayout, onLayoutChange, persistenceKey, storageNamespace, persistenceAdapter, allowMovement, allowResize, allowCollapse, allowFullscreen, renderPanelActions, renderHeader, renderPanelControls, renderMoveHandle, renderResizeButton, renderCollapseButton, renderResetButton, renderFullscreenButton, accentKey, style, className, panelClassName, panelHeaderClassName, panelBodyClassName, panelActionsClassName, }: GridLayoutProps): import("react/jsx-runtime").JSX.Element;
export default GridLayout;
//# sourceMappingURL=GridLayout.d.ts.map