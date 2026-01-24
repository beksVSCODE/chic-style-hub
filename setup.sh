#!/bin/bash

# Быстрый старт для интеграции Google Sheets + Netlify

echo "🚀 Chic Style Hub - Быстрый старт"
echo "=================================="
echo ""

# Шаг 1: Создание .env.local
echo "📝 Шаг 1: Создание переменных окружения..."
if [ ! -f .env.local ]; then
  cp .env.example .env.local
  echo "✅ Файл .env.local создан"
  echo ""
  echo "⚠️  ВАЖНО: Отредактируйте .env.local и вставьте вашу Google Sheets URL"
  echo "   Откройте файл и замените YOUR_SPREADSHEET_ID на реальный ID"
else
  echo "✅ .env.local уже существует"
fi

echo ""
echo "📚 Следующие шаги:"
echo "=================================="
echo ""
echo "1️⃣  Прочитайте полный гайд в файле SETUP_GUIDE.md"
echo ""
echo "2️⃣  Создайте Google Sheets таблицу с продуктами"
echo "   - Посмотрите примеры в SETUP_GUIDE.md"
echo ""
echo "3️⃣  Протестируйте локально:"
echo "   bun run dev"
echo ""
echo "4️⃣  Загрузите на GitHub:"
echo "   git add ."
echo "   git commit -m 'Add Google Sheets integration'"
echo "   git push origin main"
echo ""
echo "5️⃣  Разверните на Netlify:"
echo "   - Откройте https://app.netlify.com"
echo "   - Нажмите 'New site from Git'"
echo "   - Выберите репозиторий"
echo "   - Добавьте переменную VITE_GOOGLE_SHEET_URL в Build & deploy settings"
echo "   - Нажмите Deploy"
echo ""
echo "✨ Готово! Теперь можете обновлять контент в Google Sheets"
echo ""
