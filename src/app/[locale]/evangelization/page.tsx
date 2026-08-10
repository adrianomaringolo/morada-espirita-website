import type { Metadata } from "next";
import { EvangelizationPage } from "@/components/pages/evangelization";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em inglês: /en/evangelization
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /pt/evangelization responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("en", "evangelization");
}

export default function Page() {
  return <EvangelizationPage locale="en" />;
}
