import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { formatTime } from "@/components/schedule";
import { ActionAnchor, PageHeader, Pill, Section, SectionHeading } from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { FacebookGlyph, facebookLink } from "@/components/channels";

export function EvangelizationPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const ev = site.evangelization;

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        page="evangelization"
        title={t.evangelization.heading}
      />

      <PageHeader title={t.evangelization.heading} lead={t.evangelization.lead}>
        <ul className="flex flex-wrap gap-2">
          <li>
            <Pill>{t.common.free}</Pill>
          </li>
          <li>
            <Pill>{t.common.openToAll}</Pill>
          </li>
        </ul>
      </PageHeader>

      {/* Quando, em uma linha só ---------------------------------------- */}
      <div className="border-b border-line bg-surface">
        <div className="container-page flex flex-wrap items-baseline gap-x-6 gap-y-2 py-8">
          <p className="numeral text-[clamp(1.75rem,1.4rem+1.2vw,2.375rem)] font-semibold leading-none text-primary">
            {t.common.weekdays[ev.day]} · {formatTime(locale, ev.opens)}
            <span className="text-muted"> {t.common.to} </span>
            {formatTime(locale, ev.closes)}
          </p>
          <p className="text-[length:var(--text-small)] text-muted">
            {ev.ageGroups} {t.evangelization.groupsLabel}
          </p>
        </div>
      </div>

      <Section>
        <div className="container-page grid items-start gap-x-14 gap-y-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading>{t.evangelization.whatHeading}</SectionHeading>
            <ul className="mt-10 space-y-10">
              {t.evangelization.what.map((item) => (
                <li key={item.title}>
                  <h3 className="text-[length:var(--text-h3)]">{item.title}</h3>
                  <p className="mt-3 max-w-[46ch] text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} zoom className="lg:sticky lg:top-24">
            <Image
              src={images.drawings.src}
              alt={t.evangelization.imageAlt}
              width={images.drawings.width}
              height={images.drawings.height}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="photo-lifted h-[clamp(16rem,40vw,28rem)] w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" className="border-t border-line">
        <div className="container-page grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <SectionHeading>{t.evangelization.joinHeading}</SectionHeading>
          <div>
            <p className="max-w-[58ch] text-[length:var(--text-lead)] leading-[1.55]">
              {t.evangelization.joinBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionAnchor {...facebookLink}>
                <FacebookGlyph />
                {t.common.messageFacebook}
              </ActionAnchor>
              <ActionAnchor href={`tel:${site.phone.e164}`} variant="outline">
                {t.common.callHouse}
              </ActionAnchor>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
