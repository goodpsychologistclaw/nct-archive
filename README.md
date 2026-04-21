# NCT Archive

This is a rebuilt website for preserving and browsing `data/nct-data-zh.json`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Features

- Homepage with archive metrics and data preservation notice
- Client-side search and province filter
- Static detail page for each institution
- Uses local JSON directly from `data/nct-data-zh.json`

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In GitHub repo settings:
3. Open `Settings` -> `Pages`.
4. Set `Source` to `GitHub Actions`.
5. Ensure your default branch is `main`.
6. Push changes to `main` to trigger deployment.

Workflow file:

- `.github/workflows/deploy.yml`

Notes:

- `astro.config.mjs` reads `SITE_URL` and `BASE_PATH` from environment variables.
- The workflow sets `BASE_PATH` automatically:
- `/` for `username.github.io` repositories
- `/<repo-name>/` for normal project repositories
