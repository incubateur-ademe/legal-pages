// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: ["next/core-web-vitals"],
      rules: {
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
