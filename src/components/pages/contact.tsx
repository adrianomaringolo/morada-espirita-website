import { BreadcrumbJsonLd } from "@/components/json-ld";
import { ContactForm } from "@/components/contact-form";
import { CareSchedule } from "@/components/schedule";
import {
  FacebookGlyph,
  InstagramGlyph,
  PhoneGlyph,
  facebookLink,
  instagramLink,
  phoneLink,
} from "@/components/channels";
import { ActionAnchor, ArrowRight, PageHeader, Section, SectionHeading } from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { site, mapsPlaceUrl } from "@/content/site";

/**
 * A ordem da página é a ordem dos canais da casa: Facebook, Instagram,
 * telefone, presencial. O Facebook ganha a faixa inteira no topo porque é
 * onde a Morada responde; o telefone continua logo abaixo, grande e clicável,
 * para quem prefere voz.
 */
export function ContactPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  // Sem endpoint configurado, o formulário não aparece — ver ContactForm.
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="contact" title={t.contact.heading} />

      <PageHeader title={t.contact.heading} lead={t.contact.lead} />

      {/* Canal principal ------------------------------------------------ */}
      <section className="on-deep bg-blue py-[clamp(3rem,6vw,4.5rem)] text-bg">
        <div className="container-page grid items-center gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <h2 className="flex items-center gap-3 text-[length:var(--text-h2)] text-bg">
              <span className="text-rose-light">
                <FacebookGlyph size={30} />
              </span>
              {t.contact.facebookHeading}
            </h2>
            <p className="mt-4 max-w-[52ch] text-blue-soft">{t.contact.facebookNote}</p>
          </div>
          <ActionAnchor {...facebookLink} variant="onDeep">
            <FacebookGlyph />
            {site.social.facebookHandle}
            <ArrowRight />
          </ActionAnchor>
        </div>
      </section>

      {/* Os outros caminhos --------------------------------------------- */}
      <Section className="!pt-[var(--spacing-section-tight)]">
        <div className="container-page grid gap-x-14 gap-y-14 lg:grid-cols-3">
          <div>
            <h2 className="flex items-center gap-2.5 text-[length:var(--text-h3)]">
              <span className="text-rose">
                <InstagramGlyph size={22} />
              </span>
              {t.contact.instagramHeading}
            </h2>
            <a
              {...instagramLink}
              className="mt-4 inline-flex min-h-[3rem] items-center text-[1.25rem] font-semibold text-primary no-underline hover:text-primary-hover hover:underline hover:underline-offset-4"
            >
              {site.social.instagramHandle}
            </a>
            <p className="mt-3 max-w-[32ch] text-[length:var(--text-small)] text-muted">
              {t.contact.instagramNote}
            </p>
          </div>

          <div>
            <h2 className="flex items-center gap-2.5 text-[length:var(--text-h3)]">
              <span className="text-rose">
                <PhoneGlyph size={21} />
              </span>
              {t.contact.phoneHeading}
            </h2>
            <a
              {...phoneLink}
              className="numeral mt-4 inline-flex min-h-[3.25rem] items-center text-[clamp(1.75rem,1.4rem+1.1vw,2.25rem)] font-semibold leading-none text-primary no-underline hover:text-primary-hover hover:underline hover:underline-offset-8"
            >
              {site.phone.display}
            </a>
            <p className="mt-3 max-w-[32ch] text-[length:var(--text-small)] text-muted">
              {t.contact.phoneNote}
            </p>
          </div>

          <div>
            <h2 className="text-[length:var(--text-h3)]">{t.contact.visitHeading}</h2>
            <address className="mt-4 not-italic">
              <a
                href={mapsPlaceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[1.125rem] font-semibold text-primary no-underline hover:text-primary-hover hover:underline hover:underline-offset-4"
              >
                {site.address.street}
                <br />
                {site.address.district} · {site.address.city}/{site.address.state}
              </a>
            </address>
            <p className="mt-3 max-w-[32ch] text-[length:var(--text-small)] text-muted">
              {t.contact.visitNote}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface" className="border-t border-line">
        <div className="container-page">
          <SectionHeading>{t.common.schedule}</SectionHeading>
          <div className="mt-8 border border-line">
            <CareSchedule locale={locale} />
          </div>
        </div>
      </Section>

      {endpoint ? (
        <Section className="border-t border-line">
          <div className="container-page grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <SectionHeading lead={t.contact.formNote}>
              {t.contact.formHeading}
            </SectionHeading>
            <ContactForm copy={t.contact.form} endpoint={endpoint} />
          </div>
        </Section>
      ) : null}
    </>
  );
}
