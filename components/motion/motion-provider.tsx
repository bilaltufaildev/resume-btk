"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { SiteLoader } from "@/components/feedback/site-loader";
import { MotionReadyContext } from "@/components/motion/motion-ready-context";
import type { MotionProviderProps } from "@/types/motion";

export function MotionProvider({ children }: MotionProviderProps) {
  const [isReady, setIsReady] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <MotionReadyContext.Provider value={isReady}>
        {children}
        <SiteLoader autoDismiss onComplete={() => setIsReady(true)} />
      </MotionReadyContext.Provider>
    </MotionConfig>
  );
}
