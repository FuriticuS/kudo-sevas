"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { COACHES, SCHEDULE } from "@/lib/constants";
import {
  SWIPER_NAV,
  IMG_CONTAIN,
  COACH_NAME,
  COACH_RANK,
  COACH_BLOCKS,
  COACH_PARAGRAPH,
  COACH_LIST,
  COACH_LIST_ITEM,
  COACH_PHONE,
  COACHES_STACK,
  COACHES_CARD,
  COACHES_LAYOUT,
  COACHES_SLIDER_WRAP,
  COACHES_CAROUSEL,
  COACHES_SLIDE,
  COACHES_IMAGE_WRAP,
  COACHES_IMAGE,
  BULLET,
  LINK_TEL,
  SUBHEADING_CONTACTS,
  LIST_STACK,
  SCHEDULE_ROW,
  DEFINITION_TERM,
  DEFINITION_DESC,
} from "@/lib/styles";

export default function CoachCard() {
  return (
    <div className={COACHES_STACK}>
      {COACHES.map((coach) => (
        <article key={coach.name} className={COACHES_CARD}>
          <div className={COACHES_LAYOUT}>
            <div>
              <p className={COACH_NAME}>{coach.name}</p>
              <p className={COACH_RANK}>{coach.rank}</p>

              <div className={COACH_BLOCKS}>
                {coach.blocks.map((block, i) => {
                  if (block.type === "list") {
                    return (
                      <ul key={i} className={COACH_LIST}>
                        {block.items.map((item) => (
                          <li key={item} className={COACH_LIST_ITEM}>
                            <span className={BULLET} aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className={COACH_PARAGRAPH}>
                      {block.text}
                    </p>
                  );
                })}
              </div>

              {coach.phone && (
                <p className={COACH_PHONE}>
                  <span className={DEFINITION_TERM}>
                    {coach.phoneLabel ?? "Телефон тренера: "}
                  </span>
                  <a href={`tel:${coach.phoneRaw}`} className={LINK_TEL}>
                    {coach.phone}
                  </a>
                </p>
              )}

              {coach.showSchedule && (
                <>
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
                </>
              )}
            </div>

            {coach.slides.length > 1 ? (
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
                  {coach.slides.map((slide) => (
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
            ) : (
              <div className={COACHES_IMAGE_WRAP}>
                <Image
                  src={coach.slides[0].image}
                  alt={coach.slides[0].alt}
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 425px"
                  className={COACHES_IMAGE}
                />
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
