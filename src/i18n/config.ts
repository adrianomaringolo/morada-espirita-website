export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

/** `lang` e `hreflang` completos — "pt" sozinho perderia a variante brasileira. */
export const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
};

export const localeName: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

/**
 * Toda página do site tem um id canônico e um slug por idioma.
 * Esta é a única fonte de verdade de rotas: navegação, seletor de idioma,
 * sitemap e hreflang leem daqui.
 */
export const pageIds = [
  "home",
  "care",
  "evangelization",
  "charity",
  "spiritism",
  "history",
  "messages",
  "events",
  "directions",
  "contact",
] as const;

export type PageId = (typeof pageIds)[number];

export const slugs: Record<PageId, Record<Locale, string>> = {
  home: { pt: "", en: "" },
  care: { pt: "atendimento", en: "spiritual-care" },
  evangelization: { pt: "evangelizacao", en: "evangelization" },
  charity: { pt: "caridade", en: "charity" },
  spiritism: { pt: "espiritismo", en: "spiritism" },
  history: { pt: "nossa-historia", en: "our-history" },
  messages: { pt: "mensagens", en: "messages" },
  events: { pt: "eventos", en: "events" },
  directions: { pt: "como-chegar", en: "how-to-find-us" },
  contact: { pt: "contato", en: "contact" },
};

/** Caminho absoluto de uma página em um idioma. Ex.: ("care", "en") → "/en/spiritual-care" */
export function pathFor(page: PageId, locale: Locale): string {
  const slug = slugs[page][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.moradaespirita.org";
