import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  direction = "up", 
  delay = 0,
  className = ""
}: ScrollRevealProps) => {
  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: 60, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case "down":
        return {
          hidden: { y: -60, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case "left":
        return {
          hidden: { x: -60, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case "right":
        return {
          hidden: { x: 60, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case "fade":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 }
        };
      default:
        return {
          hidden: { y: 60, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ amount: 0.1, once: false }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;