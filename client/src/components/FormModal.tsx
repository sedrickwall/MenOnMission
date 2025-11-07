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
  triggerText: string;
  title: string;
  description?: string;
  children: ReactNode;
  triggerVariant?: "default" | "outline" | "ghost" | "secondary";
  triggerSize?: "default" | "sm" | "lg" | "icon";
  triggerClassName?: string;
  testId?: string;
}

export default function FormModal({
  triggerText,
  title,
  description,
  children,
  triggerVariant = "default",
  triggerSize = "lg",
  triggerClassName = "",
  testId,
}: FormModalProps) {
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
