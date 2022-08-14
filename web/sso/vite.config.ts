import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    hmr: true, // 热更新
    open: true, // 浏览器自动打开主页
    host: '0.0.0.0',
    port: 5288,
    https: false
  }
})
