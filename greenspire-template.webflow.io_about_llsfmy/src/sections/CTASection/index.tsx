import { CTAContent } from "@/sections/CTASection/components/CTAContent";
import { CTABadge } from "@/sections/CTASection/components/CTABadge";

export const CTASection = () => {
  return (
    <section className="text-white bg-[url('https://cdn.prod.website-files.com/689a8e2467db11e41193d52c/689f8afaae6418171afa1e7c_d6e0cd76defeb4feeb229ffc3d205847b8165856.webp')] bg-auto box-border caret-transparent bg-[position:0px_100%] pt-[60px] pb-[50px] md:bg-cover md:bg-[position:50%_top] md:pt-[170px] md:pb-20">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="items-start box-border caret-transparent gap-x-10 flex flex-col justify-between gap-y-10 md:items-end md:gap-x-[60px] md:flex-row md:gap-y-[60px]">
          <CTAContent />
          <CTABadge />
        </div>
      </div>
    </section>
  );
};
