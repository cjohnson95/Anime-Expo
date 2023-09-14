import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePluginProxy from "vite-plugin-proxy";

// const apiKey = import.meta.env.VITE_API_KEY;

export default defineConfig({
  plugins: [
    react(),
    VitePluginProxy({
      "/api": {
        target: `https://api.myanimelist.net/v2`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        headers: {
          "X-MAL-CLIENT-ID": "9df87d3b47deb08c893d7aced13b3fdb",
        },
      },
    }),
  ],
});
