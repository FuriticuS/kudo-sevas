import { ABOUT_KUDO } from "@/lib/constants";
import {
  SECTION_CARD,
  CARD_WRAP,
  SECTION_TITLE_MB_8,
  ABOUT_BODY,
  BODY_TEXT,
} from "@/lib/styles";

export default function AboutKudoSection() {
  return (
    <section className={SECTION_CARD}>
      <div className={CARD_WRAP}>
        <h2 className={SECTION_TITLE_MB_8}>Что такое кудо</h2>
        <div className={ABOUT_BODY}>
          {ABOUT_KUDO.map((paragraph, i) => (
            <p key={i} className={BODY_TEXT}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
