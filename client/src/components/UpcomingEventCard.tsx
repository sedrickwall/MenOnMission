import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import FormModal from "@/components/FormModal";
import { Event } from "@/lib/events";

interface UpcomingEventCardProps {
  event: Event;
  showRegisterButton?: boolean;
  className?: string;
}

/**
 * Reusable event card component that displays event details
 * Can be used across all pages to show upcoming events
 * 
 * @param event - Event object with all event details
 * @param showRegisterButton - Whether to show the register button (default: true)
 * @param className - Additional CSS classes for the card wrapper
 */
export default function UpcomingEventCard({ 
  event, 
  showRegisterButton = true,
  className = ""
}: UpcomingEventCardProps) {
  return (
    <Card className={`p-8 md:p-12 ${className}`}>
      <div className="space-y-6">
        <h3 className="font-heading font-semibold text-2xl text-foreground">
          {event.title}
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="text-primary" size={20} />
            </div>
            <div>
              <div className="font-sans font-medium text-foreground">
                {event.displayDate}
              </div>
              <div
                className="text-muted-foreground text-sm"
                data-testid="text-event-date"
              >
                {event.date}
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
                {event.time}
              </div>
              <div className="text-muted-foreground text-sm">
                {event.timeDetails}
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
                {event.location}
              </div>
              <div className="text-muted-foreground text-sm">
                {event.locationDetails}
              </div>
            </div>
          </div>
        </div>

        {showRegisterButton && (
          <div className="pt-6">
            <FormModal
              variant="event"
              eventTitle={event.title}
              triggerClassName="w-full md:w-auto"
            />
          </div>
        )}
      </div>
    </Card>
  );
}
