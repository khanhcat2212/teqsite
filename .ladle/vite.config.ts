import { defineConfig } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(), 
        
        tailwindcss(
            {
                content: [
                    "./index.html",
                    "./src/**/*.{js,ts,jsx,tsx}",
                    "./src/_stories_/**/*.{js,ts,jsx,tsx}",
                    "./.ladle/**/*.{js,ts,jsx,tsx}",
                ],
            } as any
        ),
    ],

});