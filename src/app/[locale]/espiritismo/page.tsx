import type { Metadata } from "next";
import { SpiritismPage } from "@/components/pages/spiritism";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em português: /pt/espiritismo
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /en/espiritismo responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "pt" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("pt", "spiritism");
}

export default function Page() {
  return <SpiritismPage locale="pt" />;
}
