import Button from "./Button";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Une viande d'une tendreté exceptionnelle et un service aux petits soins. La sauce rouge est une découverte incroyable.",
    author: "Julien M.",
  },
  {
    quote:
      "L'ambiance est tamisée, chic, et l'entrecôte Black Angus est tout simplement la meilleure que j'ai mangée à Paris.",
    author: "Sophie L.",
  },
  {
    quote:
      "Des cocktails signatures surprenants et une cuisson maîtrisée à la perfection. Une adresse incontournable.",
    author: "Antoine D.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1.5" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-3 w-3 text-champagne"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.35l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="avis" className="bg-black py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="section-eyebrow">Avis Clients</p>
            <h2 className="font-heading mt-8 text-5xl font-normal text-neutral-200 sm:text-6xl lg:text-7xl">
              Ils en parlent
            </h2>
            <div className="divider-gold mx-auto mt-10" />
          </div>
        </ScrollReveal>

        <div className="mt-24 grid gap-12 md:grid-cols-3 md:gap-10">
          {testimonials.map((review, index) => (
            <ScrollReveal key={review.author} delay={index * 150}>
              <article className="flex h-full flex-col bg-white/[0.03] px-10 py-12">
                <StarRating />
                <blockquote className="mt-10 flex-1">
                  <p className="font-heading text-lg italic leading-relaxed text-neutral-200/90 sm:text-xl">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </blockquote>
                <footer className="mt-10 text-[10px] font-medium uppercase tracking-[0.25em] text-foreground-muted">
                  {review.author}
                </footer>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-20 text-center">
            <Button href="#">Partager votre expérience</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
