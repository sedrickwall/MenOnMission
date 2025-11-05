import aboutImage from "@assets/generated_images/Men_praying_together_outdoors_132e465a.png";

export default function AboutHero() {
  return (
    <section
      className="relative py-32 min-h-[60vh] flex items-center overflow-hidden"
      data-testid="section-about-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210,100%,5%)]/70 via-[hsl(210,100%,5%)]/80 to-[hsl(210,100%,5%)]/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block text-primary font-sans font-medium text-sm uppercase tracking-[0.15em] mb-6">
          Our Story
        </span>
        <h1
          className="font-heading font-bold text-white mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4rem)",
            letterSpacing: "-0.02em",
          }}
          data-testid="text-about-title"
        >
          Building Kingdom Men
        </h1>
        <p className="text-white/90 font-sans text-lg md:text-xl leading-relaxed">
          Founded by faith-driven men across Dallas and Minneapolis, united in
          purpose to serve, mentor, and grow together
        </p>
      </div>
    </section>
  );
}
