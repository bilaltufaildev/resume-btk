"use client";

import { ErrorState } from "@/components/feedback/error-state";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import type { ErrorBoundaryProps } from "@/types/error-boundary";

export default function Error({ retry }: ErrorBoundaryProps) {
  return (
    <>
      <SiteHeader />
      <ErrorState retry={retry} />
      <SiteFooter />
    </>
  );
}
