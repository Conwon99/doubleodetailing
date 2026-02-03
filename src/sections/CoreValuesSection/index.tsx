import { CoreValuesImage } from "@/sections/CoreValuesSection/components/CoreValuesImage";
import { CoreValuesContent } from "@/sections/CoreValuesSection/components/CoreValuesContent";

export const CoreValuesSection = () => {
  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
          <CoreValuesImage />
          <CoreValuesContent />
        </div>
      </div>
    </section>
  );
};
