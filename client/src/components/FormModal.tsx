import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface FormModalProps {
  variant?: "event" | "custom";
  eventTitle?: string;
  triggerText?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  triggerVariant?: "default" | "outline" | "ghost" | "secondary";
  triggerSize?: "default" | "sm" | "lg" | "icon";
  triggerClassName?: string;
  testId?: string;
}

export default function FormModal({
  variant = "custom",
  eventTitle,
  triggerText,
  title,
  description,
  children,
  triggerVariant = "default",
  triggerSize = "lg",
  triggerClassName = "",
  testId,
}: FormModalProps) {
  // Event variant: predefined form for event RSVPs
  if (variant === "event") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={triggerVariant}
            size={triggerSize}
            className={`font-heading font-semibold ${triggerClassName}`}
            data-testid={testId || "button-rsvp"}
          >
            RSVP for This Event
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">
              RSVP for {eventTitle || "Upcoming Event"}
            </DialogTitle>
            <DialogDescription className="font-sans text-base">
              Register below to secure your spot at this event
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdruaGbV_BRQbnUYdw4p0KRUmW8jNmsnYP86f2-ln07rTqIBw/viewform?embedded=true" 
              width="100%" 
              height="1200"
              className="border-0 rounded-lg"
              data-testid="iframe-event-rsvp"
            >
              Loading…
            </iframe>
            <p className="text-center text-muted-foreground text-sm mt-4">
              Limited spots available • Register early
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Custom variant: flexible modal with custom content
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={triggerVariant}
          size={triggerSize}
          className={`font-heading font-semibold ${triggerClassName}`}
          data-testid={testId}
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">{title}</DialogTitle>
          {description && (
            <DialogDescription className="font-sans text-base">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="mt-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
