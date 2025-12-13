# Techweighten

A modern React + TypeScript website for Techweighten, built with Vite, Tailwind CSS, and shadcn/ui. It includes a homepage and dedicated pages for About, Services, Projects, Team, and Contact — all wired with client-side routing and reusable UI components.

## Features
- Fast dev/build tooling with `Vite` and React 18
- Type-safe components in `TypeScript`
- Utility-first styling via `Tailwind CSS`
- Reusable UI primitives from `shadcn/ui` (Radix-based)
- Client-side routing with `react-router-dom`
- Toasts, tooltips, and helpful UI providers preconfigured

## Tech Stack
- React, TypeScript, Vite
- Tailwind CSS, tailwindcss-animate
- shadcn/ui (Radix UI)
- React Router
- TanStack Query (for data fetching and caching)

## Getting Started
Prerequisites:
- Node.js 18+ and npm installed

Install and run:
```sh
npm install
npm run dev
```
The dev server runs on `http://localhost:8080` (configured in `vite.config.ts`).

Build and preview:
```sh
npm run build
npm run preview
```
`preview` serves the built `dist/` folder locally.

Lint:
```sh
npm run lint
```

## Available Scripts
- `npm run dev` – start the development server
- `npm run build` – production build to `dist/`
- `npm run build:dev` – development-mode build
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint on the project

## Routing
Paths are defined in `src/App.tsx`:
- `/` → `Index` (home)
- `/about` → `About`
- `/services` → `Services`
- `/projects` → `Projects`
- `/team` → `Team`
- `/contact` → `Contact`

## Project Structure
```
src/
  assets/           # Images and media
  components/       # Page sections and shared components
    ui/             # shadcn/ui primitives
  hooks/            # Custom hooks
  lib/              # Utilities
  pages/            # Route components
public/             # Static files
```

## UI Components
Reusable primitives live under `src/components/ui/` and include buttons, cards, dialogs, forms, tables, toasts, tooltips, and more. These are built on Radix UI and styled with Tailwind for consistency and accessibility.

## Deployment
- Run `npm run build` to generate the `dist/` folder
- Deploy `dist/` to any static host (Vercel, Netlify, GitHub Pages, Nginx, etc.)

## Contributing
- Use feature branches and open pull requests
- Run `npm run lint` before submitting changes
