import { Card } from "@/components/ui/card";
import { Mail, Instagram, Linkedin, Youtube } from "lucide-react";
import JotformEmbed from "@/components/JotformEmbed";

export default function ContactContent() {
  return (
    <section className="py-24 bg-white" data-testid="section-contact-content">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-heading font-semibold text-foreground mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            data-testid="text-contact-title"
          >
            Get in Touch
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions or want to learn more about Men on Mission? We'd love
            to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8 md:p-12 h-full">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                Send Us a Message
              </h3>

              <JotformEmbed formId="253099088281062" />
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                    Email Us
                  </h4>
                  <a
                    href="mailto:connect@menonmission.org"
                    className="text-primary hover:underline font-sans block mb-3"
                    data-testid="link-contact-email"
                  >
                    connect@menonmission.org
                  </a>
                  <p className="text-muted-foreground font-sans text-sm">
                    We typically respond within 24-48 hours
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h4 className="font-heading font-semibold text-lg text-foreground mb-6">
                Follow Our Journey
              </h4>
              <div className="flex gap-4">
                <button
                  className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-colors"
                  data-testid="link-contact-instagram"
                >
                  <Instagram size={24} />
                </button>
                <button
                  className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-colors"
                  data-testid="link-contact-linkedin"
                >
                  <Linkedin size={24} />
                </button>
                <button
                  className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-colors"
                  data-testid="link-contact-youtube"
                >
                  <Youtube size={24} />
                </button>
              </div>
              <p className="text-muted-foreground font-sans text-sm mt-6">
                Stay updated on our latest service events, testimonies, and
                brotherhood moments
              </p>
            </Card>

            <div className="bg-[hsl(210,100%,5%)] rounded-2xl p-8 text-center">
              <h4 className="font-heading font-semibold text-xl text-white mb-3">
                Ready to Join?
              </h4>
              <p className="text-white/80 font-sans mb-6">
                Don't wait—become part of the mission today
              </p>
              <button
                className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-heading font-semibold transition-colors"
                data-testid="button-contact-join"
              >
                Join the Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
