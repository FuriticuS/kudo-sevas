// ============================================
// Компонент для вставки JSON-LD разметки
// ============================================

interface JsonLdProps {
  json: object;
}

export default function JsonLd({ json }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
