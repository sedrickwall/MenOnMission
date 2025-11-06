import Navigation from "@/components/Navigation";
import ContactContent from "@/components/ContactContent";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="bg-[hsl(210,100%,5%)] pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block text-primary font-sans font-medium text-sm uppercase tracking-[0.15em] mb-6">
            Connect With Us
          </span>
          <h1
            className="font-heading font-bold text-white mb-6 leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 4rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Let's Start a Conversation
          </h1>
          <p className="text-white/90 font-sans text-lg md:text-xl leading-relaxed">
            We're here to answer your questions and help you get connected
          </p>
        </div>
      </div>
      <ContactContent />
      <Footer />
    </div>
  );
}
