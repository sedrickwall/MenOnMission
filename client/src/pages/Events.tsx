import Navigation from "@/components/Navigation";
import EventsContent from "@/components/EventsContent";
import Scripture from "@/components/Scripture";
import Footer from "@/components/Footer";

export default function Events() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <div className="bg-[hsl(210,100%,5%)] py-20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-primary font-sans font-medium text-sm uppercase tracking-[0.15em] mb-6">
              Serve Together
            </span>
            <h1
              className="font-heading font-bold text-white mb-6 leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 4rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Join Us in Action
            </h1>
            <p className="text-white/90 font-sans text-lg md:text-xl leading-relaxed">
              Every service day is an opportunity to make a lasting impact in
              our communities
            </p>
          </div>
        </div>
      </div>
      <EventsContent />
      <Scripture />
      <Footer />
    </div>
  );
}
