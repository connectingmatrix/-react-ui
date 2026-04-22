# Accents and Design Tokens

Accents are named token sets that control the package colors, borders, shadows, and radii through CSS variables.

## Built-in Accents

Dark dashboard accents:

- `default`
- `accent`
- `cyan`
- `teal`
- `success`
- `warning`
- `danger`
- `neutral`

Light TailAdmin-inspired accents:

- `light`
- `tailadmin`
- `light-blue`
- `light-success`
- `light-warning`
- `light-danger`
- `light-neutral`

## Resolution Order

Components resolve accents in this order:

1. Nearest `AccentProvider`.
2. Component or field `accentKey`.
3. `default`.

This means a page-level provider is usually enough:

```tsx
import { AccentProvider } from '@react/ui';

<AccentProvider accentKey="tailadmin">
  <AppRoutes />
</AccentProvider>;
```

Use a component `accentKey` only for intentional overrides:

```tsx
<Button accentKey="warning">Needs review</Button>
```

## Creating One Custom Accent

Use `createAccentTokens` when you need one token object:

```tsx
import { createAccentTokens } from '@react/ui';

const brandTokens = createAccentTokens('light', {
  accent: '#635bff',
  accentStrong: '#4f46e5',
  accentSoft: '#eef2ff',
  accentMuted: 'rgba(99, 91, 255, 0.08)',
  accentBorder: '#a5b4fc',
  accentBorderSoft: '#ddd6fe',
  accentSoftText: '#4f46e5',
  accentOutlineText: '#4f46e5',
});
```

## Creating Named Presets

Use `createAccentPresets` when a provider should expose one or more named accents:

```tsx
import { AccentProvider, createAccentPresets } from '@react/ui';

const accents = createAccentPresets({
  brand: {
    extends: 'light',
    tokens: {
      accent: '#635bff',
      accentStrong: '#4f46e5',
      accentSoft: '#eef2ff',
      accentMuted: 'rgba(99, 91, 255, 0.08)',
      accentBorder: '#a5b4fc',
      accentBorderSoft: '#ddd6fe',
      accentSoftText: '#4f46e5',
      accentOutlineText: '#4f46e5',
    },
  },
  brandDark: {
    extends: 'default',
    tokens: {
      accent: '#8b5cf6',
      accentStrong: '#a78bfa',
      accentSoft: 'rgba(139, 92, 246, 0.18)',
      accentMuted: 'rgba(139, 92, 246, 0.08)',
      accentBorder: 'rgba(139, 92, 246, 0.45)',
      accentBorderSoft: 'rgba(139, 92, 246, 0.28)',
    },
  },
});

export function App() {
  return (
    <AccentProvider accentKey="brand" accents={accents}>
      <Dashboard />
    </AccentProvider>
  );
}
```

## Token Names

Main surface tokens:

- `bgApp`
- `bgSurface`
- `bgSurface2`
- `bgCard`
- `bgCard2`
- `bgPanel`
- `bgPanel2`
- `bgInput`

Text and border tokens:

- `textPrimary`
- `textSecondary`
- `textTertiary`
- `borderSoft`
- `borderStrong`

Accent tokens:

- `accent`
- `accentStrong`
- `accentSoft`
- `accentMuted`
- `accentBorder`
- `accentBorderSoft`
- `accentContrast`
- `accentSoftText`
- `accentOutlineText`

Status tokens:

- `success`
- `successSoft`
- `successBorder`
- `warning`
- `warningSoft`
- `warningBorder`
- `danger`
- `dangerSoft`
- `dangerBorder`

Logger tokens:

- `logBg`
- `logRowBg`
- `logBorder`
- `logPayloadBg`
- `logPayloadPreBg`

Shape tokens:

- `shadowPanel`
- `radiusPanel`
- `radiusControl`

## Component Styling Rule

New components should use CSS variables instead of hard-coded colors:

```tsx
<div className="border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] text-[var(--rui-text-primary)]" />
```

Avoid `text-white`, `bg-white`, and fixed dark backgrounds unless the component intentionally owns a specialized surface, such as logger rows.
