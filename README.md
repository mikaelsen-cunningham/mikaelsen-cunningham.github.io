# Portfolio Site

A portfolio website built with modern frontend technology, delivered through an iterative MVP approach 🚀. Content currently managed via local markdown files—an agile starting point that inspired the design system's file-explorer aesthetic 🗂️.

![Mac Finder UI Screenshot](/assets/docs/design-screenshot.png)

**🔗 [View Live Demo](https://mikaelsen-cunningham.github.io)**

## About

Actively developed with an iterative and agile approach, this portfolio project is a demonstration of the knowledge, skills and opinions I've developed in my [7+ years of experience in software development](/experience).

This is a living portfolio project—actively developed with an iterative approach to modern web architecture. The full backlog can be found here: [Site Roadmap](/site-roadmap).

**Current implementation** uses local markdown files for content management, enabling rapid deployment and version-controlled updates. This deliberate MVP choice validates core UX patterns and technical decisions before investing in complex infrastructure. The file-based content structure directly inspired the design system: a file-explorer interface that celebrates simplicity while remaining flexible enough to scale.

**Where it's going:** Future phases will introduce a headless CMS, external API layer, and MACH-style architecture (Microservices, API-first, Cloud-native, Headless). Each iteration builds on validated decisions from the previous one—working software ships first, complexity follows when justified by real needs. Read more about this project's decision making and architectural philosophy here: [Portfolio Project - Building for incremental evolution](/projects/portfolio)

**Built With:**

- [Next.js](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

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

## Roadmap

See [TODO.md](TODO.md) for detailed roadmap and current sprint.

**Current Focus:**

- ✅ Content creation and documentation
- 🔄 Gitflow implementation with GitHub Actions
- 📋 Multi-environment deployment setup
- 📋 External API migration (Phase 2)

## Contact

Robyn Mikaelsen-Cunningham - mikaelsen-cunningham@outlook.com

GitHub: [@mikaelsen-cunningham](https://github.com/mikaelsen-cunningham)
