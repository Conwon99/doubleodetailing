export type StatCardProps = {
  digits: string[];
  animationDigits: string[];
  suffix: string;
  title: string;
  description: string;
  hasMultipleRows?: boolean;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div className="bg-white box-border caret-transparent gap-x-[50px] flex blur-0 flex-col gap-y-[50px] px-5 py-7 rounded-xl md:gap-x-20 md:gap-y-20">
      <div className="box-border caret-transparent flex h-[35px] justify-start overflow-hidden px-1 md:h-[62px] md:px-0">
        {props.hasMultipleRows ? (
          <>
            <div className="box-border caret-transparent items-end flex flex-col justify-end">
              {props.digits.map((digit, index) => (
                <div
                  key={index}
                  className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]"
                >
                  {digit}
                </div>
              ))}
            </div>
            <div className="box-border caret-transparent flex flex-col">
              {props.animationDigits.map((digit, index) => (
                <div
                  key={index}
                  className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]"
                >
                  {digit}
                </div>
              ))}
            </div>
            <div className="box-border caret-transparent items-end flex flex-col justify-end">
              {props.digits.map((digit, index) => (
                <div
                  key={index}
                  className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]"
                >
                  {digit}
                </div>
              ))}
            </div>
            <div className="box-border caret-transparent flex flex-col">
              {props.animationDigits.map((digit, index) => (
                <div
                  key={index}
                  className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]"
                >
                  {digit}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="box-border caret-transparent items-end flex flex-col justify-end">
              {props.digits.map((digit, index) => (
                <div
                  key={index}
                  className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]"
                >
                  {digit}
                </div>
              ))}
            </div>
            <div className="box-border caret-transparent flex flex-col">
              {props.animationDigits.map((digit, index) => (
                <div
                  key={index}
                  className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]"
                >
                  {digit}
                </div>
              ))}
            </div>
          </>
        )}
        <div className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
          {props.suffix}
          <br className="text-3xl box-border caret-transparent leading-[35px] md:text-[52px] md:leading-[62px]" />
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2">
        <div className="text-lg font-semibold box-border caret-transparent leading-[30px] md:text-xl md:leading-7">
          {props.title}
        </div>
        <div className="text-gray-700 box-border caret-transparent">
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};
