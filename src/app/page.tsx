import type { Metadata } from "next";
import { buildMetadata, sportsActivityLocationJsonLd } from "@/lib/metadata";
import JsonLd from "@/components/ui/JsonLd";
import HeroSection from "@/components/sections/HeroSection";
import FounderSection from "@/components/sections/FounderSection";
import ClubSection from "@/components/sections/ClubSection";
import ContactsSection from "@/components/sections/ContactsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export const metadata: Metadata = buildMetadata({
  title: "KUDO Севастополь — реальнее только жизнь",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd json={sportsActivityLocationJsonLd} />
      <HeroSection />
      <FounderSection />
      <ClubSection />
      <ContactsSection />
      <ReviewsSection />
    </>
  );
}
