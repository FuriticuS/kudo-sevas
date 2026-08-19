import Link from "next/link";
import {
  NOT_FOUND_SECTION,
  NOT_FOUND_WRAP,
  NOT_FOUND_CODE,
  NOT_FOUND_TITLE,
  NOT_FOUND_TEXT,
  NOT_FOUND_BUTTON,
} from "@/lib/styles";

export default function NotFound() {
  return (
    <section className={NOT_FOUND_SECTION}>
      <div className={NOT_FOUND_WRAP}>
        <p className={NOT_FOUND_CODE}>404</p>
        <h1 className={NOT_FOUND_TITLE}>Страница не найдена</h1>
        <p className={NOT_FOUND_TEXT}>
          Похоже, такой страницы не существует или она была перемещена.
          Вернитесь на главную, чтобы продолжить.
        </p>
        <Link href="/" className={NOT_FOUND_BUTTON}>
          На главную
        </Link>
      </div>
    </section>
  );
}
