import { WhyChooseHeader } from "@/sections/WhyChooseSection/components/WhyChooseHeader";
import { FeaturesList } from "@/sections/WhyChooseSection/components/FeaturesList";
import { FeatureImages } from "@/sections/WhyChooseSection/components/FeatureImages";

export const WhyChooseSection = () => {
  return (
    <section className="bg-white box-border caret-transparent pb-[60px] md:pb-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <WhyChooseHeader />
          <div className="items-end box-border caret-transparent gap-x-8 hidden flex-col gap-y-8 mt-10 md:gap-x-[50px] md:flex-row md:gap-y-[50px] md:mt-14">
            <div className="box-border caret-transparent gap-x-8 flex basis-[0%] flex-col grow gap-y-8 md:gap-x-[50px] md:flex-row md:gap-y-[50px]">
              <div className="box-border caret-transparent gap-x-2 flex basis-[0%] flex-col grow max-w-[470px] gap-y-2"></div>
            </div>
          </div>
          <div className="relative box-border caret-transparent block justify-center mt-10 md:flex md:mt-14 before:accent-auto before:caret-transparent before:text-emerald-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:caret-transparent after:clear-both after:text-emerald-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist after:md:min-h-[auto] after:md:min-w-[auto]">
            <FeaturesList />
            <FeatureImages />
          </div>
        </div>
      </div>
    </section>
  );
};
