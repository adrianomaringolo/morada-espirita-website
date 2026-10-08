# Template `horizonte`

Fundo branco, frase grande em Aleo 600 no alto, e uma faixa fotográfica panorâmica que sangra de borda
a borda no meio do slide, como uma linha de horizonte. A fonte fica logo abaixo da faixa.

## Preview

![](previews/horizonte/slide-01.png)

## Quando usar

**Template fixo das frases do Professor Lairi Hans** (ver `BRAND.md`), sempre com **rosas claras**
(brancas, cor-de-rosa ou azuis) ao centro da faixa. Também serve a frases de recomeço, renovação e caminho com foto horizontal e larga.

**Não use quando** a foto for vertical (vai para `foto-plena` ou `arco`) ou a frase passar de ~45
palavras (então escolha outra frase).

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
body, .slide { background: #fff; }
/* coluna: frase no alto; a faixa cresce até a fonte. Nunca sobra branco entre texto e imagem. */
.coluna { position: absolute; left: 96px; right: 110px; top: 104px; bottom: 230px; display: flex; flex-direction: column; }
.eyebrow { 600 21px Archivo caixa-alta .18em; color: #a01560; }          /* "Palavras do mentor" */
blockquote { margin-top: 34px; font: 500 <ver tabela>/1.2 'Aleo'; color: #271922; }
blockquote span { display: block; text-wrap: balance; }  blockquote span + span { margin-top: 14px; }
.faixa { margin: 56px -110px 0 -96px; flex: 1 1 auto; min-height: 340px; overflow: hidden; }   /* borda a borda */
.faixa img { width: 100%; height: 100%; object-fit: cover; filter: saturate(.85); }
cite { margin-top: 30px; 24px Archivo; color: #6d5d67; }
.assinatura { position: absolute; left: 96px; bottom: 76px; }
/* mancha rosa bem clara no canto inferior direito, atrás de tudo */
.mancha { position: absolute; right: -380px; bottom: -470px; width: 900px; height: 900px; border-radius: 50%;
          background: radial-gradient(circle, rgba(249,164,207,.34) 0%, rgba(249,164,207,.12) 30%, rgba(249,164,207,0) 56%); }
```

## Slides internos

Não tem.

## Fecho

Não tem.

## Imagens

- **Exige foto horizontal**, `bg.jpg`, mínimo 1080×470 úteis (idealmente 2000px de largura).

## Escala tipográfica

| Frase | Tamanho da letra |
|---|---|
| Até ~25 palavras | 56–64px, `line-height: 1.16` |
| 26–45 palavras | 48–52px, `line-height: 1.2`, um `<span>` por frase |

A faixa não tem altura fixa: ocupa o que sobra (mínimo 340px). Se ela ficar baixa demais, diminua a
letra; se ficar alta demais (frase curta), aumente a letra.

Eyebrow 21px. Fonte 22–24px. Confira que a assinatura (2 linhas, ~120px) não encosta na fonte.

## Variações permitidas

- Faixa **no meio ou embaixo** (então a fonte sobe para cima dela).
- Enquadramento da rosa (`object-position`) livre; a altura da faixa é automática.
- Eyebrow com qualquer tema curto ("Para recomeçar", "Para o caminho") ou ausente.
- Fundo branco ou `#fcf5f8`.

## Travas

- **Faixa sempre de borda a borda:** com margem lateral vira só uma foto num post.
- **Frase alinhada à esquerda, na margem de 96px**, igual à fonte e à assinatura: é a coluna do template.
- **Sem texto sobre a faixa:** a foto é o respiro entre frase e fonte.
- **Nada entre a frase e a faixa** (sem fio rosa nem ornamento): a borda da foto já faz a divisão.
- **Mancha rosa só no canto inferior direito, bem clara** (até .32 de opacidade no centro, sumindo antes
  de chegar ao texto): mais forte vira degradê "celestial", que a marca evita.
- Foto sem céu "celestial" nem flores violeta (ver `BRAND.md`).

## Posts de referência

- `post-04`, `post-07` a `post-11`: frases do Professor com rosas claras; a faixa cresce até a fonte.
