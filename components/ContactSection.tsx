"use client";

import ScrollReveal from "./ScrollReveal";
import ReservationForm from "./ReservationForm";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function ContactSection() {
  const { t } = useLocale();

  const contactDetails = [
    { label: t.contact.labels.address, value: t.contact.values.address },
    { label: t.contact.labels.phone, value: t.contact.values.phone },
    { label: t.contact.labels.email, value: t.contact.values.email },
    { label: t.contact.labels.hours, value: t.contact.values.hours },
  ];

  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="section-title text-[clamp(2.25rem,5vw,4rem)]">
            {t.contact.title}
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <div className="space-y-8">
              <p className="section-lead">{t.contact.lead}</p>
              <dl className="space-y-5">
                {contactDetails.map((detail) => (
                  <div key={detail.label}>
                    <dt className="text-sm text-foreground-muted">
                      {detail.label}
                    </dt>
                    <dd className="mt-1 text-base text-cream">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <ReservationForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
