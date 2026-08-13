"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, MEDIA } from "@/lib/constants";
import {
  NAV_LINK,
  NAV_LINK_MOBILE,
  HEADER,
  HEADER_INNER,
  LOGO_SM,
  DESKTOP_NAV,
  DESKTOP_NAV_LIST,
  BURGER,
  BURGER_LINE,
  BURGER_LINE_FADE,
  BURGER_TOP_OPEN,
  BURGER_FADE_OPEN,
  BURGER_BOTTOM_OPEN,
  MOBILE_NAV,
  MOBILE_NAV_LIST,
} from "@/lib/styles";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={HEADER}>
      <div className={HEADER_INNER}>
        <Link href="/" aria-label="KUDO Севастополь — на главную">
          <Image
            src={MEDIA.logo}
            alt="KUDO Севастополь"
            width={64}
            height={64}
            priority
            className={LOGO_SM}
          />
        </Link>

        {/* Десктоп-меню */}
        <nav className={DESKTOP_NAV}>
          <ul className={DESKTOP_NAV_LIST}>
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

        {/* Кнопка-бургер (мобильные) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          className={BURGER}
        >
          <span className={`${BURGER_LINE} ${open ? BURGER_TOP_OPEN : ""}`} />
          <span
            className={`${BURGER_LINE_FADE} ${open ? BURGER_FADE_OPEN : ""}`}
          />
          <span
            className={`${BURGER_LINE} ${open ? BURGER_BOTTOM_OPEN : ""}`}
          />
        </button>
      </div>

      {/* Мобильное меню */}
      {open && (
        <nav className={MOBILE_NAV}>
          <ul className={MOBILE_NAV_LIST}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={NAV_LINK_MOBILE}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={NAV_LINK_MOBILE}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
