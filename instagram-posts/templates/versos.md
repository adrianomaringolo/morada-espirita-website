# Template `versos`

Fundo rosado claro, ramos de rosas de Redouté (gravuras botânicas em domínio público) entrando pelos
cantos opostos, o título da prece em rótulo rosa e o texto quebrado em versos centralizados, um por
linha, separados por pontinhos rosa. Lê-se devagar, como oração.

## Preview

![](previews/versos/slide-01.png)

## Quando usar

Preces e textos com cadência (Prece de Cáritas, Pai Nosso, trechos de preces de O Evangelho segundo o
Espiritismo, cap. XXVIII), ou qualquer frase que se divida naturalmente em 3 a 5 partes.

**Não use quando** o texto for prosa corrida (vai para `pagina`) ou tiver uma parte só.

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
body, .slide { background: #fdf0f5; text-align: center; }
/* rosas em PNG transparente, de assets/images/, entrando pela borda */
.flor-alto  { right: -110px; top: -70px;    width: 430px; transform: rotate(-18deg); }
.flor-baixo { left: -120px;  bottom: -150px; width: 380px; transform: scaleX(-1) rotate(-14deg); }
.titulo { top: 330px; 600 21px Archivo caixa-alta .2em; color: #a01560; }
.versos { left: 100px; right: 100px; top: 408px; list-style: none; }
.versos li { font: 400 47px/1.24 'Aleo'; color: #271922; }
.versos li + li::before { 7×7 ponto #e652a3, margin: 26px auto; }
cite { top: 1040px; color: #6d5d67; }
.assinatura { bottom: 74px; centralizada; }
```

## Slides internos

Não tem.

## Fecho

Não tem.

## Imagens

- **Ilustrações florais compartilhadas** (`assets/images/rosa-centifolia-redoute.png` e
  `rosa-gallica-redoute.png`), referenciadas por `../../assets/images/...` a partir do post. Não copie para a pasta do post.
- **Foto pequena opcional**, `bg.jpg`, recorte 170×220 centralizado no topo (então o bloco desce 80px).
  Com as rosas, em geral é dispensável.

## Escala tipográfica

Versos 40–50px Aleo 400, de 3 a 5 versos. Título 21px. Fonte 22px.

## Variações permitidas

- Quais rosas e em quais cantos (sempre dois cantos opostos), giro de -10° a -20°, largura de 340 a 460px.
- Uma rosa só, quando o texto for longo.
- Foto pequena presente ou ausente.
- Separador: ponto rosa, fio curto de 32px ou só espaço.
- Último verso em itálico, como fecho.
- Fundo `#fdf0f5` ou branco.

## Travas

- **Um verso por item, centralizado:** é o ritmo do template.
- **Título da prece sempre acima e fonte sempre abaixo:** prece sem nome parece frase solta.
- **Nada de moldura dourada, auréola ou mãos em oração:** o clichê de santinho que a marca rejeita.
- **No máximo 5 versos:** mais que isso, use `pagina`.
- **Rosas só nos cantos, cortadas pela borda, nunca atrás de texto:** sobre o texto atrapalham a leitura, e soltas no meio viram papel de carta.
- **Só gravuras botânicas em domínio público** (Redouté e afins), nunca clip-art nem rosa vetorial genérica: é o que mantém o detalhe sério.

## Posts de referência

Nenhum ainda.
