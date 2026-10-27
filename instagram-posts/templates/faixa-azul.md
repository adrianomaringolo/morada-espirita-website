# Template `faixa-azul`

Retrato no azul da casa, aspas grandes em rosa clara, a frase em Aleo pesado e branco. Os ornamentos
são desenhados: um ramo de videira em traço branco entra pelo alto, e ondas concêntricas de uma pedra
na água saem pelo canto oposto. O mais legível do conjunto.

## Preview

![](previews/faixa-azul/slide-01.png)

## Quando usar

Frases curtas e firmes (até ~10 palavras), máximas e lemas: "Fora da caridade não há salvação." Bom
também quando não há foto boa disponível.

**Não use quando** a frase passar de ~12 palavras (vai para `arco` ou `pagina`) ou quando o tom for de
consolo íntimo (vai para `foto-plena`).

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
body, .slide { background: #002e5a; }
/* videira: asset compartilhado assets/images/videira-branca.png */
.videira { position: absolute; right: -90px; top: -40px; width: 760px; opacity: .92; }
.aspas { position: absolute; left: 82px; top: 240px; font: 700 340px/1 'Aleo'; color: #f9a4cf; }
blockquote { position: absolute; left: 96px; right: 140px; top: 530px;
             font: 600 112px/1.04 'Aleo'; letter-spacing: -0.025em; color: #fff; }
cite  { color: #f9a4cf; font: 26px 'Archivo'; }
/* ondas: 4 círculos concêntricos, 1.5px, rosa clara de .6 a .16 de opacidade */
.ondas { position: absolute; right: -260px; bottom: -260px; width: 820px; height: 820px; }
```

## Slides internos

Não tem.

## Fecho

Não tem.

## Imagens

Não usa foto. Ornamentos: a videira em traço branco (`../../assets/images/videira-branca.png` a
partir do post, não copie para a pasta do post) e as ondas em CSS.

## Escala tipográfica

Frase 88–116px Aleo 600, 2–3 linhas. Fonte 24–26px.

## Variações permitidas

- Videira no **alto à direita ou à esquerda** (espelhada com `scaleX(-1)`), largura de 620 a 820px, ou ausente.
- Ondas no **canto oposto à videira** (nunca atrás do texto).
- Número de ondas de 3 a 5.
- Tamanho da frase entre 88 e 116px, conforme o comprimento.
- Aspas podem sair quando a frase não é citação (reflexão da casa); o fio rosa de 64px entra no lugar.
- Fundo pode virar branco com frase em `#002e5a` e ondas em `#e652a3` (versão clara, **sem a videira**, que é branca), no máximo 1 a cada 3 usos.

## Travas

- **Sem foto:** é o respiro visual do feed entre posts fotográficos.
- **Videira e ondas em cantos opostos, nunca encostando na frase:** juntas no mesmo canto viram ruído.
- **Uma única cor de destaque (`#f9a4cf`)** sobre o azul: rosa viva sobre azul não passa contraste.
- **Ondas finas (1.5px) e translúcidas:** grossas ou cheias viram mandala, que a marca veta.
- **Frase alinhada à esquerda:** centralizada vira cartaz de igreja.
- `background` declarado no `body`.

## Posts de referência

Nenhum ainda.
