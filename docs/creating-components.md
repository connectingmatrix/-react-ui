# Creating New Components

Use this checklist when adding a new public UI surface to `@react/ui`.

## 1. Pick the Right Folder

- `src/components`: primitive or card-like visual pieces.
- `src/fields`: form inputs and controls that read or write values.
- `src/elements`: composed surfaces that combine multiple controls or state models.
- `src/layouts`: route, page, sidebar, panel, and grid composition.
- `src/context`: providers, hooks, and shared package behavior.

If the component needs more than one file, create a folder for it:

```text
src/elements/Table/
  Table.tsx
  tableState.ts
  tableTypes.ts
  index.ts
```

Single-file components can stay directly in their group folder.

## 2. Keep the Package Generic

Do not move app-specific behavior into `@react/ui`.

Keep these in the consuming app:

- API clients.
- app route data.
- domain status maps.
- bot, exchange, strategy, runtime, config, and trading copy.
- CSV/export schemas.
- Electron or platform-specific behavior.

Pass domain behavior into package components through props and render slots.

## 3. Support Accents

Every visual component should accept `accentKey`, `style`, and `className` when possible:

```tsx
import type { CSSProperties, ReactNode } from 'react';
import type { AccentKey } from '../context/AccentContext';
import { useAccentStyle } from '../context/AccentContext';
import { cn } from '../lib/cn';

export interface EmptyStateProps {
  title: ReactNode;
  description?: ReactNode;
  accentKey?: AccentKey;
  style?: CSSProperties;
  className?: string;
}

export function EmptyState({ title, description, accentKey, style, className }: EmptyStateProps) {
  const accentStyle = useAccentStyle(accentKey, style);

  return (
    <section
      className={cn('rounded-panel border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] p-5 text-[var(--rui-text-primary)] shadow-panel', className)}
      style={accentStyle}
    >
      <h2 className="text-base font-semibold">{title}</h2>
      {description ? <p className="mt-1 text-sm text-[var(--rui-text-secondary)]">{description}</p> : null}
    </section>
  );
}
```

Use `useAccentStyle(accentKey, style)` so provider tokens, component `accentKey`, and caller `style` compose correctly.

## 4. Use Slot Class Props for Complex Components

Small components usually need only `className`.

Complex components should expose targeted class hooks:

```tsx
export interface ExampleElementProps {
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  actionsClassName?: string;
}
```

Avoid generic deep selectors. Let callers style the slot they need.

## 5. Export the Public API

Add the component and its types to `src/index.ts`:

```ts
export { EmptyState, default as EmptyStateDefault } from './components/EmptyState';
export type { EmptyStateProps } from './components/EmptyState';
```

If the component is private implementation detail, do not export it.

## 6. Add Tests

Tests live in `tests`, not under `src`.

Cover the behavior that users rely on:

- rendering labels, descriptions, and errors.
- controlled and uncontrolled state.
- action callbacks.
- keyboard and pointer interactions.
- accent token application.
- persistence normalization when relevant.

## 7. Add Storybook

Stories should use native Storybook features:

- `argTypes` for controls.
- actions for callbacks.
- docs source for exact usage code.
- play functions for interactions when useful.

Do not render custom prop tables inside the canvas. Use Storybook controls and docs instead.

## 8. Run Verification

```bash
yarn typecheck
yarn lint
yarn test
yarn build
yarn build:storybook
```

For visual work, compare the story against a real consuming app screen before shipping.
