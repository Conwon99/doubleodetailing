import { ProcessHeader } from "@/sections/ProcessSection/components/ProcessHeader";
import { MobileProcessCards } from "@/sections/ProcessSection/components/MobileProcessCards";
import { DesktopProcessTimeline } from "@/sections/ProcessSection/components/DesktopProcessTimeline";

export const ProcessSection = () => {
  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <ProcessHeader />
          <MobileProcessCards />
          <DesktopProcessTimeline />
        </div>
      </div>
    </section>
  );
};
