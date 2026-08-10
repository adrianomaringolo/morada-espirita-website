# Design

Sistema visual da **Morada Espírita Professor Lairi Hans**. Estratégico em [PRODUCT.md](./PRODUCT.md); aqui é só o *como se parece*.

## Cena

> Uma mulher de 62 anos, em Campinas, terça-feira às 22h, sentada na beira da cama com o abajur aceso, no celular, tentando descobrir se pode levar a filha doente no atendimento de quarta às 13h — e se precisa marcar.

Ela não quer atmosfera. Quer **clareza**. A cena obriga tema claro, contraste alto, corpo grande e a resposta no primeiro terço da tela. Não há dark mode: o site é uma casa com a luz acesa, e essa decisão é a marca, não uma omissão.

## Theme

Claro, sem alternativa escura. `color-scheme: light` declarado.

## Color

**Estratégia: as três cores da casa.** Branco é a arquitetura, rosa é a voz, azul é o chão. Nenhuma é decoração: a rosa e o azul saem do próprio emblema da Morada, que traz uma rosa rosa e uma rosa azul lado a lado.

O gerador de paleta havia sugerido violeta. Rejeitado: PRODUCT.md veta o roxo-cosmos como anti-referência de misticismo comercial, e a casa tem cores próprias, informadas pela diretoria — rosa, branco e azul.

Descartados no caminho, todos por serem reflexo de categoria: creme + dourado + serifa (o clichê "espiritual"), branco + verde-floresta (o clichê "ONG considerada"), azul-celeste em gradiente (o clichê "igreja").

### Tokens

| Token | OKLCH | Hex | Papel |
|---|---|---|---|
| `--color-bg` | `oklch(1 0 0)` | `#ffffff` | Fundo. Branco puro, sem calor escondido. |
| `--color-surface` | `oklch(0.976 0.008 350)` | `#fcf5f8` | Seções alternadas. Um sopro de rosa, não uma cor. |
| `--color-surface-sunk` | `oklch(0.953 0.012 350)` | `#f6ecf0` | Campos e estados recuados. |
| `--color-line` | `oklch(0.898 0.013 350)` | `#e5dade` | Fios de 1px. |
| `--color-ink` | `oklch(0.235 0.026 340)` | `#271922` | Corpo de texto. **16.8:1** no branco. |
| `--color-rose` | `oklch(0.66 0.2 350)` | `#e652a3` | **A rosa viva do emblema.** Só grafismo: a marca, os fios. Nunca texto. 3.4:1 no branco. |
| `--color-rose-light` | `oklch(0.815 0.113 348)` | `#f9a4cf` | A mesma rosa clareada para viver sobre o azul. **7.3:1** no azul. |
| `--color-primary` | `oklch(0.47 0.18 355)` | `#a01560` | Rosa profunda: texto, links, botões. **7.6:1** no branco. |
| `--color-primary-hover` | `oklch(0.405 0.155 354)` | `#82104f` | Hover/active. |
| `--color-primary-wash` | `oklch(0.966 0.016 350)` | `#fdf0f5` | Realce sutil sob a rosa. |
| `--color-blue` | `oklch(0.3 0.092 252)` | `#002e5a` | Azul profundo. Faixas *drenched* e texto azul sobre branco — **13.7:1** nos dois sentidos. |
| `--color-blue-soft` | `oklch(0.893 0.052 242)` | `#bee1fc` | Pílulas e texto secundário nas faixas. Sempre com texto `ink`. |
| `--color-muted` | `oklch(0.498 0.026 340)` | `#6d5d67` | Texto secundário. **6.2:1** — AA de corpo, não só de rótulo. |

### Regras de cor

- **Rosa é quem age, azul é onde se pisa.** Todo link, botão e número clicável é rosa. Toda faixa cheia é azul. Um azul clicável quebraria a leitura — por isso não existe `blue-hover`.
- **Duas rosas, dois fundos.** `rose` é calibrada para o branco (3.4:1); `rose-light` para o azul (7.3:1). Usar a errada derruba o contraste — a viva sobre o azul dá 3.97:1, suficiente para grafismo mas não para texto.
- Texto branco sobre `primary` e sobre `blue`. Texto `ink` sobre `blue-soft` e sobre os washes. Nunca o contrário.
- `primary` e `blue` têm **1.80:1** entre si — acima do mínimo de 1.7, então continuam distinguíveis mesmo para quem não separa bem matizes. Ainda assim, nenhuma informação do site depende de distinguir rosa de azul.
- A fotografia entra dessaturada (ver Imagery): rosa e azul são as únicas cores saturadas da página.
- Todos os números acima foram medidos nos pixels realmente pintados pelo navegador, não estimados. Ler `getComputedStyle` não serve — o Chromium devolve `oklch()` cru.

## Typography

