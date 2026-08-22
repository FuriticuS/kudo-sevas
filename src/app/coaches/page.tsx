import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import CoachCard from "@/components/coaches/CoachCard";
import { GALLERY_SECTION, GALLERY_CONTAINER } from "@/lib/styles";

export const metadata: Metadata = buildMetadata({
  title: "Тренерский состав",
  description:
    "Тренеры по кудо в Севастополе: Исаевич Сергей Валентинович, Красиков Михаил Сергеевич, Бульвинов Роман. Клуб кудо «Доблесть»: тренировки по кудо для детей и взрослых.",
  path: "/coaches/",
});

export default function CoachesPage() {
  return (
    <section className={GALLERY_SECTION}>
      <div className={GALLERY_CONTAINER}>
        <CoachCard />
      </div>
    </section>
  );
}
