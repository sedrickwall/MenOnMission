import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import FormModal from "@/components/FormModal";
import { getNextEvent } from "@/lib/events";

export default function EventSection() {
  const nextEvent = getNextEvent();

  if (!nextEvent) {
    return (
      <section className="py-24 bg-card" data-testid="section-event">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground font-sans text-lg">
              New events coming soon. Check back for updates!
            </p>
          </div>
        </div>
      </section>
    );
  }

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
              {nextEvent.title}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-sans font-medium text-foreground">
                    {nextEvent.displayDate}
                  </div>
                  <div
                    className="text-muted-foreground text-sm"
                    data-testid="text-event-date"
                  >
                    Next Event: {nextEvent.date}
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
                    {nextEvent.time}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {nextEvent.timeDetails}
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
                    {nextEvent.location}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {nextEvent.locationDetails}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <FormModal
                triggerText="RSVP for Next Event"
                title="RSVP for Upcoming Events"
                description="Select your preferred event and location"
                triggerVariant="default"
                triggerSize="lg"
                triggerClassName="w-full"
                testId="button-rsvp"
              >
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdruaGbV_BRQbnUYdw4p0KRUmW8jNmsnYP86f2-ln07rTqIBw/viewform?embedded=true" 
                  width="100%" 
                  height="1200"
                  className="border-0 rounded-lg"
                  data-testid="iframe-event-rsvp-home"
                >
                  Loading…
                </iframe>
              </FormModal>
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
