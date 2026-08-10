import Link from "next/link";
import { RoseMark } from "./rose-mark";
import { pathFor, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site, mapsPlaceUrl } from "@/content/site";
import {
  FacebookGlyph,
  InstagramGlyph,
  PhoneGlyph,
  facebookLink,
  instagramLink,
  phoneLink,
} from "./channels";

const NAV = [
  "care",
  "evangelization",
  "charity",
  "spiritism",
  "gospelOnline",
  "chacara",
  "shop",
  "messages",
  "events",
  "history",
  "directions",
  "contact",
] as const;

/**
 * O rodapé é a faixa drenched do sistema: a parede azul da casa.
 * Texto branco a 13.7:1, com a rosa do emblema em cima.
 */
export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="on-deep relative overflow-hidden bg-blue text-bg">
      {/* Marca-d'água: decorativa, atrás de tudo, fora da árvore de acessibilidade. */}
      <RoseMark
        size={520}
        className="pointer-events-none absolute -right-32 -top-28 text-rose-light/[0.13]"
      />

      <div className="container-page relative py-[clamp(3.5rem,7vw,5.5rem)]">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-[minmax(0,1.35fr)_repeat(2,minmax(0,1fr))]">
          <div>
            <RoseMark size={44} className="text-rose-light" />
            <p className="mt-6 max-w-[34ch] font-[family-name:var(--font-display)] text-[1.375rem] leading-[1.3]">
              {t.footer.houseLine}
            </p>
            <p className="mt-4 max-w-[34ch] text-[length:var(--text-small)] text-blue-soft">
              {t.footer.careLine}
            </p>
          </div>

          <nav aria-label={t.nav.footerLabel}>
            <h2 className="text-[length:var(--text-label)] font-semibold text-blue-soft">
              {t.footer.navHeading}
            </h2>
            <ul className="mt-5 space-y-1">
              {NAV.map((id) => (
                <li key={id}>
                  <Link
                    href={pathFor(id, locale)}
                    className="inline-flex min-h-[2.5rem] items-center text-[1.0625rem] text-bg no-underline transition-colors hover:text-blue-soft hover:underline hover:underline-offset-4"
                  >
                    {t.nav[id]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-9">
            <div>
              <h2 className="text-[length:var(--text-label)] font-semibold text-blue-soft">
                {t.footer.visitHeading}
              </h2>
              <address className="mt-5 not-italic text-[1.0625rem] leading-[1.6]">
                <a
                  href={mapsPlaceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-bg no-underline hover:text-blue-soft hover:underline hover:underline-offset-4"
                >
                  {site.address.street}
                  <br />
                  {site.address.district} · {site.address.city}/{site.address.state}
                </a>
              </address>
            </div>

            <div>
              <h2 className="text-[length:var(--text-label)] font-semibold text-blue-soft">
                {t.footer.followHeading}
              </h2>
              {/* Facebook em botão cheio: é o canal principal da casa. */}
              <a
                {...facebookLink}
                className="mt-5 inline-flex min-h-[3rem] items-center gap-2 rounded-[4px] bg-bg px-4 text-[length:var(--text-label)] font-semibold text-blue no-underline transition-colors hover:bg-blue-soft"
              >
                <FacebookGlyph />
                {t.common.messageFacebook}
              </a>
              <ul className="mt-4 space-y-1">
                <li>
                  <a
                    {...instagramLink}
                    className="inline-flex min-h-[2.5rem] items-center gap-2 text-bg no-underline hover:text-blue-soft hover:underline hover:underline-offset-4"
                  >
                    <InstagramGlyph size={17} />
                    {site.social.instagramHandle}
                  </a>
                </li>
                <li>
                  <a
                    {...phoneLink}
                    className="inline-flex min-h-[2.5rem] items-center gap-2 text-bg no-underline hover:text-blue-soft hover:underline hover:underline-offset-4"
                  >
                    <PhoneGlyph size={17} />
                    <span className="tabular-nums">{site.phone.display}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-bg/20 pt-7 text-[length:var(--text-label)] text-blue-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {t.footer.rights}
          </p>
          <p>{t.footer.builtBy}</p>
        </div>
      </div>
    </footer>
  );
}
