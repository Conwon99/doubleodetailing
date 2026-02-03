export type ServicePageCardProps = {
  href: string;
  imageUrl: string;
  title: string;
  description: string;
};

export const ServicePageCard = (props: ServicePageCardProps) => {
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
                alt={props.title}
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
            className="text-white items-center bg-cta box-border caret-transparent gap-x-5 flex max-w-full gap-y-5 text-center border pl-6 pr-1 py-1 rounded-[100px] border-solid border-transparent hover:text-cta hover:bg-white hover:border-cta"
          >
            <div className="relative box-border caret-transparent overflow-hidden">
              <div className="box-border caret-transparent">
                <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                  View Details
                </div>
              </div>
            </div>
            <div className="text-white items-center bg-[#8B6B3D] box-border caret-transparent flex h-12 justify-center w-12 overflow-hidden rounded-[50%]">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-3.5 w-3.5">
                  <img
                    src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-5.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-full w-full"
                    style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(45%) saturate(500%) hue-rotate(330deg) brightness(110%) contrast(85%)' }}
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
