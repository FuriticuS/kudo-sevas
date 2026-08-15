import { PARENTS_SAFETY } from "@/lib/constants";
import {
  SECTION_CARD,
  CARD_WRAP,
  SECTION_TITLE_MB_8,
  BODY_TEXT,
  SAFETY_BODY,
  SAFETY_QUOTE,
  SAFETY_QUOTE_AUTHOR,
} from "@/lib/styles";

export default function ParentsSafetySection() {
  return (
    <section className={SECTION_CARD}>
      <div className={CARD_WRAP}>
        <h2 className={SECTION_TITLE_MB_8}>{PARENTS_SAFETY.title}</h2>
        <div className={SAFETY_BODY}>
          <p className={SAFETY_QUOTE}>{PARENTS_SAFETY.quote}</p>
          <p className={SAFETY_QUOTE_AUTHOR}>{PARENTS_SAFETY.quoteAuthor}</p>
          <p className={BODY_TEXT}>{PARENTS_SAFETY.description}</p>
          <p className={BODY_TEXT}>{PARENTS_SAFETY.gearNote}</p>
        </div>
      </div>
    </section>
  );
}
