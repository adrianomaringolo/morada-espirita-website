import type { MetadataRoute } from "next";
import { SITE_URL, htmlLang, isDraft, locales, pageIds, pathFor } from "@/i18n/config";

/**
 * Uma entrada por página e por idioma, cada uma declarando as alternativas.
 * A tabela de rotas em i18n/config.ts é a fonte: página nova entra aqui sozinha.
 * As que ainda estão em `draftPages` ficam de fora até terem conteúdo.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    pageIds.filter((page) => !isDraft(page)).map((page) => ({
      url: `${SITE_URL}${pathFor(page, locale)}`,
      lastModified,
      changeFrequency: page === "events" ? ("weekly" as const) : ("monthly" as const),
      priority: page === "home" ? 1 : page === "care" ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [htmlLang[code], `${SITE_URL}${pathFor(page, code)}`]),
        ),
      },
    })),
  );
}
