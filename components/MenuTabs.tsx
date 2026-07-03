"use client";

import { useState } from "react";
import { menuCategories, type MenuCategoryId, type MenuItemData } from "@/data/menu";
import MenuListItem from "./MenuListItem";
import MenuLightbox from "./MenuLightbox";

export default function MenuTabs() {
  const [activeTab, setActiveTab] = useState<MenuCategoryId>("meats");
  const [selectedItem, setSelectedItem] = useState<MenuItemData | null>(null);
  const activeCategory = menuCategories.find((c) => c.id === activeTab)!;

  return (
    <>
      <div>
        <div
          role="tablist"
          aria-label="Catégories du menu"
          className="flex flex-wrap justify-center gap-x-12 gap-y-4 border-b border-white/10 pb-2"
        >
          {menuCategories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(category.id)}
                className={`relative pb-5 text-[10px] font-medium uppercase tracking-[0.3em] transition-colors duration-700 ${
                  isActive
                    ? "text-neutral-200"
                    : "text-foreground-muted hover:text-neutral-200/70"
                }`}
              >
                {category.label}
                <span
                  className={`absolute bottom-0 left-0 h-px w-full origin-left bg-champagne transition-transform duration-700 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          className="mt-20 animate-fade-in-up"
          key={activeTab}
        >
          {(activeCategory.subtitle ||
            activeCategory.note ||
            activeCategory.defaultPrice) && (
            <div className="mb-20 space-y-5 text-center">
              {activeCategory.subtitle && (
                <p className="font-heading text-xl italic text-neutral-200/80">
                  {activeCategory.subtitle}
                </p>
              )}
              {activeCategory.defaultPrice && (
                <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-foreground-muted">
                  Prix unitaire · {activeCategory.defaultPrice}
                </p>
              )}
              {activeCategory.note && (
                <p className="text-sm tracking-wide text-champagne/80">
                  {activeCategory.note}
                </p>
              )}
            </div>
          )}

          <div className="mx-auto flex max-w-3xl flex-col gap-10 pb-24 md:pb-32">
            {activeCategory.items.map((item) => (
              <MenuListItem
                key={item.id}
                item={item}
                onSelect={setSelectedItem}
              />
            ))}
          </div>
        </div>
      </div>

      <MenuLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}
