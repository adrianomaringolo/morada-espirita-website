import { BreadcrumbJsonLd } from "@/components/json-ld";
import { CareSchedule } from "@/components/schedule";
import { Reveal } from "@/components/reveal";
import { RoseMark } from "@/components/rose-mark";
import {
  ActionAnchor,
  ArrowRight,
  PageHeader,
  Section,
  SectionHeading,
} from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { site, mapsDirectionsUrl, mapsPlaceUrl, osmEmbedUrl } from "@/content/site";
import { FacebookGlyph, facebookLink } from "@/components/channels";

export function DirectionsPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="directions" title={t.directions.heading} />

      <PageHeader title={t.directions.heading} lead={t.directions.lead} />

      <Section className="!pt-[var(--spacing-section-tight)]">
        <div className="container-page grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Reveal>
            <h2 className="text-[length:var(--text-h3)]">{t.directions.addressHeading}</h2>
            <address className="mt-5 not-italic">
              <p className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,1.3rem+0.9vw,2rem)] font-semibold leading-[1.2]">
                {site.address.street}
              </p>
              <p className="mt-2 text-[length:var(--text-lead)] text-muted">
                {site.address.district} · {site.address.city}/{site.address.state}
              </p>
              <p className="mt-1 text-[length:var(--text-small)] text-muted">
                CEP {site.address.postalCode}
              </p>
              <a
                href={`tel:${site.phone.e164}`}
                className="numeral mt-6 inline-flex min-h-[3rem] items-center text-[1.625rem] font-semibold text-primary no-underline hover:text-primary-hover hover:underline hover:underline-offset-4"
              >
                {site.phone.display}
              </a>
            </address>

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionAnchor href={mapsDirectionsUrl} target="_blank" rel="noreferrer">
                {t.directions.routeCta}
                <ArrowRight />
              </ActionAnchor>
              <ActionAnchor
                href={mapsPlaceUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                {t.directions.openMapCta}
              </ActionAnchor>
            </div>

            <h2 className="mt-14 text-[length:var(--text-h3)]">
              {t.directions.tipsHeading}
            </h2>
            <div className="prose-morada mt-5">
              <ul>
                {t.directions.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <h2 className="text-[length:var(--text-h3)]">{t.directions.mapHeading}</h2>
            <div className="mt-5 border border-line bg-surface-sunk">
              {/*
                OpenStreetMap: sem chave de API e sem cookie de rastreamento.
                O conteúdo alternativo dentro do iframe cobre bloqueio de terceiros.
              */}
              <iframe
                src={osmEmbedUrl}
                title={t.directions.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[clamp(20rem,44vw,32rem)] w-full border-0"
              >
                <p className="p-6 text-muted">{t.directions.mapFallback}</p>
              </iframe>
            </div>
            <p className="mt-3 text-[length:var(--text-small)] text-muted">
              {t.directions.mapFallback}{" "}
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary underline decoration-1 underline-offset-4 hover:text-primary-hover hover:decoration-2"
              >
                {t.directions.routeCta}
              </a>
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Repete os horários aqui: quem está a caminho quer conferir ------ */}
      <Section tone="surface" className="border-t border-line">
        <div className="container-page">
          <Reveal>
            <SectionHeading>{t.common.schedule}</SectionHeading>
            <div className="mt-8 border border-line">
              <CareSchedule locale={locale} />
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="on-deep relative overflow-hidden bg-blue py-[clamp(3rem,6vw,5rem)] text-bg">
        <RoseMark
          size={380}
          className="pointer-events-none absolute -right-20 -bottom-28 text-rose-light/[0.13]"
        />
        <div className="container-page relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-[length:var(--text-h3)] text-bg">
              {t.directions.helpHeading}
            </h2>
            <p className="mt-2 max-w-[42ch] text-blue-soft">{t.directions.helpBody}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionAnchor {...facebookLink} variant="onDeep">
              <FacebookGlyph />
              {t.common.messageFacebook}
            </ActionAnchor>
            <ActionAnchor href={`tel:${site.phone.e164}`} variant="onDeepOutline">
              {t.common.callHouse}
            </ActionAnchor>
          </div>
        </div>
      </section>
    </>
  );
}
