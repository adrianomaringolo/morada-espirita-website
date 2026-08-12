import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { RoseMark } from "@/components/rose-mark";
import {
  ActionLink,
  ArrowRight,
  PageHeader,
  Quote,
  Section,
  SectionHeading,
} from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import { pathFor, type Locale } from "@/i18n/config";
import { images } from "@/content/images";

/**
 * A página de doutrina — e a única em que a casa explica a si mesma por dentro.
 *
 * A ordem é deliberada: primeiro o que a doutrina afirma, depois o que ela vira
 * de trabalho aqui, e só então o que ela não é. Quem chega desconfiado (e boa
 * parte chega) encontra os limites declarados pela própria casa antes de sair.
 */
export function SpiritismPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="spiritism" title={t.spiritism.heading} />

      <PageHeader title={t.spiritism.heading} lead={t.spiritism.lead} />

      {/* A semeadura: a frase que trouxe quem clicou na home ------------- */}
      <Section>
        <div className="container-page grid items-center gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Reveal>
            <Quote
              text={t.spiritism.seedQuote.text}
              author={t.spiritism.seedQuote.source}
            />
          </Reveal>
          <Reveal delay={110}>
            <div className="prose-morada">
              <p>{t.spiritism.seedBody}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* O que é --------------------------------------------------------- */}
      <Section tone="surface" className="border-y border-line">
        <div className="container-page grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
          <Reveal>
            <SectionHeading>{t.spiritism.basicsHeading}</SectionHeading>
          </Reveal>
          <Reveal delay={110}>
            <div className="prose-morada">
              {t.spiritism.basicsBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* O Evangelho: a base de tudo, antes dos livros da codificação ----- */}
      {/* Tom `plain` é requisito, não preferência: a imagem tem fundo branco
          puro, igual ao `--color-bg`, e é isso que faz a figura flutuar sem
          moldura. Sobre `surface` apareceria um retângulo. */}
      <Section>
        <div className="container-page grid items-center gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Reveal zoom>
            <Image
              src={images.jesus.src}
              alt={t.spiritism.gospelImageAlt}
              width={images.jesus.width}
              height={images.jesus.height}
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 80vw"
              className="mx-auto w-[clamp(13rem,44vw,22rem)] lg:mx-0"
            />
          </Reveal>

          <Reveal delay={110}>
            <SectionHeading>{t.spiritism.gospelHeading}</SectionHeading>
            <div className="prose-morada mt-6">
              {t.spiritism.gospelBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10">
              <Quote
                text={t.spiritism.gospelQuote.text}
                author={t.spiritism.gospelQuote.source}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* As cinco obras: linha do tempo, como em Nossa história ----------- */}
      <Section>
        <div className="container-page">
          <SectionHeading lead={t.spiritism.worksNote}>
            {t.spiritism.worksHeading}
          </SectionHeading>

          <ol className="relative mt-12">
            <span
              aria-hidden="true"
              className="absolute inset-y-2 left-[0.3125rem] w-px bg-line sm:left-[7.5rem]"
            />
            {t.spiritism.works.map((work, i) => (
              <Reveal
                as="li"
                key={work.year}
                delay={i * 70}
                className="relative grid gap-x-10 gap-y-2 pb-12 pl-8 last:pb-0 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[0.55rem] h-2.5 w-2.5 rounded-full bg-primary sm:left-[7.5rem] sm:-translate-x-1/2"
                />
                <span className="numeral text-[1.375rem] font-semibold leading-tight text-primary sm:pr-8 sm:text-right">
                  {work.year}
                </span>
                <div className="sm:pl-2">
                  <h3 className="text-[length:var(--text-h3)]">{work.title}</h3>
                  <p className="mt-3 max-w-[60ch] text-muted">{work.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* Os princípios: lista de definição, não cards --------------------- */}
      <Section tone="surface" className="border-y border-line">
        <div className="container-page">
          <SectionHeading lead={t.spiritism.principlesNote}>
            {t.spiritism.principlesHeading}
          </SectionHeading>

          <dl className="mt-12 divide-y divide-line border-y border-line">
            {t.spiritism.principles.map((principle, i) => (
              <Reveal key={principle.name} delay={i * 60}>
                <div className="grid gap-x-10 gap-y-2 py-7 sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]">
                  <dt className="text-[length:var(--text-h3)] font-[family-name:var(--font-display)] font-semibold leading-snug text-blue">
                    {principle.name}
                  </dt>
                  <dd className="max-w-[62ch] text-muted">{principle.body}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </Section>

      {/* Da doutrina ao trabalho ----------------------------------------- */}
      <Section>
        <div className="container-page">
          <SectionHeading lead={t.spiritism.houseNote}>
            {t.spiritism.houseHeading}
          </SectionHeading>

          <ul className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {t.spiritism.house.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 3) * 80}>
                <RoseMark size={28} className="text-rose" />
                <h3 className="mt-4 text-[length:var(--text-h3)]">{item.title}</h3>
                <p className="mt-3 text-muted">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* O que não é: a faixa azul, para que ninguém saia sem ler --------- */}
      <Section tone="deep">
        <div className="container-page grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
          <Reveal>
            <h2 className="text-[length:var(--text-h2)] text-bg">
              {t.spiritism.limitsHeading}
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <ul className="divide-y divide-bg/20 border-y border-bg/20">
              {t.spiritism.limits.map((limit) => (
                <li key={limit} className="max-w-[62ch] py-5 text-blue-soft">
                  {limit}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Por onde começar ------------------------------------------------- */}
      <Section>
        <div className="container-page">
          <SectionHeading>{t.spiritism.readHeading}</SectionHeading>
          <div className="prose-morada mt-6">
            <p>{t.spiritism.readBody}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ActionLink href={pathFor("care", locale)}>
              {t.spiritism.readCta}
              <ArrowRight />
            </ActionLink>
            <ActionLink href={pathFor("history", locale)} variant="outline">
              {t.spiritism.historyCta}
            </ActionLink>
          </div>
        </div>
      </Section>
    </>
  );
}
