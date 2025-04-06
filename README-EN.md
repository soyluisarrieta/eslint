# Custom ESLint Rules for TypeScript and React

🌐 [**Español**](./README.md) | English

## 📝 Description

The rules are designed to improve code consistency and allow certain common practices in the development of modern applications.

## 📋 Instructions

1. Install `eslint-plugin-react` as a development dependency:

   ```bash
   pnpm add eslint-plugin-react -D
   ```

2. In `eslint.config.js`:

   - Update the directories to ignore within `tseslint.config`:

      ```js
      { ignores: ['dist', '**/node_modules/**', '**/dist/**', 'src/components/ui/**'] },
      ```

   - Import and add `react` in the plugins:

      ```js
      import react from 'eslint-plugin-react'
      ```

      ```js
      'react': react,
      ```

   - Add the rules within the rules property:

     ```js
      // Custom
      '@typescript-eslint/no-unused-expressions': 'off',                        // Allows unused expressions
      '@typescript-eslint/no-misused-promises': 'off',                          // Allows unhandled promises
      '@typescript-eslint/no-floating-promises': 'off',                         // Allows promises without await
      '@typescript-eslint/strict-boolean-expressions': 'off',                   // Allows more flexible boolean expressions
      '@typescript-eslint/no-unused-vars': 'off',                               // For type variables
      '@typescript-eslint/no-explicit-any': 'off',                              // For the use of 'any'
      '@typescript-eslint/no-empty-interface': 'off',                           // For empty interfaces
      '@typescript-eslint/ban-types': 'off',                                    // For prohibited types
      'semi': ['error', 'never'],                                               // Does not allow semicolons at the end
      'quotes': ['error', 'single'],                                            // Enforces the use of single quotes
      'space-before-function-paren': ['error', 'always'],                       // Requires space before parentheses in functions
      'comma-dangle': ['error', 'never'],                                       // Does not allow trailing commas in lists
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],          // Maximum one consecutive blank line
      'eol-last': ['error', 'always'],                                          // Requires an empty line at the end of the file
      'object-curly-spacing': ['error', 'always'],                              // Requires spaces inside braces
      'array-bracket-spacing': ['error', 'never'],                              // Does not allow spaces inside brackets
      'computed-property-spacing': ['error', 'never'],                          // Does not allow spaces in computed properties
      'space-in-parens': ['error', 'never'],                                    // Does not allow spaces inside parentheses
      'space-before-blocks': ['error', 'always'],                               // Requires space before blocks
      'keyword-spacing': ['error', { 'before': true, 'after': true }],          // Requires spaces before and after keywords
      'space-infix-ops': 'error',                                               // Requires spaces around operators
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],   // Format of spaces in object properties
      'indent': ['error', 2],                                                   // Indentation of 2 spaces
      'no-trailing-spaces': 'error',                                            // Does not allow trailing spaces at the end of lines
      'react/jsx-indent': ['error', 2],                                         // JSX indentation of 2 spaces
      'react/react-in-jsx-scope': 'off',                                        // Allows JSX without importing React
      "arrow-spacing": ["error", { "before": true, "after": true }],            // Requires spaces before and after arrows

      // Require spaces at the end of JSX tags
      "react/jsx-tag-spacing": [
        "error",
        {
          "closingSlash": "never",
          "beforeSelfClosing": "always",
          "afterOpening": "never",
          "beforeClosing": "never"
        }
      ]
     ```

## 📝 Example of `eslint.config.js`

```js
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', '**/node_modules/**', '**/dist/**', 'src/components/ui/**'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Custom
      '@typescript-eslint/no-unused-expressions': 'off',                        // Allows unused expressions
      '@typescript-eslint/no-misused-promises': 'off',                          // Allows unhandled promises
      '@typescript-eslint/no-floating-promises': 'off',                         // Allows promises without await
      '@typescript-eslint/strict-boolean-expressions': 'off',                   // Allows more flexible boolean expressions
      '@typescript-eslint/no-unused-vars': 'off',                               // For type variables
      '@typescript-eslint/no-explicit-any': 'off',                              // For the use of 'any'
      '@typescript-eslint/no-empty-interface': 'off',                           // For empty interfaces
      '@typescript-eslint/ban-types': 'off',                                    // For prohibited types
      'semi': ['error', 'never'],                                               // Does not allow semicolons at the end
      'quotes': ['error', 'single'],                                            // Enforces the use of single quotes
      'space-before-function-paren': ['error', 'always'],                       // Requires space before parentheses in functions
      'comma-dangle': ['error', 'never'],                                       // Does not allow trailing commas in lists
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],          // Maximum one consecutive blank line
      'eol-last': ['error', 'always'],                                          // Requires an empty line at the end of the file
      'object-curly-spacing': ['error', 'always'],                              // Requires spaces inside braces
      'array-bracket-spacing': ['error', 'never'],                              // Does not allow spaces inside brackets
      'computed-property-spacing': ['error', 'never'],                          // Does not allow spaces in computed properties
      'space-in-parens': ['error', 'never'],                                    // Does not allow spaces inside parentheses
      'space-before-blocks': ['error', 'always'],                               // Requires space before blocks
      'keyword-spacing': ['error', { 'before': true, 'after': true }],          // Requires spaces before and after keywords
      'space-infix-ops': 'error',                                               // Requires spaces around operators
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],   // Format of spaces in object properties
      'indent': ['error', 2],                                                   // Indentation of 2 spaces
      'no-trailing-spaces': 'error',                                            // Does not allow trailing spaces at the end of lines
      'react/jsx-indent': ['error', 2],                                         // JSX indentation of 2 spaces
      'react/react-in-jsx-scope': 'off',                                        // Allows JSX without importing React
      "arrow-spacing": ["error", { "before": true, "after": true }],            // Requires spaces before and after arrows

      // Require spaces at the end of JSX tags
      "react/jsx-tag-spacing": [
        "error",
        {
          "closingSlash": "never",
          "beforeSelfClosing": "always",
          "afterOpening": "never",
          "beforeClosing": "never"
        }
      ]
    }
  }
)
```

## 🤝 Contributions

Feel free to contribute to this project by opening a pull request or reporting an issue.
