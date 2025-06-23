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
  server: {
    port: process.env.__VITE_SERVER_PORT
      ? parseInt(process.env.__VITE_SERVER_PORT, 10)
      : 5173,
  },
};
