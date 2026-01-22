import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Hand-drawn style bat silhouette with jagged wings
const BatSilhouette = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 120 60"
    className={className}
    fill="currentColor"
  >
    {/* Main bat body with jagged, hand-drawn style wings */}
    <path d="
      M60 30
      L58 26 L56 28 L54 24 L52 27
      C48 22, 40 15, 30 10
      L28 14 L24 8 L22 13 L18 6 L16 12 L10 4 L12 14
      C8 12, 4 16, 2 20
      L8 22 L4 26 L10 27
      C15 30, 25 32, 35 30
      L38 32 L42 30 L46 33 L50 30 L54 32 L58 30
      L60 35
      L62 30 L66 32 L70 30 L74 33 L78 30 L82 32
      C95 32, 105 30, 110 27
      L116 26 L112 22 L118 20
      C116 16, 112 12, 108 14
      L110 4 L104 12 L102 6 L98 13 L96 8 L92 14 L90 10
      C80 15, 72 22, 68 27
      L66 24 L64 28 L62 26
      L60 30
      M56 26 C56 24, 58 23, 60 24 C62 23, 64 24, 64 26 C64 28, 62 29, 60 28 C58 29, 56 28, 56 26
      M54 22 L56 18 L58 22
      M62 22 L64 18 L66 22
    " />
  </svg>
);

interface Bat {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

interface BatsAnimationProps {
  triggerBurst?: boolean;
  onBurstComplete?: () => void;
}

const BatsAnimation = ({ triggerBurst, onBurstComplete }: BatsAnimationProps) => {
  const [burstBats, setBurstBats] = useState<Bat[]>([]);
  const [driftBats, setDriftBats] = useState<Bat[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollTriggersUsed = useRef(0);
  const lastScrollTrigger = useRef(0);
  const hasEnteredRef = useRef(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Generate burst bats on Enter trigger
  useEffect(() => {
    if (!triggerBurst || prefersReducedMotion || hasEnteredRef.current) return;
    
    hasEnteredRef.current = true;
    const batCount = Math.floor(Math.random() * 4) + 3; // 3-6 bats
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const newBats: Bat[] = Array.from({ length: batCount }, (_, i) => {
      // Spread outward from center
      const angle = (Math.PI / 3) + (Math.random() * Math.PI / 3); // Upper arc
      const distance = 800 + Math.random() * 400;
      const spreadX = (Math.random() - 0.5) * 600;
      
      return {
        id: Date.now() + i,
        startX: centerX + spreadX * 0.3,
        startY: centerY + 100,
        endX: centerX + spreadX + Math.cos(angle - Math.PI / 2) * distance * (Math.random() > 0.5 ? 1 : -1),
        endY: -100 - Math.random() * 200,
        size: 35 + Math.random() * 45, // Larger bats for visibility
        duration: 1.4 + Math.random() * 0.6,
        delay: Math.random() * 0.3,
        rotation: (Math.random() - 0.5) * 40,
      };
    });
    
    setBurstBats(newBats);
    
    // Clear after animation and notify parent
    setTimeout(() => {
      setBurstBats([]);
      onBurstComplete?.();
    }, 2200);
  }, [triggerBurst, prefersReducedMotion, onBurstComplete]);

  // Scroll-triggered rare appearances
  const handleScrollTrigger = useCallback(() => {
    if (
      prefersReducedMotion ||
      !hasEnteredRef.current ||
      scrollTriggersUsed.current >= 2 ||
      driftBats.length > 0
    ) return;
    
    const now = Date.now();
    // Minimum 10 seconds between scroll triggers
    if (now - lastScrollTrigger.current < 10000) return;
    
    // Very low probability - approximately 2% chance per qualifying scroll
    if (Math.random() > 0.02) return;
    
    lastScrollTrigger.current = now;
    scrollTriggersUsed.current += 1;
    
    const batCount = Math.random() > 0.5 ? 1 : 2;
    const isLeftSide = Math.random() > 0.5;
    
    const newDriftBats: Bat[] = Array.from({ length: batCount }, (_, i) => ({
      id: Date.now() + i,
      startX: isLeftSide ? -50 : window.innerWidth + 50,
      startY: 80 + Math.random() * 150,
      endX: isLeftSide ? 200 + Math.random() * 300 : window.innerWidth - 200 - Math.random() * 300,
      endY: 150 + Math.random() * 200,
      size: 12 + Math.random() * 10,
      duration: 4 + Math.random() * 2,
      delay: i * 0.8,
      rotation: (Math.random() - 0.5) * 20,
    }));
    
    setDriftBats(newDriftBats);
    
    // Clear after animation
    setTimeout(() => {
      setDriftBats([]);
    }, 7000);
  }, [prefersReducedMotion, driftBats.length]);

  // Attach scroll listener after entry
  useEffect(() => {
    if (!hasEnteredRef.current || prefersReducedMotion) return;
    
    let scrollTimeout: number;
    const onScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(handleScrollTrigger, 300);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
    };
  }, [handleScrollTrigger, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 5 }}
      aria-hidden="true"
    >
      <AnimatePresence>
        {/* Burst bats - fast, chaotic upward flight */}
        {burstBats.map((bat) => (
          <motion.div
            key={bat.id}
            initial={{ 
              x: bat.startX, 
              y: bat.startY, 
              opacity: 0,
              scale: 0.3,
              rotate: bat.rotation - 30,
            }}
            animate={{ 
              x: bat.endX, 
              y: bat.endY, 
              opacity: [0, 0.7, 0.8, 0.6, 0],
              scale: [0.3, 1, 1.1, 1, 0.8],
              rotate: bat.rotation + 30,
            }}
            transition={{ 
              duration: bat.duration, 
              delay: bat.delay,
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { 
                duration: bat.duration,
                times: [0, 0.15, 0.4, 0.7, 1],
              },
            }}
            className="absolute"
            style={{ 
              width: bat.size,
              height: bat.size * 0.5,
            }}
          >
            <BatSilhouette className="w-full h-full text-foreground/70" />
          </motion.div>
        ))}

        {/* Drift bats - slow, subtle background movement */}
        {driftBats.map((bat) => (
          <motion.div
            key={bat.id}
            initial={{ 
              x: bat.startX, 
              y: bat.startY, 
              opacity: 0,
              rotate: bat.rotation,
            }}
            animate={{ 
              x: bat.endX, 
              y: [bat.startY, bat.endY - 30, bat.endY],
              opacity: [0, 0.3, 0.35, 0.25, 0],
              rotate: bat.rotation + 10,
            }}
            transition={{ 
              duration: bat.duration, 
              delay: bat.delay,
              ease: "easeInOut",
              y: {
                duration: bat.duration,
                times: [0, 0.5, 1],
                ease: "easeInOut",
              },
              opacity: {
                duration: bat.duration,
                times: [0, 0.2, 0.5, 0.8, 1],
              },
            }}
            className="absolute"
            style={{ 
              width: bat.size,
              height: bat.size * 0.4,
            }}
          >
            <BatSilhouette className="w-full h-full text-foreground/40" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BatsAnimation;
