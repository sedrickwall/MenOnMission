import { getNextEvent } from "@/lib/events";
import UpcomingEventCard from "@/components/UpcomingEventCard";

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

        <UpcomingEventCard 
          event={nextEvent} 
          showRegisterButton={true}
          className="max-w-3xl mx-auto"
        />
      </div>
    </section>
  );
}
