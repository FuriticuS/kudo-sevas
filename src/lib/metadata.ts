import type { Metadata } from "next";
import { SITE, CONTACTS, MAP, COACH_INTERVIEW } from "./constants";

// ============================================
// Переиспользуемые метаданные страниц
// ============================================

interface BuildMetadataOptions {
  /** Заголовок страницы (без суффикса-шаблона) */
  title: string;
  /** Описание страницы (по умолчанию — общее описание сайта) */
  description?: string;
  /** Ключевые фразы (по умолчанию — общий список из SITE.keywords) */
  keywords?: string[];
  /** Путь страницы, например "/parents" */
  path?: string;
  /** OG-изображение (по умолчанию — логотип) */
  ogImage?: string;
  /** Если true — title без суффикса-шаблона (для главной страницы) */
  absolute?: boolean;
}

/**
 * Собирает объект Metadata для страницы:
 * title, description, canonical, Open Graph, Twitter.
 */
export function buildMetadata({
  title,
  description = SITE.defaultDescription,
  keywords = SITE.keywords,
  path = "/",
  ogImage = SITE.defaultOgImage,
  absolute = false,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;
  const image = ogImage.startsWith("http")
    ? ogImage
    : `${SITE.url}${ogImage}`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// ============================================
// JSON-LD разметка (Schema.org)
// ============================================

/**
 * JSON-LD: Organization — спортивная организация (клуб «Доблесть»).
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Спортивный клуб «Доблесть»",
  alternateName: "KUDO Севастополь",
  url: SITE.url,
  logo: `${SITE.url}${SITE.defaultOgImage}`,
  slogan: SITE.slogan,
  telephone: CONTACTS.phoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACTS.address,
    addressLocality: "Севастополь",
    addressCountry: "RU",
  },
  areaServed: {
    "@type": "City",
    name: "Севастополь",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACTS.phoneRaw,
    contactType: "customer service",
    availableLanguage: "ru",
  },
  knowsAbout: [
    "кудо",
    "секция кудо",
    "единоборства",
    "боевые искусства",
    "детский спорт",
    "самооборона",
    "тренировки по кудо",
  ],
  founder: {
    "@type": "Person",
    name: CONTACTS.headCoach.name,
    jobTitle: CONTACTS.headCoach.rank,
  },
} as const;

/**
 * JSON-LD: SportsActivityLocation — место проведения тренировок.
 */
export const sportsActivityLocationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Спортивный клуб «Доблесть»",
  alternateName: "Клуб кудо в Севастополе «Доблесть»",
  url: `${SITE.url}/#contacts`,
  telephone: CONTACTS.phoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACTS.address,
    addressLocality: "Севастополь",
    addressCountry: "RU",
  },
  areaServed: {
    "@type": "City",
    name: "Севастополь",
  },
  knowsAbout: [
    "кудо",
    "секция кудо",
    "тренировки для детей",
    "единоборства для детей",
    "самооборона",
  ],
  hasMap: MAP.iframeUrl,
} as const;

// ============================================
// JSON-LD: FAQPage — вопросы-ответы из интервью тренера.
// ============================================

/** Убирает markdown-разметку из текста для корректной JSON-LD разметки */
const stripMarkdown = (text: string): string =>
  text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\n{2,}/g, " ");

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COACH_INTERVIEW.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: stripMarkdown(item.answer),
    },
  })),
} as const;
