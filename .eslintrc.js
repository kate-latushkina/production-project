module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "standard-with-typescript", 
    "plugin:react/recommended",
    "plugin:i18next/recommended"
  ],
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
          "i18next/no-literal-string": "off",
        },
    },
  ],
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
  ignorePatterns: [
    ".eslintrc.js", 
    "webpack.config.ts", 
    "jest.config.ts",
    "jestEmptyComponent.tsx"
  ],
  parserOptions: {
    ecmaFeatures: {
        jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react", 
    "@typescript-eslint", 
    "i18next",
    "react-hooks"
  ],
  rules: {
    "react/jsx-indent": [2, 4],
    "react/jsx-indent-props": [2, 4],
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/semi": "off",
    "semi": ["error", "always"],
    "@typescript-eslint/quotes": [2, "double"],
    "react/no-deprecated": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: [
          "camelCase",
          "strictCamelCase",
          "PascalCase",
          "StrictPascalCase",
          "snake_case",
          "UPPER_CASE",
        ],
        leadingUnderscore: "allowDouble",
        trailingUnderscore: "allowDouble",
      },
    ],
    "i18next/no-literal-string": ["error", { 
      markupOnly: true, ignoreAttribute: ["data-testid", "to"] 
    }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/display-name": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/ban-ts-comment": "warn"
  },
};
