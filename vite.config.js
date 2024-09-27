import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: 'terser', // Использование Terser для минификации
        terserOptions: {
            compress: {
                drop_console: true, // Удалить консольные сообщения из билда
                drop_debugger: true // Удалить отладочные операторы
            }
        },
        rollupOptions: {
            output: {
                // Задаем имя для основного файла
                entryFileNames: `assets/main-v2.6.6.min.js`,
                // Задаем имя для чанк файлов
                chunkFileNames: `assets/[name].[hash].min.js`,
                // Для статических ресурсов
                assetFileNames: `assets/[name].[hash][extname]`,
            }
        }
    }
});