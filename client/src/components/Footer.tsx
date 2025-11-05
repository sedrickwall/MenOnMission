import { Link } from "wouter";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[hsl(210,100%,5%)] border-t border-primary/20"
      data-testid="footer-main"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">
                  M
                </span>
              </div>
              <div className="font-heading font-bold text-lg text-white">
                Men on Mission
              </div>
            </div>
            <p className="text-white/70 font-sans text-sm leading-relaxed">
              A brotherhood of Kingdom-minded men serving through mentorship,
              outreach, and community action.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <Link href="/">
                <button
                  className="block text-white/70 hover:text-primary transition-colors font-sans text-sm"
                  data-testid="link-footer-home"
                >
                  Home
                </button>
              </Link>
              <Link href="/about">
                <button
                  className="block text-white/70 hover:text-primary transition-colors font-sans text-sm"
                  data-testid="link-footer-about"
                >
                  About
                </button>
              </Link>
              <Link href="/events">
                <button
                  className="block text-white/70 hover:text-primary transition-colors font-sans text-sm"
                  data-testid="link-footer-events"
                >
                  Events
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="block text-white/70 hover:text-primary transition-colors font-sans text-sm"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-4 mb-6">
              <button
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center text-white hover:text-primary-foreground transition-colors"
                data-testid="link-instagram"
              >
                <Instagram size={20} />
              </button>
              <button
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center text-white hover:text-primary-foreground transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin size={20} />
              </button>
              <button
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center text-white hover:text-primary-foreground transition-colors"
                data-testid="link-youtube"
              >
                <Youtube size={20} />
              </button>
            </div>
            <a
              href="mailto:connect@menonmission.org"
              className="text-white/70 hover:text-primary transition-colors font-sans text-sm"
              data-testid="link-email"
            >
              connect@menonmission.org
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 font-sans text-sm">
              © 2025 Men on Mission | Faith. Service. Brotherhood.
            </p>
            <div className="flex gap-6">
              <button
                className="text-white/60 hover:text-primary transition-colors font-sans text-sm"
                data-testid="link-privacy"
              >
                Privacy Policy
              </button>
              <button
                className="text-white/60 hover:text-primary transition-colors font-sans text-sm"
                data-testid="link-terms"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
