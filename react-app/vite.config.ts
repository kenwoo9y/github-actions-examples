import { defineConfig } from 'vite'
import { configDefaults } from "vitest/config";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // テストに関するAPIをグローバルに設定
    globals: true,
    // テスト環境の設定
    environment: "jsdom",
    // テストの設定ファイル
    setupFiles: "./test/setup.ts",
    // CSSファイルを処理する
    css: true,
    // テストのカバレッジを出力する設定
    coverage: {
      // @vitest/coverage-v8を設定
      provider: "v8",
      reporter: ['text', 'json', 'html'], // レポートフォーマット
      thresholds: {
        statements: 80,  // カバレッジの閾値: ステートメントが80%以上必要
        branches: 80,    // カバレッジの閾値: ブランチカバレッジ80%以上
        functions: 80,   // カバレッジの閾値: 関数カバレッジ80%以上
        lines: 80,       // カバレッジの閾値: 行カバレッジ80%以上
      },
      exclude: [
        ...(configDefaults.coverage.exclude as string[]),
        "test",
        "src/main.tsx",
        "src/App.tsx"
      ],
    },
  },
})
