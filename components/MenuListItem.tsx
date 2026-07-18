"use client";

import type { MenuItemData } from "@/data/menu";

interface MenuListItemProps {
  item: MenuItemData;
  onSelect: (item: MenuItemData) => void;
}

export default function MenuListItem({ item, onSelect }: MenuListItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group w-full cursor-pointer py-5 text-left outline-none transition-opacity duration-300 focus-visible:opacity-80 first:pt-0"
      aria-label={`Voir ${item.name}`}
    >
      <div className="flex items-baseline gap-3">
        <h3 className="font-heading shrink-0 text-2xl font-normal text-cream transition-colors duration-300 group-hover:text-champagne sm:text-[1.75rem]">
          {item.name}
        </h3>
        {item.badge && (
          <span className="shrink-0 text-xs text-champagne">{item.badge}</span>
        )}
        <span
          className="mb-1.5 min-w-6 flex-1 border-b border-dotted border-line transition-colors duration-300 group-hover:border-champagne/35"
          aria-hidden="true"
        />
        <span className="font-heading shrink-0 text-xl text-champagne sm:text-2xl">
          {item.price}
        </span>
      </div>

      <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground-muted">
        {item.description}
      </p>
    </button>
  );
}
