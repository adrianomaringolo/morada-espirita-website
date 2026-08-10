import { BreadcrumbJsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { RoseMark } from "@/components/rose-mark";
import { PageHeader, Section } from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

/**
 * A única página do site em que a serifa carrega o corpo: são textos para ler
 * devagar, não informação para consultar.
 */
export function MessagesPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <BreadcrumbJsonLd locale={locale} page="messages" title={t.messages.heading} />

      <PageHeader title={t.messages.heading} lead={t.messages.lead} />

      {t.messages.sections.map((section, index) => (
        <Section
          key={section.author}
          tone={index % 2 === 1 ? "surface" : "plain"}
          className={index > 0 ? "border-t border-line" : ""}
        >
          <div className="container-page grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <header className="lg:sticky lg:top-24 lg:self-start">
              <RoseMark size={40} className="text-rose" />
              <h2 className="mt-5 text-[length:var(--text-h2)]">{section.author}</h2>
              <p className="mt-3 text-[length:var(--text-small)] text-muted">
                {section.note}
              </p>
            </header>

            <ul className="divide-y divide-line border-y border-line">
              {section.quotes.map((quote, i) => (
                <Reveal as="li" key={quote} delay={i * 60} className="py-8 first:pt-0 last:pb-0">
                  <p className="max-w-[46ch] font-[family-name:var(--font-display)] text-[clamp(1.25rem,1.1rem+0.6vw,1.5rem)] italic leading-[1.42]">
                    {`“${quote}”`}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </Section>
      ))}
    </>
  );
}
