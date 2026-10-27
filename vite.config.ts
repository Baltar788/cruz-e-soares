import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({ server: { entry: "server" } }),
    nitro({
      preset: "cloudflare_module",
      compatibilityDate: "2024-09-19",
      cloudflare: { deployConfig: true, nodeCompat: true },
    }),
    viteReact(),
  ],
});
