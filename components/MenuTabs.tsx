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
          className="flex flex-wrap gap-x-8 gap-y-3 border-b border-line pb-1"
        >
          {menuCategories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(category.id)}
                className={`relative pb-4 text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-cream"
                    : "text-foreground-muted hover:text-cream/80"
                }`}
              >
                {category.label}
                <span
                  className={`absolute bottom-0 left-0 h-px w-full origin-left bg-champagne transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div role="tabpanel" className="mt-12" key={activeTab}>
          {(activeCategory.subtitle ||
            activeCategory.note ||
            activeCategory.defaultPrice) && (
            <div className="mb-12 space-y-3">
              {activeCategory.subtitle && (
                <p className="font-heading text-lg italic text-cream/75">
                  {activeCategory.subtitle}
                </p>
              )}
              {activeCategory.defaultPrice && (
                <p className="text-sm text-foreground-muted">
                  {activeCategory.defaultPrice} l&apos;unité
                </p>
              )}
              {activeCategory.note && (
                <p className="text-sm text-champagne/90">{activeCategory.note}</p>
              )}
            </div>
          )}

          <div className="mx-auto flex max-w-3xl flex-col divide-y divide-line pb-16 md:pb-20">
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
