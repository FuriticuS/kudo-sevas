"use client";

import type { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SWIPER_NAV } from "@/lib/styles";

interface SwiperCarouselProps {
  slides: ReactNode[];
  /** Отступ между слайдами (px) */
  spaceBetween?: number;
  /** Слайдов на десктопе */
  slidesPerView?: number;
  /** Задержка автопрокрутки в мс (0 — отключить) */
  autoplayDelay?: number;
  /** Зациклить слайдер */
  loop?: boolean;
  /** Дополнительные классы для корневого Swiper (например, соотношение сторон) */
  swiperClassName?: string;
}

export default function SwiperCarousel({
  slides,
  spaceBetween = 24,
  slidesPerView = 1,
  autoplayDelay = 5000,
  loop = true,
  swiperClassName,
}: SwiperCarouselProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={loop}
      autoplay={
        autoplayDelay > 0 ? { delay: autoplayDelay, disableOnInteraction: false } : false
      }
      pagination={{ clickable: true }}
      navigation
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: Math.min(2, slidesPerView) },
        1024: { slidesPerView },
      }}
      className={`${SWIPER_NAV} ${swiperClassName ?? ""}`.trim()}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
