export default function Scripture() {
  return (
    <section
      className="py-32 bg-[hsl(210,100%,5%)] relative overflow-hidden"
      data-testid="section-scripture"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,164,93,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(200,164,93,0.05),transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block text-primary font-sans font-medium text-sm uppercase tracking-[0.15em] mb-8">
          Scripture of the Month
        </span>

        <blockquote className="mb-8">
          <p
            className="font-heading font-medium text-white italic leading-relaxed"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              letterSpacing: "-0.01em",
            }}
            data-testid="text-scripture-quote"
          >
            "As iron sharpens iron, so one man sharpens another."
          </p>
        </blockquote>

        <cite className="not-italic">
          <span
            className="text-primary font-sans font-medium text-base uppercase tracking-wide"
            data-testid="text-scripture-reference"
          >
            Proverbs 27:17
          </span>
        </cite>

        <p className="text-white/70 font-sans text-base mt-6 max-w-2xl mx-auto">
          Our mission starts with the Word. Together, we sharpen each other in
          faith, character, and purpose.
        </p>
      </div>
    </section>
  );
}
