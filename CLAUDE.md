# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Prompt Genie is a React frontend application for improving AI prompts through an "evolution" workflow — users configure a model, goal, and prompt, then run generations to compare and refine results over time.

## Commands

All commands run from `frontend/`:

```bash
pnpm dev        # Start dev server (Vite)
pnpm build      # Production build
pnpm lint       # ESLint
pnpm preview    # Preview production build
```

Package manager is **pnpm** (see `pnpm-workspace.yaml`).

## Architecture

The app is a single-page React 19 app with two main screens, toggled via `ScreenContext`:

- **Current Generation** — side-by-side layout: `PromptArena` (left, prompt comparison view) + `GenerationConfig` (right panel, collapsible). Config panel holds model selection, goal, and user prompt inputs; shows "Run Evolution" / "Regenerate" buttons when config has unsaved changes (local dirty-state pattern using two copies of config in state).
- **Evolution Graph** — `GraphViewer` (main area) + `PromptDetails` (right panel). Currently stubbed.

**Layout**: `App` is a fixed two-column grid (`280px sidebar | 1fr workspace`). `Workspace` is a `grid-rows-[64px_1fr] grid-cols-[1fr_350px]` — navbar spans both columns, content area splits main + right panel.

**State management**: No global store. `ScreenContext` (`src/context/ScreenContext.jsx`) is the only context, providing `currScreen` / `setCurrScreen`. Everything else is local `useState`.

**Screen routing**: `SCREENS` in `Constants.js` is the single source of truth for screen names. `Navbar` iterates `Object.keys(SCREENS)` to render `NavButton`s; `Workspace` switches on `currScreen`.

## Styling

Tailwind CSS v4 via `@tailwindcss/vite` plugin (no `tailwind.config.js` — config is inline in `index.css`).

Custom design tokens are defined in `index.css` under `@theme`:
- **Surfaces** (dark purple scale): `surface-base`, `surface-low`, `surface-high`, `surface-highest`
- **Colors**: `primary` (#7b3aec), `primary-highlight`, `outline`, `neutral-text`, `on-surface`

Reusable typography classes defined in `@layer components`: `heading-primary`, `heading-secondary`, `subheading`, `subheading-variant`, `paragraph-primary`. Use these instead of raw Tailwind text utilities for text.

## Key Components

- `SearchableDropdown` — controlled dropdown with live search filter and click-outside close. Props: `value`, `options` (string[]), `onChange`, `placeholder`.
- `LongInput` — auto-sized textarea for multi-line text input. Props: `value`, `onChange`.
- `GenerationConfig` — tracks a "committed" config object separately from input state to detect dirty state and conditionally show action buttons.
