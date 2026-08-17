import { PARENT_DOCUMENTS, SCHEDULE, MAP, CONTACTS } from "@/lib/constants";
import {
  SECTION_CARD,
  CARD_WRAP,
  SECTION_TITLE_MB_6,
  SUBHEADING_DOCS,
  LINK_TEL,
  SCHEDULE_ROW,
  MAP_WRAP,
  MAP_IFRAME,
  TWO_COL_GRID,
  LIST_STACK,
  DEFINITION_TERM,
  DEFINITION_DESC,
  DOCS_LABEL,
  DOCS_LIST,
  DOCS_ITEM,
  DOCS_BULLET,
  DOCS_TEXT,
  DOCS_ICON_LINK,
  DOCS_ICON,
  DOCS_DOWNLOAD_TEXT,
  DOCS_CONTACT_LABEL,
  DOCS_CONTACT_TEXT,
} from "@/lib/styles";

export default function ParentsDocumentsSection() {
  // Только детские группы (без взрослых 16+)
  const kidsSchedule = SCHEDULE.filter((item) => !item.group.includes("16+"));

  return (
    <section className={SECTION_CARD}>
      <div className={CARD_WRAP}>
        <div className={TWO_COL_GRID}>
          <div>
            <h2 className={SECTION_TITLE_MB_6}>Документы для родителей</h2>

            <p className={DOCS_LABEL}>
              Необходимые документы для занятий кудо:
            </p>
            <ul className={DOCS_LIST}>
              {PARENT_DOCUMENTS.map((doc) => (
                <li key={doc.name} className={DOCS_ITEM}>
                  <span className={DOCS_BULLET} />
                  <span className={DOCS_TEXT}>{doc.name}</span>
                  {doc.href && (
                    <a
                      href={doc.href}
                      download
                      className={DOCS_ICON_LINK}
                      aria-label={`Скачать: ${doc.name}`}
                    >
                      <svg
                        className={DOCS_ICON}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                      <span className={DOCS_DOWNLOAD_TEXT}>Скачать</span>
                    </a>
                  )}
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
