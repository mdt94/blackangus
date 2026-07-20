import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Une viande d'une tendreté remarquable. La sauce rouge est une vraie signature.",
    author: "Julien M.",
  },
  {
    quote:
      "L'entrecôte Black Angus, servie avec simplicité et précision — l'une des meilleures tables du quartier.",
    author: "Sophie L.",
  },
  {
    quote:
      "Cocktails soignés, cuisson maîtrisée, ambiance feutrée. Nous y revenons.",
    author: "Antoine D.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="avis" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="section-title max-w-xl text-[clamp(2rem,4vw,3.25rem)]">
            Ce que disent nos convives
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {testimonials.map((review, index) => (
            <ScrollReveal key={review.author} delay={index * 80}>
              <blockquote>
                <p className="font-heading text-xl italic leading-relaxed text-cream/90">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-5 text-sm text-foreground-muted">
                  {review.author}
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
