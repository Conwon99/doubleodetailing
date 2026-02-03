export type FeatureCardProps = {
  iconSrc: string;
  title: string;
  description: string;
  variant: string;
  iconVariant: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div
      className={`bg-white box-border caret-transparent gap-x-4 flex basis-[0%] flex-col grow justify-between max-w-none gap-y-4 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow md:max-w-xs md:p-7 ${props.variant}`}
    >
      <div
        className={`text-white items-center bg-cta-dark box-border caret-transparent flex h-12 justify-center w-12 overflow-hidden rounded-[50%] shadow-sm md:h-14 md:w-14 ${props.variant}`}
      >
        <div
          className={`items-center box-border caret-transparent flex h-6 justify-center w-6 before:accent-auto before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist ${props.iconVariant}`}
        >
          <img
            src={props.iconSrc}
            alt="Icon"
            className="box-border caret-transparent h-full w-full"
          />
        </div>
      </div>
      <div
        className={`box-border caret-transparent gap-x-2 flex flex-col gap-y-2 ${props.variant}`}
      >
        <div
          className={`text-xl font-semibold box-border caret-transparent leading-6 text-gray-900 md:text-2xl md:leading-8 ${props.variant}`}
        >
          {props.title}
        </div>
        <div
          className={`text-gray-600 box-border caret-transparent ${props.variant}`}
        >
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};
