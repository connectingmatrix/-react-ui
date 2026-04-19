import type { CSSProperties, ReactNode } from 'react';
import { createContext, useContext, useMemo } from 'react';
import { cn } from '../lib/cn';

export type AccentKey = 'default' | 'accent' | 'cyan' | 'teal' | 'success' | 'warning' | 'danger' | 'neutral' | string;

export interface AccentTokens {
  bgApp?: string;
  bgSurface?: string;
  bgSurface2?: string;
  bgCard?: string;
  bgCard2?: string;
  bgPanel?: string;
  bgPanel2?: string;
  bgInput?: string;
  borderSoft?: string;
  borderStrong?: string;
  textPrimary?: string;
  textSecondary?: string;
  textTertiary?: string;
  accent?: string;
  accentStrong?: string;
  accentSoft?: string;
  accentMuted?: string;
  accentBorder?: string;
  accentBorderSoft?: string;
  success?: string;
  successSoft?: string;
  successBorder?: string;
  warning?: string;
  warningSoft?: string;
  warningBorder?: string;
  danger?: string;
  dangerSoft?: string;
  dangerBorder?: string;
  shadowPanel?: string;
  radiusPanel?: string;
  radiusControl?: string;
}

export interface AccentContextValue {
  accentKey: AccentKey;
  accents?: Record<string, AccentTokens>;
  tokens?: AccentTokens;
}

