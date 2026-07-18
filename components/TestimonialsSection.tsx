import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Viande tendre, service soigné. La sauce rouge est une vraie découverte.",
    author: "Julien M.",
  },
  {
    quote:
      "L'entrecôte Black Angus la meilleure que j'ai mangée à Paris — ambiance juste comme il faut.",
    author: "Sophie L.",
  },
  {
    quote:
      "Cocktails bien trouvés, cuisson impeccable. On y retourne.",
    author: "Antoine D.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="avis" className="bg-surface py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-xl">
            <p className="section-eyebrow">Témoignages</p>
            <h2 className="section-title mt-6 text-5xl sm:text-6xl lg:text-7xl">
              Ils en parlent
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
          {testimonials.map((review, index) => (
            <ScrollReveal key={review.author} delay={index * 100}>
              <blockquote className="border-l border-champagne/40 pl-6">
                <p className="font-heading text-xl italic leading-relaxed text-cream/90 sm:text-[1.35rem]">
                  {review.quote}
                </p>
                <footer className="mt-6 text-sm text-foreground-muted">
                  — {review.author}
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
