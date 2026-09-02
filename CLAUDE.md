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
├── next.config.mjs     static export, and the basePath everything depends on
├── package.json
├── .github/workflows/pages.yml   builds and publishes on every push to main
└── app/
    ├── layout.tsx      the shell: header, footer, the two legal links
    ├── globals.css     the app's own palette, so site and product look like one thing
    ├── page.tsx        what Dosely is
    ├── privacy/        the privacy policy — App Store review fetches this
    ├── terms/          the terms of use — the paywall links to it, as Apple requires
    └── support/        how to get help
```

**This tree is the single source of truth for this repository's structure. When a folder is
added, removed, or renamed, update it in the same change.**

## Status

Scaffolded and building. Next.js + TypeScript, static export, published to GitHub Pages by
`.github/workflows/pages.yml` on every push to `main`.

It was written by hand rather than by `create-next-app`, which refuses a non-empty directory
and would have had to be run beside and moved — more steps than writing six files.

**Why this site exists at all:** the iOS paywall must link a privacy policy and terms that
resolve, and App Store review fetches both during submission. That is why `docs/release.md`
puts web first in the release order, and why the deploy is automatic — a policy that only
exists on a laptop is a policy that is not published.

**Kind decided:** a static site — marketing, privacy policy, terms and support pages. No app
layers; it does not log doses. If that ever changes, the six layer folders come under
`src/` and this file's tree changes with them.

**Host decided:** GitHub Pages from this repository, so the production URL is
`https://graboosky.github.io/dosely-web/`. Two consequences for the Next.js config:
`output: 'export'` (no server, no image optimisation, no dynamic routes) and
`basePath: '/dosely-web'` — a link written without it 404s on Pages and works in `npm run
dev`, which is exactly the kind of bug that surfaces during store review.

**Two things that silently break this site, both settled:**

- **`basePath`.** The site lives under `/dosely-web`, so a link written as `/privacy/`
  works in `npm run dev` and 404s in production. Every internal link goes through
  `process.env.NEXT_PUBLIC_BASE_PATH`, which `next.config.mjs` sets only for a production
  build. The page most likely to be linked carelessly is the privacy policy — the one
  App Store review fetches.
- **`.nojekyll`.** Pages runs Jekyll by default, and Jekyll drops every path beginning with
  an underscore — which is most of Next's output. The workflow touches the file; without
  it the pages render unstyled and nothing says why.

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

```bash
npm install
npm run dev      # localhost:3000, no basePath — links resolve without the prefix
npm run build    # writes out/, exactly what Pages serves
```

**Check `out/` before trusting a change**, not the dev server: the dev server is the one
configuration that hides the `basePath` mistake. `grep -o 'href="/dosely-web[^"]*"'
out/index.html` shows what a visitor will actually click.

## Generated content

If any page here is generated from another platform's source — legal text, screenshots,
pricing, release notes — say so **on the page and here**, with the command that regenerates
it. A file silently overwritten by an export script is a file someone will edit by hand and
lose.

- None. Every page here is written by hand. The one thing copied from elsewhere is the
  colour palette in `app/globals.css`, mirrored from the iOS asset catalog — it is six hex
  values and a comment saying where they came from, not a generated file.

## Conventions

- No raw colors, sizes, or radii outside `designSystem/` — including derived constants.
- User-facing copy comes from `../docs/domain.md`. Writing a second version of a sentence
  here is how the product starts saying two different things.

- **Routing is the App Router**, one folder per page, `trailingSlash: true` so Pages serves
  `/privacy/` as a directory rather than guessing.
- **Styles live in `app/globals.css`**, as CSS custom properties in one `:root` block with a
  `prefers-color-scheme` override — the same two-appearance rule the app follows. No CSS
  framework: four pages do not need one.
- **No component layer yet.** When a second page wants the same block, it becomes a
  component; until then a `<div className="card">` is honest.
- **Legal pages carry their own date.** Changing the words changes the date at the top, in
  the same edit — a policy whose date lies is worse than one that is out of date.
