import { SITE_URL, htmlLang, pathFor, type Locale, type PageId } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/content/site";

function Script({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Dados nossos, estáticos, sem entrada de usuário — o JSON é gerado aqui mesmo.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Identidade da casa. Vai no layout, uma vez por página. */
export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const id = `${SITE_URL}/#organization`;

  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["NGO", "PlaceOfWorship"],
            "@id": id,
            name: site.name,
            alternateName: site.shortName,
            url: `${SITE_URL}${pathFor("home", locale)}`,
            description: t.meta.defaultDescription,
            foundingDate: site.foundedISO,
            inLanguage: [htmlLang.pt, htmlLang.en],
            telephone: site.phone.e164,
            /* Facebook primeiro: é o canal principal declarado pela casa. */
            sameAs: [site.social.facebook, site.social.instagram],
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.street,
              addressLocality: site.address.city,
              addressRegion: site.address.state,
              postalCode: site.address.postalCode,
              addressCountry: site.address.country,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: site.address.lat,
              longitude: site.address.lon,
            },
            openingHoursSpecification: [
              // A janela útil é a janela da porta: de quando abre até quando
              // fecha. Publicar o horário do trabalho aqui faria o Google
              // dizer "aberto" para quem já perdeu a entrada.
              ...site.care.map((slot) => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: `https://schema.org/${slot.day}`,
                opens: slot.doorsOpen,
                closes: slot.doorsClose,
              })),
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: `https://schema.org/${site.evangelization.day}`,
                opens: site.evangelization.opens,
                closes: site.evangelization.closes,
              },
            ],
            isAccessibleForFree: true,
            nonprofitStatus: "https://schema.org/NonprofitANBI",
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: site.name,
            inLanguage: htmlLang[locale],
            publisher: { "@id": id },
          },
        ],
      }}
    />
  );
}

/** Trilha de navegação. Google usa para a linha de breadcrumb no resultado. */
export function BreadcrumbJsonLd({
  locale,
  page,
  title,
}: {
  locale: Locale;
  page: PageId;
  title: string;
}) {
  const t = getDictionary(locale);
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t.nav.home,
            item: `${SITE_URL}${pathFor("home", locale)}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: `${SITE_URL}${pathFor(page, locale)}`,
          },
        ],
      }}
    />
  );
}

/** Perguntas frequentes do atendimento. */
export function FaqJsonLd({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }}
    />
  );
}
