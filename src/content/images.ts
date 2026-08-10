/**
 * Direção de arte: luz, mãos e o que se doa. Nunca rostos posados.
 *
 * O que é da casa vem primeiro. A abertura é a fachada real da Rua José Paulino
 * — a mesma porta que a pessoa vai procurar — e não uma fotografia de banco de
 * imagens. As duas restantes são de banco e ficam até a casa fornecer as suas:
 * é só trocar os arquivos em public/images/ mantendo as proporções abaixo, que
 * nenhum componente precisa mudar.
 *
 * Licença: `hands` e `drawings` sob Unsplash License (uso livre, inclusive
 * comercial). O restante pertence à Morada.
 *
 * Os dois retratos são a exceção à regra dos rostos: são os quadros pintados
 * que estão pendurados na casa, reproduzidos em 3:4 e sem a moldura.
 */
export const images = {
  facade: {
    src: "/images/fachada-morada.jpg",
    width: 2000,
    height: 972,
    credit: "Acervo da Morada",
  },
  /* Ilustração, não fotografia: um campo semeado nas três cores do emblema —
     branca, azul e cor-de-rosa. Entra sob véu azul da casa, para ficar textura
     atrás do versículo e não virar céu luminoso de cartaz religioso. */
  sownField: {
    src: "/images/campo-de-rosas.jpg",
    width: 1920,
    height: 1280,
    credit: "Ilustração encomendada pela Morada",
  },
  /* Fundo branco puro (#ffffff), igual ao `--color-bg`: a figura flutua sem
     moldura na página. Só funciona em seção de tom `plain` — sobre `surface`
     o retângulo branco apareceria. Ganhou 150px de folga no topo porque no
     arquivo original o cabelo encosta na borda. */
  jesus: {
    src: "/images/jesus.jpg",
    width: 1200,
    height: 1895,
    credit: "Acervo da Morada",
  },
  hands: {
    src: "/images/maos-dadas.jpg",
    width: 1400,
    height: 1050,
    credit: "Narissa de Villiers / Unsplash",
  },
  drawings: {
    src: "/images/desenhos-das-criancas.jpg",
    width: 1400,
    height: 1050,
    credit: "Pablo García Saldaña / Unsplash",
  },
  mentor: {
    src: "/images/professor-lairi-hans.jpg",
    width: 1200,
    height: 1600,
    credit: "Acervo da Morada",
  },
  founder: {
    src: "/images/mae-luzia.jpg",
    width: 1200,
    height: 1600,
    credit: "Acervo da Morada",
  },
} as const;
