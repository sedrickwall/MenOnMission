import JotformEmbed from "@/components/JotformEmbed";

export default function JoinSection() {
  return (
    <section
      id="join-mission"
      className="py-24 bg-white"
      data-testid="section-join"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-sans font-medium text-sm uppercase tracking-[0.15em] mb-4">
            Get Started
          </span>
          <h2
            className="font-heading font-semibold text-foreground mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            data-testid="text-join-title"
          >
            Join the Mission
          </h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed">
            Be part of a brotherhood dedicated to faith, service, and community
            impact
          </p>
        </div>

        <div
          className="bg-card rounded-2xl shadow-lg p-8 md:p-12"
          data-testid="container-join-form"
        >
          <JotformEmbed formId="253098998962077" />

          <div className="mt-8 text-center">
            <p className="text-muted-foreground font-sans text-sm">
              By joining, you'll receive updates on upcoming service events and
              opportunities to serve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
