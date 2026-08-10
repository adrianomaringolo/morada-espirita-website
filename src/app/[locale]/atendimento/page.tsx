import type { Metadata } from "next";
import { CarePage } from "@/components/pages/care";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em português: /pt/atendimento
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /en/atendimento responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "pt" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("pt", "care");
}

export default function Page() {
  return <CarePage locale="pt" />;
}
