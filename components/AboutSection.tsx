import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="a-propos" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
          <ScrollReveal>
            <div className="max-w-lg">
              <h2 className="section-title text-[clamp(2.25rem,5vw,4rem)]">
                Une adresse de viande, face à la République
              </h2>
              <p className="section-lead mt-7">
                Sélection, maturation et cuisson au feu. Formules complètes,
                sauces versées à table, service discret.
              </p>
              <dl className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 border-t border-line pt-10">
                {[
                  { value: "15+", label: "Années" },
                  { value: "28 j", label: "Maturation" },
                  { value: "100 %", label: "Black Angus" },
                  { value: "4,9", label: "Note clients" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-heading text-3xl text-cream">{stat.value}</dt>
                    <dd className="mt-1 text-sm text-foreground-muted">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="relative mx-auto w-full max-w-md pb-12 lg:max-w-none lg:pb-14">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/filet.jpg"
                  alt="Filet Angus et frites, sauce signature versée à table"
                  fill
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -left-4 w-[48%] sm:-left-6">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/sauce-verte.jpg"
                    alt="Sauce verte maison sur cœur de rumsteak"
                    fill
                    sizes="28vw"
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