**Três palavras de voz:** lavada, firme, hospitaleira. O objeto físico: uma placa de esmalte pintada à mão numa parede caiada, ao lado da ficha datilografada do cadastro de cestas.

| Papel | Família | Uso |
|---|---|---|
| Display | **Aleo** (400–700 + itálico) | Títulos, citações, textos doutrinários. Serifa slab de traço humanista, com haste firme e terminais suaves — presença sem afetação, e leitura confortável em tamanho grande. |
| Texto / UI | **Archivo** (variable 400–700) | Corpo, navegação, rótulos, tabelas de horário. Grotesca de origem sinalética: firme, neutra, legível em 18px num celular barato. |

Eixo de contraste: serifa slab × grotesca de sinalização. Reflexos rejeitados antes de escolher: Inter, Fraunces, Playfair — todos na lista de banidos. Nada de monospace: a casa não é técnica, e mono aqui seria fantasia.

- Base **18px** (`1.125rem`), não 16. O público idoso é o caso de projeto.
- Escala fluida `clamp()`, razão ~1.3. Teto de display **4.5rem** — abaixo do limite de 6rem, porque a casa não grita.
- `letter-spacing` de display: `-0.02em`. Nunca abaixo de `-0.04em`.
- `text-wrap: balance` em h1–h3; `pretty` na prosa longa. Medida de 60–70ch.
- Aleo itálico só para citações atribuídas. Nunca caixa-alta no corpo.

## Imagery

**Direção de arte: luz, mãos e o que se doa. Nunca rostos posados.**

O site atual abre com ipê-rosa e margaridas de banco de imagens — a anti-referência declarada. A regra que substitui isso: nenhuma foto de "voluntário sorridente segurando caixa", nenhuma marca de outra organização visível, nenhum rosto de desconhecido representando uma comunidade real. Fotografar estranhos como se fossem os frequentadores da Morada seria desonesto.

Três fotografias, escolhidas pelo objeto físico:

| Uso | Assunto | Autoria (Unsplash License) |
|---|---|---|
| Hero da home | Luz de janela atravessando uma parede caiada | Syarafina Yusof |
| Caridade | Mãos idosas dadas, campo ao entardecer | Narissa de Villiers |
| Evangelização | Desenhos de criança espalhados numa mesa, giz de cera | Pablo García Saldaña |

O resto da carga visual é desenhado, não fotografado:

- **A rosa.** Não é um desenho novo: é o emblema real da Morada — o mesmo que está no Portal e na Loja da Morada — vetorizado a partir da arte original e reduzido a uma silhueta preenchida de cor única que herda `currentColor`. A mesma forma serve de marca no cabeçalho (34px), selo de seção (40–44px), marca-d'água no rodapé (520px), favicon e cartão de compartilhamento. Continua legível como rosa até ~24px. `fill-rule="evenodd"` é obrigatório: os vazios entre as pétalas são furos no caminho.
- **Os números da caridade.** 3,5 t/mês · 120 famílias · 500 crianças no Natal, compostos como display tipográfico com fio e legenda — não como cards de métrica de SaaS.
- **A linha do tempo.** 1980 → 2002 → 2082 (cápsula do tempo), desenhada em SVG.
- **O mapa.** OpenStreetMap real na página Como Chegar, com fallback textual e link para rota.

Quando a casa fornecer fotos próprias, elas substituem as três acima em `public/images/` — os componentes já esperam proporção e `alt` definidos.

## Cabeçalho e menu

**Uma linha só: marca, páginas principais, idioma e o botão do menu.** Sem botão de contato — o cabeçalho navega, não age.

À vista ficam apenas as cinco páginas que respondem "por que vim aqui": **Atendimento · Evangelização · Caridade · Como chegar · Contato**. Nossa história, Mensagens e Eventos são contexto e leitura; vivem no menu completo e no rodapé. Uma trava em `site-header.tsx` quebra o build se alguma página do cabeçalho ficar de fora do menu completo.

O **botão "Menu" está sempre visível**, em qualquer largura — não é um recurso de celular. Ele abre um `<dialog>` nativo com o site inteiro: as oito páginas em duas colunas, os canais da casa (Facebook e telefone), o endereço e o idioma.

- Em telas grandes o diálogo é uma **folha que desce do cabeçalho**, com a altura do próprio conteúdo, sobre a página escurecida.
- Abaixo de 1024px ele ocupa a tela inteira.
- `<dialog>` porque vai para a top layer: nunca é recortado por overflow e já traz foco preso, backdrop e `Esc` de fábrica.

A navegação em linha aparece a partir de **1100px**. Medido no navegador: **124px de folga em português e 109px em inglês**; sem webfonts, no pior caso de fallback, ainda sobram 103px e 86px. Se um rótulo novo entrar, meça de novo antes de confiar.

