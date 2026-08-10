import type { Metadata } from "next";
import { HistoryPage } from "@/components/pages/history";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em português: /pt/nossa-historia
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /en/nossa-historia responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "pt" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("pt", "history");
}

export default function Page() {
  return <HistoryPage locale="pt" />;
}
