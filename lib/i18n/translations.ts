import type { Locale } from "./types";

const fr = {
  a11y: {
    chooseLanguage: "Choisir la langue",
    menuCategories: "Catégories du menu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    close: "Fermer",
    viewItem: "Voir",
  },
  nav: {
    about: "Le restaurant",
    menu: "Carte",
    gallery: "Photos",
    contact: "Contact",
    reserve: "Réserver",
    bookTable: "Réserver une table",
  },
  hero: {
    address: "8 Place de la République · Paris 11e",
    title: "Black Angus République",
    lead:
      "Viande Black Angus maturée, grillée au feu, servie avec l'attention d'une maison parisienne.",
    ctaMenu: "Découvrir la carte",
    ctaReserve: "Réserver une table",
  },
  about: {
    title: "Une adresse de viande, face à la République",
    lead:
      "Sélection, maturation et cuisson au feu. Formules complètes, sauces versées à table, service discret.",
    stats: {
      years: "Années",
      aging: "Maturation",
      angus: "Black Angus",
      rating: "Note clients",
    },
    imageAlt1: "Filet Angus et frites, sauce signature versée à table",
    imageAlt2: "Sauce verte maison sur cœur de rumsteak",
  },
  menu: {
    title: "La carte",
    lead: "Viandes, desserts et bar — touchez un plat pour le voir en détail.",
    perUnit: "l'unité",
    categories: {
      meats: {
        label: "Viandes",
        subtitle:
          "Formule accompagnée de salade de bienvenue, frites et purée",
        note: "Sauce rouge par Nabil Zemmouri disponible pour +3€",
      },
      desserts: { label: "Desserts" },
      cocktails: { label: "Cocktails" },
      mocktails: { label: "Mocktails" },
    },
    items: {
      "black-red": { name: "Black Red", description: "Cœur de rumsteak Angus" },
      "black-lover": {
        name: "Black Lover",
        description: "Entrecôte Angus",
        badge: "Signature",
      },
      "black-premium": {
        name: "Black Premium",
        description: "Filet de bœuf Angus",
        badge: "Premium",
      },
      "sorbets-glace": {
        name: "Sorbets ou glace",
        description: "2 ou 3 boules au choix",
      },
      tartes: { name: "Tartes", description: "Poire, Pomme ou Citron" },
      "creme-brulee": {
        name: "Crème brûlée",
        description: "Classique onctueuse, caramel croquant",
      },
      "baba-rhum": {
        name: "Baba au rhum",
        description: "Baba moelleux, sirop au rhum maison",
      },
      profiteroles: {
        name: "Profiteroles",
        description: "Vanille ou chocolat",
      },
      "moelleux-chocolat": {
        name: "Moelleux au chocolat",
        description: "Servi avec glace vanille",
        badge: "Chef's Choice",
      },
      "a-la-fraiche": {
        name: "À la fraîche",
        description:
          "Gin Citadelle, elderflower, citron, concombre, menthe",
      },
      "le-coucou": {
        name: "Le Coucou",
        description: "Gin Citadelle, kumquat, violette, citron, myrtille",
      },
      "le-fripon": {
        name: "Le Fripon",
        description: "Vodka FAIR, litchi, mûre, yuzu, citron, citronnelle",
      },
      mojito: {
        name: "Mojito",
        description: "Rhum, menthe fraîche, citron vert, sucre de canne",
      },
      "virgin-mojito": {
        name: "Virgin Mojito",
        description: "Menthe fraîche, citron vert, sucre de canne",
      },
      "la-pepite": {
        name: "La Pépite",
        description: "Pomme, poire, thé vert, elderflower, verveine",
      },
      "le-joli-coeur": {
        name: "Le Joli Cœur",
        description: "Framboise, cassis, poivre Timut, thé noir",
      },
      "le-flambeur": {
        name: "Le Flambeur",
        description: "Gingembre, fleurs d'hibiscus, poivre de Timut",
      },
    },
  },
  gallery: {
    title: "L'assiette",
    lead: "Survolez une photographie pour en lire la composition.",
    shots: {
      rumsteak: {
        alt: "Formule Black Angus avec rumsteak, frites, purée et salade",
        name: "Formule Black Red",
        description:
          "Cœur de rumsteak Angus, frites, purée et salade — dressée à table.",
      },
      "sauce-verte": {
        alt: "Sauce verte versée sur une pièce de bœuf Angus",
        name: "Sauce verte",
        description: "Herbes fraîches et beurre, versés à la demande.",
      },
      profiteroles: {
        alt: "Profiteroles au chocolat",
        name: "Profiteroles",
        description: "Choux, crème vanille, nappage chocolat chaud.",
      },
      fondant: {
        alt: "Moelleux au chocolat et glace vanille",
        name: "Moelleux au chocolat",
        description: "Cœur coulant, glace vanille, sauce chocolat à table.",
      },
      tarte: {
        alt: "Tarte aux pommes maison",
        name: "Tarte maison",
        description: "Pomme, poire ou citron — pâte sablée, amandes.",
      },
      filet: {
        alt: "Filet Angus et frites, sauce signature",
        name: "Black Premium",
        description: "Filet Angus, frites, sauce maison coulée à table.",
      },
    },
  },
  testimonials: {
    title: "Ce que disent nos convives",
    items: [
      {
        quote:
          "Une viande d'une tendreté remarquable. La sauce rouge est une vraie signature.",
        author: "Julien M.",
      },
      {
        quote:
          "L'entrecôte Black Angus, servie avec simplicité et précision — l'une des meilleures tables du quartier.",
        author: "Sophie L.",
      },
      {
        quote:
          "Cocktails soignés, cuisson maîtrisée, ambiance feutrée. Nous y revenons.",
        author: "Antoine D.",
      },
    ],
  },
  contact: {
    title: "Réserver une table",
    lead:
      "Adressez-nous votre demande — confirmation sous vingt-quatre heures.",
    labels: {
      address: "Adresse",
      phone: "Téléphone",
      email: "Email",
      hours: "Horaires",
    },
    values: {
      address: "8 Place de la République, 75011 Paris",
      phone: "+33 1 42 00 00 00",
      email: "contact@blackangus-republique.fr",
      hours: "Lun–Jeu 12h–23h · Ven–Sam 12h–00h · Dim 12h–22h",
    },
    form: {
      name: "Nom",
      email: "Email",
      phone: "Téléphone",
      guests: "Convives",
      date: "Date",
      message: "Message",
      namePlaceholder: "Jean Dupont",
      emailPlaceholder: "jean.dupont@email.com",
      phonePlaceholder: "+33 6 00 00 00 00",
      messagePlaceholder: "Occasion, allergies…",
      guestSingular: "personne",
      guestPlural: "personnes",
      submit: "Envoyer",
      required: "*",
    },
  },
  footer: {
    tagline: "Steakhouse Black Angus, place de la République — Paris 11e.",
    navigation: "Navigation",
    hours: "Horaires",
    hoursWeek: "Lun – Jeu · 12h – 23h",
    hoursWeekend: "Ven – Sam · 12h – 00h",
    hoursSunday: "Dim · 12h – 22h",
    home: "Accueil",
  },
} as const;

