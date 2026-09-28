"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { MotionReadyContext } from "@/components/motion/motion-ready-context";
import type { RevealProps, RevealSectionProps } from "@/types/motion";

const revealMotion = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeIn" },
} as const;

export function RevealSection({ children, className, labelledBy }: RevealSectionProps) {
  const isReady = useContext(MotionReadyContext);

  return (
    <motion.section
      {...revealMotion}
      whileInView={isReady ? revealMotion.whileInView : undefined}
      aria-labelledby={labelledBy}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function RevealBlock({ children, className }: RevealProps) {
  const isReady = useContext(MotionReadyContext);

  return (
    <motion.div
      {...revealMotion}
      whileInView={isReady ? revealMotion.whileInView : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealListItem({ children, className }: RevealProps) {
  const isReady = useContext(MotionReadyContext);

  return (
    <motion.li
      {...revealMotion}
      whileInView={isReady ? revealMotion.whileInView : undefined}
      className={className}
    >
      {children}
    </motion.li>
  );
}

export function RevealFooter({ children, className }: RevealProps) {
  const isReady = useContext(MotionReadyContext);

  return (
    <motion.footer
      {...revealMotion}
      whileInView={isReady ? revealMotion.whileInView : undefined}
      className={className}
    >
      {children}
    </motion.footer>
  );
}

export function RevealMain({ children, className }: RevealProps) {
  const isReady = useContext(MotionReadyContext);

  return (
    <motion.main
      {...revealMotion}
      whileInView={isReady ? revealMotion.whileInView : undefined}
      className={className}
    >
      {children}
    </motion.main>
  );
}
