import type { IdentityContent } from "@/types/identity";
import type { CopyLabels } from "@/types/site-header";
import type { SocialLink } from "@/types/social-link";

export interface FooterContent extends IdentityContent {
  copyLabels: CopyLabels;
  socialLinks: SocialLink[];
  copyrightYear: number;
}
