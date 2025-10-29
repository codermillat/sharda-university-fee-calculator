import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
    return {
      base: command === 'build' ? '/sharda-university-fee-calculator/' : '/',
      server: {
        port: 3000,
        host: 'localhost',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
