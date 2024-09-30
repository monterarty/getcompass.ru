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
            external: ['jquery'],  // Указываем jQuery как внешнюю зависимость
            output: {
                globals: {
                    jquery: 'jQuery'   // Указываем, что jQuery глобально доступен через переменную `jQuery`
                },
                entryFileNames: `assets/[name]-v2.6.6.min.js`,
                chunkFileNames: `assets/[name].[hash].min.js`,
                assetFileNames: `assets/[name]-v2.6.6[extname]`,
            },
        },
    },
});
