import Image from "next/image";
import { FOUNDER } from "@/lib/constants";
import {
  SECTION_DARK,
  IMG_COVER,
  FOUNDER_WRAP,
  FOUNDER_TEXT,
  FOUNDER_QUOTE,
  FOUNDER_DESC,
  FOUNDER_NAME,
  FOUNDER_IMAGE_WRAP,
} from "@/lib/styles";

export default function FounderSection() {
  return (
    <section className={SECTION_DARK}>
      <div className={FOUNDER_WRAP}>
        <div className={FOUNDER_TEXT}>
          <p className={FOUNDER_QUOTE}>«{FOUNDER.quote}»</p>
          <p className={FOUNDER_DESC}>
            <span className={FOUNDER_NAME}>{FOUNDER.name}</span>{" "}
            {FOUNDER.description}
          </p>
        </div>
        <div className={FOUNDER_IMAGE_WRAP}>
          <Image
            src={FOUNDER.image}
            alt={FOUNDER.name}
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className={IMG_COVER}
          />
        </div>
      </div>
    </section>
  );
}
