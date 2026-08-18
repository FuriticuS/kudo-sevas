"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { Review } from "@/lib/types";
import {
  REVIEW_CARD_ON_DARK,
  REVIEW_IMAGE,
  REVIEW_TEXT_WRAP,
  REVIEW_TEXT,
  REVIEW_AUTHOR,
  REVIEW_READ_MORE,
  REVIEW_MODAL_OVERLAY,
  REVIEW_MODAL_CARD,
  REVIEW_MODAL_TEXT,
  REVIEW_MODAL_AUTHOR,
  REVIEW_MODAL_CLOSE,
  REVIEW_MODAL_CLOSE_ICON,
  IMG_COVER,
} from "@/lib/styles";

interface ReviewCardProps {
  review: Review;
  image: string;
  sizes: string;
}

export default function ReviewCard({ review, image, sizes }: ReviewCardProps) {
  const [open, setOpen] = useState(false);

  // Блокируем скролл страницы и закрываем по Esc
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={REVIEW_CARD_ON_DARK}
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        aria-label={`Открыть полный отзыв: ${review.author}`}
      >
        <div className={REVIEW_IMAGE}>
          <Image
            src={image}
            alt={`Фото к отзыву ${review.author}`}
            fill
            sizes={sizes}
            className={IMG_COVER}
          />
        </div>

        <div className={REVIEW_TEXT_WRAP}>
          <p className={REVIEW_TEXT}>«{review.text}»</p>
          <p className={REVIEW_AUTHOR}>{review.author}</p>
          <p className={REVIEW_READ_MORE}>Читать полностью</p>
        </div>
      </div>

      {open &&
        createPortal(
          <div className={REVIEW_MODAL_OVERLAY} onClick={() => setOpen(false)}>
            <div className={REVIEW_MODAL_CARD} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={REVIEW_MODAL_CLOSE}
                onClick={() => setOpen(false)}
                aria-label="Закрыть"
              >
                <svg
                  className={REVIEW_MODAL_CLOSE_ICON}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <p className={REVIEW_MODAL_TEXT}>«{review.text}»</p>
              <p className={REVIEW_MODAL_AUTHOR}>{review.author}</p>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
