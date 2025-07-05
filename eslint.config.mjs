import js from "@eslint/js";
import globals from "globals";
import tsEslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import unusedImports from "eslint-plugin-unused-imports";
import reactHooks from "eslint-plugin-react-hooks";
import indentEmptyLines from "eslint-plugin-indent-empty-lines";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  tsEslint.configs.recommended,
  react.configs.flat.recommended,
  globalIgnores([
    "**/node_modules/",
    "**/.cache/",
    "**/public/",
    "**/lib/",
    "**/docs/",
    "eslint.config.mjs",
    "**/generatedDatabaseTypes.ts",
    "**/jest-preprocess.js",
    "**/postcss.config"
  ]),
  {
    extends: ["js/recommended"],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      "unused-imports": unusedImports,
      "react-native": reactNative,
      "react-hooks": reactHooks,
      "indent-empty-lines": indentEmptyLines,
      "@stylistic": stylistic
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest
      }
    },
    "settings": {
      "react": {
        "version": "18.3.1"
      }
    }
  },
  {
    rules: {
      "@stylistic/indent": ["warn", 2, { flatTernaryExpressions: false, offsetTernaryExpressions: true }],
      "@stylistic/quotes": ["warn", "double"],
      "@stylistic/semi": ["warn", "always"],
      "@stylistic/padding-line-between-statements": ["warn", { blankLine: "always", prev: "var", next: "return" }],
      "@stylistic/spaced-comment": ["warn", "always", { "exceptions": ["-", "+"] }],
      "@stylistic/no-trailing-spaces": ["warn", { "skipBlankLines": true }],
      "@stylistic/no-mixed-spaces-and-tabs": "warn",
      "@stylistic/no-whitespace-before-property": "warn",
      "@stylistic/no-multi-spaces": "warn",
      "@stylistic/space-before-blocks": "warn",
      "@stylistic/space-before-function-paren": ["warn", "never"],
      "@stylistic/space-in-parens": ["warn", "never"],
      "@stylistic/space-infix-ops": "warn",
      "@stylistic/space-unary-ops": "warn",
      "@stylistic/array-bracket-spacing": ["warn", "never"],
      "@stylistic/array-bracket-newline": ["warn", "consistent"],
      "@stylistic/array-element-newline": ["warn", "consistent"],
      "@stylistic/object-curly-spacing": ["warn", "always"],
      "@stylistic/object-curly-newline": ["warn", { "consistent": true }],
      "@stylistic/comma-spacing": ["warn", { before: false, after: true }],
      "@stylistic/operator-linebreak": ["warn", "after"],
      "@stylistic/function-paren-newline": ["warn", "consistent"],
      "@stylistic/brace-style": ["warn", "stroustrup", { "allowSingleLine": false }],
      "@stylistic/multiline-ternary": ["warn", "always-multiline"]
    },
  },
  {
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error"
    }
  }
]);
