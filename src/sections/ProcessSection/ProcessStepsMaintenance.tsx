import { ProcessCard } from "./components/ProcessCard";

export const ProcessStepsMaintenance = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard
        imageUrl=""
        imageAlt="Wash"
        title="01. Wash."
        description="We start with a safe wash—pre-wash, snow foam, and two-bucket method—to remove dirt and grime without marring the paint. Wheels and arches are cleaned as part of the service."
      />
      <ProcessCard
        imageUrl=""
        imageAlt="Decontamination"
        title="02. Light decontamination."
        description="Where needed, we use iron remover and a quick clay or decontamination step to keep the surface clean and prevent build-up that could dull the finish over time."
      />
      <ProcessCard
        imageUrl=""
        imageAlt="Protection"
        title="03. Protection top-up."
        description="We apply a sealant or quick wax to boost protection and gloss. This helps maintain the look and durability of any existing coating or previous detail."
      />
      <ProcessCard
        imageUrl=""
        imageAlt="Interior"
        title="04. Interior refresh."
        description="Interior maintenance includes vacuum, wipe-down of main surfaces, and glass clean so the cabin stays fresh between full deep cleans."
      />
    </div>
  );
};
