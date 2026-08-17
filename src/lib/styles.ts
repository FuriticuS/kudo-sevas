// ============================================
// Все Tailwind-классы (className) вынесены сюда.
// В компонентах используем только имена переменных.
// ============================================

// --- Фоны секций ---
export const SECTION_DARK = "bg-dark";
export const SECTION_LIGHT = "bg-light text-dark";

// --- Контейнеры ---
export const CONTAINER = "mx-auto max-w-[1440px] px-4 py-20 md:px-8";
export const CONTAINER_SM = "mx-auto max-w-[1440px] px-4 py-16 md:px-8";

// --- Общий дизайн секции: тёмный фон + красная кисть + белая карточка ---
export const SECTION_CARD =
  "bg-dark bg-[url('/images/lines/brush-red.webp')] bg-top bg-no-repeat px-4 py-20 md:px-8";
export const CARD_WRAP =
  "mx-auto max-w-[1440px] rounded bg-light p-6 text-dark md:p-10";
export const DARK_WRAP = "mx-auto max-w-[1440px]";

// --- Типографика (базовые) ---
export const SECTION_TITLE =
  "text-3xl font-extrabold uppercase tracking-tight md:text-4xl";
export const BODY_TEXT = "text-base leading-relaxed text-gray";
export const SUBHEADING = "text-2xl font-extrabold uppercase tracking-tight";

// --- Заголовки секций с отступами ---
export const SECTION_TITLE_MB_6 = `mb-6 ${SECTION_TITLE}`;
export const SECTION_TITLE_MB_8 = `mb-8 ${SECTION_TITLE}`;
export const SECTION_TITLE_MB_10 = `mb-10 ${SECTION_TITLE}`;

// --- Подзаголовки (h3) ---
export const SUBHEADING_CONTACTS = `mb-4 mt-8 ${SUBHEADING}`;
export const SUBHEADING_BELTS = `mb-8 ${SUBHEADING}`;
export const SUBHEADING_DOCS = `mb-4 ${SUBHEADING}`;

// --- Кнопки ---
export const BUTTON_PRIMARY =
  "inline-block rounded bg-primary px-8 py-4 text-base font-bold uppercase tracking-wide text-light transition-opacity hover:opacity-85";
export const BUTTON_PRIMARY_SM =
  "inline-block rounded bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-light transition-opacity hover:opacity-85";

// --- Ссылки ---
export const LINK_TEL = "text-primary transition-opacity hover:opacity-75";
export const LINK_HOVER = "transition-colors hover:text-primary";
export const NAV_LINK =
  "text-md font-bold uppercase tracking-wide text-light transition-colors hover:text-primary";
export const NAV_LINK_MOBILE =
  "block py-3 text-base font-bold uppercase tracking-wide text-light transition-colors hover:text-primary";

// --- Изображения ---
export const IMG_COVER = "object-cover";

// --- Общие текстовые/списочные утилиты ---
export const TEXT_STACK = "space-y-4";
export const LIST_STACK = "space-y-3";
export const LIST_TEXT = "text-base text-gray";
export const DEFINITION_TERM = "font-bold";
export const DEFINITION_DESC = "text-gray";

// --- Сетки и карта ---
export const TWO_COL_GRID = "grid gap-10 lg:grid-cols-2";
export const MAP_WRAP = "overflow-hidden rounded-xl";
export const MAP_IFRAME = "h-full min-h-[400px] w-full border-0";

// --- Карточка отзыва ---
export const REVIEW_CARD =
  "grid h-full gap-6 rounded-xl border border-black/10 bg-dark p-6 md:grid-cols-[240px_1fr] md:p-8";
export const REVIEW_CARD_ON_DARK =
  "grid h-full gap-6 rounded-xl border border-white/10 bg-dark p-6 md:grid-cols-[240px_1fr] md:p-8";
export const REVIEW_IMAGE =
  "relative h-48 w-full overflow-hidden rounded-lg md:h-full md:min-h-[240px]";
export const REVIEW_TEXT_WRAP = "flex flex-col justify-center";
export const REVIEW_TEXT = "text-base leading-relaxed text-light";
export const REVIEW_AUTHOR = "mt-4 font-bold text-primary";

// --- Расписание ---
export const SCHEDULE_ROW = "flex flex-wrap items-baseline gap-x-3";

// --- Списки/маркеры ---
export const BULLET = "mt-1 h-2 w-2 shrink-0 rounded-full bg-primary";
export const BENEFIT_CARD =
  "flex items-start gap-3 rounded-lg border border-black/10 bg-black/5 px-4 py-3";
export const BELT_CARD =
  "rounded-lg border border-black/10 bg-dark px-4 py-3 text-base text-light";

