import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { GALLERY_ALBUMS } from "@/lib/gallery";
import GalleryAlbumSection from "@/components/gallery/GalleryAlbumSection";
import {
  GALLERY_SECTION,
  GALLERY_CONTAINER,
  GALLERY_GRID,
} from "@/lib/styles";

export const metadata: Metadata = buildMetadata({
  title: "Галерея",
  description:
    "Фотографии с тренировок и соревнований спортивного клуба KUDO Севастополь.",
  path: "/gallery/",
});

export default function GalleryPage() {
  return (
    <section className={GALLERY_SECTION}>
      <div className={GALLERY_CONTAINER}>
        <div className={GALLERY_GRID}>
          {GALLERY_ALBUMS.map((album) => (
            <GalleryAlbumSection key={album.slug} album={album} />
          ))}
        </div>
      </div>
    </section>
  );
}
