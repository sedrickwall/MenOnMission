import { Card } from "@/components/ui/card";
import { Users, Heart, Handshake } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Building up men through shared wisdom, accountability, and intentional discipleship.",
    testId: "mentorship",
  },
  {
    icon: Heart,
    title: "Outreach",
    description:
      "Serving the homeless, veterans, and communities in need with compassion and action.",
    testId: "outreach",
  },
  {
    icon: Handshake,
    title: "Brotherhood",
    description:
      "Walking together in faith and purpose, strengthening each other in Christ.",
    testId: "brotherhood",
  },
];

export default function CorePillars() {
  return (
    <section className="py-24 bg-white" data-testid="section-core-pillars">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-sans font-medium text-sm uppercase tracking-[0.15em] mb-4">
            Our Foundation
          </span>
          <h2
            className="font-heading font-semibold text-foreground mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            data-testid="text-pillars-title"
          >
            Core Pillars
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Three pillars guide our mission and unite our brotherhood in service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className="p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border-t-4 border-t-transparent hover:border-t-primary"
                data-testid={`card-pillar-${pillar.testId}`}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={28} />
                  </div>
                </div>
                <h3 className="font-heading font-medium text-2xl text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
