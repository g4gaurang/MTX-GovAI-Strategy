# MTX Enterprise AI Strategy \& Activation

An interactive, static website prototype presenting MTX Enterprise AI Strategy \& Activation as a repeatable strategy\-to\-implementation service for government agencies.

## Local setup

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Vite prints the local URL after startup.

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist`. Vite uses a relative base path so built assets resolve from a GitHub Pages repository subdirectory.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys `dist` on pushes to `main` and supports manual runs.

In the repository settings:

* Open **Settings → Pages**.
* Under **Build and deployment**, select **GitHub Actions** as the source.
* Push to `main` or run the workflow manually.

## Content and data

Repeated content and illustrative portfolio data are stored in `src/data/content.ts`. Shared TypeScript models are in `src/types/index.ts`. Interactive page components are composed in `src/App.tsx`, and design tokens and responsive styles are in `src/styles/app.css`.

To replace illustrative data, update the relevant typed arrays in `src/data/content.ts`. Keep visible illustrative labels beside sample metrics and portfolio metadata.

## Contact link

The workshop call to action uses the placeholder email `enterprise-ai@mtxb2b.com`. Update `contactLink` and the email links in `src/App.tsx` when an approved MTX contact destination is available.
