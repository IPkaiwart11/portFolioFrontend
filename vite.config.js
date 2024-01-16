// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'


// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': 'http://localhost:8800',
//     },
//   },

  
// })
/////////////////////////
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  
  server: {
    proxy: {
      // '/api': 'http://localhost:8800',
      '/api': 'https://portfoliobackend-ia9m.onrender.com',
    },
  },
  build: {
    target: 'modules',
    outDir: 'dist',
  },
});
