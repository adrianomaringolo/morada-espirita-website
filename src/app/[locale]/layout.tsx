import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Aleo, Archivo } from "next/font/google";
import "../globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OrganizationJsonLd } from "@/components/json-ld";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_URL, htmlLang, isLocale, locales, type Locale } from "@/i18n/config";
import { site } from "@/content/site";

/**
 * Serifa display para títulos e destaques, com personalidade elegante.
 */
const aleo = Aleo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-aleo",
  display: "swap",
});

/** Grotesca de origem sinalética: o corpo do texto e toda a interface. */
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${site.name} — ${t.meta.tagline}`,
      template: `%s · ${site.shortName}`,
    },
    description: t.meta.defaultDescription,
    applicationName: site.name,
    authors: [{ name: site.name }],
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typed = locale as Locale;
  const t = getDictionary(typed);

  return (
    <html lang={htmlLang[typed]} className={`${aleo.variable} ${archivo.variable}`}>
      <body className="min-h-dvh bg-bg antialiased">
        {/* Primeiro elemento focável da página. */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[var(--z-toast)] focus:inline-flex focus:min-h-[3rem] focus:items-center focus:rounded-[4px] focus:bg-primary focus:px-5 focus:font-semibold focus:text-bg"
        >
          {t.nav.skipToContent}
        </a>

        <SiteHeader locale={typed} />
        <main id="conteudo">{children}</main>
        <SiteFooter locale={typed} />

        <OrganizationJsonLd locale={typed} />
      </body>
    </html>
  );
}
