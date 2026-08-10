import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import {
  ActionAnchor,
  ArrowRight,
  PageHeader,
  Section,
  SectionHeading,
} from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import { pathFor, type Locale } from "@/i18n/config";
import { FacebookGlyph, facebookLink } from "@/components/channels";

export function EventsPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="events" title={t.events.heading} />

      <PageHeader title={t.events.heading} lead={t.events.lead} />

      {/* Agenda permanente ---------------------------------------------- */}
      <Section className="!pt-[var(--spacing-section-tight)]">
        <div className="container-page">
          <SectionHeading>{t.events.recurringHeading}</SectionHeading>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {t.events.recurring.map((item, i) => (
              <Reveal as="li" key={item.name} delay={i * 60}>
                <Link
                  href={pathFor(item.href, locale)}
                  className="group grid items-baseline gap-x-8 gap-y-1 py-7 no-underline sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]"
                >
                  <span className="font-[family-name:var(--font-display)] text-[1.375rem] font-semibold leading-tight text-ink transition-colors group-hover:text-primary">
                    {item.name}
                  </span>
                  <span className="text-muted">{item.when}</span>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-[length:var(--text-label)] font-semibold text-primary sm:mt-0">
                    <ArrowRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Campanhas do ano ----------------------------------------------- */}
      <Section tone="surface">
        <div className="container-page">
          <SectionHeading>{t.events.seasonalHeading}</SectionHeading>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {t.charity.campaigns.map((campaign, i) => (
              <Reveal
                as="li"
                key={campaign.name}
                delay={i * 60}
                className="grid gap-x-8 gap-y-2 py-7 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]"
              >
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-[1.375rem] font-semibold leading-tight">
                    {campaign.name}
                  </h3>
                  <p className="mt-1 text-[length:var(--text-label)] font-semibold text-blue">
                    {campaign.when}
                  </p>
                </div>
                <p className="text-muted">{campaign.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/*
        Estado vazio honesto: a casa não tem eventos extraordinários marcados.
        Melhor dizer isso com clareza do que inventar uma agenda.
      */}
      <Section className="border-t border-line">
        <div className="container-page grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <SectionHeading>{t.events.emptyHeading}</SectionHeading>
          <div>
            <p className="max-w-[58ch] text-[length:var(--text-lead)] leading-[1.55] text-muted">
              {t.events.emptyBody}
            </p>
            <div className="mt-8">
              <ActionAnchor {...facebookLink} variant="outline">
                <FacebookGlyph />
                {t.events.emptyCta}
              </ActionAnchor>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
