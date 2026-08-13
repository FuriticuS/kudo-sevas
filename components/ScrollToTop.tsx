"use client";

import { useEffect, useState } from "react";
import {
  SCROLL_TO_TOP,
  SCROLL_TO_TOP_VISIBLE,
  SCROLL_TO_TOP_HIDDEN,
  SCROLL_TO_TOP_ICON,
} from "@/lib/styles";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Наверх"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${SCROLL_TO_TOP} ${
        visible ? SCROLL_TO_TOP_VISIBLE : SCROLL_TO_TOP_HIDDEN
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={SCROLL_TO_TOP_ICON}
        aria-hidden="true"
      >
        <path d="M12 2L2 12h5v10h10V12h5L12 2z" />
      </svg>
    </button>
  );
}
