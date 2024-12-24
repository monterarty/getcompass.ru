import { defineConfig } from "vite";

export default defineConfig({
  base: "/getcompass.ru/", // Указываем базовый путь для проекта
  build: {
    //cssMinify: 'lightningcss',
    //minify: 'none',
    minify: "terser", // Минификация с использованием Terser
    terserOptions: {
      compress: {
        drop_console: true, // Удалить все console.log
        drop_debugger: true, // Удалить все debugger
      },
    },
    cssCodeSplit: false, // Разделяем CSS и JS на отдельные файлы
    rollupOptions: {
      external: ["jquery"],
      output: {
        format: "iife",
        name: "Getcompass",
        globals: {
          jquery: "$",
        },
        entryFileNames: `static/js/main-v2.6.10.min.js`, // Имя для JavaScript файлов
        chunkFileNames: `static/js/[name].[hash].min.js`, // Имя для чанков JavaScript
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return "static/css/main-v2.6.10.min[extname]"; // CSS файлы в отдельную папку
          } else if (assetInfo.name.endsWith(".png")) {
            return "static/images/[name]-v2.6.10[extname]"; // Картинки в папку images
          }
          return "static/[name]-v2.6.10[extname]"; // Другие ассеты
        },
      },
    },
  },
});
