import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const releaseVersion = "2.6.27";
export default defineConfig({
  base: "/getcompass.ru/", // Указываем базовый путь для проекта
  resolve: {
    alias: {
      // Резолвим импорты вида "src/..." и "@/..." от папки src,
      // как это настроено в tsconfig.json (baseUrl: "src")
      src: fileURLToPath(new URL("./src", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    //cssMinify: 'lightningcss',
    //minify: "none",
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
        entryFileNames: `static/js/main-v${releaseVersion}.min.js`, // Имя для JavaScript файлов
        chunkFileNames: `static/js/[name].[hash].min.js`, // Имя для чанков JavaScript
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return `static/css/main-v${releaseVersion}.min[extname]`; // CSS файлы в отдельную папку
          } else if (assetInfo.name.endsWith(".png")) {
            return `static/images/[name]-v${releaseVersion}[extname]`; // Картинки в папку images
          } else if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `static/fonts/[name][extname]`; // Шрифты в папку fonts
          }
          return `static/[name][extname]`; // Другие ассеты
        },
      },
    },
  },
});
