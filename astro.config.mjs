import { defineConfig } from "astro/config";
// other imports

export default defineConfig({
  // other configs

  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "[name]-[hash].js",
        },
      },
    },
  },
});
