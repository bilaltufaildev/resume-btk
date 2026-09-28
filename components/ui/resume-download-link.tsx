import { resumeDownloadContent } from "@/data/resume-download";

export function ResumeDownloadLink() {
  const { label, ariaLabel, href, filename } = resumeDownloadContent;

  return (
    <a
      href={href}
      download={filename}
      type="application/pdf"
      aria-label={ariaLabel}
      className="inline-flex h-8 shrink-0 items-center justify-center rounded-full bg-surface-soft px-3 text-copy font-semibold text-ink transition-colors duration-150 hover:bg-surface-soft-active focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-reduce:transition-none"
    >
      {label}
    </a>
  );
}
