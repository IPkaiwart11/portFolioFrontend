import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8800',
    },
  },
  // resolve: {
  //   alias: {
  //     '/src': 'opt/build/repo/src',
  //   },
  // },
})

