import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
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
