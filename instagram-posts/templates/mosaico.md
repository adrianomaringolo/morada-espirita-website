# Template `mosaico`

Grade 2×2 com fios brancos: três fotos e uma célula azul com a frase e a assinatura. Parece
um álbum da casa; é o mais "vivo" do conjunto.

## Preview

![](previews/mosaico/slide-01.png)

## Quando usar

Frases sobre convivência, fraternidade, trabalho em conjunto, a casa e as pessoas, quando há **três
fotos** que conversam (rosas, mãos, desenhos das crianças, mesa de doações).

**Não use quando** só houver uma foto boa (vai para `foto-plena` ou `duotone`) ou a frase passar de
~14 palavras (a célula é pequena).

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
.slide { background: #fff; padding: 14px; display: grid; gap: 14px;
         grid-template-columns: 1.12fr .88fr; grid-template-rows: .9fr 1.1fr; }
.cel img { object-fit: cover; filter: saturate(.75); }
.frase { background: #002e5a; color: #fff; padding: 60px 56px; display: flex; flex-direction: column; }
blockquote { font: 500 48px/1.16 'Aleo'; }
cite { color: #f9a4cf; }
.assinatura { margin-top: auto; font-size: 29px; color: rgba(255,255,255,.72); }   /* no pé da célula azul; Halimun menor, a célula é estreita */
```

## Slides internos

Não tem.

## Fecho

Não tem.

## Imagens

- **Exige três fotos**, `foto-1.jpg`, `foto-2.jpg`, `foto-3.jpg`, cada uma com mínimo 600px no menor lado.
- Mesma temperatura de luz nas três, ou o mosaico parece colagem de banco de imagens.

## Escala tipográfica

Frase 42–50px Aleo 500, até 5 linhas. Fonte 20–21px. Assinatura em Halimun 29px (exceção: célula estreita).

## Variações permitidas

- Célula azul em **qualquer uma das quatro posições**.
- Proporções das colunas/linhas entre .85fr e 1.15fr.
- Célula da frase azul `#002e5a` ou `#fcf5f8` com texto `#271922`.
- Fio rosa no topo da célula ou ausente.

## Travas

- **Exatamente quatro células, uma de texto:** mais células viram feed de evento, não reflexão.
- **Fios brancos de 14px entre as células:** sem fio, as fotos se fundem.
- **Assinatura dentro da célula de texto:** fora dela não há onde pousar sem cobrir foto.
- **Nenhum rosto de desconhecido em close.**

## Posts de referência

Nenhum ainda.
