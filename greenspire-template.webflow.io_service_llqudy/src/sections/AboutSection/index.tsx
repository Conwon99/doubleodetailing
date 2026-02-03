import { AboutStats } from "@/sections/AboutSection/components/AboutStats";
import { AboutImage } from "@/sections/AboutSection/components/AboutImage";

export const AboutSection = () => {
  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="box-border caret-transparent max-w-[988px]">
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
            </div>
          </div>
          <div className="items-end box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 mt-[18px] md:gap-x-10 md:flex-row md:gap-y-10 md:mt-5">
            <div className="box-border caret-transparent gap-x-[18px] flex blur-0 flex-col max-w-[488px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
              <AboutStats />
              <div className="text-gray-700 box-border caret-transparent">
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  We’ve been turning ordinary yards into thriving, beautiful
                  landscapes since 2015. Whether it&#39;s regular mowing,
                  seasonal cleanups, or complete garden makeovers — we’re here
                  to help you grow something amazing.
                </div>
              </div>
            </div>
            <AboutImage />
          </div>
        </div>
      </div>
    </section>
  );
};
