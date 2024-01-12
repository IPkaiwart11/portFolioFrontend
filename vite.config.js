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
      screens: path.resolve(__dirname, './src/screens'),
      components: 'src/components',
    },
  },
})

