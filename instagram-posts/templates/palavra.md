# Template `palavra`

Uma palavra-tema enorme em Aleo 700, preenchida por dentro pela foto (tingida de azul), sobre fundo
branco. Embaixo, uma frase curta em itálico que dá sentido à palavra. Tipográfico e
fotográfico ao mesmo tempo.

## Preview

![](previews/palavra/slide-01.png)

## Quando usar

Quando o post gira em torno de um conceito de uma palavra: perdão, paciência, fé, gratidão, caridade,
esperança. Bom para série ("Uma palavra para hoje").

**Não use quando** a palavra tiver mais de 9 letras (não cabe em 272px; reduza ou troque de template)
ou quando a frase de apoio passar de ~15 palavras.

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
body { background: #fcf8f7; }
.slide { background: #fcf8f7 url('../../assets/images/papel.svg') center / cover no-repeat; text-align: center; }   /* papel suave */
.eyebrow { top: 300px; 600 22px Archivo caixa-alta .2em; color: #a01560; }
.palavra {
  top: 380px; font: 700 272px/1 'Aleo'; letter-spacing: -0.035em;
  background: linear-gradient(rgba(0,46,90,.62), rgba(0,46,90,.62)), url('bg.jpg') 50% 62% / 1500px auto;
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
blockquote { top: 826px; font: italic 400 50px/1.24 'Aleo'; color: #271922; }
```

## Slides internos

Não tem.

## Fecho

Não tem.

## Imagens

- **Foto como textura**, `bg.jpg`, qualquer orientação, mínimo 1500px de largura. Precisa de detalhe
  (flores, folhas, água, grão): foto lisa vira letra chapada.

## Escala tipográfica

Palavra 200–280px (ajuste pelo número de letras para ocupar ~80% da largura). Frase 44–52px. Fonte 22–23px.

## Variações permitidas

- Eyebrow com outro texto ("Para meditar", "Palavra da semana") ou ausente.
- **Série de segunda-feira:** eyebrow `Uma palavra para iniciar a semana`, palavra-tema e um trecho de
  O Evangelho segundo o Espiritismo ligado a ela (instruções dos Espíritos ou explicações de Kardec,
  conferido no PDF). Pautas em `PAUTAS.md`, tema "Uma palavra para iniciar a semana".
- Véu sobre a foto **azul `#002e5a` ou tinta `#271922`**, de .5 a .7.
- Palavra com ou sem acento de cor na primeira letra (`#a01560` sólido).
- Bloco inteiro pode descer ou subir até 80px para equilibrar com frases mais longas.

## Travas

- **Véu de uma cor só sobre a foto:** rosa + azul juntos viram violeta, que a marca veta.
- **Palavra sempre em Aleo 700:** pesos leves não deixam a foto aparecer.
- **Caixa da palavra com folga: `padding: .32em 0` e margens negativas iguais** (`margin-top: calc(<espaço> - .32em); margin-bottom: -.32em`). A foto (`background-clip: text`) só preenche a caixa da linha; com `line-height` apertado, acentos (ê, ã), cedilha e descendentes (g, ç) saem cortados.
- **Fundo de papel claro (`assets/images/papel.svg`):** a palavra precisa de contraste de figura e fundo; nada de papel envelhecido, amarelado ou com bordas queimadas (clichê "espiritual").
- **Uma palavra só.** Duas palavras viram título, e o template perde a força.

## Posts de referência

Nenhum ainda.
