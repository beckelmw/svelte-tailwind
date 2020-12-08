const production = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV
module.exports = {
  future: {
    // for tailwind 2.0 compat
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: [
      "./src/**/*.svelte",
      "./public/index.html",
      "./src/**/*.html"
    ],
    enabled: production, // disable purge in dev
  },
};
