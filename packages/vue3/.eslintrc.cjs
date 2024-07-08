// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  settings: {
    "import/parsers": {
      [require.resolve("vue-eslint-parser")]: [".vue"],
    },
  },
  overrides: [
    {
      plugins: ["vue"],
      extends: [
        "plugin:vue/vue3-strongly-recommended",
        // include prettier config which avoid conflict
        "prettier",
        // disable conflicting rules with plugin (not config!)
        "plugin:prettier/recommended",
      ],
      files: ["src/**/*.vue", "src/**/*.ts"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.app.json",
        extraFileExtensions: [".vue"],
      },
      rules: {
        "vue/require-default-prop": "off",
        "import/default": "off",
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
      files: ["vite.config.ts", "scripts/**/*.ts"],
      rules: {
        "import/no-default-export": "off",
      },
      parserOptions: {
        project: "./tsconfig.node.json",
      },
    },
  ],
};
