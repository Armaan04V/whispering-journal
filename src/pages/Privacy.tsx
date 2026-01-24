import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import pumpkinLogo from "@/assets/pumpkin-logo-transparent.png";
import Footer from "@/components/Footer";

const Privacy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/works", label: "Works" },
    { path: "/about", label: "About" },
    { path: "/follow", label: "Follow" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={pumpkinLogo}
              alt="A.M.Martin Logo"
              className="w-9 h-9 object-contain"
            />
            <span className="font-serif text-base tracking-wide text-cream/80 group-hover:text-cream transition-colors duration-500">
              A.M.Martin
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs tracking-[0.25em] uppercase transition-all duration-500 ${
                  isActive(item.path)
                    ? "text-cream"
                    : "text-cream-muted/60 hover:text-cream-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-cream-muted/60 hover:text-cream transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-charcoal-light/95 backdrop-blur-md border-t border-border/20">
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xs tracking-[0.25em] uppercase ${
                    isActive(item.path) ? "text-cream" : "text-cream-muted/60"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <div className="w-8 h-px bg-ember/30 mx-auto mb-8" />
            <h1 className="font-serif text-3xl md:text-4xl text-cream mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-cream-muted/50">
              Last updated: January 2026
            </p>
          </div>

          <div className="space-y-12 text-cream-muted/70 leading-relaxed">
            {/* Introduction */}
            <section>
              <p className="font-serif text-lg text-cream-muted/60 italic mb-8">
                This is a personal author website. I respect your privacy and keep things simple.
              </p>
            </section>

            {/* What I Collect */}
            <section>
              <h2 className="font-serif text-xl text-cream mb-4">What I Collect</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-ember/60 mt-1">•</span>
                  <span><strong className="text-cream/80">Newsletter:</strong> Your email address, if you choose to subscribe.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ember/60 mt-1">•</span>
                  <span><strong className="text-cream/80">Contact form:</strong> Your name, email, and message when you reach out.</span>
                </li>
              </ul>
            </section>

            {/* How I Use It */}
            <section>
              <h2 className="font-serif text-xl text-cream mb-4">How I Use It</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-ember/60 mt-1">•</span>
                  <span>Newsletter emails are used to send occasional updates about new stories and projects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ember/60 mt-1">•</span>
                  <span>Contact form messages are used only to respond to you.</span>
                </li>
              </ul>
            </section>

            {/* Third Parties */}
            <section>
              <h2 className="font-serif text-xl text-cream mb-4">Third-Party Services</h2>
              <p className="text-sm mb-4">
                This site uses a few external services to function:
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-ember/60 mt-1">•</span>
                  <span><strong className="text-cream/80">Buttondown</strong> for newsletter management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ember/60 mt-1">•</span>
                  <span><strong className="text-cream/80">EmailJS</strong> for contact form delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ember/60 mt-1">•</span>
                  <span><strong className="text-cream/80">Vercel</strong> for hosting</span>
                </li>
              </ul>
              <p className="text-sm mt-4 text-cream-muted/50">
                Each service has its own privacy policy. I've chosen providers that respect user data.
              </p>
            </section>

            {/* No Selling */}
            <section>
              <h2 className="font-serif text-xl text-cream mb-4">What I Don't Do</h2>
              <p className="text-sm">
                I don't sell, share, or misuse your information. Your data stays between us and the services that help this site run.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="font-serif text-xl text-cream mb-4">Your Choices</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-ember/60 mt-1">•</span>
                  <span>Unsubscribe from the newsletter anytime using the link in any email.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ember/60 mt-1">•</span>
                  <span>Request removal of your data by contacting me directly.</span>
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section className="pt-8 border-t border-border/20">
              <p className="text-sm text-cream-muted/50">
                Questions about privacy? Reach out through the{" "}
                <Link to="/contact" className="text-ember/70 hover:text-ember transition-colors">
                  contact page
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
