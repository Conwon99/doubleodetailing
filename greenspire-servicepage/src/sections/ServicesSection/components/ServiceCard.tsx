export type ServiceCardProps = {
  href: string;
  imageUrl: string;
  imageSizes: string;
  title: string;
  description: string;
  iconUrl: string;
  iconAlt: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div role="listitem" className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <a
          href={props.href}
          className="box-border caret-transparent inline-block max-w-full w-full"
        >
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent h-[300px] overflow-hidden rounded-lg md:h-[423px]">
              <img
                src={props.imageUrl}
                alt=""
                sizes={props.imageSizes}
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full scale-110"
              />
            </div>
            <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 py-4">
              <div className="text-lg font-medium box-border caret-transparent leading-[30px] md:text-xl md:leading-7">
                {props.title}
              </div>
              <div className="text-gray-700 box-border caret-transparent">
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  {props.description}
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="box-border caret-transparent flex">
          <a
            href={props.href}
            className="text-emerald-200 items-center bg-emerald-950 box-border caret-transparent gap-x-5 flex max-w-full gap-y-5 text-center border pl-6 pr-1 py-1 rounded-[100px] border-solid border-transparent hover:text-emerald-950 hover:bg-white hover:border-emerald-950"
          >
            <div className="relative box-border caret-transparent overflow-hidden">
              <div className="box-border caret-transparent">
                <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                  View Details
                </div>
              </div>
              <div className="absolute box-border caret-transparent w-full">
                <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                  View Details
                </div>
              </div>
            </div>
            <div className="text-cyan-950 items-center bg-emerald-200 box-border caret-transparent flex h-12 justify-center w-12 overflow-hidden rounded-[50%]">
              <div className="relative box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-3.5 w-3.5 before:accent-auto before:caret-transparent before:text-cyan-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-cyan-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                    <img
                      src={props.iconUrl}
                      alt={props.iconAlt}
                      className="box-border caret-transparent h-full w-full"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[-200%] box-border caret-transparent left-[-200%]">
                  <div className="box-border caret-transparent h-3.5 w-3.5 before:accent-auto before:caret-transparent before:text-cyan-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-cyan-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                    <img
                      src={props.iconUrl}
                      alt={props.iconAlt}
                      className="box-border caret-transparent h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
