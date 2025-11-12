// @ts-check

const eslintConfigNext = require("eslint-config-next");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ["vite.config.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      files: ["src/**/*.tsx"],
      extends: ["plugin:react/recommended"],
      plugins: ["react", "jsx-a11y"],
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        ...eslintConfigNext.rules,
        "react/no-unescaped-entities": [
          "error",
          {
            forbid: [">", "}"],
          },
        ],
      },
    },
  ],
};
