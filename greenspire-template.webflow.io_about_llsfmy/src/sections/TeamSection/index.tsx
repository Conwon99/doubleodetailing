import { TeamHeader } from "@/sections/TeamSection/components/TeamHeader";
import { TeamCarousel } from "@/sections/TeamSection/components/TeamCarousel";

export const TeamSection = () => {
  return (
    <section className="box-border caret-transparent overflow-hidden py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:items-center md:gap-x-10 md:flex-row md:gap-y-10">
            <TeamHeader />
          </div>
          <TeamCarousel />
        </div>
      </div>
    </section>
  );
};
