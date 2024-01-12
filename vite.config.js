import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  root: '/opt/build/repo',
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:8800',
  //   },
  // },
  resolve: {
    alias: {
      '/src': path.resolve(__dirname, 'src'),
    },
  },
})

