import Button from "./Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1920";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-40 text-center lg:px-8">
        <p className="section-eyebrow animate-fade-in-up mb-10">
          République, Paris
        </p>
        <h1 className="font-heading animate-fade-in-up text-7xl font-normal leading-[0.95] tracking-tight text-neutral-200 sm:text-8xl lg:text-9xl xl:text-[10rem]">
          Black Angus
          <br />
          <span className="italic text-champagne">République</span>
        </h1>
        <div className="animate-fade-in-up divider-gold mx-auto mt-12" />
        <p
          className="animate-fade-in-up mx-auto mt-12 max-w-lg text-sm leading-relaxed tracking-wide text-foreground-muted sm:text-base"
          style={{ animationDelay: "0.2s" }}
        >
          Viande d&apos;exception, cuisine de feu et art de vivre.
          <br className="hidden sm:block" />
          Une adresse gastronomique au cœur de Paris.
        </p>
        <div
          className="animate-fade-in-up mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row"
          style={{ animationDelay: "0.4s" }}
        >
          <Button href="#menu">Découvrir le Menu</Button>
          <Button href="#contact">Réserver une Table</Button>
        </div>
      </div>

      <div className="absolute bottom-14 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4">
        <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-foreground-muted">
          Scroll
        </span>
        <div className="h-16 w-px origin-top animate-scroll-line bg-gradient-to-b from-champagne/80 to-transparent" />
      </div>
    </section>
  );
}
