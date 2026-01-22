import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink, BookOpen, Clock, AlertTriangle } from "lucide-react";
import pumpkinLogo from "@/assets/pumpkin-logo-transparent.png";
import labyrinthCover from "@/assets/labyrinth-cover.png";
import hollowHoursCover from "@/assets/hollow-hours-cover.jpg";
import inheritanceCover from "@/assets/inheritance-cover.jpg";
import velvetRoomCover from "@/assets/velvet-room-cover.jpg";
import floorboardsCover from "@/assets/floorboards-cover.jpg";
import watchersJournalCover from "@/assets/watchers-journal-cover.jpg";
import Footer from "@/components/Footer";

interface Story {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  themes: string[];
  status: "Complete" | "Ongoing" | "Hiatus";
  wordCount?: string;
  chapters?: string;
  platform: string;
  platformUrl: string;
  coverImage?: string;
  contentWarnings?: string[];
  intensity: "Mild" | "Moderate" | "Intense";
}

const Works = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/works", label: "Works" },
    { path: "/about", label: "About" },
    { path: "/follow", label: "Follow" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const stories: Story[] = [
    {
      id: "labyrinth",
      title: "Labyrinth and Other Short Horror Stories",
      description: "A collection of interconnected tales exploring the spaces between what we know and what waits in the dark.",
      longDescription: "Each story in this anthology turns a familiar corner into something unfamiliar. A hallway that shouldn't exist. A reflection that moves too slowly. The neighbor who waves every morning, whose smile never quite reaches their eyes. These are the horrors that live in the ordinary—patient, persistent, and always watching.",
      themes: ["Psychological Horror", "Slow-burn", "Morally Grey Characters", "Cosmic Dread"],
      status: "Ongoing",
      wordCount: "45,000+",
      chapters: "12 Stories",
      platform: "Tapas",
      platformUrl: "https://tapas.io/machimaquiaveli",
      coverImage: labyrinthCover,
      contentWarnings: ["Psychological distress", "Implied violence", "Existential themes", "Unreliable narrators"],
      intensity: "Moderate",
    },
    {
      id: "summon-boyfriend",
      title: "How to summon a boyfriend by Spoiler",
      description: "The world is ending. Steph has a plan. The plan has other ideas.",
      longDescription: "When Spoiler decides summoning a boyfriend is the answer to the apocalypse, she gets more than she bargained for. A crack-treated-seriously DC/Danny Phantom crossover where desperation meets the Ghost King.",
      themes: ["Crack Treated Seriously", "DC/DP Crossover", "Summons", "Apocalypse"],
      status: "Complete",
      wordCount: "1,935",
      chapters: "1 Chapter",
      platform: "AO3",
      platformUrl: "https://archiveofourown.org/works/69548971",
      coverImage: hollowHoursCover,
      contentWarnings: ["End of the world themes"],
      intensity: "Mild",
    },
    {
      id: "summon-husband",
      title: "How to summon a husband by Black Bat",
      description: "The world is saved. Batman has concerns. The Ghost King has a promise to keep.",
      longDescription: "The sequel to boyfriend summoning—now featuring marriage, bat-family chaos, and a Ghost King who always keeps his word. Part 2 of the 'Cass and Danny sitting on the end of the world' series.",
      themes: ["Crack Treated Seriously", "Romance", "DC/DP Crossover", "Found Family"],
      status: "Complete",
      wordCount: "2,227",
      chapters: "1 Chapter",
      platform: "AO3",
      platformUrl: "https://archiveofourown.org/works/74766501",
      coverImage: inheritanceCover,
      contentWarnings: ["None"],
      intensity: "Mild",
    },
    {
      id: "consequences",
      title: "Consequences of Not Watching Your Words",
      description: "Jason makes a bargain with a deity. He should have chosen his words more carefully.",
      longDescription: "When Jason Todd strikes a deal with the Ghost King, he learns the hard way that exact wording matters. A tale of misunderstandings, unintended consequences, and Danny Phantom being supremely unhelpful.",
      themes: ["Ghost King Danny", "Misunderstandings", "Hijinks", "Word Games"],
      status: "Complete",
      wordCount: "4,621",
      chapters: "2 Chapters",
      platform: "AO3",
      platformUrl: "https://archiveofourown.org/works/71254951/chapters/185396281",
      coverImage: velvetRoomCover,
      contentWarnings: ["None"],
      intensity: "Mild",
    },
    {
      id: "fae-city",
      title: "Fae City",
      description: "Amity Park lands in the wrong dimension. The DC heroes are not prepared.",
      longDescription: "When Amity Park phases into the DC universe, the Justice League discovers that ghosts play by different rules—and the citizens of Amity are disturbingly used to it. Features Fae-like ghost politics and confused heroes.",
      themes: ["Ghost as Fae", "Dimensional Mishaps", "Chaos", "Culture Clash"],
      status: "Complete",
      wordCount: "3,747",
      chapters: "7 Chapters",
      platform: "AO3",
      platformUrl: "https://archiveofourown.org/works/70808976/chapters/184083821",
      coverImage: floorboardsCover,
      contentWarnings: ["None"],
      intensity: "Mild",
    },
    {
      id: "thoughts-comfort",
      title: "Thoughts and Comfort",
      description: "Jazz and Bruce finally talk. The manor has never been this quiet.",
      longDescription: "Part of the 'Bamf Mom Jazz' series. Jazz Fenton sits down with Bruce Wayne for a conversation neither of them expected. Featuring liminal Jazz, family dynamics, and the kind of quiet understanding that only comes from shared trauma.",
      themes: ["Liminal Jazz", "Family Dynamics", "Ghost Biology", "Heart-to-Heart"],
      status: "Complete",
      wordCount: "2,214",
      chapters: "1 Chapter",
      platform: "AO3",
      platformUrl: "https://archiveofourown.org/works/69679106",
      coverImage: watchersJournalCover,
      contentWarnings: ["Discussions of trauma"],
      intensity: "Mild",
    },
  ];

  // No upcoming works currently - all featured works are complete

  const platforms = [
    {
      name: "Archive of Our Own",
      url: "https://archiveofourown.org/users/MachiMaquiaveli/pseuds/MachiMaquiaveli",
      description: "The complete archive — all works, all fandoms, no barriers",
      works: "Full catalog",
    },
    {
      name: "Tapas",
      url: "https://tapas.io/machimaquiaveli",
      description: "Serialized originals and web fiction — best for following along",
      works: "Original series",
    },
    {
      name: "Tumblr",
      url: "https://www.tumblr.com/machimaquiaveli",
      description: "Behind-the-scenes, writing thoughts, and midnight musings",
      works: "Updates & extras",
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
          <div className="container mx-auto max-w-5xl">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h1 className="font-serif text-4xl md:text-5xl text-cream mb-6 animate-fade-in">
                The Works
              </h1>
              <p className="text-cream-muted max-w-2xl mx-auto leading-relaxed">
                Stories that follow you home. Tales that wait patiently in the dark corners 
                of your mind, long after you've finished reading.
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent mx-auto mt-8" />
            </div>

            {/* Featured Stories - Grid Layout */}
            <div className="mb-24">
              <h2 className="font-serif text-xl text-ember/80 mb-12 tracking-wider uppercase text-center">
                Featured Works
              </h2>
              
              <div className="grid gap-8">
                {stories.map((story, index) => (
                  <article 
                    key={story.id} 
                    className={`story-card rounded-lg overflow-hidden ${
                      index === 0 ? 'lg:flex' : 'md:flex'
                    }`}
                  >
                    <div className={`relative ${index === 0 ? 'lg:w-2/5' : 'md:w-1/3'}`}>
                      <img
                        src={story.coverImage}
                        alt={story.title}
                        className={`w-full object-cover ${index === 0 ? 'h-72 lg:h-full' : 'h-56 md:h-full'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent md:bg-gradient-to-r" />
                      
                      <div className="absolute top-4 left-4">
                        <span className={`text-xs tracking-widest uppercase px-3 py-1.5 rounded backdrop-blur-sm ${
                          story.status === "Ongoing" 
                            ? "bg-ember/30 text-ember border border-ember/40" 
                            : story.status === "Complete"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-muted text-muted-foreground border border-border"
                        }`}>
                          {story.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className={`p-6 lg:p-8 ${index === 0 ? 'lg:w-3/5' : 'md:w-2/3'}`}>
                      <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <BookOpen size={12} />
                          {story.chapters}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {story.wordCount}
                        </span>
                        <span className="text-cream-muted">
                          on {story.platform}
                        </span>
                      </div>

                      <h3 className={`font-serif text-cream mb-3 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                        {story.title}
                      </h3>
                      
                      <p className="text-cream-muted leading-relaxed mb-3 text-sm">
                        {story.description}
                      </p>
                      
                      {index === 0 && (
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {story.longDescription}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {story.themes.slice(0, index === 0 ? 4 : 3).map((theme) => (
                          <span
                            key={theme}
                            className="text-xs text-cream-muted border border-border/60 px-2.5 py-1 rounded-full bg-charcoal-light/30"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>

                      <div className="mb-4 flex flex-wrap items-center gap-4 text-xs">
                        <div className="flex items-center gap-2">
                          <AlertTriangle size={12} className="text-ember" />
                          <span className={`px-2 py-0.5 rounded ${
                            story.intensity === "Intense" 
                              ? "bg-blood-dim/30 text-blood"
                              : story.intensity === "Moderate"
                              ? "bg-ember/20 text-ember"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {story.intensity}
                          </span>
                        </div>
                        
                        {story.contentWarnings && (
                          <span className="text-cream-muted/60 hidden sm:inline">
                            {story.contentWarnings.slice(0, 2).join(" · ")}
                          </span>
                        )}
                      </div>

                      <a
                        href={story.platformUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-ember/10 border border-ember/30 rounded-lg text-ember hover:bg-ember/20 hover:border-ember/50 transition-all duration-300 group"
                      >
                        <span className="text-xs tracking-wider uppercase">Begin Reading</span>
                        <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>


            {/* Reading Platforms */}
            <div>
              <h2 className="font-serif text-xl text-ember/80 mb-4 tracking-wider uppercase text-center">
                Where to Read
              </h2>
              <p className="text-center text-sm text-muted-foreground mb-10 max-w-xl mx-auto">
                All works are free to read. Choose your preferred platform and enter the dark.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 bg-card border border-border rounded-lg hover:border-ember/40 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-ember/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-serif text-lg text-cream group-hover:text-ember transition-colors">
                          {platform.name}
                        </h4>
                        <ExternalLink size={14} className="text-muted-foreground group-hover:text-ember transition-colors" />
                      </div>
                      
                      <p className="text-sm text-cream-muted mb-4 leading-relaxed">
                        {platform.description}
                      </p>
                      
                      <span className="text-xs text-ember/70 tracking-wider uppercase">
                        {platform.works}
                      </span>
                    </div>
                  </a>
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

export default Works;
