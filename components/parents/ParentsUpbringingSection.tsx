import { PARENTS_UPBRINGING, PARENTS_BENEFITS } from "@/lib/constants";
import {
  SECTION_LIGHT,
  CONTAINER,
  SECTION_TITLE_MB_8,
  BULLET,
  BENEFIT_CARD,
  LIST_TEXT,
  UPBRINGING_LEAD,
  BENEFITS_GRID,
  UPBRINGING_QUOTE,
  UPBRINGING_CLOSING,
} from "@/lib/styles";

export default function ParentsUpbringingSection() {
  return (
    <section className={SECTION_LIGHT}>
      <div className={CONTAINER}>
        <h2 className={SECTION_TITLE_MB_8}>{PARENTS_UPBRINGING.title}</h2>

        <p className={UPBRINGING_LEAD}>{PARENTS_UPBRINGING.leadText}</p>
        <ul className={BENEFITS_GRID}>
          {PARENTS_BENEFITS.map((benefit) => (
            <li key={benefit.text} className={BENEFIT_CARD}>
              <span className={BULLET} />
              <span className={LIST_TEXT}>{benefit.text}</span>
            </li>
          ))}
        </ul>

        <blockquote className={UPBRINGING_QUOTE}>
          {PARENTS_UPBRINGING.quote}
        </blockquote>
        <p className={UPBRINGING_CLOSING}>{PARENTS_UPBRINGING.closingText}</p>
      </div>
    </section>
  );
}
