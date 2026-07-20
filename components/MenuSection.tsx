import ScrollReveal from "./ScrollReveal";
import MenuTabs from "./MenuTabs";

export default function MenuSection() {
  return (
    <section id="menu" className="overflow-visible bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-6 border-b border-line pb-10 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title text-[clamp(2.25rem,5vw,4rem)]">
              La carte
            </h2>
            <p className="section-lead lg:max-w-sm lg:text-right">
              Viandes, desserts et bar — touchez un plat pour le voir en détail.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-12">
            <MenuTabs />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
