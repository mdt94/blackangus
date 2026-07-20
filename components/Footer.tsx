import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12">
          <div>
            <p className="font-heading text-xl text-cream">Black Angus</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground-muted">
              Steakhouse Black Angus, place de la République — Paris 11e.
            </p>
          </div>

          <div>
            <p className="text-sm text-cream">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#a-propos", label: "Le restaurant" },
                { href: "#menu", label: "Carte" },
                { href: "#galerie", label: "Photos" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted transition-colors duration-300 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm text-cream">Horaires</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
              <li>Lun – Jeu · 12h – 23h</li>
              <li>Ven – Sam · 12h – 00h</li>
              <li>Dim · 12h – 22h</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-8 text-xs text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Black Angus République</p>
          <p>8 Place de la République, 75011 Paris</p>
        </div>
      </div>
    </footer>
  );
}
