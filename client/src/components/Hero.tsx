import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Men_serving_homeless_community_cd5e4c5a.png";

export default function Hero() {
  const scrollToJoin = () => {
    const joinSection = document.getElementById("join-mission");
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210,100%,5%)]/60 via-[hsl(210,100%,5%)]/70 to-[hsl(210,100%,5%)]/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="inline-block text-primary font-sans font-medium text-sm uppercase tracking-[0.15em] mb-4">
            Kingdom-Minded Men
          </span>
        </div>

        <h1
          className="font-heading font-bold text-white mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            letterSpacing: "-0.02em",
          }}
          data-testid="text-hero-title"
        >
          Faith. Service. Brotherhood.
        </h1>

        <p
          className="text-white/90 font-sans text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ letterSpacing: "0.01em" }}
          data-testid="text-hero-subtitle"
        >
          A brotherhood of Kingdom-minded men serving through mentorship,
          outreach, and community action in Dallas & Minneapolis
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base font-heading font-semibold"
            onClick={scrollToJoin}
            data-testid="button-join-mission-hero"
          >
            Join the Mission
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-10 py-6 text-base font-heading font-semibold"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>
      </div>

      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        onClick={scrollToJoin}
        data-testid="button-scroll-down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