Abaixo de 640px o rótulo "Menu" sai e fica só o ícone, com o `aria-label` carregando o significado. No celular o cabeçalho tem exatamente dois elementos: a marca e o botão de menu.

## Canais de contato

**A ordem é a mesma no site inteiro: Facebook, Instagram, telefone, presencial.** O Facebook é o canal principal declarado pela casa — é onde ela acompanha e responde —, então ganha o botão cheio em todo lugar em que os canais aparecem: menu móvel, rodapé, cada faixa de chamada e o topo da página de Contato.

**O cabeçalho é a exceção deliberada: não tem canal nenhum.** Ele navega, não age. Em compensação, os dois canais estão dentro do menu completo — a um clique do botão que está sempre visível —, toda página termina numa faixa com eles, e o rodapé os repete.

O telefone **nunca aparece sozinho nem some**. Boa parte de quem procura a Morada tem mais de 60 anos e prefere falar por voz; enterrar o número contradiria o princípio de que legibilidade é acolhimento. Ele aparece como botão contornado ao lado do Facebook e por extenso no rodapé e na página de Contato.

A regra prática: **onde houver um botão de Facebook, o telefone está visível na mesma dobra.** Nunca um sem o outro.

Os canais vivem em `src/components/channels.tsx` — glifos e atributos de link em um arquivo só, para que a ordem não se perca em nenhuma página.

## Layout

- Contêiner de leitura **68ch**; contêiner de página **1180px**; faixas *drenched* sangram até a borda.
- Espaçamento fluido com `clamp()`. Ritmo variado: seções de respiro (`clamp(4rem, 9vw, 7.5rem)`) contra agrupamentos apertados (`0.5rem`) dentro de blocos de horário.
- **Cards são exceção.** Horários vão em `<dl>` e tabela real; história vai em linha do tempo; campanhas vão em lista descritiva. O único uso de card é a grade de campanhas sazonais, onde o recorte é genuíno.
- Grades responsivas sem breakpoint: `repeat(auto-fit, minmax(260px, 1fr))`.
- Escala de z-index nomeada: `--z-dropdown: 10` · `--z-sticky: 20` · `--z-backdrop: 30` · `--z-modal: 40` · `--z-toast: 50`.
- Raio: `4px` em controles, `2px` em fios, **0 em faixas**. A casa é de alvenaria, não de bolha.

## Motion

Discreta e curta. `--ease: cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart), 240–420ms.

- Uma entrada orquestrada no hero: a rosa desabrocha (`rose-bloom` — opacidade, escala 0.9→1 e 6° de giro, 900ms). É a única coisa que se move ali.
- Revelação por `IntersectionObserver` **realçando estado já visível** — o conteúdo nunca depende da animação para existir. Renderiza-se completo sem JS.
- Escalonamento apenas dentro de listas reais (os três horários de atendimento), nunca como reflexo por seção.
- `prefers-reduced-motion: reduce` zera transformações e mantém apenas crossfade de 1ms. Sem exceções.

## Armadilhas conhecidas do sistema

Duas regras que já custaram bug neste projeto e valem para qualquer mudança futura.

**Aplique a utility onde ela vale, não tente desfazê-la depois.** `h-dvh lg:h-auto` no `<dialog>` não funcionou: a ordem em que o Tailwind emite as utilities decidiu, e a base venceu a variante. A forma que funciona é `max-lg:h-dvh` — a altura existe só onde é desejada, e não há conflito para resolver.

**Estilo base fora de `@layer` vence utility.** No CSS em cascata, regra sem layer ganha de regra dentro de layer. Um `h1,h2,h3,h4 { color: var(--color-ink) }` solto sobrescrevia toda utility `text-*` do Tailwind e deixava os títulos das faixas azuis invisíveis. Todo estilo de elemento em `globals.css` vive dentro de `@layer base` — mantenha assim.

**Revelação nunca esconde conteúdo no servidor.** O estado inicial escondido é armado por JS depois da montagem, só para o que está abaixo da dobra, com rede de segurança de 1,2s e desligamento total na impressão. Sem JS, com JS quebrado, em renderizador headless ou em PDF, a página chega inteira. Se algum dia uma seção aparecer em branco numa captura, é esta a peça a conferir primeiro.

## Interaction

- Foco visível: `outline: 3px solid var(--color-primary)` com `outline-offset: 3px`. Nunca `outline: none` sem substituto.
- Alvos de toque ≥ **48px**. Links de navegação com 12px de folga vertical entre si.
- Nenhuma informação revelada só por hover. O menu mobile é `<dialog>` nativo — sem risco de recorte por `overflow`.
- Formulário de contato: rótulos persistentes acima do campo, erro em texto sob o campo, resumo focado com `role="alert"`, e os canais diretos da casa acima dele — o formulário é a última opção, não a primeira.
