import svelte from "rollup-plugin-svelte";
import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import css from "rollup-plugin-css-only";

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: "src/main.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/build/bundle.js",
    },
    plugins: [
      alias({
        entries: [{ find: "src", replacement: `${__dirname}/src` }],
      }),

      svelte({
        preprocess: sveltePreprocess({
          sourceMap: !production,
          postcss: {
            plugins: [
              require("tailwindcss"),
              require("autoprefixer"),
              require("postcss-nesting"),
            ],
          },
        }),

        emitCss: false,
        compilerOptions: {
          // enable run-time checks when not in production
          dev: !production,
        },
      }),

      //css({ output: "site.css" }),

      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration -
      // consult the documentation for details:
      // https://github.com/rollup/plugins/tree/master/packages/commonjs
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),

      // In dev mode, call `npm run start` once
      // the bundle has been generated
      !production && serve(),

      // Watch the `public` directory and refresh the
      // browser on changes when not in production
      !production &&
        livereload({
          delay: 200,
          watch: "public",
        }),

      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser(),
    ],
    watch: {
      clearScreen: false,
    },
  },

  // Server bundle
  {
    input: "src/App.svelte",
    output: {
      sourcemap: false,
      format: "cjs",
      name: "app",
      file: "public/build/app.js",
      exports: "auto",
    },
    plugins: [
      alias({
        entries: [{ find: "src", replacement: `${__dirname}/src` }],
      }),

      svelte({
        preprocess: sveltePreprocess({
          sourceMap: !production,
          postcss: {
            plugins: [
              require("tailwindcss"),
              require("autoprefixer"),
              require("postcss-nesting"),
            ],
          },
        }),
        emitCss: true,
        compilerOptions: {
          // enable run-time checks when not in production
          dev: !production,
          generate: "ssr",
        },
      }),

      css({ output: "site.min.css" }),

      resolve(),
      commonjs(),
      !production && terser(),
    ],
  },

  {
    input: "src/App.svelte",
    output: {
      sourcemap: false,
      format: "esm",
      name: "app",
      file: "public/build/app.mjs",
    },
    plugins: [
      alias({
        entries: [{ find: "src", replacement: `${__dirname}/src` }],
      }),

      svelte({
        preprocess: sveltePreprocess({
          sourceMap: !production,
          postcss: {
            plugins: [
              require("tailwindcss"),
              require("autoprefixer"),
              require("postcss-nesting"),
            ],
          },
        }),
        emitCss: true,
        compilerOptions: {
          // enable run-time checks when not in production
          dev: !production,
          generate: "ssr",
        },
      }),

      css({ output: false }),

      resolve(),
      commonjs(),
      !production && terser(),
    ],
  },
];

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        });
      }
    },
  };
}
