import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

/**
 * Toda rota vive sob /pt ou /en. Este proxy existe só para mandar a raiz
 * (e qualquer caminho sem prefixo) para o idioma certo, negociando pelo
 * Accept-Language do navegador com o português como padrão.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${negotiate(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

function negotiate(request: NextRequest) {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  // "en-GB;q=0.9, pt-BR;q=1" → escolhe o primeiro idioma que sabemos servir.
  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferred) {
    const base = tag.split("-")[0];
    if (locales.some((locale) => locale === base)) return base;
  }
  return defaultLocale;
}

export const config = {
  // Fora: assets do Next, arquivos com extensão e as rotas de metadados.
  matcher: ["/((?!_next|api|.*\\..*|robots.txt|sitemap.xml|icon.svg|manifest.webmanifest).*)"],
};
