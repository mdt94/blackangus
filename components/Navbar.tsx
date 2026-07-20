"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

const navLinks = [
  { href: "#a-propos", label: "Le restaurant" },
  { href: "#menu", label: "Carte" },
  { href: "#galerie", label: "Photos" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }

    return () => {
      if (menuOpen) unlockBodyScroll();
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-[background-color,border-color] duration-500 ${
        scrolled ? "border-b border-line bg-background" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="#accueil"
          className="font-heading text-[1.35rem] leading-none text-cream lg:text-2xl"
        >
          Black Angus
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-[0.9375rem] text-foreground-muted transition-colors duration-300 hover:text-cream"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-champagne transition-[width] duration-300 ease-out group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden text-[0.9375rem] text-cream underline decoration-cream/25 underline-offset-[6px] transition-[color,decoration-color] duration-300 hover:text-champagne hover:decoration-champagne/50 md:inline"
        >
          Réserver
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-px w-5 bg-cream transition-transform duration-300 ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-cream transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-cream transition-transform duration-300 ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-line bg-background transition-[max-height,opacity] duration-500 ease-out md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <ul className="flex flex-col px-6 py-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base text-cream transition-colors duration-300 hover:text-champagne"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="border-t border-line pt-4">
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-base text-champagne"
            >
              Réserver une table
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
