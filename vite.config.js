import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api/notify": {
        target: "https://notify-api.line.me",
        changeOrigin: true,
      },
    },
  },
});
