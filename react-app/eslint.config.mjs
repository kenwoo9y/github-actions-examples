import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'

export default {
  ignores: ['dist'],

  files: ['**/*.{ts,tsx}'],

  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parser: typescriptEslintParser,
    parserOptions: {
      project: ['./tsconfig.json'],  // TypeScriptプロジェクトファイル
      ecmaFeatures: {
        jsx: true,  // JSXのサポート
      },
    },
  },

  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    '@typescript-eslint': typescriptEslintPlugin,
  },

  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',  // TypeScript用ルール
  },

  settings: {
    react: {
      version: 'detect', // Reactのバージョンを自動検出
    },
  },
}
