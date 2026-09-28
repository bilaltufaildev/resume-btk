import { heroContent } from "@/data/hero";
import { RevealSection } from "@/components/motion/reveal";

export function HeroProfile() {
  const { roleLabel, name, statement, supportingLine, location, languages, socialLinks } = heroContent;

  return (
    <RevealSection labelledBy="profile-name" className="pt-hero-mobile tablet:pt-hero-desktop">
      <p className="font-heading text-hero-label font-medium tracking-hero-label text-ink uppercase">
        {roleLabel}
      </p>
      <h1
        id="profile-name"
        className="mt-4 font-heading text-hero-name-small font-semibold tracking-hero-name text-ink phone:text-hero-name tablet:text-hero-name-desktop"
      >
        {name}
      </h1>
      <p className="mt-4 text-hero-statement tracking-hero-statement text-ink">
        {statement}
      </p>
      <p className="mt-3 text-hero-detail text-muted">{supportingLine}</p>

      <div className="mt-16 flex flex-col gap-7 border-b border-hairline pb-6 text-hero-detail tablet:mt-24 tablet:flex-row tablet:items-center tablet:justify-between tablet:gap-6">
        <p className="flex flex-wrap items-center gap-x-2 text-ink-soft">
          <span>{location}</span>
          {languages.length > 0 && (
            <>
              <span aria-hidden="true" className="text-hairline-strong">/</span>
              <span>{languages.join(", ")}</span>
            </>
          )}
        </p>
        {socialLinks.length > 0 && (
          <nav aria-label="Social profiles">
            <ul className="flex flex-wrap items-center gap-x-2">
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
      </div>
    </RevealSection>
  );
}
