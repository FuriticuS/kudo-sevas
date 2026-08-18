import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, SOCIAL_LINKS, FOOTER, CONTACTS, MEDIA } from "@/lib/constants";
import {
  BUTTON_PRIMARY_SM,
  NAV_LINK,
  SECTION_DARK,
  FOOTER_CONTAINER,
  FOOTER_GRID,
  FOOTER_NAV_COL,
  LOGO_XS,
  FOOTER_NAV_LIST,
  FOOTER_CONTACTS_COL,
  FOOTER_LABEL,
  SOCIAL_ROW,
  SOCIAL_ICON,
  SOCIAL_ICON_SVG,
  FOOTER_FED_COL,
  FED_LINK,
  FED_LOGO,
  FED_NAME,
  FED_ADDRESS,
  FOOTER_COPYRIGHT_WRAP,
  COPYRIGHT_TEXT,
  COPYRIGHT_LINK,
} from "@/lib/styles";

// SVG-иконки соцсетей (в исходнике используется VK)
const ICONS: Record<string, string> = {
  vk: "M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z",
};

export default function Footer() {
  return (
    <footer className={SECTION_DARK}>
      <div className={FOOTER_CONTAINER}>
        <div className={FOOTER_GRID}>
          {/* Навигация */}
          <div className={FOOTER_NAV_COL}>
            <Link href="/" aria-label="KUDO Севастополь — на главную">
              <Image
                src={MEDIA.logo}
                alt="KUDO Севастополь"
                width={64}
                height={64}
                className={LOGO_XS}
              />
            </Link>
            <nav>
              <ul className={FOOTER_NAV_LIST}>
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={NAV_LINK}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href} className={NAV_LINK}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Телефон и соцсети */}
          <div className={FOOTER_CONTACTS_COL}>
            <div>
              <p className={FOOTER_LABEL}>Осталось только позвонить</p>
              <a href={`tel:${CONTACTS.phoneRaw}`} className={BUTTON_PRIMARY_SM}>
                Записаться
              </a>
            </div>

            <div>
              <p className={FOOTER_LABEL}>Мы в соцсетях</p>
              <div className={SOCIAL_ROW}>
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={SOCIAL_ICON}
                  >
                    <svg
                      viewBox="0 0 448 512"
                      className={SOCIAL_ICON_SVG}
                      aria-hidden="true"
                    >
                      <path d={ICONS[link.icon] ?? ICONS.vk} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Федерация кудо России */}
          <div className={FOOTER_FED_COL}>
            <a
              href={FOOTER.federation.url}
              target="_blank"
              rel="noopener noreferrer"
              className={FED_LINK}
            >
              <Image
                src={FOOTER.federation.logo}
                alt={FOOTER.federation.name}
                width={0}
                height={0}
                className={FED_LOGO}
              />
            </a>
            <p className={FED_NAME}>{FOOTER.federation.name}</p>
            <p className={FED_ADDRESS}>{FOOTER.federation.address}</p>
          </div>
        </div>

        {/* Копирайт */}
        <div className={FOOTER_COPYRIGHT_WRAP}>
          <p className={COPYRIGHT_TEXT}>
            {FOOTER.copyright} Сайт разработан{" "}
            <a
              href={`mailto:${FOOTER.developer.email}`}
              className={COPYRIGHT_LINK}
            >
              {FOOTER.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
