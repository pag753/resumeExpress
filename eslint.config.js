import globals from 'globals';
import pluginJs from '@eslint/js';

/**
 * Configuración de ESLint en formato Flat Config para el proyecto Express (Node.js).
 */
export default [
  // 1. Reglas base recomendadas por ESLint
  pluginJs.configs.recommended,
  
  // 2. Definición de archivos y reglas específicas para Node.js
  {
    files: ['**/*.js'], // Aplica a todos los archivos .js
    languageOptions: {
      globals: {
        // Habilita variables globales comunes de Node.js (como 'process', 'Buffer', etc.)
        ...globals.node,
        // Habilita variables globales de ES2021
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module', // Habilita la sintaxis import/export
      },
    },
    // 3. Reglas específicas para el backend
    rules: {
      // Estilo de indentación: Error si no usa 2 espacios.
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      
      // Punto y coma: Error si no usa punto y coma al final.
      'semi': ['error', 'always'],
      
      // Comillas: Error si no usa comillas simples (single quotes)
      'quotes': ['error', 'single'],
      
      // Consola: Advertencia si se usa console.log, pero permite 'warn' y 'error'.
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      
      // Variables no usadas: Error, pero ignora el parámetro 'next' en Express.
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
      
      // Desactiva 'no-undef' para permitir sintaxis CommonJS (module.exports, require),
      // ya que 'globals.node' debe cubrir la mayoría de las variables.
      'no-undef': 'off'
    },
    
  }
  
];