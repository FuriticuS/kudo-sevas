import Image from "next/image";
import { REVIEWS_PARENTS, MEDIA } from "@/lib/constants";
import SwiperCarousel from "@/components/ui/SwiperCarousel";
import {
  SECTION_DARK,
  CONTAINER,
  SECTION_TITLE_MB_10,
  REVIEW_CARD,
  REVIEW_IMAGE,
  REVIEW_TEXT_WRAP,
  REVIEW_TEXT,
  REVIEW_AUTHOR,
  IMG_COVER,
} from "@/lib/styles";

export default function ParentsReviewsSection() {
  return (
    <section className={SECTION_DARK}>
      <div className={CONTAINER}>
        <h2 className={SECTION_TITLE_MB_10}>Отзывы родителей</h2>

        <SwiperCarousel
          slidesPerView={1}
          slides={REVIEWS_PARENTS.map((review, i) => (
            <div key={review.author} className={REVIEW_CARD}>
              <div className={REVIEW_IMAGE}>
                <Image
                  src={MEDIA.reviewImages[i % MEDIA.reviewImages.length]}
                  alt={`Фото к отзыву ${review.author}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  className={IMG_COVER}
                />
              </div>
              <div className={REVIEW_TEXT_WRAP}>
                <p className={REVIEW_TEXT}>«{review.text}»</p>
                <p className={REVIEW_AUTHOR}>{review.author}</p>
              </div>
            </div>
          ))}
        />
      </div>
    </section>
  );
}
