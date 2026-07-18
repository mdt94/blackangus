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
      <p className="section-eyebrow">Service momentanément indisponible</p>
      <h1 className="section-title mt-6 text-6xl sm:text-7xl lg:text-8xl">
        Un imprévu
        <br />
        <span className="italic font-normal text-champagne">est survenu</span>
      </h1>
      <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-foreground-muted">
        Veuillez réessayer dans un instant, ou revenir à l&apos;accueil.
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
