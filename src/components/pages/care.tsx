import { CareSchedule } from "@/components/schedule";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { RoseMark } from "@/components/rose-mark";
import { Reveal } from "@/components/reveal";
import {
  ActionAnchor,
  ActionLink,
  ArrowRight,
  PageHeader,
  Pill,
  Section,
  SectionHeading,
} from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import { pathFor, type Locale } from "@/i18n/config";
import { site, mapsPlaceUrl } from "@/content/site";
import { FacebookGlyph, PhoneGlyph, facebookLink, phoneLink } from "@/components/channels";

export function CarePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="care" title={t.care.heading} />
      <FaqJsonLd items={t.care.faq} />

      <PageHeader title={t.care.heading} lead={t.care.lead}>
        <ul className="flex flex-wrap gap-2">
          <li>
            <Pill>{t.common.noBooking}</Pill>
          </li>
          <li>
            <Pill>{t.common.openToAll}</Pill>
          </li>
        </ul>
      </PageHeader>

      {/* Quando --------------------------------------------------------- */}
      <Section className="!pt-[var(--spacing-section-tight)]">
        <div className="container-page">
          <SectionHeading>{t.care.scheduleHeading}</SectionHeading>

          <div className="mt-8 border border-line">
            <CareSchedule locale={locale} />
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="max-w-[52ch] text-[length:var(--text-small)] text-muted">
              {t.care.scheduleNote}
            </p>
            <a
              href={mapsPlaceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[length:var(--text-small)] font-semibold text-primary underline decoration-1 underline-offset-4 hover:text-primary-hover hover:decoration-2"
            >
              {site.address.street} — {site.address.city}/{site.address.state}
            </a>
          </div>
        </div>
      </Section>

      {/* O que acontece ------------------------------------------------- */}
      <Section tone="surface">
        <div className="container-page">
          <SectionHeading>{t.care.whatHeading}</SectionHeading>

          <ul className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {t.care.what.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 90}>
                <span aria-hidden="true" className="block h-0.5 w-14 bg-rose" />
                <h3 className="mt-5 text-[length:var(--text-h3)]">{item.title}</h3>
                <p className="mt-3 text-muted">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Antes de vir --------------------------------------------------- */}
      <Section>
        <div className="container-page grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <SectionHeading>{t.care.beforeHeading}</SectionHeading>
          <div className="prose-morada">
            <ul>
              {t.care.before.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Perguntas frequentes ------------------------------------------- */}
      <Section tone="surface" className="border-t border-line">
        <div className="container-page">
          <SectionHeading>{t.care.faqHeading}</SectionHeading>

          {/* Aberto, sempre. Público idoso não deveria ter que clicar para ler. */}
          <dl className="mt-10 max-w-[68ch] divide-y divide-line border-y border-line">
            {t.care.faq.map((item) => (
              <div key={item.q} className="grid gap-2 py-7 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8">
                <dt className="font-[family-name:var(--font-display)] text-[1.25rem] font-semibold leading-[1.3]">
                  {item.q}
                </dt>
                <dd className="text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Chamada final -------------------------------------------------- */}
      <section className="on-deep relative overflow-hidden bg-blue py-[clamp(3.5rem,7vw,6rem)] text-bg">
        <RoseMark
          size={420}
          className="pointer-events-none absolute -right-24 -bottom-32 text-rose-light/[0.13]"
        />
        <div className="container-page relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-[20ch] text-[length:var(--text-h2)] text-bg">
              {t.directions.helpHeading}
            </h2>
            <p className="mt-4 max-w-[42ch] text-blue-soft">{t.directions.helpBody}</p>
            <p className="mt-6 flex items-center gap-2.5 text-[length:var(--text-lead)] text-blue-soft">
              <PhoneGlyph size={19} />
              <a
                {...phoneLink}
                className="numeral text-[clamp(1.75rem,1.4rem+1.2vw,2.375rem)] font-semibold leading-none text-bg no-underline hover:text-rose-light hover:underline hover:underline-offset-8"
              >
                {site.phone.display}
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionAnchor {...facebookLink} variant="onDeep">
              <FacebookGlyph />
              {t.common.messageFacebook}
            </ActionAnchor>
            <ActionLink href={pathFor("directions", locale)} variant="onDeepOutline">
              {t.nav.directions}
              <ArrowRight />
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}
