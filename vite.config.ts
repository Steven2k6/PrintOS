import vue from "@vitejs/plugin-vue";
import loadVersion from "vite-plugin-package-version";
import { defineConfig } from "vite";

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

import checker from "vite-plugin-checker";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    loadVersion(),
    checker({ typescript: true }),
    vuetify({
      autoImport: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      css: { charset: false },
      scss: {
        quietDeps: true,
      },
    },
  },
  build: {
    target: "safari12",
  },

  envPrefix: "VUE_",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
