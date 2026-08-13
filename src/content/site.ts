/**
 * Fatos da casa. Um lugar só.
 *
 * Mudou o telefone, o horário ou o endereço? É aqui — e em nenhum outro arquivo.
 * Os textos que envolvem esses dados vivem em src/i18n/dictionaries/.
 */

export const site = {
  name: "Morada Espírita Professor Lairi Hans",
  shortName: "Morada Espírita",
  foundedISO: "1980-10-29",
  foundedYear: 1980,

  address: {
    street: "Rua José Paulino, 1934",
    district: "Centro",
    city: "Campinas",
    state: "SP",
    postalCode: "13013-001",
    country: "BR",
    /** Coordenadas aproximadas da quadra, usadas no mapa e no JSON-LD. */
    lat: -22.9042,
    lon: -47.0623,
  },

  phone: {
    display: "(19) 3236-8544",
    e164: "+551932368544",
  },

  /**
   * Canal principal da casa é o Facebook — é lá que a Morada responde.
   * O telefone continua em todo lugar, uma linha abaixo: boa parte de quem
   * procura a casa tem mais de 60 anos e prefere falar por voz.
   */
  social: {
    facebook: "https://www.facebook.com/moradaespirita",
    facebookHandle: "/moradaespirita",
    instagram: "https://www.instagram.com/moradaespirita/",
    instagramHandle: "@moradaespirita",
  },

  /**
   * Atendimento espiritual. `day` segue o padrão schema.org.
   * Sem agendamento, sem custo.
   *
   * Três horas, e a que importa não é a do começo. A porta abre cerca de uma
   * hora e meia antes e **fecha cinco minutos antes de o trabalho começar** —
   * quem chega depois disso não é atendido naquele dia. Por isso `doorsClose`
   * é o número que o site destaca, e `starts` aparece só como explicação.
   *
   * A ordem de atendimento é a ordem de chegada. A casa não estima tempo de
   * espera e o site não inventa nenhum.
   */
  care: [
    { day: "Wednesday", dayIndex: 3, doorsOpen: "12:30", doorsClose: "13:55", starts: "14:00" },
    { day: "Thursday", dayIndex: 4, doorsOpen: "18:30", doorsClose: "19:55", starts: "20:00" },
    { day: "Saturday", dayIndex: 6, doorsOpen: "13:30", doorsClose: "14:55", starts: "15:00" },
  ],

  evangelization: {
    day: "Sunday",
    dayIndex: 0,
    opens: "09:30",
    closes: "11:15",
    ageGroups: 5,
  },

  /**
   * Evangelho online. Acontece junto com as preces da casa, nos mesmos dias e
   * horários de `care` — por isso a página reaproveita `CareSchedule` em vez
   * de duplicar os horários aqui.
   */
  gospelOnline: {
    url: "https://evangelho.morada.org.br",
    urlDisplay: "evangelho.morada.org.br",
    videoAvailableMinutes: 30,
  },

  /** Coleta de alimentos porta a porta. */
  collection: {
    days: ["Saturday", "Sunday"] as const,
    opens: "09:00",
  },

  /**
   * Loja da Morada. Segunda a sexta é um horário só; aos sábados a loja abre
   * mais cedo e é o único dia em que a Feira da Chácara, a Padaria e os
   * pastéis fritos na hora funcionam.
   *
   * Endereço próprio, ao lado da sede (que fica no 1934): a Loja tem porta
   * e número diferentes, por isso não usa `site.address`.
   */
  shop: {
    weekdays: { opens: "09:00", closes: "17:00" },
    saturday: { opens: "08:00", closes: "17:00" },
    address: {
      street: "Rua José Paulino, 1916",
      note: "Ao lado da Morada",
    },
    instagram: "https://www.instagram.com/lojadamorada/",
    instagramHandle: "@lojadamorada",

    /** A Gota de Cura tem site e Instagram próprios, além do espaço na Loja. */
    gotaDeCura: {
      website: "https://gotadecura.com.br",
      websiteDisplay: "gotadecura.com.br",
      instagram: "https://www.instagram.com/gotadecura_artesanais/",
      instagramHandle: "@gotadecura_artesanais",
    },
  },

  /**
   * Números da caridade. Aproximados e informados pela própria casa.
   * Confirmar antes de cada atualização do site.
   */
  figures: {
    foodPerMonthTons: 3.5,
    familiesPerMonth: 120,
    christmasChildren: 500,
    yearsOfWork: new Date().getFullYear() - 1980,
  },

  timeCapsule: {
    sealed: 2002,
    opens: 2082,
  },
} as const;

/** Google Maps aceita o endereço em texto; melhor que fixar um place_id que muda. */
export const mapsQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}`,
);

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
export const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

/** Mesma lógica de `mapsPlaceUrl`, para o endereço próprio da Loja. */
const shopMapsQuery = encodeURIComponent(
  `${site.shop.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}`,
);
export const shopMapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${shopMapsQuery}`;

/** OpenStreetMap embed — sem cookies de terceiros, sem chave de API. */
const bboxPad = 0.004;
export const osmEmbedUrl =
  `https://www.openstreetmap.org/export/embed.html?bbox=` +
  `${site.address.lon - bboxPad}%2C${site.address.lat - bboxPad}%2C` +
  `${site.address.lon + bboxPad}%2C${site.address.lat + bboxPad}` +
  `&layer=mapnik&marker=${site.address.lat}%2C${site.address.lon}`;
