# Implementation and README Gap Audit

This audit captures the usability gaps found during the current rescan and the fixes applied to make `@react/ui` easier to consume.

## Gaps Found

The package had a strong component surface but weak onboarding:

- README showed only a tiny import example.
- Page, GridLayout, DynamicPanel, and Table usage had to be inferred from Storybook.
- Accent creation required knowing the internal `accents` provider shape.
- Package docs were not included in `package.json` files.
- The source structure rules were not written down for future contributors.
- Some public surfaces still used hard-coded dark text classes, making light accents feel inconsistent.

## Implementation Fixes

Accent helpers were added:

- `resolveAccentTokens`
- `createAccentTokens`
- `createAccentPresets`

These helpers make it possible to extend built-in accents without copying all token values.

Light-accent compatibility was improved for common surfaces:

- `PageHeader` now uses text tokens for title and description.
- `GridLayout` panel headers now use background, border, and text tokens.
- `Button` disabled styling now uses theme tokens.
- `Text`, `TextArea`, `NumberInput`, and `SelectBox` labels now use text tokens.

Package shipping was improved:

- `docs` is included in the package `files` list.
- README now links to detailed guides.
- API reference docs are generated from TypeScript declarations with `yarn docs:api`.
- GitHub Pages publishes Markdown docs and static Storybook on pushes to `main`.

## Documentation Fixes

New docs explain:

- installation and first render.
- source folder responsibilities.
- Page shell usage.
- GridLayout and DynamicPanel behavior.
- Table state, filters, grouping, expansion, selection, resizing, reordering, and persistence.
- accent creation and token naming.
- how to add new components safely.
- how to migrate bot-local wrappers to `@react/ui` while keeping domain logic in the app.

## Remaining Recommendations

These are useful follow-up improvements, but not blockers for basic use:

- Add recipe pages for each real consuming app screen.
- Add more light-accent visual regression coverage in Storybook.
- Add a checklist to pull requests that blocks hard-coded color classes unless justified.
