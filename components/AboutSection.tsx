"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function AboutSection() {
  const { t } = useLocale();

  const stats = [
    { value: "15+", label: t.about.stats.years },
    { value: "28 j", label: t.about.stats.aging },
    { value: "100 %", label: t.about.stats.angus },
    { value: "4,9", label: t.about.stats.rating },
  ];

  return (
    <section id="a-propos" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
          <ScrollReveal>
            <div className="max-w-lg">
              <h2 className="section-title text-[clamp(2.25rem,5vw,4rem)]">
                {t.about.title}
              </h2>
              <p className="section-lead mt-7">{t.about.lead}</p>
              <dl className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 border-t border-line pt-10">
                {stats.map((stat) => (
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
                  alt={t.about.imageAlt1}
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
                    alt={t.about.imageAlt2}
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
