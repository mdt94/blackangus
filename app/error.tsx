"use client";

import { useEffect } from "react";
import Button from "@/components/Button";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="section-eyebrow">Un instant</p>
      <h1 className="font-heading mt-6 text-6xl font-normal text-cream sm:text-7xl lg:text-8xl">
        Quelque chose
        <br />
        <span className="italic text-champagne">s&apos;est figé</span>
      </h1>
      <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-foreground-muted">
        Pas d&apos;inquiétude — un petit contretemps côté cuisine numérique.
        Réessayez dans un moment, ou revenez à l&apos;accueil.
      </p>
      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
        <Button type="button" onClick={() => unstable_retry()}>
          Réessayer
        </Button>
        <Button href="/">Retourner à l&apos;accueil</Button>
      </div>
    </main>
  );
}
