"use client";

import { locales, type Locale } from "@/lib/i18n/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function LocaleSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.a11y.chooseLanguage}
      className={`flex items-center gap-2 text-[0.8125rem] tracking-[0.14em] uppercase ${className}`}
    >
      {locales.map((code, index) => (
        <span key={code} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-foreground-muted/35" aria-hidden="true">
              ·
            </span>
          )}
          <button
            type="button"
            onClick={() => setLocale(code as Locale)}
            aria-current={locale === code ? "true" : undefined}
            className={`relative pb-0.5 transition-colors duration-300 ${
              locale === code
                ? "text-cream"
                : "text-foreground-muted hover:text-cream/75"
            }`}
          >
            {code}
            <span
              className={`absolute -bottom-px left-0 h-px bg-champagne transition-[width,opacity] duration-300 ease-out ${
                locale === code ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
              aria-hidden="true"
            />
          </button>
        </span>
      ))}
    </div>
  );
}
