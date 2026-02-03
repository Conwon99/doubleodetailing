export type TestimonialCardProps = {
  clientImageUrl: string;
  quoteIconUrl: string;
  quoteIconVariant: string;
  testimonialText: string;
  starIconUrl: string;
  clientName: string;
  clientTitle: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="bg-neutral-100 box-border caret-transparent gap-x-7 flex flex-col gap-y-7 p-2 rounded-xl md:gap-x-10 md:flex-row md:gap-y-10 md:p-3">
      <div className="box-border caret-transparent h-[350px] max-w-none overflow-hidden rounded-lg md:h-[380px] md:max-w-[300px]">
        <img
          src={props.clientImageUrl}
          sizes="(max-width: 600px) 100vw, 600px"
          alt="Client"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
      </div>
      <div className="box-border caret-transparent gap-x-6 flex basis-[0%] flex-col grow justify-between gap-y-6 px-2 py-3 md:gap-x-[60px] md:gap-y-[60px] md:px-0">
        <div className="box-border caret-transparent w-10 md:w-[67px] before:accent-auto before:caret-transparent before:text-emerald-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-emerald-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
          <img
            src={props.quoteIconUrl}
            alt="Icon"
            className={`box-border caret-transparent ${props.quoteIconVariant}`}
          />
        </div>
        <div className="box-border caret-transparent gap-x-7 flex flex-col gap-y-7 md:gap-x-10 md:gap-y-10">
          <div className="text-lg font-medium box-border caret-transparent leading-[30px] md:text-xl md:leading-7">
            {props.testimonialText}
          </div>
          <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 md:gap-x-5 md:gap-y-5">
            <div className="box-border caret-transparent gap-x-2 flex gap-y-2">
              <div className="box-border caret-transparent h-6 w-6 before:accent-auto before:caret-transparent before:text-emerald-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-emerald-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                <img
                  src={props.starIconUrl}
                  alt="Icon"
                  className="box-border caret-transparent h-[22px] w-[22px]"
                />
              </div>
              <div className="box-border caret-transparent h-6 w-6 before:accent-auto before:caret-transparent before:text-emerald-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-emerald-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                <img
                  src={props.starIconUrl}
                  alt="Icon"
                  className="box-border caret-transparent h-[22px] w-[22px]"
                />
              </div>
              <div className="box-border caret-transparent h-6 w-6 before:accent-auto before:caret-transparent before:text-emerald-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-emerald-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                <img
                  src={props.starIconUrl}
                  alt="Icon"
                  className="box-border caret-transparent h-[22px] w-[22px]"
                />
              </div>
              <div className="box-border caret-transparent h-6 w-6 before:accent-auto before:caret-transparent before:text-emerald-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-emerald-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                <img
                  src={props.starIconUrl}
                  alt="Icon"
                  className="box-border caret-transparent h-[22px] w-[22px]"
                />
              </div>
              <div className="box-border caret-transparent h-6 w-6 before:accent-auto before:caret-transparent before:text-emerald-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-emerald-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                <img
                  src={props.starIconUrl}
                  alt="Icon"
                  className="box-border caret-transparent h-[22px] w-[22px]"
                />
              </div>
            </div>
            <div className="box-border caret-transparent">
              <div className="text-lg font-semibold box-border caret-transparent leading-[30px] md:text-xl md:leading-7">
                {props.clientName}
              </div>
              <div className="text-gray-700 box-border caret-transparent">
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  {props.clientTitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