// ============================================
// Header
// ============================================
export const HEADER = "fixed inset-x-0 top-0 z-50 bg-dark";
export const HEADER_INNER =
  "mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-8";
export const LOGO_SM = "h-12 w-12 object-contain md:h-16 md:w-16";
export const DESKTOP_NAV = "hidden lg:block";
export const DESKTOP_NAV_LIST = "flex items-center gap-6";
export const BURGER =
  "flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden";
export const BURGER_LINE = "h-0.5 w-6 bg-light transition-transform";
export const BURGER_LINE_FADE = "h-0.5 w-6 bg-light transition-opacity";
export const BURGER_TOP_OPEN = "translate-y-2 rotate-45";
export const BURGER_FADE_OPEN = "opacity-0";
export const BURGER_BOTTOM_OPEN = "-translate-y-2 -rotate-45";
export const MOBILE_NAV = "border-t border-white/10 bg-black/95 lg:hidden";
export const MOBILE_NAV_LIST = "flex flex-col gap-1 px-4 py-4";

// ============================================
// Footer
// ============================================
export const FOOTER_CONTAINER = "mx-auto max-w-[1440px] px-4 py-12 md:px-8";
export const FOOTER_GRID = "grid gap-10 md:grid-cols-2 lg:grid-cols-3";
export const FOOTER_NAV_COL = "flex flex-col gap-6";
export const LOGO_XS = "h-12 w-12 object-contain";
export const FOOTER_NAV_LIST = "flex flex-col gap-2";
export const FOOTER_CONTACTS_COL = "flex flex-col gap-8";
export const FOOTER_LABEL = "mb-3 text-sm text-gray";
export const SOCIAL_ROW = "flex items-center gap-3";
export const SOCIAL_ICON =
  "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary";
export const SOCIAL_ICON_SVG = "h-5 w-5 fill-light";
export const FOOTER_FED_COL = "flex flex-col gap-3";
export const FED_LINK = "inline-block";
export const FED_LOGO = "h-10 w-auto object-contain";
export const FED_NAME = "text-sm font-bold text-light";
export const FED_ADDRESS = "max-w-xs text-xs text-gray";
export const FOOTER_COPYRIGHT_WRAP = "mt-12 border-t border-white/10 pt-6";
export const COPYRIGHT_TEXT = "text-xs text-gray";
export const COPYRIGHT_LINK = `text-light ${LINK_HOVER}`;

// ============================================
// Hero (главная)
// ============================================
export const HERO_SECTION = "relative flex min-h-screen items-center overflow-hidden";
export const HERO_VIDEO = "absolute inset-0 h-full w-full object-cover";
export const HERO_OVERLAY = "absolute inset-0 bg-[#1d1d1d]/80";
export const HERO_CONTENT =
  "relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-24 text-center";
export const HERO_TITLE =
  "text-[clamp(4rem,5vw,8rem)] font-extrabold uppercase leading-none tracking-tight text-light";
export const HERO_BUTTON = `mt-24 ${BUTTON_PRIMARY}`;

// ============================================
// Founder
// ============================================
export const FOUNDER_SECTION =
  "bg-dark bg-[url('/images/lines/brush-red.webp')] bg-top bg-no-repeat px-4 py-20 md:px-8";
export const FOUNDER_WRAP =
  "mx-auto grid max-w-[1440px] items-center gap-10 rounded bg-light p-6 md:grid-cols-[7fr_3fr] md:p-10";
export const FOUNDER_TEXT = "flex flex-col justify-center";
export const FOUNDER_QUOTE =
  "text-center text-[2rem] font-bold leading-relaxed text-dark md:text-left md:text-4xl";
export const FOUNDER_DESC = `mt-6 ${BODY_TEXT}`;
export const FOUNDER_NAME = "text-2xl font-bold text-dark";
export const FOUNDER_IMAGE = "mx-auto h-auto w-full max-w-[400px]";
export const FOUNDER_ABOUT = "mt-12";
export const FOUNDER_TITLE = `mt-8 ${SECTION_TITLE} text-dark`;

// ============================================
// About Kudo
// ============================================
export const ABOUT_BODY = "max-w-3xl space-y-4";

// ============================================
// Club
// ============================================
export const CLUB_WRAP =
  "mx-auto grid max-w-[1440px] items-center gap-10 rounded bg-light p-6 text-dark md:grid-cols-2 md:p-10 [&>div]:min-w-0";
export const CAROUSEL_4_3 = "aspect-[4/3]";
export const CAROUSEL_SQUARE = "aspect-square";
export const SLIDE_IMAGE = "relative h-full w-full overflow-hidden rounded-xl";

