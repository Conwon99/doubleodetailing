import { ProcessCard } from "./components/ProcessCard";

export const ProcessStepsInteriorFabricCoating = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard imageUrl="" imageAlt="Clean" title="01. Interior clean." description="We vacuum and clean all fabric surfaces—seats, carpets, mats, and trim—so they're free of dirt and stains before coating. A clean surface ensures the coating bonds and performs properly." />
      <ProcessCard imageUrl="" imageAlt="Prep" title="02. Preparation." description="Surfaces are prepared according to the product requirements. We ensure upholstery and carpets are dry and ready for the coating application." />
      <ProcessCard imageUrl="" imageAlt="Coat" title="03. Coating application." description="We apply the fabric coating evenly to the treated areas. It penetrates the fibres to repel stains and moisture while keeping the look and feel of the fabric." />
    </div>
  );
};
