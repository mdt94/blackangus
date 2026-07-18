import ScrollReveal from "./ScrollReveal";
import MenuTabs from "./MenuTabs";

export default function MenuSection() {
  return (
    <section id="menu" className="overflow-visible bg-surface py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-xl">
            <p className="section-eyebrow">La carte</p>
            <h2 className="font-heading mt-6 text-5xl font-normal text-cream sm:text-6xl lg:text-7xl">
              Menu
            </h2>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-foreground-muted">
              Viandes, desserts, cocktails et mocktails — cliquez un plat pour
              le voir.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="mt-16">
            <MenuTabs />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
