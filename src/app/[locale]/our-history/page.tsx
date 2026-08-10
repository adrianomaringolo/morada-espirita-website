import type { Metadata } from "next";
import { HistoryPage } from "@/components/pages/history";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em inglês: /en/our-history
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /pt/our-history responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("en", "history");
}

export default function Page() {
  return <HistoryPage locale="en" />;
}
