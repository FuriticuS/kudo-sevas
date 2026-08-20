import { CLUB_INFO, MEDIA } from "@/lib/constants";
import {
  SECTION_CARD,
  SECTION_TITLE_MB_6,
  BODY_TEXT,
  BODY_TEXT_DARK,
  TEXT_STACK,
  CLUB_WRAP,
  CLUB_VIDEO_WRAP,
  CLUB_VIDEO,
  CLUB_HIGHLIGHT,
} from "@/lib/styles";

export default function ClubSection() {
  return (
    <section id="club" className={SECTION_CARD}>
      <div className={CLUB_WRAP}>
        <div>
          <h2 className={SECTION_TITLE_MB_6}>Клуб Доблесть</h2>
          <div className={TEXT_STACK}>
            {CLUB_INFO.map((paragraph, i) => {
              if (i === 1) {
                const splitIndex = paragraph.indexOf("Исаевич");
                return (
                  <p key={i} className={BODY_TEXT_DARK}>
                    {paragraph.slice(0, splitIndex)}
                    <span className={CLUB_HIGHLIGHT}>
                      {paragraph.slice(splitIndex)}
                    </span>
                  </p>
                );
              }
              return (
                <p key={i} className={BODY_TEXT}>
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        <div className={CLUB_VIDEO_WRAP}>
          <video
            className={CLUB_VIDEO}
            controls
            playsInline
            preload="metadata"
            poster={MEDIA.clubPoster}
          >
            <source src={MEDIA.clubVideo} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </div>
    </section>
  );
}
