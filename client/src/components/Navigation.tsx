import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[hsl(210,100%,5%)] backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      data-testid="navigation-main"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-3 py-2 cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">
                  M
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="font-heading font-bold text-lg text-white">
                  Men on Mission
                </div>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <button
                  className={`font-sans text-sm font-medium transition-colors hover:text-primary ${
                    location === link.path
                      ? "text-primary"
                      : "text-white/90"
                  }`}
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              </Link>
            ))}
            <Button
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-join-mission"
              onClick={() => {
                const joinSection = document.getElementById("join-mission");
                if (joinSection) {
                  joinSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Join the Mission
            </Button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-[hsl(210,100%,5%)] border-t border-white/10"
          data-testid="menu-mobile"
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <button
                  className={`block w-full text-left font-sans text-base font-medium py-2 ${
                    location === link.path
                      ? "text-primary"
                      : "text-white/90"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              </Link>
            ))}
            <Button
              variant="default"
              className="w-full bg-primary text-primary-foreground"
              data-testid="button-mobile-join"
            >
              Join the Mission
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
