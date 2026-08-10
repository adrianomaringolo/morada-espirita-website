import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { RoseMark } from "@/components/rose-mark";
import { PageHeader, Quote, Section, SectionHeading } from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { images } from "@/content/images";
import { site } from "@/content/site";

export function HistoryPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="history" title={t.history.heading} />

      <PageHeader title={t.history.heading} lead={t.history.lead} />

      {/* Linha do tempo: um fio contínuo, com a data como âncora --------- */}
      <Section>
        <div className="container-page">
          <h2 className="sr-only">{t.history.timelineHeading}</h2>

          <ol className="relative">
            {/* O fio vertical corre pela coluna das datas; os pontos ficam sobre ele. */}
            <span
              aria-hidden="true"
              className="absolute inset-y-2 left-[0.3125rem] w-px bg-line sm:left-[11rem]"
            />
            {t.history.timeline.map((entry, i) => (
              <Reveal
                as="li"
                key={entry.year}
                delay={i * 70}
                className="relative grid gap-x-10 gap-y-2 pb-14 pl-8 last:pb-0 sm:grid-cols-[11rem_minmax(0,1fr)] sm:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[0.55rem] h-2.5 w-2.5 rounded-full bg-primary sm:left-[11rem] sm:-translate-x-1/2"
                />
                <span className="numeral text-[1.375rem] font-semibold leading-tight text-primary sm:pr-8 sm:text-right">
                  {entry.year}
                </span>
                <div className="sm:pl-2">
                  <h3 className="text-[length:var(--text-h3)]">{entry.title}</h3>
                  <p className="mt-3 max-w-[60ch] text-muted">{entry.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* As casas ------------------------------------------------------- */}
      {/* Fotografias que a casa guarda de cada endereço. São pequenas — a maior
          tem 615px — e é assim que ficam: documento, não banco de imagens. Por
          isso `object-contain` sobre a superfície, sem corte: o enquadramento
          que existe é o que o fotógrafo fez em 1980. */}
      <Section tone="surface" className="border-y border-line">
        <div className="container-page">
          <SectionHeading lead={t.history.housesLead}>
            {t.history.housesHeading}
          </SectionHeading>

          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {t.history.houses.map((house, i) => (
              <Reveal as="li" key={house.src} delay={(i % 3) * 70}>
                <figure>
                  <Image
                    src={house.src}
                    alt={house.alt}
                    width={house.width}
                    height={house.height}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="photo aspect-[4/3] w-full bg-bg object-contain"
                  />
                  <figcaption className="mt-4">
                    <span className="block text-[length:var(--text-label)] font-semibold text-blue">
                      {house.title}
                    </span>
                    <span className="mt-1 block text-[length:var(--text-small)] leading-[1.5] text-muted">
                      {house.caption}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* A cápsula do tempo: um fato que merece uma faixa inteira -------- */}
      <section className="on-deep relative overflow-hidden bg-blue py-[clamp(3.5rem,7vw,6rem)] text-bg">
        <RoseMark
          size={440}
          className="pointer-events-none absolute -right-24 -top-24 text-rose-light/[0.13]"
        />
        <div className="container-page relative flex flex-wrap items-baseline gap-x-8 gap-y-4">
          <p className="numeral text-[clamp(3.5rem,2.4rem+4.4vw,6rem)] font-semibold leading-[0.9]">
            {site.timeCapsule.opens}
          </p>
          <p className="max-w-[38ch] text-[length:var(--text-lead)] leading-[1.45] text-blue-soft">
            {t.history.capsuleBanner}
          </p>
        </div>
      </section>

      {/* Como a cápsula foi feita — o detalhe técnico é o que a torna real */}
      <Section>
        <div className="container-page grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
          <Reveal>
            <SectionHeading>{t.history.capsuleHeading}</SectionHeading>
          </Reveal>
          <Reveal delay={110}>
            <div className="prose-morada max-w-[62ch]">
              {t.history.capsuleBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mentor e fundadora --------------------------------------------- */}
      {/* Os dois quadros pintados que estão na parede da casa. São a exceção à
          regra de "nunca rostos": aqui o rosto é o assunto. Entram em
          `photo-lifted` porque o ocre da pintura é parte do que se vê. */}
      <Section tone="surface" className="border-y border-line">
        <div className="container-page grid gap-x-14 gap-y-16 lg:grid-cols-2">
          <Reveal>
            <Image
              src={images.mentor.src}
              alt={t.history.mentorImageAlt}
              width={images.mentor.width}
              height={images.mentor.height}
              sizes="(min-width: 640px) 15rem, 60vw"
              className="photo-lifted mb-8 w-[clamp(9rem,32vw,15rem)] object-cover"
            />
            <SectionHeading>{t.history.mentorHeading}</SectionHeading>
            <div className="prose-morada mt-6">
              <p>{t.history.mentorBody}</p>
            </div>
            <div className="mt-10">
              <Quote text={t.history.mentorQuote} author={t.history.mentorHeading} />
            </div>
          </Reveal>

          <Reveal delay={110}>
            <Image
              src={images.founder.src}
              alt={t.history.founderImageAlt}
              width={images.founder.width}
              height={images.founder.height}
              sizes="(min-width: 640px) 15rem, 60vw"
              className="photo-lifted mb-8 w-[clamp(9rem,32vw,15rem)] object-cover"
            />
            <SectionHeading>{t.history.founderHeading}</SectionHeading>
            <div className="prose-morada mt-6">
              <p>{t.history.founderBody}</p>
            </div>
            <div className="mt-10">
              <Quote text={t.history.founderQuote} author={t.charity.quote.author} />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Disciplina e símbolo — as duas coisas que a casa explica de si --- */}
      <Section>
        <div className="container-page grid gap-x-14 gap-y-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeading>{t.history.disciplineHeading}</SectionHeading>
            <div className="mt-8">
              <Quote
                text={t.history.disciplineQuote}
                author={t.history.mentorHeading}
              />
            </div>
            <div className="prose-morada mt-8">
              <p>{t.history.disciplineBody}</p>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <SectionHeading>{t.history.symbolHeading}</SectionHeading>
            <div className="prose-morada mt-6">
              <p>{t.history.symbolBody}</p>
            </div>
            {/* As três rosas na própria cor que representam. */}
            <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-8">
              {t.history.symbolColors.map((color, i) => (
                <li key={color.name} className="flex items-center gap-3">
                  <RoseMark
                    size={44}
                    className={
                      ["text-primary", "text-blue", "text-ink/25"][i] ?? "text-primary"
                    }
                  />
                  <span>
                    <span className="block text-[length:var(--text-label)] font-semibold">
                      {color.name}
                    </span>
                    <span className="block text-[length:var(--text-small)] text-muted">
                      {color.meaning}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
