import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="section-eyebrow">Erreur 404</p>
      <h1 className="font-heading mt-6 text-6xl font-normal text-cream sm:text-7xl lg:text-8xl">
        Page introuvable
      </h1>
      <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-foreground-muted">
        Cette adresse n&apos;existe pas — ou la table a déjà été débarrassée.
        Revenez à l&apos;accueil pour poursuivre votre visite.
      </p>
      <div className="mt-12">
        <Button href="/">Retourner à l&apos;accueil</Button>
      </div>
    </main>
  );
}
