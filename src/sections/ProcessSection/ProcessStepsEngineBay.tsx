import { ProcessCard } from "./components/ProcessCard";

export const ProcessStepsEngineBay = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard imageUrl="" imageAlt="Cover" title="01. Protection & prep." description="We cover or protect sensitive components (battery, ECU, alternator, etc.) where needed. The engine is cool before we start so we can work safely." />
      <ProcessCard imageUrl="" imageAlt="Clean" title="02. Cleaning." description="We use appropriate cleaners and brushes to loosen and remove dirt, grease, and grime from plastics, hoses, and metal. We avoid high-pressure water on sensitive areas." />
      <ProcessCard imageUrl="" imageAlt="Rinse" title="03. Rinse & dry." description="We rinse carefully and use air and cloths to dry so no water sits in electrical connections or crevices." />
      <ProcessCard imageUrl="" imageAlt="Dress" title="04. Dressing." description="We apply a suitable dressing to plastics and rubber to restore a clean, satin finish and help protect against UV and dirt." />
    </div>
  );
};
