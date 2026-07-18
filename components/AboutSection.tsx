import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="a-propos" className="bg-black py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal>
            <div>
              <p className="section-eyebrow">Notre Histoire</p>
              <h2 className="font-heading mt-8 text-5xl font-normal leading-tight text-neutral-200 sm:text-6xl lg:text-7xl">
                L&apos;Excellence
                <br />
                <span className="italic text-champagne">Black Angus</span>
              </h2>
              <div className="divider-gold mt-10" />
              <p className="mt-10 text-sm leading-[1.9] tracking-wide text-foreground-muted">
                Niché sur l&apos;avenue de la République, notre restaurant
                célèbre la viande Black Angus dans toute sa splendeur. Chaque
                pièce est sélectionnée avec soin, maturée selon les traditions
                artisanales et grillée à la perfection.
              </p>
              <p className="mt-6 text-sm leading-[1.9] tracking-wide text-foreground-muted">
                De notre formule signature au filet premium, chaque assiette
                raconte une histoire de passion, de qualité et de savoir-faire
                français.
              </p>

              <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { value: "15+", label: "Années d'expérience" },
                  { value: "100%", label: "Black Angus certifié" },
                  { value: "28j", label: "Maturité minimum" },
                  { value: "4.9", label: "Note moyenne" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-heading text-3xl font-normal text-champagne sm:text-4xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-3 text-[10px] uppercase tracking-[0.2em] text-foreground-muted">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative mx-auto w-full max-w-lg pb-16 lg:max-w-none lg:pb-20">
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
              <div className="absolute -bottom-2 -left-4 w-[55%] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.55)] sm:-left-8 sm:w-[48%] lg:bottom-4">
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
