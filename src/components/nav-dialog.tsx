"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { RoseMark } from "./rose-mark";
import { LanguageSwitcher } from "./language-switcher";
import { FacebookGlyph, PhoneGlyph, facebookLink, phoneLink } from "./channels";
import { site, mapsPlaceUrl } from "@/content/site";
import type { Locale } from "@/i18n/config";

type Item = { href: string; label: string };

/**
 * O menu completo de navegação, em `<dialog>` nativo.
 *
 * Vale para todas as larguras, não só para celular: o cabeçalho mostra só as
 * páginas principais, e este diálogo é onde o site inteiro aparece — todas as
 * páginas, os canais da casa e o idioma.
 *
 * `<dialog>` porque vai para a top layer do navegador: nunca é recortado por
 * overflow, já traz foco preso, backdrop e fechamento por Esc de fábrica.
 */
export function NavDialog({
  items,
  locale,
  labels,
  channels,
}: {
  items: Item[];
  locale: Locale;
  labels: {
    button: string;
    open: string;
    close: string;
    title: string;
    note: string;
    language: string;
    nav: string;
  };
  channels: { facebook: string; phone: string };
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Fecha ao navegar: o dialog sobrevive à troca de rota do App Router.
  useEffect(() => {
    if (ref.current?.open) {
      ref.current.close();
      setOpen(false);
    }
  }, [pathname]);

  // Trava o scroll do fundo enquanto o menu está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          ref.current?.showModal();
          setOpen(true);
        }}
        aria-haspopup="dialog"
        aria-label={labels.open}
        className="inline-flex min-h-[3rem] min-w-[3rem] items-center justify-center gap-2.5 rounded-[4px] border border-line px-3 text-[length:var(--text-label)] font-semibold text-ink transition-colors hover:border-primary hover:text-primary sm:px-4"
      >
        <svg
          viewBox="0 0 20 20"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M3 6h14M3 10h14M3 14h14" />
        </svg>
        {/* Abaixo de 640px fica só o ícone: o aria-label carrega o significado. */}
        <span className="hidden sm:inline">{labels.button}</span>
      </button>

      <dialog
        ref={ref}
        aria-label={labels.title}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          // Clique no backdrop (fora do conteúdo) fecha.
          if (e.target === ref.current) ref.current?.close();
        }}
        className="m-0 max-h-dvh w-full max-w-none border-b border-line bg-bg p-0 text-ink backdrop:bg-ink/45 max-lg:h-dvh"
      >
        <div className="flex flex-col overflow-y-auto max-lg:h-full">
          <div className="border-b border-line">
            <div className="container-page flex items-center justify-between gap-4 py-3.5">
              <span className="flex items-center gap-3">
                <RoseMark size={34} className="text-rose" />
                <span className="font-[family-name:var(--font-display)] text-[1.1875rem] font-semibold text-ink">
                  {labels.title}
                </span>
              </span>
              <button
                type="button"
                onClick={() => ref.current?.close()}
                // O rótulo some abaixo de 640px, então o nome acessível
                // não pode depender dele.
                aria-label={labels.close}
                className="inline-flex min-h-[3rem] min-w-[3rem] items-center justify-center gap-2 rounded-[4px] border border-line px-3 text-[length:var(--text-label)] font-semibold transition-colors hover:border-primary hover:text-primary sm:px-4"
              >
                <svg
                  viewBox="0 0 20 20"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M5 5l10 10M15 5L5 15" />
                </svg>
                <span className="hidden sm:inline">{labels.close}</span>
              </button>
            </div>
          </div>

          <div className="container-page grid flex-1 content-start items-start gap-x-16 gap-y-12 py-[clamp(1.5rem,4vw,3.5rem)] lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
            <nav aria-label={labels.nav}>
              <ul className="border-t border-line lg:columns-2 lg:gap-x-12 lg:[column-fill:balance]">
                {items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href} className="border-b border-line lg:break-inside-avoid">
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex min-h-[3.5rem] items-center py-2 font-[family-name:var(--font-display)] text-[clamp(1.25rem,1.1rem+0.5vw,1.5rem)] no-underline transition-colors ${
                          active
                            ? "font-semibold text-primary"
                            : "text-ink hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex flex-col gap-8">
              <p className="max-w-[34ch] text-[length:var(--text-small)] text-muted">
                {labels.note}
              </p>

              {/* Facebook primeiro, telefone logo abaixo — a ordem do site inteiro. */}
              <div>
                <a
                  {...facebookLink}
                  className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-[4px] bg-primary px-6 text-[1.0625rem] font-semibold text-bg no-underline transition-colors hover:bg-primary-hover"
                >
                  <FacebookGlyph />
                  {channels.facebook}
                </a>
                <a
                  {...phoneLink}
                  className="mt-3 inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-[4px] border border-primary/45 px-6 text-[1.0625rem] font-semibold text-primary no-underline transition-colors hover:border-primary hover:bg-primary-wash"
                >
                  <PhoneGlyph size={18} />
                  {channels.phone}
                </a>
              </div>

              <address className="not-italic text-[length:var(--text-small)] leading-[1.6] text-muted">
                <a
                  href={mapsPlaceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted no-underline hover:text-primary hover:underline hover:underline-offset-4"
                >
                  {site.address.street}
                  <br />
                  {site.address.district} · {site.address.city}/{site.address.state}
                </a>
              </address>

              <div className="border-t border-line pt-6">
                <LanguageSwitcher locale={locale} label={labels.language} compact />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
