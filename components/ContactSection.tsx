import Button from "./Button";
import ScrollReveal from "./ScrollReveal";

const contactDetails = [
  { label: "Adresse", value: "42 Avenue de la République, 75011 Paris" },
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
            <h2 className="font-heading mt-6 text-5xl font-normal text-cream sm:text-6xl lg:text-7xl">
              Une table
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <div className="space-y-8">
              <p className="max-w-sm text-[0.95rem] leading-relaxed text-foreground-muted">
                Envoyez votre demande — on confirme sous 24 heures.
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
            <form className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs text-foreground-muted"
                  >
                    Nom *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jean Dupont"
                    className="input-luxury"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs text-foreground-muted"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jean.dupont@email.com"
                    className="input-luxury"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs text-foreground-muted"
                  >
                    Téléphone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+33 6 00 00 00 00"
                    className="input-luxury"
                  />
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="mb-2 block text-xs text-foreground-muted"
                  >
                    Convives *
                  </label>
                  <select
                    id="guests"
                    required
                    className="input-luxury cursor-pointer appearance-none"
                    defaultValue="2"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n} className="bg-surface">
                        {n} {n === 1 ? "personne" : "personnes"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-xs text-foreground-muted"
                >
                  Date *
                </label>
                <input id="date" type="date" required className="input-luxury" />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs text-foreground-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Occasion, allergies…"
                  className="input-luxury resize-none"
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Envoyer
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
