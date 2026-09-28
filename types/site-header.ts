import type { IdentityContent } from "@/types/identity";

export interface CopyLabels {
  idle: string;
  copied: string;
  failed: string;
}

export interface CopyEmailButtonProps {
  email: string;
  labels: CopyLabels;
}

export interface SiteHeaderContent extends IdentityContent {
  copyLabels: CopyLabels;
}

export interface MobileContactMenuProps {
  content: SiteHeaderContent;
}
