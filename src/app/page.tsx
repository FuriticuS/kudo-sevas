import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import HeroSection from "@/components/sections/HeroSection";
import FounderSection from "@/components/sections/FounderSection";
import ClubSection from "@/components/sections/ClubSection";
import ContactsSection from "@/components/sections/ContactsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export const metadata: Metadata = buildMetadata({
  title: "KUDO Севастополь — реальнее только жизнь",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FounderSection />
      <ClubSection />
      <ContactsSection />
      <ReviewsSection />
    </>
  );
}
