# Portfolio Site

A portfolio website built with modern frontend technology, delivered through an iterative MVP approach 🚀. Content currently managed via local markdown files—an agile starting point that inspired the design system's file-explorer aesthetic 🗂️.

A portfolio website combining modern frontend tech with agile MVP principles 🚀. Starting with markdown-based content management shaped the design—a file-explorer interface that celebrates the simplicity of local files while building toward a headless architecture 🗂️.

A portfolio website built with modern frontend technology, delievered with an agile mvp, iterative and incremental approach 🚀. Inspired by classic file management applications such as Finder and File Explorer 🗂️.

A portfolio website built with modern frontend technology, delievered with an iterative and incremental agile approach 🚀. Content managed and statically generated from local markdown files. Inspired by this minimum viable product choice the design system has been shaped by classic file management applications such as Finder and File Explorer 🗂️.

**🔗 [Live Demo](https://mikaelsen-cunningham.github.io)** | **📋 [Roadmap](TODO.md)**

![Mac Finder UI Screenshot](/assets/docs/design-screenshot.png)

## About The Project

Actively developed with an iterative and agile approach, this portfolio project is a demonstration of the knowledge, skills and opinions I've developed in my [7+ years of experience in software development](/experience).

This portfolio takes an iterative approach to modern web architecture. Starting with markdown-based content management allowed for rapid MVP delivery while shaping a file-explorer-inspired design system that celebrates simplicity.

Future iterations will migrate to a headless CMS and external API. The current intention is that it will evolve into a fully decoupled MACH architecture.

[**Read more**](/projects/portfolio)

**Built With:**

- [Next.js](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/mikaelsen-cunningham/mikaelsen-cunningham.github.io.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
portfolio-site/
├── _site-content/        # Markdown content
│   ├── *.md              # Root pages (experience, etc.)
│   └── projects/             # Project posts
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   └── lib/              # Utilities
├── public/               # Static assets
└── TODO.md               # Project roadmap
```

---

## Content Management

Project posts and site content are written in Markdown with YAML front matter, stored in `_site-content/`:

```markdown
---
title: "Project Title"
date: "2025-01-29"
excerpt: "Brief description"
---

Post content here...
```

Add new `.md` files to `_site-content/project/` to create project posts.

---

## Roadmap

See [TODO.md](TODO.md) for detailed roadmap and current sprint.

**Current Focus:**

- ✅ Content creation and documentation
- 🔄 Gitflow implementation with GitHub Actions
- 📋 Multi-environment deployment setup
- 📋 External API migration (Phase 2)

---

## Contact

Robyn Mikaelsen-Cunningham - mikaelsen-cunningham@outlook.com

GitHub: [@mikaelsen-cunningham](https://github.com/mikaelsen-cunningham)

---

## Acknowledgments

- [Next.js Blog Starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)
- Design inspired by macOS Finder
- [Font Awesome](https://fontawesome.com/) for icons
