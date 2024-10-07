import { defineConfig } from 'vite';

export default defineConfig({
  base: '/getcompass.ru/', // Указываем базовый путь для проекта
  build: {
    //cssMinify: 'lightningcss',
    minify: 'none',
    // minify: 'terser', // Минификация с использованием Terser
    // terserOptions: {
    //   compress: {
    //     drop_console: true, // Удалить все console.log
    //     drop_debugger: true, // Удалить все debugger
    //   },
    // },
    cssCodeSplit: false, // Разделяем CSS и JS на отдельные файлы
    rollupOptions: {
      external: ['jquery'],
      output: {
        format: 'iife',
        name: 'Getcompass',
        globals: {
          jquery: '$',
        },
        entryFileNames: `assets/js/[name]-v2.6.6.min.js`, // Имя для JavaScript файлов
        chunkFileNames: `assets/js/[name].[hash].min.js`, // Имя для чанков JavaScript
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-v2.6.6[extname]'; // CSS файлы в отдельную папку
          } else if (assetInfo.name.endsWith('.png')) {
            return 'assets/images/[name]-v2.6.6[extname]'; // Картинки в папку images
          }
          return 'assets/[name]-v2.6.6[extname]'; // Другие ассеты
        },
      },
    },
  },
});
