import type { Metadata } from "next";
import { SITE, CONTACTS, MAP } from "./constants";

// ============================================
// Переиспользуемые метаданные страниц
// ============================================

interface BuildMetadataOptions {
  /** Заголовок страницы (без суффикса-шаблона) */
  title: string;
  /** Описание страницы (по умолчанию — общее описание сайта) */
  description?: string;
  /** Путь страницы, например "/parents" */
  path?: string;
  /** OG-изображение (по умолчанию — логотип) */
  ogImage?: string;
}

/**
 * Собирает объект Metadata для страницы:
 * title, description, canonical, Open Graph, Twitter.
 */
export function buildMetadata({
  title,
  description = SITE.defaultDescription,
  path = "/",
  ogImage = SITE.defaultOgImage,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;
  const image = ogImage.startsWith("http")
    ? ogImage
    : `${SITE.url}${ogImage}`;

  return {
    title,
    description,
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
  telephone: CONTACTS.phoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACTS.address,
    addressLocality: "Севастополь",
    addressCountry: "RU",
  },
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
  url: `${SITE.url}/#contacts`,
  telephone: CONTACTS.phoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACTS.address,
    addressLocality: "Севастополь",
    addressCountry: "RU",
  },
  hasMap: MAP.iframeUrl,
} as const;
