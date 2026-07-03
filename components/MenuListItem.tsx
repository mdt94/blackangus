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
      className="group w-full cursor-pointer py-6 text-left outline-none transition-opacity duration-500 focus-visible:opacity-80"
      aria-label={`Voir ${item.name}`}
    >
      <div className="flex items-baseline gap-4">
        <h3 className="font-heading shrink-0 text-2xl font-normal text-neutral-200 transition-colors duration-500 group-hover:text-champagne sm:text-3xl">
          {item.name}
        </h3>
        {item.badge && (
          <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.25em] text-champagne">
            {item.badge}
          </span>
        )}
        <span
          className="mb-2 min-w-8 flex-1 border-b border-dotted border-white/15 transition-colors duration-500 group-hover:border-champagne/30"
          aria-hidden="true"
        />
        <span className="font-heading shrink-0 text-xl text-champagne sm:text-2xl">
          {item.price}
        </span>
      </div>

      <p className="mt-3 max-w-xl text-sm leading-relaxed tracking-wide text-foreground-muted transition-colors duration-500 group-hover:text-neutral-200/60">
        {item.description}
      </p>
    </button>
  );
}
