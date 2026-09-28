import type { ReactNode } from "react";

export interface MotionProviderProps {
  children: ReactNode;
}

export interface RevealProps {
  children: ReactNode;
  className?: string;
}

export interface RevealSectionProps extends RevealProps {
  labelledBy: string;
}
