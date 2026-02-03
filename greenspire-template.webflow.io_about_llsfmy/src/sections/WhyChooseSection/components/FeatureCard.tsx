export type FeatureCardProps = {
  href: string;
  iconSrc: string;
  title: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <a
      href={props.href}
      role="tab"
      className="relative text-neutral-800 bg-transparent box-border caret-transparent block max-w-full text-left align-top"
    >
      <div className="bg-neutral-100 box-border caret-transparent blur-0 px-4 py-5 rounded-lg md:py-4">
        <div className="items-center box-border caret-transparent gap-x-2 flex justify-between gap-y-2 overflow-hidden md:gap-x-3 md:gap-y-3">
          <div className="relative text-cyan-950 items-center bg-white box-border caret-transparent flex shrink-0 h-8 justify-center w-8 rounded-[50%] md:h-11 md:w-11">
            <div className="items-center box-border caret-transparent flex h-4 justify-center w-4 md:h-5 md:w-5 before:accent-auto before:caret-transparent before:text-cyan-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-cyan-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
              <img
                src={props.iconSrc}
                alt="Icon"
                className="box-border caret-transparent h-full w-full"
              />
            </div>
          </div>
          <div className="items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow gap-y-2 mr-2.5">
            <p className="text-gray-700 text-lg font-medium box-border caret-transparent leading-[30px] md:text-xl md:leading-7">
              {props.title}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};
