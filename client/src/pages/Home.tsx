import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CorePillars from "@/components/CorePillars";
import Scripture from "@/components/Scripture";
import EventSection from "@/components/EventSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CorePillars />
      <Scripture />
      <EventSection />
      <JoinSection />
      <Footer />
    </div>
  );
}
