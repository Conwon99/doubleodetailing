export type ProcessStepProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

export const ProcessStep = (props: ProcessStepProps) => {
  return (
    <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-0 min-w-0 gap-y-6 transform-none md:min-h-[auto] md:min-w-[auto] md:translate-y-[100.0%]">
      <div className="bg-neutral-100 box-border caret-transparent gap-x-4 flex flex-col min-h-0 min-w-0 gap-y-4 px-4 py-5 rounded-xl md:min-h-[auto] md:min-w-[auto]">
        <div className="box-border caret-transparent gap-x-2 flex flex-col min-h-0 min-w-0 gap-y-2 md:min-h-[auto] md:min-w-[auto]">
          <div className="text-base font-semibold box-border caret-transparent leading-[26px] min-h-0 min-w-0 md:text-lg md:min-h-[auto] md:min-w-[auto]">
            {props.title}
          </div>
          <div className="text-gray-700 box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
              {props.description}
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent h-[180px] min-h-0 min-w-0 overflow-hidden rounded-lg md:min-h-[auto] md:min-w-[auto]">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};
