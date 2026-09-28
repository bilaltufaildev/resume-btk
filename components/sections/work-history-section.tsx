import { workHistoryContent } from "@/data/work-history";
import { RevealBlock, RevealListItem } from "@/components/motion/reveal";

export function WorkHistorySection() {
  const { heading, entries } = workHistoryContent;

  return (
    <section aria-labelledby="work-history-heading" className="mt-20 tablet:mt-section">
      <RevealBlock>
        <h2
          id="work-history-heading"
          className="font-heading text-hero-label font-medium tracking-hero-label text-ink uppercase"
        >
          {heading}
        </h2>
      </RevealBlock>
      <ol className="mt-20 tablet:mt-28">
        {entries.map(({ id, company, location, role, start, end, highlights }) => (
          <RevealListItem key={id} className="border-b border-hairline py-12 first:pt-0">
            <article>
              <div className="flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:justify-between tablet:gap-6">
                <h3 className="flex flex-wrap items-baseline gap-x-2 font-heading text-work-title text-ink">
                  <span className="font-semibold">
                    {company}<span className="font-normal text-muted">, {location}</span>
                  </span>
                  <span aria-hidden="true" className="text-hairline-strong">/</span>
                  <span className="font-normal">{role}</span>
                </h3>
                <p className="flex shrink-0 items-center gap-x-2 text-work-date text-ink-soft">
                  <time dateTime={start.dateTime}>{start.label}</time>
                  <span aria-hidden="true">-</span>
                  <span className="sr-only">to</span>
                  {end.dateTime ? (
                    <time dateTime={end.dateTime}>{end.label}</time>
                  ) : (
                    <span>{end.label}</span>
                  )}
                </p>
              </div>
              <ul className="mt-6 max-w-work-impact list-disc space-y-2 pl-6 text-work-impact text-muted marker:text-muted tablet:mt-4">
                {highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </article>
          </RevealListItem>
        ))}
      </ol>
    </section>
  );
}
