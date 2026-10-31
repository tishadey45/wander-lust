<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# wander-lust

Next.js 16 (App Router) + React 19 + TypeScript (strict), `src/` layout with `@/*` → `./src/*`. Still scaffold state: the only route is `src/app/page.tsx` (empty), root metadata in `layout.tsx` is still the create-next-app default; no tests, no CI, no env vars. Design images live in `public/assets/`.

## Commands

- `npm run dev` — Turbopack dev server (http://localhost:3000)
- `npm run build` — production build; most reliable way to typecheck (no `typecheck` script exists)
- `npm run lint` — ESLint 9 flat config (`eslint.config.mjs`, eslint-config-next core-web-vitals + TS)
- `npx tsc --noEmit` — typecheck; requires `.next` types, so run after `next dev`/`next build` has executed at least once
- No test framework is installed — don't guess test commands.

## next.config.ts flags (change how you write code)

- `cacheComponents: true` — Next 16 data access model: any uncached fetch must happen inside a `<Suspense>` boundary; wrap slow reads with a `loading.tsx`/`<Suspense>` or mark them with `use cache`.
- `reactCompiler: true` — the React Compiler auto-memoizes; do NOT hand-write `useMemo`/`useCallback`/`React.memo` for performance. Components must follow the Rules of React strictly (pure render, no side effects) since compiler assumptions apply.
- Tailwind v4 runs through Turbopack (`@tailwindcss/turbopack` rule in next.config.ts). Do **not** add a `postcss.config.*` or `tailwind.config.*`.

## Styling (Tailwind v4, CSS-first)

- All theme config lives in `src/app/globals.css` via `@theme inline` + CSS variables; there is no JS/TS tailwind config file. Edit tokens there.
- Dark mode is class-based (`@custom-variant dark (&:is(.dark *))`), toggled by a `.dark` class on `<html>`.

## UI components (shadcn, "base-nova" style)

- Primitives are **`@base-ui/react`, not Radix** — component APIs/prop names differ from classic shadcn. Read the existing file for the prop shape instead of assuming Radix conventions.
- Pre-installed set lives in `src/components/ui/`, one component per file, using the `data-slot` pattern and `cn` imported from the **`cn` package** (not `@/lib/utils`).
- Manage components via components.json aliases (`@/components`, `@/components/ui`, `@/lib`, `@/hooks`): `npx shadcn add <component>` for new ones; don't hand-roll what a registry provides.
- Icons: `lucide-react`. Utility/hook helpers: `src/lib/`, `src/hooks/`.

## Prepared but unwired

- Syntax highlighting is pre-built but not imported anywhere yet: `src/lib/highlighter.tsx` (shiki core + **manual language registry** — new languages need an import added there) driven by `src/hooks/use-highlighted-code.ts`. Reuse these instead of installing a second highlighting solution.
