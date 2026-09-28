import type { Metadata } from "next";
import { MotionProvider } from "@/components/motion/motion-provider";
import { heroContent } from "@/data/hero";
import { bricolageGrotesque, inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: `${heroContent.name} — ${heroContent.roleLabel}`,
  description: heroContent.statement,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolageGrotesque.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
