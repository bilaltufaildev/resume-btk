import type { SocialLink } from "@/types/social-link";

export interface HeroContent {
  roleLabel: string;
  name: string;
  statement: string;
  supportingLine: string;
  location: string;
  languages: string[];
  socialLinks: SocialLink[];
}
