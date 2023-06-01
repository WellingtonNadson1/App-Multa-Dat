// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.ejs'),
        nested: resolve(__dirname, 'views/index.ejs'),
      },
    },
  },
})