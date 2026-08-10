import { site } from "@/content/site";

/**
 * Os canais de contato da casa, em um lugar só.
 *
 * A ordem é sempre a mesma no site inteiro: **Facebook primeiro**, porque é
 * onde a Morada responde; depois Instagram; depois telefone. O telefone nunca
 * some — só deixa de ser o primeiro.
 */

export function FacebookGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M12.6 18.5v-7.2h2.4l.36-2.8H12.6V6.7c0-.81.22-1.36 1.39-1.36h1.48V2.83a19.8 19.8 0 0 0-2.16-.11c-2.14 0-3.6 1.3-3.6 3.7v2.06H7.3v2.8h2.41v7.22h2.89Z" />
    </svg>
  );
}

export function InstagramGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M6.4 2.6h7.2a3.8 3.8 0 0 1 3.8 3.8v7.2a3.8 3.8 0 0 1-3.8 3.8H6.4a3.8 3.8 0 0 1-3.8-3.8V6.4a3.8 3.8 0 0 1 3.8-3.8Z" />
      <circle cx="10" cy="10" r="3.3" />
      <circle cx="14.5" cy="5.5" r="0.95" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhoneGlyph({ size = 17 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M6.2 3.2 4 4.4c-.7.4-1 1.2-.8 2 .7 2.9 2.2 5.4 4.3 7.5 2.1 2.1 4.6 3.6 7.5 4.3.8.2 1.6-.1 2-.8l1.2-2.2-3.6-2.1-1.6 1.6a13 13 0 0 1-4.4-4.4l1.6-1.6-3.6-3.6Z" />
    </svg>
  );
}

/** Atributos prontos para o link do Facebook — o canal principal. */
export const facebookLink = {
  href: site.social.facebook,
  target: "_blank",
  rel: "noreferrer",
} as const;

export const instagramLink = {
  href: site.social.instagram,
  target: "_blank",
  rel: "noreferrer",
} as const;

export const phoneLink = { href: `tel:${site.phone.e164}` } as const;
