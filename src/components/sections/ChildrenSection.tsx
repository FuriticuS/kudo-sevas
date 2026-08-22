import Image from "next/image";
import { CHILDREN_GROUP, CHILDREN_SLIDES } from "@/lib/constants";
import SwiperCarousel from "@/components/ui/SwiperCarousel";
import {
  SECTION_CARD,
  CLUB_WRAP,
  SECTION_TITLE_MB_6,
  SUBHEADING_CONTACTS,
  TEXT_STACK,
  LIST_STACK,
  DEFINITION_TERM,
  DEFINITION_DESC,
  SCHEDULE_ROW,
  CHILDREN_SLIDER_WRAP,
  CAROUSEL_PORTRAIT,
  SLIDE_IMAGE,
  IMG_COVER,
} from "@/lib/styles";

export default function ChildrenSection() {
  return (
    <section className={SECTION_CARD}>
      <div className={CLUB_WRAP}>
        <div>
          <h2 className={SECTION_TITLE_MB_6}>{CHILDREN_GROUP.title}</h2>

          <dl className={TEXT_STACK}>
            <div>
              <dt className={DEFINITION_TERM}>Адрес:</dt>
              <dd className={DEFINITION_DESC}>{CHILDREN_GROUP.address}</dd>
            </div>
          </dl>

          <h3 className={SUBHEADING_CONTACTS}>Расписание</h3>
          <ul className={LIST_STACK}>
            <li className={SCHEDULE_ROW}>
              <span className={DEFINITION_TERM}>
                {CHILDREN_GROUP.schedule.group}
              </span>
              <span className={DEFINITION_DESC}>
                {CHILDREN_GROUP.schedule.days} {CHILDREN_GROUP.schedule.time}
              </span>
            </li>
          </ul>
        </div>

        <div className={CHILDREN_SLIDER_WRAP}>
          <SwiperCarousel
            swiperClassName={CAROUSEL_PORTRAIT}
            slides={CHILDREN_SLIDES.map((slide) => (
              <div key={slide.image} className={SLIDE_IMAGE}>
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
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
