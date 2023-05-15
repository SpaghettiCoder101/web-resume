module.exports = {
  env: {
      browser: true, es2020: true,
  },
  extends: [
      'eslint:recommended',
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
      ecmaVersion: "latest", sourceType: "module",
  },
  plugins: ["react-refresh","@typescript-eslint"],
  rules: {
      "react-refresh/only-export-components": "warn",
      "no-unused-vars": ["warning", {
          "argsIgnorePattern": "^_", "varsIgnorePattern": "^_", 
      }],
      "@typescript-eslint/no-unused-vars": ["warning", {
          "argsIgnorePattern": "^_", "varsIgnorePattern": "^_", 
      }],
      "object-curly-spacing": ["error", "always"],
      "object-curly-newline": ["error", {
          "ObjectExpression": {
              "multiline": true,
              "minProperties": 3,
              "consistent": true,
          },
          "ImportDeclaration": "never",
      }],
      "indent": ["error", 4, { "SwitchCase": 1 }],
      "quotes": [2, "double", { "avoidEscape": true }],
      "curly": ["error", "multi-or-nest", "consistent"],
      "arrow-parens": ["error", "as-needed"],
      "comma-dangle": ["error", "always-multiline"],
      "semi": ["error", "always"],
      "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
      "@typescript-eslint/no-inferrable-types": "off",
      "react/jsx-closing-bracket-location": ["error", "line-aligned"],
      "react/jsx-first-prop-new-line": ["error", "multiline"],
      "react/react-in-jsx-scope": "off",
      "react/no-unknown-property": ["off"],
  },
};