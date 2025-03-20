#!/bin/bash

# Создаем рабочую директорию
mkdir -p font-subset
cd font-subset

# Скачиваем шрифт Inter (если его еще нет)
if [ ! -f "Inter-Bold.ttf" ]; then
    echo "Downloading Inter font..."
    curl -L -o inter.zip https://github.com/rsms/inter/releases/download/v4.1/Inter-4.1.zip
    unzip inter.zip
    cp Inter\ Desktop/Inter-Bold.ttf ./
    echo "Inter-Bold.ttf downloaded and ready"
fi

# Устанавливаем Glyphhanger (если необходимо)
if ! command -v glyphhanger &> /dev/null; then
    echo "Installing Glyphhanger..."
    npm install -g glyphhanger
fi

# Создаем подмножество для заголовка
echo "Creating subset for specific text..."
glyphhanger --whitelist="Безопасный и быстрый корпоративный мессенджер" --subset=Inter-Bold.ttf --formats=woff2,woff --output-directory=./output

echo "Done! Optimized font files created."