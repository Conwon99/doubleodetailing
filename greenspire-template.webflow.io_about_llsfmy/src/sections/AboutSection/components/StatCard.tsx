export type StatCardProps = {
  description: string;
  digitGroups: Array<{
    digits: string[];
    className: string;
  }>;
  suffix: string;
  showBreak?: boolean;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div className="bg-neutral-100 box-border caret-transparent flex blur-0 flex-col h-[220px] justify-between p-[18px] rounded-xl md:h-[274px] md:p-5">
      <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
        <div className="text-gray-700 box-border caret-transparent">
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            {props.description}
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent flex h-[35px] justify-start overflow-hidden px-1 md:h-[62px] md:px-0">
        {props.digitGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={group.className}>
            {group.digits.map((digit, digitIndex) => (
              <div
                key={digitIndex}
                className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]"
              >
                {digit}
              </div>
            ))}
          </div>
        ))}
        <div className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
          {props.suffix}
          {props.showBreak && (
            <br className="text-3xl box-border caret-transparent leading-[35px] md:text-[52px] md:leading-[62px]" />
          )}
        </div>
      </div>
    </div>
  );
};
