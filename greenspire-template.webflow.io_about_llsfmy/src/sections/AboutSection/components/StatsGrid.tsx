import { StatCard } from "@/sections/AboutSection/components/StatCard";

export const StatsGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-4 mt-10 md:grid-cols-[1fr_1fr_1fr_1fr] md:mt-14">
      <StatCard
        description="Into beautiful, thriving spaces across the city."
        digitGroups={[
          {
            digits: ["7", "8", "9", "0", "2"],
            className:
              "items-end box-border caret-transparent flex flex-col justify-end",
          },
          {
            digits: ["0", "1", "2", "3", "4", "5"],
            className: "box-border caret-transparent flex flex-col",
          },
        ]}
        suffix="+"
        showBreak={true}
      />
      <StatCard
        description="We’ve proudly completed over 1,200 lawn and garden projects, each tailored."
        digitGroups={[
          {
            digits: ["7", "8", "9", "0", "2"],
            className:
              "items-end box-border caret-transparent flex flex-col justify-end",
          },
          {
            digits: ["2", "1", "2", "3", "4", "5"],
            className: "box-border caret-transparent flex flex-col",
          },
          {
            digits: ["7", "8", "9", "0", "0"],
            className:
              "items-end box-border caret-transparent flex flex-col justify-end",
          },
          {
            digits: ["0", "1", "2", "3", "4", "5"],
            className: "box-border caret-transparent flex flex-col",
          },
        ]}
        suffix="+"
        showBreak={true}
      />
      <StatCard
        description="With a 98% customer satisfaction rate, our clients trust us to deliver reliable"
        digitGroups={[
          {
            digits: ["7", "8", "9", "0", "9"],
            className:
              "items-end box-border caret-transparent flex flex-col justify-end",
          },
          {
            digits: ["8", "1", "2", "3", "4", "5"],
            className: "box-border caret-transparent flex flex-col",
          },
        ]}
        suffix="%"
        showBreak={true}
      />
      <StatCard
        description="Proudly serving 50+ communities across England — bringing expert lawn care"
        digitGroups={[
          {
            digits: ["7", "8", "9", "0", "5"],
            className:
              "items-end box-border caret-transparent flex flex-col justify-end",
          },
          {
            digits: ["0", "1", "2", "3", "4", "5"],
            className: "box-border caret-transparent flex flex-col",
          },
        ]}
        suffix="+"
        showBreak={true}
      />
    </div>
  );
};
