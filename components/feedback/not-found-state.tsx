import Link from "next/link";
import { RevealMain } from "@/components/motion/reveal";
import { notFoundStateContent } from "@/data/not-found-state";

export function NotFoundState() {
  const { title, description, homeLabel } = notFoundStateContent;

  return (
    <RevealMain className="-mt-14 mx-auto flex min-h-dvh w-full max-w-content flex-col items-center justify-center px-page-gutter py-section text-center tablet:-mt-16">
      <h1 className="font-heading text-not-found-title-mobile font-semibold text-ink tablet:text-not-found-title-desktop">
        {title}
      </h1>
      <p className="mt-3 max-w-work-impact text-not-found-copy text-muted">{description}</p>
      <Link
        href="/"
        className="mt-12 inline-flex min-h-10 items-center text-not-found-action font-semibold text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        {homeLabel}
      </Link>
    </RevealMain>
  );
}
