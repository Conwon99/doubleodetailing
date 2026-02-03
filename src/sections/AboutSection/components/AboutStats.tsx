import { StatCard } from "@/sections/AboutSection/components/StatCard";

export const AboutStats = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-4 mt-10 md:grid-cols-[1fr_1fr_1fr_1fr] md:mt-14">
      <StatCard
        digits={["7", "8", "9", "0", "2"]}
        animationDigits={["2", "1", "2", "3", "4", "5"]}
        suffix="+"
        title="Watches Restored"
        description="Bringing heritage watches back to life with masterful craftsmanship."
        hasMultipleRows={true}
      />
      <StatCard
        digits={["7", "8", "9", "0", "2"]}
        animationDigits={["0", "1", "2", "3", "4", "5"]}
        suffix="+"
        title="Welcome to AM/PM Watch Repair."
        description="Expert Watch Repair & Restoration Since 2015"
      />
      <StatCard
        digits={["7", "8", "9", "0", "9"]}
        animationDigits={["8", "1", "2", "3", "4", "5"]}
        suffix="%"
        title="Customer Satisfaction"
        description="Trusted by Collectors for Precision Craftsmanship"
      />
      <StatCard
        digits={["7", "8", "9", "0", "5"]}
        animationDigits={["0", "1", "2", "3", "4", "5"]}
        suffix="+"
        title="Watch Brands Serviced"
        description="Expert Care for All Major Watch Brands"
        hasMultipleRows={false}
      />
    </div>
  );
};
