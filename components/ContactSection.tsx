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
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="section-title text-[clamp(2.25rem,5vw,4rem)]">
            Réserver une table
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <div className="space-y-8">
              <p className="section-lead">
                Adressez-nous votre demande — confirmation sous vingt-quatre
                heures.
              </p>
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
