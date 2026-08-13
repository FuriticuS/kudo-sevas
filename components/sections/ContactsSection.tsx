import { CONTACTS, SCHEDULE, MAP } from "@/lib/constants";
import {
  SECTION_LIGHT,
  CONTAINER,
  SECTION_TITLE_MB_6,
  SUBHEADING_CONTACTS,
  LINK_TEL,
  SCHEDULE_ROW,
  MAP_WRAP,
  MAP_IFRAME,
  TWO_COL_GRID,
  TEXT_STACK,
  LIST_STACK,
  DEFINITION_TERM,
  DEFINITION_DESC,
} from "@/lib/styles";

export default function ContactsSection() {
  return (
    <section id="contacts" className={SECTION_LIGHT}>
      <div className={CONTAINER}>
        <div className={TWO_COL_GRID}>
          <div>
            <h2 className={SECTION_TITLE_MB_6}>Как нас найти</h2>
            <dl className={TEXT_STACK}>
              <div>
                <dt className={DEFINITION_TERM}>Адрес:</dt>
                <dd className={DEFINITION_DESC}>{CONTACTS.address}</dd>
              </div>
              <div>
                <dt className={DEFINITION_TERM}>Контакты:</dt>
                <dd className={DEFINITION_DESC}>
                  {CONTACTS.headCoach.name}, {CONTACTS.headCoach.description}
                </dd>
              </div>
              <div>
                <dt className={DEFINITION_TERM}>Телефон тренера:</dt>
                <dd>
                  <a href={`tel:${CONTACTS.phoneRaw}`} className={LINK_TEL}>
                    {CONTACTS.phone}
                  </a>
                </dd>
              </div>
            </dl>

            <h3 className={SUBHEADING_CONTACTS}>Расписание</h3>
            <ul className={LIST_STACK}>
              {SCHEDULE.map((item) => (
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
