import { MEDIA, CONTACTS } from "@/lib/constants";
import {
  HERO_SECTION,
  HERO_VIDEO,
  HERO_OVERLAY,
  HERO_CONTENT,
  HERO_TITLE,
  HERO_BUTTON,
} from "@/lib/styles";

export default function HeroSection() {
  return (
    <section className={HERO_SECTION}>
      <video
        className={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        poster={MEDIA.poster}
      >
        <source src={MEDIA.video} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <div className={HERO_OVERLAY} />

      <div className={HERO_CONTENT}>
        <h1 className={HERO_TITLE}>KUDO — реальнее только жизнь</h1>
        <a href={`tel:${CONTACTS.phoneRaw}`} className={HERO_BUTTON}>
          Записаться
        </a>
      </div>
    </section>
  );
}
