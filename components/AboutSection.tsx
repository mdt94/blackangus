import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="a-propos" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <div>
              <p className="section-eyebrow">La maison</p>
              <h2 className="section-title mt-6 text-5xl sm:text-6xl lg:text-[4.25rem]">
                Ici, on prend
                <br />
                le temps du bœuf
              </h2>
              <p className="mt-8 max-w-md text-[0.95rem] leading-[1.85] text-foreground-muted">
                On sélectionne la viande, on la mature, on la grille. Salade,
                frites, purée — et des sauces maison versées à table.
              </p>
              <p className="mt-5 max-w-md text-[0.95rem] leading-[1.85] text-foreground-muted">
                Une adresse de quartier, soignée, pour manger vraiment bien.
              </p>

              <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-10">
                {[
                  { value: "15+", label: "Ans sur place" },
                  { value: "28j", label: "Maturation min." },
                  { value: "100%", label: "Black Angus" },
                  { value: "4.9", label: "Note clients" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-heading text-3xl font-normal text-cream sm:text-4xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-2 text-xs text-foreground-muted">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="relative mx-auto w-full max-w-lg pb-14 lg:max-w-none lg:pb-16">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/filet.jpg"
                  alt="Filet Angus et frites, sauce signature versée à table"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-1 -left-3 w-[52%] overflow-hidden sm:-left-6 sm:w-[46%] lg:bottom-2">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/sauce-verte.jpg"
                    alt="Sauce verte maison sur cœur de rumsteak"
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
