import Image from "next/image";
import { EQUIPMENT } from "@/lib/constants";
import {
  SECTION_CARD,
  CARD_WRAP,
  SECTION_TITLE_MB_6,
  EQUIPMENT_WRAP,
  EQUIPMENT_LEFT,
  EQUIPMENT_RIGHT,
  EQUIPMENT_LOGO,
  EQUIPMENT_TEXT,
  EQUIPMENT_BUTTON,
} from "@/lib/styles";

export default function EquipmentCenterSection() {
  return (
    <section className={SECTION_CARD}>
      <div className={CARD_WRAP}>
        <div className={EQUIPMENT_WRAP}>
          <div className={EQUIPMENT_LEFT}>
            <h2 className={SECTION_TITLE_MB_6}>{EQUIPMENT.title}</h2>
            <p className={EQUIPMENT_TEXT}>{EQUIPMENT.description}</p>
            <Image
              src={EQUIPMENT.logo}
              alt={EQUIPMENT.title}
              width={382}
              height={172}
              className={EQUIPMENT_LOGO}
            />
          </div>

          <div className={EQUIPMENT_RIGHT}>
            <a
              href={EQUIPMENT.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={EQUIPMENT_BUTTON}
            >
              Перейти в магазин
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
