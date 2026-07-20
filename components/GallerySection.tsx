"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const galleryIds = [
  "rumsteak",
  "sauce-verte",
  "profiteroles",
  "fondant",
  "tarte",
  "filet",
] as const;

const galleryMeta = {
  rumsteak: {
    src: "/images/rumsteak.jpg",
    objectPosition: "center 40%",
  },
  "sauce-verte": {
    src: "/images/sauce-verte.jpg",
    objectPosition: "center center",
  },
  profiteroles: {
    src: "/images/profiteroles-2.jpg",
    objectPosition: "center 45%",
  },
  fondant: {
    src: "/images/fondant-chocolat.jpg",
    objectPosition: "center 35%",
  },
  tarte: {
    src: "/images/tarte.jpg",
    objectPosition: "center 40%",
  },
  filet: {
    src: "/images/filet.jpg",
    objectPosition: "center 40%",
  },
} as const;

export default function GallerySection() {
  const { t } = useLocale();
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="galerie" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-xl">
            <h2 className="section-title text-[clamp(2.25rem,5vw,4rem)]">
              {t.gallery.title}
            </h2>
            <p className="section-lead mt-5">{t.gallery.lead}</p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {galleryIds.map((id, index) => {
            const shot = t.gallery.shots[id];
            const meta = galleryMeta[id];
            const isActive = activeId === id;

            return (
              <ScrollReveal key={id} delay={index * 50}>
                <button
                  type="button"
                  className="group relative block aspect-[4/5] w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-1 focus-visible:ring-champagne/40"
                  aria-label={`${shot.name}. ${shot.description}`}
                  aria-expanded={isActive}
                  onMouseEnter={() => setActiveId(id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(id)}
                  onBlur={() => setActiveId(null)}
                  onClick={() => {
                    const canHover =
                      typeof window !== "undefined" &&
                      window.matchMedia("(hover: hover)").matches;
                    if (canHover) return;
                    setActiveId((current) => (current === id ? null : id));
                  }}
                >
                  <Image
                    src={meta.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-[transform,filter] duration-700 ease-out ${
                      isActive
                        ? "scale-[1.02] brightness-[0.5]"
                        : "scale-100 brightness-100 group-hover:scale-[1.02] group-hover:brightness-[0.5]"
                    }`}
                    style={{ objectPosition: meta.objectPosition }}
                  />

                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/15 to-transparent transition-opacity duration-500 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-40 group-hover:opacity-100"
                    }`}
                    aria-hidden="true"
                  />

                  <div
                    className={`absolute inset-x-0 bottom-0 z-10 px-5 pb-5 pt-10 transition-[transform,opacity] duration-500 ease-out ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    }`}
                  >
                    <h3 className="font-heading text-xl text-cream">{shot.name}</h3>
                    <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-cream/75">
                      {shot.description}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
