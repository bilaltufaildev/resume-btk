"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { identityContent } from "@/data/identity";
import type { SiteLoaderProps } from "@/types/site-loader";

export function SiteLoader({ autoDismiss = false, onComplete }: SiteLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const words = identityContent.name.trim().split(/\s+/).map((word) => Array.from(word));

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="status"
      aria-label={`Loading ${identityContent.name}'s portfolio`}
      className="fixed inset-0 z-50 flex h-dvh w-screen items-center justify-center overflow-hidden bg-canvas px-page-gutter"
    >
      <div
        aria-hidden="true"
        className="flex flex-wrap justify-center gap-x-3 font-heading text-loader-name-mobile font-semibold tracking-loader-name text-ink tablet:gap-x-5 tablet:text-loader-name-desktop"
      >
        {words.map((letters, wordIndex) => {
          const letterOffset = words
            .slice(0, wordIndex)
            .reduce((total, previousWord) => total + previousWord.length, 0);

          return (
            <span key={wordIndex} className="inline-flex whitespace-nowrap">
              {letters.map((letter, letterIndex) => (
                <span key={letterIndex} className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      delay: (letterOffset + letterIndex) * 0.065,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onAnimationComplete={
                      autoDismiss && wordIndex === words.length - 1 && letterIndex === letters.length - 1
                        ? () => {
                            setIsVisible(false);
                            onComplete?.();
                          }
                        : undefined
                    }
                  >
                    {letter}
                  </motion.span>
                </span>
              ))}
            </span>
          );
        })}
      </div>
    </div>
  );
}
