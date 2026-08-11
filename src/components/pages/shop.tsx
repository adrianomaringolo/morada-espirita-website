import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { RoseMark } from "@/components/rose-mark";
import { formatTime } from "@/components/schedule";
import {
  ActionAnchor,
  ActionLink,
  PageHeader,
  Pill,
  Section,
  SectionHeading,
} from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import { pathFor, type Locale } from "@/i18n/config";
import { images } from "@/content/images";
import { site, shopMapsPlaceUrl } from "@/content/site";
import {
  FacebookGlyph,
  InstagramGlyph,
  PhoneGlyph,
  facebookLink,
  phoneLink,
} from "@/components/channels";

/**
 * Uma imagem por oferta, na mesma ordem de `t.shop.offerings` — ver o
 * comentário sobre essa dependência de ordem em i18n/dictionaries/pt.ts.
 *
 * `photo: true` marca as que já são fotografia real da Loja: levam
 * `.photo-lifted`, a variante mais clara e menos dessaturada do filtro de
 * foto (ver DESIGN.md) — aqui a cor do produto importa mais do que nas fotos
 * editoriais do resto do site. As demais ainda são ilustrações de traço
 * provisórias e não levam filtro nenhum.
 */
const offeringImages = [
  { ...images.shop.gotaDeCura, photo: true },
  { ...images.shop.bazar, photo: true },
  { ...images.shop.feiraChacara, photo: true },
  { ...images.shop.padaria, photo: true },
  { ...images.shop.pasteis, photo: false },
];

