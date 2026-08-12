import type { Metadata } from "next";
import { ShopPage } from "@/components/pages/shop";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em português: /pt/loja
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /en/loja responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "pt" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("pt", "shop");
}

export default function Page() {
  return <ShopPage locale="pt" />;
}
