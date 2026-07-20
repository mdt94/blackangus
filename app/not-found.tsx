import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="section-title text-[clamp(2.5rem,6vw,4.5rem)]">
        Page introuvable
      </h1>
      <p className="section-lead mt-6">
        Cette adresse n&apos;existe pas. Nous vous invitons à revenir à
        l&apos;accueil.
      </p>
      <div className="mt-10">
        <Button href="/" variant="ghost">
          Retourner à l&apos;accueil
        </Button>
      </div>
    </main>
  );
}
