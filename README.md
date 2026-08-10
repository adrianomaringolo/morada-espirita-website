# Morada Espírita Professor Lairi Hans

Site institucional da **Morada Espírita Professor Lairi Hans** — casa espírita kardecista e entidade beneficente na Rua José Paulino, 1934, Centro, Campinas/SP, fundada em 29 de outubro de 1980.

Bilíngue (português e inglês), estático, com foco em acessibilidade e em quem chega pelo celular procurando um horário.

- **Estratégia e público:** [PRODUCT.md](./PRODUCT.md)
- **Sistema visual:** [DESIGN.md](./DESIGN.md)

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000 → redireciona para /pt
npm run build    # gera as 18 páginas estáticas
npm start
```

Node 20.9 ou superior.

## Onde mexer no conteúdo

Nenhuma frase do site vive dentro de um componente. Há dois lugares, e só dois:

| O que mudou | Arquivo |
|---|---|
| Horário, telefone, endereço, números da caridade, datas | `src/content/site.ts` |
| Qualquer texto em português | `src/i18n/dictionaries/pt.ts` |
| Qualquer texto em inglês | `src/i18n/dictionaries/en.ts` |
| Endereços das páginas (slugs) | `src/i18n/config.ts` |
| Fotografias | `public/images/` |

O TypeScript exige que os dois dicionários tenham exatamente a mesma estrutura: se você adicionar um texto em português e esquecer o inglês, o `npm run build` falha em vez de publicar uma página pela metade.

### Trocar as fotografias

O site usa três fotos, hoje do Unsplash (licença livre, inclusive comercial). Quando a casa tiver fotos próprias, basta substituir os arquivos em `public/images/` mantendo os nomes e as proporções declaradas em `src/content/images.ts`:

| Arquivo | Proporção | Onde aparece |
|---|---|---|
| `luz-na-parede.jpg` | 4:5 (retrato) | Hero da home |
| `maos-dadas.jpg` | 4:3 | Caridade |
| `desenhos-das-criancas.jpg` | 4:3 | Evangelização |

A regra de direção de arte está no DESIGN.md e vale para as fotos novas: **luz, mãos e o que se doa — nunca rostos posados**. Toda foto entra dessaturada, para que a rosa e o azul da casa continuem sendo as únicas cores fortes da página.

### Números da caridade

`site.figures` guarda 3,5 t/mês, 120 famílias e 500 crianças no Natal. São **aproximações informadas pela própria casa** e as fontes públicas divergem entre si (3 a 3,5 toneladas; 350 a 500 crianças). Confirme com a diretoria antes de cada atualização — a página os apresenta como aproximados, de propósito.

## Idiomas e endereços

Toda rota vive sob `/pt` ou `/en`, com slug traduzido:

| Página | Português | Inglês |
|---|---|---|
| Início | `/pt` | `/en` |
| Atendimento | `/pt/atendimento` | `/en/spiritual-care` |
| Evangelização | `/pt/evangelizacao` | `/en/evangelization` |
| Caridade | `/pt/caridade` | `/en/charity` |
| Nossa história | `/pt/nossa-historia` | `/en/our-history` |
| Mensagens | `/pt/mensagens` | `/en/messages` |
| Eventos | `/pt/eventos` | `/en/events` |
| Como chegar | `/pt/como-chegar` | `/en/how-to-find-us` |
| Contato | `/pt/contato` | `/en/contact` |

`src/proxy.ts` manda a raiz (`/`) para o idioma do navegador, com português como padrão. Cada arquivo de rota declara `dynamicParams = false`, então `/en/atendimento` responde 404 em vez de servir conteúdo duplicado — é o que mantém o canônico limpo.

Para acrescentar uma página: registre o id e os slugs em `src/i18n/config.ts`, escreva o conteúdo nos dois dicionários, crie o corpo em `src/components/pages/` e dois arquivos finos de rota. Sitemap, `hreflang` e navegação se atualizam sozinhos.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`.

- `NEXT_PUBLIC_SITE_URL` — URL pública, usada no canônico, `hreflang`, sitemap e robots.
- `NEXT_PUBLIC_CONTACT_ENDPOINT` — endpoint que recebe o formulário de contato por POST (Formspree, Basin, Web3Forms, um Apps Script ou uma rota própria).

