# Template `duotone`

Qualquer foto vira da casa: convertida em cinza e multiplicada pelo azul, com um véu azul por cima. A
frase fica centralizada em branco, dentro de uma moldura fina em rosa clara. Sóbrio,
noturno.

## Preview

![](previews/duotone/slide-01.png)

## Quando usar

Frases universais (lei de progresso, reencarnação, imortalidade, oração) e sempre que a foto
disponível for colorida demais, de cor estranha ou de qualidade irregular: o duotone uniformiza.

**Não use quando** a foto depende da cor para funcionar (rosas, pôr do sol): vai para `foto-plena`.

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
body, .slide { background: #002e5a; isolation: isolate; }
.foto  { position: absolute; inset: 0; object-fit: cover; filter: grayscale(1) contrast(1.05) brightness(1.05); }
.tinta { position: absolute; inset: 0; background: #2a5d94; mix-blend-mode: multiply; }
.veu   { position: absolute; inset: 0; background: rgba(0,46,90,.38); }
.moldura { position: absolute; inset: 44px; border: 2px solid #f9a4cf; }
.texto { left: 140px; right: 140px; centralizado vertical; text-align: center; color: #fff; }
blockquote { font: 500 70px/1.16 'Aleo'; }
cite { 500 24px Archivo caixa-alta .14em; color: #f9a4cf; }
.assinatura { bottom: 92px; centralizada; color: rgba(255,255,255,.74); }
```

## Slides internos

Não tem.

## Fecho

Não tem.

## Imagens

- **Exige foto**, qualquer uma, `bg.jpg`, mínimo 1080×1350. Funciona com fotos fracas.

## Escala tipográfica

Frase 60–74px Aleo 500, até 4 linhas. Fonte 22–24px caixa-alta.

## Variações permitidas

- Véu de .3 a .5, conforme a claridade da foto.
- Moldura inteira, **só cantos** (quatro L de 80px) ou ausente.
- Frase centralizada ou na metade inferior.
- Fonte da citação em caixa-alta ou normal.

## Travas

- **Duotone sempre azul `#002e5a`:** duotone rosa sobre foto cai no "roxo-cosmos" vetado.
- **Moldura, se houver, em `#f9a4cf` de 2px:** dourada ou grossa vira quadro de santinho.
- **Texto branco com véu presente:** contraste mínimo 4.5:1 nas áreas mais claras da foto.
- **Texto sempre centralizado dentro da moldura**, com 96px de folga dela: encostado, a moldura vira caixa.
- `background` declarado no `body`.

## Posts de referência

Nenhum ainda.
