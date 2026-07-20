"use client";

import { useState } from "react";
import type { MenuCategoryId, MenuItemData } from "@/data/menu";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { getLocalizedMenuCategories } from "@/lib/i18n/menu";
import MenuListItem from "./MenuListItem";
import MenuLightbox from "./MenuLightbox";

export default function MenuTabs() {
  const { locale, t } = useLocale();
  const menuCategories = getLocalizedMenuCategories(locale);
  const [activeTab, setActiveTab] = useState<MenuCategoryId>("meats");
  const [selectedItem, setSelectedItem] = useState<MenuItemData | null>(null);
  const activeCategory = menuCategories.find((c) => c.id === activeTab)!;

  return (
    <>
      <div>
        <div
          role="tablist"
          aria-label={t.a11y.menuCategories}
          className="flex flex-wrap gap-x-7 gap-y-2"
        >
          {menuCategories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(category.id)}
                className={`relative pb-2 text-[0.9375rem] transition-colors duration-300 ${
                  isActive
                    ? "text-cream"
                    : "text-foreground-muted hover:text-cream/80"
                }`}
              >
                {category.label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-champagne transition-[width,opacity] duration-300 ease-out ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div role="tabpanel" className="mt-10 animate-hero-rise" key={activeTab}>
          {(activeCategory.subtitle ||
            activeCategory.note ||
            activeCategory.defaultPrice) && (
            <div className="mb-10 space-y-2">
              {activeCategory.subtitle && (
                <p className="font-heading text-lg italic text-cream/80">
                  {activeCategory.subtitle}
                </p>
              )}
              {activeCategory.defaultPrice && (
                <p className="text-sm text-foreground-muted">
                  {activeCategory.defaultPrice} {t.menu.perUnit}
                </p>
              )}
              {activeCategory.note && (
                <p className="text-sm text-champagne/90">{activeCategory.note}</p>
              )}
            </div>
          )}

          <div className="mx-auto flex max-w-3xl flex-col divide-y divide-line pb-12 md:pb-16">
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
