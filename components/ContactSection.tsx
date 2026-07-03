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
    <section id="contact" className="bg-black py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center lg:text-left">
            <p className="section-eyebrow">Réservez</p>
            <h2 className="font-heading mt-8 text-5xl font-normal text-neutral-200 sm:text-6xl lg:text-7xl">
              Réserver une Table
            </h2>
            <div className="divider-gold mx-auto mt-10 lg:mx-0" />
          </div>
        </ScrollReveal>

        <div className="mt-20 grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal>
            <div className="space-y-10">
              <p className="text-sm leading-[1.9] tracking-wide text-foreground-muted">
                Complétez le formulaire pour envoyer votre demande de
                réservation. Notre équipe vous confirmera votre table sous 24
                heures.
              </p>
              <dl className="space-y-8">
                {contactDetails.map((detail) => (
                  <div key={detail.label}>
                    <dt className="text-[10px] font-medium uppercase tracking-[0.3em] text-champagne">
                      {detail.label}
                    </dt>
                    <dd className="mt-3 text-sm text-neutral-200">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form className="space-y-10">
              <div>
                <h3 className="font-heading text-3xl font-normal text-neutral-200">
                  Demande de réservation
                </h3>
                <p className="mt-3 text-sm text-foreground-muted">
                  Tous les champs marqués sont requis.
                </p>
              </div>

              <div className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-foreground-muted"
                    >
                      Nom complet *
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
                      className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-foreground-muted"
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

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-foreground-muted"
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
                      className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-foreground-muted"
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
                        <option key={n} value={n} className="bg-black">
                          {n} {n === 1 ? "personne" : "personnes"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-foreground-muted"
                  >
                    Date souhaitée *
                  </label>
                  <input
                    id="date"
                    type="date"
                    required
                    className="input-luxury"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-foreground-muted"
                  >
                    Message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Occasion spéciale, allergies alimentaires..."
                    className="input-luxury resize-none"
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  Confirmer la Demande
                </Button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
