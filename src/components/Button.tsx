import type { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import { forwardRef, isValidElement } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'subtle' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  accentKey?: AccentKey;
  leftIconClassName?: string;
  rightIconClassName?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'border border-[var(--rui-accent)] bg-[var(--rui-accent)] text-[var(--rui-accent-contrast)] hover:brightness-110 focus-visible:ring-[var(--rui-accent)]',
  secondary: 'border border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-[var(--rui-accent-soft-text)] hover:brightness-110 focus-visible:ring-[var(--rui-accent)]',
  outline: 'border border-[var(--rui-accent)] bg-transparent text-[var(--rui-accent-outline-text)] hover:bg-[var(--rui-accent-muted)] focus-visible:ring-[var(--rui-accent)]',
  ghost:
    'border border-[var(--rui-border-soft)] bg-transparent text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)] focus-visible:ring-[var(--rui-accent)]',
  danger:
    'border border-[var(--rui-danger-border)] bg-[var(--rui-danger-soft)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-danger-soft)] focus-visible:ring-[var(--rui-danger)]',
  success:
    'border border-[var(--rui-success-border)] bg-[var(--rui-success-soft)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-success-soft)] focus-visible:ring-[var(--rui-success)]',
  warning:
    'border border-[var(--rui-warning-border)] bg-[var(--rui-warning-soft)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-warning-soft)] focus-visible:ring-[var(--rui-warning)]',
  subtle:
    'border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-accent-muted)] focus-visible:ring-[var(--rui-accent)]',
  icon: 'border border-[var(--rui-border-soft)] bg-transparent text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)] focus-visible:ring-[var(--rui-accent)]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-sm',
};

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 animate-spin">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.18" />
      <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function isScreenReaderOnlyElement(child: ReactNode): child is ReactElement<{ className?: string }> {
  return (
    isValidElement<{ className?: string }>(child) &&
    String(child.props.className || '')
      .split(/\s+/)
      .includes('sr-only')
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    children,
    variant = 'outline',
    size = 'md',
    leftIcon,
    rightIcon,
    leftIconClassName,
    rightIconClassName,
    accentKey,
    loading = false,
    fullWidth = false,
    type = 'button',
    disabled,
    style,
    ...props
  },
  ref,
) {
  const isDisabled = disabled || loading;
  const accentStyle = useAccentStyle(accentKey, style);
  const hasChildren = children !== undefined && children !== null && children !== false;
  const screenReaderOnlyChild = isScreenReaderOnlyElement(children);
  const hasVisibleChildren = hasChildren && !screenReaderOnlyChild;
  const iconOnlyChild = hasVisibleChildren && !leftIcon && !rightIcon && isValidElement(children);

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      style={accentStyle}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[8px] font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:border-[var(--rui-border-soft)] disabled:bg-[var(--rui-bg-panel-2)] disabled:text-[var(--rui-text-tertiary)] disabled:opacity-70',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {loading ? <Spinner /> : leftIcon ? <span className={cn('inline-flex shrink-0 items-center', leftIconClassName)}>{leftIcon}</span> : null}
      {hasChildren ? (
        screenReaderOnlyChild ? (
          children
        ) : (
          <span className={cn('inline-flex items-center justify-center', iconOnlyChild ? 'shrink-0' : 'min-w-0 truncate')}>{children}</span>
        )
      ) : null}
      {rightIcon ? <span className={cn('inline-flex shrink-0 items-center', rightIconClassName)}>{rightIcon}</span> : null}
    </button>
  );
});

export default Button;
