import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'
dotenv.config()

// https://vitejs.dev/config/                                                                             
export default defineConfig({
  server: {
    port: Number(process.env.VITE_PORT),
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
