import type { CSSProperties } from 'react';
import React from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { useControllableState } from '../hooks/useControllableState';
import { cn } from '../lib/cn';
import Switch from './Switch';

export interface ToggleCardProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  helper?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  disabled?: boolean;
  accentKey?: AccentKey;
  style?: CSSProperties;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  helperClassName?: string;
}

export function ToggleCard({
  checked,
  defaultChecked,
  onCheckedChange,
  title,
  description,
  helper,
  leading,
  trailing,
  disabled,
  accentKey,
  style,
  className,
  contentClassName,
  titleClassName,
  descriptionClassName,
  helperClassName,
}: ToggleCardProps) {
  const [isChecked, setChecked] = useControllableState({
    value: checked,
    defaultValue: defaultChecked ?? false,
    onChange: onCheckedChange,
  });
  const accentStyle = useAccentStyle(accentKey, style);

  return (
    <div
      style={accentStyle}
      onClick={(event) => {
        if (disabled) return;
        const target = event.target as HTMLElement | null;
        if (target?.closest('button,a,input,select,textarea,label')) return;
        setChecked((current) => !current);
      }}
      className={cn(
        'flex items-start justify-between gap-4 rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-black/10 px-4 py-3 transition',
        isChecked && 'border-[var(--rui-accent-border)] bg-[var(--rui-accent-muted)]',
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:border-[var(--rui-accent-border-soft)]',
        className,
      )}
    >
      <div className={cn('min-w-0 flex-1', contentClassName)}>
        <div className="flex items-start gap-3">
          {leading ? <div className="mt-0.5 flex-shrink-0 text-[var(--rui-text-secondary)]">{leading}</div> : null}
          <div className="min-w-0">
            {title ? <div className={cn('text-sm font-medium text-white', titleClassName)}>{title}</div> : null}
            {description ? <div className={cn('mt-1 text-xs text-[var(--rui-text-secondary)]', descriptionClassName)}>{description}</div> : null}
            {helper ? <div className={cn('mt-2 text-xs text-[var(--rui-text-tertiary)]', helperClassName)}>{helper}</div> : null}
          </div>
        </div>
      </div>
      <div className="flex flex-shrink-0 items-center gap-3">
        {trailing}
        <Switch
          checked={isChecked}
          onCheckedChange={setChecked}
          disabled={disabled}
          aria-label={typeof title === 'string' ? title : undefined}
        />
      </div>
    </div>
  );
}

export default ToggleCard;
