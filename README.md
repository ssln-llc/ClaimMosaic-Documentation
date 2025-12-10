# ClaimMosaic Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This is the official documentation site for ClaimMosaic, a comprehensive claims management system. Built with [Astro Starlight](https://starlight.astro.build/), this documentation provides detailed guides, tutorials, and reference materials for using ClaimMosaic effectively.

## 📋 Documentation Sections

- **Getting Started** - Account setup, FAQ, and pricing tiers
- **Dashboard** - User and admin dashboards, widgets, and activities
- **Mosaic View** - Calendar, boards, and map views
- **Claims** - Complete claims management workflow
- **Leads** - Lead management and conversion processes
- **Contacts & Companies** - Contact and company management
- **Tasks & Reports** - Task management and reporting features
- **Settings** - System configuration and administration

## 🚀 Project Structure

```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── claims/
│   │   │   ├── dashboard/
│   │   │   ├── getting-started/
│   │   │   ├── leads/
│   │   │   ├── mosaic-view/
│   │   │   ├── settings/
│   │   │   └── ...
│   │   └── content.config.ts
├── astro.config.mjs
├── package.json
├── wrangler.jsonc
└── tsconfig.json
```

## 🛠️ Development Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm, pnpm, or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ClaimMosaic-Documentation
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 🧞 Available Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🌐 Deployment to Cloudflare

This project is configured to deploy to Cloudflare using the `@astrojs/cloudflare` adapter. Follow these steps to deploy:

### Using Cloudflare Pages (Recommended)

1. **Connect to Cloudflare Pages:**
   - Log in to your [Cloudflare dashboard](https://dash.cloudflare.com/)
   - Go to Pages and connect your GitHub repository
   - Set build command: `npm run build`
   - Set build output directory: `dist`

2. **Environment Variables:**
   Configure any necessary environment variables in the Cloudflare Pages dashboard.

### Using Cloudflare Workers (Alternative)

1. **Install Wrangler CLI:**
```bash
npm install -g wrangler
```

2. **Authenticate with Cloudflare:**
```bash
wrangler login
```

3. **Update wrangler.jsonc (if needed):**
```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "claimmosaic-docs",
  "compatibility_date": "2025-05-28",
  "assets": {
    "directory": "./dist"
  }
}
```

4. **Build and Deploy:**
```bash
npm run build
wrangler pages deploy dist
```

### Local Preview with Wrangler

To test the Cloudflare environment locally:

```bash
# Build the project
npm run build

# Preview with Wrangler
npx wrangler pages dev ./dist
```

### Custom Domains

To use a custom domain:
1. Add your domain in the Cloudflare Pages dashboard
2. Update your DNS settings to point to Cloudflare
3. Configure SSL/TLS settings as needed

## 📝 Content Management

### Adding New Documentation

1. Create new `.md` or `.mdx` files in `src/content/docs/`
2. Follow the existing directory structure for organization
3. Update `astro.config.mjs` sidebar configuration if adding new sections
4. Use Starlight's frontmatter for page metadata:

```markdown
---
title: Page Title
description: Page description for SEO
sidebar:
  order: 1
---

# Content goes here
```

### Content Guidelines

- Use clear, descriptive headings
- Include code examples where relevant
- Add screenshots for UI elements
- Follow consistent formatting and style
- Test all links and references

## 🔧 Customization

### Styling
- Custom CSS can be added in `src/assets/`
- Starlight provides built-in theming options
- Override default styles through the Starlight configuration

### Configuration
- Main configuration in `astro.config.mjs`
- Content collection configuration in `src/content.config.ts`
- Deployment configuration in `wrangler.jsonc`

## 🐛 Troubleshooting

### Common Issues

1. **Build errors:** Check Node.js version compatibility
2. **Deployment issues:** Verify Cloudflare account permissions
3. **Content not appearing:** Check file paths and frontmatter syntax
4. **Styling issues:** Clear cache and rebuild

### Getting Help

- Check [Astro documentation](https://docs.astro.build)
- Review [Starlight documentation](https://starlight.astro.build/)
- Consult [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/)

## 📄 License

[Add your license information here]

## 🤝 Contributing

[Add contribution guidelines here]
