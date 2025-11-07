import JotformEmbed from "@/components/JotformEmbed";
import FormModal from "@/components/FormModal";

export default function JoinSection() {
  return (
    <section
      id="join-mission"
      className="py-24 bg-white"
      data-testid="section-join"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
          <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-2xl mx-auto">
            Be part of a brotherhood dedicated to faith, service, and community
            impact
          </p>
        </div>

        <div className="bg-[hsl(210,100%,5%)] rounded-2xl p-12 md:p-16 text-center">
          <h3 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-4">
            Ready to Make an Impact?
          </h3>
          <p className="text-white/80 font-sans text-lg mb-8 max-w-xl mx-auto">
            Join our brotherhood and receive updates on upcoming service events and
            opportunities to serve
          </p>
          
          <FormModal
            triggerText="Join the Mission"
            title="Join the Mission"
            description="Fill out the form below to become part of our brotherhood"
            testId="button-join-modal"
          >
            <JotformEmbed formId="253098998962077" />
          </FormModal>
        </div>
      </div>
    </section>
  );
}
