import { educationContent } from "@/data/education";
import { RevealBlock, RevealListItem } from "@/components/motion/reveal";

export function EducationSection() {
  const { heading, entries } = educationContent;

  return (
    <section aria-labelledby="education-heading" className="mt-20 tablet:mt-section">
      <RevealBlock>
        <h2
          id="education-heading"
          className="font-heading text-hero-label font-medium tracking-hero-label text-ink uppercase"
        >
          {heading}
        </h2>
      </RevealBlock>
      <ol className="mt-20 tablet:mt-28">
        {entries.map(({ id, institution, degree, start, end, description }) => (
          <RevealListItem key={id} className="border-b border-hairline py-12 first:pt-0">
            <article>
              <div className="flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:justify-between tablet:gap-6">
                <h3 className="flex flex-wrap items-baseline gap-x-2 font-heading text-work-title text-ink">
                  <span className="font-semibold">{institution}</span>
                  <span aria-hidden="true" className="text-hairline-strong">/</span>
                  <span className="font-normal">{degree}</span>
                </h3>
                <p className="flex shrink-0 items-center gap-x-2 text-work-date text-ink-soft">
                  <time dateTime={start.dateTime}>{start.label}</time>
                  <span aria-hidden="true">-</span>
                  <span className="sr-only">to</span>
                  <time dateTime={end.dateTime}>{end.label}</time>
                </p>
              </div>
              <p className="mt-6 max-w-work-impact text-work-impact text-muted tablet:mt-4">
                {description}
              </p>
            </article>
          </RevealListItem>
        ))}
      </ol>
    </section>
  );
}
