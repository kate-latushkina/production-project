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
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
          'i18next/no-literal-string': 'off',
        },
    },
  ],
  ignorePatterns: [
    ".eslintrc.js", 
    "webpack.config.ts", 
    "jest.config.ts",
    "jestEmptyComponent.tsx"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react", 
    "@typescript-eslint", 
    "i18next"
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
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
    ],
    "i18next/no-literal-string": ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],  },
};
