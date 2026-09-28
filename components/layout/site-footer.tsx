import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { ResumeDownloadLink } from "@/components/ui/resume-download-link";
import { RevealFooter } from "@/components/motion/reveal";
import { footerContent } from "@/data/footer";

export function SiteFooter() {
  const { name, descriptor, email, phone, phoneHref, copyLabels, socialLinks, copyrightYear } = footerContent;

  return (
    <RevealFooter className="mt-20 border-t border-hairline bg-canvas tablet:mt-36">
      <div className="mx-auto w-full max-w-content px-4 pt-16 pb-12 tablet:px-page-gutter tablet:pt-12 tablet:pb-8">
        <div className="flex flex-col tablet:flex-row tablet:items-start tablet:justify-between tablet:gap-6">
          <div>
            <p className="font-heading text-footer-name font-semibold text-ink">{name}</p>
            <p className="mt-1 text-footer-meta text-muted">{descriptor}</p>
            <a
              href={phoneHref}
              className="mt-2 inline-block text-footer-meta text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {phone}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4 tablet:mt-0">
            <a
              href={`mailto:${email}`}
              className="min-w-0 break-words text-footer-email font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {email}
            </a>
            <CopyEmailButton email={email} labels={copyLabels} />
            <ResumeDownloadLink />
          </div>
        </div>
        <div className="mt-11 border-t border-hairline pt-6 tablet:mt-12 tablet:pt-5">
          <div className="flex flex-col gap-6 tablet:flex-row tablet:items-center tablet:justify-between">
            {socialLinks.length > 0 && (
              <nav aria-label="Footer social profiles">
                <ul className="flex flex-wrap items-center gap-x-2 text-footer-meta">
                  {socialLinks.map(({ label, href }, index) => (
                    <li key={label} className="flex items-center gap-x-2">
                      {index > 0 && <span aria-hidden="true" className="text-hairline-strong">/</span>}
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative font-semibold text-ink before:absolute before:-inset-y-3 before:inset-x-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <p className="text-footer-meta text-muted">© {copyrightYear} {name}</p>
          </div>
        </div>
      </div>
    </RevealFooter>
  );
}
