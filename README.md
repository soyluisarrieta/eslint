# Reglas de ESLint personalizadas para TypeScript y React

🌐 Español | [**English**](./README-EN.md)

## 📝 Descripción

Las reglas están diseñadas para mejorar la consistencia del código y permitir ciertas prácticas comunes en el desarrollo de aplicaciones modernas.

## 📦 Instalación

```bash
pnpm add @soyluisarrieta/eslint -D
```

O usando npm:

```bash
npm install @soyluisarrieta/eslint --save-dev
```

## 📋 Uso

En tu archivo `eslint.config.js`:

```js
import eslintConfig from '@soyluisarrieta/eslint';

export default eslintConfig;
```

## 📋 Configuración Manual

Si prefieres configurar las reglas manualmente en lugar de usar el paquete:

1. Instalar `eslint-plugin-react` como dependencia de desarrollo:

   ```bash
   pnpm add eslint-plugin-react -D
   ```

2. En `eslint.config.js`:

   - Actualizar los directorios a ignorar dentro de `tseslint.config`:

      ```js
      { ignores: ['dist', '**/node_modules/**', '**/dist/**', 'src/components/ui/**'] },
      ```

   - Importar y añadir `react` en los plugins:

      ```js
      import react from 'eslint-plugin-react'
      ```

      ```js
      'react': react,
      ```

   - Añadir las reglas dentro de la propiedad rules:

     ```js
      // Personalizadas
      '@typescript-eslint/no-unused-expressions': 'off',                        // Permite expresiones sin usar
      '@typescript-eslint/no-misused-promises': 'off',                          // Permite promesas sin manejar
      '@typescript-eslint/no-floating-promises': 'off',                         // Permite promesas sin await
      '@typescript-eslint/strict-boolean-expressions': 'off',                   // Permite expresiones booleanas más flexibles
      '@typescript-eslint/no-unused-vars': 'off',                               // Para variables de tipo
      '@typescript-eslint/no-explicit-any': 'off',                              // Para el uso de 'any'
      '@typescript-eslint/no-empty-interface': 'off',                           // Para interfaces vacías
      '@typescript-eslint/ban-types': 'off',                                    // Para tipos prohibidos
      'semi': ['error', 'never'],                                               // No permite punto y coma al final
      'quotes': ['error', 'single'],                                            // Fuerza el uso de comillas simples
      'space-before-function-paren': ['error', 'always'],                       // Requiere espacio antes de paréntesis en funciones
      'comma-dangle': ['error', 'never'],                                       // No permite coma final en listas
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],          // Máximo una línea en blanco consecutiva
      'eol-last': ['error', 'always'],                                          // Requiere línea vacía al final del archivo
      'object-curly-spacing': ['error', 'always'],                              // Requiere espacios dentro de llaves
      'array-bracket-spacing': ['error', 'never'],                              // No permite espacios dentro de corchetes
      'computed-property-spacing': ['error', 'never'],                          // No permite espacios en propiedades computadas
      'space-in-parens': ['error', 'never'],                                    // No permite espacios dentro de paréntesis
      'space-before-blocks': ['error', 'always'],                               // Requiere espacio antes de bloques
      'keyword-spacing': ['error', { 'before': true, 'after': true }],          // Requiere espacios antes y después de palabras clave
      'space-infix-ops': 'error',                                               // Requiere espacios alrededor de operadores
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],   // Formato de espacios en propiedades de objetos
      'indent': ['error', 2],                                                   // Indentación de 2 espacios
      'no-trailing-spaces': 'error',                                            // No permite espacios al final de las líneas
      'react/jsx-indent': ['error', 2],                                         // Indentación de JSX de 2 espacios
      'react/react-in-jsx-scope': 'off',                                        // Permite JSX sin importar React
      "arrow-spacing": ["error", { "before": true, "after": true }],            // Requiere espacios antes y despues de flechas

      // Requerir espacios al final de las etiquetas JSX
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

## 📝 Ejemplo de `eslint.config.js`

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

      // Personalizadas
      '@typescript-eslint/no-unused-expressions': 'off',                        // Permite expresiones sin usar
      '@typescript-eslint/no-misused-promises': 'off',                          // Permite promesas sin manejar
      '@typescript-eslint/no-floating-promises': 'off',                         // Permite promesas sin await
      '@typescript-eslint/strict-boolean-expressions': 'off',                   // Permite expresiones booleanas más flexibles
      '@typescript-eslint/no-unused-vars': 'off',                               // Para variables de tipo
      '@typescript-eslint/no-explicit-any': 'off',                              // Para el uso de 'any'
      '@typescript-eslint/no-empty-interface': 'off',                           // Para interfaces vacías
      '@typescript-eslint/ban-types': 'off',                                    // Para tipos prohibidos
      'semi': ['error', 'never'],                                               // No permite punto y coma al final
      'quotes': ['error', 'single'],                                            // Fuerza el uso de comillas simples
      'space-before-function-paren': ['error', 'always'],                       // Requiere espacio antes de paréntesis en funciones
      'comma-dangle': ['error', 'never'],                                       // No permite coma final en listas
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],          // Máximo una línea en blanco consecutiva
      'eol-last': ['error', 'always'],                                          // Requiere línea vacía al final del archivo
      'object-curly-spacing': ['error', 'always'],                              // Requiere espacios dentro de llaves
      'array-bracket-spacing': ['error', 'never'],                              // No permite espacios dentro de corchetes
      'computed-property-spacing': ['error', 'never'],                          // No permite espacios en propiedades computadas
      'space-in-parens': ['error', 'never'],                                    // No permite espacios dentro de paréntesis
      'space-before-blocks': ['error', 'always'],                               // Requiere espacio antes de bloques
      'keyword-spacing': ['error', { 'before': true, 'after': true }],          // Requiere espacios antes y después de palabras clave
      'space-infix-ops': 'error',                                               // Requiere espacios alrededor de operadores
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],   // Formato de espacios en propiedades de objetos
      'indent': ['error', 2],                                                   // Indentación de 2 espacios
      'no-trailing-spaces': 'error',                                            // No permite espacios al final de las líneas
      'react/jsx-indent': ['error', 2],                                         // Indentación de JSX de 2 espacios
      'react/react-in-jsx-scope': 'off',                                        // Permite JSX sin importar React
      "arrow-spacing": ["error", { "before": true, "after": true }],            // Requiere espacios antes y despues de flechas

      // Requiere espacios al final de las etiquetas JSX
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

## 🤝 Contribuciones

Siéntete libre de contribuir a este proyecto abriendo una solicitud de extracción o informando un problema.
