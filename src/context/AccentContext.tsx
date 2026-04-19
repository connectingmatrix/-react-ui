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
  accentContrast?: string;
  accentSoftText?: string;
  accentOutlineText?: string;
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
  bgApp: '#5d6180',
  bgSurface: '#2d305f',
  bgSurface2: '#303466',
  bgCard: '#2d305f',
  bgCard2: '#303466',
  bgPanel: '#2d305f',
  bgPanel2: '#303466',
  bgInput: '#e7e9ef',
  borderSoft: 'rgba(255, 255, 255, 0.08)',
  borderStrong: 'rgba(255, 255, 255, 0.12)',
  textPrimary: '#f3f5fc',
  textSecondary: '#b0b6d3',
  textTertiary: '#8f95b7',
  accent: '#19c7dc',
  accentStrong: '#0fd1df',
  accentSoft: 'rgba(25, 199, 220, 0.18)',
  accentMuted: 'rgba(25, 199, 220, 0.08)',
  accentBorder: 'rgba(25, 199, 220, 0.45)',
  accentBorderSoft: 'rgba(25, 199, 220, 0.35)',
  accentContrast: '#ffffff',
  accentSoftText: '#ffffff',
  accentOutlineText: '#ffffff',
  success: '#17e4b6',
  successSoft: 'rgba(23, 228, 182, 0.18)',
  successBorder: 'rgba(23, 228, 182, 0.55)',
  warning: '#ffb347',
  warningSoft: 'rgba(255, 179, 71, 0.18)',
  warningBorder: 'rgba(255, 179, 71, 0.55)',
  danger: '#f06d78',
  dangerSoft: 'rgba(240, 109, 120, 0.18)',
  dangerBorder: 'rgba(240, 109, 120, 0.55)',
  shadowPanel: '0 14px 30px rgba(6, 9, 35, 0.22)',
  radiusPanel: '14px',
  radiusControl: '4px',
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

const tailAdminLightBase: AccentTokens = {
  bgApp: '#f9fafb',
  bgSurface: '#ffffff',
  bgSurface2: '#f9fafb',
  bgCard: '#ffffff',
  bgCard2: '#f9fafb',
  bgPanel: '#ffffff',
  bgPanel2: '#f9fafb',
  bgInput: '#ffffff',
  borderSoft: '#e4e7ec',
  borderStrong: '#d0d5dd',
  textPrimary: '#101828',
  textSecondary: '#475467',
  textTertiary: '#667085',
  accentContrast: '#ffffff',
  success: '#12b76a',
  successSoft: '#ecfdf3',
  successBorder: '#6ce9a6',
  warning: '#f79009',
  warningSoft: '#fffaeb',
  warningBorder: 'rgba(247, 144, 9, 0.36)',
  danger: '#f04438',
  dangerSoft: '#fef3f2',
  dangerBorder: '#fda29b',
  shadowPanel: '0 1px 2px rgba(16, 24, 40, 0.05)',
  radiusPanel: '16px',
  radiusControl: '8px',
};

Object.assign(defaultAccentPresets, {
  light: {
    ...tailAdminLightBase,
    accent: '#465fff',
    accentStrong: '#3641f5',
    accentSoft: '#ecf3ff',
    accentMuted: 'rgba(70, 95, 255, 0.08)',
    accentBorder: '#9cb9ff',
    accentBorderSoft: '#dde9ff',
    accentSoftText: '#465fff',
    accentOutlineText: '#465fff',
  },
  tailadmin: {
    ...tailAdminLightBase,
    accent: '#465fff',
    accentStrong: '#3641f5',
    accentSoft: '#ecf3ff',
    accentMuted: 'rgba(70, 95, 255, 0.08)',
    accentBorder: '#9cb9ff',
    accentBorderSoft: '#dde9ff',
    accentSoftText: '#465fff',
    accentOutlineText: '#465fff',
  },
  'light-blue': {
    ...tailAdminLightBase,
    accent: '#0ba5ec',
    accentStrong: '#007aff',
    accentSoft: '#f0f9ff',
    accentMuted: 'rgba(11, 165, 236, 0.08)',
    accentBorder: '#569ff7',
    accentBorderSoft: 'rgba(11, 165, 236, 0.22)',
    accentSoftText: '#0ba5ec',
    accentOutlineText: '#0ba5ec',
  },
  'light-success': {
    ...tailAdminLightBase,
    accent: '#12b76a',
    accentStrong: '#039855',
    accentSoft: '#ecfdf3',
    accentMuted: 'rgba(18, 183, 106, 0.08)',
    accentBorder: '#6ce9a6',
    accentBorderSoft: 'rgba(18, 183, 106, 0.22)',
    accentSoftText: '#05603a',
    accentOutlineText: '#039855',
  },
  'light-warning': {
    ...tailAdminLightBase,
    accent: '#f79009',
    accentStrong: '#dc6803',
    accentSoft: '#fffaeb',
    accentMuted: 'rgba(247, 144, 9, 0.08)',
    accentBorder: 'rgba(247, 144, 9, 0.42)',
    accentBorderSoft: 'rgba(247, 144, 9, 0.24)',
    accentSoftText: '#dc6803',
    accentOutlineText: '#dc6803',
  },
  'light-danger': {
    ...tailAdminLightBase,
    accent: '#f04438',
    accentStrong: '#d92d20',
    accentSoft: '#fef3f2',
    accentMuted: 'rgba(240, 68, 56, 0.08)',
    accentBorder: '#fda29b',
    accentBorderSoft: 'rgba(240, 68, 56, 0.22)',
    accentSoftText: '#912018',
    accentOutlineText: '#d92d20',
  },
  'light-neutral': {
    ...tailAdminLightBase,
    accent: '#667085',
    accentStrong: '#344054',
    accentSoft: '#f2f4f7',
    accentMuted: 'rgba(16, 24, 40, 0.05)',
    accentBorder: '#d0d5dd',
    accentBorderSoft: '#e4e7ec',
    accentSoftText: '#344054',
    accentOutlineText: '#344054',
  },
});

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
    '--rui-accent-contrast': resolved.accentContrast,
    '--rui-accent-soft-text': resolved.accentSoftText,
    '--rui-accent-outline-text': resolved.accentOutlineText,
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
