# Template `vidro`

**Template fixo das sextas (autores espíritas).** Primo do `duotone`, sem a camada colorida: a foto aparece com a cor natural (só levemente
dessaturada) e a frase vai numa faixa branca translúcida, de borda a borda, que desfoca apenas o que
está atrás dela, como vidro fosco. Texto escuro sobre o vidro; assinatura fora da faixa, no pé do post.

## Preview

![](previews/vidro/slide-01.png)

## Quando usar

Quando a foto é bonita demais para ser tingida ou escurecida (flores, campos, céu colorido,
borboletas) e a frase é de tamanho curto a médio. É o template de fundo fotográfico com leitura em
texto escuro, o contraponto do `foto-plena`.

**Não use quando** a foto tiver pouco detalhe atrás da faixa (céu liso, parede): o vidro some e vira
só uma tarja branca. Aí use `duotone` ou `foto-plena`. Frase acima de ~25 palavras deixa a faixa alta
demais e esconde a foto: vá para `pagina`.

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
body, .slide { background: #6d5d67; }          /* cor de segurança enquanto a foto carrega */
.foto { position: absolute; inset: 0; object-fit: cover; filter: saturate(.8); }
.vidro {
  position: absolute; left: 0; right: 0; top: 50%; transform: translateY(-50%);
  padding: 80px 120px 68px;
  background: rgba(255,255,255,.7);
  -webkit-backdrop-filter: blur(22px) saturate(1.1); backdrop-filter: blur(22px) saturate(1.1);
  border-top: 1.5px solid rgba(255,255,255,.85); border-bottom: 1.5px solid rgba(255,255,255,.85);
  box-shadow: 0 30px 70px -30px rgba(39,25,34,.35);
  text-align: center; color: #271922;
}
blockquote { font: 500 60px/1.16 'Aleo'; }
cite .autor { display: block; font: 600 40px 'Aleo'; color: #a01560; }          /* autor em destaque */
cite .obra  { display: block; margin-top: 10px; font: 28px/1.35 'Archivo'; color: #4f3f49; }  /* por <médium><br><livro, cap.> · <título> */
/* assinatura fora do vidro, no pé do post, sobre a foto */
.assinatura { position: absolute; left: 0; right: 0; bottom: 70px; text-align: center; color: #fff;
              text-shadow: 0 1px 2px rgba(0,0,0,.45), 0 0 18px rgba(0,0,0,.55); }
```

## Slides internos

Não tem.

## Fecho

Não tem.

## Imagens

- **Exige foto** do Pexels (ver `BRAND.md`, "Fotos"), `bg.jpg`, mínimo 1080×1350.
- A foto precisa ter **detalhe e cor atrás da faixa** (flores, folhas, nuvens com textura): é isso que
  faz o vidro aparecer. Os assuntos principais ficam acima e abaixo da faixa.

## Escala tipográfica

| Frase | Tamanho |
|---|---|
| Curta (até ~10 palavras) | 70–80px |
| Média (11–25 palavras) | 52–62px |

Fonte 22–23px. Assinatura na Halimun padrão (38px).

## Variações permitidas

- Faixa **no centro, no terço de cima ou no terço de baixo**, conforme onde a foto tem menos assunto.
- Opacidade do branco de .62 a .78 (mais opaco quanto mais escura ou movimentada a foto).
- Desfoque de 16 a 28px.
- Frase em romano ou itálico.

## Travas

- **Nenhuma camada colorida sobre a foto:** a cor natural é a razão deste template existir; tingir
  vira `duotone`.
- **Nada acima da frase** (sem fio rosa): a borda do vidro já emoldura o texto.
- **Faixa de borda a borda, sem cantos arredondados:** cartão flutuante vira interface de app.
- **Desfoque só atrás da frase:** o resto da foto fica nítido, senão o efeito vidro se perde.
- **Texto `#271922` e fonte `#a01560` sobre o vidro:** com branco a .7, são as combinações que mantêm
  4.5:1. Nunca texto branco sobre o vidro.
- **Assinatura fora da faixa, no pé do post, branca com sombra suave:** o vidro fica só para a frase.
  Se a base da foto for clara demais para o branco, suba o enquadramento ou troque de foto; nada de
  camada sobre a foto.

## Posts de referência

- `post-32` a `post-36`: Emmanuel; `post-37` a `post-41`: André Luiz (*Sinal Verde*); `post-42` a `post-46`: Joanna de Ângelis (*Vida Feliz*).
