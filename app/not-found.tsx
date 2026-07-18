import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="section-eyebrow">404</p>
      <h1 className="section-title mt-6 text-6xl sm:text-7xl lg:text-8xl">
        Cette page
        <br />
        <span className="italic font-normal text-champagne">n&apos;existe pas</span>
      </h1>
      <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-foreground-muted">
        L&apos;adresse a dû changer — ou la table a déjà été débarrassée.
        Revenez à l&apos;accueil pour continuer.
      </p>
      <div className="mt-12">
        <Button href="/">Retourner à l&apos;accueil</Button>
      </div>
    </main>
  );
}
