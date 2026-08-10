import type { Metadata } from "next";
import { EventsPage } from "@/components/pages/events";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em inglês: /en/events
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /pt/events responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("en", "events");
}

export default function Page() {
  return <EventsPage locale="en" />;
}
