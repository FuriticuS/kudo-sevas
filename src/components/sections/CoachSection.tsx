"use client";

import { useState } from "react";
import Image from "next/image";
import { COACH } from "@/lib/constants";
import CoachInterviewModal from "@/components/coaches/CoachInterviewModal";
import {
  SECTION_CARD,
  CARD_WRAP,
  SECTION_TITLE_MB_6,
  COACH_GRID,
  COACH_NAME,
  COACH_RANK,
  COACH_LEAD,
  COACH_IMAGE_WRAP,
  COACH_IMAGE,
  COACH_INTERVIEW_LINK,
} from "@/lib/styles";

export default function CoachSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className={SECTION_CARD}>
      <div className={CARD_WRAP}>
        <div className={COACH_GRID}>
          <div>
            <h2 className={SECTION_TITLE_MB_6}>Тренер и Руководитель С.К. «ДОБЛЕСТЬ»</h2>
            <p className={COACH_NAME}>{COACH.name}</p>
            <p className={COACH_RANK}>{COACH.rank}</p>
            <p className={COACH_LEAD}>{COACH.lead}</p>
            <button
              type="button"
              className={COACH_INTERVIEW_LINK}
              onClick={() => setOpen(true)}
            >
              Немного о себе
            </button>
          </div>

          <div className={COACH_IMAGE_WRAP}>
            <Image
              src={COACH.image}
              alt={COACH.name}
              width={560}
              height={746}
              sizes="(max-width: 768px) 100vw, 560px"
              className={COACH_IMAGE}
            />
          </div>
        </div>
      </div>

      <CoachInterviewModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
