# Changelog

## [2026-08-19]

### Added
- Страница галереи (`app/gallery/page.tsx`): 5 альбомов, слайдер, полноэкранный лайтбокс
- JSON-LD `SportsActivityLocation` подключён на главной странице
- Страница 404 (`app/not-found.tsx`)
- `app/apple-icon.png` (180×180) — apple-touch-icon для iOS

### Changed
- Title главной страницы без суффикса-шаблона (`absolute: true` в `buildMetadata`)
- Секция «Отзывы»: карточки единой высоты, обрезка текста (line-clamp) + полноэкранная модалка
- Футер: центрирование на мобильных, логотип федерации с `width={0} height={0}`

### Fixed / Optimized
- `kudo-video-bg.mp4` сжат: 35 MB → 10 MB (H.264, 720p, CRF 28, без аудио)
- Шрифты переведены `.ttf` → `.woff2`: суммарно ~475 KB → ~186 KB (−60%)

## [Unreleased]

### Added
- Инициализация проекта: Next.js 15, React 19, TypeScript, Tailwind CSS 3, Swiper
- Базовая структура App Router: `app/page.tsx`, `app/parents/page.tsx`
- Глобальные стили с CSS-переменными клуба и сбросами
- Tailwind-тема с цветами клуба (primary: `#E60023`)
- `README.md`, `CHANGELOG.md`, `next.config.mjs`
- **Этап 2: Статика** — перенесены шрифты, изображения, видео и favicon
- Локальные шрифты (`app/fonts/`): Manrope (Regular + Bold), Roboto (Regular + Bold)
- `app/icon.svg` — favicon из `logo.svg`
- `next/font/local` в `app/layout.tsx` с CSS-переменными
- Оптимизация изображений: PNG/JPG → WebP (sharp, quality 80-85)
- `polaroid.png` (1026 KB → 182 KB) — сжатие в 5.6×
- Старые `.png`/`.jpg` удалены, оставлены только `.webp` и `.svg`
