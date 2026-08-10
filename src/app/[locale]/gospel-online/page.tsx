import type { Metadata } from "next";
import { DraftPage } from "@/components/pages/draft";
import { draftMetadata } from "@/i18n/metadata";

/** Rota em inglês: /en/gospel-online — página em preparação. */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  return draftMetadata("en", "gospelOnline");
}

export default function Page() {
  return <DraftPage locale="en" page="gospelOnline" />;
}
