"use client";

import { MotionConfig } from "framer-motion";
import { ErrorState } from "@/components/feedback/error-state";
import type { ErrorBoundaryProps } from "@/types/error-boundary";
import { bricolageGrotesque, inter } from "./fonts";
import "./globals.css";

export default function GlobalError({ retry }: ErrorBoundaryProps) {
  return (
    <html lang="en" className={`${bricolageGrotesque.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <MotionConfig reducedMotion="user">
          <ErrorState retry={retry} />
        </MotionConfig>
      </body>
    </html>
  );
}
