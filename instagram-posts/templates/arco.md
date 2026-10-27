# Template `arco`

Fundo claro com um sopro de rosa; a foto aparece dentro de uma janela em arco, com um contorno rosa
deslocado atrás. A frase fica embaixo, centralizada, em Aleo itálico. Calmo, quase de capela, sem ser
igreja.

## Preview

![](previews/arco/slide-01.png)

## Quando usar

Ensinamentos doutrinários serenos (O Evangelho segundo o Espiritismo, mensagens do Espírito de
Verdade), e sempre que houver uma **foto da própria casa**: o salão, as rosas, os quadros de Mãe Luzia
e do Professor Lairi Hans.

**Não use quando** a frase for curta e de impacto (vai para `faixa-azul`) ou quando a foto for o
assunto principal e precisar de tela cheia (vai para `foto-plena`).

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
body, .slide { background: #fcf5f8; }
.arco, .contorno { position: absolute; left: 50%; top: 104px; width: 580px; height: 700px;
                   border-radius: 290px 290px 4px 4px; }
.contorno { transform: translateX(calc(-50% + 26px)); top: 130px; border: 2px solid #e652a3; }
.arco     { transform: translateX(-50%); overflow: hidden; }
.arco img { width: 100%; height: 100%; object-fit: cover; filter: saturate(.82); }
.texto    { position: absolute; left: 130px; right: 130px; top: 896px; text-align: center; }
blockquote { font: italic 400 46px/1.3 'Aleo'; color: #271922; }
cite      { font: 23px 'Archivo'; color: #a01560; }
.assinatura { bottom: 74px; centralizada; color: #6d5d67; }
```

## Slides internos

Não tem.

## Fecho

Não tem.

## Imagens

- **Exige foto**, `bg.jpg`, mínimo 600×720 úteis (o arco é vertical).
- O assunto precisa caber num recorte vertical estreito: confira que nenhum rosto fica cortado pela borda do arco.

## Escala tipográfica

Frase 42–50px Aleo itálico 400, até 4 linhas. Fonte 22–23px.

## Variações permitidas

- Contorno deslocado para a **direita ou para a esquerda**.
- Arco pode ser **ogival** (`border-radius: 50% 50% 4px 4px / 40% 40% 4px 4px`) ou de volta inteira.
- Frase em itálico ou romano (500).
- Fundo `#fcf5f8` ou branco puro.
- Fio rosa de 64px entre o arco e a frase, opcional.

## Travas

- **Arco centralizado, frase centralizada:** a simetria é o que dá a calma deste template.
- **Contorno sempre em `#e652a3`, 2px:** mais grosso vira moldura de convite de casamento.
- **Fundo claro:** a versão escura já existe (`foto-plena`, `duotone`).
- **Nenhum rosto cortado pela curva do arco**: retrato pela metade parece descuido.

## Posts de referência

Nenhum ainda.
