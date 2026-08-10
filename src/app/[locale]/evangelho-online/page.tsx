import type { Metadata } from "next";
import { DraftPage } from "@/components/pages/draft";
import { draftMetadata } from "@/i18n/metadata";

/** Rota em português: /pt/evangelho-online — página em preparação. */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "pt" }];
}

export function generateMetadata(): Metadata {
  return draftMetadata("pt", "gospelOnline");
}

export default function Page() {
  return <DraftPage locale="pt" page="gospelOnline" />;
}
