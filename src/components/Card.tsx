import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';

export type CardPadding = boolean | 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padded?: CardPadding;
  accentKey?: AccentKey;
  interactive?: boolean;
  children?: ReactNode;
  contentClassName?: string;
  style?: CSSProperties;
}

const paddingClasses: Record<Exclude<CardPadding, boolean>, string> = {
  none: '',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-6',
};

function resolvePadding(padded: CardPadding) {
  if (padded === false || padded === 'none') {
    return '';
  }

  if (padded === true) {
    return paddingClasses.md;
  }

  return paddingClasses[padded];
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, className, contentClassName, padded = true, interactive = false, accentKey, style, ...props },
  ref,
) {
  const accentStyle = useAccentStyle(accentKey, style);

  return (
    <div
      ref={ref}
      style={accentStyle}
      className={cn(
        'rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] text-[var(--rui-text-primary)] shadow-panel',
        interactive && 'transition hover:border-[var(--rui-accent-border-soft)] hover:bg-[var(--rui-bg-panel-2)]',
        resolvePadding(padded),
        className,
      )}
      {...props}
    >
      {contentClassName ? <div className={contentClassName}>{children}</div> : children}
    </div>
  );
});

export default Card;
