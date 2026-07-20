"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { MenuItemData } from "@/data/menu";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

interface MenuLightboxProps {
  item: MenuItemData | null;
  onClose: () => void;
}

export default function MenuLightbox({ item, onClose }: MenuLightboxProps) {
  const { t } = useLocale();
  useEffect(() => {
    if (!item) return;

    lockBodyScroll();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      unlockBodyScroll();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return createPortal(
    <div
      key={item.id}
      className="animate-lightbox-backdrop fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overscroll-y-contain bg-[#141210]/85 p-5 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      <div
        className="animate-lightbox-content relative mx-auto w-full max-w-md border border-line bg-surface sm:max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-0 right-0 z-10 flex h-12 w-12 items-center justify-center text-cream/40 transition-colors duration-300 hover:text-champagne"
          aria-label={t.a11y.close}
        >
          <span className="sr-only">{t.a11y.close}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="relative aspect-[5/4] overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 512px"
            className="object-cover"
            style={
              item.imagePosition
                ? { objectPosition: item.imagePosition }
                : undefined
            }
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="px-8 pt-1 pb-10 text-center sm:px-10 sm:pb-12">
          {item.badge && (
            <p className="text-xs text-champagne">{item.badge}</p>
          )}
          <h3
            id="lightbox-title"
            className="font-heading mt-2 text-2xl font-normal text-cream sm:text-3xl"
          >
            {item.name}
          </h3>
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">
            {item.description}
          </p>
          <p className="font-heading mt-6 text-xl text-champagne sm:text-2xl">
            {item.price}
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
