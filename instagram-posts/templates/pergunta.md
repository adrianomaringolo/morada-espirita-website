# Template `pergunta`

Fundo azul-claro, uma pergunta enorme em Aleo 700 azul-escuro, e embaixo, depois de um fio, a resposta
em itálico. Uma pequena foto redonda abre o slide. Convida o leitor a pensar antes de ler a resposta.

## Preview

![](previews/pergunta/slide-01.png)

## Quando usar

Quando a reflexão nasce de uma **pergunta**: perguntas de Jesus ou feitas a Ele, perguntas de
O Livro dos Espíritos ("Qual é a lei mais importante?"), ou perguntas da casa para o leitor.

**Não use quando** a frase não tem pergunta (o `dividido` faz contexto + frase) ou a pergunta
passar de ~8 palavras.

## Estrutura de slides

Post único, 1080×1350.

## Capa

```css
body, .slide { background: #bee1fc; }
.foto { left: 96px; top: 110px; 200×200; border-radius: 50%;
        box-shadow: 0 0 0 10px #bee1fc, 0 0 0 12px #002e5a; }   /* anel fino afastado */
.pergunta { left: 96px; right: 96px; top: 380px; font: 700 132px/1 'Aleo'; letter-spacing: -0.035em; color: #002e5a; }
.resposta { top: 800px; border-top: 2px solid #002e5a; padding-top: 44px; }
.resposta span { 600 20px Archivo caixa-alta .18em; color: #002e5a; }   /* ponte entre pergunta e resposta */
blockquote { font: italic 400 68px/1.12 'Aleo'; color: #271922; }
.assinatura { right: 96px; bottom: 84px; color: #002e5a; }
```

## Slides internos

Não tem.

## Fecho

Não tem.

## Imagens

- **Foto pequena opcional**, `bg.jpg`, recorte redondo de 200px. Precisa de um assunto legível em
  miniatura (mãos, uma flor, uma vela). Sem foto, a pergunta sobe 120px.

## Escala tipográfica

Pergunta 110–140px Aleo 700, 2–3 linhas. Resposta 56–72px itálico. Rótulos 20–23px.

## Variações permitidas

- Foto redonda à esquerda, à direita ou ausente.
- Resposta pode ser uma citação (com fonte) ou uma reflexão da casa (sem autor).
- Linha-ponte ("Jesus respondeu…", "A resposta dos Espíritos") reescrita a cada post ou ausente.
- Fundo `#bee1fc` ou `#fdf0f5` (então pergunta em `#a01560`).

## Travas

- **Texto sempre escuro sobre o fundo claro**: branco sobre `#bee1fc` não passa contraste.
- **Pergunta sem aspas e com ponto de interrogação:** é ela que para o scroll.
- **Fio separando pergunta e resposta:** sem ele, a resposta parece continuação da pergunta.
- **Resposta sempre menor que a pergunta.**

## Posts de referência

Nenhum ainda.
