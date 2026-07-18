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
      "Cœur de rumsteak Angus, frites maison, purée onctueuse et salade de bienvenue — dressée à table.",
    objectPosition: "center 40%",
  },
  {
    id: "sauce-verte",
    src: "/images/sauce-verte.jpg",
    alt: "Sauce verte versée sur une pièce de bœuf Angus",
    name: "Sauce verte signature",
    description:
      "Herbes fraîches et beurre, versés à la demande sur une pièce saisie à point.",
    objectPosition: "center center",
  },
  {
    id: "profiteroles",
    src: "/images/profiteroles-2.jpg",
    alt: "Profiteroles au chocolat",
    name: "Profiteroles",
    description:
      "Choux croustillants, crème vanille et nappage chocolat noir servi chaud.",
    objectPosition: "center 45%",
  },
  {
    id: "fondant",
    src: "/images/fondant-chocolat.jpg",
    alt: "Moelleux au chocolat et glace vanille",
    name: "Moelleux au chocolat",
    description:
      "Cœur coulant, glace vanille et sauce chocolat versée devant vous.",
    objectPosition: "center 35%",
  },
  {
    id: "tarte",
    src: "/images/tarte.jpg",
    alt: "Tarte aux pommes maison",
    name: "Tarte maison",
    description:
      "Pâte sablée, pommes caramélisées et amandes effilées — au choix aussi poire ou citron.",
    objectPosition: "center 40%",
  },
  {
    id: "filet",
    src: "/images/filet.jpg",
    alt: "Filet Angus et frites, sauce signature",
    name: "Black Premium",
    description:
      "Filet de bœuf Angus, frites croustillantes et sauce maison coulée à table.",
    objectPosition: "center 40%",
  },
];

export default function GallerySection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="galerie" className="bg-black py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="section-eyebrow">En images</p>
            <h2 className="font-heading mt-8 text-5xl font-normal text-neutral-200 sm:text-6xl lg:text-7xl">
              L&apos;assiette
              <br />
              <span className="italic text-champagne">en lumière</span>
            </h2>
            <div className="divider-gold mx-auto mt-10" />
            <p className="mx-auto mt-10 max-w-lg text-sm tracking-wide text-foreground-muted">
              Survolez une photo pour en lire la description.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-24 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((shot, index) => {
            const isActive = activeId === shot.id;

            return (
              <ScrollReveal key={shot.id} delay={index * 70}>
                <button
                  type="button"
                  className="group relative block aspect-[4/5] w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-1 focus-visible:ring-champagne/50"
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
                    className={`object-cover transition-[transform,filter] duration-700 ease-out ${
                      isActive
                        ? "scale-[1.03] brightness-[0.45]"
                        : "scale-100 brightness-100 group-hover:scale-[1.03] group-hover:brightness-[0.45]"
                    }`}
                    style={{ objectPosition: shot.objectPosition }}
                  />

                  {/* Soft bottom veil always; stronger on hover via image brightness */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-700 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-60 group-hover:opacity-100"
                    }`}
                    aria-hidden="true"
                  />

                  <div
                    className={`absolute inset-x-0 bottom-0 z-10 px-6 pb-8 pt-16 transition-all duration-700 ease-out ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    }`}
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-champagne">
                      Assiette
                    </p>
                    <h3 className="font-heading mt-3 text-2xl font-normal text-neutral-200 sm:text-3xl">
                      {shot.name}
                    </h3>
                    <div className="divider-gold mt-4" />
                    <p className="mt-4 max-w-xs text-sm leading-relaxed tracking-wide text-neutral-200/75">
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
