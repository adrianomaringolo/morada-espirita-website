"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Item da navegação principal. O estado ativo é marcado por peso e por um fio
 * carmim sob o rótulo — nunca só por cor, para não depender de percepção cromática.
 */
export function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative inline-flex min-h-[2.75rem] items-center text-[0.9375rem] no-underline transition-colors ${
        active ? "font-semibold text-primary" : "font-medium text-ink hover:text-primary"
      }`}
    >
      {children}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary transition-opacity ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />
    </Link>
  );
}
