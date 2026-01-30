# Portfolio Site Roadmap

## Overview

This document tracks all outstanding work items for the project, organized by type and linked to parent epics where applicable.

### Status Legend

- ☐ = Todo (not started)
- ⊡ = In Progress (currently working on)
- ☑ = Done (completed)

---

## 📋 Epics

| Status | Issue | GitHub Issue | Title                                      | Description                                                                                     |  Estimate   | Tasks  |
| :----: | :---: | :----------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- | :---------: | :----: |
|   ⊡    |  #1   |   [Link]()   | Content Creation and Documentation         | Create all written content for the site including README, blog posts, and project documentation |   10-14h    |  #2-5  |
|   ☐    |  #13  |   [Link]()   | Gitflow Implementation with GitHub Actions | Implement complete gitflow branching strategy with automated workflows                          |   12-16h    | #14-20 |
|   ☐    |  #21  |   [Link]()   | Multi-Environment Deployment               | Set up separate deployment environments with preview capabilities                               |    8-14h    | #22-28 |
|   ☐    |  #29  |   [Link]()   | External API Migration (Phase 2)           | Move markdown files and JSON data to external API                                               | 9-12h + TBD | #30-36 |

**Total Epic Estimate:** 39-56 hours + TBD

---

## 📝 Tasks - Content Creation Epic (#1)

| Status | Issue | GitHub Issue | Title                                      | Description                                                     | Parent | Estimate | Dependencies |
| :----: | :---: | :----------: | ------------------------------------------ | --------------------------------------------------------------- | :----: | :------: | :----------: |
|   ⊡    |  #2   |   [Link]()   | Write README content                       | Create comprehensive README.md with overview, setup, tech stack |   #1   |   2-3h   |      -       |
|   ☐    |  #3   |   [Link]()   | Implement README rendering on homepage     | Add markdown parser and render README on homepage               |   #1   |   3-4h   |      #2      |
|   ☐    |  #4   |   [Link]()   | Write blog post - Tech decisions           | Document architecture decisions, purpose, and learnings         |   #1   |   3-4h   |      -       |
|   ☐    |  #5   |   [Link]()   | Write blog post - Non-fiction writers site | Blog post about other website project                           |   #1   |   2-3h   |      -       |

**Subtotal:** 10-14 hours

---

## 🔧 Tasks - Code Improvements (No Epic)

| Status | Issue | GitHub Issue | Title                          | Description                                         | Parent | Estimate | Dependencies |
| :----: | :---: | :----------: | ------------------------------ | --------------------------------------------------- | :----: | :------: | :----------: |
|   ☐    |  #6   |   [Link]()   | Audit file naming conventions  | Review codebase and document naming inconsistencies |   -    |   1-2h   |      -       |
|   ☐    |  #7   |   [Link]()   | Standardize file naming casing | Rename files to follow convention, update imports   |   -    |   4-6h   |      #6      |

**Subtotal:** 5-8 hours

---

## ✨ Tasks - Features Phase 1 (No Epic)

| Status | Issue | GitHub Issue | Title                                 | Description                                    | Parent | Estimate | Dependencies |
| :----: | :---: | :----------: | ------------------------------------- | ---------------------------------------------- | :----: | :------: | :----------: |
|   ☐    |  #8   |   [Link]()   | Design footer structure and content   | Define footer sections, content, and layout    |   -    |   1-2h   |      -       |
|   ☐    |  #9   |   [Link]()   | Implement footer component            | Build responsive footer component              |   -    |   3-4h   |      #8      |
|   ☐    |  #10  |   [Link]()   | Create GitHub API integration service | Set up service to fetch issues from GitHub API |   -    |   4-5h   |      -       |
|   ☐    |  #11  |   [Link]()   | Build issues display component        | Create UI to display active issues with status |   -    |   3-4h   |     #10      |
|   ☐    |  #12  |   [Link]()   | Implement dynamic root navigation     | Replace hardcoded nav with dynamic function    |   -    |   3-4h   |      -       |

**Subtotal:** 14-19 hours

---

## ⚙️ Tasks - Gitflow Epic (#13)

| Status | Issue | GitHub Issue | Title                                      | Description                                                      | Parent | Estimate | Dependencies |
| :----: | :---: | :----------: | ------------------------------------------ | ---------------------------------------------------------------- | :----: | :------: | :----------: |
|   ☐    |  #14  |   [Link]()   | Document gitflow branching strategy        | Create docs for branch naming, merge strategies, PR requirements |  #13   |   1-2h   |      -       |
|   ☐    |  #15  |   [Link]()   | Create develop branch and protection rules | Set up develop branch with branch protection                     |  #13   |    1h    |      -       |
|   ☐    |  #16  |   [Link]()   | Build GitHub Action for feature branches   | Workflow for linting, tests, build validation                    |  #13   |   2-3h   |     #15      |
|   ☐    |  #17  |   [Link]()   | Build GitHub Action for develop branch     | Workflow for staging deployment with tests                       |  #13   |   3-4h   |     #15      |
|   ☐    |  #18  |   [Link]()   | Build GitHub Action for release branches   | Workflow for version bumping, changelog, testing                 |  #13   |   2-3h   |     #15      |
|   ☐    |  #19  |   [Link]()   | Build GitHub Action for main branch        | Production deployment with tags and releases                     |  #13   |   3-4h   |     #18      |
|   ☐    |  #20  |   [Link]()   | Create hotfix workflow                     | Emergency hotfix workflow for fast-track to prod                 |  #13   |   2-3h   |     #19      |

