import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ParentsHeroSection from "@/components/parents/ParentsHeroSection";
import ParentsSafetySection from "@/components/parents/ParentsSafetySection";
import ParentsUpbringingSection from "@/components/parents/ParentsUpbringingSection";
import ParentsDevelopmentSection from "@/components/parents/ParentsDevelopmentSection";
import ParentsDocumentsSection from "@/components/parents/ParentsDocumentsSection";
import ParentsReviewsSection from "@/components/parents/ParentsReviewsSection";

export const metadata: Metadata = buildMetadata({
  title: "Для родителей",
  description:
    "Кудо для детей в Севастополе: безопасность, воспитание, система поясов, расписание и документы для родителей.",
  path: "/parents",
});

export default function ParentsPage() {
  return (
    <>
      <ParentsHeroSection />
      <ParentsSafetySection />
      <ParentsUpbringingSection />
      <ParentsDevelopmentSection />
      <ParentsDocumentsSection />
      <ParentsReviewsSection />
    </>
  );
}
