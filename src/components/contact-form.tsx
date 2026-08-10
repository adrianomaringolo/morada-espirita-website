"use client";

import { useId, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type FieldName = "name" | "email" | "message";
type Errors = Partial<Record<FieldName, string>>;

/**
 * Formulário de contato.
 *
 * Só é renderizado quando existe um endpoint configurado (ver a página de
 * contato). Um formulário que não envia para lugar nenhum é pior do que
 * formulário nenhum — a casa tem telefone, e ele funciona.
 */
export function ContactForm({
  copy,
  endpoint,
}: {
  copy: Dictionary["contact"]["form"];
  endpoint: string;
}) {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const summaryRef = useRef<HTMLDivElement>(null);

  const fieldId = (name: string) => `${id}-${name}`;
  const errorId = (name: string) => `${id}-${name}-error`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) next.name = copy.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = copy.errors.email;
    if (!message) next.message = copy.errors.message;

    setErrors(next);

    if (Object.keys(next).length > 0) {
      // Manda o foco para o resumo, que já anuncia via aria-live.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setStatus(response.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        data-contact-sent=""
        className="border border-primary/30 bg-primary-wash p-8"
      >
        <h3 className="text-[length:var(--text-h3)]">{copy.successHeading}</h3>
        <p className="mt-3 max-w-[46ch] text-muted">{copy.successBody}</p>
      </div>
    );
  }

  const errorList = (Object.keys(errors) as FieldName[]).filter((key) => errors[key]);

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-[38rem]">
      {/* Resumo de erros: focável, anunciado, e com links para cada campo. */}
      {/* `role="alert"` já implica aria-live assertivo — declarar "polite" junto
          seria contraditório, e leitores de tela resolvem isso de formas diferentes. */}
      <div
        ref={summaryRef}
        tabIndex={-1}
        role="alert"
        data-contact-summary=""
        className={errorList.length || status === "failed" ? "mb-8" : "sr-only"}
      >
        {errorList.length > 0 ? (
          <div className="border border-primary bg-primary-wash p-5">
            <p className="font-semibold text-primary">{copy.errors.summary}</p>
            <ul className="mt-2 space-y-1">
              {errorList.map((key) => (
                <li key={key}>
                  <a
                    href={`#${fieldId(key)}`}
                    className="text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
                  >
                    {errors[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : status === "failed" ? (
          <p className="border border-primary bg-primary-wash p-5 font-semibold text-primary">
            {copy.errors.failed}
          </p>
        ) : null}
      </div>

      <div className="space-y-7">
        <Field
          id={fieldId("name")}
          name="name"
          label={copy.name}
          required
          requiredLabel={copy.required}
          error={errors.name}
          errorId={errorId("name")}
          autoComplete="name"
        />

        <Field
          id={fieldId("email")}
          name="email"
          type="email"
          label={copy.email}
          hint={copy.emailHint}
          required
          requiredLabel={copy.required}
          error={errors.email}
          errorId={errorId("email")}
          autoComplete="email"
        />

        <div>
          <label htmlFor={fieldId("subject")} className={labelClass}>
            {copy.subject}
          </label>
          <select
            id={fieldId("subject")}
            name="subject"
            defaultValue={copy.subjectOptions[0]}
            className={`${controlClass} appearance-none bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-12`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%236e5f5d' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m5 8 5 5 5-5'/%3E%3C/svg%3E\")",
            }}
          >
            {copy.subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={fieldId("message")} className={labelClass}>
            {copy.message}{" "}
            <span className="font-normal text-muted">({copy.required})</span>
          </label>
          <textarea
            id={fieldId("message")}
            name="message"
            rows={6}
            required
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? errorId("message") : undefined}
            className={`${controlClass} resize-y`}
          />
          {errors.message ? (
            <p id={errorId("message")} className="mt-2 font-semibold text-primary">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-9 inline-flex min-h-[3.25rem] items-center justify-center rounded-[4px] bg-primary px-7 text-[1.0625rem] font-semibold text-bg transition-colors hover:bg-primary-hover disabled:opacity-70"
      >
        {status === "sending" ? copy.sending : copy.submit}
      </button>
    </form>
  );
}

const labelClass = "mb-2 block font-semibold text-ink";
const controlClass =
  "block w-full min-h-[3.25rem] rounded-[4px] border border-line bg-bg px-4 py-3 " +
  "text-[length:var(--text-body)] text-ink transition-colors " +
  "hover:border-muted focus:border-primary";

function Field({
  id,
  name,
  label,
  hint,
  error,
  errorId,
  required,
  requiredLabel,
  type = "text",
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  hint?: string;
  error?: string;
  errorId: string;
  required?: boolean;
  requiredLabel: string;
  type?: string;
  autoComplete?: string;
}) {
  const hintId = `${id}-hint`;
  const describedBy = [error ? errorId : null, hint ? hintId : null]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}{" "}
        {required ? (
          <span className="font-normal text-muted">({requiredLabel})</span>
        ) : null}
      </label>
      {hint ? (
        <p id={hintId} className="mb-2 text-[length:var(--text-small)] text-muted">
          {hint}
        </p>
      ) : null}
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        className={controlClass}
      />
      {error ? (
        <p id={errorId} className="mt-2 font-semibold text-primary">
          {error}
        </p>
      ) : null}
    </div>
  );
}
