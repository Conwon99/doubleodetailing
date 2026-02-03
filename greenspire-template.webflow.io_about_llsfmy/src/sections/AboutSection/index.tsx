import { AboutContent } from "@/sections/AboutSection/components/AboutContent";
import { AboutTestimonial } from "@/sections/AboutSection/components/AboutTestimonial";
import { AboutCTA } from "@/sections/AboutSection/components/AboutCTA";
import { StatsGrid } from "@/sections/AboutSection/components/StatsGrid";

export const AboutSection = () => {
  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
            <AboutContent />
            <div className="box-border caret-transparent gap-x-6 flex flex-col max-w-[842px] gap-y-6 md:gap-x-7 md:gap-y-7">
              <div className="text-3xl font-medium box-border caret-transparent blur-0 tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
                At{" "}
                <span className="text-3xl italic box-border caret-transparent leading-[35px] font-playfair_display md:text-[52px] md:leading-[62px]">
                  Greenspire{" "}
                </span>
                we’ve been turning ordinary yards into thriving{" "}
                <span className="text-neutral-400 text-3xl box-border caret-transparent leading-[35px] md:text-[52px] md:leading-[62px]">
                  landscapes since 2015, with 1,200+ completed projects
                </span>
              </div>
              <div className="box-border caret-transparent gap-x-7 flex flex-col gap-y-7 md:gap-x-10 md:gap-y-10">
                <AboutTestimonial />
                <AboutCTA />
              </div>
            </div>
          </div>
          <StatsGrid />
        </div>
      </div>
    </section>
  );
};
