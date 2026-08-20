import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { GALLERY_ALBUMS, GALLERY_VIDEOS } from "@/lib/gallery";
import GalleryAlbumSection from "@/components/gallery/GalleryAlbumSection";
import GalleryVideoSection from "@/components/gallery/GalleryVideoSection";
import {
  GALLERY_SECTION,
  GALLERY_CONTAINER,
  GALLERY_GRID,
  GALLERY_SECTION_TITLE,
  GALLERY_SECTION_TITLE_MT,
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
        <h2 className={GALLERY_SECTION_TITLE}>Видео</h2>
        <div className={GALLERY_GRID}>
          {GALLERY_VIDEOS.map((video) => (
            <GalleryVideoSection key={video.src} video={video} />
          ))}
        </div>

        <h2 className={GALLERY_SECTION_TITLE_MT}>Фото</h2>
        <div className={GALLERY_GRID}>
          {GALLERY_ALBUMS.map((album) => (
            <GalleryAlbumSection key={album.slug} album={album} />
          ))}
        </div>
      </div>
    </section>
  );
}
