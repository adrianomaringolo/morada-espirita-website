import type { Metadata } from "next";
import { GospelOnlinePage } from "@/components/pages/gospel-online";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em português: /pt/evangelho-online
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /en/evangelho-online responda 404 em vez
 * de servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "pt" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("pt", "gospelOnline");
}

export default function Page() {
  return <GospelOnlinePage locale="pt" />;
}
