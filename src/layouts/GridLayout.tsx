import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';
import Button from '../components/Button';
import { Icon } from '../components/Icon';

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

const widthClassMap: Record<GridPanelWidth, string> = {
  third: 'xl:col-span-4',
  half: 'xl:col-span-6',
  full: 'xl:col-span-12',
};

function buildDefaults(panels: GridPanelDefinition[]): GridPanelState[] {
  return panels.map((panel, index) => ({
    id: panel.id,
    order: index,
    width: panel.defaultWidth || 'full',
    collapsed: false,
    fullscreen: false,
  }));
}

function normalizeLayout(panels: GridPanelDefinition[], saved?: GridPanelState[] | null): GridPanelState[] {
  const defaults = buildDefaults(panels);
  if (!saved?.length) return defaults;
  const savedMap = new Map(saved.map((item) => [item.id, item]));
  return panels
    .map((panel, index) => {
      const current = savedMap.get(panel.id);
      return {
        id: panel.id,
        order: current?.order ?? index,
        width: current?.width ?? panel.defaultWidth ?? 'full',
        collapsed: Boolean(current?.collapsed),
        fullscreen: Boolean(current?.fullscreen),
      };
    })
    .sort((left, right) => left.order - right.order)
    .map((item, index) => ({ ...item, order: index }));
}

function localKey(key: string, namespace = 'rui:layout') {
  return `${namespace}:${key}`;
}

function readStoredLayout(key: string, namespace?: string) {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(localKey(key, namespace));
    return raw ? (JSON.parse(raw) as GridPanelState[]) : null;
  } catch {
    return null;
  }
}

function writeStoredLayout(key: string, layout: GridPanelState[], namespace?: string) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(localKey(key, namespace), JSON.stringify(layout));
  } catch {
    // best effort persistence
  }
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

