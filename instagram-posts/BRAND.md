# Instagram — Morada Espírita Professor Lairi Hans

Regras de identidade visual e voz para posts do Instagram. A skill `instagram-post`
(genérica, mora em ~/Projects/claude-skills) lê este arquivo como fonte de verdade.
Herda tudo de [`../PRODUCT.md`](../PRODUCT.md) e [`../DESIGN.md`](../DESIGN.md); aqui fica só o
que é específico do feed.

## Conta e marca

- **Sem handle nos slides.** Nenhum `@` aparece na arte.
- **Sem logo nos slides.** A casa não usa logo no Instagram; nem a rosa do emblema entra como marca.
- **Assinatura única:** o texto `Morada Espírita Professor Lairi Hans`, discreto, em todos os posts
  (ver "Elementos de marca").

<!-- definicao:negocio -->
Casa espírita kardecista e entidade beneficente fundada em 29 de outubro de 1980, na Rua José Paulino,
1934, Centro, Campinas/SP. Atendimento espiritual gratuito (consultas, passes e água fluidificada) às
quartas 13h, quintas 19h e sábados 14h, sem agendamento. Caridade: cerca de 3,5 toneladas de alimentos
por mês, coleta de porta em porta aos sábados e domingos, entrega às famílias cadastradas no último
domingo do mês, campanhas de Inverno, Páscoa e Natal. Evangelização infantojuvenil aos domingos.
O perfil no Instagram publica frases de reflexão sobre espiritualidade.
<!-- /definicao:negocio -->

<!-- definicao:publico -->
Principalmente pessoas de Campinas entre 45 e 75 anos, muitas vezes em sofrimento, que leem no celular,
à noite. Depois: frequentadores e trabalhadores da casa, doadores e voluntários, pais que procuram a
Evangelização. Boa parte tem mais de 60 anos: letra grande, contraste alto, frases curtas.
<!-- /definicao:publico -->

## Templates

Índice completo com previews: [`templates/TEMPLATES.md`](templates/TEMPLATES.md).

| ID | Quando usar |
|---|---|
| `foto-plena` | Frase de consolo sobre foto que ocupa o slide inteiro |
| `arco` | Frase doutrinária serena, foto da casa ou da natureza em janela de arco |
| `faixa-azul` | Frase curta e firme, sem foto, máxima leitura |
| `colagem` | Frase de afeto, foto impressa + cartão sobreposto |
| `dividido` | Frase que precisa de contexto (pergunta + resposta), foto e texto meio a meio |
| `palavra` | Uma palavra-tema do dia + frase de apoio |
| `pagina` | Trecho mais longo, citado como página de livro |
| `duotone` | Frase universal sobre foto qualquer, tingida no azul da casa |
| `horizonte` | Frase de recomeço com faixa fotográfica panorâmica |
| `mosaico` | Três fotos + célula azul com a frase, grade 2×2 |
| `pergunta` | Pergunta enorme + resposta, fundo azul-claro |
| `lua` | Noite e oração, foto em círculo sobre fundo escuro |
| `versos` | Prece ou texto em versos, um por linha |
| `vidro` | Foto com cor natural + faixa de vidro fosco branca atrás da frase |

## Tipos de post

- **Frase de reflexão (post único).** Uma citação de fonte verificável (Evangelho, obras de Kardec,
  autores espíritas reconhecidos) ou uma reflexão curta da própria casa. Um slide, sem carrossel.

## Voz da marca

<!-- definicao:voz -->
**Sereno. Firme. Hospitaleiro.** Frases curtas, verbos concretos. A voz de quem abre a porta e acolhe.
Nunca prometer cura, nunca falar em "energias" ou "vibrações" à venda, nunca usar a aflição de quem lê
como alavanca. Sem estética de culto evangélico, sem misticismo comercial (mandalas, chakras, cristais).
<!-- /definicao:voz -->

- **Toda citação leva fonte** (obra + capítulo/questão, ou versículo). Sem fonte confirmada, não sai.
  Nada de frase apócrifa atribuída a Chico Xavier, Kardec ou Emmanuel sem referência.
- **Citações de O Evangelho segundo o Espiritismo vêm das instruções dos Espíritos ou das explicações
  de Kardec**, nunca dos versículos do Evangelho que abrem cada capítulo. A fonte cita quem assina
  (ex.: `O Espírito de Verdade · O Evangelho segundo o Espiritismo, cap. VI`, `Lázaro · … cap. XI`,
  `Allan Kardec · … cap. XVII`). Na legenda, o trecho pode vir mais completo, com capítulo e item.
