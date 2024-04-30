import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    dts({ entryRoot: "src", insertTypesEntry: true }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "mustache"],
      output: {
        banner: chunk => {
          if (chunk.name.startsWith("Client")) {
            return '"use client";\n';
          }
          return "";
        },
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        entryFileNames: "[format]/[name].js",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
});
