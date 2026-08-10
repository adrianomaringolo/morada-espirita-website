import type { Metadata } from "next";
import { SpiritismPage } from "@/components/pages/spiritism";
import { pageMetadata } from "@/i18n/metadata";

/** Rota em inglês: /en/spiritism — o par de /pt/espiritismo. */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  return pageMetadata("en", "spiritism");
}

export default function Page() {
  return <SpiritismPage locale="en" />;
}
