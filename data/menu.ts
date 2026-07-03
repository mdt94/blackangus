export interface MenuItemData {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

export type MenuCategoryId = "meats" | "desserts" | "cocktails" | "mocktails";

export interface MenuCategoryData {
  id: MenuCategoryId;
  label: string;
  subtitle?: string;
  note?: string;
  defaultPrice?: string;
  items: MenuItemData[];
}

const STEAK_IMAGE =
  "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200";
const RIBEYE_IMAGE =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200";
const FILET_IMAGE =
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=1200";

const SORBET_IMAGE =
  "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=1200";
const TARTE_IMAGE =
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1200";
const CREME_BRULEE_IMAGE =
  "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&q=80&w=1200";
const BABA_IMAGE =
  "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=1200";
const PROFITEROLES_IMAGE =
  "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&q=80&w=1200";
const MOELLEUX_IMAGE =
  "https://images.unsplash.com/photo-1606313564200-e75d5e30476e?auto=format&fit=crop&q=80&w=1200";

const GIN_COCKTAIL_IMAGE =
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d42?auto=format&fit=crop&q=80&w=1200";
const VIOLET_COCKTAIL_IMAGE =
  "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=1200";
const EXOTIC_COCKTAIL_IMAGE =
  "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80&w=1200";
const MOJITO_IMAGE =
  "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=1200";

const VIRGIN_MOJITO_IMAGE =
  "https://images.unsplash.com/photo-1622483767028-3f66f34aefaf?auto=format&fit=crop&q=80&w=1200";
const PEPITE_IMAGE =
  "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&q=80&w=1200";
const JOLI_COEUR_IMAGE =
  "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1200";
const FLAMBEUR_IMAGE =
  "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=1200";

export const menuCategories: MenuCategoryData[] = [
  {
    id: "meats",
    label: "Viandes",
    subtitle:
      "Formule accompagnée de salade de bienvenue, frites et purée",
    note: "Sauce rouge par Nabil Zemmouri disponible pour +3€",
    items: [
      {
        id: "black-red",
        name: "Black Red",
        description: "Cœur de rumsteak Angus",
        price: "29 €",
        image: STEAK_IMAGE,
      },
      {
        id: "black-lover",
        name: "Black Lover",
        description: "Entrecôte Angus",
        price: "35 €",
        image: RIBEYE_IMAGE,
        badge: "Signature",
      },
      {
        id: "black-premium",
        name: "Black Premium",
        description: "Filet de bœuf Angus",
        price: "42 €",
        image: FILET_IMAGE,
        badge: "Premium",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        id: "sorbets-glace",
        name: "Sorbets ou glace",
        description: "2 ou 3 boules au choix",
        price: "6 € / 9 €",
        image: SORBET_IMAGE,
      },
      {
        id: "tartes",
        name: "Tartes",
        description: "Poire, Pomme ou Citron",
        price: "9,50 €",
        image: TARTE_IMAGE,
      },
      {
        id: "creme-brulee",
        name: "Crème brûlée",
        description: "Classique onctueuse, caramel croquant",
        price: "9,50 €",
        image: CREME_BRULEE_IMAGE,
      },
      {
        id: "baba-rhum",
        name: "Baba au rhum",
        description: "Baba moelleux, sirop au rhum maison",
        price: "10,50 €",
        image: BABA_IMAGE,
      },
      {
        id: "profiteroles",
        name: "Profiteroles",
        description: "Vanille ou chocolat",
        price: "11 €",
        image: PROFITEROLES_IMAGE,
      },
      {
        id: "moelleux-chocolat",
        name: "Moelleux au chocolat",
        description: "Servi avec glace vanille",
        price: "12 €",
        image: MOELLEUX_IMAGE,
        badge: "Chef's Choice",
      },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails",
    defaultPrice: "11,50 €",
    items: [
      {
        id: "a-la-fraiche",
        name: "À la fraîche",
        description:
          "Gin Citadelle, elderflower, citron, concombre, menthe",
        price: "11,50 €",
        image: GIN_COCKTAIL_IMAGE,
      },
      {
        id: "le-coucou",
        name: "Le Coucou",
        description:
          "Gin Citadelle, kumquat, violette, citron, myrtille",
        price: "11,50 €",
        image: VIOLET_COCKTAIL_IMAGE,
      },
      {
        id: "le-fripon",
        name: "Le Fripon",
        description:
          "Vodka FAIR, litchi, mûre, yuzu, citron, citronnelle",
        price: "11,50 €",
        image: EXOTIC_COCKTAIL_IMAGE,
      },
      {
        id: "mojito",
        name: "Mojito",
        description: "Rhum, menthe fraîche, citron vert, sucre de canne",
        price: "12,50 €",
        image: MOJITO_IMAGE,
      },
    ],
  },
  {
    id: "mocktails",
    label: "Mocktails",
    defaultPrice: "9,50 €",
    items: [
      {
        id: "virgin-mojito",
        name: "Virgin Mojito",
        description: "Menthe fraîche, citron vert, sucre de canne",
        price: "9,50 €",
        image: VIRGIN_MOJITO_IMAGE,
      },
      {
        id: "la-pepite",
        name: "La Pépite",
        description: "Pomme, poire, thé vert, elderflower, verveine",
        price: "9,50 €",
        image: PEPITE_IMAGE,
      },
      {
        id: "le-joli-coeur",
        name: "Le Joli Cœur",
        description: "Framboise, cassis, poivre Timut, thé noir",
        price: "9,50 €",
        image: JOLI_COEUR_IMAGE,
      },
      {
        id: "le-flambeur",
        name: "Le Flambeur",
        description: "Gingembre, fleurs d'hibiscus, poivre de Timut",
        price: "9,50 €",
        image: FLAMBEUR_IMAGE,
      },
    ],
  },
];
