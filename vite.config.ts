/* eslint-disable @typescript-eslint/no-explicit-any */
// vite.config.ts

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tsconfigPaths(),
    tailwindcss({
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/_stories_/**/*.{js,ts,jsx,tsx}",
        "./.ladle/**/*.{js,ts,jsx,tsx}",
      ],
    } as any),
  ],
});
