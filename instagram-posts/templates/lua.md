# Template `lua`

Fundo escuro quente (tinta da marca), uma foto recortada num círculo grande que sai pelo canto
superior como uma lua, com um anel fino rosa ao redor. A frase fica embaixo, à esquerda. Noturno e
recolhido.

## Preview

![](previews/lua/slide-01.png)

## Quando usar

Posts de noite, oração, prece, silêncio, confiança: "Antes de dormir", "Para orar". Boas fotos com cor
suave (rosas, vela, luz de janela) brilham sobre o fundo escuro.

**Não use quando** a foto tiver o assunto nas bordas (o círculo corta) ou o tom for de consolo direto
com foto forte (vai para `foto-plena`).

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
body, .slide { background: #271922; }
.lua  { right: -170px; top: -150px; width: 820px; height: 820px; border-radius: 50%; overflow: hidden; }
.anel { right: -214px; top: -194px; width: 908px; height: 908px; border-radius: 50%;
        border: 1.5px solid rgba(249,164,207,.5); }
.texto { left: 96px; right: 150px; bottom: 210px; color: #fff; }
.eyebrow { color: #f9a4cf; }  blockquote { font: 500 66px/1.14 'Aleo'; }  cite { color: #f9a4cf; }
.nb { white-space: nowrap; }   /* "dar-se-vos-á" nunca quebra no hífen */
.assinatura { left: 96px; bottom: 88px; color: rgba(255,255,255,.66); }
```

## Slides internos

Não tem.

## Fecho

Não tem.

## Imagens

- **Exige foto**, `bg.jpg`, mínimo 820×820, assunto no centro.

## Escala tipográfica

Frase 58–70px Aleo 500, até 4 linhas. Eyebrow 21px. Fonte 24px.

## Variações permitidas

- Lua saindo pelo canto **superior direito ou superior esquerdo** (o texto vai para o lado oposto).
- Diâmetro entre 700 e 900px.
- Anel presente ou ausente.
- Eyebrow ("Antes de dormir", "Para orar", "Em silêncio") ou ausente.

## Travas

- **Fundo `#271922`, nunca preto puro nem azul**: o azul escuro já é de `faixa-azul` e `duotone`.
- **Círculo sempre parcialmente fora do slide:** inteiro e centralizado vira auréola, que a marca veta.
- **Texto nunca sobre a foto.**
- **Ênclises com hífen (`dar-se-vos-á`) em `.nb`:** quebrar no hífen deixa um "á" sozinho na linha.
- `background` declarado no `body`.

## Posts de referência

Nenhum ainda.
