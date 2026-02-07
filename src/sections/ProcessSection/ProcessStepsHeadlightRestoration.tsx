import { ProcessCard } from "./components/ProcessCard";

export const ProcessStepsHeadlightRestoration = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard imageUrl="" imageAlt="Masking" title="01. Masking & prep." description="We mask around the headlights to protect the surrounding paint and trim. The lens surface is cleaned so we're working on a contaminant-free surface." />
      <ProcessCard imageUrl="" imageAlt="Sanding" title="02. Sanding." description="We use a progressive sanding process to remove the oxidised or damaged layer from the lens. This restores clarity and prepares the surface for polishing." />
      <ProcessCard imageUrl="" imageAlt="Polishing" title="03. Polishing." description="We polish the lenses with a dual-action or dedicated tool and the right pads and compounds to bring back transparency and a smooth finish." />
      <ProcessCard imageUrl="" imageAlt="Protection" title="04. UV protection." description="We apply a UV-resistant sealant or coating to help prevent yellowing and hazing from returning, so the restoration lasts longer." />
    </div>
  );
};
