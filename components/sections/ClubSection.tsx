import Image from "next/image";
import { CLUB_INFO, CLUB_SLIDES } from "@/lib/constants";
import SwiperCarousel from "@/components/SwiperCarousel";
import {
  SECTION_DARK,
  SECTION_TITLE_MB_6,
  BODY_TEXT,
  IMG_COVER,
  TEXT_STACK,
  CLUB_WRAP,
  SLIDE_4_3,
} from "@/lib/styles";

export default function ClubSection() {
  return (
    <section id="club" className={SECTION_DARK}>
      <div className={CLUB_WRAP}>
        <div>
          <h2 className={SECTION_TITLE_MB_6}>Клуб Доблесть</h2>
          <div className={TEXT_STACK}>
            {CLUB_INFO.map((paragraph, i) => (
              <p key={i} className={BODY_TEXT}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div>
          <SwiperCarousel
            slides={CLUB_SLIDES.map((slide) => (
              <div key={slide.image} className={SLIDE_4_3}>
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={IMG_COVER}
                />
              </div>
            ))}
            slidesPerView={1}
          />
        </div>
      </div>
    </section>
  );
}
