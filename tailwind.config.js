const production = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV
module.exports = {
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  purge: {
    content: [
      "./src/**/*.svelte",
      "./public/index.html",
      "./src/**/*.html"
    ],
    enabled: production, // disable purge in dev
  },
};
