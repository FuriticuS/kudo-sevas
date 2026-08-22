import type { Metadata } from "next";
import {
  buildMetadata,
  sportsActivityLocationJsonLd,
  faqJsonLd,
} from "@/lib/metadata";
import JsonLd from "@/components/ui/JsonLd";
import HeroSection from "@/components/sections/HeroSection";
import FounderSection from "@/components/sections/FounderSection";
import CoachSection from "@/components/sections/CoachSection";
import ChildrenSection from "@/components/sections/ChildrenSection";
import ClubSection from "@/components/sections/ClubSection";
import ContactsSection from "@/components/sections/ContactsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export const metadata: Metadata = buildMetadata({
  title: "KUDO Севастополь — реальнее только жизнь",
  description:
    "Клуб кудо в Севастополе «Доблесть»: секция кудо для детей и взрослых, тренировки по кудо, единоборства для начинающих. Запишитесь на пробную тренировку.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd json={sportsActivityLocationJsonLd} />
      <JsonLd json={faqJsonLd} />
      <HeroSection />
      <FounderSection />
      <ClubSection />
      <CoachSection />
      <ChildrenSection />
      <ContactsSection />
      <ReviewsSection />
    </>
  );
}
