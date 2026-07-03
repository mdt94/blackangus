import ScrollReveal from "./ScrollReveal";
import MenuTabs from "./MenuTabs";

export default function MenuSection() {
  return (
    <section id="menu" className="overflow-visible bg-black py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="section-eyebrow">Notre Carte</p>
            <h2 className="font-heading mt-8 text-5xl font-normal text-neutral-200 sm:text-6xl lg:text-7xl">
              Le Menu
            </h2>
            <div className="divider-gold mx-auto mt-10" />
            <p className="mx-auto mt-10 max-w-lg text-sm tracking-wide text-foreground-muted">
              Une sélection raffinée, dressée comme une carte de restaurant
              d&apos;exception.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-24">
            <MenuTabs />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
