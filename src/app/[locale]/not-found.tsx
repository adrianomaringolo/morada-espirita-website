import { RoseMark } from "@/components/rose-mark";
import { ActionAnchor, ActionLink, ArrowRight } from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale, pathFor } from "@/i18n/config";
import { FacebookGlyph, facebookLink } from "@/components/channels";

/**
 * O `not-found` do App Router não recebe params, então usa o idioma padrão.
 * A pessoa que caiu aqui já está perdida: o telefone da casa fica visível.
 */
export default function NotFound() {
  const t = getDictionary(defaultLocale);

  return (
    <div className="container-page flex min-h-[60vh] flex-col justify-center py-[var(--spacing-section)]">
      <RoseMark size={64} className="text-rose" />
      <h1 className="mt-8 max-w-[16ch] text-[length:var(--text-h1)]">
        {t.notFound.heading}
      </h1>
      <p className="mt-5 max-w-[46ch] text-[length:var(--text-lead)] text-muted">
        {t.notFound.body}
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <ActionLink href={pathFor("home", defaultLocale)}>
          {t.common.backHome}
          <ArrowRight />
        </ActionLink>
        <ActionAnchor {...facebookLink} variant="outline">
          <FacebookGlyph />
          {t.common.messageFacebook}
        </ActionAnchor>
      </div>
    </div>
  );
}
