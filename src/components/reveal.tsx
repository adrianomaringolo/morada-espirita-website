"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Realce de entrada ao rolar.
 *
 * Três defesas para que uma seção nunca chegue em branco a ninguém:
 *
 * 1. O estado escondido só é *armado* por JS, depois da montagem. Sem JS, com JS
 *    quebrado ou num renderizador headless, o conteúdo já está visível e fica.
 * 2. Só arma o que está abaixo da dobra. O que já está na tela nunca é escondido,
 *    então não existe janela em que o conteúdo inicial pisque.
 * 3. Rede de segurança: se o IntersectionObserver não disparar em 1,2s, mostra
 *    tudo assim mesmo. Animação é enfeite; texto é o produto.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    // Já visível na montagem? Então não há entrada para animar.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.dataset.revealArmed = "true";

    const show = () => {
      el.dataset.revealShown = "true";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    observer.observe(el);

    const failsafe = window.setTimeout(() => {
      show();
      observer.disconnect();
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <Tag
      // @ts-expect-error — o ref é compatível com as três tags permitidas
      ref={ref}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}
