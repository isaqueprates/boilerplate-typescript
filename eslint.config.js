import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    languageOptions: {
      parser: typescriptParser, // Configura o parser
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin, // Ativa o plugin
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'], // Aplicar para arquivos TypeScript
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