export function ShopPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="shop" title={t.shop.heading} />

      <PageHeader title={t.shop.heading} lead={t.shop.lead}>
        <Pill tone="rose">{t.shop.missionPill}</Pill>
      </PageHeader>

      {/* O que é a Loja --------------------------------------------------- */}
      <Section className="!pt-[var(--spacing-section-tight)]">
        <div className="container-page grid items-center gap-x-14 gap-y-10 lg:grid-cols-2">
          <Reveal>
            <Image
              src={images.shop.fachada.src}
              alt={t.shop.introImageAlt}
              width={images.shop.fachada.width}
              height={images.shop.fachada.height}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="photo-lifted h-[clamp(16rem,38vw,26rem)] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={110}>
            <div className="prose-morada max-w-[62ch]">
              {t.shop.introBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 max-w-[52ch] text-[length:var(--text-lead)] font-semibold leading-[1.4] text-primary">
              {t.shop.introNote}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* As iniciativas — cada uma com sua imagem provisória --------------- */}
      <Section tone="surface" className="border-y border-line">
        <div className="container-page">
          <SectionHeading>{t.shop.offeringsHeading}</SectionHeading>

          <ul className="mt-12 grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(18rem,1fr))]">
            {t.shop.offerings.map((item, i) => {
              const image = offeringImages[i];
              return (
                <Reveal as="li" key={item.name} delay={i * 70} className="h-full">
                  <article className="flex h-full flex-col border border-line bg-bg">
                    <Image
                      src={image.src}
                      alt={item.imageAlt}
                      width={image.width}
                      height={image.height}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className={`h-48 w-full object-cover ${image.photo ? "photo-lifted" : ""}`}
                    />
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                        <h3 className="text-[length:var(--text-h3)]">{item.name}</h3>
                        {item.saturdayOnly ? <Pill>{t.shop.saturdayOnlyBadge}</Pill> : null}
                      </div>
                      <p className="mt-4 text-muted">{item.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Section>

      {/* Instagram — colagem do feed como fundo, texto sobre um véu escuro */}
      <section className="on-deep relative isolate overflow-hidden py-[clamp(3.5rem,8vw,6.5rem)] text-bg">
        <Image
          src={images.shop.instagramBg.src}
          alt=""
          width={images.shop.instagramBg.width}
          height={images.shop.instagramBg.height}
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/78" />
        <div className="container-page relative flex flex-col items-start gap-5">
          <InstagramGlyph size={30} />
          <h2 className="max-w-[24ch] text-[length:var(--text-h2)] text-bg">
            {t.shop.instagramHeading}
          </h2>
          <p className="max-w-[46ch] text-blue-soft">{t.shop.instagramBody}</p>
          <ActionAnchor href={site.shop.instagram} target="_blank" rel="noreferrer" variant="onDeep">
            <InstagramGlyph size={17} />
            {t.shop.instagramCta}
          </ActionAnchor>
        </div>
      </section>

      {/* Eventos e confraternizações, com a Festa Junina em destaque ------- */}
      <Section>
        <div className="container-page">
          <SectionHeading lead={t.shop.eventsBody}>{t.shop.eventsHeading}</SectionHeading>

          <div className="mt-12 grid items-center gap-x-14 gap-y-10 lg:grid-cols-2">
            <Reveal>
              <Image
                src={images.shop.festaJunina.src}
                alt={t.shop.juneImageAlt}
                width={images.shop.festaJunina.width}
                height={images.shop.festaJunina.height}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="photo-lifted h-[clamp(16rem,38vw,26rem)] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={110}>
              <h3 className="text-[length:var(--text-h3)]">{t.shop.juneHeading}</h3>
              <p className="mt-2 text-[length:var(--text-label)] font-semibold text-blue">
                {t.shop.juneWhen}
              </p>
              <p className="mt-4 max-w-[52ch] text-muted">{t.shop.juneBody}</p>

              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                {t.shop.juneAttractions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[length:var(--text-small)]">
                    <span aria-hidden="true" className="mt-2.5 block h-0.5 w-3.5 shrink-0 bg-rose" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Seu consumo também ajuda ------------------------------------------ */}
      <Section tone="surface" className="border-t border-line">
        <div className="container-page grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <SectionHeading>{t.shop.helpHeading}</SectionHeading>
          <div>
            <p className="max-w-[58ch] text-[length:var(--text-lead)] leading-[1.55] text-muted">
              {t.shop.helpBody}
            </p>
            <p className="mt-4 max-w-[52ch] font-semibold text-ink">{t.shop.helpNote}</p>
            <div className="mt-8">
              <ActionLink href={pathFor("charity", locale)} variant="outline">
                {t.shop.helpCta}
              </ActionLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Horários de funcionamento ------------------------------------------ */}
      <Section>
        <div className="container-page">
          <SectionHeading>{t.shop.scheduleHeading}</SectionHeading>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-[4px] bg-line sm:grid-cols-2">
            <div className="flex flex-col gap-1 bg-bg p-6">
              <dt className="text-[length:var(--text-label)] font-semibold text-muted">
                {t.shop.scheduleWeekdaysLabel}
              </dt>
              <dd className="numeral text-[clamp(2rem,1.6rem+1.6vw,2.75rem)] font-semibold leading-none text-primary">
                <time dateTime={site.shop.weekdays.opens}>
                  {formatTime(locale, site.shop.weekdays.opens)}
                </time>
                <span className="mx-2 font-[family-name:var(--font-sans)] text-[length:var(--text-lead)] font-normal text-muted">
                  –
                </span>
                <time dateTime={site.shop.weekdays.closes}>
                  {formatTime(locale, site.shop.weekdays.closes)}
                </time>
              </dd>
            </div>
            <div className="flex flex-col gap-1 bg-bg p-6">
              <dt className="text-[length:var(--text-label)] font-semibold text-muted">
                {t.shop.scheduleSaturdayLabel}
              </dt>
              <dd className="numeral text-[clamp(2rem,1.6rem+1.6vw,2.75rem)] font-semibold leading-none text-primary">
                <time dateTime={site.shop.saturday.opens}>
                  {formatTime(locale, site.shop.saturday.opens)}
                </time>
                <span className="mx-2 font-[family-name:var(--font-sans)] text-[length:var(--text-lead)] font-normal text-muted">
                  –
                </span>
                <time dateTime={site.shop.saturday.closes}>
                  {formatTime(locale, site.shop.saturday.closes)}
                </time>
              </dd>
            </div>
          </dl>

          <p className="mt-6 max-w-[58ch] text-[length:var(--text-small)] text-muted">
            {t.shop.scheduleSaturdayNote}
          </p>
          <p className="mt-2 max-w-[58ch] text-[length:var(--text-small)] text-muted">
            {t.shop.scheduleEventsNote}
          </p>

          <div className="mt-8 border-t border-line pt-6">
            <a
              href={shopMapsPlaceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[length:var(--text-small)] font-semibold text-primary underline decoration-1 underline-offset-4 hover:text-primary-hover hover:decoration-2"
            >
              {site.shop.address.street} — {site.shop.address.note}
            </a>
          </div>
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
            <h2 className="max-w-[20ch] text-[length:var(--text-h2)] text-bg">
              {t.shop.closingHeading}
            </h2>
            <p className="mt-4 max-w-[46ch] text-blue-soft">{t.shop.closingBody}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionAnchor {...facebookLink} variant="onDeep">
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
