// vite.config.js
/** @type {import('vite').UserConfig} */
export default {
  build: {
    target: "esnext",
  },
  esbuild: {
    // Enable experimental decorators properly in the build
    target: "esnext",
  },
};
