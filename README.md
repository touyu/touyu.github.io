# touyu.me

Personal site built with Vite + React + styled-components.

## Requirements
- Node v18.x

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build    # type-check + build to dist/
npm run preview  # preview the production build locally
```

## Deployment & Hosting
- GitHub Pages. Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys `dist/`.
