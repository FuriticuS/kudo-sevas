"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { COACH, COACH_SLIDES, CONTACTS, SCHEDULE } from "@/lib/constants";
import {
  SWIPER_NAV,
  IMG_CONTAIN,
  COACH_NAME,
  COACH_RANK,
  COACH_LEAD,
  COACHES_CARD,
  COACHES_LAYOUT,
  COACHES_SLIDER_WRAP,
  COACHES_CAROUSEL,
  COACHES_SLIDE,
  LINK_TEL,
  SUBHEADING_CONTACTS,
  LIST_STACK,
  SCHEDULE_ROW,
  DEFINITION_TERM,
  DEFINITION_DESC,
} from "@/lib/styles";

export default function CoachCard() {
  return (
    <article className={COACHES_CARD}>
      <div className={COACHES_LAYOUT}>
        <div>
          <p className={COACH_NAME}>{COACH.name}</p>
          <p className={COACH_RANK}>{COACH.rank}</p>
          <p className={COACH_LEAD}>{COACH.lead}</p>

          <p className={COACH_LEAD}>
            <span className={DEFINITION_TERM}>Телефон тренера: </span>
            <a href={`tel:${CONTACTS.phoneRaw}`} className={LINK_TEL}>
              {CONTACTS.phone}
            </a>
          </p>

          <h3 className={SUBHEADING_CONTACTS}>Расписание</h3>
          <ul className={LIST_STACK}>
            {SCHEDULE.map((item) => (
              <li
                key={`${item.group}-${item.days}-${item.time}`}
                className={SCHEDULE_ROW}
              >
                <span className={DEFINITION_TERM}>{item.group}:</span>
                <span className={DEFINITION_DESC}>
                  {item.days} {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={COACHES_SLIDER_WRAP}>
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            spaceBetween={16}
            slidesPerView={1}
            className={`${SWIPER_NAV} ${COACHES_CAROUSEL}`.trim()}
          >
            {COACH_SLIDES.map((slide) => (
              <SwiperSlide key={slide.image}>
                <div className={COACHES_SLIDE}>
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={IMG_CONTAIN}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </article>
  );
}
