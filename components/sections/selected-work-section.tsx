import { selectedWorkContent } from "@/data/selected-work";
import { RevealBlock, RevealListItem } from "@/components/motion/reveal";

export function SelectedWorkSection() {
  const { heading, projects } = selectedWorkContent;

  return (
    <section aria-labelledby="selected-work-heading" className="mt-20 tablet:mt-section">
      <RevealBlock>
        <h2
          id="selected-work-heading"
          className="font-heading text-hero-label font-medium tracking-hero-label text-ink uppercase"
        >
          {heading}
        </h2>
      </RevealBlock>
      <ul className="mt-16 tablet:mt-24">
        {projects.map(({ id, title, destination, period, description }, index) => (
          <RevealListItem key={id} className="border-b border-hairline last:border-b-0">
            <a
              href={destination.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${index === 0 ? "pt-0" : "pt-12"} ${index === projects.length - 1 ? "pb-0" : "pb-12"}`}
            >
              <div className="flex flex-col gap-2 tablet:flex-row tablet:items-start tablet:justify-between tablet:gap-6">
                <h3 className="font-heading text-project-title font-semibold text-ink">{title}</h3>
                <div className="flex w-full shrink-0 items-center gap-x-2 text-project-meta text-ink-soft tablet:w-auto">
                  <span>{destination.label}</span>
                  <span aria-hidden="true" className="text-hairline-strong">/</span>
                  <span>{period}</span>
                  <span aria-hidden="true" className="ml-auto text-project-arrow text-muted tablet:ml-1">↗</span>
                </div>
              </div>
              <p className="mt-7 max-w-work-impact text-project-description text-muted tablet:mt-6">
                {description}
              </p>
              <span className="sr-only">Opens in a new tab</span>
            </a>
          </RevealListItem>
        ))}
      </ul>
    </section>
  );
}
