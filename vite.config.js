import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        contactos: resolve(__dirname, 'contactos.html'),
        numeros: resolve(__dirname, 'numeros.html'),
        vehiculos: resolve(__dirname, 'vehiculos.html'),
        senales: resolve(__dirname, 'señales.html'),
        documentacion: resolve(__dirname, 'documentacion.html'),
        auxilios: resolve(__dirname, '1ros auxilios.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
