# Changelog

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

### Tech Debt
- ⚠️ `kudo-video-bg.mp4` — 35 MB, нужно сжать (ffmpeg на машине отсутствует)
- ⚠️ Шрифты `.ttf` → `.woff2` (уменьшат размер в 4-5×)
