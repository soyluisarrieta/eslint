import react from 'eslint-plugin-react';
import { Linter } from 'eslint';

const config: Linter.Config = {
  ignores: ['**/node_modules/**', '**/dist/**', 'src/components/ui/**'],
  files: ['**/*.{ts,tsx}'],
  plugins: { 'react': react },
  rules: {
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
    'arrow-spacing': ['error', { 'before': true, 'after': true }],            // Requires spaces before and after arrows

    // Require spaces at the end of JSX tags
    'react/jsx-tag-spacing': [
      'error',
      {
        'closingSlash': 'never',
        'beforeSelfClosing': 'always',
        'afterOpening': 'never',
        'beforeClosing': 'never'
      }
    ]
  }
};

// Exportamos la configuración para que pueda ser importada
export default config;