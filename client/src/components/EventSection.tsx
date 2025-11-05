import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function EventSection() {
  return (
    <section className="py-24 bg-card" data-testid="section-event">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-sans font-medium text-sm uppercase tracking-[0.15em] mb-4">
            Next Gathering
          </span>
          <h2
            className="font-heading font-semibold text-foreground mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            data-testid="text-event-title"
          >
            Upcoming Mission Event
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Join us for our monthly service day as we serve our communities
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-8 md:p-12">
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-2xl text-foreground">
              Men's Service Day
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-sans font-medium text-foreground">
                    First Saturday of Each Month
                  </div>
                  <div
                    className="text-muted-foreground text-sm"
                    data-testid="text-event-date"
                  >
                    Next Event: January 6, 2025
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <div
                    className="font-sans font-medium text-foreground"
                    data-testid="text-event-time"
                  >
                    9:00 AM - 11:00 AM
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Service followed by fellowship
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <div
                    className="font-sans font-medium text-foreground"
                    data-testid="text-event-location"
                  >
                    Dallas & Minneapolis
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Specific locations shared upon registration
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold"
                data-testid="button-rsvp"
              >
                RSVP for Next Event
              </Button>
              <p className="text-center text-muted-foreground text-sm mt-4">
                Limited spots available • Register early
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