export function DynamicPanel({
  panel,
  state,
  allowMovement = true,
  allowResize = true,
  allowCollapse = true,
  allowFullscreen = true,
  onToggleCollapse,
  onToggleFullscreen,
  onReset,
  onCycleWidth,
  onDragStart,
  onDragOver,
  onDragEnter,
  onDrop,
  onDragEnd,
  renderActions,
  renderHeader,
  renderPanelControls,
  renderMoveHandle,
  renderResizeButton,
  renderCollapseButton,
  renderResetButton,
  renderFullscreenButton,
  accentKey,
  style,
  className,
  headerClassName,
  bodyClassName,
  actionsClassName,
}: DynamicPanelProps) {
  const isCollapsed = Boolean(state.collapsed);
  const isFullscreen = Boolean(state.fullscreen);
  const description = panel.description ?? panel.subtitle;
  const actions = panel.actions ?? panel.action;
  const body = panel.content ?? panel.children;
  const accentStyle = useAccentStyle(accentKey, style);
  const moveHandleProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    type: 'button',
    draggable: !isFullscreen,
    onDragStart,
    onDragEnd,
    className:
      'cursor-grab rounded border border-[var(--rui-border-soft)] p-1 text-[var(--rui-text-tertiary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)] active:cursor-grabbing',
    title: 'Drag handle',
  };
  const moveHandle = allowMovement
    ? (renderMoveHandle?.({
        panel,
        state,
        buttonProps: moveHandleProps,
        defaultButton: (
          <button {...moveHandleProps}>
            <Icon name="actions" className="h-4 w-4" />
          </button>
        ),
      }) ?? (
        <button {...moveHandleProps}>
          <Icon name="actions" className="h-4 w-4" />
        </button>
      ))
    : null;
  const resizeButtonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = { title: 'Cycle width', onClick: onCycleWidth };
  const resizeButton = allowResize
    ? (renderResizeButton?.({
        panel,
        state,
        buttonProps: resizeButtonProps,
        defaultButton: (
          <Button variant="icon" size="sm" className="h-8 w-8 px-0" {...resizeButtonProps}>
            <Icon name="grid" className="h-4 w-4" />
          </Button>
        ),
      }) ?? (
        <Button variant="icon" size="sm" className="h-8 w-8 px-0" {...resizeButtonProps}>
          <Icon name="grid" className="h-4 w-4" />
        </Button>
      ))
    : null;
  const collapseButtonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = { title: isCollapsed ? 'Restore panel' : 'Minimize panel', onClick: onToggleCollapse };
  const collapseButton = allowCollapse
    ? (renderCollapseButton?.({
        panel,
        state,
        buttonProps: collapseButtonProps,
        defaultButton: (
          <Button variant="icon" size="sm" className="h-8 w-8 px-0" {...collapseButtonProps}>
            <Icon name={isCollapsed ? 'panel' : 'minus'} className="h-4 w-4" />
          </Button>
        ),
      }) ?? (
        <Button variant="icon" size="sm" className="h-8 w-8 px-0" {...collapseButtonProps}>
          <Icon name={isCollapsed ? 'panel' : 'minus'} className="h-4 w-4" />
        </Button>
      ))
    : null;
  const resetButtonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = { title: 'Restore default size', onClick: onReset };
  const resetButton = allowResize
    ? (renderResetButton?.({
        panel,
        state,
        buttonProps: resetButtonProps,
        defaultButton: (
          <Button variant="icon" size="sm" className="h-8 w-8 px-0" {...resetButtonProps}>
            <Icon name="refresh" className="h-4 w-4" />
          </Button>
        ),
      }) ?? (
        <Button variant="icon" size="sm" className="h-8 w-8 px-0" {...resetButtonProps}>
          <Icon name="refresh" className="h-4 w-4" />
        </Button>
      ))
    : null;
  const fullscreenButtonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = { title: isFullscreen ? 'Exit fullscreen' : 'Fullscreen', onClick: onToggleFullscreen };
  const fullscreenButton = allowFullscreen
    ? (renderFullscreenButton?.({
        panel,
        state,
        buttonProps: fullscreenButtonProps,
        defaultButton: (
          <Button variant="icon" size="sm" className="h-8 w-8 px-0" {...fullscreenButtonProps}>
            <Icon name={isFullscreen ? 'minimize' : 'maximize'} className="h-4 w-4" />
          </Button>
        ),
      }) ?? (
        <Button variant="icon" size="sm" className="h-8 w-8 px-0" {...fullscreenButtonProps}>
          <Icon name={isFullscreen ? 'minimize' : 'maximize'} className="h-4 w-4" />
        </Button>
      ))
    : null;
  const defaultControls = (
    <>
      {actions ? <div className="hidden lg:block">{actions}</div> : null}
      {renderActions?.(panel, state)}
      {resizeButton}
      {collapseButton}
      {resetButton}
      {fullscreenButton}
    </>
  );
  const panelControls = renderPanelControls?.({ panel, state, controls: defaultControls }) ?? defaultControls;

  return (
    <div
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      className={cn('min-w-0 w-full', !isFullscreen && 'col-span-12', !isFullscreen && widthClassMap[state.width || 'full'], isFullscreen && 'fixed inset-4 z-50', className)}
      style={accentStyle}
    >
      <section className={cn('min-h-full w-full overflow-hidden rounded-panel rui-panel', panel.className, isFullscreen && 'h-[calc(100vh-2rem)]')}>
        {renderHeader ? (
          renderHeader(panel, state)
        ) : (
          <div
            className={cn(
              'flex flex-col gap-3 border-b border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] px-3 py-3 sm:flex-row sm:items-start sm:justify-between sm:px-4 sm:py-4',
              panel.headerClassName,
              headerClassName,
            )}
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                {moveHandle}
                <div className="min-w-0">
                  <div className="truncate text-base font-semibold text-[var(--rui-text-primary)]">{panel.title}</div>
                  {description ? <div className="mt-1 text-sm text-[var(--rui-text-secondary)]">{description}</div> : null}
                </div>
              </div>
            </div>
            <div className={cn('flex flex-wrap items-center gap-2 sm:shrink-0 sm:justify-end', actionsClassName)}>{panelControls}</div>
          </div>
        )}
        {!isCollapsed ? (
          <div className={cn('min-h-0 p-3 sm:p-5', panel.bodyClassName, bodyClassName, isFullscreen && 'h-[calc(100%-76px)] overflow-auto rui-scrollbar')}>{body}</div>
        ) : null}
      </section>
    </div>
  );
}

