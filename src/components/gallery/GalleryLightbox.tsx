"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { GalleryImage } from "@/lib/types";
import {
  LIGHTBOX_OVERLAY,
  LIGHTBOX_BODY,
  LIGHTBOX_SWIPER,
  LIGHTBOX_CLOSE,
  LIGHTBOX_CLOSE_ICON,
  LIGHTBOX_SLIDE,
  LIGHTBOX_IMAGE,
} from "@/lib/styles";

interface GalleryLightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

export default function GalleryLightbox({
  images,
  initialIndex,
  onClose,
}: GalleryLightboxProps) {
  // Блокируем скролл страницы и закрываем по Esc
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={LIGHTBOX_OVERLAY} onClick={onClose}>
      <button
        type="button"
        className={LIGHTBOX_CLOSE}
        onClick={onClose}
        aria-label="Закрыть"
      >
        <svg
          className={LIGHTBOX_CLOSE_ICON}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className={LIGHTBOX_BODY} onClick={(e) => e.stopPropagation()}>
        <Swiper
          modules={[Keyboard, Navigation]}
          navigation
          keyboard={{ enabled: true }}
          initialSlide={initialIndex}
          slidesPerView={1}
          spaceBetween={0}
          className={LIGHTBOX_SWIPER}
        >
          {images.map((img) => (
            <SwiperSlide key={img.src}>
              <div className={LIGHTBOX_SLIDE}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="100vw"
                  className={LIGHTBOX_IMAGE}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
