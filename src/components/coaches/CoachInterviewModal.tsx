"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { COACH_INTERVIEW } from "@/lib/constants";
import {
  COACH_INTERVIEW_INLINE_LINK,
  COACH_MODAL_OVERLAY,
  COACH_MODAL_CARD,
  COACH_MODAL_TITLE,
  COACH_MODAL_CLOSE,
  COACH_MODAL_CLOSE_ICON,
  COACH_QA_ITEM,
  COACH_QA_QUESTION,
  COACH_QA_ANSWER,
} from "@/lib/styles";

/** Рендер ответа: абзацы + markdown-ссылки [текст](url) */
function renderAnswer(answer: string) {
  const paragraphs = answer
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);

  return paragraphs.map((paragraph, i) => {
    const segments = paragraph.split(/(\[[^\]]+\]\([^)]+\))/g);
    const content = segments.map((segment, j) => {
      const match = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (match) {
        return (
          <a
            key={j}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className={COACH_INTERVIEW_INLINE_LINK}
          >
            {match[1]}
          </a>
        );
      }
      return <span key={j}>{segment}</span>;
    });
    return <p key={i}>{content}</p>;
  });
}

interface CoachInterviewModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CoachInterviewModal({
  open,
  onClose,
}: CoachInterviewModalProps) {
  // Блокируем скролл страницы и закрываем по Esc
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className={COACH_MODAL_OVERLAY} onClick={onClose}>
      <div className={COACH_MODAL_CARD} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={COACH_MODAL_CLOSE}
          onClick={onClose}
          aria-label="Закрыть"
        >
          <svg
            className={COACH_MODAL_CLOSE_ICON}
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

        <h3 className={COACH_MODAL_TITLE}>Немного о себе</h3>

        {COACH_INTERVIEW.map((qa) => (
          <div key={qa.question} className={COACH_QA_ITEM}>
            <h4 className={COACH_QA_QUESTION}>{qa.question}</h4>
            <div className={COACH_QA_ANSWER}>{renderAnswer(qa.answer)}</div>
          </div>
        ))}
      </div>
    </div>,
    document.body,
  );
}
