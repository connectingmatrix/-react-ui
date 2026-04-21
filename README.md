# @react/ui

Reusable React UI primitives, fields, elements, and layouts for application dashboards.

## Runtime Usage

```tsx
import { Button, Page, Table } from '@react/ui';
import '@react/ui/styles.css';
```

Consumers do not need to configure Tailwind. The package ships compiled CSS at `@react/ui/styles.css`.

## Storybook Usage

The published package includes the Storybook source and the prebuilt static Storybook.

- Source stories: `stories/*.stories.tsx`
- Exact usage snippets: `stories/story-source.ts`
- Bot-screen recipes: `stories/bot-recipes.stories.tsx`
- Storybook config: `.storybook`
- Static build: `storybook-static`

To run the package Storybook from a source checkout or extracted package:

```bash
yarn install
yarn storybook
```

To regenerate the static Storybook:

```bash
yarn build:storybook
```

`yarn pack` runs `yarn build && yarn build:storybook` before creating the package archive, so the shipped `dist` and `storybook-static` folders stay in sync with source.
