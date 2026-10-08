# Template `colagem`

Uma fotografia impressa, com margem branca e levemente torta, pousada sobre um fundo rosado; um cartão
branco com fio rosa no topo entra por cima, deslocado, levando a frase. A assinatura fica no canto
inferior esquerdo, livre abaixo da cópia. Íntimo, de álbum de família.

## Preview

![](previews/colagem/slide-01.png)

## Quando usar

Frases de afeto: amor ao próximo, família, amizade, gratidão. Boa para fotos desfocadas ou de
qualidade média, que ficam bonitas como "cópia impressa".

**Não use quando** a frase for longa (o cartão comporta ~12 palavras) ou doutrinária e formal
(vai para `pagina` ou `arco`).

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
body, .slide { background: #f6ecf0; }
.copia { position: absolute; left: 92px; top: 96px; width: 700px; padding: 26px 26px 92px;
         background: #fff; transform: rotate(-2.4deg);
         box-shadow: 0 30px 60px -24px rgba(130,16,79,.28), 0 2px 6px rgba(39,25,34,.08); }
.copia img { height: 760px; object-fit: cover; filter: saturate(.8); }
.cartao { position: absolute; left: 330px; right: 80px; top: 780px; padding: 64px;
          background: #fff; border-top: 4px solid #e652a3; }
blockquote { font: 500 54px/1.16 'Aleo'; color: #271922; }
cite { color: #a01560; }
.assinatura { left: 76px; bottom: 70px; }   /* horizontal, abaixo da cópia */
```

## Slides internos

Não tem.

## Fecho

Não tem.

## Imagens

- **Exige foto**, `bg.jpg`, mínimo 700×760. Desfoque e grão são bem-vindos aqui.

## Escala tipográfica

Frase 48–58px Aleo 500, até 4 linhas no cartão. Fonte 22–23px.

## Variações permitidas

- Rotação da cópia entre **-3° e +3°** (nunca 0°: reta, vira só uma foto com borda).
- Cópia à esquerda e cartão à direita, **ou o espelho** (a assinatura vai para o canto inferior direito).
- Altura do cartão livre, conforme a frase.
- Fio do cartão no topo ou na lateral esquerda.

## Travas

- **Sombra rosada, nunca cinza:** cinza neutro deixa o slide sujo sobre o fundo rosado.
- **Cartão sempre sobreposto à cópia**, nunca ao lado: a sobreposição é o template.
- **Assinatura no canto livre abaixo da cópia, do lado oposto ao cartão:** é o único lugar que não briga com cartão e cópia.
- **Nada de fita adesiva, clipe ou anotação manuscrita na cópia** (a assinatura cursiva da casa é a única letra manuscrita): viraria scrapbook e perderia a seriedade.

## Posts de referência

Nenhum ainda.
