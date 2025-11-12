/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "plugin:vue/vue3-strongly-recommended",
    // include prettier config which avoid conflict
    "prettier",
    // disable conflicting rules with plugin (not config!)
    "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  ignorePatterns: ["!**/.*.cjs", "!**/.*.js", "node_modules", "dist/", "generated/"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    allowImportExportEverywhere: true,
    extraFileExtensions: [".vue"],
    sourceType: "module",
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
  },
  settings: {
    "import/extensions": [".js", ".ts", ".vue"],
    "import/parsers": {
      [require.resolve("vue-eslint-parser")]: [".vue"],
    },
    "import/resolver": {
      // TS d'abord pour lire baseUrl/paths de tsconfig.app.json
      typescript: {
        alwaysTryTypes: true,
        project: ["./tsconfig.app.json", "./tsconfig.node.json"],
      },
    },
  },
  overrides: [
    {
      files: ["{src,generated}/**/*.vue"],
      rules: {
        "prettier/prettier": [
          "error",
          {
            tabWidth: 2,
            trailingComma: "all",
            printWidth: 120,
            singleQuote: false,
            parser: "vue",
            arrowParens: "avoid",
          },
        ],
      },
    },
    {
      files: ["{src,generated}/**/*.{ts,vue}"],
      parserOptions: {
        project: "./tsconfig.app.json",
      },
      rules: {
        "import/default": "off",
      },
    },
    {
      files: ["vite.config.*", "vitest.config.*", "scripts/**/*.ts", ".eslintrc.*"],
      parserOptions: { project: "./tsconfig.node.json" },
      rules: {
        "import/no-default-export": "off",
      },
      settings: {
        "import/resolver": {
          node: {
            extensions: [".ts", ".js", ".vue"],
            moduleDirectory: ["node_modules", "src/"],
          },
        },
      },
    },
  ],
};
