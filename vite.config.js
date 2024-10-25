import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: path.resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    server: {
        port: 8080,
        hot: true
    },
    build: {
        outDir: path.resolve(__dirname, 'dist'),  // Specify the output directory as 'dist'
        emptyOutDir: true,  // Ensure the 'dist' directory is cleaned before each build
        rollupOptions: {
            input: path.resolve(__dirname, 'src', 'index.html')  // Specify the entry point (if needed)
        }
    }
});