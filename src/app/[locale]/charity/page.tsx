import type { Metadata } from "next";
import { CharityPage } from "@/components/pages/charity";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em inglês: /en/charity
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /pt/charity responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("en", "charity");
}

export default function Page() {
  return <CharityPage locale="en" />;
}
