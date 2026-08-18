"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import type { GalleryAlbum } from "@/lib/types";
import {
  SWIPER_NAV,
  IMG_COVER,
  GALLERY_CARD,
  GALLERY_ALBUM_TITLE,
  GALLERY_SLIDER_WRAP,
  GALLERY_CAROUSEL,
  GALLERY_SLIDE,
} from "@/lib/styles";

interface GalleryAlbumSectionProps {
  album: GalleryAlbum;
}

export default function GalleryAlbumSection({ album }: GalleryAlbumSectionProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <article className={GALLERY_CARD}>
      <h2 className={GALLERY_ALBUM_TITLE}>{album.title}</h2>

      <div className={GALLERY_SLIDER_WRAP}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={1}
          className={`${SWIPER_NAV} ${GALLERY_CAROUSEL}`.trim()}
        >
          {album.images.map((img, i) => (
            <SwiperSlide key={img.src}>
              <button
                type="button"
                className={GALLERY_SLIDE}
                onClick={() => setLightboxIndex(i)}
                aria-label={`Открыть фото ${i + 1}: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={IMG_COVER}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={album.images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </article>
  );
}
