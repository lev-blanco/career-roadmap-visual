/**
 * Career Roadmap — Mission Control Dashboard
 * Design: Aerospace-inspired, clean information density, status-driven visual language
 * Typography: DM Sans (headings/body) + JetBrains Mono (data/labels)
 * Palette: Slate neutrals + Teal accent + Amber urgency + Emerald completion
 */

import { HeroSection } from "@/components/sections/HeroSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { StrategySection } from "@/components/sections/StrategySection";
import { LinkedInSection } from "@/components/sections/LinkedInSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { ActionItemsSection } from "@/components/sections/ActionItemsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { SideNav } from "@/components/SideNav";
import { MobileNav } from "@/components/MobileNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SideNav />
      <MobileNav />
      <main className="lg:pl-16 pb-20 lg:pb-0">
        <HeroSection />
        <PillarsSection />
        <TimelineSection />
        <SkillsSection />
        <CertificationsSection />
        <PortfolioSection />
        <StrategySection />
        <LinkedInSection />
        <ContentSection />
        <ActionItemsSection />
        <TechStackSection />
      </main>
    </div>
  );
}
