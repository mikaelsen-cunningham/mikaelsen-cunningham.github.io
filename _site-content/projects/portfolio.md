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

Building Iteratively: From Markdown MVP to Headless Architecture // come up with something different
//maybe
Why I'm using Next.js and Markdown files to build a statically generated site

## Overview

This portfolio is a living codebase—currently in active development with a clear architectural vision. Rather than spending months building the "perfect" tech stack upfront, I'm taking an iterative approach: ship working software quickly, validate core assumptions, then evolve the architecture based on real needs.

I've been fortunate to work on projects long enough to see my own "good decisions" create maintenance headaches years later, and to learn better frameworks from developers far more experienced than me. Not every developer gets the opportunity to stay with a codebase through greenfield excitement into long-term reality, or to work alongside people who've already made (and recovered from) those mistakes.

My goal is to share what I've learnt in my experience as a software develop, yes in the odd blog post or side project, but moreover in the public practice of this project's evolutionary architecture. Decisions documented, trade-offs are visible, reasoning is explicit. Follow real options thinking: defer commitments until the last responsible moment, choose foundations that serve multiple futures.

Unsure why, it could be the dsylexia, but I have developed a tendency to use my personal interests to explain software development principles and methologies. Explaining SOLID via an esspresso machine, cooking philosophies as analogies for KISS (keep it simple, stupid) and YAGNI (you arent going to need it). So I hope you excuse me as, to me, evolutionary architecture is very reminecent of the collaberative story telling found in TTRPGs (table top role playing games) like dungeons and dragons.

Next.js unlocks many directions; markdown defers the API question until needed. Don't build for imaginary requirements, but don't paint yourself into corners either.

The end goal is a fully decoupled MACH architecture (Microservices, API-first, Cloud-native, Headless) with external content management and modular services. But getting there starts with the simplest thing that works: local markdown files and static site generation.

No end goal.

Goal is as such to curate a space that demonstrates my interests, learnings and achievements

There is not a singular tech stack or archectural

So much of my professional team work is taking a set of requirements and balancing realising them in the best possible way with a finite amount of time. Finishing is a more achievable goal than perfection but one of my flaws when working on my own is that I aim for perfection when I should be aiming for a release.

This portfolio is an excerise in granular incremental improvements,

As such the decision I've made have been informed by the question what is the smallest effort change I can make with the biggest impact. This applies to the stack but it also carries over to how content is managed, the design of the site and user experience of the site.

so to recap the desicion process for this site follows a set of critera

- does the technology interest me? it could be a technology I am familiar with and enjoy using or it could be a technology that I like the look of and want to explore further
- what is the effort of setting up this technology vs interating on it? for example; if a solution is very flexible and can be used with multiple iteratations but takes some effort setting up to do so then it is worth it, conversly if a solution isnt flexible at all but the implementation is non-consequential then it is also worth it
- these two points intersect. if a technology is familiar to me and I have the experience with their pros and cons then I will be more lenient with the effort involved to work with it. for instance next.js isnt the smallest change I could make to generate a static site like this one. In the current implementation there are not that many reusable components and the archeture is not that complex that I could not achieve the same output, potentially faster and deliever a lighter package by writing raw html and css code. However, I know with my long term iteration goals such a stripped back solution would not surfice long I would need to opt for a framework like next. As such it makes sense to invest that time at the top of the project to save from a heavy rewriting later in the project. Conversely, I know I will replace the markdown content files that live within the repo with external apis that are consumed in the project, which might not even serve markdown content. However, the set up of the markdown files is a small effort and by following solid principles i will be able to easily refactor out the markdown files into an api output.
- to make these conssessions there must be some long term goal. A valid critism of my approach would be that I am over engineering by making the choice to use next. I am building a static site and, as such, the smallest change would be to host html and css files on github pages. Fair! With long term goals, I am able to make choices that are benefical in the long term. Distinguishing engineering choices that serve multiple futures vs ones that serve a singular future is my method to resolve this tension between a vague long term goal and imidiate requuirements delievered incrementally. The idea today of what one wants a site to be shouldnt force technology decisions that imped the decisions made tomorrow. However I dont believe that then means we do away with planning of any kind or smart ideas. Its a case of harm/risk reduction. A technology choice for the long term must have a level of flexibility as to serve different versions of what the site might be. This doesnt mean that it serves every potentiality, thats not possible, but we must try and measure how many futures it can serve and the risk in the choice is does this cover enough futures with reasonable effort, as such, if we do land on a scenario that it does not serve the implementation effort has not outweighed the risk effort. what I mean here is that maybe there is some custom framework I couldve written that would reduce the risk of being removed so much that we could highly granuntee it would never need to be changed and always serve the purposes of the site. The likely hood is such an implementations effort to execute could be great. now is that great effort worth the risk that we need that level of flexibility? what is the chance that this site changes so much that such a flexible solution would serve those scenearios and is the effort required to get that flexibility realitically smaller than it would be to simply rewrite the solution?

## Current Implementation: Markdown-First Content // markdown first is too narrow a lense of what this implementation is

Right now, content lives in local markdown files committed directly to the repository:

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

Next.js processes these at build time:

```typescript
export async function getStaticProps() {
  const posts = getAllPosts(["title", "date", "slug", "content"]);
  return { props: { posts } };
}
```

This approach delivers:

- **Fast deployment**: No CMS setup, no database, no API infrastructure
- **Version control**: Every content change is a git commit
- **Performance**: Static generation means sub-100ms page loads
- **Developer velocity**: Edit markdown files directly in VS Code

The markdown-first implementation isn't a limitation—it's a deliberate MVP choice that lets me validate UX patterns and content structure before investing in complex infrastructure.

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
