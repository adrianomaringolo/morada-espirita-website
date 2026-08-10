import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { site } from "@/content/site";

/**
 * Formata "13:00" no hábito de cada idioma: "13h" em português, "1pm" em inglês.
 * Escrito à mão de propósito — Intl daria "1:00 PM" e "13:00", que não é como
 * um cartaz na porta de uma casa em Campinas escreve a hora.
 */
export function formatTime(locale: Locale, hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  if (locale === "pt") return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, "0")}`;
  const period = h >= 12 ? "pm" : "am";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour12}${period}` : `${hour12}.${String(m).padStart(2, "0")}${period}`;
}

/**
 * Os horários de atendimento — a informação que traz a maior parte das pessoas
 * ao site. Lista de definição de verdade: dia é o termo, hora é a definição.
 *
 * Em destaque, a hora em que o trabalho começa — é ela que a casa anuncia e é
 * ela que as pessoas repetem. Logo abaixo, e sem hierarquia frouxa, o prazo:
 * a porta se fecha cinco minutos antes, e quem chega depois não é atendido.
 * A hora de abertura fecha o bloco, para quem quer chegar cedo na ordem.
 *
 * `layout` escolhe entre a grade emoldurada e a faixa aberta da home; `tone`
 * só existe para a moldura, porque é ela que pinta um fundo próprio.
 */
/**
 * Duas apresentações da mesma lista.
 *
 * `boxed` é a grade emoldurada das páginas internas: cada dia numa célula, o
 * fio de 1px vindo do `bg-line` que aparece no `gap-px`.
 *
 * `flush` é a faixa da home. Sem moldura e sem recuo à esquerda, para que a
 * quarta-feira comece exatamente na vertical do título da página; os dias se
 * separam por um fio entre colunas, e o numeral cresce porque a faixa ocupa a
 * largura inteira. É a diferença entre uma tabela dentro da página e a placa
 * de horários na parede da casa.
 */
const layouts = {
  boxed: {
    list: "gap-px overflow-hidden rounded-[4px] bg-line sm:grid-cols-3",
    cell: "p-6",
    numeral: "text-[clamp(2rem,1.6rem+1.6vw,2.75rem)]",
  },
  /*
   * Três colunas só a partir de `lg`. Entre 640 e 1024 a coluna fica com pouco
   * mais de 200px, e "a porta se fecha às 19h55" quebra em duas linhas na
   * quinta e no sábado mas não na quarta — as linhas de baixo desalinham e a
   * faixa fica torta. Empilhado é mais alto e se lê melhor, que é a troca certa
   * para este público.
   */
  flush: {
    list: "gap-y-8 lg:grid-cols-3 lg:gap-x-10",
    cell:
      "border-t border-line pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 " +
      "lg:first:border-l-0 lg:first:pl-0",
    numeral: "text-[clamp(2.25rem,1.8rem+1.9vw,3.25rem)]",
  },
} as const;

export function CareSchedule({
  locale,
  tone = "plain",
  layout = "boxed",
}: {
  locale: Locale;
  tone?: "plain" | "deep";
  layout?: keyof typeof layouts;
}) {
  const t = getDictionary(locale);
  const deep = tone === "deep";
  const l = layouts[layout];

  return (
    <dl className={`grid ${l.list}`}>
      {site.care.map((slot) => (
        <div
          key={slot.day}
          className={`flex flex-col gap-1 ${l.cell} ${
            layout === "boxed" ? (deep ? "bg-blue" : "bg-bg") : ""
          }`}
        >
          <dt
            className={`text-[length:var(--text-label)] font-semibold ${
              deep ? "text-blue-soft" : "text-muted"
            }`}
          >
            {t.common.weekdays[slot.day]}
          </dt>
          <dd
            className={`numeral font-semibold leading-none ${l.numeral} ${
              deep ? "text-bg" : "text-primary"
            }`}
          >
            <time dateTime={slot.starts}>{formatTime(locale, slot.starts)}</time>
            {/* O prazo não pode virar rodapé: fica em corpo de rótulo, com o
                peso do texto normal da casa, logo sob o número. */}
            <span
              className={`mt-3 block font-[family-name:var(--font-sans)] text-[length:var(--text-label)] font-semibold tracking-normal ${
                deep ? "text-bg" : "text-ink"
              }`}
            >
              {t.common.doorsCloseAt}{" "}
              <time dateTime={slot.doorsClose}>{formatTime(locale, slot.doorsClose)}</time>
            </span>
            <span
              className={`mt-1 block font-[family-name:var(--font-sans)] text-[length:var(--text-small)] font-normal tracking-normal ${
                deep ? "text-blue-soft" : "text-muted"
              }`}
            >
              {t.common.doorsOpenFrom} {formatTime(locale, slot.doorsOpen)}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
