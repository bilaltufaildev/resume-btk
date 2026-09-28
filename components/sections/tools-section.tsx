import { toolsContent } from "@/data/tools";
import { RevealBlock, RevealSection } from "@/components/motion/reveal";

export function ToolsSection() {
  const { heading, groups } = toolsContent;
  const lastDesktopRowStart = Math.floor((groups.length - 1) / 2) * 2;

  return (
    <RevealSection labelledBy="tools-heading" className="mt-20 border-b border-hairline pb-20 tablet:mt-section">
      <div className="flex flex-col tablet:flex-row">
        <h2
          id="tools-heading"
          className="mb-12 font-heading text-hero-label font-medium tracking-hero-label text-ink uppercase tablet:mb-0 tablet:w-about-label tablet:shrink-0"
        >
          {heading}
        </h2>
        <div className="grid min-w-0 flex-1 grid-cols-1 gap-y-6 tablet:grid-cols-2 tablet:gap-x-tools tablet:gap-y-12">
          {groups.map((group, index) => {
            const dividerClass = index < lastDesktopRowStart
              ? "border-b border-hairline pb-6 tablet:pb-7"
              : index < groups.length - 1
                ? "border-b border-hairline pb-6 tablet:border-b-0 tablet:pb-0"
                : "";

            return (
              <RevealBlock key={group.id} className={dividerClass}>
                <h3 className="font-heading text-hero-label font-medium tracking-hero-label text-muted uppercase">
                  {group.heading}
                </h3>
                <ul className="mt-6 space-y-2 tablet:mt-8">
                  {group.tools.map((tool) => (
                    <li key={tool} className="text-tools-item font-semibold text-ink">
                      {tool}
                    </li>
                  ))}
                </ul>
              </RevealBlock>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
