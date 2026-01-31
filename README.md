# Portfolio Site

A portfolio website featuring a Mac Finder-inspired design system, built as an iterative showcase of modern frontend development practices.

**🔗 [Live Demo](https://mikaelsen-cunningham.github.io)** | **📋 [Roadmap](TODO.md)**

![Mac Finder UI Screenshot](/assets/docs/design-screenshot.png)

## About The Project

This portfolio site demonstrates frontend development expertise through a unique Mac Finder-inspired interface. It's built as a working showcase that evolves with new features, following industry best practices for component architecture, responsive design, and accessibility.

**Built With:**

- [Next.js](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

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
