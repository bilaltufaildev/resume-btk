"use client";

import Link from "next/link";
import { RevealMain } from "@/components/motion/reveal";
import { errorStateContent } from "@/data/error-state";
import type { ErrorBoundaryProps } from "@/types/error-boundary";

export function ErrorState({ retry }: ErrorBoundaryProps) {
  const { title, description, retryLabel, homeLabel } = errorStateContent;

  return (
    <RevealMain className="mx-auto flex min-h-dvh w-full max-w-content flex-col items-center justify-center px-page-gutter py-section text-center">
      <h1 className="font-heading text-feedback-title-mobile font-semibold text-ink tablet:text-feedback-title-desktop">
        {title}
      </h1>
      <p className="mt-3 max-w-work-impact text-feedback-copy text-muted">{description}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-feedback-action">
        <button
          type="button"
          onClick={retry}
          className="inline-flex min-h-10 items-center font-semibold text-ink underline decoration-hairline-strong underline-offset-4 hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          {retryLabel}
        </button>
        <Link
          href="/"
          className="inline-flex min-h-10 items-center font-semibold text-ink underline decoration-hairline-strong underline-offset-4 hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          {homeLabel}
        </Link>
      </div>
    </RevealMain>
  );
}
