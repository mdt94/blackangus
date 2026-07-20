import { menuCategories, type MenuCategoryData } from "@/data/menu";
import { translations } from "./translations";
import type { Locale } from "./types";

export function getLocalizedMenuCategories(locale: Locale): MenuCategoryData[] {
  const menuT = translations[locale].menu;

  return menuCategories.map((category) => {
    const categoryT = menuT.categories[category.id];

    return {
      ...category,
      label: categoryT.label,
      subtitle: "subtitle" in categoryT ? categoryT.subtitle : category.subtitle,
      note: "note" in categoryT ? categoryT.note : category.note,
      items: category.items.map((item) => {
        const itemT = menuT.items[item.id as keyof typeof menuT.items];

        return {
          ...item,
          name: itemT?.name ?? item.name,
          description: itemT?.description ?? item.description,
          badge: itemT && "badge" in itemT ? itemT.badge : item.badge,
        };
      }),
    };
  });
}
