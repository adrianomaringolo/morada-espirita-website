import type { Metadata } from "next";
import { MessagesPage } from "@/components/pages/messages";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em português: /pt/mensagens
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /en/mensagens responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "pt" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("pt", "messages");
}

export default function Page() {
  return <MessagesPage locale="pt" />;
}
