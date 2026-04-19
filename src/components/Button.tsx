import type { ButtonHTMLAttributes, ReactNode } from 'react';
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
  primary: 'border border-[var(--rui-accent)] bg-[var(--rui-accent)] text-white hover:brightness-110 focus-visible:ring-[var(--rui-accent)]',
  secondary: 'border border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-white hover:brightness-110 focus-visible:ring-[var(--rui-accent)]',
  outline: 'border border-[var(--rui-accent)] bg-transparent text-white hover:bg-white/5 focus-visible:ring-[var(--rui-accent)]',
  ghost: 'border border-white/10 bg-transparent text-[var(--rui-text-secondary)] hover:bg-white/5 hover:text-white focus-visible:ring-white/30',
  danger: 'border border-[var(--rui-danger-border)] bg-[var(--rui-danger-soft)] text-white hover:bg-[var(--rui-danger-soft)] focus-visible:ring-[var(--rui-danger)]',
  success: 'border border-[var(--rui-success-border)] bg-[var(--rui-success-soft)] text-white hover:bg-[var(--rui-success-soft)] focus-visible:ring-[var(--rui-success)]',
  warning: 'border border-[var(--rui-warning-border)] bg-[var(--rui-warning-soft)] text-white hover:bg-[var(--rui-warning-soft)] focus-visible:ring-[var(--rui-warning)]',
  subtle: 'border border-white/10 bg-white/5 text-white hover:bg-white/10 focus-visible:ring-[var(--rui-accent)]',
  icon: 'border border-white/10 bg-transparent text-[var(--rui-text-secondary)] hover:bg-white/5 hover:text-white focus-visible:ring-white/30',
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
  const iconOnlyChild = hasChildren && !leftIcon && !rightIcon && isValidElement(children);

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      style={accentStyle}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[8px] font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:border-white/5 disabled:bg-white/5 disabled:text-white/35 disabled:opacity-80',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {loading ? <Spinner /> : leftIcon ? <span className={cn('inline-flex shrink-0 items-center', leftIconClassName)}>{leftIcon}</span> : null}
      {hasChildren ? <span className={cn('inline-flex items-center justify-center', iconOnlyChild ? 'shrink-0' : 'min-w-0 truncate')}>{children}</span> : null}
      {rightIcon ? <span className={cn('inline-flex shrink-0 items-center', rightIconClassName)}>{rightIcon}</span> : null}
    </button>
  );
});

export default Button;
