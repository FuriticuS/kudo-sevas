import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { GALLERY_SECTION, SECTION_TITLE } from "@/lib/styles";

export const metadata: Metadata = buildMetadata({
  title: "Галерея",
  description:
    "Фотографии с тренировок и соревнований спортивного клуба KUDO Севастополь.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <section className={GALLERY_SECTION}>
      <h1 className={SECTION_TITLE}>Галерея</h1>
    </section>
  );
}
