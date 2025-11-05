import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users2 } from "lucide-react";

export default function MissionStatement() {
  return (
    <section className="py-24 bg-white" data-testid="section-mission">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="font-heading font-semibold text-foreground mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            data-testid="text-mission-title"
          >
            Our Mission
          </h2>
          <p
            className="text-foreground font-sans text-xl md:text-2xl font-medium leading-relaxed"
            data-testid="text-mission-statement"
          >
            To empower men to serve with purpose, live with faith, and lead
            with integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
              <Target size={32} />
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
              Vision
            </h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Expand to new cities and grow into a registered non-profit,
              impacting communities nationwide
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
              <TrendingUp size={32} />
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
              Growth
            </h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Building sustainable programs that multiply impact through
              strategic partnerships and discipleship
            </p>
          </Card>

          <Card className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
              <Users2 size={32} />
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
              Community
            </h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Creating spaces where men can grow, serve, and support one another
              in their faith journey
            </p>
          </Card>
        </div>

        <div className="bg-card rounded-2xl p-12">
          <h3
            className="font-heading font-semibold text-foreground mb-8 text-center"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
          >
            Why Men on Mission?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div
                className="font-heading font-bold text-primary mb-2"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                data-testid="stat-mentorship"
              >
                64%
              </div>
              <p className="text-muted-foreground font-sans">
                Prioritized mentorship as their top need
              </p>
            </div>
            <div>
              <div
                className="font-heading font-bold text-primary mb-2"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                data-testid="stat-dallas"
              >
                80%
              </div>
              <p className="text-muted-foreground font-sans">
                Currently based in the Dallas area
              </p>
            </div>
            <div>
              <div
                className="font-heading font-bold text-primary mb-2"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                data-testid="stat-time"
              >
                9-11 AM
              </div>
              <p className="text-muted-foreground font-sans">
                Preferred Saturday service time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
