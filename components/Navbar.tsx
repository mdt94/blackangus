"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#menu", label: "Menu" },
  { href: "#galerie", label: "Photos" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-line bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8 lg:py-6">
        <Link
          href="#accueil"
          className="font-heading text-xl font-normal tracking-tight text-cream lg:text-2xl"
        >
          Black Angus
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
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

        <div className="hidden lg:block">
          <Button href="#contact">Réserver</Button>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-px w-6 bg-cream transition-transform duration-300 ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-cream transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-cream transition-transform duration-300 ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-background/98 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-heading text-2xl text-cream transition-colors duration-300 hover:text-champagne"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-6">
              <Button href="#contact" className="w-full">
                Réserver
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
