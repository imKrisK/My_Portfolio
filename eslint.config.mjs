import js from '@eslint/js';
import { eslintNextPlugin } from '@next/eslint-plugin-next';

export default [
  js.configs.recommended,
  {
    plugins: {
      '@next/next': eslintNextPlugin,
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'error',
    },
  },
];