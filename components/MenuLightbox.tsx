"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { MenuItemData } from "@/data/menu";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

interface MenuLightboxProps {
  item: MenuItemData | null;
  onClose: () => void;
}

export default function MenuLightbox({ item, onClose }: MenuLightboxProps) {
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
      className="animate-lightbox-backdrop fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overscroll-y-contain bg-black/70 p-5 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      <div
        className="animate-lightbox-content relative mx-auto w-full max-w-md border border-white/10 bg-onyx/95 shadow-[0_24px_80px_rgba(0,0,0,0.6)] sm:max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-0 right-0 z-10 flex h-12 w-12 items-center justify-center text-neutral-200/50 transition-colors duration-500 hover:text-champagne"
          aria-label="Fermer"
        >
          <span className="sr-only">Fermer</span>
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
            className="object-cover transition-transform duration-700 ease-out"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="px-8 pt-2 pb-10 text-center sm:px-10 sm:pb-12">
          {item.badge && (
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-champagne">
              {item.badge}
            </p>
          )}
          <h3
            id="lightbox-title"
            className="font-heading mt-3 text-2xl font-normal text-neutral-200 sm:text-3xl"
          >
            {item.name}
          </h3>
          <div className="divider-gold mx-auto mt-6" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-xs text-sm leading-relaxed tracking-wide text-foreground-muted italic">
            {item.description}
          </p>
          <p className="font-heading mt-8 text-xl tracking-wide text-champagne sm:text-2xl">
            {item.price}
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
