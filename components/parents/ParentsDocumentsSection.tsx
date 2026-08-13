import { PARENT_DOCUMENTS, SCHEDULE, MAP, CONTACTS } from "@/lib/constants";
import {
  SECTION_LIGHT,
  CONTAINER,
  SECTION_TITLE_MB_6,
  SUBHEADING_DOCS,
  LINK_TEL,
  SCHEDULE_ROW,
  MAP_WRAP,
  MAP_IFRAME,
  BULLET,
  TWO_COL_GRID,
  LIST_STACK,
  DEFINITION_TERM,
  DEFINITION_DESC,
  LIST_TEXT,
  DOCS_LABEL,
  DOCS_LIST,
  DOCS_ITEM,
  DOCS_CONTACT_LABEL,
  DOCS_CONTACT_TEXT,
} from "@/lib/styles";

export default function ParentsDocumentsSection() {
  // Только детские группы (без взрослых 16+)
  const kidsSchedule = SCHEDULE.filter((item) => !item.group.includes("16+"));

  return (
    <section className={SECTION_LIGHT}>
      <div className={CONTAINER}>
        <div className={TWO_COL_GRID}>
          <div>
            <h2 className={SECTION_TITLE_MB_6}>Документы для родителей</h2>

            <p className={DOCS_LABEL}>
              Необходимые документы для занятий кудо:
            </p>
            <ul className={DOCS_LIST}>
              {PARENT_DOCUMENTS.map((doc) => (
                <li key={doc.name} className={DOCS_ITEM}>
                  <span className={BULLET} />
                  <span className={LIST_TEXT}>{doc.name}</span>
                </li>
              ))}
            </ul>

            <p className={DOCS_CONTACT_LABEL}>
              Для получения документов и записи на тренировки:
            </p>
            <p className={DOCS_CONTACT_TEXT}>
              Позвоните нам по телефону{" "}
              <a href={`tel:${CONTACTS.phoneRaw}`} className={LINK_TEL}>
                {CONTACTS.phone}
              </a>{" "}
              или обратитесь к тренеру лично.
            </p>

            <h3 className={SUBHEADING_DOCS}>Расписание детских групп</h3>
            <ul className={LIST_STACK}>
              {kidsSchedule.map((item) => (
                <li
                  key={`${item.group}-${item.days}-${item.time}`}
                  className={SCHEDULE_ROW}
                >
                  <span className={DEFINITION_TERM}>{item.group}:</span>
                  <span className={DEFINITION_DESC}>
                    {item.days} {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={MAP_WRAP}>
            <iframe
              src={MAP.iframeUrl}
              title={MAP.placeName}
              className={MAP_IFRAME}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
