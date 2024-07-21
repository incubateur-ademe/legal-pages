import vue from "@vitejs/plugin-vue";
import DefineOptions from "unplugin-vue-define-options/vite";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    dts({ entryRoot: "src", insertTypesEntry: true, tsconfigPath: "tsconfig.app.json" }),
    DefineOptions(),
  ],
  resolve: {
    alias: {
      "@/generated": fileURLToPath(new URL("./generated", import.meta.url)),
    },
  },
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      name: "@incubateur-ademe/legal-pages-vue3",
      entry: [
        "src/index.ts",
        //
        "src/CookiesPolicy/index.ts",
        "src/LegalNotice/index.ts",
        "src/PrivacyPolicy/index.ts",
      ],
      // entry: "src/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        entryFileNames: "[name].js",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
});
