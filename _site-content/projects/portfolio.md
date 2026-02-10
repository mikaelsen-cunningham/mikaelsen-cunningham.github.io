---
title: "Portfolio"
excerpt: "A celebration of agile methodologies and minimum viable product focused feature development."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2026-01"
author:
  name: R Mikaelsen-cunningham
  picture: "/avatar.png"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

# Portfolio

Why I'm using Next.js and Markdown files to build a statically generated site

## Overview

This portfolio is a living codebase, in active development. Rather than spending months building the "perfect" tech stack upfront, I'm taking an iterative approach: ship working software quickly, validate core assumptions, then evolve the architecture based on real needs.

I've been fortunate to work on projects long enough to see my own "good decisions" create maintenance headaches years later, and to learn better frameworks from developers far more experienced than me. Not every developer gets the opportunity to stay with a codebase through greenfield excitement into long-term reality, or to work alongside people who've already made (and recovered from) those mistakes.

My goal is to share what I've learned in my experience as a software developer, yes in the odd blog post or side project, but more importantly in the public practice of this project's evolutionary architecture. Decisions are documented, trade-offs are visible, reasoning is explicit. The approach follows real options thinking: defer commitments until the last responsible moment, choose foundations that serve multiple futures.

## Current Implementation

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Markdown for content management, deployed with Github Pages

**Why these choices?**

**TypeScript + Tailwind:** Modern, productive tooling I use professionally. Familiar tools reduce cognitive overhead, letting me focus on architecture and content rather than fighting unfamiliar syntax.

**Github Pages:** GitHub already stores the code and manages the content, so hosting there removes an unnecessary dependency. GitHub Pages handles static site deployment with zero configuration, and switching to Vercel later takes minutes if requirements change. Keep it simple until complexity is justified.

**Local Markdown files:** The simplest content solution that works right now. No external dependencies, easy to version control, straightforward to replace when (if) external APIs become necessary. This is YAGNI in action—defer the complexity until it's actually needed.

```typescript
// Content structure with frontmatter
---
title: "Building Iteratively"
date: "2026-01-31"
excerpt: "From markdown MVP to headless architecture"
tags: ["architecture", "agile"]
---

Content here...
```

**Next.js:** Familiar framework that unlocks multiple architectural futures (SSG today, SSR tomorrow, API routes when needed) without locking me into any single approach. The initial setup cost is higher than raw HTML, but the long-term flexibility and iteration speed make it the simpler choice over the project's lifetime.

Next.js processes the markdown files at build time:

```typescript
const { slug } = await params;
const project = getProjectBySlug(slug);

if (!project) {
  return notFound();
}

const content = await markdownToHtml(project.content || "");
```

This approach delivers:

- **Fast deployment**: No CMS setup, no database, no API infrastructure
- **Version control**: Every content change is a git commit
- **Performance**: Static generation means sub-100ms page loads
- **Developer velocity**: Edit markdown files directly in VS Code

**What's deliberately simple:** No CMS, no database, no authentication, no external APIs. This implementation isn't a limitation—it's a deliberate MVP choice that lets me validate UX patterns and content structure before investing in complex infrastructure. Further complexity might come later when requirements demand them, but adding them now would be premature optimization for uncertain futures.

**What's built for evolution:** Component architecture follows SOLID principles. Content is abstracted behind interfaces that can swap markdown for API responses without touching consuming components. The deployment pipeline is already production-grade, ready to scale when traffic or features demand it.

## Design System: Celebrating the File Structure

Since content is organized as files, the interface embraces this structure rather than hiding it. The design system draws directly from classic file management applications (macOS Finder, Windows File Explorer), creating a familiar browsing experience:

- Clean, minimalist navigation
- Hierarchical folder structure
- Breadcrumb navigation patterns
- Metadata display (dates, tags)
- List and grid view toggles

This file-explorer aesthetic isn't just visual—it's functional. Users instinctively understand how to navigate a file browser. The cognitive load is near zero. And crucially, this interface pattern will scale when the underlying content source evolves from local files to API-driven data.

## The Vision: Evolving to Headless Architecture

The roadmap is structured in phases, with each building on validated decisions from the previous one:

### Phase 1: Markdown MVP (Current)

- Local markdown files
- Static site generation
- File-explorer UI
- Core UX patterns established

### Phase 2: Hybrid Architecture (Next)

- Introduce headless CMS alongside markdown files
- Implement content API layer with Next.js API routes
- Add caching to preserve performance
- Extend file-explorer UI for both data sources

### Phase 3: Full MACH Architecture (Planned)

- Decouple frontend into standalone Next.js application
- Migrate all content to headless CMS
- Build separate API service
- Implement edge caching (Cloudflare Workers, Vercel Edge)
- Add microservices for specific features

### Phase 4: Extended Capabilities (Future)

- Real-time content previews
- Multi-user collaboration
- Advanced search
- Automated workflows

**Guiding principle:** Each phase must justify itself with measurable improvements. Features are added when needed, not because the technology is interesting.

## Why This Approach Works

Building iteratively means shipping value early while learning continuously:

**What's working:**

- Markdown-based content is faster to update than CMS admin panels
- Static generation delivers exceptional performance
- The file-browser metaphor provides natural organizing principles
- Git-based workflow keeps content auditable and versionable

**What needs improvement:**

- Non-technical contributors can't easily add content
- No dynamic content capabilities
- Limited content relationships and metadata

These insights directly inform the roadmap. The headless migration isn't about adopting new technology—it's about solving specific, validated problems.

## Current Technical Stack

**Foundation:**

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Deployed on Vercel

**Content:**

- Markdown with frontmatter (gray-matter)
- Remark + Remark-HTML for processing
- Static site generation

**Coming Soon:**

- Headless CMS (evaluating Sanity, Contentful, Strapi)
- Redis caching layer
- Next.js API routes
- Hybrid content strategy

## Living Documentation

_This is a living document—last updated January 2026. Follow the project's evolution on [GitHub](https://github.com/mikaelsen-cunningham) or connect on [LinkedIn](https://www.linkedin.com/in/robyn-m-569293136/)._
