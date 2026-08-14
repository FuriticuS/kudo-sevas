# KUDO Севастополь

Сайт спортивного клуба KUDO «ДОБЛЕСТЬ» (Севастополь). Миграция статичного HTML/CSS/JS на современный стек **Next.js + TypeScript + Tailwind CSS**.

## Технологии

| Технология | Версия |
|------------|--------|
| Next.js (App Router) | ^15.5.23 |
| React | ^19.2.8 |
| TypeScript | ^6.0.0 |
| Tailwind CSS | ^3.4.19 |
| Swiper | ^14.1.0 |

## Требования

- Node.js 18.18+ (рекомендуется 20+)
- npm

## Установка и запуск

```bash
npm install       # установка зависимостей
npm run dev       # dev-сервер (http://localhost:3000)
npm run build     # production-сборка
npm run start     # запуск собранного приложения
npm run lint      # проверка линтером
```

## Страницы

| Маршрут      | Описание                                              |
|--------------|-------------------------------------------------------|
| `/`          | Главная (герой, основатель, о кудо, клуб, контакты, отзывы) |
| `/parents`   | Для родителей (безопасность, воспитание, развитие, документы, отзывы) |
| `/gallery`   | Галерея (фото с тренировок и соревнований)            |

## Структура

```
app/                # App Router: страницы, layout, sitemap, robots
  page.tsx          # главная страница
  parents/page.tsx  # страница «Для родителей»
  gallery/page.tsx  # страница галереи
  layout.tsx        # корневой layout (шрифты, Header/Footer, JSON-LD)
  sitemap.ts        # карта сайта
  robots.ts         # robots.txt
  globals.css       # глобальные стили и CSS-переменные Tailwind
components/
  Header.tsx        # шапка с мобильным меню (client)
  Footer.tsx        # подвал
  ScrollToTop.tsx   # кнопка «наверх» (client)
  SwiperCarousel.tsx# слайдер отзывов/слайдов (client)
  JsonLd.tsx        # JSON-LD (Schema.org)
  sections/         # секции главной страницы
  parents/          # секции страницы «Для родителей»
lib/
  constants.ts      # весь контент сайта (данные, тексты, ссылки)
  types.ts          # TypeScript-типы
  styles.ts         # все Tailwind-классы (className) как именованные константы
  metadata.ts       # генерация метаданных и JSON-LD
public/             # статика: изображения, видео, шрифты
tailwind.config.ts  # конфиг Tailwind (цвета, шрифты, content)
```

## Система стилей

Все `className` вынесены в `lib/styles.ts` как именованные константы. В компонентах подставляются **только имена переменных** — инлайновых Tailwind-строк в JSX нет.

Правила:
- Новый стиль сначала добавляется в `lib/styles.ts`, а не хардкодится в JSX.
- Константы группируются по секциям с префиксами (`HERO_*`, `FOOTER_*`, `PARENTS_*`, …).
- Составные стили (отступ + базовый класс) собираются через шаблонные строки в `styles.ts`, чтобы в компоненте был один `className`.
- Исключение: динамические имена шрифтов `next/font` в `app/layout.tsx` (`${manrope.variable} ${roboto.variable}`).

> ⚠️ Tailwind сканирует `lib/**` в `tailwind.config.ts` — не удаляйте этот путь из `content`, иначе классы из `styles.ts` перестанут генерироваться.

## Цвета и шрифты

Кастомные цвета заданы в `tailwind.config.ts`:

- `dark: #000000`
- `light: #ffffff`
- `primary: #E60023`
- `gray: #5F646D`

Шрифты подключаются локально через `next/font/local` (Manrope 400/800, Roboto 400/700) в `app/layout.tsx`.

## SEO

- Метаданные генерируются через `buildMetadata()` в `lib/metadata.ts`.
- `app/sitemap.ts` — карта сайта.
- `app/robots.ts` — robots.txt.
- `components/JsonLd.tsx` — структурированные данные Schema.org (организация).
