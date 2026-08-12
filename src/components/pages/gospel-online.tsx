import { CareSchedule } from "@/components/schedule";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { RoseMark } from "@/components/rose-mark";
import {
  ActionAnchor,
  PageHeader,
  Pill,
  Section,
  SectionHeading,
} from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { site, mapsPlaceUrl } from "@/content/site";
import { FacebookGlyph, PhoneGlyph, facebookLink, phoneLink } from "@/components/channels";

export function GospelOnlinePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        page="gospelOnline"
        title={t.gospelOnline.heading}
      />

      <PageHeader title={t.gospelOnline.heading} lead={t.gospelOnline.lead}>
        <ul className="flex flex-wrap gap-2">
          <li>
            <Pill>{t.common.free}</Pill>
          </li>
          <li>
            <Pill>{t.common.openToAll}</Pill>
          </li>
          <li>
            <Pill>{t.gospelOnline.anyDevicePill}</Pill>
          </li>
        </ul>
      </PageHeader>

      {/* Como assistir ---------------------------------------------------- */}
      <Section className="!pt-[var(--spacing-section-tight)]">
        <div className="container-page grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <SectionHeading>{t.gospelOnline.accessHeading}</SectionHeading>
          <div>
            <p className="max-w-[58ch] text-[length:var(--text-lead)] leading-[1.55] text-muted">
              {t.gospelOnline.accessBody}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <ActionAnchor href={site.gospelOnline.url} target="_blank" rel="noreferrer">
                {t.gospelOnline.accessCta}
              </ActionAnchor>
              <p className="text-[length:var(--text-small)] text-muted">
                {t.gospelOnline.accessNote}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Quando ------------------------------------------------------------ */}
      <Section tone="surface" className="border-y border-line">
        <div className="container-page">
          <SectionHeading lead={t.gospelOnline.scheduleNote}>
            {t.gospelOnline.scheduleHeading}
          </SectionHeading>

          <div className="mt-8 border border-line">
            <CareSchedule locale={locale} tone="plain" />
          </div>

          <a
            href={mapsPlaceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-[length:var(--text-small)] font-semibold text-primary underline decoration-1 underline-offset-4 hover:text-primary-hover hover:decoration-2"
          >
            {site.address.street} — {site.address.city}/{site.address.state}
          </a>
        </div>
      </Section>

      {/* Orientações --------------------------------------------------------- */}
      <Section>
        <div className="container-page">
          <SectionHeading lead={t.gospelOnline.guidanceLead}>
            {t.gospelOnline.guidanceHeading}
          </SectionHeading>

          <ul className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {t.gospelOnline.guidance.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <RoseMark size={28} className="text-rose" />
                <h3 className="mt-4 text-[length:var(--text-h3)]">{item.title}</h3>
                <p className="mt-3 max-w-[52ch] text-muted">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Chamada final ------------------------------------------------------ */}
      <section className="on-deep relative overflow-hidden bg-blue py-[clamp(3.5rem,7vw,6rem)] text-bg">
        <RoseMark
          size={420}
          className="pointer-events-none absolute -right-24 -bottom-32 text-rose-light/[0.13]"
        />
        <div className="container-page relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-[22ch] text-[length:var(--text-h2)] text-bg">
              {t.gospelOnline.closingHeading}
            </h2>
            <p className="mt-4 max-w-[46ch] text-blue-soft">{t.gospelOnline.closingBody}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionAnchor
              href={site.gospelOnline.url}
              target="_blank"
              rel="noreferrer"
              variant="onDeep"
            >
              {t.gospelOnline.closingCta}
            </ActionAnchor>
            <ActionAnchor {...facebookLink} variant="onDeepOutline">
              <FacebookGlyph />
              {t.common.messageFacebook}
            </ActionAnchor>
            <ActionAnchor href={phoneLink.href} variant="onDeepOutline">
              <PhoneGlyph size={17} />
              {t.common.callHouse}
            </ActionAnchor>
          </div>
        </div>
      </section>
    </>
  );
}
