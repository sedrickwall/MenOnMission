import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Home } from "lucide-react";
import FormModal from "@/components/FormModal";
import { getCurrentMonthEvent } from "@/lib/events";
import UpcomingEventCard from "@/components/UpcomingEventCard";

const eventCategories = [
  {
    icon: Heart,
    title: "Homeless & Displaced Outreach",
    description:
      "Serve meals, provide care packages, and share hope with our homeless or displaced neighbors",
    frequency: "2nd Saturday monthly",
    testId: "homeless",
  },
  {
    icon: Users,
    title: "Mentorship Days",
    description:
      "One-on-one and group mentorship focused on spiritual growth and life skills",
    frequency: "Every event",
    testId: "mentorship",
  },
  {
    icon: Home,
    title: "Family Service Days",
    description:
      "Bring your family to serve together and build community connections",
    frequency: "Quarterly events",
    testId: "family",
  },
];

export default function EventsContent() {
  const currentMonthEvent = getCurrentMonthEvent();

  return (
    <section className="py-24 bg-white" data-testid="section-events-content">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Current Month Event Card */}
        {currentMonthEvent && (
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-sans font-medium text-sm uppercase tracking-[0.15em] mb-4">
                This Month
              </span>
              <h2
                className="font-heading font-semibold text-foreground mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
              >
                {currentMonthEvent.month}'s Mission Event
              </h2>
            </div>

            <UpcomingEventCard 
              event={currentMonthEvent} 
              showRegisterButton={true}
              className="max-w-3xl mx-auto"
            />
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════
            📌 ADDITIONAL EVENT CARDS - TO SHOW MORE EVENTS:
            ═══════════════════════════════════════════════════════════
            1. First, add your events in shared/events.ts
            2. Then uncomment the section below to display them
            ═══════════════════════════════════════════════════════════ */}
        
        {/* UNCOMMENT THIS SECTION TO SHOW ALL UPCOMING EVENTS AS CARDS:
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2
              className="font-heading font-semibold text-foreground mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              All Upcoming Events
            </h2>
            <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto leading-relaxed">
              View all our scheduled events and RSVP today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="p-6 md:p-8">
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-xl text-foreground">
                    {event.title}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="text-primary" size={18} />
                      <div className="text-sm">
                        <span className="font-sans font-medium text-foreground">
                          {event.displayDate}
                        </span>
                        <span className="text-muted-foreground"> • {event.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="text-primary" size={18} />
                      <div className="text-sm font-sans text-foreground">
                        {event.time}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="text-primary" size={18} />
                      <div className="text-sm font-sans text-foreground">
                        {event.location}
                      </div>
                    </div>
                  </div>

                  <FormModal
                    triggerText="RSVP"
                    title="RSVP for Upcoming Events"
                    description="Select your preferred event and location"
                    triggerSize="default"
                    triggerClassName="w-full mt-4"
                    testId={`button-rsvp-${event.id}`}
                  >
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdruaGbV_BRQbnUYdw4p0KRUmW8jNmsnYP86f2-ln07rTqIBw/viewform?embedded=true" 
                      width="100%" 
                      height="1200"
                      className="border-0 rounded-lg"
                    >
                      Loading…
                    </iframe>
                  </FormModal>
                </div>
              </Card>
            ))}
          </div>
        </div>
        */}

        {/* Event Categories Section */}
        <div className="text-center mb-16">
          <h2
            className="font-heading font-semibold text-foreground mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            data-testid="text-serve-title"
          >
            Serve With Us
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Our next Men on Mission event happens the first Saturday of each
            month. Sign up below to serve in your city.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {eventCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300"
                data-testid={`card-event-${category.testId}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground font-sans mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="text-primary font-sans text-sm font-medium">
                  {category.frequency}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto bg-[hsl(210,100%,5%)] rounded-2xl p-12 text-center">
          <h3 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-4">
            Join Us at Our Next Event
          </h3>
          <p className="text-white/80 font-sans text-lg mb-8">
            RSVP now and be part of something greater
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FormModal
              triggerText="RSVP for Event"
              title="RSVP for Upcoming Events"
              description="Select your preferred event and location"
              testId="button-rsvp-modal"
            >
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdruaGbV_BRQbnUYdw4p0KRUmW8jNmsnYP86f2-ln07rTqIBw/viewform?embedded=true" 
                width="100%" 
                height="1200"
                className="border-0 rounded-lg"
                data-testid="iframe-event-rsvp"
              >
                Loading…
              </iframe>
            </FormModal>

            <Button
              variant="outline"
              size="lg"
              className="font-heading font-semibold bg-white/10 text-white border-white/20 hover:bg-white hover:text-foreground"
              data-testid="button-join-launch-team"
            >
              Join Our Launch Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
