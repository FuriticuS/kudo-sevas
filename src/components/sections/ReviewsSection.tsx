import { REVIEWS_MAIN, MEDIA } from "@/lib/constants";
import SwiperCarousel from "@/components/ui/SwiperCarousel";
import ReviewCard from "@/components/reviews/ReviewCard";
import {
  SECTION_CARD,
  DARK_WRAP,
  SECTION_TITLE_MB_10,
} from "@/lib/styles";

export default function ReviewsSection() {
  return (
    <section id="reviews" className={SECTION_CARD}>
      <div className={DARK_WRAP}>
        <h2 className={SECTION_TITLE_MB_10}>Отзывы и комментарии</h2>

        <SwiperCarousel
          slidesPerView={1}
          slides={REVIEWS_MAIN.map((review, i) => (
            <ReviewCard
              key={review.author}
              review={review}
              image={MEDIA.reviewImages[i % MEDIA.reviewImages.length]}
              sizes="(max-width: 768px) 100vw, 240px"
            />
          ))}
        />
      </div>
    </section>
  );
}