export function GridLayout({
  panels,
  layout,
  defaultLayout,
  onLayoutChange,
  persistenceKey,
  storageNamespace,
  persistenceAdapter,
  allowMovement = true,
  allowResize = true,
  allowCollapse = true,
  allowFullscreen = true,
  renderPanelActions,
  renderHeader,
  renderPanelControls,
  renderMoveHandle,
  renderResizeButton,
  renderCollapseButton,
  renderResetButton,
  renderFullscreenButton,
  accentKey,
  style,
  className,
  panelClassName,
  panelHeaderClassName,
  panelBodyClassName,
  panelActionsClassName,
}: GridLayoutProps) {
  const [internalLayout, setInternalLayout] = useState<GridPanelState[]>(() =>
    normalizeLayout(panels, defaultLayout || (persistenceKey ? readStoredLayout(persistenceKey, storageNamespace) : null)),
  );
  const dragIdRef = useRef<string | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [adapterHydrated, setAdapterHydrated] = useState(() => !persistenceKey || !persistenceAdapter);
  const controlled = layout !== undefined;
  const items = useMemo(() => normalizeLayout(panels, controlled ? layout : internalLayout), [controlled, internalLayout, layout, panels]);
  const panelMap = useMemo(() => new Map(panels.map((panel) => [panel.id, panel])), [panels]);
  const accentStyle = useAccentStyle(accentKey, style);
  const panelsRef = useRef(panels);
  const itemsRef = useRef(items);
  const controlledRef = useRef(controlled);
  const onLayoutChangeRef = useRef(onLayoutChange);

  useEffect(() => {
    panelsRef.current = panels;
  }, [panels]);

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    controlledRef.current = controlled;
  }, [controlled]);

  useEffect(() => {
    onLayoutChangeRef.current = onLayoutChange;
  }, [onLayoutChange]);

  const setItems = useCallback((nextItems: GridPanelState[] | ((current: GridPanelState[]) => GridPanelState[])) => {
    const resolved = typeof nextItems === 'function' ? nextItems(itemsRef.current) : nextItems;
    const normalized = normalizeLayout(panelsRef.current, resolved);
    if (!controlledRef.current) setInternalLayout(normalized);
    onLayoutChangeRef.current?.(normalized);
  }, []);

  useEffect(() => {
    let cancelled = false;
    if (!persistenceKey || !persistenceAdapter) {
      setAdapterHydrated(true);
      return;
    }
    setAdapterHydrated(false);
    void Promise.resolve(persistenceAdapter.load(persistenceKey))
      .then((loaded) => {
        if (cancelled) return;
        if (loaded) setItems(loaded);
        setAdapterHydrated(true);
      })
      .catch(() => {
        if (!cancelled) setAdapterHydrated(false);
      });
    return () => {
      cancelled = true;
    };
  }, [persistenceAdapter, persistenceKey, setItems]);

  useEffect(() => {
    if (!persistenceKey) return;
    if (persistenceAdapter && !adapterHydrated) return;
    writeStoredLayout(persistenceKey, items, storageNamespace);
    if (persistenceAdapter) void Promise.resolve(persistenceAdapter.save(persistenceKey, items)).catch(() => {});
  }, [adapterHydrated, items, persistenceAdapter, persistenceKey, storageNamespace]);

  const resetItem = (id: string) => {
    const defaultItem = buildDefaults(panels).find((item) => item.id === id);
    if (!defaultItem) return;
    setItems((current) => current.map((item) => (item.id === id ? { ...defaultItem, order: item.order } : item)));
  };

  const cycleWidth = (id: string) => {
    setItems((current) =>
      current.map((item) => {
        if (item.id !== id) return item;
        const width: GridPanelWidth = item.width === 'third' ? 'half' : item.width === 'half' ? 'full' : 'third';
        return { ...item, width, collapsed: false };
      }),
    );
  };

  const toggleCollapse = (id: string) => {
    setItems((current) => current.map((item) => (item.id === id ? { ...item, collapsed: !item.collapsed, fullscreen: item.collapsed ? item.fullscreen : false } : item)));
  };

  const toggleFullscreen = (id: string) => {
    setItems((current) => current.map((item) => ({ ...item, collapsed: item.id === id ? false : item.collapsed, fullscreen: item.id === id ? !item.fullscreen : false })));
  };

  const reorder = (draggedId: string, targetId: string) => {
    if (!allowMovement || !draggedId || draggedId === targetId) return;
    setItems((current) => {
      const ordered = normalizeLayout(panels, current);
      const from = ordered.findIndex((item) => item.id === draggedId);
      const to = ordered.findIndex((item) => item.id === targetId);
      if (from < 0 || to < 0) return current;
      const [moved] = ordered.splice(from, 1);
      ordered.splice(to, 0, moved);
      return ordered.map((item, index) => ({ ...item, order: index }));
    });
  };

  const fullscreenItem = items.find((item) => item.fullscreen);

  const renderItem = (item: GridPanelState) => {
    const panel = panelMap.get(item.id);
    if (!panel) return null;
    return (
      <DynamicPanel
        key={item.id}
        panel={panel}
        state={item}
        allowMovement={allowMovement}
        allowResize={allowResize}
        allowCollapse={allowCollapse}
        allowFullscreen={allowFullscreen}
        className={panelClassName}
        headerClassName={panelHeaderClassName}
        bodyClassName={panelBodyClassName}
        actionsClassName={panelActionsClassName}
        renderActions={renderPanelActions}
        renderHeader={renderHeader}
        renderPanelControls={renderPanelControls}
        renderMoveHandle={renderMoveHandle}
        renderResizeButton={renderResizeButton}
        renderCollapseButton={renderCollapseButton}
        renderResetButton={renderResetButton}
        renderFullscreenButton={renderFullscreenButton}
        accentKey={accentKey}
        onToggleCollapse={() => toggleCollapse(item.id)}
        onToggleFullscreen={() => toggleFullscreen(item.id)}
        onReset={() => resetItem(item.id)}
        onCycleWidth={() => cycleWidth(item.id)}
        onDragStart={(event) => {
          if (!allowMovement) return;
          dragIdRef.current = item.id;
          setDraggingId(item.id);
          event.dataTransfer.effectAllowed = 'move';
          event.dataTransfer.setData('text/plain', item.id);
          event.dataTransfer.setData('application/x-rui-panel-id', item.id);
        }}
        onDragOver={(event) => {
          if (!dragIdRef.current) return;
          event.preventDefault();
          event.dataTransfer.dropEffect = 'move';
        }}
        onDragEnter={(event) => {
          if (!dragIdRef.current) return;
          event.preventDefault();
        }}
        onDrop={(event) => {
          event.preventDefault();
          const draggedId = event.dataTransfer.getData('application/x-rui-panel-id') || event.dataTransfer.getData('text/plain') || dragIdRef.current;
          if (draggedId) reorder(draggedId, item.id);
          dragIdRef.current = null;
          setDraggingId(null);
        }}
        onDragEnd={() => {
          dragIdRef.current = null;
          setDraggingId(null);
        }}
      />
    );
  };

  if (fullscreenItem) {
    return (
      <>
        <div className="fixed inset-0 z-40 bg-[#050816]/80 backdrop-blur-sm" />
        {renderItem(fullscreenItem)}
      </>
    );
  }

  return (
    <div className={cn('rui-theme grid w-full grid-cols-12 gap-3 sm:gap-5', className, draggingId && 'select-none')} style={accentStyle}>
      {items.map(renderItem)}
    </div>
  );
}

export default GridLayout;
