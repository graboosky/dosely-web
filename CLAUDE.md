# Dosely — Web

Dosely is an iOS medication tracker that logs pills, injections and other treatments, and uses AlarmKit to make sure no dose is missed.

The web platform repository of the Dosely container. `../CLAUDE.md` governs product
behavior, domain vocabulary, user-facing copy, and releases. This file governs how the web
build works.

**Web is not a mirror.** It implements `../docs/domain.md` directly. It shares the domain,
the copy, and the layer vocabulary with the apps — and nothing else. It is not expected to
match iOS screen for screen, and `../tools/parity-check.py` does not measure it. Where web
does something the apps do not, or omits something they have, that is normal and needs an
entry in `../docs/divergences.md` only when a user could be confused by the difference.

## The tree

```
dosely-web/
├── CLAUDE.md
└── <TODO: fill in once the site has a shape>
```

**This tree is the single source of truth for this repository's structure. When a folder is
added, removed, or renamed, update it in the same change.**

## Status

Nothing is scaffolded. There is no package manifest and no dependencies installed.

**Stack decided:** Next.js + TypeScript, static export (`output: 'export'`), deployed to GitHub Pages

**First task:** initialize it, in this folder, without discarding what is already here —
several generators refuse to run in a non-empty directory or quietly overwrite a
`README.md`. Check before running one.

**Kind decided:** a static site — marketing, privacy policy and support pages. No app
layers; it does not log doses. If that ever changes, the six layer folders come under
`src/` and this file's tree changes with them.

**Host decided:** GitHub Pages from this repository, so the production URL is
`https://graboosky.github.io/dosely-web/`. Two consequences for the Next.js config:
`output: 'export'` (no server, no image optimisation, no dynamic routes) and
`basePath: '/dosely-web'` — a link written without it 404s on Pages and works in `npm run
dev`, which is exactly the kind of bug that surfaces during store review.

<TODO: the exact init command (`npx create-next-app@latest . --ts …` refuses a non-empty
folder — check its flags or init beside and move), and the Pages deploy: a workflow that
builds `out/` on push to `main`, or the `gh-pages` branch. Record which.>

## Domain

| What | Value |
|---|---|
| Production domain | https://graboosky.github.io/dosely-web/ |
| DNS / registrar | none — GitHub's `github.io` namespace; a custom domain is a later decision |
| Host | GitHub Pages, this repository |

If a store listing links to a privacy policy or support page on this domain, those URLs
must return 200 before any store submission — review fetches them, and a 404 costs a
review cycle. `../docs/release.md` puts web first in the order for this reason.

## Build & test

<TODO: fill in once the project exists.>

```bash
# npm install
# npm run dev
# npm run build
```

## Generated content

If any page here is generated from another platform's source — legal text, screenshots,
pricing, release notes — say so **on the page and here**, with the command that regenerates
it. A file silently overwritten by an export script is a file someone will edit by hand and
lose.

- <TODO: none yet>

## Conventions

- No raw colors, sizes, or radii outside `designSystem/` — including derived constants.
- User-facing copy comes from `../docs/domain.md`. Writing a second version of a sentence
  here is how the product starts saying two different things.

<TODO: formatter and its config, component boundaries, where styles live, routing scheme.>
