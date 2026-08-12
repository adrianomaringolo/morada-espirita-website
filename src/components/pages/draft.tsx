import { BreadcrumbJsonLd } from "@/components/json-ld";
import { RoseMark } from "@/components/rose-mark";
import { FacebookGlyph, facebookLink } from "@/components/channels";
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
import { site } from "@/content/site";

/** As páginas que ainda não têm conteúdo. Uma só forma para todas elas. */
type DraftPageId = "chacara" | "shop";

/**
 * Página em preparação.
 *
 * O que ela não pode ser: uma página vazia que deixa a pessoa sem saber o que
 * fazer. Então ela diz na cara que ainda não tem conteúdo, e entrega na mesma
 * dobra os dois canais em que a Morada responde de verdade — a mesma regra do
 * resto do site: onde houver botão de Facebook, o telefone está visível junto.
 *
 * Enquanto o id estiver em `draftPages` (src/i18n/config.ts), a rota sai com
 * `noindex` e fica fora do sitemap. Tirar de lá é o que publica a página.
 */
export function DraftPage({ locale, page }: { locale: Locale; page: DraftPageId }) {
  const t = getDictionary(locale);
  const section = t[page];

  return (
    <>
      <BreadcrumbJsonLd locale={locale} page={page} title={section.heading} />

      <PageHeader title={section.heading} lead={section.lead}>
        <Pill>{t.common.draft.notice}</Pill>
      </PageHeader>

      <Section>
        <div className="container-page grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,auto)_minmax(0,1fr)]">
          <RoseMark size={56} className="text-rose" />

          <div>
            <p className="max-w-[52ch] text-[length:var(--text-lead)] leading-[1.5]">
              {t.common.draft.body}
            </p>

            <div className="mt-12 border-t border-line pt-10">
              <SectionHeading as="h2">{t.common.draft.askHeading}</SectionHeading>
              <p className="mt-4 max-w-[52ch] text-muted">{t.common.draft.askBody}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionAnchor {...facebookLink}>
                  <FacebookGlyph />
                  {t.common.messageFacebook}
                </ActionAnchor>
                <ActionAnchor href={`tel:${site.phone.e164}`} variant="outline">
                  {t.common.callHouse}
                </ActionAnchor>
              </div>

              <p className="mt-10">
                <ActionLink href={pathFor("home", locale)} variant="outline">
                  {t.common.draft.backCta}
                  <ArrowRight />
                </ActionLink>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
