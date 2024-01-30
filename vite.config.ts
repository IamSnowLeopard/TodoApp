import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//export default defineConfig({
//  base: '/<REPO>/'
//})

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "public/404.html"),
      },
    },
  },
});