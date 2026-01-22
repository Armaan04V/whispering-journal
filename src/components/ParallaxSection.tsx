import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // -1 to 1, negative = slower, positive = faster
  offset?: ["start end" | "end start" | "start start" | "end end" | "center center", "start end" | "end start" | "start start" | "end end" | "center center"];
}

const ParallaxSection = ({ 
  children, 
  className = "", 
  speed = 0.2,
  offset = ["start end", "end start"]
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <motion.div 
      ref={ref} 
      style={{ y }} 
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
