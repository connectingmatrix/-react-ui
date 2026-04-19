import type { ReactNode } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';
import { useControllableState } from '../hooks/useControllableState';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  placement?: TooltipPlacement;
  delay?: number;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  accentKey?: AccentKey;
  className?: string;
  panelClassName?: string;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function Tooltip({
  content,
  children,
  placement: preferredPlacement = 'top',
  delay = 120,
  open,
  defaultOpen = false,
  onOpenChange,
  accentKey,
  className,
  panelClassName,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, placement: preferredPlacement });
  const triggerRef = useRef<HTMLSpanElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const openTimer = useRef<number | null>(null);
  const accentStyle = useAccentStyle(accentKey);

  useEffect(() => setMounted(true), []);

  const updatePosition = useMemo(
    () => () => {
      if (typeof window === 'undefined') return;
      const trigger = triggerRef.current;
      const panel = panelRef.current;
      if (!trigger || !panel) return;

      const rect = trigger.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();
      const spacing = 10;
      const padding = 12;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const preferred = preferredPlacement;

      let placement: TooltipPlacement = preferred;
      if (preferred === 'top' && rect.top - panelRect.height - spacing < padding) placement = 'bottom';
      if (preferred === 'bottom' && rect.bottom + panelRect.height + spacing > viewportHeight - padding) placement = 'top';
      if (preferred === 'left' && rect.left - panelRect.width - spacing < padding) placement = 'right';
      if (preferred === 'right' && rect.right + panelRect.width + spacing > viewportWidth - padding) placement = 'left';

      let top = rect.top;
      let left = rect.left;
      if (placement === 'top') top = rect.top - panelRect.height - spacing;
      if (placement === 'bottom') top = rect.bottom + spacing;
      if (placement === 'left') left = rect.left - panelRect.width - spacing;
      if (placement === 'right') left = rect.right + spacing;

      if (placement === 'top' || placement === 'bottom') {
        left = rect.left + rect.width / 2 - panelRect.width / 2;
      }
      if (placement === 'left' || placement === 'right') {
        top = rect.top + rect.height / 2 - panelRect.height / 2;
      }

      setPosition({
        placement,
        top: clamp(top, padding, viewportHeight - panelRect.height - padding),
        left: clamp(left, padding, viewportWidth - panelRect.width - padding),
      });
    },
    [preferredPlacement],
  );

  useEffect(() => {
    if (!isOpen) {
      if (openTimer.current) window.clearTimeout(openTimer.current);
      openTimer.current = null;
      return;
    }

    const timer = window.setTimeout(updatePosition, 0);
    const handle = () => updatePosition();
    window.addEventListener('resize', handle);
    window.addEventListener('scroll', handle, true);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', handle);
      window.removeEventListener('scroll', handle, true);
    };
  }, [isOpen, updatePosition]);

  const show = () => {
    if (typeof window !== 'undefined' && openTimer.current) {
      window.clearTimeout(openTimer.current);
    }
    if (delay > 0) {
      openTimer.current = window.setTimeout(() => setIsOpen(true), delay);
      return;
    }
    setIsOpen(true);
  };

  const hide = () => {
    if (typeof window !== 'undefined' && openTimer.current) {
      window.clearTimeout(openTimer.current);
    }
    openTimer.current = null;
    setIsOpen(false);
  };

  return (
    <span ref={triggerRef} className={cn('inline-flex', className)} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {mounted && isOpen && typeof document !== 'undefined'
        ? createPortal(
            <div
              ref={panelRef}
              role="tooltip"
              style={{ ...accentStyle, position: 'fixed', top: position.top, left: position.left }}
              className={cn(
                'z-[140] max-w-[360px] rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[rgba(14,20,35,0.98)] px-3 py-2 text-left text-sm text-white shadow-[0_18px_44px_rgba(0,0,0,0.38)] backdrop-blur',
                panelClassName,
              )}
            >
              {content}
            </div>,
            document.body,
          )
        : null}
    </span>
  );
}

export default Tooltip;
