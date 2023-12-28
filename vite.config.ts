import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "auth_app",
      filename: "remoteEntry.js",
      exposes: {
        "./NewLogin": "./src/components/NewLogin.tsx",
      },
      shared: ["react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: {
      '/auth_app': {
        target: 'https://main--preeminent-fudge-e1265e.netlify.app',
        changeOrigin: true,
      },
    },
  },
});
