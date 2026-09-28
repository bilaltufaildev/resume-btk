import Link from "next/link";
import { MobileContactMenu } from "@/components/layout/mobile-contact-menu";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { ResumeDownloadLink } from "@/components/ui/resume-download-link";
import { siteHeaderContent } from "@/data/site-header";

export function SiteHeader() {
  const { name, descriptor, email, copyLabels } = siteHeaderContent;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-canvas">
      <div className="mx-auto w-full max-w-content px-page-gutter">
        <div className="hidden min-h-16 items-center justify-between gap-6 tablet:flex">
          <Link
            href="/"
            className="shrink-0 font-heading text-header-name font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {name}<span aria-hidden="true">_</span>
          </Link>
          <div className="flex items-center gap-2 text-header-meta tracking-nav text-ink-soft">
            <span>{descriptor}</span>
            <span aria-hidden="true" className="text-hairline-strong">/</span>
            <a
              href={`mailto:${email}`}
              className="font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {email}
            </a>
            <CopyEmailButton email={email} labels={copyLabels} />
            <ResumeDownloadLink />
          </div>
        </div>
        <MobileContactMenu content={siteHeaderContent} />
      </div>
    </header>
  );
}
