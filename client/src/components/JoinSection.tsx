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
          <div className="aspect-[16/9] w-full bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-muted-foreground font-sans text-sm mb-4">
                Embedded Jotform / Google Form
              </p>
              <p className="text-foreground font-sans text-base max-w-md">
                Form will collect: Name, Email, City (Dallas/Minneapolis),
                Areas of Interest, Launch Team Interest
              </p>
            </div>
          </div>

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
