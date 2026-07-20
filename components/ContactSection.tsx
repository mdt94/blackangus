import ScrollReveal from "./ScrollReveal";
import ReservationForm from "./ReservationForm";

const contactDetails = [
  { label: "Adresse", value: "8 Place de la République, 75011 Paris" },
  { label: "Téléphone", value: "+33 1 42 00 00 00" },
  { label: "Email", value: "contact@blackangus-republique.fr" },
  {
    label: "Horaires",
    value: "Lun–Jeu 12h–23h · Ven–Sam 12h–00h · Dim 12h–22h",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div>
            <p className="section-eyebrow">Réservation</p>
            <h2 className="section-title mt-6 text-5xl sm:text-6xl lg:text-7xl">
              Une table
              <br />
              <span className="italic font-normal text-champagne">pour vous</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <div className="space-y-8">
              <p className="max-w-sm text-[0.95rem] leading-relaxed text-foreground-muted">
                Adressez-nous votre demande — nous confirmons votre réservation
                sous vingt-quatre heures.
              </p>
              <dl className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.label}>
                    <dt className="text-xs font-medium tracking-wide text-champagne">
                      {detail.label}
                    </dt>
                    <dd className="mt-2 text-sm text-cream">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <ReservationForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
