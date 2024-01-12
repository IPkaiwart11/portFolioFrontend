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
import path from 'path';  // Explicitly import the 'path' module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '/src': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8800',
    },
  },
  build: {
    target: 'modules',
  },

});

