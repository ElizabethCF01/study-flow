import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  publicDir: "./public",
  base: "/study-flow/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));
