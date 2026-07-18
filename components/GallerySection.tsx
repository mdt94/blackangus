"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const gallery = [
  {
    id: "rumsteak",
    src: "/images/rumsteak.jpg",
    alt: "Formule Black Angus avec rumsteak, frites, purée et salade",
    name: "Formule Black Red",
    description:
      "Cœur de rumsteak Angus, frites, purée et salade — dressée à table.",
    objectPosition: "center 40%",
  },
  {
    id: "sauce-verte",
    src: "/images/sauce-verte.jpg",
    alt: "Sauce verte versée sur une pièce de bœuf Angus",
    name: "Sauce verte",
    description:
      "Herbes fraîches et beurre, versés à la demande.",
    objectPosition: "center center",
  },
  {
    id: "profiteroles",
    src: "/images/profiteroles-2.jpg",
    alt: "Profiteroles au chocolat",
    name: "Profiteroles",
    description:
      "Choux, crème vanille, nappage chocolat chaud.",
    objectPosition: "center 45%",
  },
  {
    id: "fondant",
    src: "/images/fondant-chocolat.jpg",
    alt: "Moelleux au chocolat et glace vanille",
    name: "Moelleux au chocolat",
    description:
      "Cœur coulant, glace vanille, sauce chocolat à table.",
    objectPosition: "center 35%",
  },
  {
    id: "tarte",
    src: "/images/tarte.jpg",
    alt: "Tarte aux pommes maison",
    name: "Tarte maison",
    description:
      "Pomme, poire ou citron — pâte sablée, amandes.",
    objectPosition: "center 40%",
  },
  {
    id: "filet",
    src: "/images/filet.jpg",
    alt: "Filet Angus et frites, sauce signature",
    name: "Black Premium",
    description:
      "Filet Angus, frites, sauce maison coulée à table.",
    objectPosition: "center 40%",
  },
];

export default function GallerySection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="galerie" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-xl">
            <p className="section-eyebrow">Galerie</p>
            <h2 className="section-title mt-6 text-5xl sm:text-6xl lg:text-7xl">
              L&apos;assiette
            </h2>
            <p className="mt-6 text-[0.95rem] text-foreground-muted">
              Survolez une photographie pour en lire la composition.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {gallery.map((shot, index) => {
            const isActive = activeId === shot.id;

            return (
              <ScrollReveal key={shot.id} delay={index * 60}>
                <button
                  type="button"
                  className="group relative block aspect-[4/5] w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-1 focus-visible:ring-champagne/40"
                  aria-label={`${shot.name}. ${shot.description}`}
                  aria-expanded={isActive}
                  onMouseEnter={() => setActiveId(shot.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(shot.id)}
                  onBlur={() => setActiveId(null)}
                  onClick={() => {
                    const canHover =
                      typeof window !== "undefined" &&
                      window.matchMedia("(hover: hover)").matches;
                    if (canHover) return;
                    setActiveId((current) =>
                      current === shot.id ? null : shot.id,
                    );
                  }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-[transform,filter] duration-500 ease-out ${
                      isActive
                        ? "scale-[1.02] brightness-[0.48]"
                        : "scale-100 brightness-100 group-hover:scale-[1.02] group-hover:brightness-[0.48]"
                    }`}
                    style={{ objectPosition: shot.objectPosition }}
                  />

                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141210]/90 via-[#141210]/20 to-transparent transition-opacity duration-500 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                    }`}
                    aria-hidden="true"
                  />

                  <div
                    className={`absolute inset-x-0 bottom-0 z-10 px-5 pb-6 pt-12 transition-all duration-500 ease-out ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    }`}
                  >
                    <h3 className="font-heading text-2xl font-normal text-cream">
                      {shot.name}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/70">
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
