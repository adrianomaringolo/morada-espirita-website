import type { Metadata } from "next";
import { DirectionsPage } from "@/components/pages/directions";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em português: /pt/como-chegar
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /en/como-chegar responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "pt" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("pt", "directions");
}

export default function Page() {
  return <DirectionsPage locale="pt" />;
}
