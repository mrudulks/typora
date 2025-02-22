import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'
import { fileURLToPath, URL } from 'url'
dotenv.config()

// https://vitejs.dev/config/                                                                             
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: Number(process.env.VITE_PORT),
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },

})
