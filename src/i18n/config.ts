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
  "gospelOnline",
  "chacara",
  "shop",
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
  gospelOnline: { pt: "evangelho-online", en: "gospel-online" },
  chacara: { pt: "chacara", en: "country-property" },
  shop: { pt: "loja", en: "shop" },
  history: { pt: "nossa-historia", en: "our-history" },
  messages: { pt: "mensagens", en: "messages" },
  events: { pt: "eventos", en: "events" },
  directions: { pt: "como-chegar", en: "how-to-find-us" },
  contact: { pt: "contato", en: "contact" },
};

/**
 * Páginas publicadas com placeholder, à espera de texto e fotos da Morada.
 * Enquanto estiverem aqui: ficam fora do sitemap e saem com `noindex`, para
 * que ninguém chegue por busca numa página que ainda não responde nada.
 * Para lançar uma delas, basta tirá-la desta lista.
 */
export const draftPages = ["chacara"] as const satisfies readonly PageId[];

export function isDraft(page: PageId): boolean {
  return (draftPages as readonly string[]).includes(page);
}

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
