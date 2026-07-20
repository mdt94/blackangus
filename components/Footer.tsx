import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          <div>
            <p className="font-heading text-2xl font-normal text-cream">
              Black Angus
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">
              Steakhouse Black Angus, place de la République — Paris 11e.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-wide text-cream">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#a-propos", label: "À propos" },
                { href: "#menu", label: "Menu" },
                { href: "#galerie", label: "Photos" },
                { href: "#avis", label: "Avis" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted transition-colors duration-300 hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-wide text-cream">
              Horaires
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-foreground-muted">
              <li>Lun – Jeu · 12h – 23h</li>
              <li>Ven – Sam · 12h – 00h</li>
              <li>Dim · 12h – 22h</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-xs text-foreground-muted/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Black Angus République</p>
          <p>8 Place de la République, 75011 Paris</p>
        </div>
      </div>
    </footer>
  );
}
