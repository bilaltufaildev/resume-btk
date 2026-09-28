import { identityContent } from "@/data/identity";
import type { SiteHeaderContent } from "@/types/site-header";

export const siteHeaderContent: SiteHeaderContent = {
  ...identityContent,
  copyLabels: {
    idle: "Copy",
    copied: "Copied!",
    failed: "Could not copy",
  },
};
