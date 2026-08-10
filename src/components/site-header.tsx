import Link from "next/link";
import { RoseMark } from "./rose-mark";
import { LanguageSwitcher } from "./language-switcher";
import { NavDialog } from "./nav-dialog";
import { NavLink } from "./nav-link";
import { pathFor, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Uma linha só: marca, páginas principais, idioma e o botão do menu completo.
 *
 * Sem botão de contato. O cabeçalho serve para ir a algum lugar, não para agir
 * — os canais da casa vivem no rodapé, na página de Contato, na faixa de
 * chamada de cada página e dentro do menu completo.
 */

/** As páginas que respondem "por que vim aqui". Só estas ficam à vista. */
const PRIMARY = [
  "care",
  "evangelization",
  "charity",
  "directions",
  "contact",
] as const;

/** Contexto e leitura: vivem no menu completo e no rodapé. */
const SECONDARY = ["spiritism", "history", "messages", "events"] as const;

/** No menu completo tudo convive numa lista só, na ordem de leitura do site. */
const ALL = [
  "care",
  "evangelization",
  "charity",
  "spiritism",
  "history",
  "messages",
  "events",
  "directions",
  "contact",
] as const;

// Trava de manutenção: nenhuma página pode existir no cabeçalho e faltar no
// menu completo. Roda uma vez, na importação do módulo — não a cada render.
{
  const missing = [...PRIMARY, ...SECONDARY].filter((id) => !ALL.includes(id));
  if (missing.length) {
    throw new Error(`Páginas fora do menu completo: ${missing.join(", ")}`);
  }
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <header className="sticky top-0 z-[var(--z-sticky)] border-b border-line bg-bg/95 backdrop-blur-[3px]">
      <div className="container-page flex items-center justify-between gap-4 py-3.5 sm:gap-6">
        <Link
          href={pathFor("home", locale)}
          className="flex shrink-0 items-center gap-3 no-underline"
        >
          <RoseMark size={34} className="shrink-0 text-rose" />
          <span className="leading-none">
            <span className="block whitespace-nowrap font-[family-name:var(--font-display)] text-[1.1875rem] font-semibold tracking-[-0.01em] text-ink">
              Morada Espírita
            </span>
            <span className="mt-1 block whitespace-nowrap text-[0.8125rem] font-medium text-muted">
              Professor Lairi Hans
            </span>
          </span>
        </Link>

        <nav aria-label={t.nav.primaryLabel} className="hidden min-[1100px]:block">
          <ul className="flex items-center gap-x-5">
            {PRIMARY.map((id) => (
              <li key={id}>
                <NavLink href={pathFor(id, locale)}>{t.nav[id]}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden min-[1100px]:block">
            <LanguageSwitcher locale={locale} label={t.nav.languageLabel} />
          </div>

          <NavDialog
            items={ALL.map((id) => ({ href: pathFor(id, locale), label: t.nav[id] }))}
            locale={locale}
            labels={{
              button: t.nav.menuButton,
              open: t.nav.openMenu,
              close: t.nav.closeMenu,
              title: t.nav.menuTitle,
              note: t.nav.menuNote,
              language: t.nav.languageLabel,
              nav: t.nav.menuTitle,
            }}
            channels={{ facebook: t.common.messageFacebook, phone: t.common.callHouse }}
          />
        </div>
      </div>
    </header>
  );
}
