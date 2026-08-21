import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ParentsHeroSection from "@/components/parents/ParentsHeroSection";
import ParentsSafetySection from "@/components/parents/ParentsSafetySection";
import ParentsUpbringingSection from "@/components/parents/ParentsUpbringingSection";
import ParentsDevelopmentSection from "@/components/parents/ParentsDevelopmentSection";
import ParentsDocumentsSection from "@/components/parents/ParentsDocumentsSection";
import EquipmentCenterSection from "@/components/parents/EquipmentCenterSection";

export const metadata: Metadata = buildMetadata({
  title: "Для родителей",
  description:
    "Кудо для детей в Севастополе: безопасные тренировки, воспитание дисциплины и уверенности в себе, спортивная секция для мальчиков и девочек. Расписание и документы для родителей.",
  path: "/parents/",
});

export default function ParentsPage() {
  return (
    <>
      <ParentsHeroSection />
      <ParentsSafetySection />
      <ParentsUpbringingSection />
      <ParentsDevelopmentSection />
      <ParentsDocumentsSection />
      <EquipmentCenterSection />
    </>
  );
}
