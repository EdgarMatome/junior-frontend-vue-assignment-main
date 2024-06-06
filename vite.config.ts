import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName:
        mode === "production"
          ? "[hash:base64:5]"
          : (name: string, fileName: string) =>
              `${path.parse(fileName).name.replace(/\.vue.*/, "")}__${name}`,
    },
  },
}));
