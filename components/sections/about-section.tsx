import { aboutContent } from "@/data/about";
import { RevealSection } from "@/components/motion/reveal";

export function AboutSection() {
  const { heading, paragraphs } = aboutContent;

  return (
    <RevealSection labelledBy="about-heading" className="mt-20 border-b border-hairline pb-20 tablet:mt-section tablet:pb-section">
      <div className="flex flex-col tablet:flex-row">
        <h2
          id="about-heading"
          className="mb-12 font-heading text-hero-label font-medium tracking-hero-label text-ink uppercase tablet:mb-0 tablet:w-about-label tablet:shrink-0"
        >
          {heading}
        </h2>
        <div className="min-w-0 space-y-5 text-about-copy text-body">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
