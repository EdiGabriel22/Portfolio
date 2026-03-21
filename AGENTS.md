# Repository Guidelines

## Project Structure & Module Organization
- `app.vue` is the root app shell; route-based views live in `pages/`.
- `components/` holds shared Vue components; `components.json` configures shadcn-nuxt components.
- `assets/` stores processed assets (fonts, styles); `public/` contains static files served as-is.
- `lib/` contains utilities/composables; `server/` contains server routes or API handlers.
- Core config lives in `nuxt.config.ts`, `tailwind.config.js`, and `tsconfig.json`.

## Build, Test, and Development Commands
- `yarn install` installs dependencies (preferred; lockfile is `yarn.lock`).
- `yarn dev` starts the Nuxt dev server at `http://localhost:3000`.
- `yarn build` builds the app for production.
- `yarn preview` runs a local preview of the production build.
- `yarn generate` generates static output (if deploying as static).
- `yarn start` runs the production server after `yarn build`.

## Coding Style & Naming Conventions
- Vue SFCs in `components/` and `pages/` use 2-space indentation.
- In Vue SFCs, keep blocks in the order `<template>`, `<script>`, then `<style>`.
- Prefer PascalCase filenames and `<Header/>` style component usage.
- Use Tailwind utility classes for styling; avoid inline styles unless necessary.
- No formatter/linter is configured, so keep formatting consistent with existing files.

## Testing Guidelines
- No test framework is configured yet. If you add one, place tests in `tests/` or `__tests__/` and document the command in `package.json`.
- Favor component/unit tests for Vue logic, and keep tests close to the feature they validate.

## Commit & Pull Request Guidelines
- Commit messages follow a Conventional Commit pattern such as `feat: short description` (recent history uses `feat:` in Portuguese). Keep the type prefix (`feat`, `fix`, `chore`, `docs`) and a concise summary.
- PRs should include a brief description of changes, link relevant issues, and attach screenshots or short clips for UI changes.
- Keep PRs focused; split refactors from feature work when possible.
