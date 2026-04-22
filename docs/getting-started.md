# Getting Started

This package is designed for dashboard-style React apps that need shared components, fields, data elements, and layouts without copying application-specific code.

## Install

For local development against this checkout:

```json
{
  "dependencies": {
    "@react/ui": "file:/Users/abeer/dev/react-ui"
  }
}
```

Then import the compiled stylesheet once in the consuming app entry:

```tsx
import '@react/ui/styles.css';
```

Import components and types from the package root:

```tsx
import { AccentProvider, Button, Page, Table } from '@react/ui';
import type { TableColumn } from '@react/ui';
```

## Minimal App Shell

```tsx
import { AccentProvider, Button, Page } from '@react/ui';
import '@react/ui/styles.css';

export function App() {
  return (
    <AccentProvider accentKey="default">
      <Page title="Operations" description="A reusable page shell." actions={<Button variant="primary">Refresh</Button>}>
        <div>Route content goes here.</div>
      </Page>
    </AccentProvider>
  );
}
```

## Folder Mental Model

- Use `components` for small reusable UI pieces.
- Use `fields` for form inputs.
- Use `elements` for larger interactive surfaces that combine multiple controls.
- Use `layouts` for page, sidebar, grid, and panel composition.
- Use `context` for providers, hooks, and package-wide behavior.

## Accent Resolution

Colors resolve in this order:

1. The nearest `AccentProvider`.
2. The component or field `accentKey` prop.
3. The package default accent.

Prefer wrapping each app or route in `AccentProvider`. Use `accentKey` on a component only when it intentionally needs a different accent.

## Development Commands

```bash
yarn install --immutable
yarn typecheck
yarn lint
yarn test
yarn build
yarn build:storybook
```

Use `yarn storybook` while developing examples.
