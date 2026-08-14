import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  server:{
    proxy:{
      "/api":{
        target:"http://127.0.0.1:5500",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})