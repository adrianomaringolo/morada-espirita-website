import type { Metadata } from "next";
import { EventsPage } from "@/components/pages/events";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em português: /pt/eventos
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /en/eventos responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "pt" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("pt", "events");
}

export default function Page() {
  return <EventsPage locale="pt" />;
}
