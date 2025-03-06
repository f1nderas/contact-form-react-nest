# Проект: Форма обратной связи

## Структура проекта
- /backend — Сервер на NestJS + Prisma
- /frontend — Клиент на React + TypeScript

## Установка и запуск
### 1️⃣ Клонирование репозитория

git clone https://github.com/contact-form-react-nest.git
cd contact-form-react-nest


### 2️⃣ Запуск базы данных через Docker Compose

docker-compose up --build

### 3️⃣ Настройка и запуск Backend вручную

cd backend
cp .env.example .env # Заполнить переменные окружения
npm install
npm run start


### 4️⃣ Настройка и запуск Frontend

cd ../frontend
npm install
npm run dev


## API Эндпоинты (Backend)
- POST /contact — Отправка формы

## Дополнительно
- Уведомления об успешной/неудачной отправке через react-toastify
- Валидация формы с React Hook Form
