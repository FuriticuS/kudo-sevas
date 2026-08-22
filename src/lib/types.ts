// ============================================
// Базовые типы для сайта KUDO Севастополь
// ============================================

/** Пункт навигационного меню */
export interface NavItem {
  label: string;
  href: string;
  /** Открывать в новой вкладке (для внешних ссылок) */
  external?: boolean;
}

/** Контактная информация */
export interface ContactInfo {
  address: string;
  phone: string;
  /** Для tel: ссылки (без +, скобок, пробелов) */
  phoneRaw: string;
  /** Руководитель клуба */
  headCoach: {
    name: string;
    rank: string;
    description: string;
  };
}

/** Элемент расписания тренировок */
export interface ScheduleItem {
  group: string;
  days: string;
  time: string;
}

/** Отзыв */
export interface Review {
  text: string;
  author: string;
  /** К какому разделу относится (главная / родители) */
  section: "main" | "parents";
}

/** Социальная сеть в футере */
export interface SocialLink {
  label: string;
  href: string;
  /** SVG-иконка или название для импорта */
  icon: "vk";
}

/** Информация о поясе */
export interface Belt {
  ky: number; // 10–1 кю
  color:
    | "фиолетовый"
    | "синий"
    | "желтый"
    | "зеленый"
    | "коричневый"
    | "черный";
  stripes: number; // количество полосок
  /** Ученический, старший ученический или мастерский */
  category: "ученический" | "старший ученический" | "мастерский";
}

/** Документ для родителей */
export interface ParentDocument {
  name: string;
  /** Если есть ссылка на скачивание */
  href?: string;
}

/** Преимущество (для секции «Кудо помогает») */
export interface Benefit {
  text: string;
}

/** Слайд в Swiper */
export interface SlideItem {
  image: string; // путь к .webp
  alt: string;
}

/** Данные для секции основателя */
export interface FounderInfo {
  quote: string;
  name: string;
  description: string;
  image: string;
}

/** Информация о тренере (блок «Тренер» на главной) */
export interface CoachInfo {
  name: string;
  rank: string;
  description: string;
  lead: string;
  image: string;
}

/** Вопрос-ответ в интервью тренера */
export interface InterviewQA {
  question: string;
  /** Ответ, поддерживает markdown-ссылки [текст](url) и абзацы через пустую строку */
  answer: string;
}

/** Блок описания тренера: абзац или маркированный список */
export type CoachContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

/** Профиль тренера на странице «Тренерский состав» */
export interface CoachProfile {
  name: string;
  rank: string;
  /** Описание (абзацы и списки достижений) */
  blocks: CoachContentBlock[];
  /** Телефон для записи (если отличается от общего контактного) */
  phone?: string;
  /** Для tel: ссылки (без +, скобок, пробелов) */
  phoneRaw?: string;
  /** Подпись к телефону (по умолчанию «Телефон тренера:») */
  phoneLabel?: string;
  /** Показывать общее расписание клуба */
  showSchedule?: boolean;
  /** Фото тренера (слайды Swiper) */
  slides: SlideItem[];
}

/** Yandex Maps */
export interface MapData {
  /** URL для <iframe> */
  iframeUrl: string;
  /** Название места */
  placeName: string;
}

/** Фото в галерее */
export interface GalleryImage {
  src: string; // путь к .webp
  alt: string;
}

/** Альбом галереи */
export interface GalleryAlbum {
  title: string;
  /** slug папки с фото */
  slug: string;
  images: GalleryImage[];
}

/** Видео в галерее */
export interface GalleryVideo {
  title: string;
  src: string; // путь к .mp4
  poster: string; // путь к кадру-превью
  /** Вертикальное видео (Instagram-стиль) — ограничиваем по высоте */
  vertical?: boolean;
}
