import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { RoseMark } from "@/components/rose-mark";
import {
  ActionAnchor,
  PageHeader,
  Quote,
  Section,
  SectionHeading,
} from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { FacebookGlyph, facebookLink } from "@/components/channels";

/**
 * As duas cores da casa dividem a página: a rosa viva marca os números (os fios
 * sob cada um), o azul marca os rótulos e as etapas. É a regra de direção de
 * arte por seção descrita no DESIGN.md.
 */
export function CharityPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="charity" title={t.charity.heading} />

      <PageHeader title={t.charity.heading} lead={t.charity.lead} />

      {/* Os números, em tipografia — não em cards de métrica ------------- */}
      <Section className="!pt-[var(--spacing-section-tight)]">
        <div className="container-page">
          <h2 className="sr-only">{t.charity.figuresHeading}</h2>
          <dl className="grid gap-10 sm:grid-cols-3">
            {t.home.charity.figures.map((figure, i) => (
              <Reveal key={figure.label} delay={i * 90}>
                <dt className="sr-only">{figure.label}</dt>
                <dd>
                  <span className="numeral block text-[clamp(3rem,2.1rem+3.4vw,4.5rem)] font-semibold leading-[0.95] text-primary">
                    {figure.value}
                  </span>
                  <span aria-hidden="true" className="mt-4 block h-1 w-14 bg-rose" />
                  <span className="mt-4 block max-w-[20ch] text-[length:var(--text-lead)] leading-[1.4]">
                    {figure.label}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
          <p className="mt-10 text-[length:var(--text-small)] text-muted">
            {t.charity.figuresNote}
          </p>
        </div>
      </Section>

      {/* Como funciona: aqui a ordem é informação, então é lista ordenada. */}
      <Section tone="surface">
        <div className="container-page">
          <SectionHeading>{t.charity.howHeading}</SectionHeading>

          <ol className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
            {t.charity.how.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 80}>
                <span className="numeral block text-[1.5rem] font-semibold leading-none text-blue">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[length:var(--text-h3)]">{item.step}</h3>
                <p className="mt-3 text-muted">{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* A frase de Mãe Luzia, sobre a fotografia ------------------------ */}
      <Section>
        <div className="container-page grid items-center gap-x-14 gap-y-12 lg:grid-cols-2">
          <Reveal>
            <Quote
              text={t.charity.quote.text}
              author={t.charity.quote.author}
              role={t.charity.quote.role}
            />
          </Reveal>
          <Reveal delay={120} zoom>
            <Image
              src={images.hands.src}
              alt={t.home.charity.imageAlt}
              width={images.hands.width}
              height={images.hands.height}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="photo h-[clamp(16rem,38vw,26rem)] w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* Campanhas do ano — o único lugar do site onde card é a resposta certa */}
      <Section tone="surface" className="border-t border-line">
        <div className="container-page">
          <SectionHeading>{t.charity.campaignsHeading}</SectionHeading>

          <ul className="mt-12 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(17rem,1fr))]">
            {t.charity.campaigns.map((campaign, i) => (
              <Reveal as="li" key={campaign.name} delay={i * 80}>
                <article className="h-full border border-line bg-bg p-7">
                  <h3 className="text-[length:var(--text-h3)]">{campaign.name}</h3>
                  <p className="mt-2 text-[length:var(--text-label)] font-semibold text-blue">
                    {campaign.when}
                  </p>
                  <p className="mt-4 text-muted">{campaign.body}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Como ajudar ---------------------------------------------------- */}
      <section className="on-deep relative overflow-hidden bg-blue py-[var(--spacing-section)] text-bg">
        <RoseMark
          size={480}
          className="pointer-events-none absolute -left-28 -bottom-36 text-rose-light/[0.13]"
        />
        <div className="container-page relative">
          <h2 className="max-w-[20ch] text-[length:var(--text-h2)] text-bg">
            {t.charity.helpHeading}
          </h2>

          <ul className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
            {t.charity.help.map((item) => (
              <li key={item.title}>
                <span aria-hidden="true" className="block h-0.5 w-14 bg-rose" />
                <h3 className="mt-5 text-[length:var(--text-h3)] text-bg">{item.title}</h3>
                <p className="mt-3 text-blue-soft">{item.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ActionAnchor {...facebookLink} variant="onDeep">
              <FacebookGlyph />
              {t.common.messageFacebook}
            </ActionAnchor>
            <ActionAnchor href={`tel:${site.phone.e164}`} variant="onDeepOutline">
              {t.common.callHouse}
            </ActionAnchor>
            <p className="max-w-[46ch] text-[length:var(--text-small)] text-blue-soft">
              {t.charity.helpNote}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
