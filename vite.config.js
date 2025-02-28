import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'


// 获取当前文件的目录名
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// https://vite.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,   // 自动清除上一次打包结果
    terserOptions: {
      compress: {
        drop_console: true,   // 移出所有 console 语句
        drop_debugger: true   // 移出 debugger 语句
      }
    }
  },
  plugins: [react()],
  // 别名路径配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 浏览器配置
  server: {
    open: true
  }
})
