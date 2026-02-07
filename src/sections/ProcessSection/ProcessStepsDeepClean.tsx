import { ProcessCard } from "./components/ProcessCard";

export const ProcessStepsDeepClean = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard
        imageUrl=""
        imageAlt="Exterior wash"
        title="01. Exterior wash."
        description="We start with a safe multi-stage wash: pre-wash, snow foam, and a two-bucket method with soft mitts. Wheels, arches, and trim are cleaned so the whole exterior is refreshed."
      />
      <ProcessCard
        imageUrl=""
        imageAlt="Decontamination"
        title="02. Decontamination & drying."
        description="Paint is chemically decontaminated (iron, tar, sap) and clay-treated if needed. We dry with plush towels and air to reduce spotting and leave the paint clean and smooth."
      />
      <ProcessCard
        imageUrl=""
        imageAlt="Interior"
        title="03. Interior deep clean."
        description="We vacuum and clean all interior surfaces—seats, carpets, dash, console, and door cards. Upholstery is treated appropriately for fabric or leather, and glass is cleaned inside and out."
      />
      <ProcessCard
        imageUrl=""
        imageAlt="Protection"
        title="04. Finishing & protection."
        description="Tyres and trim are dressed, and we can apply a sealant or quick wax for extra protection. Your vehicle is left looking immaculate and ready to use."
      />
    </div>
  );
};