**Sem o endpoint, o formulário simplesmente não é renderizado** e a página de contato mostra apenas os canais diretos. É intencional: um formulário que não chega a ninguém é pior do que formulário nenhum, e o Facebook da casa já resolve.

## SEO

- Título e descrição próprios por página, nos dois idiomas.
- `canonical` e `hreflang` recíprocos (`pt-BR`, `en`, `x-default`) gerados a partir da tabela de rotas.
- `sitemap.xml` com alternativas de idioma e `robots.txt`.
- JSON-LD: `NGO` + `PlaceOfWorship` com endereço, coordenadas e horários de funcionamento; `WebSite`; `BreadcrumbList` por página; `FAQPage` no atendimento.
- Cartão de compartilhamento gerado em `/pt/opengraph-image` e `/en/opengraph-image` — importante porque este site circula por WhatsApp.

## Acessibilidade

Meta declarada: WCAG 2.2 AA, com o público idoso como caso de projeto.

- Corpo de texto em 18px; contraste do corpo em 16,8:1 e do texto secundário em 6,2:1.
- Todos os pares de cor foram medidos nos pixels realmente pintados pelo navegador, não estimados — a tabela está no DESIGN.md.
- Alvos de toque a partir de 48px; nenhuma informação depende de `hover`.
- Skip link, landmarks semânticos, foco visível de 3px, menu móvel em `<dialog>` nativo (foco preso e `Esc` de fábrica).
- `prefers-reduced-motion` respeitado integralmente; nenhuma seção depende de animação para aparecer, e a impressão desliga as revelações.
- Formulário com rótulos persistentes, erros por campo, `aria-invalid` e resumo focado ao enviar.

Auditado com axe-core (`wcag2a`, `wcag2aa`, `wcag21aa`, `wcag22aa`, `best-practice`) nas 9 páginas dos dois idiomas, em 390px e 1440px: **zero violações**.

## Contato: a ordem dos canais

**Facebook é o canal principal.** É onde a casa acompanha e responde, então leva o botão cheio no menu móvel, no rodapé, em cada faixa de chamada e no topo da página de Contato. Instagram vem depois, para campanhas e fotos.

O **cabeçalho não tem canal de contato**: é uma linha só, com marca, as cinco páginas principais, idioma e o botão "Menu". Ele navega, não age — mas o menu completo, que o botão abre em qualquer largura, traz Facebook e telefone junto com todas as páginas.

**O telefone nunca fica a mais de um toque.** A regra é: onde houver botão de Facebook, o número está visível na mesma dobra. Isso é deliberado — boa parte de quem procura a Morada tem mais de 60 anos e prefere falar por voz.

Para mudar a ordem ou trocar os endereços, mexa em `src/content/site.ts` (`social`) e em `src/components/channels.tsx`, que concentra os glifos e os atributos de link.

## As cores e a marca

As três cores da casa: **rosa, branco e azul**. Branco é a arquitetura, rosa é a voz (marca, links, botões, números), azul é o chão (as faixas cheias e o rodapé). Rosa e azul vêm do próprio emblema da Morada, que traz uma rosa rosa e uma rosa azul lado a lado.

A marca é **o emblema real da casa**, vetorizado a partir da arte original do Portal e da Loja da Morada — não um desenho novo. Vive em `src/components/rose-mark.tsx` como um único caminho preenchido que herda `currentColor`, e a mesma forma serve de logotipo, selo de seção, marca-d'água, favicon (`src/app/icon.svg`) e cartão de compartilhamento. Para trocar a arte, substitua o `ROSE_PATH` nesses três lugares.

## Estrutura

```
src/
  app/[locale]/          rotas — uma pasta por slug traduzido
  components/            cabeçalho, rodapé, rosa, primitivos de UI
  components/pages/      o corpo de cada página, compartilhado entre idiomas
  content/site.ts        os fatos da casa
  content/images.ts      as fotografias
  i18n/                  idiomas, rotas, dicionários, metadados
```
