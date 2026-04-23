import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
        },
    },
    build: {
        outDir: 'dist',
        minify: 'esbuild',
        cssMinify: true,
        reportCompressedSize: false,
        chunkSizeWarningLimit: 2000,
        rollupOptions: {
            output: {
                // Desativado temporariamente para resolver erro de inicialização
                // manualChunks(id: string) { ... }
            },
        },
    },
    server: {
        host: true,
        port: 5173,
    },
});
