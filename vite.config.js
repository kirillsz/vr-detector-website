import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  base: "/vr-detector-website/",
  publicDir: "public",
  root: "./",
  build: {
    outDir: "dist",
  },
  plugins: [
    eslint({
      cache: false,
      fix: true,
    }),
  ],
});