const en = {
  a11y: {
    chooseLanguage: "Choose language",
    menuCategories: "Menu categories",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    close: "Close",
    viewItem: "View",
  },
  nav: {
    about: "The restaurant",
    menu: "Menu",
    gallery: "Gallery",
    contact: "Contact",
    reserve: "Reserve",
    bookTable: "Book a table",
  },
  hero: {
    address: "8 Place de la République · Paris 11e",
    title: "Black Angus République",
    lead:
      "Matured Black Angus beef, grilled over fire, served with the care of a Parisian house.",
    ctaMenu: "Explore the menu",
    ctaReserve: "Book a table",
  },
  about: {
    title: "A destination for beef, facing République",
    lead:
      "Selection, dry-aging and fire-grilling. Complete set menus, sauces poured at the table, discreet service.",
    stats: {
      years: "Years",
      aging: "Dry-aging",
      angus: "Black Angus",
      rating: "Guest rating",
    },
    imageAlt1: "Angus filet and fries, signature sauce poured at the table",
    imageAlt2: "House green sauce on Angus rumsteak heart",
  },
  menu: {
    title: "The menu",
    lead: "Meats, desserts and bar — tap a dish to see it in detail.",
    perUnit: "each",
    categories: {
      meats: {
        label: "Meats",
        subtitle: "Set menu with welcome salad, fries and mashed potatoes",
        note: "Nabil Zemmouri's red sauce available for +€3",
      },
      desserts: { label: "Desserts" },
      cocktails: { label: "Cocktails" },
      mocktails: { label: "Mocktails" },
    },
    items: {
      "black-red": { name: "Black Red", description: "Angus rumsteak heart" },
      "black-lover": {
        name: "Black Lover",
        description: "Angus ribeye",
        badge: "Signature",
      },
      "black-premium": {
        name: "Black Premium",
        description: "Angus beef fillet",
        badge: "Premium",
      },
      "sorbets-glace": {
        name: "Sorbets or ice cream",
        description: "2 or 3 scoops of your choice",
      },
      tartes: { name: "Tarts", description: "Pear, Apple or Lemon" },
      "creme-brulee": {
        name: "Crème brûlée",
        description: "Classic creamy custard, crisp caramel",
      },
      "baba-rhum": {
        name: "Rum baba",
        description: "Soft baba, house rum syrup",
      },
      profiteroles: {
        name: "Profiteroles",
        description: "Vanilla or chocolate",
      },
      "moelleux-chocolat": {
        name: "Chocolate fondant",
        description: "Served with vanilla ice cream",
        badge: "Chef's Choice",
      },
      "a-la-fraiche": {
        name: "À la fraîche",
        description:
          "Citadelle gin, elderflower, lemon, cucumber, mint",
      },
      "le-coucou": {
        name: "Le Coucou",
        description: "Citadelle gin, kumquat, violet, lemon, blueberry",
      },
      "le-fripon": {
        name: "Le Fripon",
        description: "FAIR vodka, lychee, blackberry, yuzu, lemon, lemongrass",
      },
      mojito: {
        name: "Mojito",
        description: "Rum, fresh mint, lime, cane sugar",
      },
      "virgin-mojito": {
        name: "Virgin Mojito",
        description: "Fresh mint, lime, cane sugar",
      },
      "la-pepite": {
        name: "La Pépite",
        description: "Apple, pear, green tea, elderflower, verbena",
      },
      "le-joli-coeur": {
        name: "Le Joli Cœur",
        description: "Raspberry, blackcurrant, Timut pepper, black tea",
      },
      "le-flambeur": {
        name: "Le Flambeur",
        description: "Ginger, hibiscus flowers, Timut pepper",
      },
    },
  },
  gallery: {
    title: "The plate",
    lead: "Hover over a photograph to read its composition.",
    shots: {
      rumsteak: {
        alt: "Black Angus set menu with rumsteak, fries, mash and salad",
        name: "Black Red set menu",
        description:
          "Angus rumsteak heart, fries, mash and salad — plated at the table.",
      },
      "sauce-verte": {
        alt: "Green sauce poured over Angus beef",
        name: "Green sauce",
        description: "Fresh herbs and butter, poured on request.",
      },
      profiteroles: {
        alt: "Chocolate profiteroles",
        name: "Profiteroles",
        description: "Choux, vanilla cream, hot chocolate glaze.",
      },
      fondant: {
        alt: "Chocolate fondant and vanilla ice cream",
        name: "Chocolate fondant",
        description: "Molten centre, vanilla ice cream, chocolate sauce at the table.",
      },
      tarte: {
        alt: "Homemade apple tart",
        name: "House tart",
        description: "Apple, pear or lemon — shortcrust pastry, almonds.",
      },
      filet: {
        alt: "Angus fillet and fries, signature sauce",
        name: "Black Premium",
        description: "Angus fillet, fries, house sauce poured at the table.",
      },
    },
  },
  testimonials: {
    title: "What our guests say",
    items: [
      {
        quote:
          "Remarkably tender beef. The red sauce is a true signature.",
        author: "Julien M.",
      },
      {
        quote:
          "The Black Angus ribeye, served with simplicity and precision — one of the best tables in the neighbourhood.",
        author: "Sophie L.",
      },
      {
        quote:
          "Refined cocktails, mastered grilling, hushed atmosphere. We keep coming back.",
        author: "Antoine D.",
      },
    ],
  },
  contact: {
    title: "Book a table",
    lead: "Send us your request — confirmation within twenty-four hours.",
    labels: {
      address: "Address",
      phone: "Phone",
      email: "Email",
      hours: "Hours",
    },
    values: {
      address: "8 Place de la République, 75011 Paris",
      phone: "+33 1 42 00 00 00",
      email: "contact@blackangus-republique.fr",
      hours: "Mon–Thu 12pm–11pm · Fri–Sat 12pm–12am · Sun 12pm–10pm",
    },
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      guests: "Guests",
      date: "Date",
      message: "Message",
      namePlaceholder: "John Smith",
      emailPlaceholder: "john.smith@email.com",
      phonePlaceholder: "+33 6 00 00 00 00",
      messagePlaceholder: "Occasion, allergies…",
      guestSingular: "guest",
      guestPlural: "guests",
      submit: "Send",
      required: "*",
    },
  },
  footer: {
    tagline: "Black Angus steakhouse, Place de la République — Paris 11e.",
    navigation: "Navigation",
    hours: "Hours",
    hoursWeek: "Mon – Thu · 12pm – 11pm",
    hoursWeekend: "Fri – Sat · 12pm – 12am",
    hoursSunday: "Sun · 12pm – 10pm",
    home: "Home",
  },
} as const;

export const translations = { fr, en };

export type Translations = (typeof translations)[Locale];
