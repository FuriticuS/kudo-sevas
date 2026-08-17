import Image from "next/image";
import { PARENTS_SAFETY, PROTECTION_SLIDES } from "@/lib/constants";
import SwiperCarousel from "@/components/ui/SwiperCarousel";
import {
  SECTION_CARD,
  SECTION_TITLE_MB_6,
  BODY_TEXT,
  STATS_TEXT,
  IMG_COVER,
  TEXT_STACK,
  CLUB_WRAP,
  CAROUSEL_SQUARE,
  SLIDE_IMAGE,
  SAFETY_QUOTE,
  SAFETY_QUOTE_AUTHOR,
} from "@/lib/styles";

export default function ParentsSafetySection() {
  return (
    <section className={SECTION_CARD}>
      <div className={CLUB_WRAP}>
        <div>
          <h2 className={SECTION_TITLE_MB_6}>{PARENTS_SAFETY.title}</h2>
          <div className={TEXT_STACK}>
            <p className={STATS_TEXT}>{PARENTS_SAFETY.leadText}</p>
            <p className={SAFETY_QUOTE}>{PARENTS_SAFETY.quote}</p>
            <p className={SAFETY_QUOTE_AUTHOR}>{PARENTS_SAFETY.quoteAuthor}</p>
            <p className={BODY_TEXT}>{PARENTS_SAFETY.description}</p>
            <p className={BODY_TEXT}>{PARENTS_SAFETY.gearNote}</p>
          </div>
        </div>

        <div>
          <SwiperCarousel
            swiperClassName={CAROUSEL_SQUARE}
            slides={PROTECTION_SLIDES.map((slide) => (
              <div key={slide.image} className={SLIDE_IMAGE}>
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
