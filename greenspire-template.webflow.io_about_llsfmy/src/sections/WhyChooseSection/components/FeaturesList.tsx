import { FeatureCard } from "@/sections/WhyChooseSection/components/FeatureCard";

export const FeaturesList = () => {
  return (
    <div
      role="tablist"
      className="static box-border caret-transparent gap-x-2 flex flex-col max-w-none min-h-0 min-w-0 gap-y-2 transform-none z-[1] left-[22%] md:relative md:max-w-[41%] md:min-h-[auto] md:min-w-[auto] md:translate-x-[-50.0%]"
    >
      <FeatureCard
        href="#w-tabs-0-data-w-pane-0"
        iconSrc="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-10.svg"
        title="Tailored Lawn & Garden Solutions"
      />
      <FeatureCard
        href="#w-tabs-0-data-w-pane-1"
        iconSrc="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-6.svg"
        title="Fully Licensed & Insured"
      />
      <FeatureCard
        href="#w-tabs-0-data-w-pane-2"
        iconSrc="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-10.svg"
        title="Tailored Lawn & Garden Solutions"
      />
      <FeatureCard
        href="#w-tabs-0-data-w-pane-3"
        iconSrc="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-8.svg"
        title="Eco-Friendly Practices"
      />
      <FeatureCard
        href="#w-tabs-0-data-w-pane-4"
        iconSrc="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-9.svg"
        title="Reliable & On-Time Service"
      />
    </div>
  );
};
