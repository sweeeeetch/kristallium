import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import svgLoader from "vite-svg-loader";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [vue(), vueDevTools(), svgLoader({ defaultImport: "component", svgo: false }), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  preview: {
    allowedHosts: [".asmdnfljaksdfladsnfasd.ru"],
    headers: {
      "Cache-Control": "no-cache",
    },
  },
  build: {
    sourcemap: mode === "development",
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("vue")) {
              return "vue";
            }
            if (id.includes("lodash") || id.includes("axios")) {
              return "vendor";
            }
            return "vendor";
          }
        },
      },
    },
    minify: mode === "production" ? "terser" : false,
    terserOptions:
      mode === "production"
        ? {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ["console.log"],
            },
            format: {
              comments: false,
            },
          }
        : undefined,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1600,
  },
  server: {
    headers: {
      "Cache-Control": "no-cache",
    },
  },
}));
