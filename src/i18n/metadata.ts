import type { Metadata } from "next";
import { SITE_URL, htmlLang, locales, pathFor, type Locale, type PageId } from "./config";
import { getDictionary } from "./dictionaries";
import { site } from "@/content/site";

/**
 * Atalho para as páginas internas: as chaves do dicionário são exatamente os
 * ids de página, então título e descrição vêm sozinhos.
 */
export function pageMetadata(locale: Locale, page: Exclude<PageId, "home">): Metadata {
  const section = getDictionary(locale)[page];
  return buildMetadata({
    locale,
    page,
    title: section.title,
    description: section.description,
  });
}

/**
 * Metadados de uma página, com canônico e hreflang recíprocos.
 * Toda página do site passa por aqui — é o que impede canônico duplicado
 * entre /pt/atendimento e /en/spiritual-care.
 */
export function buildMetadata({
  locale,
  page,
  title,
  description,
}: {
  locale: Locale;
  page: PageId;
  title: string;
  description: string;
}): Metadata {
  const t = getDictionary(locale);
  const path = pathFor(page, locale);
  const url = `${SITE_URL}${path}`;

  const languages = Object.fromEntries(
    locales.map((code) => [htmlLang[code], `${SITE_URL}${pathFor(page, code)}`]),
  );

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ...languages, "x-default": `${SITE_URL}${pathFor(page, "pt")}` },
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title,
      description,
      locale: htmlLang[locale].replace("-", "_"),
      alternateLocale: locales
        .filter((code) => code !== locale)
        .map((code) => htmlLang[code].replace("-", "_")),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      "geo.placename": `${site.address.city}, ${site.address.state}`,
      "geo.position": `${site.address.lat};${site.address.lon}`,
    },
    keywords:
      locale === "pt"
        ? [
            "casa espírita Campinas",
            "atendimento espiritual gratuito",
            "passe espírita",
            "água fluidificada",
            "espiritismo kardecista",
            "doação de alimentos Campinas",
            "evangelização infantil",
            t.meta.siteName,
          ]
        : [
            "Spiritist centre Brazil",
            "free spiritual care Campinas",
            "Kardecist Spiritism",
            "food donation charity Brazil",
            t.meta.siteName,
          ],
  };
}
