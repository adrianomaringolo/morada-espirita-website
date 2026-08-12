import { site } from "@/content/site";
import type { Dictionary } from "./pt";

/**
 * English translation. Same shape as pt.ts — TypeScript enforces it.
 * Translated for meaning, not word by word: the English reader is usually
 * a researcher, a Spiritist abroad, or family of someone in Campinas.
 */
export const en: Dictionary = {
  meta: {
    siteName: site.name,
    tagline: "A Spiritist centre and charity in Campinas, Brazil, since 1980",
    defaultDescription:
      "Free spiritual care with no appointment in Campinas, Brazil: Wednesdays at 2pm, Thursdays at 8pm and Saturdays at 3pm — the doors close five minutes earlier. A Kardecist Spiritist centre and registered charity since 1980.",
  },

  nav: {
    home: "Home",
    care: "Spiritual care",
    evangelization: "Children's classes",
    charity: "Charity",
    spiritism: "Spiritism",
    gospelOnline: "Gospel online",
    chacara: "Country property",
    shop: "Shop",
    history: "Our history",
    messages: "Messages",
    events: "Events",
    directions: "How to find us",
    contact: "Contact",
    menuButton: "Menu",
    openMenu: "Open the full navigation menu",
    closeMenu: "Close menu",
    menuTitle: "All pages",
    menuNote: "Every page on the site, the house's channels, and the language.",
    skipToContent: "Skip to main content",
    languageLabel: "Language",
    primaryLabel: "Main navigation",
    footerLabel: "Footer navigation",
  },

  common: {
    free: "Free of charge",
    noBooking: "No appointment",
    openToAll: "Open to everyone",
    /* Facebook first everywhere: it is where the house answers. */
    messageFacebook: "Message on Facebook",
    seeInstagram: "See on Instagram",
    callHouse: `Call ${site.phone.display}`,
    orCall: "Prefer to call?",
    schedule: "Opening times",
    weekdays: {
      Sunday: "Sunday",
      Monday: "Monday",
      Tuesday: "Tuesday",
      Wednesday: "Wednesday",
      Thursday: "Thursday",
      Friday: "Friday",
      Saturday: "Saturday",
    },
    to: "to",
    /* The session start leads; the deadline to get in sits just below it. */
    doorsCloseAt: "doors close at",
    doorsOpenFrom: "open from",
    backHome: "Back to the home page",

    /*
     * Shared copy for the pages that have no content yet. When the Morada
     * provides text and photographs for one of them, write the real page and
     * remove its id from `draftPages` in src/i18n/config.ts, which is what
     * puts the page back into the sitemap and into indexing.
     */
    draft: {
      notice: "Page in preparation",
      body: "This page has no published content yet. It goes live as soon as the Morada has gathered the text and the photographs.",
      askHeading: "In the meantime",
      askBody: "If you need this information now, send a message on Facebook or call. Someone will answer and explain.",
      backCta: "See what is already online",
    },
  },

  home: {
    title: `${site.name} — Free spiritual care in Campinas, Brazil`,
    description:
      "A Kardecist Spiritist centre and registered charity in central Campinas, Brazil, since 1980. Free spiritual care with no appointment, Sunday classes for children, and 3.5 tonnes of food distributed every month.",

    hero: {
      heading: "Faith, love and charity",
      lead: `${site.name} has been open in central Campinas since 1980. Spiritual care is offered to anyone, of any religion or none.`,
      primaryCta: "How spiritual care works",
      secondaryCta: "How to find us",
      imageAlt:
        "The Morada's front on Rua José Paulino: the house's name in gold lettering on the white wall, beside the glass entrance",
    },

    schedule: {
      heading: "Spiritual care",
      note: "The session begins at the time shown, but the doors close five minutes earlier: after that, nobody else comes in. People are seen in the order they arrived.",
    },

    motto: {
      quote: "There is nothing that love cannot overcome.",
      author: "Professor Lairi Hans",
      role: "Spiritual mentor of the house",
    },

    charity: {
      heading: "Charity is the daily work of this house",
      body: "Every Saturday and Sunday, volunteers go door to door across Campinas collecting food. What comes in goes back out as food baskets, warm clothing and baby supplies for registered families — on the last Sunday of every month, for 45 years.",
      figures: [
        { value: "3.5 t", label: "of food distributed each month" },
        { value: "120", label: "families supported every month" },
        { value: "500", label: "children at the Christmas celebration" },
      ],
      cta: "See the charity work",
      imageAlt:
        "Two elderly people holding hands, against a field lit by late afternoon sun",
    },

    evangelization: {
      heading: "Sunday mornings belong to the children",
      body: "Five age groups, from 9.30 to 11.15 in the morning. Classes start from the Gospel and move through music, painting and real participation in the food collection. No need to be a Spiritist, and nothing is charged.",
      cta: "See the children's classes",
    },

    gospelOnline: {
      heading: "Can't come in person? Watch the Gospel online",
      body: "Streamed at the same time as in-person spiritual care, available for 30 minutes, from any device with an internet connection.",
      cta: "Watch the Gospel online",
    },

    seed: {
      quote: "For whatever one sows, that will he also reap.",
      source: "Galatians 6:7",
      body: "Work and love of neighbour: the Morada's motto, and what the Professor taught its volunteers over and over.",
      cta: "What Spiritism is",
      imageAlt:
        "A field of white, blue and pink roses stretching to the horizon under an open sky",
    },

    history: {
      heading: "Every brick raised by the hands and the sweat of the Morada's workers",
      body: `Founded on 29 October 1980 by four people and six mediums, the Morada has never had outside help. The present building was raised between 2000 and 2002 by volunteer labour alone. Beneath its floor lies a time capsule, sealed in ${site.timeCapsule.sealed} to be opened in ${site.timeCapsule.opens}.`,
      cta: "Read our history",
    },
  },

  care: {
    title: "Spiritual care",
    description:
      "Spiritual consultation, passe with chromotherapy and fluidified water in Campinas, Brazil. Wednesdays at 2pm, Thursdays at 8pm and Saturdays at 3pm; the doors close five minutes earlier. Free, no appointment needed.",
    heading: "Spiritual care",
    lead: "A consultation, a passe, and fluidified water. Nothing is booked, nothing is charged, and nobody is asked about their religion.",

    scheduleHeading: "When",
    scheduleNote:
      "The time shown is when the session begins. The doors close five minutes before it, and anyone arriving after that will not be seen that day — so allow yourself time. People are seen in the order they arrived: come earlier, be seen earlier. The house does not estimate waiting times.",

    whatHeading: "What happens",
    what: [
      {
        title: "Guidance in a spiritual consultation",
        body: "A private conversation with one of the house's mediums about what you are going through. Nobody has to say more than they want to.",
      },
      {
        title: "The passe, including chromotherapy",
        body: "A few minutes seated in silence, receiving the passe. It is brief, and there is no contact beyond the hands held close.",
      },
      {
        title: "Treatment with fluidified water",
        body: "You take home water prepared during the meeting, with guidance on how to drink it.",
      },
    ],

    beforeHeading: "Before you come",
    before: [
      "Do not drink alcohol on the day of the session.",
      "Please dress appropriately: men without shorts or sleeveless tops; women without short skirts or low-cut blouses.",
      "Bring a small bottle if you would like to take fluidified water home.",
      "Children and companions are welcome.",
    ],

    faqHeading: "Common questions",
    faq: [
      {
        q: "Do I need an appointment?",
        a: "No. Simply come on one of the session days, before the doors close. People are seen in the order they arrived.",
      },
      {
        q: "How much does it cost?",
        a: "Nothing. The Morada charges for no service and accepts no payment for it.",
      },
      {
        q: "Do I need to be a Spiritist?",
        a: "No. Spiritual care is offered to anyone, of any religion or none. Nobody will be asked to change what they believe.",
      },
      {
        q: "Does this replace medical treatment?",
        a: "No, under no circumstances. The house never advises stopping medication or medical treatment, and makes no diagnosis. Always see a doctor.",
      },
      {
        q: "Can I bring my children?",
        a: "Yes. On Sunday mornings there are also classes for children and young people, from 9.30 to 11.15.",
      },
      {
        q: "What if I cannot get there on my own?",
        a: `Message the house on Facebook at ${site.social.facebookHandle}, or call ${site.phone.display}. Someone is always willing to help work it out.`,
      },
    ],
  },

  evangelization: {
    title: "Classes for children and young people",
    description:
      "Sunday classes for children and young people, 9.30 to 11.15am, in five age groups. Free and open to all, in central Campinas, Brazil.",
    heading: "Classes for children and young people",
    lead: "Every Sunday, from 9.30 to 11.15 in the morning. Five groups divided by age, for children and teenagers.",
    groupsLabel: "groups, divided by age",
    imageAlt:
      "Children's crayon drawings spread across a table, with the open crayon box beside them",

    whatHeading: "What the children do",
    what: [
      {
        title: "Classes drawn from the Gospel",
        body: "Conversations about virtue, fellowship and faith, in the language of each age group — not as indoctrination.",
      },
      {
        title: "Real charity work",
        body: "The groups take part in collecting and sorting food. Learning to give is part of the lesson, not a talk about it.",
      },
      {
        title: "Music and painting",
        body: "There is an art activity every week. Most of what the children make goes home with them.",
      },
    ],

    joinHeading: "How to join",
    joinBody: `There is no enrolment, no fee and no waiting list. Bring your child on a Sunday, a few minutes before 9.30, and speak to the team at the entrance. If you would rather let us know in advance, message the house on Facebook — or call ${site.phone.display}.`,
  },

  charity: {
    title: "Charity",
    description:
      "Door-to-door food collection every Saturday and Sunday, 3.5 tonnes distributed each month to around 120 families, and Winter, Easter and Christmas campaigns in Campinas, Brazil.",
    heading: "Charity",
    lead: "Every month, around 3.5 tonnes of food leave this house for families across Campinas. None of it comes from outside help: it comes from knocking on doors.",

    quote: {
      text: "Outside of charity there can be no salvation, because the Father places in our hands a seed to be planted.",
      author: "Luzia Pacubi (Mãe Luzia)",
      role: "Founder of the Morada",
    },

    figuresHeading: "The work in numbers",
    figuresNote:
      "Approximate figures, provided by the house itself and reviewed periodically.",

    howHeading: "How it works",
    how: [
      {
        step: "Collection",
        body: "On Saturdays and Sundays at 9am, volunteers gather, say a prayer, and set out door to door through the neighbourhoods of Campinas. Everyone wears an identification badge.",
      },
      {
        step: "Sorting",
        body: "What is collected comes back to the house, is checked against expiry dates and packed into baskets.",
      },
      {
        step: "Registration and home visits",
        body: "Volunteers identify vulnerable households in outlying neighbourhoods through interviews and home visits. Priority goes to families with many children, people who are ill, and elderly people without support.",
      },
      {
        step: "Distribution",
        body: "On the last Sunday of each month, registered families receive food baskets, clothing and baby supplies. Support continues until a family can stand on its own.",
      },
    ],

    campaignsHeading: "Campaigns through the year",
    campaigns: [
      {
        name: "Winter",
        when: "May to July",
        body: "Blankets, warm clothing, flannel pyjamas and wool socks for children and elderly people.",
      },
      {
        name: "Easter",
        when: "In the weeks before",
        body: "Donated chocolate eggs, and a confectionery display made by hand by the house's volunteers.",
      },
      {
        name: "Christmas",
        when: "In December",
        body: "A celebration for around 500 children, with toys, clothes, food and entertainment — and a larger basket for their parents.",
      },
    ],

    helpHeading: "How to help",
    help: [
      {
        title: "Donate food and warm clothing",
        body: "Non-perishable food within its expiry date, clothing in good condition, blankets and baby supplies. Donations are delivered to the house, at Rua José Paulino, 1934.",
      },
      {
        title: "Volunteer on the collection",
        body: "The collection leaves the house at 9am on Saturdays and Sundays. No experience is needed, and you do not have to be a Spiritist — you do have to arrive on time.",
      },
      {
        title: "Speak to the house first",
        body: `For large donations, deliveries outside opening times, or to ask what is short this month, message the house on Facebook. If you would rather speak, call ${site.phone.display}.`,
      },
    ],
    helpNote:
      "The Morada does not run any monetary fundraising through this website. Donations are goods, delivered to the house.",
  },

  spiritism: {
    title: "Spiritism",
    description:
      "What Spiritism, codified by Allan Kardec, actually holds: the five foundational works, the principles of God, immortality, communication with spirits, reincarnation and the plurality of inhabited worlds, and how Morada Espírita Professor Lairi Hans puts them to work in Campinas, Brazil.",
    heading: "Spiritism",
    lead: "The doctrine this house follows, in plain terms: what it claims, what it does not promise, and what part of it becomes work inside these walls.",

    seedQuote: {
      text: "For whatever one sows, that will he also reap.",
      source: "Galatians 6:7",
    },
    seedBody: `Work and love of neighbour: that is what the Morada reads in this line, and what Professor Lairi Hans repeated to its volunteers. Not as a threat of a bad harvest, but as a method. What is sown in food, in visits and in listening is what has sustained the work since ${site.foundedYear}.`,

    basicsHeading: "What it is",
    basicsBody: [
      "Spiritism was codified in France by Allan Kardec, the pen name of the teacher Hippolyte Léon Denizard Rivail, from 1857 onwards. He did not invent it: he gathered and compared thousands of answers obtained through different mediums in different places, and published only what held up across all of them.",
      "It presents itself as science, philosophy and religion at once: science because it studies an observable fact, philosophy because it draws moral consequences from it, religion because those consequences lead back to the Gospel. It has no clergy, no sacraments and no hierarchy. Nobody is baptised a Spiritist and nobody is enrolled.",
      "The morality it adopts is that of Jesus. What Spiritism adds is not a new rule of conduct but an explanation for the old one: why we are unequal at birth, why suffering is not arbitrary, and why charity is not optional kindness.",
    ],

    gospelHeading: "It all starts with the Gospel",
    gospelBody: [
      "Spiritism did not bring a new morality. The one it adopts is the Gospel's, and Kardec was explicit about it: the doctrine confirms the teachings of Jesus, it does not replace them. What it adds is explanation — why loving your neighbour is a law and not advice.",
      "Jesus is taken as model and guide, not as an object of worship: there is no altar here, no sacrament, and no image is prayed to. The painting hangs on the Morada's wall for the same reason the mentor's sentence is written on all the others, to remind whoever works there what they agreed to follow.",
      "Everything else follows from that teaching. “Outside of charity there is no salvation” is a Christian conclusion before it is a Spiritist maxim, and it is what puts a food basket on the same footing as a study meeting. Loving your neighbour, forgiving, serving without charging and not judging are the working rules of this house because they are the Gospel's.",
    ],
    gospelQuote: {
      text: "Love one another as I have loved you.",
      source: "John 13:34",
    },
    gospelImageAlt:
      "Painting of Jesus with his right hand raised in blessing and two beams of light, one red and one pale, coming from his chest",

    worksHeading: "The five foundational works",
    worksNote:
      "This is the set the house treats as its reference. All were published by Allan Kardec between 1857 and 1868 and remain in print.",
    works: [
      {
        year: "1857",
        title: "The Spirits' Book",
        body: "The work that opens the codification, in 1,019 questions and answers. It covers God, creation, spirit life and the moral laws. This is where you start.",
      },
      {
        year: "1861",
        title: "The Mediums' Book",
        body: "The practical manual of mediumship: how exchange with spirits happens, the types of medium, and the care required of anyone working in a session.",
      },
      {
        year: "1864",
        title: "The Gospel According to Spiritism",
        body: "The moral part of the Gospel explained in the light of the doctrine. It is the most read book in Spiritist houses and the basis of their study meetings.",
      },
      {
        year: "1865",
        title: "Heaven and Hell",
        body: "Examines divine justice and dismantles the idea of eternal punishment. The consequences of our acts repair; they do not avenge.",
      },
      {
        year: "1868",
        title: "The Genesis",
        body: "On the origin of the world, miracles and predictions according to Spiritism, seeking agreement between the doctrine and the science of its day.",
      },
    ],

    principlesHeading: "The principles",
    principlesNote:
      "Five claims hold up everything else. None of them asks you to drop another belief in order to examine it.",
    principles: [
      {
        name: "God",
        body: "Supreme intelligence, first cause of all things. Not a human figure, shows no favouritism, and cannot be bargained with.",
      },
      {
        name: "Immortality of the spirit",
        body: "Death ends the body, not the being. What continues afterwards is the same person, with the same conscience and the same debts.",
      },
      {
        name: "Communication with spirits",
        body: "Exchange with the departed is possible, and it happens through mediumship. It is nobody's privilege; it is a faculty, and it demands study and discipline.",
      },
      {
        name: "Reincarnation",
        body: "The spirit is born again as many times as it needs to. This is what explains unequal circumstances at birth without resorting to an unjust God.",
      },
      {
        name: "Plurality of inhabited worlds",
        body: "Life is not confined to Earth, and the progress of the spirit does not end here.",
      },
    ],

    houseHeading: "How this becomes work at the Morada",
    houseNote:
      "Doctrine that stays on the page is of no use to this house. Each principle above has a matching practice inside it.",
    house: [
      {
        title: "Charity before doctrine",
        body: "If there is no salvation outside charity, food comes before argument. That is why the street collection and the 3.5 tonnes a month sit on the same footing as the study meetings, and why nobody is ever helped in exchange for attending.",
      },
      {
        title: "Nothing charged, nothing sold",
        body: "Mediumship is a faculty, not merchandise. The Morada charges nothing for a consultation, a passe or fluidified water, accepts no payment for them, and sells no object with a promised spiritual effect.",
      },
      {
        title: "Discipline as foundation",
        body: "Exchange with the spirit world depends on the room. That is what underpins the house's rules of conduct and the moment the doors close: once the session has begun, nobody else comes in.",
      },
      {
        title: "Study that never ends",
        body: "The house's school for mediums starts from Kardec's works and moves through levels. As Professor Lairi Hans put it, the study never ends: nobody graduates in spiritual matters.",
      },
      {
        title: "No creed required",
        body: "Spiritual care is open to anyone, of any religion or none, and nobody will be asked to change what they believe. Someone who arrives in distress does not have to accept a doctrine to be received.",
      },
      {
        title: "Never in place of a doctor",
        body: "Spiritism makes no diagnosis and does not replace medical treatment. The house never advises stopping medication, and always tells people to see a doctor.",
      },
    ],

    limitsHeading: "What Spiritism is not",
    limits: [
      "Not guaranteed healing. The house promises no outcome and does not treat illness in place of medicine.",
      "Not fortune telling. Nobody reads the future, deals cards, or charges for a revelation.",
      "Not magic, spells or working against anyone. Nothing here is done to harm.",
      "Not a sect: there is no membership, no tithe, and nobody owes attendance.",
      "Not conversion. Nobody has to leave their religion to be received in this house.",
    ],

    readHeading: "Where to start",
    readBody:
      "Kardec's works are in the public domain and easy to find in English and Portuguese. If you would rather start with a conversation, come on a care day and ask: there is always a volunteer free to explain, unhurried.",
    readCta: "See the care days",
    historyCta: "Read the history of the house",
  },

  /* --- Gospel online ------------------------------------------------------ */

  gospelOnline: {
    title: "Gospel online",
    description:
      "Online Gospel of Morada Espírita Professor Lairi Hans, streamed at the same time as the house's prayers in Campinas. Video available for 30 minutes.",
    heading: "Gospel online",
    lead: "The Morada's Gospel, streamed at the same time as the prayers held at the house. The video stays available for 30 minutes from the start.",
    anyDevicePill: "From any device with internet",

    scheduleHeading: "When",
    scheduleNote:
      "The online Gospel happens at the same time as the prayers held at the Morada, during the regular care hours.",

    accessHeading: "How to watch",
    accessBody:
      "The Gospel is streamed at evangelho.morada.org.br, at the same time as the prayers held at the Morada. The video stays available for 30 minutes from the start — no login and no cost.",
    accessCta: "Open evangelho.morada.org.br",
    accessNote: "Same link every time. Worth bookmarking.",

    guidanceHeading: "Guidance for the online Gospel",
    guidanceLead:
      "A few pointers to help you make the most of the blessed resources spirituality offers in this moment of prayer.",
    guidance: [
      {
        title: "Spiritual stretcher: relief and healing",
        body: "The Morada is a house of healing, home to elevated medical entities. The stretcher brings relief, strengthening and, if our Father allows it, healing to those held in thought. Picture the people you know who need that vibration, ill in body or in spirit — and picture yourself too, lying on the stretcher, healthy, serene, wrapped in light. Do this with faith, feeling the vibration reach your spirit, your thoughts raised to our Father.",
      },
      {
        title: "Basket of vibration: light and strengthening",
        body: "In this moment, the people held in thought receive vibrations of strength, peace, love, faith, balance and relief from their afflictions. It is a great source of strength for daily life, renewing what is positive and courageous in our spirit.",
      },
      {
        title: "Flower, symbol of the spiritual part",
        body: "The flower is the symbol of the spiritual part and, during the Gospel, receives the vibrations of our Father. Picture one petal of that flower, set apart and placed in your heart: it is love, peace, strength and light for your spirit. In difficult moments, remember that this petal lives in your spirit, carrying the vibrations of spirituality and the blessings of our Father to support you.",
      },
      {
        title: "Fluidified water: strengthening for body and spirit",
        body: "Before the Gospel, place a glass or a jug of water where you will pray, so that it receives the fluidification of the Morada's spiritual currents. These vibrations are a balm of strengthening, balance and purification.",
      },
    ],

    closingHeading: "Join the next online Gospel",
    closingBody: "The access is the same on every day the Morada works. Any questions, reach out.",
    closingCta: "Open evangelho.morada.org.br",
    closingImageAlt:
      "A field of white, blue and pink roses stretching to the horizon under an open sky",
  },

  /* --- Page in preparation (see `draftPages` in i18n/config.ts) --------- */
  /* `lead` is the only text of its own for now. Replace the four fields
     when the content arrives. */

  chacara: {
    title: "The Morada's country property",
    description:
      "The country property of Morada Espírita Professor Lairi Hans. Page in preparation.",
    heading: "The Morada's country property",
    lead: "This page will gather what happens at the Morada's country property.",
  },

  /* --- The Morada's shop ------------------------------------------------ */

  shop: {
    title: "The Morada's shop",
    description:
      "The Morada's shop: handmade goods, oils and care products from Gota de Cura, the Chácara da Mãe Luzia farmers' market, bakery and fried pastéis on Saturdays, in Campinas, Brazil. All proceeds go to charity.",
    heading: "The Morada's shop",
    lead: "Handmade goods, food grown on our own country property, and body-care products — all in one place, with every real of proceeds going to the Morada's charity work.",
    missionNote: "All proceeds help families in Campinas",

    introBody: [
      "The Morada's shop brings together, in one place, different initiatives that value handmade work, local production, healthy food, care, and above all, people.",
      "All proceeds from the shop go towards maintaining the Morada and towards its charity work with families in need across the Campinas region.",
      "Every product bought, every pastel shared and every visit helps this work continue, and helps more families be welcomed and supported.",
    ],
    introNote: "Shopping at the Morada is also a way of helping.",
    introImageAlt:
      "The entrance to the Morada's shop, with the market, crafts and Gota de Cura banners",

    /*
     * Order matters: the component pairs each item with an image in
     * `images.shop` by position in the array, not by name. Adding, removing
     * or reordering an item here needs the same change in
     * src/components/pages/shop.tsx.
     */
    offeringsHeading: "What you'll find",
    saturdayOnlyBadge: "Saturdays only",
    offeringWebsiteCta: "Catalogue and orders",
    offerings: [
      {
        id: "gotaDeCura",
        name: "Gota de Cura",
        saturdayOnly: false,
        body: "Handmade products for care and well-being, inspired by aromatherapy and the power of plants: essential oils, hydrosols, colognes, bath salts, soaps and other handmade preparations, made with care for ingredients and process.",
        imageAlt:
          "Shelves at Gota de Cura with essential oils, soaps and other aromatherapy products",
      },
      {
        id: "bazar",
        name: "Bazaar",
        saturdayOnly: false,
        body: "The Morada's bazaar values the manual work, creativity and talent of our women workers: crochet, embroidery, sewing, fabric work and other handmade creations. Choosing something from the bazaar also helps sustain the Morada's charity projects.",
        imageAlt:
          "The bazaar room with cushions, embroidered towels and ceramic figures displayed on shelves and on the table",
      },
      {
        id: "feiraChacara",
        name: "Chácara da Mãe Luzia farmers' market",
        saturdayOnly: true,
        body: "Produce grown at the Chácara da Mãe Luzia, our country property, with care and without pesticides — fresh, close to nature, and respecting the cycles of planting and harvest.",
        imageAlt:
          "The Chácara Mãe Luzia market stall with fresh greens, eggs and herbs, and the price board behind it",
      },
      {
        id: "padaria",
        name: "Padaria Mãe Luzia bakery",
        saturdayOnly: true,
        body: "Bread and other goods prepared with care, with flavours that call to mind food made to be shared around a table.",
        imageAlt:
          "Cake, cookies and homemade jam from the Padaria Mãe Luzia on the table, next to a mug with the bakery's name",
      },
      {
        id: "pasteis",
        name: "Pastéis fried to order",
        saturdayOnly: true,
        body: "Pastéis prepared and fried to order, for that irresistible hot-from-the-fryer taste while you visit the market or the rest of what's happening at the Morada.",
        imageAlt: "Rows of golden, freshly-fried pastéis stacked in a tray",
      },
    ],

    eventsHeading: "Events and gatherings",
    eventsBody:
      "Throughout the year, the Morada also holds themed gatherings, with music, special food and activities that bring together families, friends and the whole community — and that also help sustain the Morada's work all year round.",

    juneHeading: "The Morada's Festa Junina",
    juneWhen: "Every Saturday in June",
    juneBody:
      "Every Saturday in June, the Morada takes on an even more festive air with its traditional Festa Junina — Brazil's June harvest festival — with a programme full of live music, food and surprises.",
    juneAttractions: [
      "Live music",
      "Bingo",
      "Traditional food",
      "Pastéis fried to order",
      "Gathering and fellowship",
      "Surprises",
    ],
    juneImageAlt: "A tree in the Morada's yard decorated with bunting, flowers and Festa Junina decorations",

    instagramHeading: "Follow the shop on Instagram",
    instagramBody:
      "News from the market, the bazaar, Gota de Cura and the shop's events, always at @lojadamorada.",
    instagramCta: "Follow on Instagram",

    helpHeading: "Your purchase helps too",
    helpBody:
      "All proceeds from the Morada's shop go towards maintaining its work and towards charity for families in need across the Campinas region. Your purchase helps keep this work going and brings support to those who need it most.",
    helpNote: "You choose what to take home. Your purchase helps care for someone.",
    helpCta: "See our charity work",

    scheduleHeading: "Opening hours",
    scheduleWeekdaysLabel: "Monday to Friday",
    scheduleSaturdayLabel: "Saturdays",
    scheduleSaturdayNote:
      "The Chácara da Mãe Luzia farmers' market, the Padaria Mãe Luzia bakery and the fried pastéis run exclusively on Saturdays.",
    scheduleEventsNote:
      "Events and gatherings may have their own schedule, announced on the Morada's social media.",

    closingHeading: "Come and be part of the Morada",
    closingBody:
      "Whether to choose handmade goods, take home fresh produce from the Chácara, enjoy the bakery, eat a hot pastel or join one of the events, the Morada's shop is open to welcome you.",
  },

  history: {
    title: "Our history",
    description:
      "Morada Espírita Professor Lairi Hans was founded on 29 October 1980 in Campinas, Brazil. Six houses in 45 years, a building raised by volunteers, a time capsule sealed until 2082, and the story of Mãe Luzia.",
    heading: "Our history",
    lead: "It began with six mediums in a borrowed outbuilding. It moved through six addresses, lost its first owned house to a compulsory purchase, and built the present one by hand. It has never taken outside help.",

    timelineHeading: "Timeline",
    timeline: [
      {
        year: "1980",
        title: "The founding",
        body: "On 29 October, Luzia Pacubi, Heloísa de Oliveira Bueno, Maria Aparecida Nogueira de Sá and Orlando Gache founded the house. The work began in a modest outbuilding, with six mediums.",
      },
      {
        year: "1980–2004",
        title: "Twenty-four years of guidance",
        body: "All of the house's guidance came from Professor Lairi Hans, who spoke for nearly 24 years through the medium Luzia Pacubi — his spiritual daughter across several lifetimes.",
      },
      {
        year: "1980s–1990s",
        title: "Six houses",
        body: "Barão de Jaguara, Antônio Cesarino, Luzitana, Álvares Machado. The first owned house, bought and renovated by volunteers, was taken by a compulsory purchase for a city works project. With the inadequate compensation and what little it had, the Morada bought the house at Rua José Paulino, 1936.",
      },
      {
        year: "1990s",
        title: "The spiritual beds",
        body: "To take root across the city, the Morada opened further houses of care — Professor Lairi Hans called them spiritual flower beds. Each bed that opened was one more garden of healing, love, faith and giving.",
      },
      {
        year: "2000–2002",
        title: "The building, by volunteers",
        body: "The neighbouring house was bought and demolished, and the present building rose at number 1,934 on the same street. The work was split into two stages and took two years of working parties run by the Morada's own volunteers. No stage ever had outside help.",
      },
      {
        year: "2002",
        title: "The capsule, and one current",
        body: "On 27 April a time capsule was sealed in the basement, to be opened in 2082. With the building finished, the satellite houses were closed so that every volunteer would work in a single current.",
      },
      {
        year: "Today",
        title: "The work continues",
        body: "Around 3.5 tonnes of food each month for elderly people, the sick and children in outlying neighbourhoods. The next project is a home for elderly people and children.",
      },
    ],

    housesHeading: "The houses of the Morada",
    housesLead:
      "The photographs the house keeps of every address it passed through, from the 1980 outbuilding to the building raised by its own volunteers.",
    houses: [
      {
        src: "/images/historia/casa-1-barao-de-jaguara.jpg",
        width: 494,
        height: 406,
        title: "1st Morada",
        caption: "Rua Barão de Jaguara, 108 — Campinas",
        alt: "Whitewashed outbuilding with the Morada Espírita sign beside the door",
      },
      {
        src: "/images/historia/casa-2-antonio-cesarino.jpg",
        width: 252,
        height: 350,
        title: "2nd Morada",
        caption: "Rua Antônio Cesarino — Campinas",
        alt: "Single-storey house with a balustraded balcony and the Morada sign on the front",
      },
      {
        src: "/images/historia/casa-3-luzitana.jpg",
        width: 492,
        height: 406,
        title: "3rd Morada",
        caption: "Rua Luzitana, 1652 — Campinas",
        alt: "Pale corner frontage with the Morada sign between two windows",
      },
      {
        src: "/images/historia/casa-4-alvares-machado.jpg",
        width: 350,
        height: 247,
        title: "4th Morada",
        caption: "Rua Álvares Machado — Campinas. The first owned house, later taken by the city",
        alt: "White corner house seen from the cobbled pavement",
      },
      {
        src: "/images/historia/casa-5-jose-paulino-1936.jpg",
        width: 405,
        height: 497,
        title: "5th Morada",
        caption: "Rua José Paulino, 1936 — Campinas. The second owned house",
        alt: "Two-storey frontage with grilled doors and the Morada sign above the window",
      },
      {
        src: "/images/historia/casa-5-casa-ao-lado.jpg",
        width: 615,
        height: 403,
        title: "The house next door",
        caption: "Rua José Paulino, 1936. With great effort, the Morada buys the neighbouring house",
        alt: "Two adjoining houses with an “owned premises — under expansion” banner on the front",
      },
      {
        src: "/images/historia/casa-6-jose-paulino-1934.jpg",
        width: 427,
        height: 280,
        title: "6th Morada",
        caption: "Rua José Paulino, 1934 — the present building, raised by the volunteers themselves",
        alt: "White two-storey building with the Morada's name on the front and railings along the street",
      },
      {
        src: "/images/historia/capsula-do-tempo.jpg",
        width: 472,
        height: 708,
        title: "The time capsule",
        caption: "27 April 2002. The vault in the basement, before it was covered with concrete",
        alt: "Open vault in the basement's concrete floor, with the ceramic box inside",
      },
    ],

    capsuleHeading: "The time capsule",
    capsuleBanner:
      "The capsule sealed in the basement on 27 April 2002 may only be opened 80 years later.",
    capsuleBody: [
      "It is a procedure without precedent among Spiritist houses: keeping the Morada's memory so that later generations know how this walk began. The capsule was conceived by the spiritual side itself, and what went into it was chosen item by item.",
      "The photographs were printed on selected paper and the account of the history was written by hand, in graphite, on special paper. Everything was sealed in a heavy-duty plastic bag, treated for a week in a nitrogen atmosphere, sealed under dry nitrogen and closed with beeswax inside a ceramic box.",
      "The box was placed in the basement vault, the space was saturated with nitrogen and the container covered with concrete. Above the vault is a plaque bearing the date: 27 April 2002. The capsule may only be opened 80 years later.",
    ],

    mentorHeading: "Professor Lairi Hans",
    mentorBody:
      "The house carries the name of its spiritual mentor: a physician who died in 1678, aged 51, in Germany. His lifetimes were marked by self-denial, love of neighbour and a tireless dedication to healing the sick. It was he who led Luzia Pacubi to found the Morada, and it is his teaching the house keeps whole — humility as strength, discipline as foundation, and the sentence written on every wall.",
    mentorQuote: "If you give your crumb, that is one fewer who will suffer.",
    mentorImageAlt:
      "Painted portrait of Professor Lairi Hans, in a white physician's coat and cap, against an ochre background",

    founderHeading: "Mãe Luzia",
    founderBody:
      "Luzia Pacubi became a Spiritist at 18 and gave more than six decades to mediumistic work and Christian causes. It was through her that Professor Lairi Hans spoke for nearly 24 years. In 2002, aged 77, she described Spiritism as “a purification of the human being for a new reincarnation”. On the plaque the volunteers dedicated to her in February 1986, she is the cornerstone of this Morada.",
    founderQuote:
      "Outside of charity there can be no salvation, because the Father places in our hands a seed to be planted.",
    founderImageAlt:
      "Painted portrait of Mãe Luzia, smiling, in a white shirt, against an ochre background",

    disciplineHeading: "Discipline",
    disciplineQuote: "Where there is no discipline, the messengers of light are not present.",
    disciplineBody:
      "Discipline, work and giving are the marks of the house. The Morada's chief bond is healing, and for those vibrations to be received a pure environment is indispensable. That is why Professor Hans made discipline of conduct and of procedure the foundation of the house.",

    symbolHeading: "Our symbol",
    symbolBody:
      "The flower is the symbol of the spiritual side. White, blue and pink roses are the Morada's symbol in the spirit world.",
    symbolColors: [
      { name: "Pink", meaning: "Love" },
      { name: "Blue", meaning: "Healing and Faith" },
      { name: "White", meaning: "Peace" },
    ],
  },

  messages: {
    title: "Messages",
    description:
      "Messages and thoughts kept by Morada Espírita Professor Lairi Hans: Chico Xavier, Professor Lairi Hans and Mãe Luzia.",
    heading: "Messages",
    lead: "Passages the house keeps and returns to. They appear here as they were received, without commentary.",
    sections: [
      {
        author: "Professor Lairi Hans",
        note: "Spiritual mentor of the house",
        quotes: [
          "There is nothing that love cannot overcome.",
          "If you give your crumb, that is one fewer who will suffer.",
          "Humility is not weakness. It is the strength you need in order to begin healing.",
          "At home, speak with love instead of giving orders.",
          "Give joy to the elderly, teach love to children, care for those who are ill.",
        ],
      },
      {
        author: "Chico Xavier",
        note: "Brazilian medium and writer (1910–2002)",
        quotes: [
          "Christ did not ask for much. He did not demand that people climb Everest or make great sacrifices.",
          "No activity in the service of good is insignificant. The tallest trees come from the smallest seeds.",
          "I never wanted to change anyone's religion, because I do not believe religion A is better than religion B.",
          "We should pray for politicians, for those who administer public life. The temptation of power is very great.",
          "The most distressing question for the spirit in the beyond is the awareness of time wasted.",
          "One of the most beautiful lessons suffering has taught me: do not judge. Definitively, do not judge.",
        ],
      },
      {
        author: "Mãe Luzia",
        note: "Luzia Pacubi, founder of the Morada",
        quotes: [
          "Outside of charity there can be no salvation, because the Father places in our hands a seed to be planted.",
          "Spiritism is a purification of the human being for a new reincarnation.",
        ],
      },
    ],
  },

  events: {
    title: "Events",
    description:
      "The standing weekly schedule at Morada Espírita Professor Lairi Hans in Campinas, Brazil, and its Winter, Easter and Christmas campaigns.",
    heading: "Events",
    lead: "What happens every week, and what comes back every year. Dates for one-off events are announced on the house's social channels.",

    recurringHeading: "Every week",
    recurring: [
      {
        name: "Spiritual care",
        when: "Wednesdays 2pm · Thursdays 8pm · Saturdays 3pm",
        href: "care",
      },
      {
        name: "Food collection",
        when: "Saturdays and Sundays, from 9am",
        href: "charity",
      },
      {
        name: "Classes for children",
        when: "Sundays, 9.30 to 11.15am",
        href: "evangelization",
      },
      {
        name: "Basket distribution",
        when: "Last Sunday of every month",
        href: "charity",
      },
    ],

    seasonalHeading: "Every year",

    emptyHeading: "One-off events",
    emptyBody:
      "There are no one-off events scheduled at the moment. Talks, celebrations and extra working days are announced on the house's social channels and on the noticeboard at the entrance.",
    emptyCta: "Follow on Facebook",
  },

  directions: {
    title: "How to find us",
    description:
      "Morada Espírita Professor Lairi Hans is at Rua José Paulino, 1934, Centro, Campinas, São Paulo, Brazil. Map, directions and phone number.",
    heading: "How to find us",
    lead: "The Morada is in central Campinas, at Rua José Paulino, 1934.",

    addressHeading: "Address",
    mapHeading: "On the map",
    mapTitle:
      "Map showing the location of Morada Espírita at Rua José Paulino, 1934, Campinas",
    mapFallback:
      "The map could not be loaded. Use the directions button below, or copy the address.",
    routeCta: "Open directions in Google Maps",
    openMapCta: "View on the map",

    tipsHeading: "When you arrive",
    tips: [
      "The entrance is directly on Rua José Paulino.",
      "The doors close five minutes before the session starts — after that, nobody else comes in. The earlier you arrive, the earlier you are seen.",
      "If you are having trouble finding the house, message on Facebook or call — someone will guide you straight away.",
    ],

    helpHeading: "Lost on the way?",
    helpBody: "Message the house on Facebook. If you would rather speak by voice, the phone number is just below.",
  },

  contact: {
    title: "Contact",
    description:
      "Contact Morada Espírita Professor Lairi Hans: phone +55 19 3236-8544, Instagram, Facebook, and our address in central Campinas, Brazil.",
    heading: "Get in touch",
    lead: "The fastest way is a message on Facebook — that is where the house keeps up and replies.",

    facebookHeading: "On Facebook",
    facebookNote:
      "The house's main channel. Send a message to the page and a volunteer will reply. It is also where notices and dates are posted.",

    instagramHeading: "On Instagram",
    instagramNote: "Campaigns, photographs, and the daily work of the charity.",

    phoneHeading: "By phone",
    phoneNote:
      "If you would rather speak by voice, call during the days and hours the house is open.",

    visitHeading: "In person",
    visitNote: "You can simply turn up at one of the spiritual care sessions.",

    formHeading: "By message",
    formNote:
      "A reply may take a few days — the house is run by volunteers. If it is urgent, message on Facebook.",
    form: {
      name: "Your name",
      email: "Your email",
      emailHint: "So that we can reply.",
      subject: "Subject",
      subjectOptions: [
        "Spiritual care",
        "Children's classes",
        "Donation",
        "Volunteering",
        "Something else",
      ],
      message: "Message",
      submit: "Send message",
      sending: "Sending…",
      required: "required",
      errors: {
        name: "Please write your name.",
        email: "Please write a valid email so that we can reply.",
        message: "Please write your message.",
        summary: "Please check the fields marked below.",
        failed: `We could not send this right now. Please try again, message the house on Facebook, or call ${site.phone.display}.`,
      },
      successHeading: "Message sent.",
      successBody:
        "Thank you for writing. We will reply as soon as we can — if it is urgent, message the house on Facebook.",
    },
  },

  footer: {
    houseLine: `${site.name} — a Kardecist Spiritist centre and registered charity, founded in 1980.`,
    careLine: "Free spiritual care, no appointment needed.",
    navHeading: "Pages",
    visitHeading: "Visit",
    followHeading: "Talk to the house",
    rights: "All rights reserved.",
    builtBy: "Made by volunteers.",
  },

  notFound: {
    title: "Page not found",
    heading: "This page does not exist.",
    body: "The address may have changed. You can find everything from the home page — or message the house on Facebook if you would rather speak to someone.",
  },
};
