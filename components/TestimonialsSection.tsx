"use client";

import ScrollReveal from "./ScrollReveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function TestimonialsSection() {
  const { t } = useLocale();

  return (
    <section id="avis" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="section-title max-w-xl text-[clamp(2rem,4vw,3.25rem)]">
            {t.testimonials.title}
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {t.testimonials.items.map((review, index) => (
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
