import { site } from "@/content/site";

/**
 * Todo o texto do site em português. Nenhuma frase vive dentro de um componente.
 * Quem for atualizar um horário ou um número daqui a três anos mexe aqui e em
 * src/content/site.ts — em mais lugar nenhum.
 */
export const pt = {
  meta: {
    siteName: site.name,
    tagline: "Casa espírita e entidade beneficente em Campinas desde 1980",
    defaultDescription:
      "Atendimento espiritual gratuito e sem agendamento em Campinas: quartas às 14h, quintas às 20h e sábados às 15h — a porta se fecha cinco minutos antes. Casa espírita kardecista e entidade beneficente desde 1980.",
  },

  nav: {
    home: "Início",
    care: "Atendimento",
    evangelization: "Evangelização",
    charity: "Caridade",
    spiritism: "Espiritismo",
    gospelOnline: "Evangelho online",
    chacara: "Chácara da Morada",
    shop: "Loja da Morada",
    history: "Nossa história",
    messages: "Mensagens",
    events: "Eventos",
    directions: "Como chegar",
    contact: "Contato",
    menuButton: "Menu",
    openMenu: "Abrir o menu completo de navegação",
    closeMenu: "Fechar menu",
    menuTitle: "Todas as páginas",
    menuNote: "Todas as páginas do site, os canais da Morada e o idioma.",
    skipToContent: "Ir direto para o conteúdo",
    languageLabel: "Idioma",
    primaryLabel: "Navegação principal",
    footerLabel: "Navegação do rodapé",
  },

  common: {
    free: "Gratuito",
    noBooking: "Sem agendamento",
    openToAll: "Aberto a qualquer pessoa",
    /* Facebook primeiro em todo o site: é onde a Morada responde. */
    messageFacebook: "Falar no Facebook",
    seeInstagram: "Ver no Instagram",
    callHouse: `Ligar para ${site.phone.display}`,
    orCall: "Prefere telefone?",
    schedule: "Horários",
    weekdays: {
      Sunday: "Domingo",
      Monday: "Segunda-feira",
      Tuesday: "Terça-feira",
      Wednesday: "Quarta-feira",
      Thursday: "Quinta-feira",
      Friday: "Sexta-feira",
      Saturday: "Sábado",
    } as Record<string, string>,
    to: "às",
    /* Em destaque, o começo do trabalho; logo abaixo, o prazo para entrar. */
    doorsCloseAt: "a porta se fecha às",
    doorsOpenFrom: "aberta a partir das",
    backHome: "Voltar ao início",

    /*
     * Texto compartilhado das páginas ainda sem conteúdo. Quando a Morada
     * enviar textos e fotos de uma delas, escreva a página de verdade e tire
     * o id de `draftPages` em src/i18n/config.ts — é o que devolve a página
     * ao sitemap e à indexação.
     */
    draft: {
      notice: "Página em preparação",
      body: "Esta página ainda não tem conteúdo publicado. Assim que a Morada reunir os textos e as fotografias, ela entra no ar.",
      askHeading: "Enquanto isso",
      askBody: "Se você precisa desta informação agora, mande mensagem no Facebook ou ligue. Alguém responde e explica.",
      backCta: "Ver o que já está no ar",
    },
  },

  home: {
    title: `${site.name} — Atendimento espiritual gratuito em Campinas`,
    description:
      "Casa espírita kardecista e entidade beneficente no Centro de Campinas desde 1980. Atendimento espiritual gratuito e sem agendamento, evangelização infantojuvenil e 3,5 toneladas de alimentos distribuídas por mês.",

    hero: {
      heading: "Fé, amor e caridade",
      lead: `A ${site.name} atende no Centro de Campinas desde 1980. O atendimento espiritual é aberto a qualquer pessoa, de qualquer religião ou de nenhuma.`,
      primaryCta: "Como funciona o atendimento",
      secondaryCta: "Como chegar até nós",
      imageAlt:
        "Fachada da Morada na Rua José Paulino: o nome em letras douradas sobre a parede branca, ao lado da entrada de vidro",
    },

    schedule: {
      heading: "Atendimento espiritual",
      note: "O trabalho começa na hora em destaque, mas a porta se fecha cinco minutos antes: depois disso ninguém mais entra. Atende-se por ordem de chegada.",
    },

    motto: {
      quote: "Não há nada que o amor não vença.",
      author: "Professor Lairi Hans",
      role: "Mentor espiritual da Morada",
    },

    charity: {
      heading: "A caridade é o trabalho diário da Morada",
      body: "Voluntários saem de porta em porta aos sábados e domingos para recolher alimentos em Campinas. O que é recolhido volta como cesta, agasalho e enxoval para famílias cadastradas — no último domingo de cada mês, há 45 anos.",
      figures: [
        { value: "3,5 t", label: "de alimentos distribuídos por mês" },
        { value: "120", label: "famílias atendidas mensalmente" },
        { value: "500", label: "crianças na festa de Natal" },
      ],
      cta: "Conhecer o trabalho de caridade",
      imageAlt:
        "Mãos de duas pessoas idosas dadas, contra um campo iluminado pelo fim da tarde",
    },

    evangelization: {
      heading: "Domingo de manhã é das crianças",
      body: "Cinco turmas por faixa etária, das 9h30 às 11h15. As aulas partem do Evangelho e passam por música, pintura e participação real na coleta de alimentos. Não é preciso ser espírita, e não se cobra nada.",
      cta: "Ver a evangelização",
    },

    seed: {
      quote: "Pois o que o homem semear, isso também colherá.",
      source: "Gálatas 6:7",
      body: "Trabalho e amor ao próximo, lema da Morada e ensinamento constante do Professor aos trabalhadores.",
      cta: "O que é o Espiritismo",
      imageAlt:
        "Campo de rosas brancas, azuis e cor-de-rosa até o horizonte, sob um céu aberto",
    },

    history: {
      heading: "Cada tijolo obtido através das mãos e do suor dos trabalhadores da Morada",
      body: `Fundada em 29 de outubro de 1980 por quatro pessoas e seis médiuns, a Morada nunca teve ajudas externas. A sede atual foi levantada entre 2000 e 2002 apenas com trabalho voluntário. Sob o piso há uma cápsula do tempo, lacrada em ${site.timeCapsule.sealed} para ser aberta em ${site.timeCapsule.opens}.`,
      cta: "Ler nossa história",
    },
  },

  care: {
    title: "Atendimento espiritual",
    description:
      "Consulta espiritual, passe com cromoterapia e água fluidificada em Campinas. Quartas às 14h, quintas às 20h e sábados às 15h; a porta se fecha cinco minutos antes. Gratuito e sem agendamento.",
    heading: "Atendimento espiritual",
    lead: "Consulta, passe e água fluidificada. Não se marca hora, não se paga nada e não se pergunta a religião de ninguém.",

    scheduleHeading: "Quando",
    scheduleNote:
      "O horário em destaque é o do começo do trabalho. A porta se fecha cinco minutos antes dele, e quem chega depois disso não é atendido naquele dia — por isso venha com folga. O atendimento segue a ordem de chegada: quem chega mais cedo é atendido mais cedo. A Morada não estima tempo de espera.",

    whatHeading: "O que acontece",
    what: [
      {
        title: "Orientação em consulta espiritual",
        body: "Uma conversa reservada com um médium da Morada sobre o que a pessoa está vivendo. Ninguém é obrigado a contar mais do que quer.",
      },
      {
        title: "Aplicação de passes, com cromoterapia",
        body: "Alguns minutos em silêncio, sentado, recebendo o passe. É rápido e não há contato além das mãos próximas.",
      },
      {
        title: "Tratamento com água fluidificada",
        body: "A pessoa leva para casa a água preparada durante a reunião, com orientação de como tomar.",
      },
    ],

    beforeHeading: "Antes de vir",
    before: [
      "Não beba álcool no dia do atendimento.",
      "Use roupas adequadas: homens sem shorts e sem camiseta regata; mulheres sem saia curta e sem blusa decotada.",
      "Traga uma garrafa pequena, se quiser levar água fluidificada.",
      "Pode trazer crianças e acompanhantes.",
    ],

    faqHeading: "Perguntas frequentes",
    faq: [
      {
        q: "Preciso marcar?",
        a: "Não. É só chegar em um dos dias de atendimento, antes da hora em que a porta se fecha. Atende-se por ordem de chegada.",
      },
      {
        q: "Quanto custa?",
        a: "Nada. A Morada não cobra por nenhum atendimento e não aceita pagamento por ele.",
      },
      {
        q: "Preciso ser espírita?",
        a: "Não. O atendimento é para qualquer pessoa, de qualquer religião ou de nenhuma. Ninguém será convidado a mudar de crença.",
      },
      {
        q: "O atendimento substitui tratamento médico?",
        a: "Não, em nenhuma hipótese. A Morada não recomenda interromper medicação nem tratamento de saúde, e não faz diagnóstico. Procure sempre um médico.",
      },
      {
        q: "Posso levar meus filhos?",
        a: "Pode. Aos domingos de manhã há também a evangelização infantojuvenil, das 9h30 às 11h15.",
      },
      {
        q: "E se eu não conseguir ir sozinho?",
        a: `Mande mensagem para a Morada no Facebook, em ${site.social.facebookHandle}, ou ligue para ${site.phone.display}. Sempre há alguém disposto a ajudar a resolver.`,
      },
    ],
  },

  evangelization: {
    title: "Evangelização infantojuvenil",
    description:
      "Evangelização para crianças e jovens aos domingos, das 9h30 às 11h15, em cinco turmas por faixa etária. Gratuita e aberta a todos, no Centro de Campinas.",
    heading: "Evangelização infantojuvenil",
    lead: "Todo domingo, das 9h30 às 11h15. Cinco turmas separadas por faixa etária, para crianças e jovens.",
    groupsLabel: "turmas por faixa etária",
    imageAlt:
      "Desenhos infantis a giz de cera espalhados sobre uma mesa, com a caixa de giz aberta ao lado",

    whatHeading: "O que as crianças fazem",
    what: [
      {
        title: "Aulas a partir do Evangelho",
        body: "Conversas sobre virtudes, fraternidade e fé, na linguagem de cada idade — não em forma de doutrinação.",
      },
      {
        title: "Caridade de verdade",
        body: "As turmas participam da coleta e da separação de alimentos. Aprender a dar é parte da aula, não um discurso sobre ela.",
      },
      {
        title: "Música e pintura",
        body: "Toda semana há atividade de arte. Boa parte do que as crianças fazem vai para casa com elas.",
      },
    ],

    joinHeading: "Como participar",
    joinBody: `Não há matrícula, taxa nem lista de espera. Traga a criança em um domingo, alguns minutos antes das 9h30, e converse com a equipe na entrada. Se preferir avisar antes, mande mensagem no Facebook da Morada — ou ligue para ${site.phone.display}.`,
  },

  charity: {
    title: "Caridade",
    description:
      "Coleta de alimentos porta a porta aos sábados e domingos, 3,5 toneladas distribuídas por mês a cerca de 120 famílias, e campanhas de Inverno, Páscoa e Natal em Campinas.",
    heading: "Caridade",
    lead: "Todo mês, cerca de 3,5 toneladas de alimentos saem da Morada para famílias de Campinas. Nada disso vem de ajudas externas: vem de porta em porta.",

    quote: {
      text: "Fora da caridade não há salvação, porque o Pai coloca em nossas mãos uma semente a ser plantada.",
      author: "Luzia Pacubi (Mãe Luzia)",
      role: "Fundadora da Morada",
    },

    figuresHeading: "O trabalho em números",
    figuresNote:
      "Números aproximados, informados pela própria Morada e revisados periodicamente.",

    howHeading: "Como funciona",
    how: [
      {
        step: "Coleta",
        body: "Aos sábados e domingos, às 9h, voluntários se reúnem, fazem uma prece e saem de porta em porta pelos bairros de Campinas. Todos usam crachá de identificação.",
      },
      {
        step: "Triagem",
        body: "O que é recolhido volta para a sede, é conferido por data de validade e montado em cestas.",
      },
      {
        step: "Cadastro e visita",
        body: "Voluntários identificam famílias em situação vulnerável nos bairros de periferia, por entrevista e visita domiciliar. Têm prioridade famílias com muitas crianças, pessoas doentes e idosos sem apoio.",
      },
      {
        step: "Entrega",
        body: "No último domingo de cada mês, as famílias cadastradas recebem cestas de alimentos, roupas e enxovais para bebês. O apoio continua até a família conseguir se manter sozinha.",
      },
    ],

    campaignsHeading: "Campanhas do ano",
    campaigns: [
      {
        name: "Inverno",
        when: "De maio a julho",
        body: "Cobertores, agasalhos, pijamas de flanela e meias de lã para crianças e idosos.",
      },
      {
        name: "Páscoa",
        when: "Nas semanas anteriores",
        body: "Ovos de chocolate arrecadados e uma confeitaria feita à mão pelos voluntários da Morada.",
      },
      {
        name: "Natal",
        when: "Em dezembro",
        body: "Festa para cerca de 500 crianças, com brinquedos, roupas, comida e apresentação — e cesta reforçada para os pais.",
      },
    ],

    helpHeading: "Como ajudar",
    help: [
      {
        title: "Doar alimentos e agasalhos",
        body: "Alimentos não perecíveis dentro da validade, roupas em bom estado, cobertores e enxovais de bebê. A entrega é feita na sede, na Rua José Paulino, 1934.",
      },
      {
        title: "Ser voluntário na coleta",
        body: "A coleta sai aos sábados e domingos, às 9h, da própria sede. Não é preciso experiência nem ser espírita — é preciso chegar no horário.",
      },
      {
        title: "Falar com a Morada antes",
        body: `Para doações grandes, entregas fora de horário ou dúvidas sobre o que está faltando no mês, mande mensagem no Facebook da Morada. Se preferir falar, ligue para ${site.phone.display}.`,
      },
    ],
    helpNote:
      "A Morada não faz campanha de arrecadação em dinheiro por este site. Doações são de itens, entregues na sede.",
  },

  spiritism: {
    title: "Espiritismo",
    description:
      "O que é o Espiritismo codificado por Allan Kardec: as cinco obras básicas, os princípios de Deus, imortalidade, comunicabilidade dos Espíritos, reencarnação e pluralidade dos mundos, e como a Morada Espírita Professor Lairi Hans os pratica em Campinas.",
    heading: "Espiritismo",
    lead: "A doutrina que a Morada segue, em linguagem direta: o que ela afirma, o que ela não promete e o que disso vira trabalho aqui dentro.",

    seedQuote: {
      text: "Pois o que o homem semear, isso também colherá.",
      source: "Gálatas 6:7",
    },
    seedBody: `Trabalho e amor ao próximo: é o que a Morada lê nessa frase, e é o que o Professor Lairi Hans repetia aos trabalhadores. Não como ameaça de má colheita, mas como método. O que se planta em alimento, em visita e em escuta é o que sustenta o trabalho desde ${site.foundedYear}.`,

    basicsHeading: "O que é",
    basicsBody: [
      "O Espiritismo foi codificado na França por Allan Kardec, pseudônimo do professor Hippolyte Léon Denizard Rivail, a partir de 1857. Não foi inventado: Kardec reuniu e comparou milhares de respostas obtidas por médiuns diferentes, em lugares diferentes, e publicou apenas o que era coerente entre elas.",
      "Ele se apresenta ao mesmo tempo como ciência, filosofia e religião — ciência porque estuda um fato observável, filosofia porque tira dele consequências morais, e religião porque essas consequências levam ao Evangelho. Não tem clero, não tem sacramento, não tem hierarquia. Ninguém se batiza espírita e ninguém é filiado.",
      "A moral que ele adota é a de Jesus. O que o Espiritismo acrescenta não é uma nova regra de conduta, mas uma explicação para a antiga: por que somos desiguais ao nascer, por que o sofrimento não é arbitrário e por que a caridade não é gentileza opcional.",
    ],

    gospelHeading: "Tudo parte do Evangelho",
    gospelBody: [
      "O Espiritismo não trouxe uma moral nova. A que ele adota é a do Evangelho, e Kardec foi explícito nisso: a doutrina vem confirmar os ensinamentos de Jesus, não substituí-los. O que ela acrescenta é explicação — por que a lei de amar o próximo é lei, e não conselho.",
      "Jesus é tomado como modelo e guia. Não como objeto de culto: aqui não há altar, não há sacramento e não se reza a imagem nenhuma. O quadro está na parede da Morada pelo mesmo motivo que a frase do mentor está em todas as outras — para lembrar quem trabalha ali o que se combinou seguir.",
      "É desse ensino que sai o resto. “Fora da caridade não há salvação” é conclusão cristã antes de ser máxima espírita, e é ela que põe a cesta de alimentos no mesmo nível da reunião de estudo. Amar o próximo, perdoar, servir sem cobrar e não julgar são as regras práticas desta casa porque são as do Evangelho.",
    ],
    gospelQuote: {
      text: "Amai-vos uns aos outros como eu vos amei.",
      source: "João 13:34",
    },
    gospelImageAlt:
      "Pintura de Jesus com a mão direita erguida em bênção e dois feixes de luz, um vermelho e um claro, saindo do peito",

    worksHeading: "As cinco obras básicas",
    worksNote:
      "É o conjunto que a Morada toma como referência. Todas foram publicadas por Allan Kardec entre 1857 e 1868 e continuam em catálogo em português.",
    works: [
      {
        year: "1857",
        title: "O Livro dos Espíritos",
        body: "A obra que abre a codificação, em 1.019 perguntas e respostas. Trata de Deus, da criação, da vida espiritual e das leis morais. É por onde se começa.",
      },
      {
        year: "1861",
        title: "O Livro dos Médiuns",
        body: "O manual prático da mediunidade: como se dá o intercâmbio com os Espíritos, quais são os tipos de médium e quais os cuidados de quem trabalha numa reunião.",
      },
      {
        year: "1864",
        title: "O Evangelho segundo o Espiritismo",
        body: "A parte moral do Evangelho explicada à luz da doutrina. É o livro mais lido nas casas espíritas e o que fundamenta as reuniões de estudo.",
      },
      {
        year: "1865",
        title: "O Céu e o Inferno",
        body: "Examina a justiça divina e desmonta a ideia de penas eternas. As consequências dos atos são reparadoras, não vingativas.",
      },
      {
        year: "1868",
        title: "A Gênese",
        body: "Trata da origem do mundo, dos milagres e das predições segundo o Espiritismo, procurando acordo entre a doutrina e a ciência de seu tempo.",
      },
    ],

    principlesHeading: "Os princípios",
    principlesNote:
      "Cinco afirmações sustentam o resto. Nenhuma delas exige que se abandone outra crença para ser examinada.",
    principles: [
      {
        name: "Deus",
        body: "Inteligência suprema, causa primeira de todas as coisas. Não é figura humana, não faz preferência entre pessoas e não é acessível por barganha.",
      },
      {
        name: "Imortalidade do espírito",
        body: "A morte encerra o corpo, não o ser. O que segue depois é a mesma pessoa, com a mesma consciência e as mesmas dívidas.",
      },
      {
        name: "Comunicabilidade dos Espíritos",
        body: "É possível trocar com os desencarnados, e isso acontece por meio da mediunidade. Não é privilégio de ninguém, é faculdade, e exige estudo e disciplina.",
      },
      {
        name: "Reencarnação",
        body: "O espírito volta a nascer quantas vezes precisar. É o que explica a desigualdade das condições ao nascer sem recorrer a um Deus injusto.",
      },
      {
        name: "Pluralidade dos mundos habitados",
        body: "A vida não está confinada à Terra, e o progresso do espírito não se encerra aqui.",
      },
    ],

    houseHeading: "Como isso vira trabalho na Morada",
    houseNote:
      "Doutrina que não sai do papel não interessa à Morada. Cada princípio acima tem uma prática correspondente aqui dentro.",
    house: [
      {
        title: "Caridade antes de doutrina",
        body: "Se fora da caridade não há salvação, o alimento vem antes do argumento. Por isso o trabalho de rua e as 3,5 toneladas por mês existem no mesmo pé que as reuniões de estudo — e por isso ninguém é atendido em troca de frequentar.",
      },
      {
        title: "Nada se cobra, nada se vende",
        body: "A mediunidade é faculdade, não mercadoria. A Morada não cobra por consulta, passe ou água fluidificada, não aceita pagamento por eles e não vende objeto nenhum com promessa de efeito espiritual.",
      },
      {
        title: "Disciplina como alicerce",
        body: "O intercâmbio com a espiritualidade depende do ambiente. É o que sustenta as regras de comportamento da Morada e a hora em que a porta se fecha: começou o trabalho, ninguém mais entra.",
      },
      {
        title: "Estudo que não termina",
        body: "A escola de médiuns da Morada parte das obras de Kardec e segue por níveis. Como dizia o Professor Lairi Hans, o estudo não termina nunca — ninguém se diploma na parte espiritual.",
      },
      {
        title: "Sem exigência de credo",
        body: "O atendimento é aberto a qualquer pessoa, de qualquer religião ou de nenhuma, e ninguém será convidado a mudar de crença. Quem chega por sofrimento não precisa aceitar doutrina para ser recebido.",
      },
      {
        title: "Nunca no lugar do médico",
        body: "O Espiritismo não faz diagnóstico e não substitui tratamento de saúde. A Morada nunca recomenda interromper medicação, e orienta procurar médico sempre.",
      },
    ],

    limitsHeading: "O que o Espiritismo não é",
    limits: [
      "Não é cura garantida. A Morada não promete resultado e não trata doença no lugar da medicina.",
      "Não é adivinhação. Não se lê o futuro, não se joga carta e não se cobra por revelação.",
      "Não é magia, feitiço nem trabalho contra alguém. Nada aqui se faz para prejudicar.",
      "Não é seita: não há filiação, não há dízimo e ninguém fica devendo presença.",
      "Não é conversão. Ninguém precisa deixar sua religião para ser atendido na Morada.",
    ],

    readHeading: "Por onde começar",
    readBody:
      "As obras de Kardec estão em domínio público em português e são fáceis de encontrar. Quem prefere começar pela conversa pode vir a um dia de atendimento e perguntar: sempre há trabalhador disponível para explicar sem pressa.",
    readCta: "Ver os dias de atendimento",
    historyCta: "Conhecer a história da Morada",
  },

  /* --- Evangelho online --------------------------------------------------- */

  gospelOnline: {
    title: "Evangelho online",
    description:
      "Evangelho online da Morada Espírita Professor Lairi Hans, transmitido ao vivo no mesmo horário das preces em Campinas. Vídeo disponível por 30 minutos.",
    heading: "Evangelho online",
    lead: "O Evangelho da Morada, ao vivo, no mesmo horário das preces feitas na casa. O vídeo fica disponível por 30 minutos a partir do início.",

    scheduleHeading: "Quando",
    scheduleNote:
      "O evangelho online acontece ao mesmo tempo que as preces realizadas na Morada, nos horários de atendimento.",

    accessHeading: "Como assistir",
    accessBody:
      "O evangelho é transmitido em evangelho.morada.org.br, no mesmo horário das preces realizadas na Morada. O vídeo fica disponível por 30 minutos a partir do início — sem login e sem custo.",
    accessCta: "Acessar evangelho.morada.org.br",
    accessNote: "O link é sempre o mesmo. Vale guardar nos favoritos.",

    guidanceHeading: "Orientações para o evangelho online",
    guidanceLead:
      "Algumas orientações para que você aproveite da melhor forma os abençoados recursos que a espiritualidade concede nesse momento de prece.",
    guidance: [
      {
        title: "Maca espiritual: alívio e cura",
        body: "A Morada é uma casa de cura, que tem elevadas entidades médicas. A maca traz aos irmãos mentalizados o alívio, o fortalecimento e, se for permitido pelo nosso Pai, a cura. Mentalize as pessoas conhecidas que estão necessitadas dessa vibração, doentes da matéria ou do espírito — e mentalize-se também, deitado na maca, saudável, sereno, envolvido em luz. Faça isso com fé, sentindo a vibração que penetra no espírito, com o pensamento elevado ao nosso Pai.",
      },
      {
        title: "Cesta de vibração: luz e fortalecimento",
        body: "Nesse momento, as pessoas que têm o nome mentalizado recebem vibrações de força, paz, amor, fé, equilíbrio e alívio de suas aflições. Representa um grande fortalecimento para o cotidiano, renovando em nosso espírito o positivo e a coragem.",
      },
      {
        title: "Flor, símbolo da parte espiritual",
        body: "A flor é o símbolo da parte espiritual e, durante o evangelho, recebe as vibrações do nosso Pai. Mentalize uma pétala dessa flor, destacada e colocada em seu coração: ela é amor, paz, força e luz para o seu espírito. Nos momentos de dificuldade, lembre-se de que há essa pétala no seu espírito, trazendo as vibrações da espiritualidade e as bênçãos do nosso Pai em seu amparo.",
      },
      {
        title: "Água fluidificada: fortalecimento para a matéria e o espírito",
        body: "Antes do evangelho, coloque um copo ou uma jarra de água no local onde fará a prece, para que essa água receba a fluidificação das correntes espirituais da Morada. Essas vibrações são bálsamo de fortalecimento, equilíbrio e purificação.",
      },
    ],

    closingHeading: "Participe do próximo evangelho online",
    closingBody: "O acesso é o mesmo em todos os dias de trabalho da Morada. Qualquer dúvida, fale com a gente.",
    closingCta: "Acessar evangelho.morada.org.br",
  },

  /* --- Página em preparação (ver `draftPages` em i18n/config.ts) --------- */
  /* `lead` é o único texto próprio dela por enquanto. Substitua os quatro
     campos quando o conteúdo chegar. */

  chacara: {
    title: "Chácara da Morada",
    description:
      "A Chácara da Morada Espírita Professor Lairi Hans. Página em preparação.",
    heading: "Chácara da Morada",
    lead: "Esta página vai reunir o que acontece na Chácara da Morada.",
  },

  /* --- Loja da Morada ------------------------------------------------- */

  shop: {
    title: "Loja da Morada",
    description:
      "Loja da Morada: produtos artesanais, óleos e cuidados da Gota de Cura, feira da Chácara da Mãe Luzia, padaria e pastéis fritos na hora aos sábados, em Campinas. Toda a renda é revertida para a caridade.",
    heading: "Loja da Morada",
    lead: "Produtos artesanais, alimentos cultivados na própria Chácara e cuidado para o corpo — tudo em um só lugar, com toda a renda revertida para os trabalhos assistenciais da Morada.",
    missionNote: "Toda a renda ajuda famílias de Campinas",

    introBody: [
      "A Loja da Morada reúne, em um só lugar, diferentes iniciativas que valorizam o trabalho artesanal, a produção local, a alimentação saudável, o cuidado e, principalmente, as pessoas.",
      "Toda a renda obtida pela Loja é revertida para os trabalhos de manutenção da Morada e para as ações assistenciais junto a famílias carentes da região de Campinas.",
      "Cada produto adquirido, cada pastel compartilhado e cada visita contribuem para que esse trabalho continue e para que mais famílias possam ser acolhidas.",
    ],
    introNote: "Comprar na Loja da Morada é também uma forma de contribuir.",
    introImageAlt:
      "Entrada da Loja da Morada, com as bandeiras da Feirinha, do Artesanato e da Gota de Cura",

    /*
     * A ordem importa: o componente casa cada item com uma imagem em
     * `images.shop` pela posição no array, não pelo nome. Adicionar, remover
     * ou reordenar um item aqui exige o mesmo ajuste em src/components/pages/shop.tsx.
     */
    offeringsHeading: "O que você encontra",
    saturdayOnlyBadge: "Só aos sábados",
    offeringWebsiteCta: "Catálogo e pedidos",
    offerings: [
      {
        id: "gotaDeCura",
        name: "Gota de Cura",
        saturdayOnly: false,
        body: "Produtos artesanais voltados ao cuidado e ao bem-estar, inspirados na aromaterapia e no poder das plantas: óleos essenciais, hidrolatos, águas de colônia, sais de banho, sabonetes e outras preparações artesanais, desenvolvidas com atenção aos ingredientes e aos processos de produção.",
        imageAlt:
          "Prateleiras da Gota de Cura com óleos essenciais, sabonetes e outros produtos de aromaterapia",
      },
      {
        id: "bazar",
        name: "Bazar",
        saturdayOnly: false,
        body: "O Bazar da Morada valoriza o trabalho manual, a criatividade e os talentos das nossas trabalhadoras: peças de crochê, bordados, costuras, trabalhos em tecido e outras criações feitas à mão. Ao escolher um produto do Bazar, você também ajuda a sustentar os projetos assistenciais da Morada.",
        imageAlt:
          "Sala do Bazar com almofadas, toalhas bordadas e imagens em cerâmica expostas em prateleiras e sobre a mesa",
      },
      {
        id: "feiraChacara",
        name: "Feira da Chácara da Mãe Luzia",
        saturdayOnly: true,
        body: "Produtos cultivados diretamente na Chácara da Mãe Luzia, com cuidado e sem o uso de agrotóxicos — frescos, próximos da natureza e respeitando os ciclos do plantio e da colheita.",
        imageAlt:
          "Banca da Feira da Chácara Mãe Luzia com verduras, ovos e temperos frescos, e o quadro de preços ao fundo",
      },
      {
        id: "padaria",
        name: "Padaria Mãe Luzia",
        saturdayOnly: true,
        body: "Pão e outros produtos preparados com carinho, com sabores que remetem à comida feita para compartilhar e reunir pessoas ao redor da mesa.",
        imageAlt:
          "Bolo, biscoitos e geleia caseira da Padaria Mãe Luzia sobre a mesa, ao lado de uma caneca com o nome da padaria",
      },
      {
        id: "pasteis",
        name: "Pastéis fritos na hora",
        saturdayOnly: true,
        body: "Pastéis preparados e fritos na hora, para aproveitar aquele sabor de pastel quentinho enquanto você visita a Feira ou a programação da Morada.",
        imageAlt: "Fileiras de pastéis dourados, recém-fritos, empilhados numa forma",
      },
    ],

    eventsHeading: "Eventos e confraternizações",
    eventsBody:
      "Ao longo do ano, a Morada também promove eventos de confraternização temáticos, com música, comidas especiais e atividades para reunir famílias, amigos e toda a comunidade — e que ajudam a fortalecer o trabalho que a Morada desenvolve o ano inteiro.",

    juneHeading: "Festa Junina da Morada",
    juneWhen: "Todos os sábados de junho",
    juneBody:
      "Durante todos os sábados de junho, a Morada ganha um clima ainda mais especial com a tradicional Festa Junina: uma programação cheia de atrações, comidas típicas e muitas surpresas.",
    juneAttractions: [
      "Música ao vivo",
      "Bingo",
      "Comidas típicas",
      "Pastéis fritos na hora",
      "Confraternização",
      "Surpresas e novidades",
    ],
    juneImageAlt: "Árvore do quintal da Morada decorada com bandeirinhas, flores e enfeites da Festa Junina",

    instagramHeading: "Acompanhe a Loja no Instagram",
    instagramBody:
      "Novidades da Feira, do Bazar, da Gota de Cura e dos eventos da Loja, sempre em @lojadamorada.",
    instagramCta: "Seguir no Instagram",

    helpHeading: "Seu consumo também ajuda",
    helpBody:
      "Toda a renda obtida na Loja da Morada é destinada à manutenção dos trabalhos e às ações assistenciais voltadas a famílias carentes da região de Campinas. Sua compra ajuda a manter esse trabalho e a levar auxílio a quem mais precisa.",
    helpNote: "Você escolhe o que levar. A sua compra ajuda a cuidar de alguém.",
    helpCta: "Conhecer o trabalho de caridade",

    scheduleHeading: "Horários de funcionamento",
    scheduleWeekdaysLabel: "Segunda a sexta-feira",
    scheduleSaturdayLabel: "Sábados",
    scheduleSaturdayNote:
      "A Feira da Chácara da Mãe Luzia, a Padaria Mãe Luzia e os pastéis fritos na hora funcionam exclusivamente aos sábados.",
    scheduleEventsNote:
      "Eventos e confraternizações podem ter programação e horários próprios, divulgados nas redes da Morada.",

    closingHeading: "Venha conhecer a nossa loja",
    closingBody:
      "Seja para escolher produtos artesanais, levar alimentos frescos da Chácara, aproveitar a padaria, comer um pastel quentinho ou participar de um dos eventos, a Loja da Morada está de portas abertas para receber você.",
  },

  history: {
    title: "Nossa história",
    description:
      "A Morada Espírita Professor Lairi Hans foi fundada em 29 de outubro de 1980 em Campinas. Seis casas em 45 anos, a sede erguida em mutirão, a cápsula do tempo lacrada até 2082 e a história de Mãe Luzia.",
    heading: "Nossa história",
    lead: "Começou com seis médiuns numa edícula emprestada. Passou por seis endereços, teve a primeira sede própria desapropriada e ergueu a atual em mutirão. Nunca recebeu ajudas externas.",

    timelineHeading: "Linha do tempo",
    timeline: [
      {
        year: "1980",
        title: "A fundação",
        body: "Em 29 de outubro, Luzia Pacubi, Heloísa de Oliveira Bueno, Maria Aparecida Nogueira de Sá e Orlando Gache fundam a Morada. O atendimento começa numa edícula modesta, com seis médiuns.",
      },
      {
        year: "1980–2004",
        title: "Vinte e quatro anos de orientação",
        body: "Toda a orientação da Morada vem do Professor Lairi Hans, que se manifesta por quase 24 anos através da médium Luzia Pacubi — sua filha espiritual de várias encarnações.",
      },
      {
        year: "Anos 80 e 90",
        title: "Seis casas",
        body: "Barão de Jaguara, Antônio Cesarino, Luzitana, Álvares Machado. A primeira sede própria, comprada e reformada em trabalho voluntário, é desapropriada por uma obra da prefeitura. Com a indenização insuficiente e os recursos que tinha, a Morada compra a casa da Rua José Paulino, 1936.",
      },
      {
        year: "Anos 90",
        title: "Os canteiros espirituais",
        body: "Para germinar em vários pontos da cidade, a Morada abre outras casas de atendimento — o Professor Lairi Hans as chamava de canteiros espirituais. Cada canteiro que se abria era mais um jardim de cura, de amor, de fé e de doação.",
      },
      {
        year: "2000–2002",
        title: "A sede, em mutirão",
        body: "A casa vizinha é comprada e demolida, e no número 1.934 da mesma rua sobe a sede atual. A obra é dividida em duas etapas e leva dois anos de mutirões feitos pelos próprios trabalhadores da Morada. Nenhuma etapa teve ajudas externas.",
      },
      {
        year: "2002",
        title: "A cápsula e a corrente única",
        body: "Em 27 de abril, uma cápsula do tempo é lacrada no subsolo do prédio, para ser aberta em 2082. Terminada a sede, os canteiros são desativados para que todos os trabalhadores ficassem numa corrente só.",
      },
      {
        year: "Hoje",
        title: "O trabalho continuado",
        body: "Cerca de 3,5 toneladas de alimentos por mês para idosos, doentes e crianças dos bairros de periferia. O projeto seguinte é um lar para idosos e crianças.",
      },
    ],

    housesHeading: "As casas da Morada",
    housesLead:
      "As fotografias que a Morada guarda de cada endereço por onde passou, da edícula de 1980 à sede erguida em mutirão.",
    houses: [
      {
        src: "/images/historia/casa-1-barao-de-jaguara.jpg",
        width: 494,
        height: 406,
        title: "1ª Morada",
        caption: "Rua Barão de Jaguara, 108 — Campinas",
        alt: "Edícula de parede caiada com a placa da Morada Espírita ao lado da porta",
      },
      {
        src: "/images/historia/casa-2-antonio-cesarino.jpg",
        width: 252,
        height: 350,
        title: "2ª Morada",
        caption: "Rua Antônio Cesarino — Campinas",
        alt: "Casa térrea com sacada de balaústres e a placa da Morada na fachada",
      },
      {
        src: "/images/historia/casa-3-luzitana.jpg",
        width: 492,
        height: 406,
        title: "3ª Morada",
        caption: "Rua Luzitana, 1652 — Campinas",
        alt: "Fachada clara em esquina, com a placa da Morada entre duas janelas",
      },
      {
        src: "/images/historia/casa-4-alvares-machado.jpg",
        width: 350,
        height: 247,
        title: "4ª Morada",
        caption: "Rua Álvares Machado — Campinas. A primeira sede própria, depois desapropriada",
        alt: "Casa de esquina caiada de branco, vista da calçada de paralelepípedo",
      },
      {
        src: "/images/historia/casa-5-jose-paulino-1936.jpg",
        width: 405,
        height: 497,
        title: "5ª Morada",
        caption: "Rua José Paulino, 1936 — Campinas. A segunda sede própria",
        alt: "Fachada de sobrado com portas de grade e a placa da Morada acima da janela",
      },
      {
        src: "/images/historia/casa-5-casa-ao-lado.jpg",
        width: 615,
        height: 403,
        title: "A casa ao lado",
        caption: "Rua José Paulino, 1936. Com muito esforço, a Morada compra o imóvel vizinho",
        alt: "Duas casas geminadas com a faixa “sede própria — em ampliação” na fachada",
      },
      {
        src: "/images/historia/casa-6-jose-paulino-1934.jpg",
        width: 427,
        height: 280,
        title: "6ª Morada",
        caption: "Rua José Paulino, 1934 — a sede atual, construída pelos próprios trabalhadores",
        alt: "Prédio branco de dois pavimentos com o nome da Morada na fachada e grade na frente",
      },
      {
        src: "/images/historia/capsula-do-tempo.jpg",
        width: 472,
        height: 708,
        title: "A cápsula do tempo",
        caption: "27 de abril de 2002. O cofre no subsolo, antes de ser coberto com concreto",
        alt: "Cofre aberto no piso de concreto do subsolo, com a caixa de cerâmica dentro",
      },
    ],

    capsuleHeading: "A cápsula do tempo",
    capsuleBanner:
      "A cápsula lacrada no subsolo da sede em 27 de abril de 2002 só pode ser aberta 80 anos depois.",
    capsuleBody: [
      "É um procedimento sem precedente entre casas espíritas: guardar a memória da Morada para que as gerações seguintes conheçam o começo desta caminhada. A cápsula foi idealizada pela própria espiritualidade, e o que entrou nela foi escolhido item por item.",
      "As fotografias foram impressas em papel selecionado e o relato da história foi escrito à mão, a grafite, em papel especial. Tudo foi fechado em saco plástico de alta resistência, tratado por uma semana em atmosfera de nitrogênio, selado em nitrogênio seco e lacrado com cera de abelha dentro de uma caixa de cerâmica.",
      "A caixa foi posta no cofre do subsolo, o espaço foi saturado de nitrogênio e o recipiente, coberto de concreto. Sobre o cofre há uma placa com a data: 27 de abril de 2002. A cápsula só pode ser aberta 80 anos depois.",
    ],

    mentorHeading: "Professor Lairi Hans",
    mentorBody:
      "A Morada leva o nome de seu mentor espiritual: uma entidade médica desencarnada em 1678, aos 51 anos, na Alemanha. Suas encarnações foram marcadas pela renúncia de si mesmo, pelo amor ao próximo e pela dedicação incansável à cura dos doentes. Foi ele quem conduziu Luzia Pacubi a fundá-la, e é dele o ensino que a Morada guarda inteiro — humildade como força, disciplina como alicerce, e a frase que está em todas as paredes.",
    mentorQuote: "Se você der a sua migalha, é um a menos que vai sofrer.",
    mentorImageAlt:
      "Retrato pintado do Professor Lairi Hans, de jaleco e touca brancos, sobre fundo ocre",

    founderHeading: "Mãe Luzia",
    founderBody:
      "Luzia Pacubi tornou-se espírita aos 18 anos e dedicou mais de seis décadas ao trabalho mediúnico e às causas cristãs. Foi por ela que o Professor Lairi Hans se manifestou durante quase 24 anos. Em 2002, aos 77 anos, definia o Espiritismo como “uma purificação do ser humano para uma nova reencarnação”. Na placa que os trabalhadores lhe dedicaram em fevereiro de 1986, ela é a pedra angular desta Morada.",
    founderQuote:
      "Fora da caridade não há salvação, porque o Pai coloca em nossas mãos uma semente a ser plantada.",
    founderImageAlt:
      "Retrato pintado de Mãe Luzia, sorrindo, de blusa branca, sobre fundo ocre",

    disciplineHeading: "Disciplina",
    disciplineQuote: "Onde não há disciplina, não estão presentes os mensageiros de luz.",
    disciplineBody:
      "Disciplina, trabalho e doação são as marcas da Morada. Seu vínculo principal é a cura, e para que as vibrações sejam recebidas a purificação do ambiente é condição indispensável. Foi por isso que o Professor Hans fez da disciplina de comportamento e de procedimento o alicerce de tudo o que se faz aqui.",

    symbolHeading: "Nosso símbolo",
    symbolBody:
      "A flor é o símbolo da parte espiritual. As rosas brancas, azuis e cor-de-rosa são o símbolo da Morada na espiritualidade.",
    symbolColors: [
      { name: "Cor-de-rosa", meaning: "o Amor" },
      { name: "Azul", meaning: "a Cura e a Fé" },
      { name: "Branco", meaning: "a Paz" },
    ],
  },

  messages: {
    title: "Mensagens",
    description:
      "Mensagens e pensamentos guardados pela Morada Espírita Professor Lairi Hans: Chico Xavier, Professor Lairi Hans e Mãe Luzia.",
    heading: "Mensagens",
    lead: "Trechos que a Morada guarda e relê. Estão aqui como foram recebidos, sem comentário.",
    sections: [
      {
        author: "Professor Lairi Hans",
        note: "Mentor espiritual da Morada",
        quotes: [
          "Não há nada que o amor não vença.",
          "Se você der a sua migalha, é um a menos que vai sofrer.",
          "A humildade não é fraqueza. É a força de que se precisa para começar a sarar.",
          "Em casa, converse com amor em vez de mandar.",
          "Doe alegria aos idosos, ensine amor às crianças, cuide de quem está doente.",
        ],
      },
      {
        author: "Chico Xavier",
        note: "Médium e escritor brasileiro (1910–2002)",
        quotes: [
          "O Cristo não pediu muita coisa, não exigiu que as pessoas escalassem o Everest ou fizessem grandes sacrifícios.",
          "Nenhuma atividade no bem é insignificante. As mais altas árvores são oriundas de minúsculas sementes.",
          "Nunca quis mudar a religião de ninguém, porque não acredito que a religião a seja melhor que b.",
          "Devemos orar pelos políticos, pelos administradores da vida pública. A tentação do poder é muito grande.",
          "A questão mais aflitiva para o espírito no Além é a consciência do tempo perdido.",
          "Uma das mais belas lições que tenho aprendido com o sofrimento: não julgar. Definitivamente, não julgar.",
        ],
      },
      {
        author: "Mãe Luzia",
        note: "Luzia Pacubi, fundadora da Morada",
        quotes: [
          "Fora da caridade não há salvação, porque o Pai coloca em nossas mãos uma semente a ser plantada.",
          "O Espiritismo é uma purificação do ser humano para uma nova reencarnação.",
        ],
      },
    ],
  },

  events: {
    title: "Eventos",
    description:
      "Agenda permanente da Morada Espírita Professor Lairi Hans em Campinas e campanhas de Inverno, Páscoa e Natal.",
    heading: "Eventos",
    lead: "O que acontece toda semana e o que volta todo ano. Datas de eventos extraordinários são anunciadas nas redes da Morada.",

    recurringHeading: "Toda semana",
    recurring: [
      {
        name: "Atendimento espiritual",
        when: "Quartas às 14h · quintas às 20h · sábados às 15h",
        href: "care" as const,
      },
      {
        name: "Coleta de alimentos",
        when: "Sábados e domingos, a partir das 9h",
        href: "charity" as const,
      },
      {
        name: "Evangelização infantojuvenil",
        when: "Domingos, das 9h30 às 11h15",
        href: "evangelization" as const,
      },
      {
        name: "Entrega de cestas",
        when: "Último domingo de cada mês",
        href: "charity" as const,
      },
    ],

    seasonalHeading: "Todo ano",

    emptyHeading: "Eventos extraordinários",
    emptyBody:
      "Não há eventos extraordinários marcados no momento. Palestras, festas e mutirões fora da agenda são anunciados nas redes sociais da Morada e no mural da sede.",
    emptyCta: "Acompanhar no Facebook",
  },

  directions: {
    title: "Como chegar",
    description:
      "A Morada Espírita Professor Lairi Hans fica na Rua José Paulino, 1934, Centro, Campinas/SP. Mapa, rota e telefone.",
    heading: "Como chegar",
    lead: "A Morada fica no Centro de Campinas, na Rua José Paulino, 1934.",

    addressHeading: "Endereço",
    mapHeading: "No mapa",
    mapTitle: "Mapa com a localização da Morada Espírita, Rua José Paulino, 1934, Campinas",
    mapFallback:
      "O mapa não pôde ser carregado. Use o botão de rota abaixo ou copie o endereço.",
    routeCta: "Abrir rota no Google Maps",
    openMapCta: "Ver no mapa",

    tipsHeading: "Na chegada",
    tips: [
      "A entrada é pela própria Rua José Paulino.",
      "A porta se fecha cinco minutos antes do começo — depois dela ninguém mais entra. Quem chega mais cedo é atendido mais cedo.",
      "Se estiver com dificuldade para encontrar a Morada, mande mensagem no Facebook ou ligue — alguém orienta na hora.",
    ],

    helpHeading: "Perdido no caminho?",
    helpBody: "Mande mensagem no Facebook da Morada. Se preferir falar por voz, o telefone está logo abaixo.",
  },

  contact: {
    title: "Contato",
    description:
      "Fale com a Morada Espírita Professor Lairi Hans: telefone (19) 3236-8544, Instagram, Facebook e endereço no Centro de Campinas.",
    heading: "Fale com a Morada",
    lead: "O caminho mais rápido é mandar mensagem no Facebook — é por lá que a Morada acompanha e responde.",

    facebookHeading: "No Facebook",
    facebookNote:
      "O canal principal da Morada. Mande mensagem na página e um voluntário responde. É também onde saem os avisos e as datas.",

    instagramHeading: "No Instagram",
    instagramNote: "Campanhas, fotos e o dia a dia do trabalho de caridade.",

    phoneHeading: "Por telefone",
    phoneNote:
      "Se você prefere falar por voz, ligue nos dias e horários de funcionamento da Morada.",

    visitHeading: "Pessoalmente",
    visitNote: "Você pode simplesmente aparecer em um dos horários de atendimento.",

    formHeading: "Por mensagem",
    formNote:
      "A resposta pode levar alguns dias — a Morada é mantida por voluntários. Se for urgente, fale pelo Facebook.",
    form: {
      name: "Seu nome",
      email: "Seu e-mail",
      emailHint: "Para podermos responder.",
      subject: "Assunto",
      subjectOptions: [
        "Atendimento espiritual",
        "Evangelização",
        "Doação",
        "Voluntariado",
        "Outro assunto",
      ],
      message: "Mensagem",
      submit: "Enviar mensagem",
      sending: "Enviando…",
      required: "obrigatório",
      errors: {
        name: "Escreva seu nome.",
        email: "Escreva um e-mail válido para podermos responder.",
        message: "Escreva sua mensagem.",
        summary: "Confira os campos marcados abaixo.",
        failed: `Não foi possível enviar agora. Tente de novo, fale pelo Facebook da Morada ou ligue para ${site.phone.display}.`,
      },
      successHeading: "Mensagem enviada.",
      successBody:
        "Obrigado por escrever. Vamos responder assim que possível — se for urgente, mande mensagem no Facebook da Morada.",
    },
  },

  footer: {
    houseLine: `${site.name} — casa espírita kardecista e entidade beneficente, fundada em 1980.`,
    careLine: "Atendimento espiritual gratuito, sem agendamento.",
    navHeading: "Páginas",
    visitHeading: "Visite",
    followHeading: "Fale com a Morada",
    rights: "Todos os direitos reservados.",
    builtBy: "Feito por voluntários.",
  },

  notFound: {
    title: "Página não encontrada",
    heading: "Esta página não existe.",
    body: "O endereço pode ter mudado. Você encontra tudo pelo início — ou fale com a Morada pelo Facebook, se preferir falar com alguém.",
  },
};

/** A estrutura do português é o contrato: qualquer outro idioma precisa preenchê-la inteira. */
export type Dictionary = typeof pt;
