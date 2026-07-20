"use client";

import Button from "./Button";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const HERO_IMAGE = "/images/hero-steak.jpg";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-end overflow-hidden pb-24 pt-32 sm:items-center sm:pb-0 sm:pt-0"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[1200ms] ease-out"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-[#141210]/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-[#141210]/55" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p
            className="animate-hero-rise text-sm text-cream/70"
            style={{ animationDelay: "0.05s", opacity: 0 }}
          >
            {t.hero.address}
          </p>
          <h1
            className="section-title animate-hero-rise mt-5 text-[clamp(2.75rem,7vw,5.5rem)]"
            style={{ animationDelay: "0.15s", opacity: 0 }}
          >
            {t.hero.title}
          </h1>
          <p
            className="animate-hero-rise mt-6 max-w-md text-base leading-relaxed text-foreground-muted sm:text-lg"
            style={{ animationDelay: "0.28s", opacity: 0 }}
          >
            {t.hero.lead}
          </p>
          <div
            className="animate-hero-rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <Button href="#menu">{t.hero.ctaMenu}</Button>
            <Button href="#contact" variant="ghost">
              {t.hero.ctaReserve}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
