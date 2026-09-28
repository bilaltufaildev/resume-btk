import { identityContent } from "@/data/identity";
import { siteHeaderContent } from "@/data/site-header";
import { socialLinksContent } from "@/data/social-links";
import type { FooterContent } from "@/types/footer";

export const footerContent: FooterContent = {
  ...identityContent,
  copyLabels: siteHeaderContent.copyLabels,
  socialLinks: socialLinksContent,
  copyrightYear: 2026,
};
