# SO Miso Apps Documentation

📚 Official documentation for SO Miso Apps, built with [Docusaurus](https://docusaurus.io/).

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- pnpm (recommended) or npm/yarn

### Installation

Install dependencies using pnpm:

```bash
pnpm install
```

### Local Development

Start the development server:

```bash
pnpm start
```

This command starts a local development server at `http://localhost:3000` and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

Generate static content for production:

```bash
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve Build Locally

Test the production build locally:

```bash
pnpm serve
```

## 📁 Project Structure

```
so-sticky-add-to-cart/   # SO Sticky Add to Cart docs
├── index.md
├── changelog.md
└── uninstall.md

docs/                    # Documentation source files
├── index.md            # Homepage content

src/                    # React components and custom pages
├── components/         # Reusable components
├── css/               # Global styles
└── pages/             # Custom pages

static/                # Static assets (images, files)
└── img/

docusaurus.config.ts   # Docusaurus configuration
sidebars.ts            # Sidebar navigation structure
```

## 📝 Adding Documentation

1. Create or edit markdown files in the `docs/` directory
2. Update `sidebars.ts` if adding new sections
3. Test locally with `pnpm start`
4. Build and deploy

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm start` | Start development server |
| `pnpm build` | Build for production |
| `pnpm serve` | Serve production build locally |
| `pnpm clear` | Clear Docusaurus cache |
| `pnpm deploy` | Deploy to GitHub Pages |

## 🚢 Deployment

### Deploy to GitHub Pages

Using SSH:

```bash
USE_SSH=true pnpm deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> pnpm deploy
```

This command builds the website and pushes to the `gh-pages` branch.

## 📖 Learn More

- [Docusaurus Documentation](https://docusaurus.io/)
- [Markdown Features](https://docusaurus.io/docs/markdown-features)
- [Docusaurus TypeScript Support](https://docusaurus.io/docs/typescript-support)

## 📄 License

Copyright © 2025 SO Miso Apps
