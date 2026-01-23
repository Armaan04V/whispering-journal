import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import pumpkinLogo from "@/assets/pumpkin-logo-transparent.png";
import labyrinthCover from "@/assets/labyrinth-cover.png";
import summonBoyfriendCover from "@/assets/summon-boyfriend-cover.jpg";
import summonHusbandCover from "@/assets/summon-husband-cover.jpg";
import consequencesCover from "@/assets/consequences-cover.jpg";
import faeCityCover from "@/assets/fae-city-cover.jpg";
import thoughtsComfortCover from "@/assets/thoughts-comfort-cover.jpg";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Buttondown configuration
const BUTTONDOWN_API_KEY = "042f9291-6d14-4529-9960-7fd5902782f9";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  // Lock scroll until entered - with visibility change handling
  useEffect(() => {
    const updateScroll = () => {
      if (!hasEntered) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    };

    updateScroll();

    // Re-check scroll state when user returns to tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        updateScroll();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hasEntered]);

  const handleEnter = () => {
    setHasEntered(true);
    setTimeout(() => {
      document.getElementById('featured-works')?.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  };

  const navItems = [
    { path: "/works", label: "Works" },
    { path: "/about", label: "About" },
    { path: "/follow", label: "Follow" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Featured stories with images
  const featuredStories = [
    {
      title: "Labyrinth",
      hook: "Some doors only open from the inside.",
      platform: "Tapas",
      url: "https://tapas.io/machimaquiaveli",
      image: labyrinthCover,
      status: "Ongoing",
    },
    {
      title: "How to summon a boyfriend",
      hook: "The world is ending. Steph has a plan.",
      platform: "AO3",
      url: "https://archiveofourown.org/works/69548971",
      image: summonBoyfriendCover,
      status: "Complete",
    },
    {
      title: "How to summon a husband",
      hook: "The Ghost King has a promise to keep.",
      platform: "AO3",
      url: "https://archiveofourown.org/works/74766501",
      image: summonHusbandCover,
      status: "Complete",
    },
    {
      title: "Consequences of Not Watching Your Words",
      hook: "Jason makes a bargain. He should have chosen his words more carefully.",
      platform: "AO3",
      url: "https://archiveofourown.org/works/71254951/chapters/185396281",
      image: consequencesCover,
      status: "Complete",
    },
    {
      title: "Fae City",
      hook: "Amity Park lands in the wrong dimension.",
      platform: "AO3",
      url: "https://archiveofourown.org/works/70808976/chapters/184083821",
      image: faeCityCover,
      status: "Complete",
    },
    {
      title: "Thoughts and Comfort",
      hook: "Jazz and Bruce finally talk.",
      platform: "AO3",
      url: "https://archiveofourown.org/works/69679106",
      image: thoughtsComfortCover,
      status: "Complete",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Grain overlay for texture */}
      <div className="grain-overlay" />

      {/* Minimal Navigation */}
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

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream-muted/60 hover:text-cream transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
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
      <main>
        {/* ============================================
            HERO SECTION - Atmosphere First
        ============================================ */}
        <section className="h-[100dvh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
          {/* Deep ambient darkness with subtle warmth */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark via-background to-background" />
          
          {/* Distant ember glow - barely visible */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-[600px] h-[600px] bg-ember/[0.02] rounded-full blur-[120px]" 
            />
          </div>

          {/* Content wrapper - centers everything vertically */}
          <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full pt-16">
            {/* Content - staggered reveal */}
            <div className="text-center">
              {/* The Symbol - appears first */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="mb-8 md:mb-12"
              >
                <div className="w-28 h-28 md:w-40 md:h-40 mx-auto">
                  <img
                    src={pumpkinLogo}
                    alt=""
                    className="w-full h-full object-contain opacity-80 drop-shadow-[0_0_80px_rgba(210,105,30,0.1)]"
                  />
                </div>
              </motion.div>

              {/* Author Name - reveals after logo */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 2 }}
                className="font-serif text-2xl md:text-4xl text-cream/90 tracking-wide mb-4 md:mb-6"
              >
                A.M.Martin
              </motion.h1>

              {/* Tagline - last to appear */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 3.5 }}
                className="font-serif text-base md:text-lg text-cream-muted/50 italic"
              >
                Horror fiction for the quietly disturbed.
              </motion.p>
            </div>

            {/* Enter Button - Part of flex layout, not absolute */}
            {!hasEntered && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.6, delay: 5 } }}
                className="mt-12 md:mt-16"
              >
                <button
                  onClick={handleEnter}
                  className="group relative"
                >
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 -m-4 rounded-full bg-ember/10 blur-xl group-hover:bg-ember/20 transition-all duration-700" />
                  
                  {/* Button container */}
                  <div className="relative px-10 py-4 border border-ember/40 rounded-full bg-charcoal-dark/80 backdrop-blur-sm overflow-hidden group-hover:border-ember/70 transition-all duration-500">
                    {/* Animated background sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ember/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    {/* Text */}
                    <span className="relative text-sm tracking-[0.4em] uppercase text-ember group-hover:text-cream transition-colors duration-500">
                      Enter
                    </span>
                  </div>

                  {/* Pulsing indicator below */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-px h-4 bg-gradient-to-b from-ember/50 to-transparent"
                    />
                  </div>
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* ============================================
            FEATURED STORIES SECTION - Visual Tiles
        ============================================ */}
        <section 
          id="featured-works" 
          className="py-32 px-6 scroll-mt-8"
        >
          <div className="container mx-auto max-w-6xl">
            {/* Section indicator */}
            <div className="text-center mb-16">
              <div className="w-8 h-px bg-ember/30 mx-auto mb-8" />
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
                Featured Works
              </h2>
              <p className="text-sm text-cream-muted/50 max-w-md mx-auto">
                Stories that settle into the quiet parts of your mind.
              </p>
            </div>

            {/* Story Tiles Carousel */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2500,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full select-none"
            >
              <CarouselContent className="-ml-4 md:-ml-6">
                {featuredStories.map((story, index) => (
                  <CarouselItem key={index} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="group relative">
                      {story.url ? (
                        <a
                          href={story.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                          draggable={false}
                        >
                          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-charcoal-light border border-border/30 transition-all duration-500 group-hover:scale-[1.03] group-hover:border-ember/40 group-hover:shadow-[0_0_60px_rgba(210,105,30,0.15)]">
                            {/* Image Background */}
                            <img
                              src={story.image}
                              alt={story.title}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                              draggable={false}
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

                            {/* Status Badge */}
                            <div className="absolute top-4 left-4">
                              <span className={`text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded backdrop-blur-sm ${
                                story.status === "Ongoing"
                                  ? "bg-ember/30 text-ember border border-ember/40"
                                  : "bg-charcoal-light/60 text-cream-muted/70 border border-border/40"
                              }`}>
                                {story.status}
                              </span>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-6">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-[10px] tracking-[0.15em] uppercase text-cream-muted/50">
                                  {story.platform}
                                </span>
                                <ExternalLink size={10} className="text-cream-muted/30 group-hover:text-ember/60 transition-colors" />
                              </div>
                              
                              <h3 className="font-serif text-xl md:text-2xl text-cream mb-2 group-hover:text-ember transition-colors duration-500">
                                {story.title}
                              </h3>
                              
                              <p className="font-serif text-sm text-cream-muted/60 italic leading-relaxed group-hover:text-cream-muted/80 transition-colors duration-500">
                                {story.hook}
                              </p>
                            </div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                              <div className="absolute inset-0 bg-gradient-to-t from-ember/10 via-transparent to-transparent" />
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-charcoal-light border border-border/30 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-ember/30">
                          {/* Image Background */}
                          <img
                            src={story.image}
                            alt={story.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                            draggable={false}
                          />

                          {/* Dark overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />

                          {/* Status Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded backdrop-blur-sm bg-charcoal-light/60 text-cream-muted/50 border border-border/30">
                              {story.status}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="absolute inset-x-0 bottom-0 p-6">
                            <span className="text-[10px] tracking-[0.15em] uppercase text-cream-muted/40 block mb-3">
                              {story.platform}
                            </span>
                            
                            <h3 className="font-serif text-xl md:text-2xl text-cream/70 mb-2">
                              {story.title}
                            </h3>
                            
                            <p className="font-serif text-sm text-cream-muted/40 italic leading-relaxed">
                              {story.hook}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 md:-left-4 bg-transparent border-ember/30 text-ember/60 hover:bg-ember/10 hover:text-ember hover:border-ember/50 h-10 w-10" />
              <CarouselNext className="right-0 md:-right-4 bg-transparent border-ember/30 text-ember/60 hover:bg-ember/10 hover:text-ember hover:border-ember/50 h-10 w-10" />
            </Carousel>

            {/* View More link */}
            <div className="text-center mt-20">
              <Link
                to="/works"
                className="group inline-flex items-center gap-3 px-6 py-3 border border-cream-muted/20 hover:border-ember/40 rounded-full text-cream-muted/50 hover:text-cream transition-all duration-500"
              >
                <span className="text-[11px] tracking-[0.3em] uppercase">View More</span>
                <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            AUTHOR PRESENCE SECTION
        ============================================ */}
        <section className="py-32 px-6 relative">
          {/* Subtle ambient */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[400px] bg-ember/[0.02] rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-xl relative z-10">
            {/* Section indicator */}
            <div className="text-center mb-16">
              <div className="w-8 h-px bg-ember/30 mx-auto" />
            </div>

            {/* Atmospheric paragraph */}
            <div className="text-center">
              <p className="font-serif text-lg md:text-xl text-cream-muted/70 leading-relaxed mb-12">
                I write psychological horror. Slow-burn dread. Characters who make 
                choices you understand but wish you didn't. The kind of stories that 
                settle into the quiet parts of your mind and wait.
              </p>

              <p className="text-sm text-cream-muted/40 mb-10">
                You found this place. That means something.
              </p>

              {/* Link to about */}
              <Link
                to="/about"
                className="text-[10px] tracking-[0.25em] uppercase text-cream-muted/40 hover:text-cream-muted/70 transition-colors duration-500"
              >
                About the Author →
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            NEWSLETTER SECTION
        ============================================ */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[300px] bg-ember/[0.03] rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-xl relative z-10">
            <div className="text-center mb-10">
              <div className="w-8 h-px bg-ember/30 mx-auto mb-8" />
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
                When the Dark Has News
              </h2>
              <p className="text-sm text-cream-muted/60 max-w-md mx-auto leading-relaxed">
                Occasional dispatches. New stories. Behind-the-scenes whispers. 
                No spam—just shadows, delivered rarely.
              </p>
            </div>

            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
                
                if (!email) return;
                
                setIsSubscribing(true);
                
                try {
                  const response = await fetch('https://api.buttondown.email/v1/subscribers', {
                    method: 'POST',
                    headers: {
                      'Authorization': `Token ${BUTTONDOWN_API_KEY}`,
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      email_address: email,
                    }),
                  });
                  
                  if (response.ok) {
                    toast({
                      title: "You've crossed the threshold",
                      description: "The dark has your address now. Dispatches will arrive... when the time is right.",
                    });
                    form.reset();
                  } else {
                    const data = await response.json();
                    if (response.status === 400 && data.email) {
                      toast({
                        title: "The shadows remember you",
                        description: "You're already among us. No need to knock twice.",
                      });
                    } else {
                      throw new Error(data.detail || 'Subscription failed');
                    }
                  }
                } catch (error) {
                  toast({
                    title: "The ritual failed",
                    description: "Something stirred in the wrong direction. Try again when the hour feels right.",
                    variant: "destructive",
                  });
                } finally {
                  setIsSubscribing(false);
                }
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                disabled={isSubscribing}
                className="flex-1 px-4 py-3 bg-charcoal-light/50 border border-border/40 rounded-lg text-cream placeholder:text-cream-muted/40 focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/20 transition-all duration-300 text-sm disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-6 py-3 bg-ember/10 border border-ember/30 rounded-lg text-ember text-sm tracking-wider uppercase hover:bg-ember/20 hover:border-ember/50 transition-all duration-300 group whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubscribing ? "Summoning..." : "Subscribe"}
                  {!isSubscribing && <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>}
                </span>
              </button>
            </form>

            <p className="text-center text-[10px] text-cream-muted/30 mt-6 tracking-wide">
              Unsubscribe anytime. Your inbox, your rules.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
