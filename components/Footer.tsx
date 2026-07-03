import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-20 md:grid-cols-3">
          <div>
            <p className="font-heading text-3xl font-normal text-neutral-200">
              Black Angus<span className="text-champagne">.</span>
            </p>
            <p className="mt-8 max-w-xs text-sm leading-relaxed tracking-wide text-foreground-muted">
              L&apos;excellence de la viande Black Angus au cœur de la
              République. Une expérience gastronomique d&apos;exception.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-200">
              Navigation
            </h3>
            <ul className="mt-8 space-y-4">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#a-propos", label: "À Propos" },
                { href: "#menu", label: "Menu" },
                { href: "#avis", label: "Avis" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted transition-colors duration-500 hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-200">
              Horaires
            </h3>
            <ul className="mt-8 space-y-3 text-sm text-foreground-muted">
              <li>Lun – Jeu : 12h – 23h</li>
              <li>Ven – Sam : 12h – 00h</li>
              <li>Dim : 12h – 22h</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-12 sm:flex-row">
          <p className="text-[10px] uppercase tracking-[0.2em] text-foreground-muted/60">
            © {new Date().getFullYear()} Black Angus République
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-foreground-muted/60">
            42 Avenue de la République, 75011 Paris
          </p>
        </div>
      </div>
    </footer>
  );
}
