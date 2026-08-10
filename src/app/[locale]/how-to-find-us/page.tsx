import type { Metadata } from "next";
import { DirectionsPage } from "@/components/pages/directions";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em inglês: /en/how-to-find-us
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /pt/how-to-find-us responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("en", "directions");
}

export default function Page() {
  return <DirectionsPage locale="en" />;
}
