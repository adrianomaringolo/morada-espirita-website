import type { Metadata } from "next";
import { ShopPage } from "@/components/pages/shop";
import { pageMetadata } from "@/i18n/metadata";

/**
 * Rota em inglês: /en/shop
 * O slug é traduzido, então cada idioma tem seu próprio arquivo de rota e
 * `dynamicParams: false` garante que /pt/shop responda 404 em vez de
 * servir conteúdo duplicado.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("en", "shop");
}

export default function Page() {
  return <ShopPage locale="en" />;
}
