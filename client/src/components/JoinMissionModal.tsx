import { createContext, useContext, useState, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import JotformEmbed from "@/components/JotformEmbed";

interface JoinMissionModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const JoinMissionModalContext = createContext<JoinMissionModalContextType | null>(null);

export function JoinMissionModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <JoinMissionModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Join the Mission</DialogTitle>
            <DialogDescription className="font-sans text-base">
              Fill out the form below to become part of our brotherhood
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <JotformEmbed formId="253098998962077" />
          </div>
        </DialogContent>
      </Dialog>
    </JoinMissionModalContext.Provider>
  );
}

export function useJoinMissionModal() {
  const context = useContext(JoinMissionModalContext);
  if (!context) {
    throw new Error("useJoinMissionModal must be used within JoinMissionModalProvider");
  }
  return context;
}
