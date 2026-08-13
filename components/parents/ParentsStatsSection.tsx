import { PARENTS_HERO } from "@/lib/constants";
import { SECTION_LIGHT, CONTAINER_SM, STATS_TEXT } from "@/lib/styles";

export default function ParentsStatsSection() {
  return (
    <section className={SECTION_LIGHT}>
      <div className={CONTAINER_SM}>
        <p className={STATS_TEXT}>{PARENTS_HERO.statText}</p>
      </div>
    </section>
  );
}