export interface AccentProviderProps extends AccentContextValue {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface AccentableProps {
  accentKey?: AccentKey;
}

export const defaultAccentKey = 'default';

export const defaultAccentTokens: Required<AccentTokens> = {
  bgApp: '#0f1423',
  bgSurface: '#171d30',
  bgSurface2: '#1d2440',
  bgCard: '#222a48',
  bgCard2: '#262f52',
  bgPanel: '#171d30',
  bgPanel2: '#1d2440',
  bgInput: '#edf0f7',
  borderSoft: 'rgba(255, 255, 255, 0.08)',
  borderStrong: 'rgba(255, 255, 255, 0.14)',
  textPrimary: '#f5f7ff',
  textSecondary: '#c1c8dc',
  textTertiary: '#93a0bf',
  accent: '#34d4e8',
  accentStrong: '#13bfd5',
  accentSoft: 'rgba(52, 212, 232, 0.14)',
  accentMuted: 'rgba(52, 212, 232, 0.08)',
  accentBorder: 'rgba(52, 212, 232, 0.35)',
  accentBorderSoft: 'rgba(52, 212, 232, 0.28)',
  success: '#19d3a8',
  successSoft: 'rgba(25, 211, 168, 0.14)',
  successBorder: 'rgba(25, 211, 168, 0.35)',
  warning: '#f0b44f',
  warningSoft: 'rgba(240, 180, 79, 0.14)',
  warningBorder: 'rgba(240, 180, 79, 0.35)',
  danger: '#eb6a76',
  dangerSoft: 'rgba(235, 106, 118, 0.14)',
  dangerBorder: 'rgba(235, 106, 118, 0.35)',
  shadowPanel: '0 16px 36px rgba(4, 8, 26, 0.3)',
  radiusPanel: '10px',
  radiusControl: '8px',
};

export const defaultAccentPresets: Record<string, AccentTokens> = {
  default: {},
  accent: {},
  cyan: {},
  teal: {
    accent: '#19d3a8',
    accentStrong: '#11b891',
    accentSoft: 'rgba(25, 211, 168, 0.14)',
    accentMuted: 'rgba(25, 211, 168, 0.08)',
    accentBorder: 'rgba(25, 211, 168, 0.35)',
    accentBorderSoft: 'rgba(25, 211, 168, 0.28)',
  },
  success: {
    accent: '#19d3a8',
    accentStrong: '#11b891',
    accentSoft: 'rgba(25, 211, 168, 0.14)',
    accentMuted: 'rgba(25, 211, 168, 0.08)',
    accentBorder: 'rgba(25, 211, 168, 0.35)',
    accentBorderSoft: 'rgba(25, 211, 168, 0.28)',
  },
  warning: {
    accent: '#f0b44f',
    accentStrong: '#d99725',
    accentSoft: 'rgba(240, 180, 79, 0.14)',
    accentMuted: 'rgba(240, 180, 79, 0.08)',
    accentBorder: 'rgba(240, 180, 79, 0.35)',
    accentBorderSoft: 'rgba(240, 180, 79, 0.28)',
  },
  danger: {
    accent: '#eb6a76',
    accentStrong: '#d84d5c',
    accentSoft: 'rgba(235, 106, 118, 0.14)',
    accentMuted: 'rgba(235, 106, 118, 0.08)',
    accentBorder: 'rgba(235, 106, 118, 0.35)',
    accentBorderSoft: 'rgba(235, 106, 118, 0.28)',
  },
  neutral: {
    accent: '#c1c8dc',
    accentStrong: '#f5f7ff',
    accentSoft: 'rgba(255, 255, 255, 0.08)',
    accentMuted: 'rgba(255, 255, 255, 0.05)',
    accentBorder: 'rgba(255, 255, 255, 0.16)',
    accentBorderSoft: 'rgba(255, 255, 255, 0.10)',
  },
};

type AccentCssProperties = CSSProperties & Record<string, string>;

const AccentContext = createContext<AccentContextValue | null>(null);

function resolveTokens(key: AccentKey, accents?: Record<string, AccentTokens>, tokens?: AccentTokens) {
  return {
    ...defaultAccentTokens,
    ...(defaultAccentPresets[key] || {}),
    ...(accents?.[key] || {}),
    ...(tokens || {}),
  };
}

export function accentTokensToCssVars(tokens: AccentTokens): AccentCssProperties {
  const resolved = { ...defaultAccentTokens, ...tokens };
  return {
    '--rui-bg-app': resolved.bgApp,
    '--rui-bg-surface': resolved.bgSurface,
    '--rui-bg-surface-2': resolved.bgSurface2,
    '--rui-bg-card': resolved.bgCard,
    '--rui-bg-card-2': resolved.bgCard2,
    '--rui-bg-panel': resolved.bgPanel,
    '--rui-bg-panel-2': resolved.bgPanel2,
    '--rui-bg-input': resolved.bgInput,
    '--rui-border-soft': resolved.borderSoft,
    '--rui-border-strong': resolved.borderStrong,
    '--rui-text-primary': resolved.textPrimary,
    '--rui-text-secondary': resolved.textSecondary,
    '--rui-text-tertiary': resolved.textTertiary,
    '--rui-text-main': resolved.textPrimary,
    '--rui-text-soft': resolved.textSecondary,
    '--rui-text-muted': resolved.textTertiary,
    '--rui-accent': resolved.accent,
    '--rui-accent-strong': resolved.accentStrong,
    '--rui-accent-soft': resolved.accentSoft,
    '--rui-accent-muted': resolved.accentMuted,
    '--rui-accent-border': resolved.accentBorder,
    '--rui-accent-border-soft': resolved.accentBorderSoft,
    '--rui-success': resolved.success,
    '--rui-success-soft': resolved.successSoft,
    '--rui-success-border': resolved.successBorder,
    '--rui-warning': resolved.warning,
    '--rui-warning-soft': resolved.warningSoft,
    '--rui-warning-border': resolved.warningBorder,
    '--rui-danger': resolved.danger,
    '--rui-danger-soft': resolved.dangerSoft,
    '--rui-danger-border': resolved.dangerBorder,
    '--rui-shadow-panel': resolved.shadowPanel,
    '--rui-radius-panel': resolved.radiusPanel,
    '--rui-radius-control': resolved.radiusControl,
  };
}

export function useAccent(accentKey?: AccentKey, tokens?: AccentTokens) {
  const context = useContext(AccentContext);
  const hasExplicitAccent = Boolean(context || accentKey || tokens);
  const resolvedKey = context?.accentKey ?? accentKey ?? defaultAccentKey;
  const resolvedTokens = useMemo(
    () => resolveTokens(resolvedKey, context?.accents, context?.tokens ? { ...context.tokens, ...tokens } : tokens),
    [context?.accents, context?.tokens, resolvedKey, tokens],
  );
  const style = useMemo(() => (hasExplicitAccent ? accentTokensToCssVars(resolvedTokens) : undefined), [hasExplicitAccent, resolvedTokens]);

  return { accentKey: resolvedKey, tokens: resolvedTokens, style };
}

export function useAccentStyle(accentKey?: AccentKey, style?: CSSProperties, tokens?: AccentTokens) {
  const accent = useAccent(accentKey, tokens);
  return useMemo(() => (accent.style ? { ...accent.style, ...style } : style), [accent.style, style]);
}

export function AccentProvider({ accentKey = defaultAccentKey, accents, tokens, children, className, style }: AccentProviderProps) {
  const value = useMemo(() => ({ accentKey, accents, tokens }), [accentKey, accents, tokens]);
  const accentStyle = useMemo(() => ({ ...accentTokensToCssVars(resolveTokens(accentKey, accents, tokens)), ...style }), [accentKey, accents, style, tokens]);

  return (
    <AccentContext.Provider value={value}>
      <div className={cn('rui-theme', className)} style={accentStyle}>
        {children}
      </div>
    </AccentContext.Provider>
  );
}
