import { PARENTS_DEVELOPMENT, BELTS } from "@/lib/constants";
import type { Belt } from "@/lib/types";
import {
  SECTION_CARD,
  CARD_WRAP,
  SECTION_TITLE_MB_8,
  DEVELOPMENT_INTRO,
  SUBHEADING_BELTS,
  BELTS_STACK,
  BELT_CATEGORY,
  BELTS_GRID,
  BELT_CARD,
} from "@/lib/styles";

// Группируем пояса по категориям
const CATEGORY_TITLES: Record<Belt["category"], string> = {
  ученический: "Ученические пояса",
  "старший ученический": "Старшие ученические (инструкторские) пояса",
  мастерский: "Мастерские пояса",
};

function beltLabel(belt: Belt): string {
  if (belt.category === "мастерский") {
    return "Черный пояс, I–X дан";
  }
  const stripeWord =
    belt.stripes === 1
      ? "одной черной полоской"
      : "двумя черными полосками";
  return `${belt.ky} кю, ${belt.color} пояс с ${stripeWord}`;
}

export default function ParentsDevelopmentSection() {
  const categories: Belt["category"][] = [
    "ученический",
    "старший ученический",
    "мастерский",
  ];

  return (
    <section className={SECTION_CARD}>
      <div className={CARD_WRAP}>
        <h2 className={SECTION_TITLE_MB_8}>{PARENTS_DEVELOPMENT.title}</h2>
        <p className={DEVELOPMENT_INTRO}>{PARENTS_DEVELOPMENT.intro}</p>

        <h3 className={SUBHEADING_BELTS}>Система поясов</h3>

        <div className={BELTS_STACK}>
          {categories.map((category) => {
            const belts = BELTS.filter((b) => b.category === category);
            return (
              <div key={category}>
                <h4 className={BELT_CATEGORY}>{CATEGORY_TITLES[category]}</h4>
                <ul className={BELTS_GRID}>
                  {belts.map((belt) => (
                    <li
                      key={`${belt.ky}-${belt.color}-${belt.stripes}`}
                      className={BELT_CARD}
                    >
                      {beltLabel(belt)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
