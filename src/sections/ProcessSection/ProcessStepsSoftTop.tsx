import { ProcessCard } from "./components/ProcessCard";

export const ProcessStepsSoftTop = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard imageUrl="" imageAlt="Clean" title="01. Deep clean." description="We clean the soft top with specialist products suitable for the material (fabric or vinyl). Dirt, stains, and organic growth are removed so the surface is ready for restoration and protection." />
      <ProcessCard imageUrl="" imageAlt="Restore" title="02. Restoration." description="We use appropriate cleaners and treatments to restore colour and condition. This revives the look and prepares the top for coating." />
      <ProcessCard imageUrl="" imageAlt="Coat" title="03. Coating." description="We apply a durable water- and dirt-repellent coating that helps protect the soft top from UV and the elements, so it stays looking good for longer." />
    </div>
  );
};
