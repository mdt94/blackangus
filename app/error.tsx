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
      <h1 className="section-title text-[clamp(2.5rem,6vw,4.5rem)]">
        Un imprévu est survenu
      </h1>
      <p className="section-lead mt-6">
        Veuillez réessayer dans un instant, ou revenir à l&apos;accueil.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Button type="button" onClick={() => unstable_retry()}>
          Réessayer
        </Button>
        <Button href="/" variant="ghost">
          Retourner à l&apos;accueil
        </Button>
      </div>
    </main>
  );
}
