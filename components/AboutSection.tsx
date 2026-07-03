import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="a-propos" className="bg-black py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-24 lg:grid-cols-2 lg:gap-32">
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
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "15+", label: "Années d'expérience" },
                { value: "100%", label: "Black Angus certifié" },
                { value: "28j", label: "Maturité minimum" },
                { value: "4.9", label: "Note moyenne" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="stat-card p-10 text-center transition-all duration-700 hover:border-champagne/20"
                >
                  <p className="font-heading text-4xl font-normal text-champagne">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-foreground-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
