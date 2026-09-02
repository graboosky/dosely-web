/**
 * Static export on GitHub Pages. Both settings below are load-bearing:
 *
 * `output: 'export'` because Pages serves files, not a server — anything dynamic builds
 * fine and 404s in production.
 *
 * `basePath` because the site lives under /dosely-web. A link written without it works in
 * `npm run dev` and 404s on Pages, and the page most likely to be linked without it is the
 * privacy policy, which is the one App Store review fetches.
 */
const basePath = process.env.NODE_ENV === "production" ? "/dosely-web" : "";

export default {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
