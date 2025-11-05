import Navigation from "@/components/Navigation";
import AboutHero from "@/components/AboutHero";
import MissionStatement from "@/components/MissionStatement";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutHero />
      <MissionStatement />
      <JoinSection />
      <Footer />
    </div>
  );
}
