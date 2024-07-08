// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  extends: [
    "eslint:recommended",
    // default rules for import
    "plugin:import/recommended",
    // include prettier config which avoid conflict
    "prettier",
    // disable conflicting rules with plugin (not config!)
    "plugin:prettier/recommended",
  ],
  plugins: ["import", "prettier", "unused-imports", "simple-import-sort"],
  ignorePatterns: ["!**/.*.cjs", "!**/.*.js", "node_modules"],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".mts", ".cts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      [require.resolve("eslint-import-resolver-node")]: {
        extensions: [".ts", ".mts", ".cts", ".tsx", ".d.ts"],
      },
      [require.resolve("eslint-import-resolver-typescript")]: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/no-anonymous-default-export": "warn",
    "import/order": "off",
    "import/no-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-internal-modules": "off",
    "import/newline-after-import": "error",
    "import/export": "off",
    "import/no-useless-path-segments": "warn",
    "import/no-absolute-path": "warn",
    "import/no-named-as-default": "off",
    "import/consistent-type-specifier-style": ["error", "prefer-inline"],
    "import/no-duplicates": [
      "error",
      {
        "prefer-inline": true,
      },
    ],
    "sort-import": "off",
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        trailingComma: "all",
        printWidth: 120,
        singleQuote: false,
        parser: "typescript",
        arrowParens: "avoid",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts?(x)", "**/*.vue"],
      extends: ["plugin:@typescript-eslint/recommended-type-checked"],
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      plugins: ["@typescript-eslint", "typescript-sort-keys"],
      rules: {
        "import/named": "off",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
          "error",
          {
            default: "array-simple",
          },
        ],
        "no-restricted-imports": "off",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "typescript-sort-keys/interface": "error",
        "typescript-sort-keys/string-enum": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            accessibility: "explicit",
            overrides: {
              accessors: "no-public",
              constructors: "no-public",
            },
          },
        ],
        "@typescript-eslint/member-delimiter-style": [
          "off",
          {
            multiline: {
              delimiter: "none",
              requireLast: true,
            },
            singleline: {
              delimiter: "semi",
              requireLast: false,
            },
          },
        ],
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
            disallowTypeAnnotations: false,
          },
        ],
        "@typescript-eslint/sort-type-constituents": "warn",
      },
    },
    // {
    //   files: ["scripts/**/*.ts"],
    //   parserOptions: {
    //     project: "./scripts/tsconfig.json",
    //     tsconfigRootDir: __dirname,
    //   },
    // },
  ],
};
