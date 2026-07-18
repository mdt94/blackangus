import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const gallery = [
  {
    src: "/images/rumsteak.jpg",
    alt: "Formule Black Angus avec rumsteak, frites, purée et salade",
    className: "md:col-span-2 md:row-span-2 h-[420px] md:h-auto md:min-h-[540px]",
  },
  {
    src: "/images/sauce-verte.jpg",
    alt: "Sauce verte versée sur une pièce de bœuf Angus",
    className: "h-[360px] md:h-[260px]",
  },
  {
    src: "/images/profiteroles-2.jpg",
    alt: "Profiteroles au chocolat",
    className: "h-[360px] md:h-[260px]",
  },
  {
    src: "/images/fondant-chocolat.jpg",
    alt: "Moelleux au chocolat et glace vanille",
    className: "h-[360px] md:h-[280px]",
  },
  {
    src: "/images/tarte.jpg",
    alt: "Tarte aux pommes maison",
    className: "h-[360px] md:h-[280px]",
  },
  {
    src: "/images/desserts-platter.jpg",
    alt: "Sélection de desserts Black Angus",
    className: "md:col-span-2 h-[300px] md:h-[340px]",
  },
];

export default function GallerySection() {
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
              Viandes maturées, sauces signature et desserts maison —
              capturés à table, avenue de la République.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-24 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
          {gallery.map((shot, index) => (
            <ScrollReveal
              key={shot.src}
              delay={index * 80}
              className={shot.className}
            >
              <div className="group relative h-full w-full overflow-hidden">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