// ============================================
// Parents Hero
// ============================================
export const PARENTS_HERO_SECTION =
  "relative flex min-h-screen items-center overflow-hidden bg-dark";
export const PARENTS_HERO_SLIDER = "absolute inset-0 z-0";
export const PARENTS_HERO_SWIPER = "h-full w-full";
export const PARENTS_HERO_SLIDE = "relative h-full w-full";
export const PARENTS_HERO_OVERLAY = "absolute inset-0 z-10 bg-[#1d1d1d]/80";
export const PARENTS_HERO_CONTAINER =
  "relative z-20 mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 py-24 text-center md:px-8";
export const PARENTS_HERO_TITLE =
  "max-w-3xl text-4xl font-extrabold uppercase leading-tight tracking-tight text-light md:text-6xl";
export const PARENTS_HERO_SUBTITLE =
  "mt-6 max-w-3xl text-xl font-bold text-light md:text-2xl";
export const PARENTS_HERO_DESC = "mt-8 max-w-4xl text-base leading-relaxed text-light";
export const PARENTS_HERO_BUTTON = `mt-16 ${BUTTON_PRIMARY}`;

// ============================================
// Parents Stats
// ============================================
export const STATS_TEXT = "max-w-3xl text-2xl font-bold leading-relaxed md:text-3xl";

// ============================================
// Parents Safety
// ============================================
export const SAFETY_BODY = "max-w-3xl space-y-6";
export const SAFETY_QUOTE = "text-lg font-bold italic leading-relaxed text-dark";
export const SAFETY_QUOTE_AUTHOR = "font-bold text-primary";

// ============================================
// Parents Upbringing
// ============================================
export const UPBRINGING_LEAD = "mb-4 text-lg font-bold";
export const BENEFITS_GRID = "mb-8 grid gap-3 md:grid-cols-2";
export const UPBRINGING_QUOTE =
  "mb-4 border-l-4 border-primary pl-4 text-lg font-bold italic leading-relaxed text-dark";
export const UPBRINGING_CLOSING = `max-w-3xl ${BODY_TEXT}`;

// ============================================
// Parents Development
// ============================================
export const DEVELOPMENT_INTRO = `mb-10 max-w-3xl ${BODY_TEXT}`;
export const BELTS_STACK = "space-y-8";
export const BELT_CATEGORY = "mb-4 font-bold text-primary";
export const BELTS_GRID = "grid gap-2 md:grid-cols-2";

// ============================================
// Parents Documents
// ============================================
export const DOCS_LABEL = "mb-4 font-bold";
export const DOCS_LIST = "mb-8 space-y-2";
export const DOCS_ITEM = "flex items-center gap-3";
export const DOCS_BULLET = "h-2 w-2 shrink-0 rounded-full bg-primary";
export const DOCS_TEXT = "flex-1 text-base text-gray";
export const DOCS_ICON_LINK =
  "flex shrink-0 items-center gap-1.5 text-primary transition-opacity hover:opacity-75";
export const DOCS_ICON = "h-4 w-4";
export const DOCS_DOWNLOAD_TEXT = "text-sm font-bold uppercase tracking-wide";
export const DOCS_CONTACT_LABEL = "mb-2 font-bold";
export const DOCS_CONTACT_TEXT = "mb-8 text-base text-gray";

// ============================================
// Equipment Center
// ============================================
export const EQUIPMENT_WRAP = "grid items-center gap-10 md:grid-cols-2";
export const EQUIPMENT_LEFT = "flex flex-col";
export const EQUIPMENT_RIGHT = "flex items-center justify-center";
export const EQUIPMENT_LOGO = "h-auto w-full max-w-[300px]";
export const EQUIPMENT_TEXT =
  "mb-8 max-w-2xl text-base leading-relaxed text-gray";
export const EQUIPMENT_BUTTON = `${BUTTON_PRIMARY}`;

// ============================================
// ScrollToTop
// ============================================
export const SCROLL_TO_TOP =
  "fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-light shadow-lg transition-all hover:opacity-85";
export const SCROLL_TO_TOP_VISIBLE = "translate-y-0 opacity-100";
export const SCROLL_TO_TOP_HIDDEN = "pointer-events-none translate-y-4 opacity-0";
export const SCROLL_TO_TOP_ICON = "h-6 w-6";

// ============================================
// SwiperCarousel
// ============================================
export const SWIPER_NAV =
  "[&_.swiper-pagination-bullet]:bg-dark [&_.swiper-pagination-bullet-active]:bg-primary [&_.swiper-button-prev]:text-primary [&_.swiper-button-next]:text-primary";

// ============================================
// Gallery
// ============================================
export const GALLERY_SECTION = "flex min-h-screen items-center justify-center bg-dark";
