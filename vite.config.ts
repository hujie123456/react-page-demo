import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), WindiCSS()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
