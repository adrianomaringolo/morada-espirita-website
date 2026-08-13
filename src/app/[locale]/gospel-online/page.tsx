import type { Metadata } from "next";
import { GospelOnlinePage } from "@/components/pages/gospel-online";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em inglês: /en/gospel-online
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /pt/gospel-online responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("en", "gospelOnline");
}

export default function Page() {
  return <GospelOnlinePage locale="en" />;
}
