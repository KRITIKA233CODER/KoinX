import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite"; // 1. Import the nitro plugin

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // 2. Safely inject the Vercel preset into the Vite config block
  vite: {
    plugins: [
      nitro({
        preset: "vercel", 
      }),
    ],
  },
});