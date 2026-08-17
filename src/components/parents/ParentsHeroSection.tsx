"use client";

import Image from "next/image";
import { PARENTS_HERO, CONTACTS, PARENTS_HERO_SLIDES } from "@/lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import {
  PARENTS_HERO_SECTION,
  PARENTS_HERO_SLIDER,
  PARENTS_HERO_SWIPER,
  PARENTS_HERO_SLIDE,
  PARENTS_HERO_OVERLAY,
  PARENTS_HERO_CONTAINER,
  PARENTS_HERO_TITLE,
  PARENTS_HERO_SUBTITLE,
  PARENTS_HERO_DESC,
  PARENTS_HERO_BUTTON,
  IMG_COVER,
} from "@/lib/styles";

export default function ParentsHeroSection() {
  return (
    <section className={PARENTS_HERO_SECTION}>
      <div className={PARENTS_HERO_SLIDER}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={1200}
          className={PARENTS_HERO_SWIPER}
        >
          {PARENTS_HERO_SLIDES.map((slide, i) => (
            <SwiperSlide key={slide.image} className={PARENTS_HERO_SLIDE}>
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                className={IMG_COVER}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={PARENTS_HERO_OVERLAY} />

      <div className={PARENTS_HERO_CONTAINER}>
        <h1 className={PARENTS_HERO_TITLE}>{PARENTS_HERO.title}</h1>
        <p className={PARENTS_HERO_SUBTITLE}>{PARENTS_HERO.subtitle}</p>
        <p className={PARENTS_HERO_DESC}>{PARENTS_HERO.description}</p>
        <a href={`tel:${CONTACTS.phoneRaw}`} className={PARENTS_HERO_BUTTON}>
          Записаться
        </a>
      </div>
    </section>
  );
}
