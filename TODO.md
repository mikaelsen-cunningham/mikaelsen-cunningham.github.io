# Portfolio Site Roadmap

## Overview

This document tracks all outstanding work items for the project, organized by type and linked to parent epics where applicable.

### Status Legend

⬜ = Backlog (requires refinement)

🟦 = Todo (not started)

🟨 = In Progress (currently working on)

🟪 = Done (completed)

## Epics

🟨 _Content Creation and Documentation_ - Create all written content for the site including README, blog posts, and project documentation

⬜ _Gitflow Implementation with GitHub Actions_ - Implement complete gitflow branching strategy with automated workflows

⬜ _Multi-Environment Deployment_ - Set up separate deployment environments with preview capabilities

⬜ _External API Migration (Phase 2)_ - Move markdown files and JSON data to external API

## Tasks - Content Creation Epic

🟪 _SPIKE - What Makes a good blog post_ - Research to inform structure and tone

🟪 _Write README content_ - Create comprehensive README.md with overview, setup, tech stack

🟪 _Implement README rendering on homepage_ - Add markdown parser and render README on homepage

🟪 _Write portfolio misison statement_ - About section of read me and inital blog post outlining purpose and methodology in regards to delievery and technical decisions

🟪 _Write post - Experience Page_ - List of work experience detail, dates, company, role and a list of achievements

🟪 _Add Project roadmap page_ - Write todo file and render on project roadmap page

🟪 _Simplify TODO.md document_ - Update todo file to be more succinct

🟪 _Update experience page with feedback_ - Implement content recomendations from cv on the experience page

🟨 _Write post - Tech decisions_ - Document architecture decisions, purpose, and learnings

🟦 _Write post - Non-fiction writers site_ - Post about other website project

## Tasks - Code Improvements (No Epic)

⬜ _Audit file naming conventions_ - Review codebase and document naming inconsistencies

⬜ _Standardize file naming casing_ - Rename files to follow convention, update imports

🟪 _Remove unused code_ - Remove code bloat from next blog starter project

## Tasks - Features Phase 1 (No Epic)

⬜ _Design footer structure and content_ - Define footer sections, content, and layout

⬜ _Implement footer component_ - Build responsive footer component

⬜ _Create GitHub API integration service_ - Set up service to fetch issues from GitHub API

⬜ _Build issues display component_ - Create UI to display active issues with status

⬜ _Implement dynamic root navigation_ - Replace hardcoded nav with dynamic function

## Tasks - Gitflow Epic

⬜ _Document gitflow branching strategy_ - Create docs for branch naming, merge strategies, PR requirements

⬜ _Create develop branch and protection rules_ - Set up develop branch with branch protection

⬜ _Build GitHub Action for feature branches_ - Workflow for linting, tests, build validation

⬜ _Build GitHub Action for develop branch_ - Workflow for staging deployment with tests

⬜ _Build GitHub Action for release branches_ - Workflow for version bumping, changelog, testing

⬜ _Build GitHub Action for main branch_ - Production deployment with tags and releases

⬜ _Create hotfix workflow_ - Emergency hotfix workflow for fast-track to prod

## Tasks - Multi-Environment Epic

⬜ _Research preview environment options_ - Compare GitHub Pages, Netlify, Vercel, Cloudflare

⬜ _Setup staging/dev deployment_ - Configure separate deployment for develop branch

⬜ _Create GitHub Action for develop_ - preview Auto-deploy to staging on develop merge

⬜ _Implement PR preview deployments_ - Ephemeral preview URLs for feature branch PRs

⬜ _Configure environment-specific settings_ - Set up env vars and config for each environment

⬜ _Update issue auto-close workflow_ - Manage issue lifecycle with gitflow properly

⬜ _Document deployment process_ - Create docs for environments, workflow, rollback

## Spikes

⬜ Research preview environment options

⬜ Research and compare deployment options

⬜ External API architecture research - Research API options, create POC, estimate effort

## Tasks - Phase 2 External API Epic

⬜ SPIKE - External API architecture - Research API options and create proof of concept

⬜ Design external API structure Design endpoints, data models, auth strategy

⬜ Setup external API infrastructure Set up hosting, CI/CD, environment config TBD

⬜ Migrate markdown files to API Move markdown content and implement endpoints TBD

⬜ Migrate JSON data to API Move JSON data and implement endpoints TBD

⬜ Update frontend to consume API Refactor frontend for API consumption with caching TBD ,

⬜ Testing and performance optimization E2E testing, performance testing, optimization TBD

## Labels Guide

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

## Notes

- Update from ⬜ to 🟨 when you have refined an issue
- Update from ⬜ to 🟨 when you start working on an issue
- Update from 🟨 to 🟪 when you complete an issue
- Time-box limits on spikes are strict to prevent scope creep
- All dependencies should be completed before starting dependent tasks