- **Confira toda citação do ESE no texto de referência antes de entregar** (redação exata, capítulo,
  item e quem assina): [O Evangelho segundo o Espiritismo, PDF](https://www.oconsolador.com.br/linkfixo/bibliotecavirtual/O%20Evangelho%20Segundo%20o%20Espiritismo.pdf)
  (biblioteca virtual de O Consolador). Nada sai citado de memória.
- **Frases de autores espíritas (sexta):** trechos de livros psicografados, sempre conferidos no texto
  do livro. Fontes já usadas (PDFs digitalizados):
  - Chico Xavier (edição FEB, `files.comunidades.net/portaldoespirito/<Livro>.pdf`): *Caminho, Verdade e
    Vida*, *Pão Nosso*, *Vinha de Luz*, *Fonte Viva* (Emmanuel); *Nosso Lar*, *Sinal Verde*, *Os
    Mensageiros*, *Missionários da Luz*, *Obreiros da Vida Eterna*, *No Mundo Maior* (André Luiz).
  - Divaldo P. Franco: *Vida Feliz* (Joanna de Ângelis, LEAL, 1992), [PDF](http://larbomrepouso.com.br/wp-content/uploads/2020/04/DIVALDO-P-FRANCO-VIDA-FELIZ.pdf);
    *Momentos de Meditação* (Joanna de Ângelis). Grafia do nome: **Joanna** de Ângelis.
  - Corrija só erros evidentes de OCR ("0 homem" → "O homem", "Dâ-lhe" → "Dá-lhe"); trecho com
    palavra duvidosa no OCR fica de fora. Nada de
  frase de internet "atribuída a Chico Xavier" sem livro e capítulo (muitas são apócrifas).
  - **Template fixo:** `vidro`, com foto de natureza do Pexels (flores, borboletas, céu).
  - **O autor espiritual em destaque:** `Emmanuel`, `André Luiz`, `Joanna de Ângelis` em Aleo 600 40px
    `#a01560`. Abaixo, em Archivo 28px, duas linhas: `por <médium>` e `<Livro>, cap. <n> · “<título>”`
    (cada parte em `<span class="nb">` para não quebrar no meio).
  - Copie o texto como está no livro (inclusive grafias antigas, como "vôo").
  - Legenda: o trecho do slide ou o parágrafo maior que o contém, e a referência
    (`Emmanuel, por Francisco Cândido Xavier. Vinha de Luz, cap. 75, “Esperança”.`). Tags: `autores espíritas` e `sexta`.
- **Perícopes do Novo Testamento (domingo):** falas de Jesus ou trechos que falam de Jesus, sempre na
  **Nova Versão Internacional (NVI)**, conferidos no PDF:
  [Novo Testamento NVI](https://www.monergismo.com/textos/livros/NT-NVI-Pt.pdf). Copie o texto como está
  (inclusive as aspas da fala). Referência no formato NVI: `Mateus 11.28` (capítulo **ponto** versículo).
  No slide, a referência vem **em destaque** (Archivo 600, 34px, `#a01560`) e `Nova Versão Internacional`
  fica **na linha de baixo**, pequena (22px, `#6d5d67`):
  `<cite><span class="ref">Mateus 11.28</span><span class="versao">Nova Versão Internacional</span></cite>`.
  - **Template fixo:** `dividido`, com eyebrow `Palavras de Jesus` (ou `Sobre Jesus` quando não é fala
    dele) e, logo abaixo, a perícope. **Nunca** uma frase de apoio antes da perícope (a linha `.apoio`
    do template fica fora).
  - **Imagem:** um painel de um dos mosaicos de `assets/images/jesus/` (`jesus.png`,
    `Colagem Devocional da Vida de Jesus.png` ou `Jesus em Dez Momentos Sagrados.png`, ver `ASSETS.md`). Em `jesus.png` (10 pinturas verticais: Jesus com o
    cordeiro, sobre as águas, orando, ensinando no monte, com as crianças, contemplando o pôr do sol,
    partindo o pão, olhando para o alto, caminhando no campo, vitral). Recorte o painel inteiro, sem a
    calha branca, e salve como `bg.jpg` no post. Escolha o painel que conversa com o texto e não repita o
    mesmo painel em domingos seguidos.
  - **Legenda: sempre a perícope maior** que contém o versículo do slide (a cena inteira ou o bloco
    da fala, em geral 3 a 10 versículos), para dar contexto. Texto da NVI sem os números dos versículos,
    sem os títulos de seção e sem as letras de nota de rodapé; parágrafos onde a NVI abre nova fala. Se a
    fala continua depois do trecho, feche com `(…)”`. Depois, a referência do bloco inteiro
    (`Mateus 14.25-33. Nova Versão Internacional.`). Tags: `Jesus` e `domingo`.
- **Frases do Professor Lairi Hans** (mentor espiritual da casa) vêm do documento da Morada:
  [Frases do Professor Lairi Hans e do Dr. Josué](https://docs.google.com/document/d/1M_C3ZBCt8EAkwYTZdN-C3hXQ4i3GyZ7ngEBYNbzNw24/edit?usp=sharing). Cada frase é numerada ("Frase 16") e
  termina com o nome de quem a transmitiu: use só as assinadas por **Professor Lairi Hans** (há
  também frases do Dr. Josué). Copie o texto como está, sem corrigir a fala; trechos omitidos já vêm
  marcados com `(...)`. Registre o número da frase no `meta.json` e no `POSTS.md` para não repetir.
  - **Template fixo:** `horizonte`, sempre com **foto de rosas claras** ao centro da faixa: rosas
    **brancas, cor-de-rosa ou azuis, sempre em tons claros**, de preferência sobre fundo claro (Pexels,
    orientação paisagem). Nada de rosa vermelha, fundo escuro ou rosa tingida saturada.
  - **Sem branco sobrando entre a frase e a foto:** a faixa cresce para ocupar o espaço livre (ou a
    letra aumenta). Ver `horizonte.md`.
  - Fonte da citação: `Professor Lairi Hans, mentor espiritual da Morada`. Eyebrow: `Palavras do mentor`.
  - **Frase sempre inteira, nunca recortada** (pedido da casa): o slide traz o texto completo da frase,
    igual à legenda. As frases são longas (25–90 palavras): para caber, reduza a letra conforme a
    tabela do `horizonte.md`; a faixa se ajusta sozinha. A regra de recorte abaixo não vale para elas.
- **Varie o tamanho das frases de um post para outro:** umas curtas e sucintas (uma ideia, até ~10
  palavras, letra grande), outras maiores (até ~30 palavras, em várias linhas), desde que o trecho
  faça sentido sozinho. Frase longa se quebra pelas orações (uma por bloco, ex.: os três "perdoar…"),
  nunca no meio de uma ideia. Recorte de um trecho maior é permitido quando se sustenta sozinho;
  se cortar no meio da frase, marque com `(…)`, e a legenda traz o trecho maior.
- Ênclises com hífen (`dar-lhes`, `mostrar-se`, `dar-se-vos-á`) nunca quebram no hífen:
  `<span class="nb">` com `white-space: nowrap`.
- Reflexão da própria casa vai sem atribuição de autor (não inventar autor).
- No máximo um travessão por slide. Ponto final em frase declarativa.

<!-- definicao:temas -->
**Temas:** consolo e esperança, caridade, perdão, prece, reencarnação e lei de progresso, amor ao
próximo, família, trechos do Evangelho e das obras de Allan Kardec.
**Restrições:** toda citação com fonte verificável (obra + capítulo/questão ou versículo); nada de frase
apócrifa atribuída a Chico Xavier, Kardec ou Emmanuel; sem polêmica política; sem rostos de
desconhecidos representando a casa.
<!-- /definicao:temas -->

<!-- definicao:contato -->
Os posts de reflexão não levam chamada nem @ na arte. Na legenda, quando fizer sentido, convide para o
atendimento gratuito (quartas 13h, quintas 19h, sábados 14h, Rua José Paulino, 1934, Centro, Campinas)
ou indique o Facebook da casa e o site.
<!-- /definicao:contato -->

<!-- definicao:datas -->
- 29/10 — Aniversário da Morada (fundada em 1980)
- 18/04 — Lançamento de O Livro dos Espíritos (1857)
- maio - dia das mães (lembrar da Mãe Luzia)
- agosto - dia dos pais (lembrar do Professor)
- 25/12 — Natal (campanha de Natal da casa)

Frequência sugerida: 4 posts de reflexão por semana.

Segunda - frases do Evangelho Segundo o Espiritismo
Terça - frases do Professor Lairi Hans
Sexta - frases de autores espíritas
Domingo - frases de Jesus (Perícopes do Novo Testamento)
<!-- /definicao:datas -->

## Tags de categorização

Campo `"tags"` do `meta.json`: viram pills de filtro na galeria. Use exatamente esta grafia:

| Tag | Quando |
|---|---|
| `Evangelho` | Trecho de O Evangelho segundo o Espiritismo |
| `frases Professor` | Frase do Professor Lairi Hans (documento de frases) |
| `palavras` | Série "Uma palavra para iniciar a semana" (template `palavra`) |
| `segunda` · `terça` · `sexta` · `domingo` | Dia do calendário semanal (ver "Datas e frequência") |
| `autores espíritas` | Frases de autores espíritas (sexta) |
| `Jesus` | Frases de Jesus, perícopes do Novo Testamento (domingo) |

Todo post leva a tag da fonte e a do dia. Tag nova só quando surgir uma categoria nova; registre aqui.

## Legendas (regra da marca)

**Simples, sem enfeite.** Vale para todos os posts e **substitui o Passo 7 da skill** (emojis, CTA,
hashtags):

- A legenda é **só o trecho do post e a referência exata**. Nada de abertura, comentário, convite,
  pergunta, emoji, crédito de foto ou hashtag. O `meta.json` leva `"hashtags": []`.
- Se o post é **recorte de um trecho maior**, a legenda pode trazer o trecho maior, para dar contexto
  (sempre copiado da fonte, sem alterar).
- Formato:

  ```
  "<trecho, ou o trecho maior que o contém>"

  <Obra>, cap. <romano>, item <n>. <Quem assina> (<cidade>, <ano>).
  ```

  Ex.: `O Evangelho segundo o Espiritismo, cap. VI, item 8. O Espírito de Verdade (Havre, 1863).`
  Frases do Professor: `Professor Lairi Hans, mentor espiritual da Morada.`

## Paleta

### Claro (padrão)
| Papel | Hex |
|---|---|
| Fundo | `#ffffff` |
| Superfície (sopro de rosa) | `#fcf5f8` |
| Superfície recuada | `#f6ecf0` |
| Fio | `#e5dade` |
| Texto | `#271922` |
| Texto secundário | `#6d5d67` |
| Rosa profunda (texto rosa, fonte da citação) | `#a01560` |
| Rosa viva (só grafismo: fios, contornos) | `#e652a3` |

### Escuro
| Papel | Hex |
|---|---|
| Azul da casa (faixa cheia) | `#002e5a` |
| Rosa clara sobre azul/escuro | `#f9a4cf` |
| Texto sobre azul/escuro | `#ffffff` |
| Fundo de foto escura | `#1d1418` |
| Fundo noturno (`lua`) | `#271922` |
| Azul-claro (`pergunta`, texto sempre escuro) | `#bee1fc` |

- Rosa e azul são as únicas cores saturadas. **Violeta/lilás vetado**, inclusive em mistura de
  sobreposições (rosa + azul por cima de foto vira roxo: escolha um dos dois).
- Rosa viva `#e652a3` nunca é texto (3.4:1). Texto rosa é sempre `#a01560`.

## Tipografia

```html
<link href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Archivo:wght@400;500;600&display=swap" rel="stylesheet">
```

- **Frase:** Aleo, 400–600 (itálico permitido para citação), `letter-spacing: -0.02em`,
  `text-wrap: balance`. Tamanho mínimo 44px no 1080 de largura.
- **Fonte da citação / apoio:** Archivo 400, 22–27px.
- **Eyebrow / rótulos:** Archivo 500–600, caixa-alta, `letter-spacing: .14–.2em`, 20–22px.
- Nada de monospace, nada de fonte manuscrita.

## Elementos de marca

- **Assinatura** (em todo post, uma vez): `Morada Espírita` / `Professor Lairi Hans`, **sempre em duas
  linhas** (`Morada Espírita<br>Professor Lairi Hans`), na fonte cursiva **Halimun**
  (`assets/fonts/halimun.ttf`, ver `ASSETS.md`):

  ```css
  @font-face { font-family: 'Halimun'; src: url('../../assets/fonts/halimun.ttf') format('truetype'); font-display: block; }
  .assinatura { font-family: 'Halimun', cursive; font-weight: 400; font-size: 38px;
                line-height: 1.55; letter-spacing: 0; text-transform: none; white-space: nowrap; }
  ```

  - **Entrelinha 1.55:** a Halimun tem hastes altas; abaixo de ~1.5 a perna do "p" de "Espírita"
    encosta no "L" de "Lairi".
  - **38px** no padrão; **29–34px** em coluna estreita (`dividido`, `mosaico`). Cada linha nunca quebra
    (`white-space: nowrap`): confira que "Professor Lairi Hans" cabe na largura.
  - Cor `#6d5d67` no claro, `rgba(255,255,255,.72)` no escuro; sobre foto sem scrim, branca com
    `text-shadow` suave. Nunca rosa viva, nunca acompanhada de logo, emblema ou `@`.
  - A assinatura ocupa ~120px de altura: deixe folga entre ela e a fonte da citação. A posição varia
    por template.
- **Fio rosa** (64×3px) como marca gráfica antes da frase, quando o template pedir.
- Sem marcador de carrossel (todos os posts são de um slide).

## Ícones

Não usamos ícones nos posts de reflexão. Se algum dia entrar, Lucide em traço, nunca desenhado à mão.

## Fotos

- **A foto não ilustra a frase: cria o clima de reflexão.** Não precisa ter relação literal com o tema.
  Busque natureza e elementos que remetam a contemplação e espiritualidade: flores, borboletas,
  pássaros, céu e nuvens, paisagens, campos, água, folhas, luz natural.
- Fonte padrão: **Pexels** (busca por `/pexels-search`, orientação retrato, mínimo 1080px de largura).
  Crédito do fotógrafo na última linha da legenda: `📷 Foto: <nome> / Pexels`.
- Prefira luz suave e paleta calma; foto muito saturada perde para a frase (os templates já aplicam
  `saturate(.7–.82)`).
- Evite o kitsch: raios "divinos" estourados, pombas e mãos em montagem, céu com degradê celestial
  artificial, cenas de culto, rostos posados de desconhecidos.
- Fotos da própria casa continuam bem-vindas quando a Morada fornecer.
- Texto sobre foto só com scrim ou véu que garanta 4.5:1. A foto de cada post fica na pasta dele
  (`bg.jpg`); os previews dos templates usam as fotos de `public/images/` do site.

## Ilustrações

- Detalhes florais vêm de **gravuras botânicas em domínio público** (Pierre-Joseph Redouté, *Les Roses*),
  com fundo removido, em `assets/images/`. Só sobre fundo claro, só nos cantos. Nunca clip-art, mandala
  ou rosa vetorial genérica. A rosa continua não sendo logo: é ornamento.
- Em fundo escuro: a **videira em traço branco** (`assets/images/videira-branca.png`), só nos cantos.
  Origem Freepik (licença grátis pede crédito ao autor: ver `ASSETS.md`).

## Acessibilidade

- Contraste mínimo 4.5:1 em qualquer texto. A assinatura cursiva é ornamental, mas mantenha a cor
  dentro das combinações acima.
- Proibido: texto `#e652a3` sobre branco; texto branco sobre foto sem scrim; texto `#e652a3` sobre azul.

## Estrutura de arquivos

| O quê | Caminho |
|---|---|
| HTML dos slides | `instagram-posts/html/post-NN/` |
| PNGs exportados + `caption.md` | `instagram-posts/output/post-NN/` |
| Assets compartilhados + índice | `instagram-posts/assets/` · `ASSETS.md` |
| Script de export | `node instagram-posts/scripts/export.mjs post-NN` |
| Previews dos templates | `node instagram-posts/scripts/export.mjs --templates [id]` |
| Índice de posts | `instagram-posts/POSTS.md` |
| Templates de post | `instagram-posts/templates/` |

O export usa o Chrome instalado (headless), sem dependência npm. O tamanho de cada slide vem de
`<meta name="slide-size" content="1080x1350">`. **Todo post é 1080×1350 (4:5, retrato), o formato padrão do feed:** nada de quadrado nem paisagem, para o grid do perfil ficar uniforme.

## Referências no repo

- `PRODUCT.md` (voz, anti-referências), `DESIGN.md` (tokens, fotografia), `src/app/globals.css`.
