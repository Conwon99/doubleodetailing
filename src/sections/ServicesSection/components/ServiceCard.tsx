export type ServiceCardProps = {
  imageUrl: string;
  imageAlt: string;
  iconUrl: string;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
  arrowIconUrl: string;
  variant: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div
      className={`relative box-border caret-transparent blur-0 shrink-0 h-[430px] overflow-hidden rounded-xl transition-all duration-300 ease-in-out group ${props.variant} md:hover:w-[49%]`}
    >
      <img
        src={props.imageUrl}
        sizes="100vw"
        alt={props.imageAlt}
        className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
      />
      <div className="absolute bg-white box-border caret-transparent p-6 rounded-lg bottom-7 inset-x-5">
        <div className="box-border caret-transparent gap-x-[18px] flex flex-col gap-y-[18px] md:gap-x-5 md:gap-y-5">
          <div className="text-black items-center bg-neutral-200 box-border caret-transparent flex h-10 justify-center w-10 overflow-hidden rounded-[50%] md:h-12 md:w-12">
            <div className="items-center box-border caret-transparent flex h-5 justify-center w-5 before:accent-auto before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
              <img
                src={props.iconUrl}
                alt="Icon"
                className="box-border caret-transparent h-full w-full"
              />
            </div>
          </div>
          <div className="text-black text-xl font-medium box-border caret-transparent leading-6 md:text-black md:text-2xl md:leading-8">
            {props.title}
          </div>
        </div>
        <div className="box-border caret-transparent overflow-hidden">
          <div className="text-black box-border caret-transparent gap-x-[18px] flex flex-col h-auto opacity-100 gap-y-[18px] w-auto mt-1 md:text-slate-200/80 md:gap-x-5 md:max-h-0 md:opacity-0 md:gap-y-5 md:w-full md:group-hover:max-h-[300px] md:group-hover:opacity-100 md:transition-all md:duration-300 md:overflow-hidden">
            <div className="text-black text-[15px] box-border caret-transparent leading-6 md:text-slate-200/80 md:text-base">
              {props.description}
            </div>
            <div className="text-black box-border caret-transparent flex md:text-slate-200/80">
              <a
                href={props.linkHref}
                className="text-black items-center bg-cta box-border caret-transparent gap-x-3 flex max-w-full gap-y-3 text-center border px-4 py-2 rounded-[100px] border-solid border-transparent hover:bg-white hover:border-cta-dark"
              >
                <div className="relative box-border caret-transparent overflow-hidden">
                  <div className="box-border caret-transparent">
                    <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                      {props.linkText}
                    </div>
                  </div>
                  <div className="absolute box-border caret-transparent w-full">
                    <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                      {props.linkText}
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent">
                  <div className="items-center box-border caret-transparent flex h-4 justify-center w-4 before:accent-auto before:caret-transparent before:text-black before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                    <img
                      src={props.arrowIconUrl}
                      alt="Icon"
                      className="box-border caret-transparent h-2 w-3"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
