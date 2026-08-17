import { PARENTS_HERO } from "@/lib/constants";
import { SECTION_CARD, CARD_WRAP, STATS_TEXT } from "@/lib/styles";

export default function ParentsStatsSection() {
  return (
    <section className={SECTION_CARD}>
      <div className={CARD_WRAP}>
        <p className={STATS_TEXT}>{PARENTS_HERO.statText}</p>
      </div>
    </section>
  );
}
