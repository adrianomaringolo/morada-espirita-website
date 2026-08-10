"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  locales,
  localeName,
  pageIds,
  pathFor,
  slugs,
  type Locale,
  type PageId,
} from "@/i18n/config";

/**
 * Descobre em que página estamos a partir da URL, para que o seletor leve à
 * página equivalente no outro idioma — e não de volta à home, que é o erro
 * clássico de site bilíngue.
 */
function currentPageId(pathname: string, locale: Locale): PageId {
  const prefix = `/${locale}`;
  const rest = pathname.startsWith(prefix) ? pathname.slice(prefix.length) : pathname;
  const slug = rest.replace(/^\/|\/$/g, "");
  if (!slug) return "home";
  const match = pageIds.find((id) => slugs[id][locale] === slug);
  return match ?? "home";
}

export function LanguageSwitcher({
  locale,
  label,
  compact = false,
}: {
  locale: Locale;
  label: string;
  compact?: boolean;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const page = currentPageId(pathname, locale);

  return (
    <div
      className={compact ? "flex flex-col gap-2" : "flex items-center gap-1"}
      role="group"
      aria-label={label}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={pathFor(page, code)}
            hrefLang={code}
            lang={code}
            aria-current={active ? "true" : undefined}
            className={`inline-flex min-h-[2.75rem] items-center rounded-[4px] px-2 text-[length:var(--text-label)] font-semibold no-underline transition-colors ${
              active
                ? "bg-primary-wash text-primary"
                : "text-muted hover:bg-surface hover:text-ink"
            }`}
          >
            {compact ? localeName[code] : code.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
