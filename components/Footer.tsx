"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();

  const footerLinks = [
    { href: "#accueil", label: t.footer.home },
    { href: "#a-propos", label: t.nav.about },
    { href: "#menu", label: t.nav.menu },
    { href: "#galerie", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12">
          <div>
            <p className="font-heading text-xl text-cream">Black Angus</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground-muted">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm text-cream">{t.footer.navigation}</p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
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
            <p className="text-sm text-cream">{t.footer.hours}</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
              <li>{t.footer.hoursWeek}</li>
              <li>{t.footer.hoursWeekend}</li>
              <li>{t.footer.hoursSunday}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-8 text-xs text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Black Angus République</p>
          <p>{t.contact.values.address}</p>
        </div>
      </div>
    </footer>
  );
}
