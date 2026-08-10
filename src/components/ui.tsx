import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* Ações                                                                      */
/* -------------------------------------------------------------------------- */

const actionBase =
  "inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-[4px] " +
  "px-6 py-3 text-[1.0625rem] font-semibold leading-tight no-underline " +
  "transition-colors duration-200 ease-[var(--ease-out-quart)]";

const actionVariants = {
  solid: "bg-primary text-bg hover:bg-primary-hover",
  outline:
    "border border-primary/45 text-primary hover:border-primary hover:bg-primary-wash",
  /** Para usar dentro das faixas azuis. */
  onDeep: "bg-bg text-blue hover:bg-blue-soft",
  onDeepOutline:
    "border border-bg/45 text-bg hover:border-bg hover:bg-bg/10",
} as const;

type ActionVariant = keyof typeof actionVariants;

export function ActionLink({
  href,
  variant = "solid",
  className = "",
  children,
  ...rest
}: ComponentProps<typeof Link> & { variant?: ActionVariant }) {
  return (
    <Link
      href={href}
      className={`${actionBase} ${actionVariants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ActionAnchor({
  variant = "solid",
  className = "",
  children,
  ...rest
}: ComponentProps<"a"> & { variant?: ActionVariant }) {
  return (
    <a className={`${actionBase} ${actionVariants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

/** Seta discreta, alinhada à linha de base do texto. */
export function ArrowRight() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 translate-y-[1px]"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

/** Link de texto com sublinhado próprio — o padrão de link em prosa da casa. */
export function TextLink({
  href,
  className = "",
  children,
  ...rest
}: ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 font-semibold text-primary underline decoration-1 underline-offset-4 transition-colors hover:text-primary-hover hover:decoration-2 ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Estrutura de página                                                        */
/* -------------------------------------------------------------------------- */

export function Section({
  children,
  className = "",
  tone = "plain",
  ...rest
}: ComponentProps<"section"> & { tone?: "plain" | "surface" | "deep" }) {
  const tones = {
    plain: "",
    surface: "bg-surface",
    deep: "on-deep bg-blue text-bg",
  } as const;
  return (
    <section
      className={`py-[var(--spacing-section)] ${tones[tone]} ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}

/**
 * Cabeçalho de seção.
 *
 * Sem sobrancelha em caixa-alta: o sistema não tem esse elemento. A hierarquia
 * vem do tamanho do título e do fio de abertura, não de um rótulo repetido.
 */
export function SectionHeading({
  as: Tag = "h2",
  children,
  lead,
  id,
  className = "",
}: {
  as?: "h2" | "h3";
  children: ReactNode;
  lead?: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-[38ch] ${className}`}>
      <Tag
        id={id}
        className={Tag === "h2" ? "text-[length:var(--text-h2)]" : "text-[length:var(--text-h3)]"}
      >
        {children}
      </Tag>
      {lead ? (
        <p className="mt-4 text-[length:var(--text-lead)] leading-[1.55] text-muted">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/** Cabeçalho das páginas internas. */
export function PageHeader({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line pt-[clamp(2.5rem,6vw,4.5rem)] pb-[clamp(2.5rem,5vw,3.75rem)]">
      <div className="container-page">
        <h1 className="max-w-[18ch] text-[length:var(--text-h1)]">{title}</h1>
        {lead ? (
          <p className="mt-6 max-w-[52ch] text-[length:var(--text-lead)] leading-[1.5]">
            {lead}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </header>
  );
}

/**
 * Citação atribuída. O itálico da Aleo é reservado a este componente.
 */
/**
 * Cuidado com a medida: o `ch` do `max-w` resolve na fonte da `<figure>` (a
 * Archivo de 18px), não na serifa grande do `<blockquote>` — 26ch dão cerca de
 * 234px, não 26 caracteres da citação. Os valores abaixo estão calibrados
 * nesse engano e valem para frases curtas. Para uma citação longa, passe
 * `className` com a medida que a composição pedir.
 */
export function Quote({
  text,
  author,
  role,
  tone = "plain",
  className = "",
}: {
  text: string;
  author: string;
  role?: string;
  tone?: "plain" | "deep";
  className?: string;
}) {
  const deep = tone === "deep";
  return (
    <figure className={`${deep ? "max-w-[26ch]" : "max-w-[34ch]"} ${className}`}>
      <blockquote
        className={`font-[family-name:var(--font-display)] italic leading-[1.22] ${
          deep
            ? "text-[length:var(--text-h1)] text-bg"
            : "text-[length:var(--text-h2)] text-ink"
        }`}
      >
        <p>{`“${text}”`}</p>
      </blockquote>
      <figcaption
        className={`mt-6 text-[length:var(--text-small)] ${deep ? "text-blue-soft" : "text-muted"}`}
      >
        <span className={deep ? "font-semibold text-bg" : "font-semibold text-ink"}>
          {author}
        </span>
        {role ? <span className="block">{role}</span> : null}
      </figcaption>
    </figure>
  );
}

/**
 * Selo curto e calmo. Azul é o padrão — informação serena. A rosa existe para
 * o raro caso em que o selo precisa carregar a identidade, não só informar.
 */
export function Pill({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "rose";
}) {
  const tones = {
    blue: "bg-blue-soft text-ink",
    rose: "bg-rose text-ink",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-[4px] px-3 py-1.5 text-[length:var(--text-label)] font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
