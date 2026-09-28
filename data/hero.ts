import { identityContent } from "@/data/identity";
import { socialLinksContent } from "@/data/social-links";
import type { HeroContent } from "@/types/hero";

export const heroContent: HeroContent = {
  roleLabel: identityContent.descriptor,
  name: identityContent.name,
  statement: "I build fast, scalable web applications with React, Next.js, and TypeScript.",
  supportingLine: "5+ years across fintech, e-commerce, AI products, and content platforms.",
  location: "Islamabad, Pakistan",
  languages: ["English", "Urdu"],
  socialLinks: socialLinksContent,
};
