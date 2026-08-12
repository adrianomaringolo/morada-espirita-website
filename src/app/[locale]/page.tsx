import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { RoseMark } from "@/components/rose-mark";
import { Reveal } from "@/components/reveal";
import { CareSchedule } from "@/components/schedule";
import {
  ActionLink,
  ArrowRight,
  Pill,
  Quote,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/i18n/metadata";
import { isLocale, locales, pathFor, type Locale } from "@/i18n/config";
import { images } from "@/content/images";
import { site } from "@/content/site";

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    ...buildMetadata({
      locale,
      page: "home",
      title: t.home.title,
      description: t.home.description,
    }),
    // A home usa o título por extenso, sem o sufixo do template.
    title: { absolute: t.home.title },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero — a resposta antes do discurso                              */}
      {/* ---------------------------------------------------------------- */}
      {/*
        Duas zonas e um fio entre elas.
        Em cima, quem é a casa: o nome, as três condições e a fachada. Embaixo,
        atravessando as duas colunas, a resposta — e o fio que abre essa faixa
        passa por baixo da fotografia, que é o que faz foto e texto terminarem
        na mesma linha em vez de cada um parar onde calha.

        Um único `container-page`, no avô de todo mundo: `container-page` dentro
        de uma coluna de grade resolve a margem contra a coluna, não contra a
        página, e o título da faixa desalinharia do h1 em quase 130px.

        A ordem do DOM é identidade → resposta → fotografia, para que no celular
        o horário chegue antes da imagem. Em `lg` as áreas nomeadas devolvem a
        foto à direita sem tocar na ordem de leitura.
      */}
      <section className="border-b border-line pt-[clamp(2.25rem,5vw,4rem)]">
        <div
          className="container-page lg:grid lg:gap-x-12
                     lg:grid-cols-[minmax(0,1fr)_minmax(0,0.86fr)]
                     lg:[grid-template-areas:'identity_photo''answer_answer']"
        >
          <div className="pb-[clamp(2rem,4vw,3.25rem)] lg:[grid-area:identity]">
            <h1 className="max-w-[15ch] text-[length:var(--text-display)] leading-[1.04]">
              {t.home.hero.heading}
            </h1>

            {/* Agrupamento apertado: as três condições são legenda do nome. */}
            <ul className="mt-5 flex flex-wrap gap-2">
              <li>
                <Pill>{t.common.free}</Pill>
              </li>
              <li>
                <Pill>{t.common.noBooking}</Pill>
              </li>
              <li>
                <Pill>{t.common.openToAll}</Pill>
              </li>
            </ul>

            <p className="mt-9 max-w-[44ch] text-[length:var(--text-lead)] leading-[1.5] text-muted">
              {t.home.hero.lead}
            </p>
          </div>

          {/* A resposta: o que a pessoa veio buscar, na largura inteira. */}
          <div
            className="border-t border-line pt-[clamp(2rem,4vw,3rem)]
                       pb-[clamp(2.5rem,5vw,4rem)] lg:[grid-area:answer]"
          >
            <h2 className="text-[length:var(--text-h3)]">{t.home.schedule.heading}</h2>

            <div className="mt-8">
              <CareSchedule locale={l} layout="flush" />
            </div>

            <p className="mt-5 max-w-[64ch] text-[length:var(--text-small)] text-muted">
              {t.home.schedule.note}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <ActionLink href={pathFor("care", l)}>
                {t.home.hero.primaryCta}
                <ArrowRight />
              </ActionLink>
              <ActionLink href={pathFor("directions", l)} variant="outline">
                {t.home.hero.secondaryCta}
              </ActionLink>
            </div>
          </div>

          {/* A fachada real da Rua José Paulino: a primeira coisa que a pessoa vê
              no site é a mesma que ela vai procurar na rua.
              O enquadramento muda com a forma do recorte. Na faixa larga do
              celular sobra pouca largura, então o corte fica em 35% e o nome
              inteiro cabe; na coluna alta do desktop sobra folga, e 40% troca
              parede vazia por fachada de vidro sem encostar no "M" de MORADA.

              Sem a utility `photo`, de propósito: esta é a única fotografia do
              site que entra com a cor como foi fotografada. É a casa de verdade,
              e o azul do vidro e o verde do jardim fazem parte de reconhecê-la
              na rua. As outras fotos continuam dessaturadas. */}
          {/* Ancorada no pé da área, não esticada até o topo: uma coluna alta
              deixaria o recorte quase quadrado e comeria o "MORADA" da parede.
              Curta e larga, a fotografia guarda o nome inteiro, encosta no fio
              da faixa e deixa ar acima — a assimetria é de propósito. */}
          <div className="relative mt-12 lg:mt-0 lg:self-end lg:[grid-area:photo]">
            <Image
              src={images.facade.src}
              alt={t.home.hero.imageAlt}
              width={images.facade.width}
              height={images.facade.height}
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="h-[clamp(12rem,42vw,17rem)] w-full object-cover object-[35%_center]
                         lg:h-[clamp(14rem,23vw,19rem)] lg:object-[40%_center]"
            />
            {/* A rosa cavalga a borda esquerda da fotografia, sobre o céu
                lavado do alto: metade no branco da página, metade na imagem, e
                sempre acima da linha das letras douradas. É a única coisa que
                se move no hero.
                O avanço à esquerda é menor que o respiro do contêiner
                (`clamp(1.25rem,5vw,3rem)`), senão a rosa encosta na borda da
                tela no celular e abre rolagem horizontal. */}
            <RoseMark
              size={104}
              bloom
              className="absolute -top-8 -left-4 text-rose sm:-left-6 sm:size-28
                         lg:-top-9 lg:-left-8 lg:size-32"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* A parede azul, com a rosa da casa em cima                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="on-deep relative overflow-hidden bg-blue py-[clamp(4rem,8vw,7rem)] text-bg">
        <div className="container-page relative grid items-center gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <Reveal>
            <Quote
              text={t.home.motto.quote}
              author={t.home.motto.author}
              role={t.home.motto.role}
              tone="deep"
            />
          </Reveal>
          {/* Rosa clara sobre o azul profundo: o par que o emblema da casa já traz. */}
          <RoseMark
            size={240}
            className="hidden text-rose-light lg:block lg:size-[17rem]"
          />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Caridade — os fios são a rosa viva; os rótulos, o azul            */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="surface">
        <div className="container-page grid items-center gap-x-14 gap-y-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading lead={t.home.charity.body}>
              {t.home.charity.heading}
            </SectionHeading>

            <dl className="mt-10 grid gap-8 sm:grid-cols-3">
              {t.home.charity.figures.map((figure) => (
                <div key={figure.label}>
                  <dt className="sr-only">{figure.label}</dt>
                  <dd>
                    <span className="numeral block text-[clamp(2.25rem,1.7rem+2vw,3rem)] font-semibold leading-none text-primary">
                      {figure.value}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-3 block h-1 w-10 bg-rose"
                    />
                    <span className="mt-3 block max-w-[18ch] text-[length:var(--text-small)] leading-[1.45] text-muted">
                      {figure.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-10">
              <TextLink href={pathFor("charity", l)}>
                {t.home.charity.cta}
                <ArrowRight />
              </TextLink>
            </p>
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

      {/* ---------------------------------------------------------------- */}
      {/* Evangelização                                                    */}
      {/* ---------------------------------------------------------------- */}
      <Section>
        <div className="container-page grid items-center gap-x-14 gap-y-12 lg:grid-cols-2">
          <Reveal className="lg:order-2">
            <SectionHeading lead={t.home.evangelization.body}>
              {t.home.evangelization.heading}
            </SectionHeading>
            <p className="mt-9">
              <TextLink href={pathFor("evangelization", l)}>
                {t.home.evangelization.cta}
                <ArrowRight />
              </TextLink>
            </p>
          </Reveal>

          <Reveal delay={120} zoom className="lg:order-1">
            <Image
              src={images.drawings.src}
              alt={t.evangelization.imageAlt}
              width={images.drawings.width}
              height={images.drawings.height}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="photo-lifted h-[clamp(16rem,38vw,26rem)] w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* A semeadura — a dobra que vira do trabalho para a doutrina       */}
      {/* ---------------------------------------------------------------- */}
      {/*
        Um campo semeado nas três cores do emblema, sob véu azul da Morada.
        O véu não é enfeite: sem ele a ilustração vira céu luminoso de cartaz
        religioso, que é anti-referência declarada em PRODUCT.md, e o texto
        perderia contraste sobre as pétalas claras.

        80% é o mais claro que a faixa aceita. Medido nos pixels realmente
        pintados, no ponto mais claro sob cada bloco: citação 7,44:1, fonte
        7,45:1 e o parágrafo em `blue-soft` 5,53:1 — dentro dos pisos que o
        projeto declara (corpo ≥ 7:1, secundário ≥ 4.5:1). A 72% o parágrafo
        cai para 4,38:1 e fura o piso do secundário; não desça daqui sem medir
        de novo.
      */}
      <section className="on-deep relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8rem)] text-bg">
        <Image
          src={images.sownField.src}
          alt={t.home.seed.imageAlt}
          width={images.sownField.width}
          height={images.sownField.height}
          sizes="100vw"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-blue/80" />

        <div className="container-page grid items-center gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal>
            <Quote
              text={t.home.seed.quote}
              author={t.home.seed.source}
              tone="deep"
              className="max-w-none"
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="max-w-[38ch] text-[length:var(--text-lead)] leading-[1.5] text-blue-soft">
              {t.home.seed.body}
            </p>
            <p className="mt-9">
              <ActionLink href={pathFor("spiritism", l)} variant="onDeep">
                {t.home.seed.cta}
                <ArrowRight />
              </ActionLink>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* A casa                                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="surface" className="border-t border-line">
        <div className="container-page">
          <Reveal className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <SectionHeading>{t.home.history.heading}</SectionHeading>
            <div>
              <p className="max-w-[60ch] text-[length:var(--text-lead)] leading-[1.55]">
                {t.home.history.body}
              </p>

              {/* Três datas, desenhadas: 1980, a sede, e a cápsula que só abre em 2082. */}
              <ol className="mt-10 grid gap-6 sm:grid-cols-3">
                {[
                  { year: site.foundedYear, label: t.history.timeline[0].title },
                  { year: "2000–2002", label: t.history.timeline[2].title },
                  { year: site.timeCapsule.opens, label: t.history.timeline[3].title },
                ].map((item) => (
                  <li key={String(item.year)} className="border-t-2 border-primary pt-4">
                    <span className="numeral block text-[1.75rem] font-semibold leading-none text-primary">
                      {item.year}
                    </span>
                    <span className="mt-2 block text-[length:var(--text-small)] text-muted">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mt-10">
                <TextLink href={pathFor("history", l)}>
                  {t.home.history.cta}
                  <ArrowRight />
                </TextLink>
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
