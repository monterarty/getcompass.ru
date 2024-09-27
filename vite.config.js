import { defineConfig } from 'vite';

export default defineConfig({
    base: '/getcompass.ru/',  // Указываем базовый путь для GitHub Pages
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            output: {
                entryFileNames: `assets/main-v2.6.6.min.js`,
                chunkFileNames: `assets/[name].[hash].min.js`,
                assetFileNames: `assets/[name]-v2.6.6[extname]`,
            },
        },
    },
});
