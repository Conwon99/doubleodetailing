import { Navbar } from "@/sections/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { MissionSection } from "@/sections/MissionSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { TeamSection } from "@/sections/TeamSection";
import { CTASection } from "@/sections/CTASection";
import { NewsletterSection } from "@/sections/NewsletterSection";

export const App = () => {
  return (
    <body className="text-emerald-950 text-sm not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-5 list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-geist">
      <div className="box-border caret-transparent">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ProcessSection />
        <WhyChooseSection />
        <TeamSection />
        <CTASection />
        <NewsletterSection />
      </div>
    </body>
  );
};