**Subtotal:** 12-16 hours

---

## 🌐 Tasks - Multi-Environment Epic (#21)

| Status | Issue | GitHub Issue | Title                                    | Description                                       | Parent | Estimate | Dependencies  |
| :----: | :---: | :----------: | ---------------------------------------- | ------------------------------------------------- | :----: | :------: | :-----------: |
|   ☐    |  #22  |   [Link]()   | Research preview environment options     | Compare GitHub Pages, Netlify, Vercel, Cloudflare |  #21   |   1-2h   |       -       |
|   ☐    |  #23  |   [Link]()   | Setup staging/dev deployment             | Configure separate deployment for develop branch  |  #21   |   2-3h   |      #22      |
|   ☐    |  #24  |   [Link]()   | Create GitHub Action for develop preview | Auto-deploy to staging on develop merge           |  #21   |   2-3h   |      #23      |
|   ☐    |  #25  |   [Link]()   | Implement PR preview deployments         | Ephemeral preview URLs for feature branch PRs     |  #21   |   2-3h   |      #23      |
|   ☐    |  #26  |   [Link]()   | Configure environment-specific settings  | Set up env vars and config for each environment   |  #21   |   1-2h   |      #24      |
|   ☐    |  #27  |   [Link]()   | Update issue auto-close workflow         | Manage issue lifecycle with gitflow properly      |  #21   |   2-3h   |      #24      |
|   ☐    |  #28  |   [Link]()   | Document deployment process              | Create docs for environments, workflow, rollback  |  #21   |   1-2h   | #24, #26, #27 |

**Subtotal:** 8-14 hours

---

## 🔬 Spikes

| Status | Issue | GitHub Issue | Title                                | Description                                       | Parent | Estimate | Time-box |
| :----: | :---: | :----------: | ------------------------------------ | ------------------------------------------------- | :----: | :------: | :------: |
|   ☐    |  #22  |   [Link]()   | Research preview environment options | Research and compare deployment options           |  #21   |   1-2h   |  2h max  |
|   ☐    |  #30  |   [Link]()   | External API architecture research   | Research API options, create POC, estimate effort |  #29   |   6-8h   |  8h max  |

---

## 🔮 Tasks - Phase 2 External API Epic (#29)

| Status | Issue | GitHub Issue | Title                                | Description                                        | Parent | Estimate | Dependencies |
| :----: | :---: | :----------: | ------------------------------------ | -------------------------------------------------- | :----: | :------: | :----------: |
|   ☐    |  #30  |   [Link]()   | SPIKE - External API architecture    | Research API options and create proof of concept   |  #29   |   6-8h   |      -       |
|   ☐    |  #31  |   [Link]()   | Design external API structure        | Design endpoints, data models, auth strategy       |  #29   |   3-4h   |     #30      |
|   ☐    |  #32  |   [Link]()   | Setup external API infrastructure    | Set up hosting, CI/CD, environment config          |  #29   |   TBD    |     #31      |
|   ☐    |  #33  |   [Link]()   | Migrate markdown files to API        | Move markdown content and implement endpoints      |  #29   |   TBD    |     #32      |
|   ☐    |  #34  |   [Link]()   | Migrate JSON data to API             | Move JSON data and implement endpoints             |  #29   |   TBD    |     #32      |
|   ☐    |  #35  |   [Link]()   | Update frontend to consume API       | Refactor frontend for API consumption with caching |  #29   |   TBD    |   #33, #34   |
|   ☐    |  #36  |   [Link]()   | Testing and performance optimization | E2E testing, performance testing, optimization     |  #29   |   TBD    |     #35      |

**Subtotal:** 9-12 hours + TBD (pending spike #30)

---

## 🏷️ Labels Guide

### Type Labels

- `epic` - Parent tracking issue
- `task` - Standard development work
- `spike` - Research/investigation
- `bug` - Something broken
- `enhancement` - Improvement to existing feature

### Domain Labels

- `ci-cd` - CI/CD and automation
- `devops` - Infrastructure and deployment
- `content` - Written content
- `documentation` - Technical docs
- `api` - API-related work
- `ui` - User interface
- `code-improvement` - Refactoring/tech debt
- `infrastructure` - Infrastructure setup
- `design` - Design work

---

## 📝 Notes

- Issue numbers (#1, #2, etc.) should be replaced with actual GitHub issue numbers once created
- **GitHub Issue column**: Once you create GitHub issues, replace `[Link]()` with `[#N](URL)` where N is the issue number and URL is the full GitHub issue URL
  - Example: `[#42](https://github.com/username/repo/issues/42)`
- **Status symbols**:
  - Update from ☐ to ⊡ when you start working on an issue
  - Update from ⊡ to ☑ when you complete an issue
- TBD estimates in Phase 2 will be refined after completing spike #30
- Time-box limits on spikes are strict to prevent scope creep
- All dependencies should be completed before starting dependent tasks
- Custom fields in GitHub Project: Epic, Priority, Estimate, Phase, Type
