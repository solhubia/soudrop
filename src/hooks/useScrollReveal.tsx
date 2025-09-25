import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollReveal = (options?: { 
  threshold?: number; 
  triggerOnce?: boolean; 
  margin?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: options?.threshold || 0.1,
    once: options?.triggerOnce || false
  });

  return { ref, isInView };
};

export default useScrollReveal;