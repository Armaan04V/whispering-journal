import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Flame, Eye, Moon, Pen } from "lucide-react";
import pumpkinLogo from "@/assets/pumpkin-logo-transparent.png";
import Footer from "@/components/Footer";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/works", label: "Works" },
    { path: "/about", label: "About" },
    { path: "/follow", label: "Follow" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const philosophyCards = [
    {
      icon: Moon,
      title: "Atmosphere",
      description: "Slow-burn tension, controlled menace, psychological depth over spectacle",
    },
    {
      icon: Eye,
      title: "Characters",
      description: "Morally grey, uncomfortably relatable, quietly dangerous in ways you understand",
    },
    {
      icon: Flame,
      title: "Intent",
      description: "Dread over shock, restraint over gore, unease that lingers long after",
    },
    {
      icon: Pen,
      title: "Craft",
      description: "Literary prose, intentional pacing, every word chosen to unsettle",
    },
  ];

  const themes = [
    "Liminal Spaces",
    "Memory & Identity",
    "Inherited Trauma",
    "The Uncanny Familiar",
    "Moral Ambiguity",
    "Isolation",
    "Body Horror (Subtle)",
    "Cosmic Indifference",
    "Domestic Horror",
    "The Watcher",
    "Time Distortion",
    "Unreliable Reality",
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
                The Author
              </h1>
              <p className="text-cream-muted max-w-xl mx-auto">
                Behind every shadow, there's someone holding the pen.
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent mx-auto mt-8" />
            </div>

            {/* Opening Quote */}
            <div className="text-center mb-16 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-ember/5 rounded-full blur-3xl" />
              </div>
              <blockquote className="relative font-serif text-2xl md:text-3xl text-cream leading-relaxed italic">
                "I write the stories that follow you home.<br />
                <span className="text-xl md:text-2xl text-cream-muted">The ones that wait by your bed."</span>
              </blockquote>
            </div>

            {/* Main Content */}
            <div className="space-y-8 mb-20">
              <div className="prose prose-invert max-w-none">
                <p className="text-cream-muted leading-loose text-lg">
                  <span className="font-serif text-2xl text-cream float-left mr-3 mt-1">H</span>orror, 
                  for me, is not about the monster in the room—it's about the moment before you turn 
                  around. The slow realization. The creeping certainty that something has been wrong 
                  for a very long time, and you're only now beginning to notice.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-cream-muted leading-relaxed">
                <div className="space-y-6">
                  <p>
                    I explore the spaces between what we say and what we mean. The silences that 
                    stretch too long. The smile that doesn't quite fit. My characters are morally 
                    grey not because they're evil, but because they're human—uncomfortably, 
                    recognizably human.
                  </p>
                  <p>
                    The horror I write is psychological, slow-burn, and deliberate. I don't chase 
                    shock value or jump scares. Instead, I cultivate unease—the kind that settles 
                    into your bones and stays there, quiet and patient.
                  </p>
                </div>
                <div className="space-y-6">
                  <p>
                    You'll find me on AO3 and Tapas, publishing web fiction that blurs the 
                    line between literary and genre horror. My stories are free to read, because 
                    horror should be accessible to anyone brave enough to enter.
                  </p>
                  <p>
                    Whether I'm writing about haunted houses that remember their tenants, or 
                    ordinary people discovering the rot beneath the surface of their lives, my 
                    goal is always the same: to leave you slightly unsettled, but wanting more.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Cards */}
            <div className="mb-20">
              <h2 className="font-serif text-xl text-ember/80 mb-10 tracking-wider uppercase text-center">
                What to Expect
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {philosophyCards.map((card, index) => (
                  <div
                    key={index}
                    className="p-6 bg-charcoal-light/30 border border-border/50 rounded-lg text-center group hover:border-ember/30 transition-all duration-500"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-ember/10 flex items-center justify-center group-hover:bg-ember/20 transition-colors">
                      <card.icon size={20} className="text-ember" />
                    </div>
                    <h3 className="font-serif text-cream mb-2">{card.title}</h3>
                    <p className="text-sm text-cream-muted">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Commitment */}
            <div className="bg-charcoal-light/20 border border-border/30 rounded-lg p-8 mb-20">
              <h2 className="font-serif text-xl text-cream mb-6 text-center">
                A Note on Content
              </h2>
              <div className="max-w-2xl mx-auto text-center space-y-4 text-cream-muted">
                <p>
                  I believe horror readers deserve to know what they're walking into. That's why 
                  every story includes clear content warnings, intensity markers, and completion 
                  status. You can trust that I'll never surprise you with something you didn't 
                  consent to read.
                </p>
                <p className="text-sm text-muted-foreground">
                  Horror is about controlled fear. I take that control seriously—both in my 
                  craft and in my respect for readers.
                </p>
              </div>
            </div>

            {/* Themes I Explore */}
            <div>
              <h2 className="font-serif text-xl text-ember/80 mb-8 tracking-wider uppercase text-center">
                Recurring Obsessions
              </h2>
              
              <div className="flex flex-wrap justify-center gap-3">
                {themes.map((theme) => (
                  <span 
                    key={theme}
                    className="px-4 py-2 text-sm text-cream-muted border border-border/50 rounded-full bg-charcoal-light/20 hover:border-ember/30 hover:text-cream transition-all duration-300"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
