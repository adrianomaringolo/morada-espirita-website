import type { Metadata } from "next";
import { MessagesPage } from "@/components/pages/messages";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em inglês: /en/messages
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /pt/messages responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("en", "messages");
}

export default function Page() {
  return <MessagesPage locale="en" />;
}
