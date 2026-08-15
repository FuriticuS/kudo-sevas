import Image from "next/image";
import { FOUNDER } from "@/lib/constants";
import {
  FOUNDER_SECTION,
  FOUNDER_WRAP,
  FOUNDER_TEXT,
  FOUNDER_QUOTE,
  FOUNDER_DESC,
  FOUNDER_NAME,
  FOUNDER_IMAGE,
} from "@/lib/styles";

export default function FounderSection() {
  return (
    <section className={FOUNDER_SECTION}>
      <div className={FOUNDER_WRAP}>
        <div className={FOUNDER_TEXT}>
          <p className={FOUNDER_QUOTE}>«{FOUNDER.quote}»</p>
          <p className={FOUNDER_DESC}>
            <span className={FOUNDER_NAME}>{FOUNDER.name}</span>{" "}
            {FOUNDER.description}
          </p>
        </div>
        <Image
          src={FOUNDER.image}
          alt={FOUNDER.name}
          width={400}
          height={645}
          sizes="(max-width: 768px) 260px, 400px"
          className={FOUNDER_IMAGE}
        />
      </div>
    </section>
  );
}
