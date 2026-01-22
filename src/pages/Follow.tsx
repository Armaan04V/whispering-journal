import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink, Mail, Bell, Heart } from "lucide-react";
import pumpkinLogo from "@/assets/pumpkin-logo-transparent.png";
import Footer from "@/components/Footer";

interface Platform {
  name: string;
  url: string;
  handle: string;
  description: string;
  icon: string;
}

const Follow = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/works", label: "Works" },
    { path: "/about", label: "About" },
    { path: "/follow", label: "Follow" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const platforms: Platform[] = [
    {
      name: "Archive of Our Own",
      url: "https://archiveofourown.org/users/MachiMaquiaveli/pseuds/MachiMaquiaveli",
      handle: "MachiMaquiaveli",
      description: "Subscribe to receive email notifications when new works are posted. The full archive lives here.",
      icon: "📚",
    },
    {
      name: "Tapas",
      url: "https://tapas.io/machimaquiaveli",
      handle: "@machimaquiaveli",
      description: "Follow for episode-by-episode updates on serialized originals. Best for ongoing series.",
      icon: "📖",
    },
  ];

  const whyFollow = [
    {
      icon: Bell,
      title: "New Story Alerts",
      description: "Be the first to know when something new emerges from the dark.",
    },
    {
      icon: Heart,
      title: "Behind the Scenes",
      description: "Writing process insights, character thoughts, and creative musings.",
    },
    {
      icon: Mail,
      title: "Exclusive Updates",
      description: "Announcements, upcoming projects, and occasional interactive content.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={pumpkinLogo} alt="A.M.Martin Logo" className="w-9 h-9 object-contain" />
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

      {/* Main Content */}
      <main className="pt-20">
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h1 className="font-serif text-4xl md:text-5xl text-cream mb-6 animate-fade-in">
                Stay Close
              </h1>
              <p className="text-cream-muted max-w-xl mx-auto leading-relaxed">
                Follow along as new stories emerge. I promise to make it worth the wait.
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent mx-auto mt-8" />
            </div>

            {/* Why Follow */}
            <div className="mb-20">
              <div className="grid md:grid-cols-3 gap-6">
                {whyFollow.map((item, index) => (
                  <div 
                    key={index}
                    className="text-center p-6 bg-charcoal-light/20 border border-border/30 rounded-lg"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-ember/10 flex items-center justify-center">
                      <item.icon size={20} className="text-ember" />
                    </div>
                    <h3 className="font-serif text-cream mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div className="mb-20">
              <h2 className="font-serif text-xl text-ember/80 mb-8 tracking-wider uppercase text-center">
                Find Me Here
              </h2>
              
              <div className="space-y-4">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-card border border-border rounded-lg hover:border-ember/40 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-ember/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex items-start gap-4">
                      <span className="text-2xl">{platform.icon}</span>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-serif text-lg text-cream group-hover:text-ember transition-colors">
                            {platform.name}
                          </h3>
                          <ExternalLink 
                            size={16} 
                            className="text-muted-foreground group-hover:text-ember group-hover:translate-x-1 transition-all" 
                          />
                        </div>
                        <p className="text-sm text-ember/70 mb-2">{platform.handle}</p>
                        <p className="text-sm text-cream-muted leading-relaxed">
                          {platform.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* A Personal Note */}
            <div className="bg-charcoal-light/20 border border-border/30 rounded-lg p-8 mb-20 text-center">
              <h2 className="font-serif text-xl text-cream mb-6">
                A Note to Readers
              </h2>
              <div className="max-w-2xl mx-auto space-y-4 text-cream-muted">
                <p className="leading-relaxed">
                  Every comment, every kudos, every "this made me sleep with the lights on"—I read 
                  them all. Horror writing can feel solitary, but knowing there are readers out 
                  there who appreciate slow-burn dread and characters who make uncomfortable 
                  choices? That keeps the fire burning.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Thank you for finding your way here. I hope something I've written stays with you.
                </p>
              </div>
            </div>

            {/* Connection CTA */}
            <div className="text-center mb-20">
              <p className="text-cream-muted mb-4">
                Have thoughts on a story? Found a typo? Just want to say hello?
              </p>
              <p className="text-sm text-muted-foreground">
                Reach out on any platform. I don't bite.
                <span className="text-ember ml-1">Usually.</span>
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Follow;
