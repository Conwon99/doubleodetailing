import { ProcessCard } from "./components/ProcessCard";

export const ProcessStepsCeramicCoatings = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard
        imageUrl=""
        imageAlt="Preparation"
        title="01. Preparation."
        description="We start with a thorough wash and, where needed, decontamination and paint correction. The surface must be clean and defect-free so the coating bonds properly and looks its best."
      />
      <ProcessCard
        imageUrl=""
        imageAlt="Panel wipe"
        title="02. Panel wipe & prep."
        description="Every panel is wiped with IPA or a dedicated panel prep to remove any oils, residues, or polish dust. This ensures maximum adhesion and a uniform finish from the coating."
      />
      <ProcessCard
        imageUrl=""
        imageAlt="Application"
        title="03. Application."
        description="We apply the ceramic coating in a controlled way, panel by panel, following the product’s cure times. Our mobile setup allows us to work in a suitable environment for best results."
      />
      <ProcessCard
        imageUrl=""
        imageAlt="Curing"
        title="04. Curing & aftercare."
        description="The coating needs time to cure. We’ll explain how long to avoid washing or rain, and how to look after it so your protection lasts for the full 1- or 2-year period."
      />
    </div>
  );
};
