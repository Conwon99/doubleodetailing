import { ProcessCard } from "./components/ProcessCard";

export const ProcessStepsMachinePolishing = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard
        imageUrl=""
        imageAlt="Wash and assessment"
        title="01. Wash & assessment."
        description="We start with a safe multi-stage wash and then assess your paintwork. We'll identify defects, swirl marks, and oxidation and agree the level of correction with you."
      />
      <ProcessCard
        imageUrl=""
        imageAlt="Decontamination"
        title="02. Decontamination."
        description="The paint is chemically decontaminated (iron, tar, and sap removal) and clay-treated. This removes bonded contaminants so we can polish effectively and avoid marring."
      />
      <ProcessCard
        imageUrl=""
        imageAlt="Correction"
        title="03. Correction."
        description="We use a dual-action or rotary polisher with the right pads and compounds to remove light defects, swirls, and restore clarity. Single-stage or multi-stage depending on your paint condition and goals."
      />
      <ProcessCard
        imageUrl=""
        imageAlt="Refinement and prep"
        title="04. Refinement & prep."
        description="A finer polish refines the finish and removes any haze. We then do a full IPA or panel wipe so the surface is clean and ready for protection—essential if you're adding a coating."
      />
      <ProcessCard
        imageUrl=""
        imageAlt="Protection"
        title="05. Protection."
        description="We apply your chosen protection—sealant, wax, or ceramic coating—so the corrected finish stays looking sharp and is shielded from the elements."
      />
    </div>
  );
};
