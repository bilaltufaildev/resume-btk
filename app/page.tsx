import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroProfile } from "@/components/sections/hero-profile";
import { AboutSection } from "@/components/sections/about-section";
import { ToolsSection } from "@/components/sections/tools-section";
import { WorkHistorySection } from "@/components/sections/work-history-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { EducationSection } from "@/components/sections/education-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto min-h-screen w-full max-w-content px-page-gutter">
        <HeroProfile />
        <AboutSection />
        <ToolsSection />
        <WorkHistorySection />
        <SelectedWorkSection />
        <EducationSection />
      </main>
      <SiteFooter />
    </>
  );
}
