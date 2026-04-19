import type { CSSProperties, ReactNode } from 'react';
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
export declare const defaultAccentKey = "default";
export declare const defaultAccentTokens: Required<AccentTokens>;
export declare const defaultAccentPresets: Record<string, AccentTokens>;
type AccentCssProperties = CSSProperties & Record<string, string>;
export declare function accentTokensToCssVars(tokens: AccentTokens): AccentCssProperties;
export declare function useAccent(accentKey?: AccentKey, tokens?: AccentTokens): {
    accentKey: string;
    tokens: {
        bgApp: string;
        bgSurface: string;
        bgSurface2: string;
        bgCard: string;
        bgCard2: string;
        bgPanel: string;
        bgPanel2: string;
        bgInput: string;
        borderSoft: string;
        borderStrong: string;
        textPrimary: string;
        textSecondary: string;
        textTertiary: string;
        accent: string;
        accentStrong: string;
        accentSoft: string;
        accentMuted: string;
        accentBorder: string;
        accentBorderSoft: string;
        accentContrast: string;
        accentSoftText: string;
        accentOutlineText: string;
        success: string;
        successSoft: string;
        successBorder: string;
        warning: string;
        warningSoft: string;
        warningBorder: string;
        danger: string;
        dangerSoft: string;
        dangerBorder: string;
        shadowPanel: string;
        radiusPanel: string;
        radiusControl: string;
    };
    style: AccentCssProperties | undefined;
};
export declare function useAccentStyle(accentKey?: AccentKey, style?: CSSProperties, tokens?: AccentTokens): CSSProperties | undefined;
export declare function AccentProvider({ accentKey, accents, tokens, children, className, style }: AccentProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AccentContext.d.ts.map