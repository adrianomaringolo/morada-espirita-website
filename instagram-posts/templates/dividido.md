# Template `dividido`

Meio a meio: foto vertical à esquerda, encostada direto no lado do texto (sem barra); à direita, um
eyebrow, uma linha de contexto e a frase em azul da casa. O mais didático do conjunto.

## Preview

![](previews/dividido/slide-01.png)

## Quando usar

Frases que pedem um contexto curto antes delas: perguntas e respostas de O Livro dos Espíritos,
definições ("O que é a caridade"), "Como Jesus a entendia: …".

**Não use quando** a frase se sustenta sozinha (vai para `faixa-azul` ou `arco`) ou passa de ~25
palavras (vai para `pagina`).

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
.slide { display: grid; grid-template-columns: 470px 1fr; background: #fff; }
.foto img { object-fit: cover; filter: saturate(.8); }
.lado { padding: 0 84px 140px 76px; display: flex; flex-direction: column; justify-content: center; }
.eyebrow { 600 20px Archivo, caixa-alta, .16em; color: #a01560; }
.apoio   { 27px/1.45 Archivo; color: #6d5d67; }
blockquote { font: 500 54px/1.18 'Aleo'; color: #002e5a; }
cite { border-top: 1px solid #e5dade; padding-top: 24px; color: #6d5d67; }
cite .ref { display: block; font: 600 34px 'Archivo'; color: #a01560; }      /* perícopes: referência em destaque */
cite .versao { display: block; margin-top: 6px; font-size: 22px; }            /* versão na linha de baixo */
```

## Slides internos

Não tem.

## Fecho

Não tem.

## Imagens

- **Exige foto** com assunto que caiba numa faixa vertical de 470×1350. Nada de rosto cortado pela borda da coluna.

## Escala tipográfica

Eyebrow 20px. Apoio 25–27px. Frase 46–56px Aleo 500, até 6 linhas. Fonte 22px.

## Variações permitidas

- Foto à **esquerda ou à direita**.
- Coluna da foto entre 400 e 540px.
- Linha de apoio opcional (quando a frase já se explica). **Nas perícopes do domingo, nunca** (ver `BRAND.md`).
- Frase em `#002e5a` ou `#271922`.
- Fundo do lado do texto branco ou `#fcf5f8`.

## Travas

- **Sem barra ou fio entre as metades:** a borda da foto contra o branco já faz a divisão.
- **Eyebrow sempre presente:** é ele que diz o tema antes da frase.
- **Fonte sob o fio, nunca dentro da frase.**
- **Coluna de texto centralizada na vertical** (`justify-content: center`): no 4:5 a coluna é alta, e texto colado no topo deixa um vazio embaixo.

## Posts de referência

- `post-12` e `post-13`: perícopes do domingo (NVI), painel do mosaico `jesus/jesus.png` na coluna de 440px.
