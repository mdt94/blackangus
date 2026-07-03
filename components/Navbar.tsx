"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À Propos" },
  { href: "#menu", label: "Menu" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-8">
        <Link
          href="#accueil"
          className="font-heading text-xl font-normal tracking-tight text-neutral-200 lg:text-2xl"
        >
          Black Angus
          <span className="text-champagne">.</span>
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[10px] font-medium uppercase tracking-[0.25em] text-foreground-muted transition-colors duration-500 hover:text-champagne"
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
            className={`block h-px w-6 bg-neutral-200 transition-transform duration-500 ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-neutral-200 transition-opacity duration-500 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-neutral-200 transition-transform duration-500 ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col px-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 font-heading text-2xl text-neutral-200 transition-colors duration-500 hover:text-champagne"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-8">
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
