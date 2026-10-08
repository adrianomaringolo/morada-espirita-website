# Template `foto-plena`

A foto ocupa o slide inteiro; a frase pousa sobre ela, protegida por um scrim escuro. O post que mais
"para o scroll" e o mais emotivo do conjunto.

## Preview

![](previews/foto-plena/slide-01.png)

## Quando usar

Frases de consolo e esperança (luto, dor, saudade, recomeço) quando há uma foto forte com uma área
calma onde o texto pode morar.

**Não use quando** a foto for colorida demais, de qualidade irregular ou sem área calma: use
`duotone`, que uniformiza qualquer foto. Acima de ~30 palavras, vá para `pagina`.

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
body, .slide { background: #1d1418; }
.foto  { position: absolute; inset: 0; object-fit: cover; filter: saturate(.72); }
/* scrim do lado em que o texto mora (aqui no topo) + leve sombra no rodapé para a assinatura */
.scrim { background: linear-gradient(180deg, rgba(29,20,24,.88) 0%, rgba(29,20,24,.62) 30%,
         rgba(29,20,24,0) 54%, rgba(29,20,24,0) 82%, rgba(29,20,24,.55) 100%); }
.texto { position: absolute; left: 96px; right: 130px; top: 104px; color: #fff; }
.fio   { width: 64px; height: 3px; background: #f9a4cf; margin-bottom: 44px; }
blockquote { font: 500 74px/1.12 'Aleo'; }
cite   { font: 26px 'Archivo'; color: #f9a4cf; }
.assinatura { position: absolute; left: 96px; bottom: 88px; color: rgba(255,255,255,.72); }
```

## Slides internos

Não tem.

## Fecho

Não tem: a assinatura no canto inferior esquerdo fecha o post.

## Imagens

- **Exige foto**, `bg.jpg` na pasta do post, mínimo 1080×1350 (vertical de preferência).
- A foto precisa ter uma **área calma** (céu, parede, tecido, sombra) do lado em que o texto vai.
- Assunto: mãos, luz, natureza, objetos da casa. Nunca rosto posado de desconhecido.

## Escala tipográfica

Varia com o tamanho da frase (ver `BRAND.md`):

| Frase | Tamanho | Composição |
|---|---|---|
| Curta (até ~10 palavras) | 80–90px, `line-height: 1.06` | Um bloco, 2–3 linhas, com fio ou aspas |
| Média (11–20 palavras) | 64–72px, `line-height: 1.12` | Um bloco ou um `<span>` por frase, cada um com `text-wrap: balance` |
| Longa (21–30 palavras) | 52–58px, `line-height: 1.16` | Um `<span display:block>` por oração, 26px entre eles; scrim mais alto (começa em ~22%) |

Fonte da citação 24–26px.

## Variações permitidas

- Texto no **topo ou na base**, conforme onde a foto respira (o scrim acompanha).
- Tamanho da frase entre 52 e 90px, conforme a tabela de escala.
- `object-position` livre para enquadrar o assunto.
- Fio rosa pode virar aspas grandes em `#f9a4cf` no lugar do fio.
- Assinatura no canto oposto ao texto, alinhada à mesma margem de 96px. Com o texto na base, a assinatura vai logo abaixo dele, e o bloco de texto sobe para `bottom: 256px`.

## Travas

- **Scrim sempre presente** atrás do texto: sem ele o contraste depende da sorte da foto.
- **Texto sempre branco, fonte da citação sempre `#f9a4cf`:** é a única combinação legível em qualquer foto escurecida.
- **Margem lateral de 96px:** o Instagram corta as bordas no grid e no perfil.
- **Nunca texto centralizado sobre o assunto da foto** (mãos, rosto, flor): o assunto é a imagem.
- `background` declarado no `body` (slide escuro).

## Posts de referência

- `post-01`: frase média, flores contra o sol baixo, aspas.
- `post-02`: frase curta, gaivota no meio do slide, fio.
- `post-03`: frase longa em três orações, flores em fundo escuro, aspas.
