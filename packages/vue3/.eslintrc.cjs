/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["vue"],
  extends: [
    "plugin:vue/vue3-strongly-recommended",
    // include prettier config which avoid conflict
    "prettier",
    // disable conflicting rules with plugin (not config!)
    "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    allowImportExportEverywhere: true,
    extraFileExtensions: [".vue"],
    sourceType: "module",
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
  },
  settings: {
    "import/parsers": {
      [require.resolve("vue-eslint-parser")]: [".vue"],
    },
  },
  overrides: [
    {
      files: ["src/**/*.vue"],
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
      files: ["src/**/*.ts", "src/**/*.vue"],
      rules: {
        "import/default": "off",
      },
    },
    {
      files: ["vite.config.*", "scripts/**/*.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
