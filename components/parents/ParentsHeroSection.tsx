import { PARENTS_HERO, CONTACTS } from "@/lib/constants";
import {
  PARENTS_HERO_SECTION,
  PARENTS_HERO_CONTAINER,
  PARENTS_HERO_TITLE,
  PARENTS_HERO_SUBTITLE,
  PARENTS_HERO_DESC,
  PARENTS_HERO_BUTTON,
} from "@/lib/styles";

export default function ParentsHeroSection() {
  return (
    <section className={PARENTS_HERO_SECTION}>
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
