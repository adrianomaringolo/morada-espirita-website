# Template `pagina`

O slide é uma página de livro: cabeçalho corrido com obra e capítulo, uma prancha fotográfica com
legenda, o trecho em Aleo com capitular rosa e a assinatura no rodapé entre fios, como um colofão.
Para quem gosta de ler.

## Preview

![](previews/pagina/slide-01.png)

## Quando usar

Trechos mais longos (25 a 45 palavras) com referência precisa: capítulo e item de O Evangelho segundo
o Espiritismo, questão de O Livro dos Espíritos, trechos de A Gênese, O Céu e o Inferno.

**Não use quando** a frase for curta (a página fica vazia; use `faixa-azul` ou `arco`) ou não tiver
referência de obra e capítulo.

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
body, .slide { background: #fcf5f8; padding: 92px 104px 0; }
.corrido { display: flex; justify-content: space-between; border-bottom: 1px solid #e5dade;
           500 20px Archivo caixa-alta .14em; color: #6d5d67; }
.prancha { margin-top: 60px; height: 450px; } .prancha img { object-fit: cover; filter: saturate(.7); }
.legenda { 18px Archivo; color: #6d5d67; }   /* título do capítulo */
.texto   { margin-top: 64px; font: 400 52px/1.34 'Aleo'; color: #271922; }
.texto::first-letter { float: left; font-weight: 700; font-size: 186px; line-height: .8; color: #a01560; }
.rodape  { bottom: 76px; assinatura entre dois fios #e5dade; }
```

## Slides internos

Não tem.

## Fecho

Não tem.

## Imagens

- **Foto como prancha** horizontal, `bg.jpg`, mínimo 872×450.
- Legenda da prancha = título do capítulo ou da questão (não descreve a foto).

## Escala tipográfica

Trecho 44–54px Aleo 400 (ajuste para preencher até ~200px do rodapé). Capitular 3 linhas de altura.

## Variações permitidas

- Prancha **no topo ou embaixo** do trecho.
- Prancha pode sair quando o trecho é longo (então o trecho sobe e cresce).
- Capitular ou sem capitular (com aspas penduradas).
- Cabeçalho corrido com o nome da obra completo ou abreviado ("O Livro dos Espíritos · Q. 886").

## Travas

- **Cabeçalho corrido sempre preenchido com obra e capítulo/item:** é a promessa do template; sem referência não é página.
- **Texto alinhado à esquerda, nunca justificado:** justificado abre rios no 1080px.
- **Assinatura no rodapé entre fios:** é o colofão da página.
- **Fundo `#fcf5f8`:** creme ou papel envelhecido cai no clichê "espiritual" que a marca rejeita.

## Posts de referência

Nenhum ainda.
