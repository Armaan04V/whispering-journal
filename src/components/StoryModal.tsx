import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, BookOpen, Clock, AlertTriangle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface StoryData {
  id?: string;
  title: string;
  hook?: string;
  description?: string;
  longDescription?: string;
  themes?: string[];
  status: "Complete" | "Ongoing" | "Hiatus";
  wordCount?: string;
  chapters?: string;
  platform: string;
  url?: string;
  platformUrl?: string;
  image?: string;
  coverImage?: string;
  contentWarnings?: string[];
  intensity?: "Mild" | "Moderate" | "Intense";
}

interface StoryModalProps {
  story: StoryData | null;
  isOpen: boolean;
  onClose: () => void;
}

const StoryModal = ({ story, isOpen, onClose }: StoryModalProps) => {
  if (!story) return null;

  const imageUrl = story.image || story.coverImage;
  const readUrl = story.url || story.platformUrl;
  const shortDesc = story.hook || story.description;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden bg-charcoal border-border/40 backdrop-blur-xl">
        <DialogTitle className="sr-only">{story.title}</DialogTitle>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-charcoal-dark/80 border border-border/40 text-cream-muted/60 hover:text-cream hover:border-ember/40 transition-all duration-300"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {/* Hero Image */}
              <div className="relative h-56 md:h-72 overflow-hidden">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full backdrop-blur-md ${
                    story.status === "Ongoing"
                      ? "bg-ember/40 text-ember border border-ember/50 shadow-[0_0_15px_rgba(210,105,30,0.3)]"
                      : story.status === "Complete"
                      ? "bg-green-500/30 text-green-400 border border-green-500/40"
                      : "bg-charcoal-light/70 text-cream-muted/70 border border-border/50"
                  }`}>
                    {story.status}
                  </span>
                </div>

                {/* Ember glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-ember/5 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Title & Platform */}
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs text-cream-muted/60">
                    <span className="tracking-[0.15em] uppercase">{story.platform}</span>
                    {story.chapters && (
                      <>
                        <span className="text-border">•</span>
                        <span className="flex items-center gap-1">
                          <BookOpen size={10} />
                          {story.chapters}
                        </span>
                      </>
                    )}
                    {story.wordCount && (
                      <>
                        <span className="text-border">•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={10} />
                          {story.wordCount}
                        </span>
                      </>
                    )}
                  </div>
                  
                  <h2 className="font-serif text-2xl md:text-3xl text-cream leading-tight">
                    {story.title}
                  </h2>
                </div>

                {/* Short Hook */}
                {shortDesc && (
                  <p className="font-serif text-lg text-cream-muted/80 italic leading-relaxed border-l-2 border-ember/40 pl-4">
                    {shortDesc}
                  </p>
                )}

                {/* Long Description */}
                {story.longDescription && (
                  <p className="text-sm text-cream-muted/70 leading-relaxed">
                    {story.longDescription}
                  </p>
                )}

                {/* Themes */}
                {story.themes && story.themes.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {story.themes.map((theme) => (
                      <span
                        key={theme}
                        className="text-xs text-cream-muted/70 border border-border/50 px-3 py-1.5 rounded-full bg-charcoal-light/30 hover:border-ember/30 transition-colors duration-300"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                )}

                {/* Intensity & Warnings */}
                {(story.intensity || story.contentWarnings) && (
                  <div className="flex flex-wrap items-center gap-4 text-xs pt-2 border-t border-border/20">
                    {story.intensity && (
                      <div className="flex items-center gap-2">
                        <AlertTriangle size={12} className="text-ember/70" />
                        <span className={`px-2.5 py-1 rounded-full ${
                          story.intensity === "Intense" 
                            ? "bg-blood-dim/30 text-blood border border-blood/30"
                            : story.intensity === "Moderate"
                            ? "bg-ember/20 text-ember border border-ember/30"
                            : "bg-charcoal-light/50 text-cream-muted/60 border border-border/40"
                        }`}>
                          {story.intensity} intensity
                        </span>
                      </div>
                    )}
                    
                    {story.contentWarnings && story.contentWarnings.length > 0 && story.contentWarnings[0] !== "None" && (
                      <span className="text-cream-muted/50">
                        CW: {story.contentWarnings.slice(0, 3).join(" · ")}
                      </span>
                    )}
                  </div>
                )}

                {/* Read Button */}
                {readUrl && (
                  <div className="pt-4">
                    <a
                      href={readUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-ember/15 border border-ember/40 rounded-lg text-ember hover:bg-ember/25 hover:border-ember/60 hover:shadow-[0_0_30px_rgba(210,105,30,0.2)] transition-all duration-300 group"
                    >
                      <span className="text-sm tracking-[0.2em] uppercase font-medium">Begin Reading</span>
                      <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default StoryModal;
