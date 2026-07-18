import Button from "./Button";

const HERO_IMAGE = "/images/hero-steak.jpg";

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
      <div className="absolute inset-0 bg-[#141210]/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#141210]/70 via-[#141210]/40 to-background" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-40 text-center lg:px-8">
        <p className="section-eyebrow animate-fade-in-up mb-8">
          République · Paris 11e
        </p>
        <h1 className="font-heading animate-fade-in-up text-7xl font-normal leading-[0.92] tracking-tight text-cream sm:text-8xl lg:text-9xl xl:text-[9.5rem]">
          Black Angus
          <br />
          <span className="italic text-champagne">République</span>
        </h1>
        <p
          className="animate-fade-in-up mx-auto mt-10 max-w-md text-base leading-relaxed text-foreground-muted sm:text-lg"
          style={{ animationDelay: "0.15s" }}
        >
          Viande d&apos;exception, cuisine de feu —
          une table au cœur de Paris.
        </p>
        <div
          className="animate-fade-in-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <Button href="#menu">Voir la carte</Button>
          <Button href="#contact">Réserver</Button>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 z-10 h-12 w-px -translate-x-1/2 origin-top animate-scroll-line bg-gradient-to-b from-champagne/70 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
